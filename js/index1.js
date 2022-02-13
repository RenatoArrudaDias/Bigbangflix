
function clique(modal) {
    let window = document.getElementById("modal");
    let temporada = document.getElementById('ass');
    let fecha = document.getElementById("idFechar");
    let imagem
    let idImagem = document.getElementById('idImagem');
    window.classList.add('mostrar');
    imagem = temporada.getAttribute('src');
    idImagem.setAttribute('src', imagem);


    
    temporada.addEventListener("dbclick", function() {
        clique('modal-conteiner');
    });

    fecha.addEventListener('click', function(){
        window.classList.remove('mostrar');
    })
}