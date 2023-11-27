const bottle = document.querySelector('.bottle');
const action = document.querySelector('.action');
const sideArr = [0, 90, 180, 270];
const actionArr = ['Song', 'Pong', 'Tong', 'Gong'];

bottle.addEventListener('click', () =>{
    action.style.display = 'none';
    bottle.classList.add('bottle-turn');
    bottle.disabled = true;
    bottle.style.transform  = `translate(-50%, -50%) rotate(${getRandom(sideArr)}deg)`;
    getResult();
});

function getResult(){
    setTimeout(() =>{
        bottle.classList.remove('bottle-turn');
        bottle.disabled = false;
        action.style.display = 'block';
        action.textContent = getRandom(actionArr);
    }, 1000);
}

function getRandom(arr){

    return arr[Math.floor(Math.random() * arr.length)];
}