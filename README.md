# yt_api-rest-ts
install node
npm i typescript ts-node nodemon -g

Tips for ts-api:
En Terminal:
tsc --init
npm init -y
npm i express cors dotenv multer mongoose
npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D
Crear estructura:
.env
    (
        PORT=3000
        HOST=http://localhost
        DB_URI=mongodb://localhost:27017/api-rst-ts
    )
*src
    app.ts
    *controllers
    *models
    *routes