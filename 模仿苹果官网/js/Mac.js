$('.Built_in_app .nav .head li').click(function(){
	var idx = $(this).index()
	$('.Built_in_app .nav #bg').eq(idx).show();
	$('.Built_in_app .nav #bg').not($('.Built_in_app .nav #bg').eq(idx)).hide();
})
$('.major_app .nav .head li').click(function(){
	var idx = $(this).index()
	$('.major_app .nav .nr').eq(idx).show();
	$('.major_app .nav .nr').not($('.major_app .nav .nr').eq(idx)).hide();
})