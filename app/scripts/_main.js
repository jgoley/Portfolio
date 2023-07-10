const TABvar_BREAKPOINT = 1000;
var lastScrollPosition = 0;
var header = document.getElementsByTagName("header").item(0);

function getPagePath() {
  return window.location.pathname.replace(/\.html$/, "");
}

function adjustTextSize(event) {
  // let windowWidth = window.innerWidth;
  // if (windowWidth < TABvar_BREAKPOINT - 50 && event.type === "resize") return;
  // let elements = document.getElementsByClassName("page");
  // for (var i = 0; i < elements.length; i++) {
  //   let element = elements[i];
  //   let parentHeight = element.parentNode.offsetHeight;
  //   let textHeight = parentHeight;
  //   let elementStyle = element.style;
  //   let currentHeight = element.offsetHeight;
  //   elementStyle.height = textHeight + "px";
  //   elementStyle.fontSize = textHeight + "px";
  //   element.classList.add("sized");
  // }
}

function handleHeaderState(event) {
  if (document.body.scrollTop > 100) header.classList.add("hidden");
  else if (lastScrollPosition < document.body.scrollTop)
    header.classList.remove("hidden");
  lastScrollPosition = document.body.scrollTop;
}

function transition(className) {
  document.body.classList.add("transitioning");
  setTimeout(() => document.body.classList.add(className), 0);
  setTimeout(() => document.body.classList.remove("transitioning"), 1000);
}

function returnState(event) {
  document.body.classList.add("transitioning");
  let delay = 800;
  if (window.innerWidth <= 650) {
    delay = 0;
  }
  event.currentTarget.parentElement.classList.add("active");
  let url = event.currentTarget.getAttribute("href");
  event.preventDefault();
  document.body.classList.remove("artist");
  setTimeout(() => {
    window.location.href = url;
  }, delay);
  setTimeout(() => document.body.classList.remove("transitioning"), 1000);
}

function toggleNavs() {
  let nav = document.getElementById("main-nav");
  let social = document.getElementById("social-nav");
  let navs = [nav, social];
  navs.forEach((nav) => {
    if (nav.classList.contains("active")) nav.classList.remove("active");
    else nav.classList.add("active");
  });
}

document.addEventListener("scroll", _.throttle(handleHeaderState, 100));
// window.addEventListener('resize', _.debounce(adjustTextSize, 100))

document.addEventListener("DOMContentLoaded", function (event) {
  let showMenu = document.getElementsByClassName("show-menu").item(0);
  let exit = document.getElementsByClassName("exit").item(0);
  if (showMenu) showMenu.addEventListener("click", toggleNavs);
  if (exit) exit.addEventListener("click", toggleNavs);

  let path = getPagePath();
  if (path === "/") {
    // adjustTextSize(event);
    toggleNavs();
  } else if (path.includes("artist")) {
    transition("artist");
    let links = document.getElementsByTagName("a");
    links = [].slice.call(links);
    links.forEach(function (link) {
      link.addEventListener("click", returnState);
    });
  } else if (path.includes("documentarian")) transition("documentarian");
});

ReactDOM.render(<Header />, header);

ReactDOM.render(<SocialNav />, document.getElementById("social-nav"));

try {
  console.log(
    "%c    ___        ________   ________ \n    |\\  \\      |\\   ____\\ |\\   __  \\ \n    \\ \\  \\     \\ \\  \\___| \\ \\  \\|\\  \\ \n  __ \\ \\  \\     \\ \\  \\  ___\\ \\  \\\\\\  \\ \n |\\  \\\\_\\  \\  ___\\ \\  \\|\\  \\\\ \\  \\\\\\  \\   \n \\ \\________\\|\\__\\\\ \\_______\\\\ \\_______\\ \n  \\|________|\\|__| \\|_______| \\|_______| \n\n\n %cHey, How's it going?\n\n Email: %cjGolightly@gmail.com \n %cGithub: %chttp://github.com/jGolightly \n %cTwitter: %chttp://twitter.com/jGolightly \n ",
    "color:rgba(242, 100, 66, 1)",
    "color:rgba(90, 102, 107, 1);",
    "color:rgba(136, 136, 136, 1)",
    "color:rgba(90, 102, 107, 1)",
    "color:rgba(136, 136, 136, 1)",
    "color:rgba(90, 102, 107, 1)",
    "color:rgba(136, 136, 136, 1)"
  );
} catch (e) {}
