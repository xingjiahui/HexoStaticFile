var windowWidth = $(window).width();
if(location.href.indexOf(atob("YWJvdXQuYW50bW9lLmNvbQ==")) == -1){
  location.href = atob("aHR0cHM6Ly93d3cuYW50bW9lLmNvbQ==");
}
if (windowWidth < 767) {
  // do something
  $("#aplayer").remove();
}
console.log(
  "\n" +
    " %c PersonalWebSite by Dreamy.TZK " +
    " %c https://www.antmoe.com " +
    "\n" +
    "\n",
  "color: #fff; background: #fd79a8; padding:5px 0;",
  "background: #FFF; padding:5px 0;"
);
//弹出一个页面层
$("#kaygb-blog").on("click", function() {
  layer.open({
    type: 2,
    title: "小康博客",
    shadeClose: true,
    shade: false,
    maxmin: true, //开启最大化最小化按钮
    area: ["80%", "100%"],
    content: "//www.antmoe.com/"
  });
});
$("#kaygb-mail").on("click", function() {
  layer.open({
    type: 2,
    title: "向我发送E-mail",
    shadeClose: true,
    shade: false,
    maxmin: true, //开启最大化最小化按钮
    area: ["80%", "100%"],
    content: "//mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=sviptzk@163.com"
  });
});
