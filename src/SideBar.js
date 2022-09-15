import Sugestao from "./Sugestão";
import Usuario from "./Usuario";

export default function SideBar() {
    return (
        <div class="sidebar">

            <Usuario />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestao imagemUsuario="assets/img/bad.vibes.memes.svg" nomeUsuario="bad.vibes.memes" />
                <Sugestao imagemUsuario="assets/img/chibirdart.svg" nomeUsuario="chibirdart" />
                <Sugestao imagemUsuario="assets/img/razoesparaacreditar.svg" nomeUsuario="razoesparaacreditar" />
                <Sugestao imagemUsuario="assets/img/adorable_animals.svg" nomeUsuario="adorable_animals" />
                <Sugestao imagemUsuario="assets/img/smallcutecats.svg" nomeUsuario="smallcutecats" />
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}