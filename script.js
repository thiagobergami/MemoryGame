/*(function (){
var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];
})();*/

//app.inicio();
//conta quantas ocorrencias existem no array
function contaOcorrencia(array,value){
  return array.filter((v) => (v === value)).length;
}


//função para chamar os elementos html
function pegaImg(){
  let imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png']
  let random = Math.floor((Math.random()*8) + 0)
  this.img = imagens[random]
  this.vlindex = random
  return[img, vlindex]
}
let index = []

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
      let div = `<div class="col-3"><img src='${imagem}' id='${vlindex}' alt='img'></div>`
      $row.append(div)
      $row.fadeIn()
      index.push(vlindex)
    }

}

//Chamando as funções quando carregar a páginas
$(".row").on('click', 'button',(e)=>{
  let $espaco = $('.principal');
  $espaco.fadeOut(()=>{
    let total = 16
    for(let i = 0; i < total ; i++){
      criarCol()
    }
    $espaco.fadeIn()
  })

})

$(document).ready(function(){

})
