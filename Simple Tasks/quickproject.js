document.addEventListener('DOMContentLoaded', function() {
    
    var nameButton=document.createElement('button');
    nameButton.id="name";
    nameButton.innerText=Name;
    document.empty.appendChild(addButton);
    nameButton .addEventListener('click',David)
    
    var reminder= document.getElementById('reminder');
    var addButton= document.createElement('button');  
    addButton.id = 'welcome';
    addButton.innerText= "welcome";
    document.body.appendChild(addButton);
    addButton.addEventListener('click', welcome);
    reminder.addEventListener('click', changeColor);
   
   addButton.
    
});
        function welcome(){
         window.alert('Welcome to the webpage!');
    }
    
 
   function changeColor(event) {
      var reminder=event.target;
    var colorArray = ['#F2F3F4', '#CD9575', '#915C83','#FAEBD7','#008000','#8DB600','#FBCEB1',
    '#00FFFF','#7FFFD4','#4B5320','#3B444B','#E9D66B','#B2BEB5', '#87A96B', '#FF9966'];
    var index = Math.floor(Math.random() * colorArray.length);
    reminder.style.backg
    
    
    roundColor = colorArray[index];
   
 }
        
    