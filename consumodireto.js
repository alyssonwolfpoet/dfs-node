// Função para consumir a API
async function fetchAlunos() {
    try {
        // Fazendo uma requisição GET para a API
        const response = await fetch('http://localhost:3001/alunos');
        
        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            // Converte a resposta para JSON
            const alunos = await response.json();
            
            // Exibe os alunos no console ou usa-os de outra forma
            console.log(alunos);
        } else {
            // Se a resposta não for bem-sucedida
            console.error('Erro ao buscar alunos', response.statusText);
        }
    } catch (error) {
        // Captura erros de rede ou outros erros
        console.error('Erro ao consumir a API:', error);
    }
}

// Chama a função para buscar os alunos a cada 5 segundos
setInterval(fetchAlunos, 5000);  // 5000 milissegundos = 5 segundos
