exports.handler = (event, context, callback) => {
  console.log('Does this log show up anywhere?');
  console.log('My Test Variable', process.env.TEST_VAR);
  callback(null, {
    statusCode: 200,
    body: 'Thrive Leadership Training',
  });
}