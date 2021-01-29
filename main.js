'use strict'
$(function () {
  $(".active-modal").click(function () {
    var modalIndex = $(this).index();
    $(".modal-content").eq(modalIndex).fadeToggle(1000)
    $(".modal-bg").toggleClass("open")
    $(".active-modal").toggleClass("open-a");
    $("html, body").css("overflow", "hidden");
  })
})
