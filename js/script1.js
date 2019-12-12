const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');

const sec1 = document.querySelector('#sek1');
const sec10 = document.querySelector('#sek10');
const min1 = document.querySelector('#min1');
const min10 = document.querySelector('#min10');

let countSec = 0;
let countMin = 0;
let startTime = 0
let sumBar = "0%";
let stopcount = false;

const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	

  if (stopcount == true)
    return;

	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);

  if (total <= 0) {
    startTime = 0
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>I am done...</p>'
  }
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  } 
  barUpdate()
  updateText();
}

stop.onclick = () =>{
  stopcount = true;
}

reset.onclick = () =>{
  location.reload() // window.location.reload()
}

start.onclick = () => {
  stopcount = false
  countDown();  
}

const barUpdate = () => {
  let sum_sec = (100 / startTime * (countSec + countMin * 60)).toFixed(1); //вычисление процентов
  sumBar = sum_sec +"%"; // Возвращение типа текста
  $("#my-progress-bar").width(sumBar); // Загрузка в прогресс-бар и ниже примочка в виде бонуса..
  document.getElementById('msg').innerText = minutes.innerHTML + ":" + seconds.innerHTML + "  " + "from the set" + "   " + sumBar;
}

$('.btn').on('click', function(e) {
  temp_1 = parseInt($(this).text(),10); // Преобразование в число текста кнопки
  sumBar = parseInt(sumBar, 10) // Преобразование в число текста
  if ('sek1' == this.id)
    if (countSec < 59)
      countSec = countSec + temp_1
    else (countSec = 0)
  if ('sek10' == this.id)
    if (countSec < 50)
      countSec = countSec + temp_1
    else (countSec = 0,
      countMin++)
  if ('min1' == this.id)
    if (countMin < 59)
      countMin = countMin + temp_1
    else (countMin = 0)
  if ('min10' == this.id)
    if (countMin < 59)
      countMin = countMin + temp_1
    else (countSec = 0,
      countMin = 60)
   startTime = countSec + countMin * 60    
  updateText()
  barUpdate()
});

//$('#element').block(); // заблокируем отдельный элемент
//$('#element').unblock(); // раззаблокируем элемент заблокированный ранее


