export const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://vizionrekognition2.herokuapp.com'
  && 'https://vizionrekognition2.herokuapp.com'
  : 'http://localhost:5000'