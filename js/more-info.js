$(".more-info").hide();


$(".info-button").click(function()
{
  if($(this).prev().is(":hidden"))
  {
    $(this).prev().fadeIn(500).slideDown(500);
    $(this).text("Less Info");
  }

  else {
    $(this).prev().fadeOut(500).slideUp(500);
    $(this).text("More Info");

  }

})
