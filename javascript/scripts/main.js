// we want to change the heading text to match the item in the list that has been clicked.
//And for this to still function if additional items are added to the list.
//-------------------------------------------------------------------------------------------

//Declare variables
// var myHeading will be populated with the h1 ID
var myHeading = document.getElementById("heading");
//var listItems is an array will be populated with all items listItems[0]...[2]
var listItems = document.getElementById("list").getElementsByTagName("li");
//var myButton
var myButton = document.getElementById("btn");
//give the unordered list a variable to allow it to be manipulated
var myList = document.getElementById("list");

var newItemCounter = 1;

//first we need to identify what has been clicked
//instead of listening for each item in the list we just listen to the wholelist
// and work out which specific item was clicked later. 
myList.addEventListener("click", activateItem);

//this function is initiated when a click event has been noted on the list
//'e' signifies which element has been clicked
function activateItem(e) {
    //if the 'e' element is a list item 
    if (e.target.nodeName = "LI") {
        //it populates the HTML heading text with the text from the clicked list item (e.target)
        myHeading.innerHTML = e.target.innerHTML;
        //loop through all other list items removing Highlight
        //e.target.parentNode.children = all children of the parent of the active element 
        // i.e. all siblings
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("highlight");
        }
        //highlight the active "clicked" 'e' element
        e.target.classList.add("highlight");
    }
}
// 'listen' for button press.
myButton.addEventListener("click", createNewItem);

//this function adds the additional list element to the list
function createNewItem() {
    //concatinating the text with the new number and adding to the list
    myList.innerHTML += "<li>Some New Item " + newItemCounter + " </li>";
    //incrementing the new number
    newItemCounter++;
};