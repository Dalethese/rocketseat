function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag imagem
  const img = document.querySelector('#profile img')
  
  //se estiver no light mode, add a img light
  if (html.classList.contains('light')) {
    //substituir a imagem
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto do mayke de óculos escuro, sorrindo')
  } else {
    //se estiver sem o light mode, manter a img normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Foto de Mayke brito, de óculos, sorrindo")
  }
}