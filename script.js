document.getElementById('displayArea').style.width = (window.innerWidth-20)+"px";
document.getElementById('displayArea').style.height = (window.innerHeight-150)+"px";
var radiusArray = ['0%','50%','50%'];
var startTime = new Date().getTime();
var width,height,color,radius,left,topval;
function getRandomColor (){
  var letters = '0123456789ABCDEF'.split('');
  var color = "#";
  for (var i = 0;i < 6;i++){
    color += letters[random(0,letters.length)];
  }
  return color
}
function random(min,max){
  return Math.floor(Math.random()*max)+min;
}
function timer(startTime){
  var currentTime = new Date().getTime();
  return (currentTime - startTime)/1000;
}
function initObject(){
  width = random (50,100);
  height = width;
  color = getRandomColor();
  radius = radiusArray[random(0,2)];
  maxleft = document.getElementById('displayArea').offsetWidth - width;
  maxdown = document.getElementById('displayArea').offsetHeight - height;
  left = random(0,maxleft);
  topval = random(0,maxdown);
  document.getElementById('object').style.width = width + "px";
  document.getElementById('object').style.height = height + "px";
  document.getElementById('object').style.backgroundColor = color;
  document.getElementById('object').style.borderRadius = radius;
  document.getElementById('object').style.top = topval + "px";
  document.getElementById('object').style.left = left + "px";
}
initObject();
document.getElementById('object').onclick = function () {
  initObject();
  document.getElementById('time').innerHTML = timer(startTime)+"s";
  startTime = new Date().getTime();
}
