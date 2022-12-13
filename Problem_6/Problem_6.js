let table = document.getElementById('table')
let str = '';

for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        let product = i * j
        str += `${product} ,`
    }
    let br = document.createElement('br');
    table.innerHTML = str
    table.appendChild(br)
}