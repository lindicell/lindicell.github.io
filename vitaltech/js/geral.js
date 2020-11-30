// JavaScript Document
var $z = jQuery.noConflict();
$z(document).ready(function(){
	var contextFontResize = "html";
	$z("#aumentar-fonte").click(function () {
		var size = $z(contextFontResize).css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(contextFontResize).animate({'font-size' : size + 'px'});
		return false;
	});

	$z("#diminuir-fonte").click(function () {
		var size = $z(contextFontResize).css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) - 2;

		$z(contextFontResize).animate({'font-size' : size + 'px'});
		return false;
	});
});