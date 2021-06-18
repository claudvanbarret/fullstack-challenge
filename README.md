# FullStack Challenge

## Frameworks e libs

- Backend

  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Passport Github](http://www.passportjs.org/packages/passport-github/)

- Frontend
  - [React](https://reactjs.org/)
  - [Redux](https://redux.js.org/)
  - [Ant Design](https://ant.design/docs/react/introduce)
  - [Styled Components](https://styled-components.com/)

## Scripts

Before you run this project you should:

- Install [Docker](https://www.docker.com/).
- Install [Yarn](https://yarnpkg.com/).
- In the **client** directory, create a **.env** file. Copy the variables from **client/.env.sample**.
- In the **server** directory, create a **.env** file. Copy the variables from **server/.env.sample**.

### Database

`yarn start:db`

Initializes the docker with the Postgres database, runs the migrations and seeders.

### Backend

`yarn start:server`

Starts the backend

### Fronted

`yarn start:client`

Starts the frontend

### Docs

You can see the API documentation in [http://locahost:3030/docs](http://locahost:3030/docs)
