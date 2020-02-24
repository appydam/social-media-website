const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// we need to tell passport to use this local strategy
// authentication using passport  
passport.use(new LocalStrategy({
    usernameFeild : 'email'
    },
    function(email , password , done ){
        // find the user and estabilish the identity
        User.findOne({email:email}, function(err,user){  // the second email writen is the email we passed above
            if(err){
                console.log('error in finding user --> passport');
                return done(err); 
        }
        if(!user || user.password != password){
            console.log('invalid username/password');
            return done(null,false); // authentication is false
        }
        // if the user found
        return done(null,user);

        });
    }
    
));


// serialise the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);  // cookie bana di , find the id and send it to the cookie and cookie send to the browser
})




// deserialising the user form the key in the cookies  , whixh user is signed in and making the request
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
       if(err){
        console.log('error in finding user --> passport');
        return done(err); 
       } 

       // null - becoz no error is there , user - becoz user is found
       return done(null,user);
    })
})


module.exports = passport;