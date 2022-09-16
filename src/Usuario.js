export default function Usuario() {

    const nomeUsuario = ["Lucas"] // usar prompt
    return (
        <>
        {
            nomeUsuario.map(nome => 
                <div class="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div class="texto">
                        <strong>{nome}</strong>
                        <span>
                            {nome}
                            <ion-icon name="pencil"></ion-icon>
                        </span>
                    </div>
                </div>
            )
        }
        </>
    )
}







