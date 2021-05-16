import os
import gensim
import subprocess
from keras.utils import get_file

MODEL = 'GoogleNews-vectors-negative300.bin'

path = get_file(MODEL + '.gz',    'https://s3.amazonaws.com/dl4j-distribution/%s.gz' % MODEL)

unzipped = os.path.join('generated', MODEL)

if not os.path.isfile(unzipped):
    with open(unzipped, 'wb') as fout:
        zcat = subprocess.Popen(['zcat'], stdin=open(path), stdout=fout)
        zcat.wait()

model = gensim.models.KeyedVectors.load_word2vec_format(unzipped, binary=True)

print(model.most_similar(positive=['espresso']))