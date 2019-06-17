//Variaveis globais
let imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];
let index = []
let count = 1
let amarzem = []
//app.inicio();
//conta quantas ocorrencias existem no array
function contaOcorrencia(array,value){
  return array.filter((v) => (v === value)).length;
}
//função para chamar os elementos html
function pegaImg(){

  let random = Math.floor((Math.random()*8) + 0)
  this.img = imagens[random]
  this.vlindex = random
  return[img, vlindex]
}

//Função para criar os elemento HTML
function criarCol(){
    let arrayImg = pegaImg()
    let imagem = arrayImg[0]
    let vlindex = arrayImg[1]

    let tamanhoArray = 0
    tamanhoArray = (contaOcorrencia(index , vlindex))
    if(tamanhoArray == 2){
      criarCol()
    }else{
      let $row = $('.principal')
      let div = `<div class="col-3"><button type="button" class="btn btn-outline-primary imagem"><img src='${imagem}' id='${vlindex}' alt='img' class='image'></button></div>`
      $row.append(div)
      $row.fadeIn()
      index.push(vlindex)
    }

}

//Função para marcar X
function markX(){
  let $img = $('.image')
  $img.fadeOut(()=>{
    $img.attr("src", "img/cross.png")
    $img.fadeIn()
  })
  $('.imagem').on('click',(e)=>{
    count ++
    let amarzem = $(e).attr('id')
    alert(armazem)
    if(count === 2){
      count = 0

    }

  })

}

//Chamando as funções quando carregar a páginas
$(".botao").on('click', 'button',(e)=>{
  let $espaco = $('.principal')
  $espaco.fadeOut(()=>{
    let total = 16
    for(let i = 0; i < total ; i++){
      criarCol()
    }
    $espaco.fadeIn()
  })
  setTimeout(markX,3000)

})
