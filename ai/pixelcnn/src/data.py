import tensorflow as tf
import tensorflow_datasets as tfds


def binarize(image, label):
    image = tf.cast(image, tf.float32)
    image = tf.math.round(image/255.0)
    return image, tf.cast(image, tf.int32)


def get_data():
    (ds_train, ds_test), ds_info = tfds.load('mnist', split=['test', 'test'], shuffle_files=True, as_supervised=True, with_info=True)

    ds_train = ds_train.map(binarize)
    ds_train = ds_train.cache()
    ds_train = ds_train.shuffle(ds_info.splits['train'].num_examples)
    ds_train = ds_train.batch(64)

    ds_test = ds_test.map(binarize).batch(64).cache().prefetch(64)

    return ds_train, ds_test