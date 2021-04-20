// +1 -1 버튼을 누르면 number값 변화

const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// 해당 선택자로 나온 애들 배열로 반환
const btns = document.querySelectorAll('button');

console.log(btns);


console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id);

increase.onclick = () => {
    // number에 있는 text값을 int(10진수)로 변환 후 값을 증가
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    // number에 있는 text값을 int(10진수)로 변환 후 값을 감소
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}