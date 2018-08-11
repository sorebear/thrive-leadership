const config = {
  stripe: {
    apiKey: 'pk_live_inLaxt98ldJemderUnCMOlDT',
    apiUrl: '../.netlify/functions/createCharge',
    currency: 'USD',
  },
  email: {
    apiUrl: '../.netlify/functions/sendEmail',
    addresses: [
      'caitbaird@gmail.com',
    ]
  }
};

export default config;