## NodeJs API - Heroes

![CI](https://github.com/alvarolopes2021/heroes-api/actions/workflows/node.js.yml/badge.svg)

---

### Simples backend utilizando NodeJs e MongoDB

#### 👨‍💻 Autor: Álvaro Lopes

#### 💻 Techs

* [NodeJs](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* [MongoDB](https://www.mongodb.com/try/download/community)


#### 📚 Libs

* [Express](https://expressjs.com/pt-br/)
* [Mongoose](https://mongoosejs.com/)

#### 🍃 Criando o banco de dados

1. Baixe o MongoDB server community do link de Techs 
2. Instale o MongoDB Compass, para ter uma visualização melhor dos dados [Compass](https://www.mongodb.com/products/compass)
3. Crie uma conexão localhost utilizando o Compass (a porta padrão do MongoDB será a 27017)

#### ▶	 Executando o servidor

> Confira se as instalações foram bem sucedidas

> Em um terminal, rode os seguinte comandos:

``` 
	node -v
	
	npm -v 
```

1. Clone o repositório utilzando o Git

```
	git clone https://github.com/alvarolopes2021/heroes-api.git 
```

2. Com o repositório clonado

```
	npm install
```


3. Em seguida execute o projeto

```
	node index.js
```


> Lembre-se que, para executar os comandos de  **npm install** e **node index.js** você deve estar no diretório (pasta) do seu projeto

#### Com isto, temos nosso servidor em execução

#### 🍃 Inserindo e buscando no banco

> Abra um terminal GitBash em qualquer local da sua máquina (lembre-se de deixar o terminal do servidor em execução)

> Com o GitBash aberto, execute os seguintes comandos para simular requests ao seu servidor

1. Inserindo um herói
```
	curl -X POST -H "Content-Type: application/json" -d '{"name": "Captain America", "group": "Avengers", "weapon": "Shield", "releaseYear": 1942 }' http://localhost:3000/heroes/insert-hero
```

> Isto fará com que o personagem Capitão América seja inserido no seu banco local

> Para inserir novos heróis, basta trocar os dados passados como dados na request, dentro do campo -d

2. Buscando todos os heróis

> Rode o seguinte comando para buscar todos os heróis

```
	curl -X GET http://localhost:3000/heroes/all-heroes
```

> Este comando irá buscar todos os heróis na sua collection *heroes*

> A resposta desta requisição será um Array de objetos, com os seguintes campos:

1. _id -> id do herói (padrão do MongoDB)
2. name: "string" -> nome do herói
3. group: "string" -> equipe que pertence (Avengers)
4. comicBook: "string" -> qual empresa ele pertence (Marvel)
5. releaseYear: "number" -> ano de lançamento

```
[
   {
    "_id":"62438cac5843b079965bb31c",
    "name":"Batman",
    "group":"Justice League",
    "weapon":"Money",
    "releaseYear":1940
   },
   {
    "_id":"62438ccb5843b079965bb31e",
    "name":"Captain America",
    "group":"Avengers",
    "weapon":"Shield",
    "releaseYear":1942
   }
]
```

#### 🙏 Obrigado
