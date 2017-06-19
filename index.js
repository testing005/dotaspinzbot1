var port=/*process.env.PORT||*/5001;
var express=require('express');
var http=require('http');
var app=new express();

app.listen(port,function(){
	console.log("running on port "+port);
});


app.get("/fb",function(req,res){
	var id=req.query.vid;
	var title=req.query.title;

	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(" "+"<meta property=\"og:title\" content=\""+title+"\"/>");
	res.write(" "+"<meta property=\"og:description\" content="+title+"/>");
    res.write(" "+"<meta property=\"og:image\" content=\"https://i.ytimg.com/vi/"+id+"/hqdefault.jpg?custom=true&w=470&h=275&stc=true&jpg444=true&jpgq=90\"");
    res.write(" "+"<meta property=\"og:image:url\" content=\"https://i.ytimg.com/vi/"+id+"/hqdefault.jpg?custom=true&w=470&h=275&stc=true&jpg444=true&jpgq=90\"");
    res.write(" "+"<meta property=\"og:image:width\" content=\"470\"/><meta property=\"og:image:height\" content=\"265\"/><meta property=\"og:site_name\" content=\"SpotShoot\"/>");
    res.write(" "+"<meta property=\'og:video\' content=\'http://www.youtube.com/v/"+id+"?version=3\'/><meta property=\'og:video:height\' content=\'360\'/><meta property=\'og:video:type\' content=\'application/x-shockwave-flash\'/><meta property=\'og:video:width\' content=\'640\'/><meta property=\'og:type\' content=\'video\'/>");
    res.end();


}
	)