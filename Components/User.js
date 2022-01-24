import React from "react";

var User = (function() {
var id=""
var name=""
var email=""
var height=""
var cweight=""
var gweight=""
var gender=""
var diet=""
var goal=""
var choice=""
var img=""
var recommend=[]
var e=[]
var getname=function(){return name}
var setname=function(n){name=n}

var getimg=function(){return img}
var setimg=function(n){img=n}

var getid=function(){return id}
var setid=function(n){id=n}

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

var getrecommend=function(){return recommend}
var setrecommend=function(n){recommend=n}

var getchoice=function(){return choice}
var setchoice=function(n){choice=n}

var gete=function(){return e}
var sete=function(n){e=n}
return{
getchoice:getchoice,
setchoice: setchoice,
gete:gete,
sete: sete,
getname:getname,
setname: setname,
setemail:setemail,
getemail:getemail,
getheight:getheight,
setheight:setheight,
getcweight:getcweight,
setcweight:setcweight,
setimg:setimg,
getimg:getimg,
setgoal:setgoal,
getgoal:getgoal,
setid:setid,
getid:getid,
setgweight:setgweight,
getgweight:getgweight,
getdiet:getdiet,
setdiet:setdiet,
getgender:getgender,
setgender:setgender,
getrecommend:getrecommend,
setrecommend:setrecommend

}
})();

export default User;