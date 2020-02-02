//varible for pagination? 
var pageCounter = 1;
//variable for the div ID
var animalContainer = document.getElementById("animal-info");
//Variable for the button
var btn = document.getElementById("btn");
//listen for a button click
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();//used for JSON not XML
    //recieve data from an external source using GET
    ourRequest.open('GET',"https://learnwebcode.github.io/json-example/animals-"+ pageCounter +".json");
    ourRequest.onload= function() {
        //put data into a variable using AJAX - Asynchronos Javascript and XML 
        var ourData = JSON.parse(ourRequest.responseText);
        //function detailed below - prints data to the screen
        renderHTML(ourData);
        
    };
    //send request
    ourRequest.send();
    //increment for pagination 
    pageCounter++;
    //once the final page is reached, hide the button
    if (pageCounter > 3){
        btn.classList.add("hideMe");
    }
})
//function selects the specific data from the database and presents how we would like.
function renderHTML(data) {
    var htmlString = "";
    //These objects has objects in objects - arrays in arrays.
    //therefore there are many loops etc to get the data we want to be displayed how we would like.
    //There is a easier way to do this with 'handlebars' but I am yet to look at this.
    for (i=0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for (ii=0; ii< data[i].foods.likes.length; ii++){
            if (ii==0){
            htmlString += data[i].foods.likes[ii];
            }
            else
            htmlString += " and " + data[i].foods.likes[ii];
        }
        htmlString+=" and dislikes "; 
        for (ii=0; ii< data[i].foods.dislikes.length; ii++){
            if (ii==0){
            htmlString += data[i].foods.dislikes[ii];
            }
            else
            htmlString += " and " + data[i].foods.dislikes[ii];
        }
        htmlString+=".<p>"; 
    }
    //This adds the the string to the HTML
    animalContainer.insertAdjacentHTML('beforeend', htmlString);

}