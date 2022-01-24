import React from "react";

var ExcersiseStore = (function() {

var title=""
var email=""
var reps=0
var date=0
var img=""
var code=0

var gettitle=function(){return title}
var settitle=function(n){title=n}

var getemail=function(){return email}
var setemail=function(n){email=n}

var getreps=function(){return reps}
var setreps=function(n){reps=n}

var getdate=function(){return date}
var setdate=function(n){date=n}

var getimg=function(){return img}
var setimg=function(n){img=n}

var getcode=function(){return code}
var setcode=function(n){code=n}

return{
gettitle:gettitle,
settitle: settitle,
setemail:setemail,
getemail:getemail,
getcode:getcode,
setcode:setcode,
getreps:getreps,
setreps:setreps,
setimg:setimg,
getimg:getimg,
setdate:setdate,
getdate:getdate,

}
})();

export default ExcersiseStore;