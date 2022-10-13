*Digitales Portemonnaie* is a web-based application for getting an simple overview of your bank accounts. As of right now, it is still a work-in-progress and will only display pre-defined mockdata from the server.

## Installation

Requirements:

- Install [Node.js](https://nodejs.org/en/)

### Backend

Within the *Backend* folder, run

```
node app.js
```

The backend application will run locally on port 4000.

### Frontend

Install Angular CLI:

```
npm install -g @angular/cli
```

run the application with:

```
ng serve
```

The application is then available at http://localhost:4200. The application will receive data from the server running on port 4000.
