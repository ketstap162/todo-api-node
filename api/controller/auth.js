const { User } = require('../../db/model');
const {hashPassword, comparePassword} = require('../../utils/password_hash')
const {validateEmail, validatePassword} = require('../../utils/validators')

class authController{
    async registration(req, res, next){
        // res.json('registration');

        const {email, password} = req.body;

        try{
            validateEmail(req, res, email);
            validatePassword(req, res, password);
        } catch (error){
            return res.status(400).json({
                message: error
            })
        };
        
        

        const user = await User.findOne({where: {email: email}});

        if (user){
            return res.status(400).json({
                message: 'User is exist'
            });
        };

        const hashedPassword = hashPassword(password);

        try {
            const newUser = await User.create({
              email: email,
              password: hashedPassword,
            });
            
            return res.status(201).json({
                message: 'User created',
                user: newUser,
            });
          } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Error creating user' });
          }

        
    };

    async login(req, res, next){
        const {email, password} = req.body;

        validateEmail(req, res, email);
        validatePassword(req, res, password);

        const user = await User.findOne({where: {email: email}});
  
        if (!user){
            return res.status(400).json({
                message: 'Wrong email or password'
            });
        };

        if (comparePassword(password, user.password)){
            res.status(200).json({message: 'Login succesful'})
        }

    };

    async getUsers(req, res, next){
        res.json('getUsers');
    };
};

module.exports = new authController();
