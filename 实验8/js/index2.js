
 $(document).ready(function(){
    $(".m-next").click(function(){
        $(".m-next").css({"background-color":"white"});
        $(this).css({"background-color":"grey"});
        $(".m-end>span").html(($(this).index()+1));
    })
})