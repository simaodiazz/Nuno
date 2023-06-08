# Server

O servidor é uma aplicação que recebe solicitações de clientes e fornece respostas correspondentes. Ele desempenha um papel fundamental no desenvolvimento de aplicativos web.

## Fundamentos
<br>

### __Middleware__
Um middleware é componente de software que age como um intermediário entre uma requesição e uma resposta. Normalmente, quando enviamos uma solicitação em JSON. O servidor precisa ter um middleware json `express.json()` para conseguir interpretar o que o arquivo JSON contém como corpo. Como já se deve perceber, é muito usado para segurança.

<br>

### __Helmet__
O pacote ``Helmet`` é uma biblioteca que ajuda a proteger o aplicativo configurando cabeçalhos HTTP relacionados à segurança. Ele fornece várias medidas de proteção contra ataques comuns, como Cross-Site Scripting (XSS), Clickjacking, Injeção de MIME e outros. Usar o Helmet é uma prática recomendada para fortalecer a segurança de um aplicativo web.

<br>

### __CORS__
O pacote ``CORS`` é um middleware usado para controlar as políticas de compartilhamento de recursos entre diferentes origens (domínios, portas, protocolos). Ele ajuda a evitar problemas de segurança relacionados a restrições de acesso de origens não confiáveis. O CORS permite ou restringe as solicitações entre origens diferentes, garantindo que apenas as origens autorizadas tenham acesso aos recursos do servidor.

<br>

### __Rate Limiting__
O pacote ``Rate Limiting`` impõe limites no número de solicitações que um cliente pode fazer ao aplicativo dentro de um determinado período de tempo. Essa técnica é usada para evitar abusos e proteger contra ataques de força bruta, onde um atacante tenta enviar um grande número de solicitações para comprometer a segurança ou sobrecarregar o servidor. O Rate Limiting ajuda a controlar o fluxo de solicitações e a preservar os recursos do servidor.

<br>

### __Joi__
O pacote Joi é uma biblioteca usada para validar e manipular dados em JavaScript. Ele fornece um conjunto de métodos para definir esquemas de validação e realizar validações de forma fácil e segura. O Joi ajuda a garantir que os dados enviados pelos usuários sejam válidos e seguros, prevenindo erros e vulnerabilidades no aplicativo.

<br>

### __Schematic__
Schematic é um termo genérico usado para descrever uma representação estruturada e definida de um objeto ou conjunto de dados. No contexto de desenvolvimento de aplicativos, um schematic pode se referir a um esquema ou modelo que define a estrutura e as regras de validação dos dados. É usado para garantir que os dados estejam corretamente formatados e atendam às expectativas do aplicativo.

<br>

### __Bcrypt__
O pacote `Bcrypt` é importante para garantir a segurança dos dados no banco de dados. Ele usa criptografia em hash. Esta abordagem dificulta significativamente a força bruta e ataques de dicionário, pois o processo de hash é muito mais lento do que uma função de hash convencional. 

<br>

### __Sequelize__
O Sequelize é uma biblioteca ``ORM`` (Object-Relational Mapping) para Node.js, que permite interagir com bancos de dados relacionais usando objetos JavaScript. Ele fornece uma camada de abstração sobre o banco de dados, permitindo que você defina modelos de dados como classes JavaScript, mapeando-os para tabelas e relacionamentos no banco de dados.

<br>

### __Modelo__
Um ``modelo`` representa uma tabela no banco de dados. Ele define a estrutura da tabela, os tipos de dados das colunas e os relacionamentos com outras tabelas. Ao definir um modelo, você especifica os atributos e as opções associadas a ele, como nome da tabela, tipos de dados das colunas, chaves primárias, chaves estrangeiras e muito mais.
