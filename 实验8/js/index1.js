
 $(document).ready(function(){
	$(".m-end1").hide();
	var a=false;
	$(".m-photo").click(function(b){
		if(a==true) return;
		b.stopPropagation();
		a=true;
		$(".m-photo").css({"filter": "blur("+ 5 +"px)" });
		$(".m-end1").css({"background-color":$(this).css("background-color"),"z-index":"2"});
		$(".m-end1").fadeIn(500);
	});
	$(window).click(function(){
		if(a)
		{
			$(".m-photo").css({"filter": "blur("+ 0 +"px)" });
			$(".m-end1").fadeOut(500,function(){
				$(".m-end1").css({"z-index":"-1"});
			});
		}
		a=false;
	}
	)
})