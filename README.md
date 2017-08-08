# Mini Pool Application

Fonts: 

Primary: "factoria" - https://typekit.com/fonts/factoria - 2,3,4,5,600 7/8/9
Secondary: "mr-eaves-xl-modern" - https://typekit.com/fonts/mr-eaves-xl - 1/2 3,400 7/8/9
Tertiary: "ocr-a-std" - https://typekit.com/fonts/ocr-a - 400
 
API Keys:
 
NHL Official Trial v4 - ab2nuqs8jjq9q8tavcv2hmhp

LocalData:

Load test users

mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --drop --file build/data/min/user/john.test.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/justin.test.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/mark.test.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/matt.test.json

mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --drop --file build/data/pools.json
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --drop --file build/data/pools-round1.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --file build/data/pools-round1.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --file build/data/pools-round1.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --file build/data/pools-round1.json

mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --drop --file build/data/min/pool/1.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --file build/data/min/pool/2.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --file build/data/min/pool/3.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --file build/data/min/pool/4.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection pools --file build/data/min/pool/5.json &&

mongoimport --db minipool --collection users --drop build/data/source/user/users.json
mongoimport --db minipool --collection users --drop build/data/invite-test.json
mongoimport --db minipool --collection users --drop build/data/friends-completed.json
mongoimport --db minipool --collection users --drop build/data/users.json

mongoimport --db minipool --collection users --drop build/data/invite-friend-test.json

mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --drop --file build/data/min/user/john-spiteri.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/james-abela.json

mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --drop --file build/data/min/user/alex.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/john-spiteri.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/matt-cowan.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/andrew.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/carmine.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/carl.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/erictanner.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/george.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/johnj.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/keyboardbob.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/quinn.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/sandip.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/sal.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/superman.json &&
mongoimport --host 127.0.0.1 --port 27017 --db minipool --collection users --file build/data/min/user/victor.json

OpenShift:

mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection users --drop --file friends-completed.json --jsonArray

mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection pools --drop --file build/data/min/pool/1.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection pools --file build/data/min/pool/2.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection pools --file build/data/min/pool/3.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection pools --file build/data/min/pool/4.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection pools --file build/data/min/pool/5.json

mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --drop --file build/data/min/user/alex.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/andrew.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/carmine.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/carl.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/erictanner.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/george.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/john-spiteri.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/johnj.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/keyboardbob.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/quinn.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/sandip.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/sal.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/superman.json &&
mongoimport --username $OPENSHIFT_MONGODB_DB_USERNAME --password $OPENSHIFT_MONGODB_DB_PASSWORD --host $OPENSHIFT_MONGODB_DB_HOST --port $OPENSHIFT_MONGODB_DB_PORT --db minipool --collection user --file build/data/min/user/victor.json