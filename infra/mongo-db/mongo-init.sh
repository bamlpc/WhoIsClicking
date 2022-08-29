echo '                                                        '
echo '########################################################'
echo '################ MONGO ENTRYPOINT START ################'
echo '########################################################'
echo '                                                        '
mongosh -- "$MONGO_INITDB_DATABASE" <<EOF
    var admin = db.getSiblingDB("admin");
    admin.auth("$MONGO_INITDB_ROOT_USERNAME", "$MONGO_INITDB_ROOT_PASSWORD");
    db.createUser({
        user: "$MONGO_INITDB_USERNAME", 
        pwd: "$MONGO_INITDB_PASSWORD", 
        roles: [{role: "readWrite", db: "$MONGO_INITDB_DATABASE"}]});
    db.createCollection("users")
EOF
echo '                                                        '
echo '                                                        '
echo '########################################################'
echo '################ MONGO ENTRYPOINT END ##################'
echo '########################################################'
echo '                                                        '