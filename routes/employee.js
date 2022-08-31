const express = require('express')
const router = express.Router()

const employeeController = require("../controllers/employee");

router.get('/',(req,res,next)=>{
    res.send("From API Routes")
})

router.post('/register',employeeController.registerEmployee);
router.post('/login',employeeController.loginEmployee);

module.exports = router

