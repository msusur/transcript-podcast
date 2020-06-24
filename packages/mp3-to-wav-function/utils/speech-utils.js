const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();

module.exports.createSpeechRequest = async request => {
  console.log(`making request for ${JSON.stringify(request)}`);
  const [operation] = await client.longRunningRecognize(request);
  const [response] = await operation.promise();
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  return transcription;
};
