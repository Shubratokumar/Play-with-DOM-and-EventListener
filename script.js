// checking js external file added or not by alert 
//alert('Hello')

// accessing elements by class name
/* const allButton = document.getElementsByClassName('button-test');
//console.log(allButton)
// accessing each elements or class by using for loop
for(const button of allButton){
    button.addEventListener('click', function(event){
        //console.log(event.target.parentNode)
        if(event.target.id == "prime"){
            document.getElementById('prime').style.color = 'cyan'
        } else{
            document.getElementById('prime').style.color = 'red'
        }
    })
}
// accessing elements by their id
const prime = document.getElementById('prime');
//console.log(prime) */

// counting full code
/* let count = 0;
// add function
document.getElementById('add').addEventListener('click', function(e){
    // function test
    // console.log('is add working?')
    count++;
    // count = count + 1;
    //console.log(count)
    document.getElementById('count').innerText = count;
})
// minus function
document.getElementById('minus').addEventListener('click', function(e){
    // function test
    // console.log('is minus working?')
    //count--;
    count = count - 1;
    //console.log(count)
    document.getElementById('count').innerText = count;
}) */

// optimizing count code
let count = 0;
// add with function call onclick inside button
function add(event){
    // handle negative value
    if(count <= 0){
        count = 0;
    }
    count++;
    control('count')// function call
}
// minus with function call onclick inside button
function minus(event){
    // handle negative value
    if(count <= 0){
        count = 1;
    }
    count--;
    control('count')// function call
}
// optimize the code for similer with function call
function control(id){
    document.getElementById(id).innerText = count;
    
}