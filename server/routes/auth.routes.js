const Router = require ("express") 
const User = require ("../models/user") 
const router = new Router()  
const bcrypt = require ('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const authMiddleware = require("../middleware/auth.middleware")

 router.post('/registration', 
     [
         check('userName', "Username must be 3 to 12 characters").isLength({min:3, max:12}),
         check('email', "Incorrect email").isEmail(),
         check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
     ],
     async (req,res) => {  
     try{
         const errors = validationResult(req)
         if (!errors.isEmpty()) {
             return res.status(400).json({message: "Incorrect request", errors})
         }

         const {userName, email, password} = req.body  
         const candidate = await User.findOne({
            $or: [
                {userName: new RegExp(`^${loginValue}$`, 'i')}, 
                {email: new RegExp(`^${loginValue}$`, 'i')}
            ]
        })

         if(candidate) {
             return res.status(400).json({message:`User with email ${email} or user name ${userName} already exists`})
         }
         const hashPassword = await bcrypt.hash(password, 8)
         const user = new User({userName, email, password: hashPassword})
         await user.save()
         return res.json({message: "User was created"})

     } catch(e){
         console.log(e)
         res.send({message: "Server error"})  
     }
  })

  router.post('/login', 
    async (req,res) => {  
    try{
        const {userName, email, password} = req.body
        const loginValue = (userName || email).trim()

        const user = await User.findOne({
            $or: [
                {userName: new RegExp(`^${loginValue}$`, 'i')}, 
                {email: new RegExp(`^${loginValue}$`, 'i')}
            ]
        }) 
        if(!user) {
            return res.status(404).json({message:"User not found"})
        }  
        
        const isPassValid = bcrypt.compareSync(password, user.password)  
        if(!isPassValid){
            return res.status(400).json({message:"Invalid password"})
        }

        const token = jwt.sign({id:user.id}, config.get('secretKey'), {expiresIn:"1h"})
        return res.json({
            token,
            user:{
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })

    } catch(e){
        console.log(e)
        res.send({message: "Server error"})  
    }
 })

 router.get('/auth', authMiddleware,
    async (req,res) => {  
    try{
        const user = await User.findOne({_id:req.user.id })
        const token = jwt.sign({id:user.id}, config.get('secretKey'), {expiresIn:"1h"})
        return res.json({
            token,
            user:{
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })

    } catch(e){
        console.log(e)
        res.send({message: "Server error"})  
    }
 })
  module.exports = router 