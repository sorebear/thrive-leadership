exports.handler = (event, context, callback) => {
  console.log('Does this log show up anywhere?');
  callback(null, {
    statusCode: 200,
    body: 'Thrive Leadership Training',
  });
}