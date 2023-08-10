$(document).ready(function() {


  // 상단 탭메뉴 클릭
  $(".tabsection .tab li").click(function() {
    let result = $(this).attr("data-alt");
    $(".tabsection .tabContent>div").removeClass("active");
    $("#" + result).addClass("active");
  });

  $(".tabsection .tab li").click(function() {
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });


  

   // 서브페이지 - 상단 문의하기 팝업창 (열기)
   $(".goAsk").click(function() {
    $(".topBg").css({"display":"block"})
    $(".topPp").css({"display":"block"})
    $("body").css({"overflow":"hidden"})
  })

  // (닫기)
  $(".close").click(function() {
    $(".topBg").css({"display":"none"})
    $(".topPp").css({"display":"none"})
    $("body").css({"overflow":"visible"})
  })





  // 서브페이지 - 하단 정답입력 클릭시 모달창 (열기)
  $(".bottombtn").click(function() {
    $(".bottomBg").css({"display":"block"})
    $(".botomPp").css({"display":"block"})
    $("body").css({"overflow":"hidden"})
  })
    
  // (닫기)
  $(".close").click(function() {
    $(".bottomBg").css({"display":"none"})
    $(".botomPp").css({"display":"none"})
    $("body").css({"overflow":"visible"})
  })
  
  // (이동)
  $(".goInput").click(function() {
    $(".inputtext").css({"display":"block"})
    $(".wrong").css({"display":"none"})
  })









});