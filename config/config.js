exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'http://vizionrekognition.herokuapp.com'
  : 'http://localhost:3000'