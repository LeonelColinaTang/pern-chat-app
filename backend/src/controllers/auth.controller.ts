import {Request, Response} from 'express';
import prisma from '../db/prisma.js';
import bcryptjs from 'bcryptjs';
import generateToken from '../utils/generateToken.js';


// avatar-placeholder.iran.liara.run
export const signup = async (req: Request, res: Response) => {
    
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({error: "Please fill in all fields"});
        }

        if(password !== confirmPassword){
            return res.status(400).json({error: "passwords don't match"});
        }

        const user = await prisma.user.findUnique({ where: {username}});

        if(user){
            return res.status(400).json({error: "Username already exists"});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === "male" ? boyAvatar : girlAvatar
            }
        });

        if(newUser){
            generateToken(newUser.id, res);

            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        }else{
            res.status(400).json({ error: "Invalid user data"})
        }
        

    } catch (error:any){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }

};
    
export const login = async (req: Request, res: Response) =>{
    try{
        const {username, password} = req.body;
        const user = await prisma.user.findUnique({where: {username}});

        if(!user){
            return res.status(400).json({error: "Invalid credentials"});

            }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({error: "Email or password invalid"});
        }

        generateToken(user.id, res);

        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    }catch(error:any){
        console.log("Error in the login controller ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const logout = async (req: Request, res: Response) => {
    try{
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({ message: "Logged Out Successfully"});
    }catch(error: any){
        console.log("Error in logout controler ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }

};
        
export const getMe = async (req: Request, res: Response) =>{
    try{
        const user = await prisma.user.findUnique({where: {id: req.user.id}});

        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        res.status(200).json({
            id: user.id,
            fullName: user.fullName, 
            username: user.username,
            profilePic: user.profilePic
        });
    }catch(error: any){
        console.log("Error in getMe controller ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}