# Who Is Clicking?
Who is clicking is a simple yet powerful set of tools aimed to identify a person with the help of recon scripts executed when someone clicks a link.

## Usage Steps: 
* Generate a dynamic link.
* Share the link with the person you want to identify.
* When the person enters the link, you will receive a report with all the information obtained.  

&nbsp;

# Installation

## API

### 1. Install Deno:
`iwr https://deno.land/install.ps1 -useb | iex`

### 2. Install Denon:
`deno install -qAf --unstable https://deno.land/x/denon/denon.ts`

More info about Denon: [Denon Project](https://github.com/denosaurs/denon)

### 3. Run the project:
`denon start`

---

## For locking versions on Deno run:
`deno run --allow-net --importmap=import_map.json --lock-write --lock=lock.json mod.ts`

## Frontend

### 1. Install Dependencies:
`npm install`

### 2. Run:
`npm start`