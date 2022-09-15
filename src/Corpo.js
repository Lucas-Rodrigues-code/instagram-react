import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">

                    <Stories imagem="assets/img/9gag.svg" usuario="9gag" />
                    <Stories imagem="assets/img/meowed.svg" usuario="meowed" />
                    <Stories imagem="assets/img/barked.svg" usuario="barked" />
                    <Stories imagem="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
                    <Stories imagem="assets/img/wawawicomics.svg" usuario=" wawawicomics" />
                    <Stories imagem="assets/img/respondeai.svg" usuario="respondeai" />
                    <Stories imagem="assets/img/filomoderna.svg" usuario="filomoderna" />
                    <Stories imagem="assets/img/memeriagourmet.svg" usuario="memeriagourmet" />

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <Posts imagemUsuario="assets/img/meowed.svg" imagemPost="assets/img/gato-telefone.svg" curtida="respondeai" nPessoas="101.523" />  
                    <Posts imagemUsuario="assets/img/barked.svg" imagemPost="assets/img/dog.svg" curtida="adorable_animals" nPessoas="99.159"/>
                  
                </div>
            </div>

            <SideBar />
           
        </div>

    )
}