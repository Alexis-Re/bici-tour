const NAVBAR_OFFSET = 80 // debe coincidir con la altura real del navbar (h-20 = 80px)

export function useSmoothScroll() {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId)
    if (!element) {
      console.warn(`[useSmoothScroll] No se encontró la sección #${sectionId}`)
      return
    }

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }

  return { scrollToSection }
}
