const caixaColor = 'rgba(22, 163, 74, 0.8)'; // Cor de preenchimento para a Caixa (Verde escuro com opacidade)
const bbColor = 'rgba(37, 99, 235, 0.8)';    // Cor de preenchimento para o Banco do Brasil (Azul escuro com opacidade)
const caixaBorderColor = 'rgba(22, 163, 74, 1)'; // Cor da borda para a Caixa (Verde escuro sólido)
const bbBorderColor = 'rgba(37, 99, 235, 1)';    // Cor da borda para o Banco do Brasil (Azul escuro sólido)

// 1. Configuração do Gráfico de Lucro Líquido
const lucroLiquidoCtx = document.getElementById('lucroLiquidoChart').getContext('2d'); // Obtém o contexto 2D do canvas para o gráfico de Lucro Líquido
new Chart(lucroLiquidoCtx, { // Cria uma nova instância de gráfico Chart.js
    type: 'bar', // Define o tipo de gráfico como barras
    data: { // Define os dados do gráfico
        labels: ['2023', '2024'], // Rótulos para o eixo X (os anos)
        datasets: [ // Conjuntos de dados a serem exibidos
            {
                label: 'Caixa (Bi R$)', // Rótulo para o conjunto de dados da Caixa
                data: [10.61, 14.0], // Valores para a Caixa (2023, 2024)
                backgroundColor: caixaColor, // Cor de preenchimento das barras da Caixa
                borderColor: caixaBorderColor, // Cor da borda das barras da Caixa
                borderWidth: 1 // Largura da borda das barras
            },
            {
                label: 'Banco do Brasil (Bi R$)', // Rótulo para o conjunto de dados do Banco do Brasil
                data: [35.56, 37.9], // Valores para o Banco do Brasil (2023, 2024)
                backgroundColor: bbColor, // Cor de preenchimento das barras do BB
                borderColor: bbBorderColor, // Cor da borda das barras do BB
                borderWidth: 1 // Largura da borda
            }
        ]
    },
    options: { // Opções de configuração do gráfico
        responsive: true, // Torna o gráfico responsivo ao tamanho do contentor
        maintainAspectRatio: false, // Permite que o gráfico não mantenha a proporção original, ajustando-se à altura do contentor
        scales: { // Configuração dos eixos
            y: { // Configuração do eixo Y
                beginAtZero: true, // Faz o eixo Y começar em zero
                title: { display: true, text: 'Bilhões R$' } // Título do eixo Y
            }
        },
        plugins: { // Configuração de plugins do Chart.js
            tooltip: { // Configuração das dicas de contexto (tooltips) que aparecem ao passar o rato
                callbacks: { // Funções para personalizar o conteúdo das tooltips
                    label: function (context) { // Personaliza o rótulo da tooltip
                        return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + ' Bi R$'; // Formata o texto da tooltip
                    }
                }
            }
        }
    }
});

// 2. Configuração do Gráfico de ROE (Rentabilidade sobre o Patrimônio Líquido)
const roeCtx = document.getElementById('roeChart').getContext('2d'); // Obtém o contexto 2D do canvas para o gráfico de ROE
new Chart(roeCtx, { // Cria um novo gráfico
    type: 'bar', // Tipo de gráfico: barras
    data: {
        labels: ['2023', '2024'], // Rótulos do eixo X
        datasets: [
            {
                label: 'Caixa (%)', // Rótulo para os dados da Caixa
                data: [8.46, 10.43], // Valores de ROE da Caixa
                backgroundColor: caixaColor,
                borderColor: caixaBorderColor,
                borderWidth: 1
            },
            {
                label: 'Banco do Brasil (%)', // Rótulo para os dados do Banco do Brasil
                data: [21.6, 21.4], // Valores de ROE do Banco do Brasil
                backgroundColor: bbColor,
                borderColor: bbBorderColor,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true, // Eixo Y começa em zero
                title: { display: true, text: '%' } // Título do eixo Y
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + '%'; // Formata a tooltip para exibir percentagem
                    }
                }
            }
        }
    }
});

// 3. Configuração do Gráfico de Carteira de Crédito Total
const carteiraCreditoCtx = document.getElementById('carteiraCreditoChart').getContext('2d'); // Obtém o contexto do canvas
new Chart(carteiraCreditoCtx, { // Cria um novo gráfico
    type: 'bar', // Tipo de gráfico: barras
    data: {
        labels: ['Dez/23', 'Dez/24'], // Rótulos do eixo X (períodos)
        datasets: [
            {
                label: 'Caixa (Tri R$)', // Rótulo para os dados da Caixa
                data: [1.029, 1.136], // Valores da carteira de crédito da Caixa em trilhões
                backgroundColor: caixaColor,
                borderColor: caixaBorderColor,
                borderWidth: 1
            },
            {
                label: 'Banco do Brasil (Tri R$)', // Rótulo para os dados do Banco do Brasil
                data: [1.109, 1.278], // Valores da carteira de crédito do BB em trilhões
                backgroundColor: bbColor,
                borderColor: bbBorderColor,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true, // Eixo Y começa em zero
                title: { display: true, text: 'Trilhões R$' } // Título do eixo Y
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.parsed.y.toFixed(3) + ' Tri R$'; // Formata a tooltip para exibir valores em trilhões
                    }
                }
            }
        }
    }
});

// 4. Configuração do Gráfico de Índice de Inadimplência
const inadimplenciaCtx = document.getElementById('inadimplenciaChart').getContext('2d'); // Obtém o contexto do canvas
new Chart(inadimplenciaCtx, { // Cria um novo gráfico
    type: 'bar', // Tipo de gráfico: barras (alterado de 'line' para 'bar' para melhor comparação direta)
    data: {
        labels: ['Dez/23', 'Dez/24'], // Rótulos do eixo X
        datasets: [
            {
                label: 'Caixa (%)', // Rótulo para os dados da Caixa
                data: [1.97, 2.27], // Valores do índice de inadimplência da Caixa
                backgroundColor: caixaColor,
                borderColor: caixaBorderColor,
                borderWidth: 1
            },
            {
                label: 'Banco do Brasil (%)', // Rótulo para os dados do Banco do Brasil
                data: [2.9, 3.32], // Valores do índice de inadimplência do BB
                backgroundColor: bbColor,
                borderColor: bbBorderColor,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true, // Eixo Y começa em zero
                title: { display: true, text: '%' } // Título do eixo Y
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + '%'; // Formata a tooltip
                    }
                }
            }
        }
    }
});

// 5. Configuração do Gráfico de Índice de Basileia
const basileiaCtx = document.getElementById('basileiaChart').getContext('2d'); // Obtém o contexto do canvas
new Chart(basileiaCtx, { // Cria um novo gráfico
    type: 'bar', // Tipo de gráfico: barras
    data: {
        labels: ['Dez/23', 'Dez/24'], // Rótulos do eixo X
        datasets: [
            {
                label: 'Caixa (%)', // Rótulo para os dados da Caixa
                data: [16.7, 16.6], // Valores do Índice de Basileia da Caixa
                backgroundColor: caixaColor,
                borderColor: caixaBorderColor,
                borderWidth: 1
            },
            {
                label: 'Banco do Brasil (%)', // Rótulo para os dados do Banco do Brasil
                data: [15.47, 13.75], // Valores do Índice de Basileia do BB
                backgroundColor: bbColor,
                borderColor: bbBorderColor,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false, // O Índice de Basileia geralmente não começa em zero, então ajustado para 'false'
                title: { display: true, text: '%' } // Título do eixo Y
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + '%'; // Formata a tooltip
                    }
                }
            }
        }
    }
});

// 6. Configuração do Gráfico de Crescimento da Carteira de Crédito por Segmento
const crescimentoSegmentoCtx = document.getElementById('crescimentoSegmentoChart').getContext('2d'); // Obtém o contexto do canvas
new Chart(crescimentoSegmentoCtx, { // Cria um novo gráfico
    type: 'bar', // Tipo de gráfico: barras
    data: {
        labels: ['Imobiliário/PF', 'Comercial/PJ', 'Agronegócio'], // Rótulos do eixo X (segmentos de crédito)
        datasets: [
            {
                label: 'Caixa (Cresc. % Dez24/Dez23)', // Rótulo para os dados da Caixa
                data: [13.5, 9.0, 11.4], // Valores de crescimento para a Caixa (Imobiliário, Comercial, Agronegócio)
                backgroundColor: caixaColor,
                borderColor: caixaBorderColor,
                borderWidth: 1
            },
            {
                label: 'Banco do Brasil (Cresc. % Dez24/Dez23)', // Rótulo para os dados do Banco do Brasil
                data: [7.3, 18.0, 11.9], // Valores de crescimento para o BB (Pessoa Física, Pessoa Jurídica, Agronegócio)
                backgroundColor: bbColor,
                borderColor: bbBorderColor,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true, // Eixo Y começa em zero
                title: { display: true, text: 'Crescimento %' } // Título do eixo Y
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) { // Personaliza o rótulo da tooltip
                        let label = context.dataset.label || ''; // Obtém o rótulo do dataset
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) { // Verifica se o valor existe
                            label += context.parsed.y.toFixed(1) + '%'; // Adiciona o valor formatado
                        }
                        return label; // Retorna o rótulo completo
                    }
                }
            },
            legend: { // Configuração da legenda
                position: 'top', // Posiciona a legenda no topo do gráfico
            }
        }
    }
});