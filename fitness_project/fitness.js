
// Add event listener to join now button
document.querySelector('button').addEventListener('click', () => {
    alert('Thank you for joining Fitness Club!');
});

// Validate contact form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
    } else {
        // Send data to server or mailto link
        console.log('Form submitted:', { name, email, message });
    }
});

// const calculateButton = document.getElementById('calculate');
// const resultElement = document.getElementById('result');

// calculateButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const height = parseInt(document.getElementById('height').value);
//     const age = parseInt(document.getElementById('age').value);
//     const gender = document.getElementById('gender').value;

//     if (height && age && gender) {
//         const weight = calculateWeight(height, age, gender);
//         resultElement.innerText = `Your ideal weight is: ${weight} kg`;
//     } else {
//         resultElement.innerText = 'Please fill out all fields.';
//     }
// });

function calculateWeight(height, age, gender) {
    let weight;

    if (gender === 'male') {
        // Broca's Index Formula
        weight = (height - 100) - ((height - 150) / 4);
    } else if (gender === 'female') {
        // Broca's Index Formula
        weight = (height - 100) - ((height - 150) / 2.5);
    }

    // Adjust weight based on age (optional)
    if (age >= 18 && age <= 30) {
        weight *= 1; // no adjustment
    } else if (age >= 31 && age <= 50) {
        weight *= 0.95; // 5% reduction
    } else if (age >= 51) {
        weight *= 0.9; // 10% reduction
    }

    return Math.round(weight);
}








let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
} 

// typing text code

const typed = new Typed('.multiple-text', {
    strings: ['The Fitness club', 'Weight gain','Fat lose','Yoga and exercices','strength training',],
    typeSpeed: 60,
    backspeed:60,
    backDelay: 1000,
    loop: true,
  });