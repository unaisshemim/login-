const express=require('express')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 5002

const user={
    email:'admin@gmail.com',
    password:"123456"
}

app.post("/login",async(req,res)=>{
    const {email,password}= await req.body
    console.log(password)
try {
    if(email===user.email && password===user.password){

        res.status(200).json("login success")
    }else{
        res.status(400).json("wrong password or email")
    }
    
    console.log(user)
    
} catch (error) {
    res.status(400).json("wrong password")
}
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})