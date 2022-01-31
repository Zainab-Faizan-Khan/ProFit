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
var water=0
var recommend=[]
var e=[]
var dat=""
var d=[0,0,0,0,0,0,0]
var fno=0

var getname=function(){return name}
var setname=function(n){name=n}


var getimg=function(){return img}
var setimg=function(n){img=n}



var getfno=function(){return fno}
var setfno=function(n){fno=n}

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

var getwater=function(){return water}
var setwater=function(n){water=n}

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

var getdat=function(){return dat}
var setdat=function(n){dat=n}
var getdatap=function(){return d}
var getdates=function(i){return d[i]}
var setdates=function(n,i){d[n]=i}
return{
getdatap:getdatap,
getdat:getdat,
setdat:setdat,
getchoice:getchoice,
setchoice: setchoice,

gete:gete,
sete: sete,
setwater:setwater,
getwater:getwater,
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
setrecommend:setrecommend,
getdates:getdates,
setdates:setdates,
getfno:getfno,
setfno:setfno,
}
})();

export default User;