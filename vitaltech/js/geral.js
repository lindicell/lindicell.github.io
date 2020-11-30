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

function gerarDataChart() {
	var dataChart = [
		{ mes: 7, label: 'Pressão no mês de julho',
		 labels: [], 
		 data: []},
		{ mes: 8, label: 'Pressão no mês de agosto',
		 labels: [], 
		 data: []},
		{ mes: 9, label: 'Pressão no mês de setembro',
		 labels: [], 
		 data: []},
		{ mes: 10, label: 'Pressão no mês de outubro',
		 labels: [], 
		 data: []},
		{ mes: 11, label: 'Pressão no mês de novembro',
		 labels: [], 
		 data: []}
	];
	
	dataChart.forEach((data) => {
		for(var i = 1; i <= 30; i++) {
			data.labels.push(i + '/' + data.mes);
			data.data.push(Math.floor(Math.random() * (180 - 70 + 1)) + 70);
		}
	});
	
	return dataChart;
}