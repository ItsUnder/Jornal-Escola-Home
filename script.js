function redirect(number) {
  if(number == 1) {
    location.replace("https://under-117.github.io/Jornal-Escola/")
  } else if (number == 2) {
    location.replace("https://www.cnnbrasil.com.br/")
  }
}
function changeThemes() {
  document.body.classList.toggle("dark");
}