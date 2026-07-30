const stars=document.getElementById("stars");
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

for(let i=0;i<250;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}
const shooting=document.getElementById("shooting-stars");

function createMeteor(){

const meteor=document.createElement("div");

meteor.className="meteor";

meteor.style.left=Math.random()*100+"vw";

meteor.style.top=Math.random()*40+"vh";

meteor.style.animationDuration=(Math.random()*2+2)+"s";

shooting.appendChild(meteor);

setTimeout(()=>{

meteor.remove();

},4000);

}

setInterval(createMeteor,2500);
const particles=document.getElementById("particles");

for(let i=0;i<60;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.animationDuration=(Math.random()*15+12)+"s";

p.style.animationDelay=Math.random()*12+"s";

particles.appendChild(p);

}
const button=document.getElementById("openLetter");

const overlay=document.querySelector(".overlay");

const envelope=document.getElementById("envelopeScene");

button.onclick = () => {
    
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";

    setTimeout(() => {
        envelope.classList.add("active");
    }, 1000);

    setTimeout(() => {
        envelope.classList.add("expand");
    }, 1800);
    setTimeout(()=>{

    typeText(title,titleText,150,()=>{

        typeText(letter,message,100,()=>{

            finishBtn.style.display="block";

            setTimeout(()=>{

                finishBtn.classList.add("show");

            },100);

        });

    });

},4200);
};
function typeSound() {

    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    oscillator.type = "triangle";

    oscillator.frequency.value = 900 + Math.random() * 200;

    gain.gain.value = 0.03;

    oscillator.connect(gain);
    gain.connect(audioCtx.destination);

    oscillator.start();

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + 0.04
    );

    oscillator.stop(audioCtx.currentTime + 0.04);

}

const title = document.getElementById("title");
const letter = document.getElementById("letterText");
const finishBtn = document.getElementById("finishBtn");

const titleText = "🎁";

const message = `С днем рождения, Малика Мухитдиновна! 🎉

Хочу пожелать вам крепкого здоровья, счастья, душевного спокойствия и исполнения всех ваших желаний. Пусть каждый день приносит радость и новые поводы для улыбки.

Пусть вас всегда окружают хорошие люди, а ученики радуют своими успехами. Всего вам самого доброго и светлого! 🌹

А теперь письмо ✍️

Я вообще-то хотел написать вам письмо пораньше и подарить его на выпускном, но никак не получалось собрать мысли и написать что-нибудь, вот и откладывал на потом. Но сегодня решил все-таки написать что-нибудь, потому что уже слишком долго откладываю.

Этот последний год был самым лучшим для меня. Я говорю не про два года, потому что на первом курсе я не так уже открывался и общался с вами и с группой. Причина была такой же, как и у вас — не хотел привыкать к новым людям.

Перед поездкой в Бухару у меня было много проблем, особенно с родителями, и целый месяц я был сам по себе, потому что ничто не помогало улучшить настроение, ни с кем не общался. Но после поездки в Бухару все изменилось: я начал вместо обеда приходить в 45 кабинет, общаться с вами, играть с группой, и постепенно привык ко всему, даже к чаю 😁.

Мне так нравилось, как мы сидели, общались на разные темы или играли с группой во что-либо. В эти моменты я забывал о своих проблемах. Все это помогало мне держать баланс настроения, и я понял это только после последнего выпускного в Сантини: для меня Лицей — это не просто учеба, друзья и общение, а кое-что большее, что помогало мне держаться.

Я хочу сказать вам спасибо за то, что вы всегда думали о нас, поддерживали в трудных ситуациях. Я желаю вам самого наилучшего, и чтобы люди, которых вы цените, так же ценили вас.

И надеюсь, что в сентябре 45 кабинет будет ждать нас.

Если письмо странное, прошу не судить строго😁. У меня никогда не получалось писать письма.

С днем рождения еще раз! 🎉
`;

function typeText(element, text, speed, callback) {

    let i = 0;

    function typing() {

        if (i >= text.length) {

            if (callback) callback();
            return;

        }

        const char = text.charAt(i);
        element.innerHTML += char;

        i++;

        let delay = speed + Math.random() * 25;

        switch (char) {

            case ".":
                delay += 650;
                break;

            case ",":
                delay += 250;
                break;

            case "!":
            case "?":
                delay += 800;
                break;

            case ":":
                delay += 450;
                break;

            case ";":
                delay += 400;
                break;

            case "\n":
                delay += 1000;
                break;
        }

        setTimeout(typing, delay);

    }

    typing();

}
const finalScreen=document.getElementById("finalScreen");
const finalText=document.getElementById("finalText");

const ending=`Надеюсь, однажды вы снова откроете это письмо. И снова улыбнетесь.
`;

finishBtn.onclick=()=>{

    finalScreen.classList.add("show");

    finalText.innerHTML="";

    typeText(finalText,ending,100);

};
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

button.addEventListener("click", () => {

    music.play();

    playing = true;

    musicBtn.innerHTML = "🎵";

});

musicBtn.onclick = () => {

    if (playing) {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "🔇";

    } else {

        music.play();

        playing = true;

        musicBtn.innerHTML = "🎵";

    }

};
window.onload = () => {
    music.play();
};
async function showPhotos(){

    const gallery=document.getElementById("photoGallery");

    gallery.style.display="flex";

    const photos=document.querySelectorAll(".memory-photo");

    for(const photo of photos){

        await new Promise(resolve=>setTimeout(resolve,800));

        photo.classList.add("show");

        photo.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

        await new Promise(resolve=>setTimeout(resolve,2500));

    }

    document.getElementById("finishBtn").style.display="block";

}