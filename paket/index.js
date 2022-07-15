'use strict'
export let test = function () {
    return "from test";
}
export let kare = function (sayi) {
    return sayi * sayi;
}
// aralara virgül koyarak değişken tanımlar gibi dataları export edebiliyoruz
export  let yas = 23, 
        kilo = 95, 
        multi = function (sayi) {
            // let res = { 
            //     kendisi : sayi, 
            //     karesi  : sayi * sayi 
            // };

            // return res;

            //kısacası
            return {kendisi:sayi, karesi:sayi*sayi};
        }

