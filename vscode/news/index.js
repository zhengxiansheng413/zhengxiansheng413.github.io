var lookloat=document.getElementById("movies");
var like=document.getElementById("img");
var see=document.getElementById("box");
function button(){
    movies.id='movienew';
    img.id='img2';
    box.id='box2';
    document.getElementById("btn").href = 'javascript:button2()';
}
function button2(){
    movienew.id='movies';
    img2.id='img';
    box2.id='box';
    document.getElementById("btn").href = 'javascript:button()';
}