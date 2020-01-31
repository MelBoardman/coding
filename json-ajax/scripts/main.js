var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();//used for JSON not XML
    //recieve data from an external source using GET
    ourRequest.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json");
    ourRequest.onload= function() {
        //put data into a variable using AJAX - Asynchronos Javascript and XML 
        var ourData = JSON.parse(ourRequest.responseText);
        //log out the first item
        console.log(ourData[0]);
    };
    ourRequest.send();
})

