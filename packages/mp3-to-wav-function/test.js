const { convertToWav } = require('./index');
// Test the mp3
// convertToWav({
//   bucket: 'sound-storage-bucket-alfa',
//   contentLanguage: 'en',
//   contentType: 'audio/mpeg',
//   crc32c: 'ua4ZyA==',
//   etag: 'CISCvN6RuuECEAE=',
//   generation: '1554508044763396',
//   id: 'sound-storage-bucket-alfa/canli-sistemler-kesit.mp3/1554508044763396',
//   kind: 'storage#object',
//   md5Hash: 'wDBKEXgP72BW87+qMCHTxg==',
//   mediaLink:
//     'https://www.googleapis.com/download/storage/v1/b/sound-storage-bucket-alfa/o/canli-sistemler-kesit.mp3?generation=1554508044763396&alt=media',
//   metageneration: '1',
//   name: 'canli-sistemler-kesit.mp3',
//   selfLink:
//     'https://www.googleapis.com/storage/v1/b/sound-storage-bucket-alfa/o/canli-sistemler-kesit.mp3',
//   size: '267909',
//   storageClass: 'REGIONAL',
//   timeCreated: '2019-04-05T23:47:24.763Z',
//   timeStorageClassUpdated: '2019-04-05T23:47:24.763Z',
//   updated: '2019-04-05T23:47:24.763Z'
// });

// Test the flac
convertToWav({
  bucket: 'sound-storage-bucket-alfa',
  contentType: 'audio/x-flac',
  crc32c: 'TltChQ==',
  etag: 'CJOTr8iYuuECEAE=',
  generation: '1554509877463443',
  id: 'sound-storage-bucket-alfa/canli-sistemler-kesit.flac/1554509877463443',
  kind: 'storage#object',
  md5Hash: 'GONHqh2iOeBFUR6FBxiAoQ==',
  mediaLink:
    'https://www.googleapis.com/download/storage/v1/b/sound-storage-bucket-alfa/o/canli-sistemler-kesit.flac?generation=1554509877463443&alt=media',
  metageneration: '1',
  name: 'canli-sistemler-kesit.flac',
  selfLink:
    'https://www.googleapis.com/storage/v1/b/sound-storage-bucket-alfa/o/canli-sistemler-kesit.flac',
  size: '923182',
  storageClass: 'REGIONAL',
  timeCreated: '2019-04-06T00:17:57.463Z',
  timeStorageClassUpdated: '2019-04-06T00:17:57.463Z',
  updated: '2019-04-06T00:17:57.463Z'
});
