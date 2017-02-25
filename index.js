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
   	 	request.get("http://dotaspinzbot1.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error);
   	 		}else if(body){
   	 			console.log(body);
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response);
   	 		   }
   	 	});

         request.get("http://wakeupbots.herokuapp.com/"function(error,response,body){
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
   	 	request.get("http://dotaspinzbot2.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error);
   	 		}else if(body){
   	 			console.log(body);
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response);
   	 		   }
   	 	});

         request.get("http://wakeupbots.herokuapp.com/"function(error,response,body){
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
   	 	request.get("http://dotaspinzbot3.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error);
   	 		}else if(body){
   	 			console.log(body);
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response);
   	 		   }
   	 	});
         request.get("http://wakeupbots.herokuapp.com/"function(error,response,body){
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
   	 	request.get("http://dotaspinzbot4.herokuapp.com/",function(error,response,body){
   	 		if(error){
   	 			console.log(error);
   	 		}else if(body){
   	 			console.log(body);
   	 		}else if(response)
   	 		   {
   	 		   	console.log(response);
   	 		   }
   	 	});
         request.get("http://wakeupbots.herokuapp.com/"function(error,response,body){
            if(error){
               console.log("requested myself to avoid sleep");
            }else if(body){
               console.log("requested myself to avoid sleep");
            }else if(response){
               console.log("requested myself to avoid sleep");
            }
         })
   	 }

},30000);