const {
  downloadFile,
  uploadToBucket,
  getBucket
} = require('../utils/storage-utils');
const { extractAudio } = require('../utils/ffmpeg-utils');

module.exports = async fileName => {
  const bucket = await getBucket('sound-storage-bucket-alfa');
  try {
    console.log('Downloading the file');
    const mp3File = bucket.file(fileName);
    const fileInfo = await downloadFile(mp3File, fileName);
    const flacOutput = await extractAudio(fileInfo);
    console.log(
      `Uploading ${flacOutput.destination.temp.audio} to flac bucket`
    );
    return await uploadToBucket(bucket, flacOutput.destination.temp.audio);
  } catch (err) {
    return Promise.reject(err);
  }
};
