// eslint-disable-next-line import/no-extraneous-dependencies
const {defaults} = require('jest-config');

 module.exports = {
   ...defaults,
   moduleNameMapper: {
     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
       'identity-obj-proxy',
     '\\.(css|less|scss)$': 'identity-obj-proxy',
   },
 };
