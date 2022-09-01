# Backend Usefull Commands


## **[Denon](https://deno.land/x/denon@2.5.0/mod.ts)**

denon is the deno replacement for nodemon providing a feature packed, highly configurable and easy to use experience.
```
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

run cache to update lockfile.json

```
denon cache deps.ts
```


## Deno Debugging
1. `denon debug`
2. [chrome://inspect](chrome://inspect)

## Update Deno Lock File and Cache
1. `cd links-api`
2. `denon cache deps.ts`

## Deno Code Formatter
1. `cd links-api`
2. `deno fmt`

## Deno Lint
1. `cd links-api`
2. `deno lint`