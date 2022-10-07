           // Add a class to the body when I click the toggle button.
            // This class will give dark mode colours to the body and some of its children elements.


            // 1.first I need to create a function that adds or removes a class, depending on if the class already exists

            // 2. Then I need to attached that function to an event, using event listener


function toggleMode() {
   const body = document.getElementById('custom');
   
   // if has the dark-mode class then remove the class / else add it 
   if (body.classList.contains('dark-mode')) {
       //remove the class
       body.classList.remove('dark-mode');
   } else {
       //add the class
       body.classList.add('dark-mode');
   }
}