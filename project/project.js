//cheking external js file works or not
//alert("Project")

// project work starts here
let count = 0; // global variable

document.getElementById('add-btn').addEventListener('click', function(){
    count++; // increase the value when click on the button
   
    const inputValue = document.getElementById('input-value').value;
    //console.log(inputValue);

    // Validation : When input is an empty string
    if(inputValue  ==  ""){
        alert("Please enter a valid value.");
    }
    // Validation : When input is not a string
    else if(inputValue != "string") {
        alert("Please enter a string value.");
    }
    else{
        // access the parent container and store inside a variable
        const mainContainer = document.getElementById("content-container");
        // access the child container and store inside a variable
        // const tableContainer = document.getElementById("table-content");
        // create a new element 
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = `<th>${count}</th>
        <td>${inputValue}</td>
        <td>
        <button class = "btn btn-danger delete-btn m-3">Delete</button><button class = "btn btn-success done-btn">Done</button>
        </td>`;
        // appendChild to parent
        mainContainer.appendChild(tableContainer);

        // cleaning the input field after input something: empty string
        document.getElementById('input-value').value = '';

        // accessing the delete and done button & add event handler
        const deleteButton = document.getElementsByClassName('delete-btn');
        // run a for of loop through the button class
        for(const button of deleteButton){
            button.addEventListener('click', function(e){
                // remove an item after clicking the button using parentNode
                e.target.parentNode.parentNode.style.display = "none";
            })
        }

        const doneButton = document.getElementsByClassName('done-btn');
        for(const button of doneButton){
            button.addEventListener('click', function(e){
                e.target.parentNode.parentNode.style.textDecoration = "line-through";
            })
        }
        
        
    }
})
