FROM mongo:5.0.8 as base

EXPOSE 27017

HEALTHCHECK --interval=5s --timeout=3s --retries=3 --start-period=20s \
  CMD mongo --eval 'db.runCommand({ping:1})'

# TODO: Improve healthcheck

CMD ["mongod", "--quiet"]