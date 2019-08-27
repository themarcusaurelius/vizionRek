export const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://vizionrekognition.herokuapp.com'
  : 'http://localhost:5000'