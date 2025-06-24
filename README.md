# Projeto de Teste de Carga com k6

## Descrição

Este projeto foi desenvolvido para atender aos critérios de avaliação da disciplina de Automação de Testes, conforme solicitado:

- Implementação de uma rampa de usuários virtuais (VUs) conforme gráfico de referência:
  - Inicia com 10 VUs
  - Sobe até 300 VUs em 5 minutos
- Thresholds:
  - 95% das respostas com tempo abaixo de 5700ms
  - Menos de 12% das requisições retornando erro
- Métricas:
  - Métrica do tipo TREND validando a duração da chamada GET
  - Métrica do tipo RATE validando o status code
- Pipeline rodando no Github Actions

## API utilizada

A API utilizada para os testes é a pública e gratuita:

- https://jsonplaceholder.typicode.com/posts

Essa API retorna uma lista de posts em formato JSON e é ideal para testes de carga, pois não exige autenticação e suporta múltiplas requisições simultâneas.

## Como rodar o teste localmente

1. Instale o k6:
   - Windows: `choco install k6` ou baixe de https://k6.io/docs/getting-started/installation/
2. Execute o teste:
   ```bash
   k6 run src/loadtest.js
   ```

## Pipeline Github Actions

O teste de carga é executado automaticamente no Github Actions a cada push ou pull request na branch main, conforme definido em `.github/workflows/loadtest.yml`.

## SonarCloud

O projeto está configurado para análise automática de qualidade de código via SonarCloud, utilizando token seguro via Github Secrets.

---

Se precisar de mais informações, consulte o arquivo `src/loadtest.js` para detalhes do script de teste de carga.
