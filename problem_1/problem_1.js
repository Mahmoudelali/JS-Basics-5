let input_field = document.getElementById('name')
let submitBtn = document.getElementById('submit')
submitBtn.onclick = (e) => {
    if(input_field.value == ""){
        e.preventDefault();
    }
    else     alert(`hello ${input_field.value}`)

}


