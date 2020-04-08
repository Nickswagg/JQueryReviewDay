
$( "#myInput" ).keyup(function() {  //selecting my input value and adding a keyup function to it 
    var ValueatTime = $('#myInput').val() // creating a variable that collects my input value  
    alert(ValueatTime); // alert my value on keyup
    $('body').append('<div></div>'); // creating a div in my body
    $('div').attr('id', 'adding'); // adding and id property to my div
    $('#adding').css({"height": "50px", "width": "300px", "background-color": "blue"}); // styling my di
    $('#adding').append(ValueatTime); // Adding my value to my div
});