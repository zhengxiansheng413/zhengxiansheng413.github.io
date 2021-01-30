function divShow1(){
 window.location.replace('../news/index.html')
}
  function divShow2(){
   window.location.replace( 'images/php.html');
}
    function divShow3(){
  window.location.replace('http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=Tyc7IiMlPCw8PA8pIDciLiYjYSwgIg');
}
      function divShow4(){
        var arr = [1,2,3];
        var result = [];
            if(arr.length ===0 ){
                arr=result;
                result = [];
            }
            var num = arr.splice(Math.floor(Math.random()*arr.length),1);
            result = num.concat(result);
            alert("选取完毕，最终结果请点击确定查看，你的幸运数字是"+result[0]);
            var  luckyNum = result[0];
            //alert(luckyNum);
            if(luckyNum==1){
                window.location.replace('../news/index.html');
            }
            else if(luckyNum==2){
                window.location.replace( 'images/php.html');          
            }
            else if(luckyNum==3){
                window.location.replace('http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=Tyc7IiMlPCw8PA8pIDciLiYjYSwgIg');
            }   
          }
 