let input_field = document.getElementById('name')
let submitBtn = document.getElementById('submit')
submitBtn.onclick = (e) => {
    if(input_field.value == ""){
        e.preventDefault();
    }
    else if (input_field.value == "Alice" || input_field.value == "Bob"){
        alert(`hello ${input_field.value}`)
    }
    else alert(`hello Stranger`)

}


