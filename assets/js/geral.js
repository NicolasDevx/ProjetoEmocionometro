const accordions = document.querySelectorAll('.acordion-usuarios')

accordions.forEach(function (accordion) {
  accordion.addEventListener('click', function () {

    let abrirAcordion = this.nextElementSibling;
    if (abrirAcordion.style.display === 'block') {
      abrirAcordion.style.display = 'none'
    } else {
      abrirAcordion.style.display = 'block'
    }

    let icon = this.querySelector('.icone')
    if (icon.classList.contains('rotate')) {
      icon.classList.remove('rotate')
    } else {
      icon.classList.add('rotate')
    }
  })
})
