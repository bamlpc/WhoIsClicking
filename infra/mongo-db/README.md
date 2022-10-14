Root user, admin users and DBnames are defined in the compose.yml file, it's recommended to personalize it. They'll be automatically used by the mongo-init.sh script in the first build

mongo-init.sh will only be executed if there is no data in the database.
If you wish to change the root users/pass, the backend user/pass or the database name DURING the build stage you will need to manually empty the "mongodb/data" folder.
use:
-docker compose down
-docker volume prune
-delete data:
    -windows: "del ./mongodb/data"
    -linux/mac: "rm -rf ./mongodb/data"


This database is configured to run in an internal network, you can only access it from the backend_net.

If you want to manually check the database outputs:
1-Open a shell.
2-`mongosh`
3-`use {<DB_NAME>}`
4-`db.auth("<MONGODB_USER>","<MONGODB_PASS>")`

Now you could inspect for example:

* `show dbs` this will show all your databases.
* `show collections` this will show all the collections in the database that you are logged in.
* `db.{COLLECTION_NAME}.find()` this will show all the elements in the collection.
* `db.runCommand({usersInfo: {user: {MONGODB_USER}, db: {DB_NAME}}, showPrivileges: true})` this will show all the privileges of the user.
  

