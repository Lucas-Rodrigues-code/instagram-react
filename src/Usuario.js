import React from "react"

export default function Usuario() {

    const fotoPadrao = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7DLuNrnnXtrqowX6RnLeiRZZYOFtPBLjdxhnM7wr&s"


    const [nome, setNome] = React.useState("User") 
    const [foto, setFoto] = React.useState(fotoPadrao)

    function inserirNome(){

        const nomePrompt = prompt("Qual é o se nome?")
        setNome(nomePrompt) 
    }
    
    function mudarImagem(){
        const fotoPrompt = prompt("Insira o link de uma foto aqui!")
        setFoto(fotoPrompt)
    }


    return (
        


            <div class="usuario">
                <img src={foto} onClick={mudarImagem} />
                <div class="texto">
                    <strong>{nome}</strong>
                    <span>
                        {nome}
                        <ion-icon name="pencil" onClick={inserirNome} ></ion-icon>
                    </span>
                </div>
            </div>


       
    )
}







