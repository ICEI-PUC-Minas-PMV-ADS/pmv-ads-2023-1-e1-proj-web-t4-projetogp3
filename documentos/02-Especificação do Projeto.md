# Especificações do Projeto

A equipe responsável por este projeto consolidou a definição precisa do problema e identificou os pontos mais relevantes a serem tratados por meio de uma imersão, que incluiu a observação dos usuários em seu ambiente natural e entrevistas. Durante esse processo, foram levantados detalhes que foram organizados na forma de personas e histórias de usuários. 

## Personas

Por meio de um formulário de pesquisa no Google Forms, que contou com a participação de mais de 20 pessoas, foi possível criar a maioria das personas, gerando um entendimento claro sobre o público-alvo e seus problemas. 

1. - NOME: Maria Santos.
   - IDADADE: 20.
   - OCUPAÇÃO: Estudante.
   - APLICATIVOS: Instagram, Youtube, Twitch, Twitter.
   - MOTIVAÇÕES: Estabilidade financeira e visibilidade.
   - FRUSTAÇÕES: Falta de hadware atualizado, falta de segurança e estabilidade econômica no Brasil, falta de oportunidades.
   - HOBBIES, HISTÓRIA: Jogar MOBA (League of Legends), ler contos romântico, assistir podcasts de variedades. 
   <br>
2. - NOME: Pedro Silva.
   - IDADADE: 16.
   - OCUPAÇÃO: Menor Aprendiz.
   - APLICATIVOS: TikTok, Twitch, Instagram.
   - MOTIVAÇÕES: Reconhecimento, diversão e renda.
   - FRUSTAÇÕES: Sistema educional tradicional, diferenças de renda comparada com o dólar.
   - HOBBIES, HISTÓRIA: Jogar Fortnite, Valorant, publicar stories.
   <br>
3. - NOME: Felipe Rocha.
   - IDADADE: 31.
   - OCUPAÇÃO: Desenvolvedor Freelancer
   - APLICATIVOS: Instagram, Linkedin, Facebook, Youtube.
   - MOTIVAÇÕES: Melhoria na qualidade de vida, filantropia, resolver problemas computacionais complexos e realizar o sonho da casa própria.
   - FRUSTAÇÕES: Viver com os pais, fobia social, dificuldades em controle de peso e colesterol.
   - HOBBIES, HISTÓRIA: Hackatons e contribuir em projetos de código aberto, publicar em seu substack novidades de tecnologia e fóruns de ética AI.
   <br>
4. - NOME: Francisca Suzuki
   - IDADADE: 27
   - OCUPAÇÃO: Professora de Sociologia
   - APLICATIVOS: Instagram, TikTok, Twitch, Facebook e Twitter.
   - MOTIVAÇÕES: Debate político e movimento estudantil, interação social.
   - FRUSTAÇÕES: Preconceito contra mulheres gamers, injustiça social contra classes menos privilegiadas.
   - HOBBIES, HISTÓRIA: Jogar RPG, Assistir steaming de just chatting, ler contos épicos e de fantasia.

## Histórias de Usuários

Com base na compreensão da rotina das personas identificadas para o projeto, foram documentadas as seguintes histórias de usuário. 

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Maria Santos  | Trabalhar numa área de interesse           | Ter um melhor desempenho na carreira e me sentir satisfeita com a profissão que exerço |
|Maria Santos  | Possuir visibilidade no meio digital       | Ter o conteúdo apreciado por uma grande comunidade |  
|Pedro Silva   | Ter um público que me assista jogando      | Inspirar outras pessoas a jogarem bem |
|Pedro Silva   | Trabalhar com jogos                        | Ganhar dinheiro me divertindo enquanto mostra minha gameplay |
|Felipe Rocha  | Trabalhar em casa                          | Conseguir me sustentar com uma melhor qualidade de vida |
|Felipe Rocha  | Rentabilizar meus hobbies                  | Ganhar dinheiro com o que sinto prazer em fazer |
|Francisca Suzuki | Levar entretenimento ao público         | Interagir com muitas pessoas usando minha criatividade |
|Francisca Suzuki | Dividir meu conhecimento                | Orientar outras pessoas em assuntos que domino |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01 | Criar conta e fazer login | ALTA |  
|      | O usuário poderá criar um cadastro no site, e realizar login no mesmo  |
|RF-02 | Criar e customizar o perfil | ALTA |
|      | O usuário poderá personalizar seu perfil inserindo imagem, biografia e nome de usuário |
|RF-03 | Acesso às páginas de introdução, links e conteúdos | ALTA |
|      | O usuário deverá ter acesso ao feed principal, à demais páginas de conteúdo criadas por outros usuários e aos links redirecionáveis inseridos em postagens |
|RF-04 | Adicionar páginas de conteúdo | Média |
|      | O usuário poderá inserir, editar e deletar (se de sua autoria.) páginas de tópicos relacionados a sua pesquisa |
|RF-05 | Pesquisar por informações | ALTA |
|      | O usuário poderá pesquisar por mídias, informações e todo o conteúdo existente no site |
|RF-06 | Interagir na comunidade | ALTA |
|      | O usuário poderá adicionar, editar, excluir comentários em publicações |
|RF-07 | Dar feedback do conteúdo | Média |
|      | O usuário deverá adicionar o seu feedback em relação a sua experiência com o site |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01 | Perfomance | ALTA |
|       | A fim de satisfazer o cliente, é importante que o sistema possa acessar o conteúdo disponibilizado rapidamente para fornecer informações atualizadas sobre equipamentos, materiais e tarefas agendadas | 
|RNF-02 | Confiabilidade |  ALTA |
|       | Uma aplicação de qualidade deve prever falhas por desacordo ou erros humanos e ter recursos de backup e recuperação de informações para evitar perda de dados e retrabalho | 
|RNF-03 | Disponibilidade | ALTA |
|       | Site deve ficar disponível 24 horas, 7 dias na semana |
|RNF-04 | Usabilidade | MÉDIA |
|       | O sistema pode ser acessado via navegador na internet de qualquer computador com conexão de internet de 1Mbps ou superior |
|RNF-05 | Segurança | ALTA |
|       | Login com nome de usuário e senha são checados e validados pelo sistema | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Baixo orçamento |
|02| Equipe composta por poucos membros |
|03| O projeto deverá estar concluído até final do semestre |
|04| O projeto deverá ser concluído sem alteração de membros da equipe |
