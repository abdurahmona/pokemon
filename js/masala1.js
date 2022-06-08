// 1-MASALA

let arr = [];
arr.push(Number(prompt("Raqam kiriting:")));
arr.push(Number(prompt("Raqam kiriting:")));
arr.push(Number(prompt("Raqam kiriting:")));

function sum(arr) {
    let sum = 0;
    arr.forEach(e => {
            sum+=e;
    });
    return sum;
}

console.log(sum(arr));
