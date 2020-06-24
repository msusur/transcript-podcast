const fs = require('fs');
const path = require('path');
const {
  downloadFile,
  getBucket,
  getFilePathFromFile
} = require('../utils/storage-utils');
const { createSpeechRequest } = require('../utils/speech-utils');

module.exports = async fileName => {
  console.log(`Making request for ${JSON.stringify(fileName)}.`);
  const bucket = await getBucket('sound-storage-bucket-alfa');
  const flacFileInBucket = bucket.file(fileName);
  const filePath = getFilePathFromFile(flacFileInBucket);

  console.log(`Located the file at '${JSON.stringify(filePath)}'.`);

  const request = {
    config: {
      enableWordTimeOffsets: true,
      languageCode: 'tr-TR',
      encoding: 'FLAC',
      sampleRateHertz: 44100
    },
    audio: {
      uri: filePath
    }
  };

  const transcription = await createSpeechRequest(request);
  const transcriptionData = JSON.stringify(transcription);
  console.log('result: ', transcriptionData);
};
