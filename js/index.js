/**
 * Created by kelly on 2017/7/2.
 */


$(document).ready(function(){
    $(".aside-clist>li").mouseover(function(){
        //显示二级菜单内容
        $(this).find(".list_show").show();
    });

    $(".header_mun>ul li").mouseover(function(){
       $(this).find(".zhiye_submenu").show();
        $(this).css("color","#35B558");
    });

    //隐藏二级菜单内容
    $(".aside-clist>li").mouseout(function(){
        $(this).find(".list_show").hide();
    });

   $(".header_mun>ul li").mouseout(function(){
      $(this).find(".zhiye_submenu").hide();
   });



});
