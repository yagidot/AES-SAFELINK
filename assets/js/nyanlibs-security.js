
var minHeightPoint = $('#verify-works').height() - 70;
var minWidthPoint = $('#verify-works').width() - 70;
var nyanlibsDebug = false;
var dataInitialized;
var step1 = false;
var step2 = false;


/*
 * Class
 */
(function(window) {
    function define_library() {

        var NyanLibs = {
            init: function(data) {
                nyanDebug('Prosess Initialize Berjalan');
                dataInitialized = data;
                nyanInit(data);
            },
            get: function(e) {
                e.preventDefault();
                if (e.srcElement.innerText == NyanLibs.key) {
                    nyanDebug('Sama');
                    NyanLibs.stepTwo = true;
                    showToast('Step 2 - OK');
                    $(dataInitialized.button).removeClass('disabled');
                } else {
                    nyanInit(dataInitialized);
                }
            },
            go: function(e) {
                nyanDebug('Prosessed go()');
                nyanDebug(e);
                if ((('#' + e.srcElement.attributes.id.value) == dataInitialized.button) && (NyanLibs.stepOne == true) && (NyanLibs.stepTwo == true)) {
                    nyanDebug('Semua persyaratan terpenuhi');
                    return true;
                } else {
                    return false;
                }
            },
            security: function(key) {
                return {
                    open: function(url) {
                        document.location = getRandomString(url, key);
                    },
                    inject: function() {
                        $('#main').find('a').each(function(i) {
                            if (this.href != 'javascript:void(0)' || this.href != 'javascript:void(0);') {
                                var link = parseURL(this.href);
                                console.log(this.href);
                                var port;
                                if (document.location.port != '') {
                                    port = document.location.port;
                                } else {
                                    port = '';
                                }
                                this.href = 'http://www.nyansafe.ga/p/go.html?data=' + link;
                            }
                        });
                    }
                }
            },
            stepOne: false,
            stepTwo: false,
            key: ''

        };

        return NyanLibs;
    }

<<<<<<< HEAD
			var NyanLibs = {
				init: function(data) {
					nyanDebug('Prosess Initialize Berjalan');
					dataInitialized = data;
					nyanInit(data);
				},
				get: function(e) {
					e.preventDefault();
					if (e.srcElement.innerText == NyanLibs.key) {
						nyanDebug('Sama');
						NyanLibs.stepTwo = true;
						showToast('Step 2 - OK');
						$(dataInitialized.button).removeClass('disabled');
					} else {
						nyanInit(dataInitialized);
					}
				},
				go: function(e) {
					nyanDebug('Prosessed go()');
					nyanDebug(e);
					if ((('#' + e.srcElement.attributes.id.value) == dataInitialized.button) && (NyanLibs.stepOne == true) && (NyanLibs.stepTwo == true)) {
						nyanDebug('Semua persyaratan terpenuhi');
						return true;
					} else {
						return false;
					}
				},
				security: function(key) {
					return {
						open: function(url) {
							document.location = getRandomString(url, key);
						},
						inject: function() {
							$('a').each(function(i){ 
								console.log(this.href);
								var link = parseURL(this.href);
								var port;
								if (document.location.port != '') {
									port = document.location.port;
								} else {
									port = '';
								}
								this.href = 'http://www.nyansafe.ga/p/go.html?data=' +  link; 
							});
						}
					}
				},
				stepOne: false,
				stepTwo: false,
				key: ''
=======
    if (typeof(NyanLibs) === 'undefined') {
        window.NyanLibs = define_library();
    } else {
        console.info('NyanLibs is ready');
    }
})(window);
>>>>>>> da96c7c1100bc0a15e5203c3f07a3f534c4b451b


/*
 * Function
 */
function nyanDebug(message) {
    if (nyanlibsDebug == true) {
        console.info(message);
    }
}

function getPathFiles() {
    return "$(window).click(function() {});"
}
