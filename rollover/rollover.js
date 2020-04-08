$('body').append('<div></div>'); // creating a div
$('div').attr('id', 'mydiv');
$('#mydiv').css({"height": "200px", "width":"200px", "background-color": "blue", "text-align": "center", "color": "white", "font-size":"32px"});
$(document).ready(function(){

      $("#mydiv").mouseover(function() {
       $(this).text("Over");
      }); 

      $("#mydiv").mouseout(function() {
      $(this).text('Out');
      });    
});
