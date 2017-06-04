var TABvar_BREAKPOINT = 1000
var lastScrollPosition = 0

function adjustTextSize (event) {
  var windowWidth = window.innerWidth
  if (windowWidth < (TABvar_BREAKPOINT - 50) && event.type === 'resize') return
  var elements = document.getElementsByClassName('page')
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    var parentHeight = element.parentNode.offsetHeight
    var textHeight = parentHeight
    var elementStyle = element.style
    var currentHeight = element.offsetHeight
    elementStyle.height = textHeight + 'px'
    elementStyle.fontSize = textHeight + 'px'
    element.classList.add('sized')
  }
}

function handleHeaderState (event) {
  var header = document.getElementsByTagName('header').item(0)
  if (document.body.scrollTop > 100)
    header.classList.add('hidden')
  else if (lastScrollPosition < document.body.scrollTop)
    header.classList.remove('hidden')
  lastScrollPosition = document.body.scrollTop
}

document.addEventListener('scroll', _.throttle(handleHeaderState, 100))
window.addEventListener('resize', _.debounce(adjustTextSize, 100))

document.addEventListener("DOMContentLoaded", function (event) {
  var showMenu = document.getElementsByClassName('show-menu').item(0)
  var exit = document.getElementsByClassName('exit').item(0)
  if (showMenu)
    showMenu.addEventListener('click', toggleMainNav)
  if (exit)
    exit.addEventListener('click', toggleMainNav)

  var path = window.location.pathname.replace(/\.html$/, '')
  if (path === '/') {
    adjustTextSize(event)
    toggleMainNav()
  }
  else if (path.includes('artist')) {
    transition('artist')
    var links = document.getElementsByTagName('a')
    links = [].slice.call(links)
    links.forEach(function(link){
      link.addEventListener('click', returnState)
    })
  }
  else if (path.includes('documentarian'))
    transition('documentarian')
})

function transition(className) {
  setTimeout(() => document.body.classList.add(className), 0)
}

function returnState(event) {
  var delay = 800
  if (window.innerWidth <= 650) {
    delay = 0
  }
  event.currentTarget.parentElement.classList.add('active')
  var url = event.currentTarget.getAttribute('href')
  event.preventDefault()
  document.body.classList.remove('artist')
  setTimeout(function(){window.location.href = url}, delay)
}

function toggleMainNav() {
  var nav = document.getElementById('main-nav')
  if (nav.classList.contains('active'))
    nav.classList.remove('active')
  else
    nav.classList.add('active')
}
