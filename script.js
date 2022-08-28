function redirect(number) {
  /* most primitive way to do this but I don't care, it works*/
  if(number == 1) {
    location.replace("https://under-117.github.io/Jornal-Escola-EducacaoSexual/")
  } else if (number == 2) {
    location.replace("https://under-117.github.io/Jornal-Escola-Educacao-Nutricional/")
  } else if  (number == 10) {
    window.open("https://www.cnnbrasil.com.br/tecnologia/retomar-aprendizagem-e-o-principal-desafio-nas-redes-municipais-diz-unicef/", '_blank');
  } else if (number == 11) {
    window.open("https://g1.globo.com/educacao/noticia/2022/07/12/pesquisa-cetic-ensino-pandemia.ghtml", '_blank');
  } else if (number == 12) {
    window.open("https://www.cnnbrasil.com.br/nacional/para-70-dos-professores-agressividade-de-alunos-aumentou-apos-volta-presencial/", '_blank');
  } else if (number == 13) {
    window.open("https://www.cnnbrasil.com.br/nacional/e-preciso-aplicar-conhecimentos-diz-brasileiro-na-lista-dos-50-melhores-alunos-do-mundo/", '_blank');
  } else if (number == 14) {
    window.open("https://g1.globo.com/sp/ribeirao-preto-franca/noticia/2022/07/12/ouvi-muito-que-pobre-nao-adianta-estudar-diz-estudante-de-ribeirao-preto-que-ganhou-bolsa-para-doutorado-nos-eua.ghtml", '_blank');
  } else if (number == 15) {
    window.open("https://g1.globo.com/educacao/noticia/2022/08/15/brasil-tem-21-universidades-em-ranking-das-mil-melhores-do-mundo-mas-nenhuma-no-top-100.ghtml", '_blank');
  }
}
function changeThemes() {
  document.body.classList.toggle("dark");
}
