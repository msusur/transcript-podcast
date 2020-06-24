const { mp3ToWavProcessor, transcriptAudioProcessor } = require('./processors');

module.exports.convertToWav = event => {
  return Promise.resolve().then(() => {
    console.log(`Event captured for '${JSON.stringify(event)}'`);
    if (event.name.endsWith('.mp3')) {
      return mp3ToWavProcessor(event.name);
    } else if (event.name.endsWith('.flac')) {
      return transcriptAudioProcessor(event.name);
    }
    throw new Error(`File format not recognised: '${event.name}'`);
  });
};
