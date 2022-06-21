# Who Is Clicking?
Who is clicking is a simple yet powerful set of tools aimed to identify a person with the help of recon scripts executed when someone clicks a link.

## Usage Steps: 
* Generate a dynamic link.
* Share the link with the person you want to identify.
* When the person enters the link, you will receive a report with all the information obtained.  

&nbsp;

# Pre-requisites 

This project is fully dockerized, you need docker to have docker installed in your environment.
Here is the official page https://docs.docker.com/engine/install/

# Project layout
This project has 3 environments, development, test and production. Each one of these has its docker files associated.

To run each one of the environments we use:

`docker-compose -f docker-compose.yml -f docker-compose.{enviroment}.yml up -d`

If you want to dive deep into this: https://docs.docker.com/compose/extends/

## Project Structure
* Whoisclicking
    * .env
    * docker-compose.{FILES}.yml
    * frontend:
        * home-ui:
    * backend:
        * links-api:
        * qr-api:
    * infra:
        * mongo-db:
        * nginx:


&nbsp;

# Initialization

First, we need to do it's to set up the environment variables. Rename the `.env.example` to `.env` and set up your own IDs and passwords.
If you just want to fast test it with the default values:

 * Linux: `mv .env.example .env`
 * PowerShell: `Rename-Item -Path ".env.example" -NewName ".env"` 

Now if this is the first time building the project you could just
`docker-compose up`
This will automatically apply `-f docker-compose.override.yml` that is the development environment.
Keep in mind that the dev env will make volumes for the database, so if you change some .env value it's probably a good moment to cleanup the data. For this you could:

 * powershell: 
    `docker-compose down`
    `docker system prune --all -f`
    `Remove-Item -recurse -force backend\qr-api\qrs, infra\mongo-db\data, infra\mongo-db\log, infra\nginx\log`
    `docker-compose up`
 * linux:
    `docker-compose down`
    `docker system prune --all -f`
    TODO: linux command backend\qr-api\qrs, infra\mongo-db\data, infra\mongo-db\log, infra\nginx\log
    `docker-compose up`

`docker-compose up --build` the first time, and just `docker-compose up` after we have our images built.

&nbsp;

# Networking
This project is designed to use docker private networks, in production you won't be able to access the backend unless you hit nginx fist.

## Network structure:

TODO: add a diagram of the network with ips

## Network in dev
In development we map all applications to localhost, this is just to make development easy:

* Backend: 
    * links-api: [http://localhost:8000]
    * qr-api: [http://localhost:8001]
* Frontend: 
    * home-ui: [http://localhost:3000]
* Infra:
    * nginx:  [http://localhost:81]
    * mongo-db: [http://localhost:82]

&nbsp;
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