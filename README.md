# rest-api-workshop

# Installing docker on your device 
  1) Install docker, follow the official instructions here : https://docs.docker.com/engine/install/
  2) Open up your terminal or CLI
  3) Run this CLI command -> docker pull mongo
  4) Then, run this CLI command -> docker run -d --name {dbname} -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME={username} -e MONGO_INITDB_ROOT_PASSWORD={pass} mongo
  5) Remember to replace dbname, username, and pass with your actual dbname, username and pass. Without the curly brackets of course.
  6) To check if your docker container is created and is up and running, open up docker desktop or run this CLI command -> docker ps
  7) If the instance is running, connect to your mongodb instance using the dbname, username and pass that you have specified in step 4.


# Running the express app 
  1) Clone the repo to your local device.
  2) Check the .nvmrc file, ensure you have this version of node installed on your device.
  3) Run npm install to install all the dependencies of the project.
  4) Run npm run start to have start the express app

# Nodemon
Nodemon is a package that allows hot reload, essentially when we make changes to our code, we don't have to stop and run the app again. Nodemon will automatically detect a change and refresh the app for us, a very nice quality of life feature to have. 

# Mongoose 
Mongoose is a package to handle a mongodb database, the package allows us to : 
1) Connect to our mongodb database
2) Define schemas for our tables / collections
3) Allow us to interact with our databse via mongodb operations

