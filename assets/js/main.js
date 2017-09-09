var kondisi = false;
var securitykey = "aespasswordkey";

function button_handle(event) {
	if (NyanLibs.go(event)) {
		if ($_GET.data != undefined) {
			NyanLibs.security('aespasswordkey').open($_GET.data);
		}
	}
}

$('.btn-go').click(function() {
	var url = $('.nyan-input').val();

	if (url != '') {
		var encry = parseURL(url);
		$('.nyan-input').val($_URI.PROTOCOL + '://' + $_URI.HOST + $_URI.DIRECTORY + 'p/go.html?data=' +  encry); 
		kondisi = true;
	}
});

$('.btn-reset').click(function() {
	var url = $('.nyan-input').val();

	if (url != '') {
		$('.nyan-input').val(''); 
	}
});

function input_clicked(event) {
	event.preventDefault();
	if (kondisi) {
		$('.nyan-input').select();
	}
}

function parseURL(data) {
  	files = getPathFiles();
		var encrypted = CryptoJS.AES.encrypt(data, files);
		return encodeURIComponent(encrypted.toString()); 
	}


