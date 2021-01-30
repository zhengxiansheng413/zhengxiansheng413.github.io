			function countDown(){				
				var time = document.getElementById("time");
				//alert(time.innerHTML);
				//获取到id为time标签中的内容，现进行判断
				if(time.innerHTML == 0){
					window.alert("计时结束,将返回原始计时状态")
					time.innerHTML=2000
                }
                else{
					time.innerHTML = time.innerHTML-1
				}
			}
			//1000毫秒调用一次
			window.setInterval("countDown()",1000);