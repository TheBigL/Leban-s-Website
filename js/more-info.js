$(".more-info").hide();


$(".info-button").click(function()
{
  if($(this).next().is(":hidden"))
  {
    $(this).next().toggle();
    $(this).text("Less Info");
  }

  else {
    $(this).next().toggle();
    $(this).text("More Info");

  }

})
