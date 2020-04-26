# Interactive Web Application - NailBar
CA2(BSc in IT, Group A & B) 2020 – CCT

Author and maintainer: Juliana Sousa

<br/>[![CCT](https://www.cct.ie/wp-content/themes/hdcct/img/atoms/logo.jpg)](http://cct.ie)

The objective of this app is to understand the basic concepts of a RESTfull webservice isolating backend processing from the frontend requests.

The code was writting in a way where it is self-explained, avoiding unecessary comments.

The main difference is the structure itself, the first version (commit [2015a28](https://github.com/jsous7/CA_2017266_NAILBAR/commit/2015a2896b2a2f6840fb747d24c31ee15c2a8aae)) of this project was an attempt of using MVC pattern but most of the code was still procedural with a bunch of logic mixed, in this second version, a better architecture was introduced ensuring a clear implementation of MVC patterns, cleaner code and better performance due to the reduction of unnecessary modules and extra line of code.

A good point in the second architecture is the use of database to persist the data, instead the use of xml/xslt, which compromises seriously the freedom to make changes in the project on top of a high usage of the resources while using the parser to fetch the data. 

Another powerful architecture change is the use of the design pattern “Data Access Object”, it was implemented in order to create an abstraction layer between the controllers and the database, this is an excellent approach to isolate the low level code from the business logic on top of create dynamic queries to the DB with a minimum of hard-coded blocks. The singleton pattern was used on it too in order to provide always one single instance of the DB for the whole project, reducing the memory consumption and resources usage.

The technology stack used for this project was:
- Nodejs
- HTML+CSS
- MongoDB
- Jquery

For the deployment, it was used heroku to host the code and mongoDb Atlas for the database

An API protected by a private key was created at the backend and AJAX was used for the frontend API requests.



This project was built under the supervision of [Mikhail Timofeev](https://github.com/mikhail-cct)

Thank you for the support provided by [Rimom Costa](https://github.com/rimom) and [Joao Jacome](https://github.com/joaojacome)