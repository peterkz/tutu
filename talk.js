/*
 * @Author: your name
 * @Date: 2020-12-26 14:21:02
 * @LastEditTime: 2021-01-06 09:21:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \烟花表白(可自定义文字)\talk.js
 */
$(function () {
  initAnimate();
  $("#yes").click(function (event) {
    modal("嘿嘿，礼物就是想在生日那天看老婆穿黑丝=。=", function () {
      $(".page_one").addClass("hide");
      $(".page_two").removeClass("hide");
      // typeWrite();
      //   fireworks();
    });
  });
  $("#no").click(function (event) {
    modal("既然不给礼物", A);
  });
});

function A() {
  modal("那就给个100块钱的红包吧", B);
}

function B() {
  modal("我知道老婆很大方的", C);
}

function C() {
  modal("爱你。么么哒", function () {
    fireworks();
  });
}

function fireworks() {
  $(".page_one").addClass("hide");
  initAnimate();
}

function modal(content, callback) {
  var tpl =
    '<div class="container">' +
    '<div class="mask"></div>' +
    '<div class="modal">' +
    "<p>" +
    content +
    "</p>" +
    '<button type="button" id="confirm" class="confirm">确定</button>' +
    "</div>" +
    "</div>";
  $("body").append(tpl);
  $(document).on("click", ".confirm", function () {
    $(".container").remove();
    callback();
  });
}
