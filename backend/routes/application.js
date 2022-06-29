var express = require('express');

var router = express.Router();
const User = require("../models/user");



router.get('/user', (req, res, next) => {

    res.send("Hello Login - User!");

    next();

});


//save user method start

router.post("/student", (req, res, next) => {
    console.log(' save  method start.. 1');
    const userData = new User({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        emailId: req.body.emailId,
        Mobilenumber: req.body.Mobilenumber,
        address: req.body.address,
    });
    
    userData.save().
        then(result => {
            res.status(201).json({
                message: "User added successfully",
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({ message: err.toString() });
        });
     
});
//save user method end

//get or search method start
router.get("/student", (req, res, next) => {
    console.log('getUsers --- Start 1');
    User.find().then(documents => {
        console.log('getUsers --- Start 2');
        res.json(
            documents
        );
        console.log('getUsers --- Start 3');
    });
});
//end get search method


//delete method start 
// using this method to delete the user 
router.delete("/student/:Firstname", (req, res, next) => {
    console.log(' delete 1 ' + req.params.id); 
    User.deleteOne({ Firstname: req.params.Firstname }).
        then(result => { 
            console.log('result : ' + result.toString());
            if (result.nModified > 0) { 
                console.log('delete --- Start 3');
                res.status(201).json({
                    message: "User deleted successfully",
                    result: result
                }); 
            }
            else {
                console.log('Post --- Start 4');
                res.status(400).json({
                    message: "User delete failed",
                    result: result
                });  
            }
        })
        .catch(err => { 
            console.log('Error occured.. ' + err); 
            res.status(500).json({ error: err }); 
        });
});
//delete method end


//update method start 

router.put("/student/:FirstName", (req, res, next) => {
    let fetchedUser;
    console.log(' update user 1 ' + req.body.FirstName);
     const userData = new User({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        emailId: req.body.emailId,
        Mobilenumber: req.body.Mobilenumber,
        address: req.body.address,
    });
    console.log(' update user  occured.. 2 =  ' + user);
    User.updateOne({ FirstName: req.params.FirstName}, user).
        then(result => { 
            console.log('result : ' + result.toString()); 
            if (result.nModified > 0) {  
                User.findOne({ FirstName: req.body.FirstName })
                    .then(user => {
                        fetchedUser = user;
                    }); 
                console.log('update user  --- Start 3');
                res.status(201).json({
                    message: "User updated successfully",
                    result: result,
                    user: fetchedUser
                }); 
            }
            else {
                console.log('Post --- Start 4');
                res.status(400).json({
                    message: "User updated failed",
                    result: result
                }); 
            }
        })
        .catch(err => { 
            console.log('Error occured.. ' + err);  
            res.status(500).json({ message: err.toString() }); 
        });
});
//update method end




module.exports = router;