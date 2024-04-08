let text = `Count your tourist's TAX!`;
let i = 0;
let speed = 100;

function type() {
    if (i < text.length){
        document.querySelector('#header').textContent += text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}

const button = document.querySelector('#btn');
button.addEventListener('click',calculateTax);

const buttonTax = document.querySelector('#chooseTax');
buttonTax.addEventListener('click',showTax);

function showTax(e){
    e.preventDefault();
    tax.style.display = 'block';
}


function calculateTax(e){
    e.preventDefault();
    const people = document.querySelector('#adultsNumber').value;
    const kidsNumber = document.querySelector('#kidsNumber').value;
    const night = document.querySelector('#night').value;
    const tax = document.querySelector('#tax').value;

    if(people ==="" || night === "" || people <1 || night <1){
        Swal.fire({
            icon: 'error',
            title: 'Sorry!',
            text: 'Please enter your information (number only)!!'
    })
    }
    else if(tax == ''){
        Swal.fire({
            icon: 'error',
            title: 'Sorry!',
            text: 'Please choose your tax!!'
    })
    }

    let amountAdult = (people*1) *night;
    let amountKid = kidsNumber*night*tax;
    let totalTax = amountAdult+amountKid;

    document.querySelector('#adultTax').textContent = amountAdult;
    document.querySelector('#kidTax').textContent = amountKid;
    document.querySelector('#adultAndKid').textContent = totalTax;
    document.querySelector('.sumNight').textContent = night;
    document.querySelector('.sumNightKid').textContent = night;
    document.querySelector('.sumNights').textContent = night;

    amountAdult = amountAdult.toFixed(2);
    amountKid = amountKid.toFixed(2);
    totalTax = totalTax.toFixed(2);
}

type();
calculateTax();