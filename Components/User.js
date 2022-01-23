import React from "react";

var User = (function() {

var name=""
var email=""
var height=""
var cweight=""
var gweight=""
var gender=""
var diet=""
var goal=""

var getname=function(){return name}
var setname=function(n){name=n}

var getemail=function(){return email}
var setemail=function(n){email=n}

var getheight=function(){return height}
var setheight=function(n){height=n}

var getcweight=function(){return cweight}
var setcweight=function(n){cweight=n}

var getgoal=function(){return goal}
var setgoal=function(n){goal=n}

var getgweight=function(){return gweight}
var setgweight=function(n){gweight=n}

var getdiet=function(){return diet}
var setdiet=function(n){diet=n}

var getgender=function(){return gender}
var setgender=function(n){gender=n}

return{
getname:getname,
setname: setname,
setemail:setemail,
getemail:getemail,
getheight:getheight,
setheight:setheight,
getcweight:getcweight,
setcweight:setcweight,
setgoal:setgoal,
getgoal:getgoal,
setgweight:setgweight,
getgweight:getgweight,
getdiet:getdiet,
setdiet:setdiet,
getgender:getgender,
setgender:setgender

}
})();

export default User;