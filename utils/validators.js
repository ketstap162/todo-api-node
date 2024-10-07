function emailValidation(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

function validateEmail(req, res, email) {
    if (!(emailValidation(email))){
        return res.status(400).json({message: 'Wrong email data'});
    };
};

function validatePassword(req, res, password){
    if (!((typeof password !== "string") && (password.length < 8) && (password.length > 16))){
      return true;
    };
    return false
};

module.exports = {validateEmail, validatePassword};
