import db from '../models/index.js';
import bcrypt from 'bcrypt'

const User = db.users;


async function loginValidate (req,res,next){
    console.log(req.body);
    try {
        const user = await User.findByPk(req.body.username)
        if(!user){
           return res.status(401).json({message : 'user not found'})
        }
        if(await bcrypt.compare(req.body.password,user.password)){
            console.log('verified');
            next()
        } else {
            return res.status(400).json({message : 'Invalid password'})
        }

    } catch (error) {
        res.status(500).json({message : 'internal server error'});        
    }
}

export {loginValidate}