


const chaiHttp = require("chai-http");

const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);


const { test, kare, yas, multi } = require("../paket");


describe("Örnek Test Uygulamaları", () => {

    it("Is returning 5 when adding 2 + 3", () => {
        assert.equal(2 + 3, 5);
    });


    it("x fonksiyonuna get testi", done => {
        done();
    });
});

describe("Örnek Test Uygulamaları", () => {

    it("Is returning 5 when adding 2 + 3", () => {
        assert.equal(2 + 3, 5);
    });


    it("fonksiyon testi ", () => {
        assert.equal(kare(2), 5);
    });

    it("x fonksiyonuna get testi", done => {
        done();
    });
});


describe("Testing with chai", () => {
    it("Is returning 4 when adding 2 + 2", () => {
        expect(2 + 2).to.equal(4);
    });

    it("Is returning boolean value as true", () => {
        expect(5 == 5).to.be.true;
    });

    it("Are both the sentences matching", () => {
        expect("This is working").to.equal('This is working');
    });
});


const server = require("../index");

// her test alani serveri kendisi ayaga kaldirip test yapiyor, o yuzden injection 

let token, status;
describe("Token Test Uygulamaları", () => {
    before(done => {

        chai.request(server).post("/getToken")
            .set("Content-Type", "application/json")
            .send({ user: "osman", pass: "1234" })
            .end((error, response) => {

                console.log("token-başladı");

                if (!error) {
                    token = response.body.message;
                    status = response.body.status;
                    console.log(`Token : ${token}\nStatus : ${status}`);
                } else
                    console.log("Hata alındı");
                done();
            });
    });


    it("Employee Get", done => {
        chai.request(server).post("/test")
            .set("x-access-token", token) // bu token alanina türkçe karakter denk gelirse testten gecemiyor.. :)
            .end((error, response) => {
                response.should.have.status(200);
                //response.body.should.be.a("array");

                done();
            });
    });



});


describe("HTTP Test Uygulamaları", () => {

    it("GET : start", done => {

        chai.request(server).get("/")
            .end((error, response) => {

                response.should.have.status(200);
                //Bu request neticesinde status kod 200 olmalıdır.
                response.body.should.be.a("object");
                //Gelen veri bir obje olmalıdır.


                done();
            });
    });

    it("GET : test", done => {

        chai.request(server).get("/test")
            .end((error, response) => {

                response.should.have.status(200);
                //Bu request neticesinde status kod 200 olmalıdır.
                response.body.should.be.a("object");
                //Gelen veri bir obje olmalıdır.
                response.body.should.be.property("message");
                //Obje içerisinde name adında bir property olmalıdır.
                response.body.should.be.property("path").eql("test");
                //Obje içerisinde name adındaki propertynin değeri "Gençay" değerine eşit olmalıdır.

                done();
            });
    });

});