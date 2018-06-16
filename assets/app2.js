

$(document).ready(function() {
const gifyArry = ["fintech","digibyte","etherum","trading","blockchain","space","science","economics","bitcoin"]

  

    //button creation for each item 
    gifyArry.forEach(function(itemName){
 
      var a = $("<button>");
     
   
      a.addClass("item btn pulse");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", itemName);
    
      // Providing the button's text with a value of the movie at index i
      a.text(itemName);
      // Adding the button to the HTML
      $("#buttonSpace").append(a);
  
    });

    $("button").on("click", function() {
   // Grabbing and storing the data-animal property value from the button
       var gifyName = $(this).attr("data-name");

   // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          gifyName + "&api_key=dc6zaTOxFJmzC&limit=10";
         
    //testing and debugging
          console.log(gifyName);
          console.log(queryURL);
         
    //API Request 
        $.ajax({
            url: queryURL,
            method: "GET"
         }).then(function(response){
          var results = response.data; 
            
    //testing and debugging
            console.log(response);
            console.log(results);

            
          //creating divs for images and appending them 
          
        for (var i = 0; i < results.length; i++) {

              // Creating and storing a div tag
              var gifyDiv = $("<div>");
              gifyDiv.addClass("gif")

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);

              // Creating and storing an image tag
              var gifyImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              
              gifyImage.attr("src", results[i].images.fixed_height.url);
              gifyImage.attr("data-move", results[i].images.fixed_height_downsampled.url)
              gifyImage.attr("data-still", results[i].images.fixed_height.url)
              gifyImage.attr("data-state", 'still');

              // Appending image to New Div
              gifyDiv.append(p);
              gifyDiv.append(gifyImage);
              // Appending to HTML DIV
              $("#imageSpace").prepend(gifyDiv);
       }
    });
  });

  $("img").on("click", function() {
    console.log(hello);
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === 'still') {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});