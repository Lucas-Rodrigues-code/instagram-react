export default function Posts() {

    const post = [
        {imagemUsuario:"assets/img/meowed.svg",imagemPost:"assets/img/gato-telefone.svg",curtida:"respondeai",nPessoas:"101.523"},
        {imagemUsuario:"assets/img/barked.svg",imagemPost:"assets/img/dog.svg",curtida:"adorable_animals",nPessoas:"99.159"},
        
    ]


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
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{p.curtida}</strong> e
                        <strong>outras {p.nPessoas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

        ))}
        
    
    </>
    )
}


