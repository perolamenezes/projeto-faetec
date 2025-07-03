    // Adiciona um ouvinte de evento ao formulário com o ID 'schedulingForm'
    // Esse evento será disparado quando o usuário tentar enviar o formulário
    document.getElementById('schedulingForm').addEventListener('submit', function(e) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();

        // Exibe a mensagem de sucesso, tornando o elemento visível
        document.getElementById('successMessage').style.display = 'block';

        // Limpa todos os campos do formulário (nome, cpf, data, horário, checkboxes etc.)
        this.reset();

        // Rola suavemente a página para o topo do container principal
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });

        // Aguarda 5 segundos (5000 milissegundos) e então esconde a mensagem de sucesso
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    });