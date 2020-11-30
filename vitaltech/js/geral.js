// JavaScript Document
var $z = jQuery.noConflict();
$z(document).ready(function(){
	var contextFontResize = "html";
	
	var htmlFontSize = window.sessionStorage.getItem('htmlFontSize');
	
	if (htmlFontSize > 0) {
		$z(contextFontResize).animate({'font-size' : htmlFontSize + 'px'});
	}
	
	$z("#aumentar-fonte").click(function () {
		var size = $z(contextFontResize).css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(contextFontResize).animate({'font-size' : size + 'px'});
		window.sessionStorage.setItem('htmlFontSize', size);
		// $z(contextFontResize).css("fontSize", size);
		return false;
	});

	$z("#diminuir-fonte").click(function () {
		var size = $z(contextFontResize).css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) - 2;

		$z(contextFontResize).animate({'font-size' : size + 'px'});
		window.sessionStorage.setItem('htmlFontSize', size);
		return false;
	});
	
	setTimeout(() => {
		loading(false);
	}, 200);
});

function loading(status) {
	if (status) {
		$('.loading').show();
	} else {
		$('.loading').hide();
	}
}