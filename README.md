# Chuck Norris Joke Fetcher with Docker
Simple backend (Express) and frontend (React) application for Chuck Norris API using Docker 

## Docker Setup
Docker images for both backend and frontend applications have been pushed to docker-hub repository. Therefore, they can be directly pulled from there and run on local machines.

After cloning this repo, execute the following commands to run the docker setup:
```sh
cd Axel_Springer
docker compose up -d
```
This will pull the images from the remote repo and run two containers on your local machine i.e. `express-app` for backend application and `react-app` for frontend application. 

The react application can be accessed at:
- **http://localhost:3000**

### Important pointers:
- React Application is dockerized using Nginx
- Express server is using pm2 as process manager



## Development Setup 
### Dependencies
1. Node.js (_latest LTS version_)
2. npm

### Backend: Express-server
Go into the appropriate directory:
```sh
cd backend
```
Execute the following commands to install the required dependencies for the backend express application:
```sh
npm install
```
#### Important Packages to be installed:
1. Express (_Backend server_)
2. Axios (_To fetch random jokes from Chuck Norris API_)
3. Nodemon (_Tool for automatically restarting the server during development_)
4. PM2 (_Process manager particularly useful in production_)

Start the server in development mode by using the following command:
```sh
npm run dev
```

### Frontend: React App
Go into the appropriate directory:
```sh
cd react-app
```
Execute the following commands to install the required dependencies for the react application:
```sh
npm install
```
#### Important Packages to be installed:
1. React (_JS library for creating user interfaces_)
2. react-dom (_React package for working with the DOM_)
3. react-router-dom (_Used for routing in react Web Apps_)

Start the server in development mode by using the following command:
```sh
npm start
```


## Building Docker images
**Before trying out either of these steps, make sure your local system doesn't already have the docker images or containers (from this project) stored or in running/stopped state**

### 1. Build new images in a production setup state:
To build the images from scratch (in production setup state), alter the existing docker-compose.yaml to something like this (_commented image parts and uncommented build parts_):
```yaml
services:
  express-app:
    # build: ./backend/
    image: dawoodjehangir/express-server-chuck:latest
    container_name: express-app
    ports:
      - "8000:8000"
  
  react-app:
    # build: ./react-app/
    image: dawoodjehangir/react-app-chuck-norris:latest
    container_name: react-app
    depends_on:
      - "express-app"
    ports:
      - "3000:80"
    volumes:
      - ./react-app/nginx.conf:/etc/nginx/conf.d/default.conf


  # react-app:
  #   build: ./react-app/
  #   image: dawoodjehangir/react-app-chuck:latest
  #   container_name: react-app
  #   depends_on:
  #     - "express-app"
  #   ports:
  #     - "3000:3000"
```

Then run the following command with `Axel_Springer` directory:
```sh
docker compose up -d
```