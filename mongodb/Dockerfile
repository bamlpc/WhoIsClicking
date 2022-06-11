FROM mongo:5.0.8 as base

EXPOSE 27017

HEALTHCHECK --interval=5s --timeout=3s --retries=3 --start-period=20s \
  CMD mongo --eval 'db.runCommand("ping").ok' mongodb_ip:27017/Whoisclicking --quiet
#TODO change ip:port/dbname to not be hardcoded "$MONGODB_URL"/"$DB_NAME"

CMD ["mongod", "--quiet"]