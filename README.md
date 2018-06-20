# React Search

React Search uses an API to get articles from the New York Times and components to show the articles. Articles can be saved into another component and the Mongo database. 

Following the process all the way through: 
* Front end: The user clicks a button (pages/Articles.js) which calls an API CRUD action (utils/API.js) and moves server-side. 
* Back end: This (the utils/API.js from above) uses Axios to make API CRUD calls within the app (routes/api/articles.js). This routes the CRUD call to the specific method in the controllers/articlesController.js. This manipulates the article model for the database. 

It's a full stack application using node and express for the server, deployment on Heroku, Mongo for the database, and React.js for the front-end.

## Instructions

1. Enter in the topic, start year, and end year and click "search".
2. Click the article to open in a new window and read it or click "Save Article" to move it to the Saved section. 
3. Saved articles can be removed from the app and database. 

## Build With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Makes it interactive
* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [Bootstrap](https://getbootstrap.com/) - Makes it pretty
* [Node](http://jquery.com/) - Executes JavaScript server-side
* [Express](https://expressjs.com/) - Web framework for Node.js
* [MongoDB](https://www.mongodb.com/) - Database
* [Mongoose](http://mongoosejs.com/) - Makes working with Mongo easier
* [Heroku](https://www.heroku.com/home) - Deployment
* [NPM Packages](https://www.npmjs.com/) - Small packages of reuseable code that pack a big punch (express, body-parser, [express-handlebars](https://handlebarsjs.com/), mongoose, [axios](https://www.npmjs.com/package/axios))


## Author

* **Kris Acker Bierma** - [KrisBierma](https://github.com/KrisBierma)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details