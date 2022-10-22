
API de Calculadora


Projeto escrito em JavaScript utilizando Node.js

🔧 Instalação
Para instalar as bibliotecas necessárias utilize o seguinte caminho:

'npm install'


⚙️ Executando

Para executar o projeto, execute:

'node ./src/app.js'


Acesse 'Acesse http://localhost:3000' em seu navegador

Rotas:

GET
 - Início
Acesse 'http://localhost:3000/' 
Corpo de resposta: "Início Calculadora"

 *Para fazer inserir os números que deseja calcular siga o seguinte modelo

	http://localhost:3000/(operação)?n1=(primeiro número)&n2=(segundo número)

Exemplo para a SOMA de 3 + 5:

	http://localhost:3000/soma?n1=3&n2=5


 -Soma

Acesse 'http://localhost:3000/soma

Corpo de Resposta :{"ResultadoDaSoma":(RESULTADO),"erro":(TRUE ou FALSE)}


-Subtraçao
Acesse 'http://localhost:3000/subtracao

Corpo de Resposta :{"ResultadoDaSubtracao":(RESULTADO),"erro":(TRUE ou FALSE)}


-Multiplicação

Acesse 'http://localhost:3000/multiplicacao

Corpo de Resposta :{"ResultadoDaMultiplcacao":(RESULTADO),"erro":(TRUE ou FALSE)}


-Divisão
Acesse 'http://localhost:3000/divisao

Corpo de Resposta :{"ResultadoDaDivisao":(RESULTADO),"erro":(TRUE ou FALSE)}


# Testes

Para execução dos testes digite:

  npm test

Serão exibidos 4 testes de rota e 4 testes unitários de operações


🛠️ Construído com
express: versão 4.18.2
nodemon: versão 2.0.20
jest: versão 29.2.1
supertes: versão 6.3.0