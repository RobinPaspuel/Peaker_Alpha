# Peaker 

Peaker will be a new social network that focus on connecting people with same interest through quick chatting. 
No need of a complex profile, personal information or even your own picture. Just talk to others.

> Currently Peaker is under development, in a very early stage (only auth module). 

As a technology test project, the development of Peaker is through plain Express.js.

## Technology Stack:

- Express.js
- JWT

## Instructions

- The first thing needed is to create an .env file in the root directory with the following env variables:

    - DATABASE_USER
    - DATABASE_PASSWORD
    - DATABASE_HOST
    - DATABASE_PORT
    - DATABASE_NAME
    - PGADMIN_DEFAULT_EMAIL
    - PGADMIN_DEFAULT_PASSWD
    - JWTSECRETKEY
    - EXPIRATION_LIMIT

- After creating this file, the easiest way to testing the auth is though docker:

```bash
$ docker-compose up -d
```

The requires file to creating the database is on resources.
