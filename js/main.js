// DOM elements

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Options

const showAmPm = true;

// Show Time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

// Set AM or PM

    const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format

    hour = hour % 12 || 12;

//Output Time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeroes

function addZero(n) {
    return (parseInt(n, 10) <10 ? '0' : '') + n ;
}

//Set background and greeting

function setBg() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Dobro jutro ';
    } else if (hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Dobar dan ';
        
    } else {
        //evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Dobro veče ';
        document.body.style.color = 'white';
        
    }
    
}

//Get name

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
    
}

//Set Name

function setName(e) {
  if(e.type === 'keypress') {
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText);
        name.blur();  
    }

  } else {

    localStorage.setItem('name', e.target.innerText);
  }


  
}

//Get focus

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
    
}

//Set Focus

function setFocus(e) {
    if(e.type === 'keypress') {
      if(e.which == 13 || e.keyCode == 13){
          localStorage.setItem('focus', e.target.innerText);
          focus.blur();  
      }
  
    } else {
  
      localStorage.setItem('focus', e.target.innerText);
    }
     
  }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBg();
getName();
getFocus();