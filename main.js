let N;
let M;

while (!(N % 1 === 0 && Number.isInteger(N))) {
    N = +prompt('Ведіть перше число: ', '');
    alert('Водьте лише цілі числа!!!');
}
while (!(M % 1 === 0 && Number.isInteger(parseInt(M)) && M > N)) {
    M = +prompt('Ведіть друге число: ', ''); 
    if (M > N) {
        alert('Наступний крок, підрахунок парних і непарних чисел')
    } else {
        alert('Друге число має бути більше першого і не дорівнювати')
    }  
}

const skipNamb = confirm('Пропускати парні числа');

let sum = 0;

for (let i = N; i <= M; i++) {
    if (skipNamb && i % 2 === 0) {
        continue;
    } else {
        sum += i;
        console.log(sum);
    }
}
document.writeln(`Резултат: ${sum}`);