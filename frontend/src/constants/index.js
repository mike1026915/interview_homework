
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const URL_HOST = IS_PRODUCTION? 'https://pleacement-io-interview.herokuapp.com' : 'http://localhost:3000'