const cookie = document.querySelector('.cookie');
const wrappedCookie = document.querySelector('.wrappedCookie');
const wrappedLuck = document.querySelector('.wrappedLuck');
const hero = document.querySelector('.hero');
const newCookieButton = document.querySelector('.newCookieButton');
const luckyMessage = document.querySelector('.luckyMessage');

cookie.addEventListener('click', showLuck);
newCookieButton.addEventListener('click', newCookie);

const messageList = [
   'A vida trará coisas boas se tiver paciência.',
   'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
   'A juventude não é uma época da vida, é um estado de espírito.',
   'Siga os bons e aprenda com eles.'
];

const automaticNumber = Math.round(Math.random() * 3);


function showLuck(){
   wrappedCookie.classList.add('disable');
   wrappedLuck.classList.remove('disable');
   hero.classList.add('disableOpacity');

   luckyMessage.innerText = messageList[automaticNumber];
}

function newCookie(){
   setInterval(() => {
      location.assign('../index.html');
   }, 500);
}

