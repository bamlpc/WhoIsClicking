# Who Is Clicking?
Who is clicking is a simple yet powerful set of tools aimed to identify a person with the help of recon scripts executed when someone clicks a link.

## Usage Steps: 
* Generate a dynamic link.
* Share the link with the person you want to identify.
* When the person enters the link, you will receive a report with all the information obtained.  

&nbsp;

# Pre-requisites 

This project is fully dockerize, you need docker to have docker install in your own enviroment.
Here is the offical page https://docs.docker.com/engine/install/

# Project layout
This project has 3 enviroments, development, test and production. Each one of these has its own docker files asociated.

To run each one of the enviroments we use:

`docker-compose -f docker-compose.yml -f docker-compose.{enviroment}.yml up -d`

If you want to dive deep into this: https://docs.docker.com/compose/extends/


# Initialization

First we need to do its to setup the enviroment variables. Rename the `.env.example` to `.env` and setup your own id's and passwords.
If you just want to fast test it with the default values:

linux: `mv .env.example .env`
powershell: `Rename-Item -Path ".env.example" -NewName ".env"` 

Now if this is the first time building the project you could just
`docker-compose up`
This will automatically apply `-f docker-compose.override.yml` that is the development enviroment.
Keep in mind that the dev env will make volumes for the databse, so if you changes some .env value its probably a good moment to cleanup the data. For this you could:
powershell: 
    `docker-compose down`
    `docker system prune --all -f`
    `Remove-Item -recurse -force backend\qr-api\qrs, infra\mongo-db\data, infra\mongo-db\log, infra\nginx\log`
    `docker-compose up`
linux:
    `docker-compose down`
    `docker system prune --all -f`
    TODO: linux command backend\qr-api\qrs, infra\mongo-db\data, infra\mongo-db\log, infra\nginx\log
    `docker-compose up`

`docker-compose up --build` the first time, and just `docker compose up` after we have our images builded.

&nbsp;

# Networking
This project is desing to use docker pivate networks, in production you wont be able to access the backend unless you hit nginx fist.

## Network structure:

TODO: add diagram of network with ips

## Network in dev
In development we map all applications to localhost, this is just to make development easy:

* Backend: [http://localhost:8000]
    links-api: [http://localhost:8000]
    qr-api: [http://localhost:8001]
* Frontend: 
    home-ui: [http://localhost:3000]
* Infra:
    nginx:  [http://localhost:81]
    mongo-db: [http://localhost:82]


---

## Usefull Commands

### Deno Debugging
`denon debug`

[chrome://inspect](chrome://inspect)

### Update Deno Lock File and Cache
`denon cache`

### Deno Code Formatter
`deno fmt src`
`deno fmt src`

### Deno Lint
`deno lint`

### Restart Project
`docker compose down`
`docker vulume prune`

## Project Structure
Whoisclicking
---.env
---docker-compose.{FILES}.yml
---frontend:
-------home-ui:
---backend:
-------links-api:
-------qr-api:
---infra:
-------mongo-db:
-------nginx:
