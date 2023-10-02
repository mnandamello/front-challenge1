# COLABORADORES DO PROJETO

- Eu - Maria Fernanda Ribeiro Mello (https://www.linkedin.com/in/maria-fernanda-b31526243/)
- Nicolas Reis do Espirito Santo - **GitHub:** https://github.com/Nreis280, **Linkedin:** https://www.linkedin.com/in/nicolas-reis-441167248/

 
 
-----------------------------------------------------------------------------------------------------

# O QUE É CHALLENGE? 🧐

Challenge é um desafio com a realização em grupo que é proprosto pela faculdade Fiap onde todo ano uma empresa parceira passa um desafio para os alunos e nesses 12 meses temos 4 sprints para ir entregando e recebendo feedbacks. O nosso objetivo em si é  desenvolver um projeto do 0 e entregar ele funcionando até a ultima sprint.

-----------------------------------------------------------------------------------------------------

# QUAL É O DESAFIO DO ANO❔

Esse ano a empresa que nos propos o desafio foi a **Porto Seguro** e oque foi nos pedido foi essa seguinte coisa: **Automatizar o processo de vistoria de uma bike.** 

<h3>O processo é feito da seguinte maneira:</h3>
<ul>
  <li>Preenchimento de formulário (aceitavam bikes apenas de R$30.000 (trinta mil reais) pra cima)</li>
  <li>Envio de mais de 25 fotos + video</li>
  <li>Inspeção das fotos enviadas por um profissional da Porto Seguro</li>
  <li>Agendamento de uma chamada de video com algum profissional da porto para a vistoria</li>
</ul>

Todos esses passos demandam muito tempo, uma grande disponibilidade de funcionários e um alto custo e esses eram os grandes problemas que foram mencionados pela porto.

-----------------------------------------------------------------------------------------------------

# SOLUÇÃO PROPOSTA 💡

A solução proposta é que seja 100% em um canal digital, em uma contratação direta e sem corretor, ou seja, que o processo de vistoria seja feito sem intervenção humana, que seja feita de forma simples e intuitiva, para que o cliente não largue o processo no meio, pela dificuldade de o processo ser realizado e que ele consiga voltar para validar as fotos depois.
Com as ferramentas que temos ao nosso alcance, criamos um sistema em etapas, para que o processo de vistoria fique o máximo possível intuitivo para o cliente e pensando nisso também fizemos nosso site focado apenas para dispositivos móveis, pois desse modo quando for necessário utilizar a camera não terá que trocar de aparelho, importante ressaltar que pelo desktop o usuário terá acesso apenas as suas informações pessoais que foram enviadas.

<h2>Nosso Processo:</h2>
<ul>
  <li>Realização do Login, após entrar no site deverá informar se é pessoa fisica ou juridica</li>
  <li>Preencheimento do formulário correspondente a etapa anterior</li>
  <li>Preenchimento de formulário com as informações da bike</li>
  <li>Caso possua acessório vai ser necessário preencher um formlário para passar os dados do acessório</li>
  <li>Por último teremos o envio de fotos, é importante ressaltar que essas fotos serão validadas por uma API externa (logo a baixo falaremos mais sobre essa API)</li>
  <li>Após passar por todas essas etapas o usuário ficará no aguardo da aprovação do seu contrato de seguro</li>
</ul>

<h2>Para evitar algumas fraldes pensamos nas seguintes validações:</h2>

<p>Um dos modos que pensamos foi em colocar alguams válidações dentro de nossos formulários, levando em considerações valores das bikes e também um ponto que ainda precisamos pesquisar sobre, mas que já recebemos algumas dicas de pessoas importantes na área é sobre a consulta do cpf para ver se aquela pessoa possui um bom histório ou não.</p>

-----------------------------------------------------------------------------------------------------

# FERRAMENTAS UTILIZADAS ⚙️🔧

 <p>Aqui iremos nos aprofundar com mais detalhes sobre as tecnologias utilizadas em nosso projeto e também sobre a API de reconhecimento de imagens que será utilizada.</p>

 <h2>Linguagens:</h2>
 <ul>
   <li>React - foi utilizado para criarmos nossos componentes e nosso layout como um todo.</li>
   <li>CSS - decidimos utilizar css puro até mesmo porque temos mais conhecimento e preferimos não arriscar com styled-components ou sass ou algo relacionado.</li>
   <li>JavaScript - está sendo utilizado para fazer as validações de todo o nosso site.</li>
 </ul>

 <h2>Detalhes da API</h2>
 <p>A API que decidimos utilizar é a Clarifai, pois vimos que conseguirimos trabalhar melhor com as validações por ela retornar um JSON após o reconhecimento da foto. se quiser saber mais sobre a API aqui está o site: <a href="https://www.clarifai.com/">https://www.clarifai.com/</a></p>
 <p>Na etapa do envio das fotos logo que o cliente tirar uma foto de sua bike nós mandaremos ela para a api e com o JSON que ela retornar vamos fazer algumas verificações, como por exemplo se oque está na imagem é uma bike ou não. Não conseguiremos fazer grandes reconhecimento de imagens, como por exemplo se terá algum dano no veiculo ou não até mesmo por conta do conhecimento que ainda não possuimos, mas acreditamos que fazer essa breve análise já ajudrá no processo.</p>

 -----------------------------------------------------------------------------------------------------

 # PRÓXIMOS PASSOS 👣

 <h2>Nosso próximos passos para a finalização do projeto:</h2>
 <ul>
   <li>Finalização de algumas estilizações de alguns componentes</li>
   <li>Conexão da API</li>
   <li>Finalização das validações</li>
   <li>Conexão com o Beck-end + banco de dados</li>
 </ul>

 
