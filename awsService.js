const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/15a2e207511a420abdde142f65d183731f8a971988c82e7cc7a69243ad29ed6f-private.pem.key',
  certPath: './awsCerts/15a2e207511a420abdde142f65d183731f8a971988c82e7cc7a69243ad29ed6f-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'a3sbsyo9x40y9s-ats.iot.us-east-1.amazonaws.com',
  clientId: 'semaphore01',
  region: 'us-east-1',
});



module.exports = { device };
