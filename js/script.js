//progress bar
const myObserver = new IntersectionObserver((moviment) => {
    moviment.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const capa = document.querySelectorAll('.progress');

capa.forEach((element) => myObserver.observe(element));

//--------------------------------------------------------

//Download button

document.getElementById("downloadDoc").addEventListener("click", function() {
    // Especifique o caminho para o arquivo PDF no servidor
    var pdfFilePath = "../assets/Curriculo-Vinicius-Giavoni.pdf";
  
    // Use window.location.href para iniciar o download do arquivo
    window.location.href = pdfFilePath;
  });

//---------------------------------------------------------

//Form submit

$(document).ready(function(){

    $(".filter .filter-button").click(function(){
    $(this).addClass("active").siblings().removeClass("active")

    $(".gallery").fadeOut()
    setTimeout(function(){
        $(".gallery").fadeIn()

    }, 700)

    let value = $(this).attr("data-filter")

    setTimeout(function() {
      if(value === "todos") {
        $(".gallery .filter-button").show("500")
      } else {
        $(".gallery .filter-button").not('.' + value).hide("500")
        $(".gallery .filter-button").filter('.' + value).show("500")
      }
    })
})
})

$(document).ready(function() {
  $('#formfalecomigo').submit(function(event) {

    $.ajax({
      method: 'POST',
      url: 'https://formsubmit.co/ajax/vini.giavoni@gmail.com',
      dataType: 'json',
      accepts: 'application/json',
      data: {
        nome: $("#nome").val(),
        email: $("#email").val(),
        mensagem: $("#mensagem").val()
      },
      success: function(data) {
        console.log(data);
        // Aqui o código para notificar o usuário de que o formulário foi enviado com sucesso.
      },
      error: function(err) {
        console.log(err);
        // Aqui o código para lidar com erros, se necessário.
      }
    });
  });
});

//-----------------------------------------------------------

// Função para abrir o modal
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");

  modal.style.display = "block";
  modalImage.src = imageSrc;
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Adicione um evento de clique a cada imagem da galeria
const images = document.querySelectorAll(".gallery__thumb img");
images.forEach(gallery__thumb => {
  gallery__thumb.addEventListener("click", () => {
      openModal(gallery__thumb.src);
  });
});

// Adicione um evento de clique para fechar o modal quando o ícone "X" for clicado
const closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", closeModal);