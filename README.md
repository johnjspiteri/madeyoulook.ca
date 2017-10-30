# Made You Look

FONTS: 
Primary: 'le-monde-livre-classic-byol' 300/400/500/600/700
Secondary: 'halyard-display' 400/700

Load designers:
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --drop --file source/designer/aimee.kennedy.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/alastair.crombie.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/aminda.wood.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/ann.sanderson.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/annie.tung.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/anouk.jewellery.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/arsaeus.designs.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/colleen.poitras.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/danielle.crampsie.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/deborah.sanderson.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/emily.gill.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/erin.hakin.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/green.bijou.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/irina.pertseva.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/jilian.maddin.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/jules.roman.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/kathryn.rebecca.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/kimberly.dayle.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/liel.lentz.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/melanie.leblanc.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/mizdragonfly.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/nadia.werchola.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/nichola.chong.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/palmerston.design.works.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/pamela.lauz.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/sarah.de.gasperis.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/sarah.dekker.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/slashpile.designs.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/subtle.details.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/tanya.tkacz.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/young.ko.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/yuliya.chorna.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection designers --file source/designer/zula.jewellery.design.json

Load products:
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --drop --file source/product/aimee.kennedy.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/alastair.crombie.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/aminda.wood.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/ann.sanderson.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/annie.tung.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/anouk.jewellery.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/arsaeus.designs.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/colleen.poitras.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/danielle.crampsie.json &&
mongoimport --host 127.0.0.1 --port 27017 --db madeyoulook --collection products --file source/product/deborah.sanderson.json