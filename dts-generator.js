require('dts-generator').default({
  name: 'mui',
  project: '.',
  out: 'mui-d.d.ts',
  //files: ['styles/**/*.d.ts'],
  //exclude: ['**.*.d.ts'],
  verbose: true,
  sendMessage: function (msg) { console.log(msg) },
  //mask: 'mui/styles/'
});