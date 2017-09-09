function button_handle(event) {
	if (NyanLibs.go(event)) {
		if ($_GET.data != undefined) {
			NyanLibs.security('aespasswordkey').open($_GET.data);
		}
	}
}


	function nyanInit(data) {
		nyanDebug(data);
		var count = data.items.length;
		var randData = [ random(), random(), random(),random(),random()];
		var randPosition = [ getLocation(), getLocation(), getLocation(), getLocation(), getLocation() ];
		for (var i = count - 1; i >= 0; i--) {
			nyanDebug('Counter for items ' + i);
			$(data.items[i]).css('top', randPosition[i].height);
			$(data.items[i]).css('left', randPosition[i].width);
			$(data.items[i]).text(randData[i]);
		};
		var index = Math.floor(Math.random() * (5 - 1 + 1));
		NyanLibs.key = randData[index];
		if (NyanLibs.stepOne) {
			$(data.info).text('Tekan Huruf ' + NyanLibs.key + ' pada Sekitar Artikel');
		}
	}

	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			if (!NyanLibs.stepOne) {
				nyanDebug('Scroll Kebawah sudah terpenuhi');
				NyanLibs.stepOne = true;
				nyanInit(dataInitialized);
				showToast('Step 1 - OK');
			}
		}
	});



	function showToast(message) {
	  window['counter'] = 0;
	  var snackbarContainer = document.querySelector('#demo-show-toast');
	  var data = {message: message};
	  snackbarContainer.MaterialSnackbar.showSnackbar(data);
	}

	function random()
	{
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		for( var i=0; i < 1; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
	
	function getLocation() {
		var location = {
			width: Math.floor(Math.random() * (minWidthPoint - 10 + 1)) + 10,
			height: Math.floor(Math.random() * (minHeightPoint - 10 + 1)) + 10
		};
		
		return location;
	}

	function getRandomString(data, keys) {
		files = getPathFiles();
		data = decodeURIComponent(data);
		var decrypted = CryptoJS.AES.decrypt(data.toString(), files);
		return decrypted.toString(CryptoJS.enc.Utf8);
	}

	function parseURL(data) {
    	files = getPathFiles();
		var encrypted = CryptoJS.AES.encrypt(data, files);
		return encodeURIComponent(encrypted.toString()); 
	}
