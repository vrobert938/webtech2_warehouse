A program futásához, szükséges egy MongoDB kapcsolat. 
Amit a .env-ben a következőre állítottam.
"MONGO_URI=mongodb://127.0.0.1:27017/warehauseDB"

Az "npm i" installálást követően a webtech2_warhause mappából 
az egyik terminálon az "npm run dev" 
míg egy másikon az "ng serve" parancsot futtatva a lovalhost:4200/ címen elérhető az alkalmazás.

Sajnos az alkalmazás nem funkcionál 100%-osan. "Under construction".

A repóban megtalálható a "Beszámoló Vékony Róbert H0F0SZ webtech2.docx.
TLDR: a regisztráció, login, authentikáció működik, az Items.find({}) és Items.create({"name":"item1","quantity":1}) viszont nem.

Szép Napot!