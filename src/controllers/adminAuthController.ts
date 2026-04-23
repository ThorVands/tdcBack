import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/User';


export const adminLogin = async (req:Request, res:Response) =>{
    try{
        const { username, password } = req.body 
        const user = await UserModel.findOne({username})


        // Verifica se o username e a password estão corretos
        if(!user || user.role!=='Admin') return res.status(401).json({message:'Acesso Negado'});
        if(!bcrypt.compare(password,user.password)) return res.status(401).json({message:'Acesso Negado'});
        
        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET!,
            {expiresIn:'8h'}
        )

        return res.json({
            user:{
                id:user._id,
                username:user.username
            },
            token
        })
        
    }catch(err){
        console.log('Mas houve um erro')
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}