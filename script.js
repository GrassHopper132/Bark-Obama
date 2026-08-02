

input = input("Do you love dogs? ").strip().lower()


const myButton = document.querySelector('.my-btn');


myButton.addEventListener('click', function() {
    alert('The button was clicked!');
});

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

const box = document.getElementById('myBox');
box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'blue';
});
document.getElementById('usernameInput').addEventListener('keyup', function(event) {
    console.log('You typed: ' + event.target.value);
});
