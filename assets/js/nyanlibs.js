	// var
	var $_GET;
	var $_URI;
	var $_SERVER;

	var headers;

	// Function
	function parseResponseHeaders(headerStr) {
	  var headers = {};
	  if (!headerStr) {
	    return headers;
	  }
	  var headerPairs = headerStr.split('\u000d\u000a');
	  for (var i = 0; i < headerPairs.length; i++) {
	    var headerPair = headerPairs[i];
	    var index = headerPair.indexOf('\u003a\u0020');
	    if (index > 0) {
	      var key = headerPair.substring(0, index).toUpperCase();
	      var val = headerPair.substring(index + 2);
	      headers[key] = val;
	    }
	  }
	  return headers;
	}
	function parseUri (str) {
		var	o   = parseUri.options,
			m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
			uri = {},
			i   = 14;

		while (i--) uri[o.key[i]] = m[i] || "";

		return uri;
	};
	parseUri.options = {
		strictMode: false,
		key: ["SOURCE","PROTOCOL","AUTHORITY","USERINFO","USER","PASSWORD","HOST","PORT","RELATIVE","PATH","DIRECTORY","FILE","QUERY","ANCHOR"],
		q:   {
			name:   "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};
	function random(lengthkey) {
	    var text = "";
	    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < lengthkey; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	}

	// Main 
	var qs = document.location.search;
	qs = qs.split('+').join(' ');
	var params = {},
	    tokens,
	    re = /[?&]?([^=]+)=([^&]*)/g;
	while (tokens = re.exec(qs)) {
	    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}
	var result = params;
	$_GET = params;

	

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	  	headers = xhr.getAllResponseHeaders().toLowerCase();
	  	headers = parseResponseHeaders(headers);
	  	var uri = parseUri(document.location);

	  	$_SERVER = headers;
	  	$_URI = uri;
	  }
	});

	xhr.open("GET", document.location);

	xhr.send();

	


