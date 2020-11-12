let counter = document.getElementById("counter"),
  i = 43,
  interval = 600,
  tl = gsap.timeline({ defaults: { ease: "power2.out" } });

let loading = setInterval(function () {
  counter.textContent = i;
  i++;
  if (parseInt(counter.textContent) == 100) {
    $(".preloader .counter").css("transform", "translate(-55%,-50%)");
  }
  if (parseInt(counter.textContent) >= 100) {
    clearInterval(loading);
    tl.to(".counter", { duration: 0, opacity: 0, delay: 0.3 })
      .to(
        ".preloader h3 span",
        {
          duration: 2,
          width: "100%",
          backgroundColor: "#fff",
          padding: "0 15px",
          delay: 0.1,
        },
        "+=.2"
      )
      .to(".preloader", {
        duration: 1.5,
        x: "-100%",
      })
      .to("body", {
        duration: 0,
        overflow: "auto",
      })
      .from("nav", {
        duration: 0.5,
        opacity: "0",
      })
      .from(".title", {
        duration: 0.8,
        opacity: "0",
        paddingTop: "100px",
      })
      .from(".picCol", {
        duration: 0.8,
        opacity: "0",
      })
      .from(".hoveringDown", {
        duration: 0.8,
        opacity: "0",
        y: "100",
      });
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
// var rellax = new Rellax(".rellax");

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
  }
});

$(".img-container").tilt({
  glare: true,
  maxGlare: 0.2,
  perspective: 700,
});
