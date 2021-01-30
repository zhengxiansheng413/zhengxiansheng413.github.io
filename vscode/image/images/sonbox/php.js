window.onload = function() { 
    var show1 = document.getElementById("show1");
    var show2 = document.getElementById("show2");
    var show3 = document.getElementById("show3");
    var show4 = document.getElementById("show4");
    var show5 = document.getElementById("show5");
    var show6 = document.getElementById("show6");
    setInterval(function() {  
    var time = new Date();  // 程序计时的月从0开始取值后+1  
    var g= time.getFullYear();
    var m = time.getMonth() + 1;  
    var r= time.getDate();
    var h= time.getHours();
    var s= time.getMinutes();
    var t= time.getSeconds();
    show1.innerHTML = g;
    show2.innerHTML = m;
    show3.innerHTML = r;
    show4.innerHTML = h;
    show5.innerHTML = s;
    show6.innerHTML = t;

    }, 1000); 
    };
    function display(){
    var one=document.getElementById('ul');  
    var btn=document.getElementById('btn');
        if(one.style.display=="none"){  
            one.style.display="";
              btn.innerHTML="点击收起";
        }
        else{  
            one.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function displayt(){
    var btn=document.getElementById('btnt');
    var two=document.getElementById('ult');  
        if(two.style.display=="none"){  
            two.style.display="";
            btn.innerHTML="点击收起";
        }
        else{  
            two.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function displayr(){
    var btn=document.getElementById('btnr');
    var three=document.getElementById('ulr');  
        if(three.style.display=="none"){  
            three.style.display="";
            btn.innerHTML="点击收起";
        }
        else{  
            three.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function displayf(){
    var btn=document.getElementById('btnf');
    var four=document.getElementById('ulf');  
        if(four.style.display=="none"){  
            four.style.display="";
            btn.innerHTML="点击收起";
        }
        else{  
            four.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function displayo(){
    var btn=document.getElementById('btno');
    var five=document.getElementById('ulo');  
        if(five.style.display=="none"){  
            five.style.display="";
            btn.innerHTML="点击收起";
        }
        else{  
            five.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function displays(){
    var btn=document.getElementById('btns');
    var six=document.getElementById('uls');  
        if(six.style.display=="none"){  
            six.style.display="";
            btn.innerHTML="点击收起";
        }
        else{  
            six.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function displaye(){
    var btn=document.getElementById('btne');
    var seven=document.getElementById('ule');  
        if(seven.style.display=="none"){  
            seven.style.display="";
            btn.innerHTML="点击收起";
        }
        else{  
            seven.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function displayg(){
    var btn=document.getElementById('btng');
    var eight=document.getElementById('ulg');  
        if(eight.style.display=="none"){  
            eight.style.display="";
            btn.innerHTML="点击收起";
        }
        else{  
            eight.style.display="none"; 
            btn.innerHTML="点击展开"; 
}  
}
function home(){
    window.location.href="../user.html"
}

