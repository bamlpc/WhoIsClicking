# Who Is Clicking?
Who is clicking is a simple yet powerful set of tools aimed to identify a person with the help of recon scripts executed when someone clicks a link.

## Usage Steps: 
* Generate a dynamic link.
* Share the link with the person you want to identify.
* When the person enters the link, you will receive a report with all the information obtained.  

&nbsp;

# Pre-requisites 

This project is fully dockerized, you need docker installed in your environment to use it.

Here is the official page: https://docs.docker.com/engine/install/

&nbsp;

# Project Layout
This project has 3 environments: 
- Development 
- Test 
- Production

Each environment has its docker files associated and to run any of them you should use:

`docker-compose -f docker-compose.yml -f docker-compose.{enviroment}.yml up -d`

More information about docker compose and environments: https://docs.docker.com/compose/extends/

## Project Structure
* Whoisclicking
    * .env
    * docker-compose.{FILES}.yml
    * frontend:
        * home-ui:
    * backend:
        * links-api:
    * infra:
        * mongo-db:
        * nginx:


&nbsp;

# Initialization

1. Rename the `.env.example` to `.env` and set up your own IDs and passwords.
 * Linux / Mac: `mv .env.example .env`
 * PowerShell: `Rename-Item -Path ".env.example" -NewName ".env"` 

2. Build the project: `docker-compose up`

This will automatically apply `-f docker-compose.override.yml` which is the development environment.

## Caveats
Keep in mind that the development environment will make volumes for the database, so if you change something inside .env you must clean up the data. 

Restart the project:
1. `docker-compose down`
2. `docker system prune --all -f --volumes`
3. remove all volumes:
   * Linux / Mac: `rm -rf infra\mongo-db\data, infra\mongo-db\log, infra\nginx\log`
   * PowerShell: `Remove-Item -recurse -force infra\mongo-db\data, infra\mongo-db\log, infra\nginx\log`
4. `docker-compose up`

&nbsp;

# Networking
This project is designed to use docker private networks, in production you won't be able to access the backend unless you hit nginx first.

## Network structure:

TODO: add a diagram of the network with ips

## Network in dev
In development env we map all applications to localhost to make the process easier:

* Backend: 
    * links-api: [http://localhost:8000]
* Frontend: 
    * home-ui: [http://localhost:3000]
* Infra:
    * nginx:  [http://localhost:81]
    * mongo-db: [http://localhost:82]

&nbsp;
---