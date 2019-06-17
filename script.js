//Variaveis globais
let imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png'];
let index = []
let count = 0
let armazem = []
let classes = []
let vence = 0

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
//pega imagem pelo id
function getPicture(id){
    let picture = imagens[id]
    return picture
}


//Função para marcar X
function markX(){

  //colocando todas as imagens como cross
  let $img = $('.image')
  $img.fadeOut(()=>{
    $img.attr("src", "img/cross.png")
    $img.fadeIn()
  })

  //mostrando e checando se são iguais

  $('.imagem').on('click',(e)=>{
    let $class = $(e.target)
    let id = $class.attr('id')
    count ++
    let pic = getPicture(id)
    $class.attr("src", pic)
    $class.fadeIn()
    armazem.push(id)
    classes.push($class)
    if(count === 2){
      if(armazem[0] === armazem[1]){
        classes[0].attr("class", "done")
        classes[1].attr("class", "done")
        let msf = $('.done').length
        vence = vence + msf
        if(vence === 56){
          alert('Venceu')
        }
        classes.lenght = 0;
      }else{
        setTimeout(markX,2000)
      }
      count = 0
      armazem.length = 0;
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
