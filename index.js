const http        = require('http');
const compression = require('compression')
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');


//-------- HTTP -----
const app = express();
app.use(cors());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
   bodyParser.json()(req, res, (err) => {
       if (err) {
           console.log(err);
           res.sendStatus(400);
           return;
       }
       next();
   });
});
//statik dosyalar için middleware
//app.use("/tmp", express.static(path.join(path.resolve(__dirname, '..', '..'), 'tmp')));

http.createServer(app).listen(3030, function () {
   console.log(" >>>> Port dinleniyor ::"+3030);
});


app.get('/', function (request, response) { response.send({ status: 200, message: "TEST API V1.0" }); });

app.get('/test', function (request, response) { response.send({ status: 200, path:"test", message: "TEST API V1.0" }); });
app.post('/test', function (request, response) { response.send({ status: 200, path:"test", message: "TEST API V1.0" }); });

app.post('/getToken', function (request, response) { 

    if(request.body.user == "osman" && request.body.pass == "1234")
    response.send({ status: 200, message: "Giris Yapildi!" });
    else
    response.send({ status: 400, message: "Kullanıcı Bilgileri Yanlış!" });
});


const { test, kare, yas, multi } = require("./paket");

console.log(yas);
console.log(multi(2).kendisi);
console.log(multi(3).karesi);

for (i = 0; i < 1; i++) {
    console.log(test(), " >> ", i)
    console.log(kare(i))
    console.log("-----------");
}


module.exports = app;