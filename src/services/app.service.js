export const appService = {
  addScrollListener,
}

function addScrollListener() {
  const elSections = document.querySelectorAll('.app-section')
  const elNavLinks = document.querySelectorAll('.nav-link')

  window.addEventListener('scroll', () => {
    let curr = ''
    elSections.forEach((elSection) => {
      const sectionTop = elSection.offsetTop
      const sectionHeight = elSection.clientHeight
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        curr = 'contact'
      } else if (scrollY >= sectionTop - 300) {
        curr = elSection.getAttribute('id')
      }
    })

    elNavLinks.forEach((elLink) => {
      elLink.classList.remove('active')
      if (elLink.dataset.navLink === curr) {
        elLink.classList.add('active')
      }
    })
  })
}
