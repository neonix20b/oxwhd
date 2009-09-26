function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

var cname = "__ox_visited__" + document.domain;
var returned = readCookie(cname);
if(returned != "true") {
	returned = "false";
	createCookie(cname,"true",365)
}
url="http://stats.oxnull.net:8080/put_stats/"+document.domain+"/"+returned;
document.write('<script type="text/javascript" src="' + url + '"></script>')

