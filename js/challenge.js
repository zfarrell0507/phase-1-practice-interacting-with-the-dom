

const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const submit = document.getElementById("submit");
const pause = document.getElementById("pause");   

let time = 0;
let isPaused = false;

let running = setInterval('interval()', 1000);

function interval() {
    if (isPaused == false) {
        time++;
        counter.innerText = `${time}`;
    }
    if (isPaused == true) {
        counter.innerText = `${time}`;
    }
}
minus.addEventListener('click', () => {
    counter.innerText = `${--time}`
});
plus.addEventListener('click', () => {
    counter.innerText = `${++time}`
});
heart.addEventListener('click', function() {

    const likedNum = document.querySelector(`[data-num='${time}']`);
    if(likedNum === null) {
        const newLikedNum = document.createElement('li');
        newLikedNum.setAttribute("data-num", time)
        newLikedNum.innerText = `${time} has been liked <span>1</span> time.`;
        const like = document.getElementsByClassName('likes')
        like.append(newLikedNum);
    }
    else{
        const numOfLikes = likedNum.querySelector('span');
        numOfLikes.innerText = parseInt(numOfLikes.innerText) + 1;
    }
});
