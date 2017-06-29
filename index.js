var steamcommunity=require('steamcommunity');
var steamtotp=require('steam-totp');
var steamuser=require('steam-user');
var tradeoffermanager=require('steam-tradeoffer-manager');
var fs=require('fs');
var steamID=require('steamid');
var port=process.env.PORT||5004;
var express=require('express');
var http=require('http');
var app=new express();
var request=require('request');
app.listen(port,function(){
	console.log("running on port "+port);
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
	'accountName':'dotaspinsbot2',
	'password':'Spinbot2',
	'twoFactorCode':steamtotp.generateAuthCode("jelRjLlbGXPhm1A6Jwv6KDU65wg="),
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
	community.startConfirmationChecker(3000,"iT0gC0eFI6q\/a2ysqzEd05UYtps=");

	//GET PROCESS************************************************************
    app.get("/deposit",function(req,res){
    	var idnty=req.query.dbid;

    	var reqitems=JSON.parse(req.query.idata);
        console.log(req.query.idata);
        console.log(reqitems);

    	/*res.write(200,{"Content-Type":"text/html"});
    	res.write(idnty);
    	res.write(reqitems);
    	res.end();*/
  /*var gtoken=idnty.substring(idnty.length-8);
  console.log(gtoken);*/

  var offer=manager.createOffer(idnty);
  var gtoken=req.query.token;
  offer.setToken(gtoken);
  var i=0;
  for(i=0;i<reqitems.length;i++)
  	 {
  	 	offer.addTheirItem(reqitems[i]);
  	 }

//offer.addTheirItems(reqitems);
//console.log(offer);

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

   //END OF GET

//start get



//end get

//start update get


//end update get



  })
})




app.get("/mbot",function(req,res){

 var reqitems=JSON.parse(req.query.idata);

  var offer=manager.createOffer("https://steamcommunity.com/tradeoffer/new/?partner=374239303");
  
  offer.setToken("T6we4blq");
  for(i=0;i<reqitems.length;i++)
  	 {
  	 	offer.addMyItem(reqitems[i]);
  	 }

 
  
offer.send(function(err,status){
	res.writeHead(200,{"Content-Type":"text/html"});
	if(err){ 
             
	    console.log(err);}

	else{
		console.log("sent to main bot "+offer.id);}
	
     })

   });


manager.on('sentOfferChanged', function(offer, oldState) {
	console.log(`Offer #${offer.id} changed: ${tradeoffermanager.ETradeOfferState[oldState]} -> ${tradeoffermanager.ETradeOfferState[offer.state]}`);

	if (offer.state ==tradeoffermanager.ETradeOfferState.Accepted) {
		offer.getReceivedItems(function(err, items) {
			if (err) {
				console.log("Couldn't get received items: " + err);
			} else {
				var oitems=[];
				var itemslist="";
				var names = items.map(function(item) {
					itemslist+=item.name.toString()+",";
				});

		          //send to main bot
		         if(offer.partner.getSteamID64()!="76561198334505031")
                  {  var offerdata=[];
                   var offerobj=null;
		         
		          var idstring=null;
		          var names=items.map(function(item){
                      
                      idstring=item.id;
                      
				      offerdata.push({"appid":570,"contextid":2,"assetid":idstring.toString()});	
				});
                  	
               var opid=offer.partner.getSteamID64();
              var url="http://www.dotaspinz.com/sendtobot.jsp?idata="+encodeURIComponent(JSON.stringify(offerdata))+"&bno=3&sdata="+encodeURIComponent(itemslist)+"&oid="+offer.id+"&pid="+opid;

              //console.log(url);
         

          request.post(url,function(error,response,body){
          	if(error){
          		console.log(error);
          	}else if(response){
          		console.log(response);
          	}else if(body){
          		console.log(body);
          	}
          });
                       }

			}
		});
	}
});



community.on("confKeyNeeded",function(tag,callback){
	var time=Math.floor(Date.now()/1000);
	callback(null,time,steamtotp.getConfirmationKey("iT0gC0eFI6q\/a2ysqzEd05UYtps=",time.tag))
});


community.on("newConfirmation",function(cconfirmation){
	cconfirmation.respond(Math.floor(Date.now()/1000),steamtotp.getConfirmationKey("iT0gC0eFI6q\/a2ysqzEd05UYtps=",Math.floor(Date.now()/1000),"allow"),true,function(err){
		if(err){
			console.log("confirmation failed: "+err);
			return;
		}
		console.log("Trade Confirmed");
	});
});

manager.on('newOffer',function(offer){
  console.log("New offer #"+offer.id+" from "+offer.partner.getSteam3RenderedID());
if(offer.isOurOffer)
 { offer.accept(function(err){
  	if(err){console.log("unable to accept error:"+err);}
  	else{ community.checkConfirmations();
  		console.log("Trade Accepted");}
  })}else{
 	offer.cancel(function(err){
 		if(err){console.log(err);}
 		else{console.log("Not our offer so decined");}
 	});
 }
     
});
