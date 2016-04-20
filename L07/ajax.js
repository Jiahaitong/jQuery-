/**
 * Created by jiahaitong on 2016/1/25.
 */
$(document).ready(function(){
    $("#btn").on("click",function(){
        $("#result").text("请求数据中，请稍后");
     /*   $.get("server.php",{name:$("#namevalue").val()},function(data){
            $("#result").text(data);
        });*/

        $.post("server.php",{name:$("#namevalue").val()},function(data){
          alert("hello");
            $("#result").text(data);
        }).error(function(){
            $("#result").text("通讯有问题");
        });
    })
});