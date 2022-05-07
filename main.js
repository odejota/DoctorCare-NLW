window.addEventListener('scroll', onScroll)

onscroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopBtnOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //--------------------------------------

  //verificar se topo seção passou da linha
  //quais dados são necessários?

  //topo da seção
  const sectionTop = section.offsetTop
  //altura da seção
  const sectionHeight = section.offsetHeight
  //o topo da seção chegou ou passou da linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  console.log('Topo da seção chegou ou passou da linha:', sectionTopReachOrPassedTargetLine)

  //--------------------------------------

  //verificar se base seção passou da linha
  //quais dados são necessários?

  //onde termina a seção
  const sectionEndsAt = sectionTop + sectionHeight
  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('Base da seção passou da linha:', sectionEndPassedTargetLine)

  //--------------------------------------

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopBtnOnScroll() {
  if (scrollY > 400) {
    backToTopBtn.classList.add('show')
  } else {
    backToTopBtn.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about content, #about content img, #contact, #contact header, #contact content ul, #contact content a, #contact content img');