(document).addEventListener('DOMContentLoaded',function(){
   
   
   var reminder=document.getElementById('reminder');
   reminder.addEventListener('click',changeColor);
   function changeColor (event){
        var reminder=event.target;
        var colorArray = ['#F2F3F4', '#CD9575', '#915C83','#FAEBD7','#008000','#8DB600','#FBCEB1',
        '#00FFFF','#7FFFD4','#4B5320','#3B444B','#E9D66B','#B2BEB5', '#87A96B', '#FF9966'];
        var index = Math.floor(Math.random() * colorArray.length);
        reminder.style.backgroundColor = colorArray[index];
    }
        var pushHere=document.getElementById('pushHere');
        pushHere.onclick= function() {
        var words= document.getElementById('myValue').value;
        alert(words);
    }
        var addName=document.getElementById('addName');
     
     addName.onclick = function() {
        var nameContainer = document.getElementById('nameContainer');
        var spanHere = document.createElement('spanHere');
        var text = document.createTextNode('David');
        spanHere.appendChild(text);
        nameContainer.appendChild(spanHere);
     }
            
            friends.onclick = function() {
            var friends=document.getElementById('friends');    
            var friendsArray=["jason","sammy",'tobey',"sarah",'bill'];
            for(i = 0; i <friendsArray.length; i++) {
            var name= friendsArray[i];
            
            var listItem = document.getElementById('li');
            var shalom = document.getElementById('shalom');
            
            friends.appendChild(name);
            shalom.appendChild(friends);
            };
        }
;})
   

//  +    forList.onclick = function() {
//       var forList = document.getElementById('forList');
//  +    var theList = document.getElementById('ul');
//  +    var friends = ['Me','Myself','JR','Betsy','Fluffy','Francis','Francois','Spirit','Cheyenne','Kiante'];

//  +        for(var i = 0; i < friends.list; i++){
//  +            var name = friends[i];
//  +        }
//  +        var listItem = document.createElement('li');
//  +        listItem.appendChild(name);
//  +        theList.appendChild(addItem);
//  +    }

