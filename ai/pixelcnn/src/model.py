import numpy as np
import tensorflow as tf
from tensorflow.keras import models
from tensorflow.keras import layers


class MaskedConv2D(layers.Layer):
    def __init__(self, mask_type, kernel, filters):
        super(MaskedConv2D, self).__init__()
        self.kernel = kernel
        self.filters = filters
        self.mask_type = mask_type

    # this only runs once
    def build(self, input_shape):
        self.w = self.add_weight(
            shape=[
                self.kernel,
                self.kernel,
                input_shape[-1],
                self.filters
            ],
            initializer='glorot_normal',
            trainable=True,
            name='w'
        )

        self.b = self.add_weight(
            shape=(self.filters,),
            initializer='zeros',
            trainable=True,
            name='b'
        )

        # create our mask
        mask = np.ones(self.kernel**2, dtype=np.float32)
        center = len(mask)//2

        # next pixels
        mask[center+1:] = 0

        # current pixel, only for first layer, called a "type A mask"
        if self.mask_type == 'A':
            mask[center] = 0

        mask = mask.reshape((
            self.kernel,
            self.kernel,
            1,
            1,
        ))

        #
        self.mask = tf.constant(mask, dtype='float32')

    def call(self, inputs):
        masked_w = tf.math.multiply(self.w, self.mask)
        output = tf.nn.conv2d(inputs, masked_w, 1, "SAME") + self.b
        return output


class ResidualBlock(layers.Layer):
    def __init__(self, h=32):
        super(ResidualBlock, self).__init__()
        self.forward = models.Sequential([
            MaskedConv2D('B', kernel=1, filters=h),
            MaskedConv2D('B', kernel=3, filters=h),
            MaskedConv2D('B', kernel=1, filters=2*h),
        ])

    def call(self, inputs):
        x = self.forward(inputs)
        return x + inputs


def SimplePixelCnn(hidden_features, output_features, resblock_num):
    inputs = layers.Input(shape=[28, 28, 1])

    x = inputs
    x = MaskedConv2D('A', kernel=7, filters=2 * hidden_features)(x)

    for _ in range(resblock_num):
        x = ResidualBlock(hidden_features)(x)

    x = layers.Conv2D(output_features, (1, 1), padding='same', activation='relu')(x)
    x = layers.Conv2D(1, (1, 1), padding='same', activation='sigmoid')(x)

    return tf.keras.Model(inputs=inputs, outputs=x, name='PixelCnn')
