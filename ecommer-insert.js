var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log("Terkoneksi Berhasil");

    var sql = "INSERT INTO produk(nama_produk, gambar_produk, harga_product, des_product, createdate) VALUES('sepatu pantofel', 'pantofel.png', '500000', 'kami menjual sepatu pantofel 2022', '2022-07-27')";

    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log("Berhasil Diuplod");
        connection.destroy();
    });
});