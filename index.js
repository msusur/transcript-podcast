// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

const fileName =
  '/Users/mertsusur/Downloads/Acik-kaynak-kodlu-projeler-edited.mp3';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

ffmpeg(fileName)
  .toFormat('wav')
  .on('error', err => {
    console.log('An error occurred: ' + err.message);
  })
  .on('progress', progress => {
    // console.log(JSON.stringify(progress));
    console.log('Processing: ' + progress.targetSize + ' KB converted');
  })
  .on('end', () => {
    console.log('Done.');

    // Reads a local audio file and converts it to base64
    const file = fs.readFileSync('./track.wav');
    const audioBytes = file.toString('base64');
    console.log('Loaded the new file and converted to base64');

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
      content: audioBytes
    };
    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'tr-TR'
    };
    const request = {
      audio: audio,
      config: config
    };

    console.log('Uploading');
    // Detects speech in the audio file
    recognise(request);
  })
  .save('./track.wav');

const recognise = async request => {
  const client = new speech.SpeechClient();

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
  } catch (e) {
    console.log(e);
  }
};
