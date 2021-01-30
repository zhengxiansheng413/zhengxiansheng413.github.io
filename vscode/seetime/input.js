var i=0
var result, input
function record(){
i++
result = document.getElementById("time").innerHTML
input = document.getElementById("input").value
document.getElementById("time").innerHTML=input*60
}
function f(a){
    var obj = document.getElementById(a);
    if(obj.style.display=="none"){
    obj.style.display = "";  
    }
}