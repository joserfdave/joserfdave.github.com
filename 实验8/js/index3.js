 $(document).ready(function(){
     var num = 1; //总数
     $('body').on('.m-next2', (e) => {
       doAdd(e);
     })
     $('body').on('.m-data-2', (e) => {
       doDel(e);
     })
     function doAdd(e) {
       let t = e.currentTarget;
       let item = `<div class="m-data"><div class="m-data-1"><span>${++num}</span></div><div class="m-data-2"><span>Delete</span></div></div>`
      $(t).prev().append(item);
     }
     function doDel(e) {
       let t = e.currentTarget;
       $(t).parent().remove();
       num --;
       upload();
     }
     function upload() {
      let contentList = $('.m-data').children();
      let i = num;
      contentList.map((index,item)=>{
        $(item).find('.m-data-1').text(num - (--i));
      })
    }
	
	$(".m-next2").click(function(){
		var add="<div class=\"m-data\"><div class=\"m-data-1\"><span>1</span></div><div class=\"m-data-2\"><span>Delete</span></div></div>";
		$(".m-next2").before(add);
		var num=($(".m-box3").children().length-1)==1?1:parseInt(
			$(".m-data:nth-last-child(3)>.m-data-1>span").html())+1;
		$(".m-data:nth-last-child(2)>.m-data-1>span").html(num);
	});
	$(document).on("click",".m-data-2",function(){
		 $(this).each(function (){
			$(this).parent().remove();})
	})
})