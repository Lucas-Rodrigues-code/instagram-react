export default function Sugestao() {

    const sugestao = [
        { imagemUsuario: "assets/img/bad.vibes.memes.svg", nomeUsuario: "bad.vibes.memes" },
        { imagemUsuario: "assets/img/chibirdart.svg", nomeUsuario: "chibirdart" },
        { imagemUsuario: "assets/img/razoesparaacreditar.svg", nomeUsuario: "razoesparaacreditar" },
        { imagemUsuario: "assets/img/adorable_animals.svg", nomeUsuario: "adorable_animals" },
        { imagemUsuario: "assets/img/smallcutecats.svg", nomeUsuario: "smallcutecats" },
    ]

    return (
        <>
            {
                sugestao.map((s) => (
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={s.imagemUsuario} />
                            <div class="texto">
                                <div class="nome">{s.nomeUsuario}</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                ))
            }
        </>
    )

}







