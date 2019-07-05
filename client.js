const net = require('net');

const PIPE_NAME = "Jarvis_Communication_Pipe";
const PIPE_PATH = "\\\\.\\pipe\\" + PIPE_NAME;

// == Client part == //
const client = net.connect(PIPE_PATH, () => {
  console.log('Client connected');
}).on('error', err => {
  if (err) {
    console.log('Can not connect!')
  }
})


client.on('data', (data) => {
  console.log(data.toString())
  // console.log('Client: on data:', data.toString());
  // console.log('========================================')
  // client.end('Hi Server (sent from client)');
});

// client.on('error', err => {
//   if (err) {
//     console.log('can not connect!')
//   }
// })

// client.on('end', () => {
//   console.log('Client: on end');
// })