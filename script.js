document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-saiba");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const historia = botao.nextElementSibling;

      // Fecha todas as outras antes de abrir a clicada
      document.querySelectorAll(".historia.ativo").forEach((outra) => {
        if (outra !== historia) {
          outra.classList.remove("ativo");
          outra.previousElementSibling.textContent = "Saiba Mais";
        }
      });

      // Alterna a história clicada
      historia.classList.toggle("ativo");

      // Troca texto do botão
      if (historia.classList.contains("ativo")) {
        botao.textContent = "Fechar";
      } else {
        botao.textContent = "Saiba Mais";
      }
    });
  });
});
