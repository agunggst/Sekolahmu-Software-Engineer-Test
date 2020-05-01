# nomor_2

## Documentation
[click here](https://documenter.getpostman.com/view/10570997/SzmZbf6f)

## Cara Penggunaan

### Step-step:
1. pastikan anda sudah menginstall sequelize-cli secara global, dan sudah terinstall postgreSQL di komputer anda. Pastikan juga di komputer anda sudah terinstall node.js
2. masuk ke dalam folder nomor_2, lalu install package-package yang dibutuhkan
```
npm install
```
3. inisialisasi db
```
sequelize db:create
```
3. migrasi model
```
sequelize db:migrate
```
4. run server
```
node app.js
```