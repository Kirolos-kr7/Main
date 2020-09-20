/*global document,window,$,WOW,Rellax */

let counter = document.getElementById("counter"),
  i = 1,
  interval = 600;

let loading = setInterval(function () {
  counter.textContent = i;
  i++;
  if (parseInt(counter.textContent) >= 100) {
    clearInterval(loading);
    $(".preloader .counter").fadeOut(100);
    $(".preloader span").fadeOut(1000);
    $(".preloader").delay(100).fadeOut(1000);
    $("body").css("overflow", "auto");
  }
}, 30);

// More Down
$(".hoveringDown").click(function () {
  $("html, body")
    .delay(300)
    .animate(
      {
        scrollTop: $(".about").offset().top - 50,
      },
      interval,
      "easeInOutQuad"
    );
});

// Navigation
$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight - 80) {
    $("nav").css("background-color", "#000");
    $("nav").css("borderBottom", ".5px solid rgb(51 51 51 / 38%)");
  } else {
    $("nav").css("background-color", "transparent");
    $("nav").css("borderBottom", "0px solid #333");
  }
});

// h1 Span Hover and MouseLeave
$("nav h1 a").hover(function (e) {
  $("nav h1 span").css("backgroundColor", "red");
});
$("nav h1 a").mouseleave(function (e) {
  $("nav h1 span").css("backgroundColor", "orange");
});

//Toggle Menu
$(".dropdown button").click(function () {
  $(".blackmenu").toggleClass("path");
  $(".menu").toggleClass("path");
  $("body, html").toggleClass("overflow-hidden");
  $("button").toggleClass("Bars");
});

//Navigation Hover
$(".menu ul li").hover(function (e) {
  let backstyle = document.getElementById("backstyle");
  backstyle.textContent = e.target.textContent;
  $(".backstyle").css("display", "block");
});

$(".menu ul li").mouseleave(function () {
  $(".backstyle").css("display", "none");
});

// Navigation Goto
$(".menu ul li").click(function () {
  $("html, body")
    .delay(400)
    .animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 50,
      },
      interval,
      "easeInOutQuad"
    );
  $(".blackmenu").toggleClass("path");
  $(".menu").toggleClass("path");
  $("body, html").toggleClass("overflow-hidden");
  $("button").toggleClass("Bars");
});

//SAY Hello
$(".hireBox .btn,header .btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top - 50,
    },
    1200,
    "easeInOutQuint"
  );
});

//ScrollTop
$(".scrollToTop").click(function () {
  $("html").animate(
    {
      scrollTop: 0,
    },
    interval,
    "easeInOutQuart"
  );
});

//ScrollTop Visibility
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".scrollToTop").fadeIn(200);
  } else {
    $(".scrollToTop").fadeOut(200);
  }
});

//Carousel Interval
$(".carousel").carousel({
  interval: 17000,
});

//WOW, Rellax js
new WOW().init();
var rellax = new Rellax(".rellax");

$(".moreDetails").click(function (e) {
  e.preventDefault();
  $(".moreWindow").fadeIn(300);
  $(".windowBacklayer").fadeIn(300);
  $("body").addClass("overflow-hidden");
  var projectImg = e.target.getAttribute("data-img");
  var projectName = e.target.getAttribute("data-name");
  var projectDate = e.target.getAttribute("data-date");
  var projectLanguages = e.target.getAttribute("data-lang");
  var projectHref = e.target.getAttribute("data-href");
  var Languages = projectLanguages.split("+");
  document.getElementById("projectImg").src = projectImg;
  document.getElementById("projectName").textContent =
    "Project Name: " + projectName;
  document.getElementById("projectDate").textContent =
    "Project Date: " + projectDate;
  document.getElementById("projectLanguages").textContent =
    "Project Languages: ";
  Languages.forEach((lang) => {
    document.getElementById("projectLanguages").innerHTML +=
      '<span class="redspan">' + lang + "</span>";
  });
  document.getElementById("projectView").href = projectHref;
  document.getElementById("projectView").target = "_blank";
});

$(".exit").click(function (e) {
  $(".moreWindow").fadeOut(300);
  $(".windowBacklayer").fadeOut(300);
  $("body").removeClass("overflow-hidden");
  document.getElementById("projectLanguages").innerHTML = "Project Languages: ";
});

$(document).ready(function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(".cursor").hide(0);
  } else {
    $(window).mousemove(function (e) {
      let x = e.clientX,
        y = e.clientY;
      $(".cursor").css("top", y);
      $(".cursor").css("left", x);
    });

    $(".zoom").hover(function () {
      $(".cursor").css("width", 72);
      $(".cursor").css("height", 72);
    });

    $(".zoom").mouseleave(function () {
      $(".cursor").css("width", 30);
      $(".cursor").css("height", 30);
    });

    $(".title .btn").mousemove(function (e) {
      e.preventDefault();
      let x = e.clientX,
        y = e.clientY;
      x = (x * 1) / 10 - 25;
      y = (y * 1) / 10 - 50;
      let code = "translate(" + x + "px, " + y + "px) scale(1.13)";
      $(this).css("transform", code);
      $(this).css("transformOrigin", "top");
    });

    $(".title .btn").mouseleave(function () {
      $(this).css("transform", "matrix(1, 0, 0, 1, 0, 0)");
    });

    $("body").mousemove(function (e) {
      let x = e.clientX,
        y = e.clientY;
      x = (x * -1) / 50;
      y = (y * -1) / 50;
      let code = ":translate(" + x + "px, " + y + "px)";
      $(".Wood").css("top", y);
      $(".Wood").css("right", x);
    });
  }
});

$(".img-container").tilt({
  glare: true,
  maxGlare: 0.2,
  perspective: 700,
});
