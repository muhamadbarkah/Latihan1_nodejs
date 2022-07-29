var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

con.connect(function (err) {
    if (err) throw err;
    
    console.log("Terkoneksi Berhasil");

    con.query("SELECT * FROM produk", function (err, result, fields){
        if (err) throw err;
        
        console.log(result);
        connection.destroy();
    });
});