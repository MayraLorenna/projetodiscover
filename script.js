function toggleMode(){
    const html = document.documentElement
    // if (html.classList.contains("light")){
    //     html.classList.remove("light")
    // }
    // else (html.classList.add("light"))

//ou pode-se usar a seguinte função "toggle()" - já predefinida
    html.classList.toggle("light")
// pegar a tag img
    const img = document.querySelector("#profile img")
//substituir a img
    if (html.classList.contains("light")){
        img.setAttribute("src", "/assets/avatar-light.png")
        img.setAttribute("alt", "Foto de um gato cinza, usando óculos escuros")
    }
    else {
        img.setAttribute("src", "/assets/avatar.png")
        img.setAttribute("alt", "Foto de Mayra Cavalcante, usando camisa preta e fundo branco")
    }
}