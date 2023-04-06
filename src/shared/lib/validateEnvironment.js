import isURL from 'validator/lib/isURL';

const validateEnvironment = ({ API_URL, name = API_URL }) => {
  // require_tld: false - allow localhost
  if (!isURL(API_URL, { require_tld: false })) {
    throw new Error(`${name} url is invalid`);
  }

  return true;
};

export default validateEnvironment;
