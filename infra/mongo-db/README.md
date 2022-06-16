Root user, admin users and DBnames are define in the .env file, its recommende to personalize it. They'll be autatically use by the mongo-init.sh script in the first build

mongo-init.sh will only be executed if there is no data in the databse.
If you wish to change the root users/pass, the backend user/pass or the database name DURING the build stage you will need to manually empty the 
"mongodb/data" folder.
use:
-docker compose down
-docker volume prune
-the:
    -windows: "del ./mongodb/data"
    -linux/mac: "rm -rf ./mongodb/data"


This database is configure to run in an internal network, you can only access it from the backend_net

