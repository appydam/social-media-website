module.exports.home = function(req, res){
    console.log(req.cookies);  // display the cookies, key and value
    res.cookie('user_id',25);  // changes cookie value , user_id is cookie name
    return res.render('home', {      // 'home' is ejs file
        title: "Home"
    });
}


// module.exports.actionName = function(req, res){}