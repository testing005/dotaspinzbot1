var steamcommunity=require('steamcommunity');
var steamtotp=require('steam-totp');
var steamuser=require('steam-user');
var tradeoffermanager=require('steam-tradeoffer-manager');
var fs=require('fs');
var steamID=require('steamid');
var port=process.env.PORT || 9900;
var express=require('express');
var http=require('http');
var request=require('request');
var app=new express();
app.listen(port,function(){
	console.log("running on port 5000");
});

var counter=0;
var tradestatus=new Array();
var tradeitems=new Array();
var client=new steamuser();

var community=new steamcommunity();

var manager=new tradeoffermanager({
	'steam':client,
	'community':community,
	'domain':'jsptesting.s156.eatj.com',
	'pollInterval':5000
})

if(fs.existsSync('polldata.json')){
	manager.pollData=JSON.parse('polldata.json');
}



client.logOn({
	'accountName':'lol_nikhil5',
	'password':'@nikhilking@005',
	'twoFactorCode':steamtotp.generateAuthCode("O\/VCcMWtNHIIRSEpMJVH1BrRlu8="),
	'rememberPassword':true
});
//console.log("crossed login method");
client.on("error",function(e){
	console.log(e);
})
client.on("loggedOn",function(details){
  console.log("Logged into steam "+client.steamID.getSteam3RenderedID());
  client.setPersona(1);
  client.gamesPlayed(570)
})

client.on("webSession",function(sessionID,cookies){
	community.setCookies(cookies);
	manager.setCookies(cookies,function(err){
	   if(err){console.log(err);}
		console.log("Got api key:"+manager.apikey);
	});
	
	//manager.apikey="6C184A831CC28C44CC994EC77E44DB9D";
	
	console.log("Got api key :"+manager.apikey);
	community.loggedIn(function(err,loggedIn){
		console.log(loggedIn);
	community.startConfirmationChecker(3000,"40lccQ2d9Ua3vuLjiEX3XImxPzc=");

	//GET PROCESS************************************************************
    app.get("/deposit",function(req,res){
    	var idnty=req.query.dbid;
    	var reqitems=JSON.parse(req.query.idata);
    	/*res.write(200,{"Content-Type":"text/html"});
    	res.write(idnty);
    	res.write(reqitems);
    	res.end();*/

  var offer=manager.createOffer(idnty);
  var gtoken=req.query.token;
  offer.setToken(gtoken);
offer.addMyItems(reqitems);

offer.send(function(err,status){
	res.writeHead(200,{"Content-Type":"text/html"});
	if(err){ 
             res.write("Unable to process"+err);
        res.end();
	    console.log(err);}

	else{res.write(offer.id);
	     res.end();
		console.log(offer.id);}
	
     })

   });
    //END OF GET***************************************************************

//GET PROCESS**************************************************************

app.get("/",function(req,res){
	console.log("working");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("Its working");
	res.end();
});

//END OF GET***************************************************************
   
   //GET PROCESS**************************************************************
    
app.get("/status",function(req,res){
  var offerid=req.query.oid;
  var i=0;
  for(i=0;i<tradestatus.length;i++)
   {
     if(tradestatus[i][0]==offerid)
     	{res.writeHead(200,{"Content-Type":"text/html"});
         res.write("accepted");
         res.end();}
         else{res.writeHead(200,{"Content-Type":"text/html"});
              res.write("pending");
              res.end();}
  }	

});

   //END OF GET

//start get

app.get("/assests",function(req,res){
  var botofferid=req.query.oid;
  var i=0;
  for(i=0;i<tradestatus.length;i++)
   {
     if(tradestatus[i][0]==botofferid)
     	{res.writeHead(200,{"Content-Type":"text/html"});
         res.write(" "+tradeitems[i][0]);
         res.end();}
         else{res.writeHead(200,{"Content-Type":"text/html"});
              res.write("pending");
              res.end();}
  }	

});

//end get

//start update get


//end update get



  })
})


manager.on('sentOfferChanged', function(offer, oldState) {
	console.log(`Offer #${offer.id} changed: ${tradeoffermanager.ETradeOfferState[oldState]} -> ${tradeoffermanager.ETradeOfferState[offer.state]}`);

	if (offer.state ==tradeoffermanager.ETradeOfferState.Accepted) {
              tradestatus[counter]=new Array();
              tradeitems[counter]=new Array();
              tradestatus[counter][0]=offer.id;
              //tradeitems[counter][1]=new Array();
               if(counter==250){counter=0;}
		offer.getReceivedItems(function(err, items) {
			if (err) {
				console.log("Couldn't get received items: " + err);
			} else {
				var names = items.map(function(item) {
					return item.name;
				});
				tradeitems[counter][0]=names;
		          console.log(items);
		          console.log(names);
		          console.log(tradestatus);
		          console.log(tradeitems);
		          counter++;
     var url="http://www.dotaspinz.com/updatedb.jsp";
           request.get(url,function(error,response,body){
            if(error){
              console.log(error);
            }else if(response){
              console.log(response);
            }else if(body){
              console.log(body);
            }
          });

              //end of send to main bot
		 //		console.log("Received: " + names.join(', '));
			}
		});
	}
});

/*manager.on("sentOfferChanged",function(offer,oldState){
	          console.log(offer.id+" "+oldstate);
           if(oldState==2)
           	 {
           	 	 console.log("trade is active");
           	 }else if(oldState==3){console.log("trade accepted");}
	})*/


community.on("confKeyNeeded",function(tag,callback){
	var time=Math.floor(Date.now()/1000);
	callback(null,time,steamtotp.getConfirmationKey("40lccQ2d9Ua3vuLjiEX3XImxPzc=",time.tag))
});


community.on("newConfirmation",function(cconfirmation){
	cconfirmation.respond(Math.floor(Date.now()/1000),steamtotp.getConfirmationKey("40lccQ2d9Ua3vuLjiEX3XImxPzc=",Math.floor(Date.now()/1000),"allow"),true,function(err){
		if(err){
			console.log("confirmation failed: "+err);
			return;
		}
		console.log("Trade Confirmed");
	});
});

manager.on('newOffer',function(offer){
  console.log("New offer #"+offer.id+" from "+offer.partner.getSteam3RenderedID());
  if(offer.partner.getSteamID64()=="76561198333035401"||offer.partner.getSteamID64()=="76561198337269000"||offer.partner.getSteamID64()=="76561198337832981")
  { 
  	offer.accept(function(err){
  	if(err){console.log("unable to accept error:"+err);}
  	else{ community.checkConfirmations();
  		console.log("Trade Accepted");
           var url="http://www.dotaspinz.com/updatedb.jsp";
           request.get(url,function(error,response,body){
            if(error){
              console.log(error);
            }else if(response){
              console.log(response);
            }else if(body){
              console.log(body);
            }
          });

         /*var options={
              "host": "www.dotaspinz.com/updatedb.jsp",
               "method":"get"
         };

         var req=http.request(options,function(res){
         	res.on('data',function(chunk){
                  console.log(chunk);
         	})
         });

        req.on('error',function(e){
           console.log("error while updating the db"+e);
        });*/

  	   }
       })
   }else{
  		offer.decline(function(err){
  			if(err){
  				 console.log("error in decline"+err);
  			}else{
  				console.log("successfully declined");
  			}
  		})
  	}
});
