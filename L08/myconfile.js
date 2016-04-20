/**
 * Created by jiahaitong on 2016/1/26.
 */
var myjq= $.noConflict();
myjq(document).ready(function(){
    myjq("#btn").on("click",function(){
        myjq("div").text("new hello");
    })
});