//add jQuery in script tags to change CSS or page behavior based on end user actions -->
// Button inputs and background colors
  $(document).ready(function(){
    $(":input").css("background-color", "aqua");
});

//Function when end user clicks content in paragraph tags, then content disappears
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
  

// Change heading:
 document.getElementById("myH").innerHTML = "Hi Dave!";
// Change paragraph:
 document.getElementById("myP").innerHTML = "My appreciation for web developers has grown tenfold after taking this third course in HTML5!  I am eager to gain solid skills in javascript and jQuery, and recognize that I have a long way to go.  Thanks for understanding and being so supportive in my journey!";   
  
