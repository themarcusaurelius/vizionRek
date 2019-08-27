exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://vizionrekognition.herokuapp.com'
  : 'http://localhost:3000'