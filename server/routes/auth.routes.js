const Router = require ("express") //import Router from Exp
const User = require ("../models/user") //import user model
const router = new Router() // create router obj
const bcrypt = require ('bcryptjs')
const {check, validationResult} = require('express-validator')

router.post('/registration', 
    [
        check('email', "Incorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],
    async (req,res) => {  // 1st method by ../resitsration URL
    try{
        console.log(req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Incorrect request", errors})
        }

        const {email, password} = req.body // get the email and password from the response body
        const candidate = await User.findOne({email})

        if(candidate) {
            return res.status(400).json({message:`User with email ${email} already exists`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashPassword})
        await user.save()
        return res.json({message: "User was created"})

    } catch(e){
        console.log(e)
        res.send({message: "Server error"}) // show the error in log and send the message
    }
})

module.exports = router 