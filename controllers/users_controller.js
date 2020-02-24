const User = require('../models/user');


module.exports.profile = function(req, res){
    // res.end('<h1>User Profile</h1>');
    // return res.render('user_profile',{
    //     title:"user-profile"
    // });
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user_profile',{
                        title:"user profile",
                        user:user
                    }); 
            }
                return res.redirect('/users/sign-in');
            
        })
    }else{
        return res.redirect('/users/sign-in');
    }
}

// render sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"codial | Sign up"
    })
}
// render sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"codial | Sign in"
    })
}

// get sign up data
module.exports.create = function(req,res){

    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({ email:req.body.email } ,  function(err,user){
            if(err){ console.log('error in finding user signing up'); return; }

            if(!user){   // when user is not found
                User.create(req.body,function(err,user){
                    if(err){ console.log('error in creating user while signing up'); return; }

                    return res.redirect('/users/sign-in');
                })
            }else{
                 return res.redirect('back');
            }
    })
    
}

// sign in and create a session for the user
module.exports.createSession = function(req,res){


    return res.redirect('/');


 

}

// signing out
module.exports.deleteSession = function(req,res){
   
}

