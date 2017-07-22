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

	res.writeHead(200,{"Content-Type":"text/html"});
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
    res.end();


}
	)
