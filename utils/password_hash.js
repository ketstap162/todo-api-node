const crypto = require('crypto');

function hashPassword(password){
  return crypto.createHash('sha256').update(password).digest('hex');
};

function comparePassword(password, user_password){
  return (hashPassword(password) === user_password)
};

// const password = 'supersecretpassword';
// const hashedPassword = hashSHA256(password);

// console.log('Original Password:', password);
// console.log('SHA-256 Hashed Password:', hashedPassword);

module.exports = {hashPassword, comparePassword};
