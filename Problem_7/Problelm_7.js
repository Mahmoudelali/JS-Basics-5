let str = "" ;

for( let i =0 ; i <= 30 ; i++) {
    if (i % 2 === 0) {
        str += ` ${i} , `
    }
    else continue;
}

let target = document.getElementById('target')
target.innerHTML = str;