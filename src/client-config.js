const config = {
  stripe: {
    apiKey: 'pk_test_kze3wkMOtLWSPfXfT7UxVWJR',
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