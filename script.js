//登入
$(".login_button").click(
  function(){
    $(".login").hide();
    $(".phone").show();
    //抓輸入帳號輸入欄位放入#infos
    $("#infos").val($("#input_Account").val());
  }
);

//登出(右上X)
$(".logout_btn").click(
  function(){
    $(".phone").hide();
    $(".login").show();
    $(".headpic_big").hide();
  }
);

//讓newspaper icon也能直接超連結
$(".em.em-newspaper").click(function(){
    $('.em.em-newspaper a').get(0).click();
});

//打開大頭照
$(".headpic").click(
  function(){
    $(".headpic_big").css("background-image","url(https://i.imgur.com/7f3B1WY.png)");
    $(".headpic_big").css("background-repeat","no-repeat");
    $(".headpic_big").css("background-size","cover");  
    $(".headpic_big").css('left','20%');
    $(".headpic_big").show();
  }
);

//關閉大頭照
$(".headpic_big").click(
    function(){
      $(".headpic_big").hide();
    }
);

//顯示#message_box
$(".message_logo").mouseover(function(){
  $("#message_box").show();
}); 
//隱藏#message_box
$(".message_logo").mouseout(function(){
  $("#message_box").hide();
});

//顯示#phone_box
$(".phone_logo").mouseover(function(){
  $("#phone_box").show();
});
//隱藏#phone_box
$(".phone_logo").mouseout(function(){
  $("#phone_box").hide();
});

//顯示#camera_box
$(".camera_logo").mouseover(function(){
  $("#camera_box").show();
});
//隱藏#camera_box
$(".camera_logo").mouseout(function(){
  $("#camera_box").hide();
});

//切換LINE畫面
var page=0;
//Page1
$(".em.em-bust_in_silhouette").click(function(){
  page=0;
  $(".pages").css("top","-"+page*100+"%");
  $(".phone").css("width","300px"); 
  $(".headpic_big").hide();
});

//Page2
$(".em.em-speech_balloon").click(function(){
  page=1;
  $(".pages").css("top","-"+page*100+"%");
  $(".phone").css("width","420px"); 
  $(".headpic_big").hide();
});

//Page3
$(".em.em-clock5").click(function(){
  page=2;
  $(".pages").css("top","-"+page*100+"%");
  $(".phone").css("width","380px"); 
  $(".headpic_big").hide();
});

//Page4
$(".em.em-shopping_trolley").click(function(){
  page=3;
  $(".pages").css("top","-"+page*100+"%");
  $(".phone").css("width","540px"); 
  $(".headpic_big").hide();
});

//top_page2#1
$(".top_page2#1").click(
  function(){
    $(".headpic_big").css("background-image","url(https://i.imgur.com/r6WjzjX.jpg)");
    $(".headpic_big").css("background-repeat","no-repeat");
    $(".headpic_big").css("background-size","cover");
    $(".headpic_big").css('left','15%');
    $(".headpic_big").show();
  }
);

//top_page2#2
$(".top_page2#2").click(
  function(){
    $(".headpic_big").css("background-image","url(https://i.imgur.com/huVYzpG.jpg)");
    $(".headpic_big").css("background-repeat","no-repeat");
    $(".headpic_big").css("background-size","cover");
    $(".headpic_big").css('left','15%');
    $(".headpic_big").show();
  }
);

//top_page2#3
$(".top_page2#3").click(
  function(){
    $(".headpic_big").css("background-image","url(https://i.imgur.com/Eqc7frk.jpg)");
    $(".headpic_big").css("background-repeat","no-repeat");
    $(".headpic_big").css("background-size","cover");
    $(".headpic_big").css('left','15%');
    $(".headpic_big").show();
  }
);

//top_page2#4
$(".top_page2#4").click(
  function(){
    $(".headpic_big").css("background-image","url(https://i.imgur.com/AccO1Ad.jpg)");
    $(".headpic_big").css("background-repeat","no-repeat");
    $(".headpic_big").css("background-size","cover");
    $(".headpic_big").css('left','15%');
    $(".headpic_big").show();
  }
);

//top_page2#5
$(".top_page2#5").click(
  function(){
    $(".headpic_big").css("background-image","url(https://i.imgur.com/5jez7Qe.jpg)");
    $(".headpic_big").css("background-repeat","no-repeat");
    $(".headpic_big").css("background-size","cover");
    $(".headpic_big").css('left','15%');
    $(".headpic_big").show();
  }
);

var num=0;
//按讚+1 1-1
$("#good1-1").click(function(){
    num=parseInt($("#good1-2").text());
    num=num+1;
    $("#good1-2").text(num); 
});

//按讚+1 2-1
$("#good2-1").click(function(){
    num=parseInt($("#good2-2").text());
    num=num+1;
    $("#good2-2").text(num); 
});

//按讚+1 3-1
$("#good3-1").click(function(){
    num=parseInt($("#good3-2").text());
    num=num+1;
    $("#good3-2").text(num); 
});

//按讚+1 4-1
$("#good4-1").click(function(){
    num=parseInt($("#good4-2").text());
    num=num-1;
    $("#good4-2").text(num); 
});

//按讚+1 5-1
$("#good5-1").click(function(){
    num=parseInt($("#good5-2").text());
    num=num+1;
    $("#good5-2").text(num); 
});

//按讚+1 6-1
$("#good6-1").click(function(){
    num=parseInt($("#good6-2").text());
    num=num+1;
    $("#good6-2").text(num); 
});

//按讚+1 7-1
$("#good7-1").click(function(){
    num=parseInt($("#good7-2").text());
    num=num+1;
    $("#good7-2").text(num); 
});



//Page4 Shop
//新增一個商品清單的物件
var shoplist={};
shoplist.name="MyBuyList 購物清單";
shoplist.time="2018/11/7";
//商品清單的清單裡面是個陣列，塞商品物件們
shoplist.list=[
  {name:"吹風機",price: 5000},
  {name:"麥克風",price: 500},
  {name:"筆記型電腦",price: 25000},
  {name:"Apple IphoneXS Max 256GB",price: 50000},
  {name:"Dyson吸塵器",price: 15000},
];
//定義元素用的html模板，{{名稱}}代表要套入的地方
var item_html="<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='del_btn'>X</div></li>";

var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

//刪除並重新產生清單中所有項目
function showlist(){
  $("#item_list").html("");
  var total_price=0;
  //把每個項目做出來
  for (var i=0;i<shoplist.list.length;i++){
    var item=shoplist.list[i];
    var item_id="buyitem_"+i;
    var del_item_id="del_buyitem_"+i;

    //動態統計總價(每一項跑時加上去)
    total_price+=parseInt(item.price);

    //取代模板位置成資料replace(要取代的,取代成...)
    var current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{item}}",item.name)
                 .replace("{{id}}",item_id)  
                 .replace("{{del_id}}",del_item_id)  
                 .replace("{{price}}",item.price)
                 .replace("{{del_item_id}}",i);
    
    //加入元素後才能夠用jquery操作
    $("#item_list").append(current_item_html);
    $("#"+del_item_id).click(
      function(){
        remove_item(parseInt($(this).attr("data-delid")));
      }
    );
  }
    //新增總價那一欄
    var current_total_html=
        total_html.replace("{{price}}",total_price);
    $("#item_list").append(current_total_html);
};  
  
//先顯示一次，因為前面只定義好function 還沒有執行
showlist();

// 新增資料流程: 動態push一筆資料->呼叫showlist重新渲染清單
$(".add_btn").click(
  function(){
    //使用val()存取輸入的值，val("..") 有給參數是設定
    shoplist.list.push(
      {
        name:$("#input_name").val(),
        price:$("#input_price").val()
      }
    );
    $("#input_name").val("")
    $("#input_price").val("")
    showlist();
  }
);

//刪除項目 陣列.splice(位置,長度) 
//刪除資料->重新根據資料渲染清單
function remove_item(id){
  shoplist.list.splice(id,1);
  showlist();
}