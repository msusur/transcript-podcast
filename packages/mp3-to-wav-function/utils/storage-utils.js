const path = require('path');
const { Storage } = require('@google-cloud/storage');

module.exports.getFilePathFromFile = storageFile => {
  return `gs://${storageFile.bucket.name}/${storageFile.name}`;
};

module.exports.getBucket = async bucketName => {
  const storage = new Storage();
  return storage.bucket(bucketName);
};

module.exports.downloadFile = async (file, fileName) => {
  console.log('Download started for ' + fileName);
  let sourcePath = path.parse(fileName);
  return new Promise((resolve, reject) => {
    let tempDestination = '/tmp/' + fileName;
    file
      .download({
        destination: tempDestination
      })
      .then(error => {
        console.log('Download is done ' + error);
        if (error.length > 0) {
          reject(error);
        } else {
          resolve({
            source: {
              name: sourcePath.name,
              ext: sourcePath.ext
            },
            destination: { temp: { video: tempDestination } }
          });
        }
      });
  });
};

module.exports.uploadToBucket = async (bucket, filepath) => {
  return bucket
    .upload(filepath)
    .then(() => {
      console.log(`${filepath} uploaded to bucket.`);
      return Promise.resolve('resolve');
    })
    .catch(err => {
      console.error('ERROR:', err);
      return Promise.reject(err);
    });
};
