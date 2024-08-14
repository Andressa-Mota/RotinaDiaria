function addResponsiveContent() {
    // Verifica se a largura da janela é de até 395px
    if (window.innerWidth <= 900) {
        // Verifica se o conteúdo já foi adicionado para evitar duplicações
        if (!document.getElementById('mobile-content')) {
            // Cria o novo elemento HTML
            const mobileContent = document.createElement('div');
            mobileContent.id = 'mobile-content';
            mobileContent.innerHTML = `
              <span class="menu-btn" onclick="openNav()">&#9776; </span>

                <!-- Menu lateral -->
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <a href="#esfoliante">Esfoliante</a>
                    <a href="#diferencial">Diferencial</a>
                    <a href="#sabonete">Sabonete</a>
                    <a href="#gel-e-argila">Gel e Argila</a>
                    <a href="#contatos">Contatos</a>
                </div>`;
            // Adiciona o novo conteúdo ao final do elemento com id "content"
            document.getElementById('content').appendChild(mobileContent);
        }
    }
}

// Chama a função ao carregar a página
addResponsiveContent();

// Adiciona um listener para ajustar o conteúdo dinamicamente ao redimensionar a janela
window.addEventListener('resize', addResponsiveContent);
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector("main").style.marginLeft = "250px";
}

// Função para fechar o menu
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("main").style.marginLeft = "0";
}
