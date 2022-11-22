let arr = []

function adicionar(){
    texto_input = document.querySelector("#input_texto").value
    
    if(texto_input >= 0){
        alert("[ERROR] Campo vazio ou preenchido inapropriadamente")
    }
    else{
        arr.push(texto_input)
        const tarefa = document.createElement("ul")
        lista.appendChild(tarefa)

        tarefa.innerHTML = `<li>${texto_input}</li> 
        <button id="btn" onclick="deletar()"><i class="fa-solid fa-trash-can" id="lixo"></i></button>`
    }
}

function deletar(){
    let exclui = document.querySelector("#btn")
    let excluir = document.querySelector("li")
    arr.innerHTML = ""
        for(let cont = 0; cont < arr.length; cont++){
            excluir.innerHTML = excluir.style.display='none';
            exclui.innerHTML = exclui.style.display = 'none ';
        }

}