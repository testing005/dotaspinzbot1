var express=require('express');
var app=express();
var server=app.listen(process.env.PORT || 6000,function(){
	console.log("listening on port 5000");
});

var request=require('request');

var timer=setInterval(function(req,res){
   var botno=Math.floor(Math.random()*4)+1;

   if(botno==1)
   	 {
   	 	request.get("https://dotaspinzbot1.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error+" 1");
   	 		}else if(body){
   	 			console.log(body+" 1");
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response+" 1");
   	 		   }
   	 	});

         request.get("https://wakeupbot.herokuapp.com/",function(error,response,body){
            if(error){
               console.log("requested myself to avoid sleep");
            }else if(body){
               console.log("requested myself to avoid sleep");
            }else if(response){
               console.log("requested myself to avoid sleep");
            }
         })

   	 }else if(botno==2)
   	 {
   	 	request.get("https://dotaspinzbot2.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error+" 2");
   	 		}else if(body){
   	 			console.log(body+" 2");
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response+" 2");
   	 		   }
   	 	});

         request.get("https://wakeupbot.herokuapp.com/",function(error,response,body){
            if(error){
               console.log("requested myself to avoid sleep");
            }else if(body){
               console.log("requested myself to avoid sleep");
            }else if(response){
               console.log("requested myself to avoid sleep");
            }
         })

       }else if(botno==3)
   	 {
   	 	request.get("https://dotaspinzbot3.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error+" 3");
   	 		}else if(body){
   	 			console.log(body+" 3");
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response+" 3");
   	 		   }
   	 	});
         request.get("https://wakeupbot.herokuapp.com/",function(error,response,body){
            if(error){
               console.log("requested myself to avoid sleep");
            }else if(body){
               console.log("requested myself to avoid sleep");
            }else if(response){
               console.log("requested myself to avoid sleep");
            }
         })
       }else if(botno==4)
   	 {
   	 	request.get("https://dotaspinzbot4.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error+" 4");
   	 		}else if(body){
   	 			console.log(body+" 4");
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response+" 4");
   	 		   }
   	 	});
         request.get("https://wakeupbot.herokuapp.com/",function(error,response,body){
            if(error){
               console.log("requested myself to avoid sleep");
            }else if(body){
               console.log("requested myself to avoid sleep");
            }else if(response){
               console.log("requested myself to avoid sleep");
            }
         })
   	 }

},40000);