var port=process.env.PORT||5001;
var express=require('express');
var http=require('http');
var app=new express();

app.listen(port,function(){
	console.log("running on port "+port);
});

/*<meta property="og:video:url" content="https://www.youtube.com/embed/BLkSYVfS3VI">
<meta property="og:video:secure_url" content="https://www.youtube.com/embed/BLkSYVfS3VI">
<meta property="og:video:type" content="text/html">
<meta property="og:video:width" content="640">
<meta property="og:video:height" content="360">
<meta property="og:video:url" content="http://www.youtube.com/v/BLkSYVfS3VI?version=3&amp;autohide=1">
<meta property="og:video:secure_url" content="https://www.youtube.com/v/BLkSYVfS3VI?version=3&amp;autohide=1">
<meta property="og:video:type" content="application/x-shockwave-flash">
<meta property="og:video:width" content="640">
<meta property="og:video:height" content="360">*/
app.get("/fb",function(req,res){
	var id=req.query.vid;
	var title=req.query.title;
	var img=req.query.img;

	/*res.writeHead(200,{"Content-Type":"text/html"});
	res.write(" "+"<meta property=\"og:site_name\" content=\"Youtube\">");
	//res.write(" "+"<meta property=\"og:url\" content=\"https://www.youtube.com/watch?v="+id+"\">");
	res.write(" "+"<meta property=\"og:title\" content=\""+title+"\">");
	res.write(" "+"<meta property=\"og:image\" content=\"https://i.ytimg.com/vi/"+id+"/maxresdefault.jpg\">");
	res.write(" "+"<meta property=\"og:image:width\" content=\"470\"><meta property=\"og:image:height\" content=\"265\">");
	res.write(" "+"<meta property=\"og:description\" content=\""+title+"\">");
	res.write(" "+"<meta property=\"og:type\" content=\"video\">");
	res.write(" "+"<meta property=\"og:video:url\" content=\"https://www.youtube.com/embed/"+id+"\">");
	res.write(" "+"<meta property=\"og:video:secure_url\" content=\"https://www.youtube.com/embed/"+id+"\">");
	res.write(" "+"<meta property=\"og:video:type\" content=\"text/html\">");
	res.write(" "+"<meta property=\"og:video:width\" content=\"640\">");
	res.write(" "+"<meta property=\"og:video:height\" content=\"360\">");
	res.write(" "+"<meta property=\"og:video:url\" content=\"http://www.youtube.com/v/"+id+"?version=3&amp;autohide=1\">");
	res.write(" "+"<meta property=\"og:video:secure_url\" content=\"https://www.youtube.com/v/"+id+"?version=3&amp;autohide=1\">");
	res.write(" "+"<meta property=\"og:video:type\" content=\"application/x-shockwave-flash\">");
	res.write(" "+"<meta property=\"og:video:width\" content=\"640\">");
	res.write(" "+"<meta property=\"og:video:height\" content=\"360\">");
    res.end();*/
res.writeHead(200,{"Content-Type":"text/html"});
res.write(" "+"<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta name=\"description\" content=\"Magic. ➔ Télécharge &quot;OneFootball&quot; GRATUITEMENT : http://bit.do/Aliotop_May ➔ Maillots de Foot 2017/2018 à 20 € : http://maxmaillots.org/?utm_source=aliotop ►...\"><meta name=\"image\" content=\"https://i.ytimg.com/vi/ZrHaCSJtttc/maxresdefault.jpg\"><link rel=\"image_src\" href=\"https://i.ytimg.com/vi/ZrHaCSJtttc/maxresdefault.jpg\"><meta property=\"og:image\" content=\"https://i.ytimg.com/vi/ZrHaCSJtttc/maxresdefault.jpg\"><meta property=\"og:title\" content=\'Lionel Messi - God of Football (HD)\'><meta property=\"og:description\" content=\"Magic. ➔ Télécharge &quot;OneFootball&quot; GRATUITEMENT : http://bit.do/Aliotop_May ➔ Maillots de Foot 2017/2018 à 20 € : http://maxmaillots.org/?utm_source=aliotop ►...\"><!--meta property=\'og:url\' content=\'https://www.youtube.com/embed/ZrHaCSJtttc?start=0&amp;autoplay=1\' /--><meta property=\"og:video\" content=\"https://www.youtube.com/embed/ZrHaCSJtttc?start=0&amp;autoplay=1\"><meta property=\"og:video:type\" content=\"application/x-shockwave-flash\"><meta property=\"og:video:width\" content=\"1280\"><meta property=\"og:video:height\" content=\"720\"><meta property=\"og:video\" content=\"https://www.youtube.com/embed/ZrHaCSJtttc?start=0&amp;autoplay=1\"><meta property=\"og:video:secure_url\" content=\"https://www.youtube.com/embed/ZrHaCSJtttc?start=0&amp;autoplay=1\"><meta property=\"og:video:type\" content=\"text/html\"><meta property=\"og:video:width\" content=\"1280\"><meta property=\"og:video:height\" content=\"720\"><meta property=\"og:type\" content=\"article\"><meta property=\"article:author\" content=\"https://www.facebook.com/youtube/\"><meta property=\"og:audio\" content=\"https://www.youtube.com/embed/ZrHaCSJtttc?list=&amp;autoplay=1\"><meta property=\"og:audio:type\" content=\"application/x-shockwave-flash\"><link itemprop=\"embedURL\" href=\"https://www.youtube.com/embed/ZrHaCSJtttc?list=\">");
res.end();

}
	)
