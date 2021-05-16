import tensorflow as tf

model = tf.keras.models.load_model('model/pixel_cnn')

model.summary()