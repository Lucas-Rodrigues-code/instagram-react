import React from "react"

export default function Posts() {

    const post = [
        {imagemUsuario:"assets/img/meowed.svg",imagemPost:"assets/img/gato-telefone.svg",curtida:"respondeai",nPessoas:"101.523"},
        {imagemUsuario:"assets/img/barked.svg",imagemPost:"assets/img/dog.svg",curtida:"adorable_animals",nPessoas:"99.159"},
        
    ]


    const [nPessoas, setNpessoas] = React.useState(101523)

    const [like, SetLike] = React.useState("")

  
    function mudarCor(){
        if(like === ""){
            SetLike("heart")
            setNpessoas(nPessoas+ 1)
        } else{
            SetLike("")
            setNpessoas(nPessoas - 1)
        }
        
        
    }

    const [salvar, setSalvar] = React.useState("")

    function salvarPost(){
        if(salvar === ""){
            setSalvar("postSalvo")
        } else{
            setSalvar("")
        }

    }


    return (
        <>
        {post.map((p) => (
            <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={p.imagemUsuario} />
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={p.imagemPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" class ={like === "" ? "" : "hide"}  onClick={mudarCor}></ion-icon>
                        <ion-icon name="heart" class ={like === "heart" ? "red" : "hide"}  onClick={mudarCor}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" class ={salvar === "" ? "" : "hide"}  onClick={salvarPost}></ion-icon>
                        <ion-icon name="bookmark" class ={salvar === "postSalvo" ? "blsck" : "hide"} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{p.curtida}</strong> e
                        <strong>outras {nPessoas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

        ))}
        
    
    </>
    )
}


