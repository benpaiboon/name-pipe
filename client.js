const net = require('net');

// const PIPE_NAME = "Jarvis_Communication_Pipe";
// const PIPE_NAME = "Pipe.Server";
const PIPE_NAME = "decideelectron";
const PIPE_PATH = "\\\\.\\pipe\\" + PIPE_NAME;

// == Client part == //
const client = net.connect(PIPE_PATH, () => {
  console.log('Client connected.');
  const testBuf = Buffer.from("ben connected");
  client.write(testBuf);
});

client.on('error', err => {
  if (err) {
    console.log(err)
  }
})

client.on('data', (data) => {
  console.log('Default Data: ', data)
  console.log('Convert to string: ', data.toString())

  // Response to server
  const buf = Buffer.from("This is data from ben.");
  client.write(buf)
});

client.on('end', () => {
  console.log('Client disconnected.');
})