## apidoc-express-swagger

Learning how to properly document world-class Node.js and Express RestFul APIs using Swagger and OpenAPI.

## Description
Building a simple Inventory CRUD RestFul API and documenting the API resources using Swagger and OpenAPI for learning and didactic purposes.

### Languages used
- Javascript (with Node.js runtime)

### Frameworks used 
- Express

### Tools and Libraries used 
- Swagger
- Mongo Atlas (Database)

### Configuration

#### Steps 
- Read this article - https://zellwk.com/blog/local-mongodb/ to set up Mongo db locally or go to https://mongodb.com to create a new Cluster on Mongo Atlas 

- Replace the MONGO_URI in the .env file with the connection URI

### Running the code
```
$ git clone https://github.com/rexsimiloluwah/apidoc-express-swagger.git
```

```
$ npm install
```

```
$ node server.js
```

### Viewing the Swagger Documentation 
While the server is running on PORT 3000, go to your browser at http://localhost:3000/api-docs to view the documentation.

