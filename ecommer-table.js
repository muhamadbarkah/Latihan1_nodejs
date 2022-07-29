var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

connection.connect(function (err){
    if (err) {
        throw err;
    }
    console.log("Terkoneksi dengan sukses!");

    var sql = "CREATE TABLE produk(id_product INT AUTO_INCREMENT PRIMARY KEY, nama_produk VARCHAR(60), gambar_produk VARCHAR(200), harga_product INT(11), des_product TEXT, createdate DATE )";
    connection.query(sql, function (err,result){
        if (err){
            throw err;
        }
        console.log("Table Berhasil Dibuat");
        connection.destroy();
    });
});