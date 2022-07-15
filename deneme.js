// seçerek alma
import { test, kare, multi, yas } from "./paket/index.js"; 
console.log(kare(8)) 
console.log(test())
console.log("kendisi >> ", multi(3).kendisi);
console.log("karesi  >> ", multi(3).karesi);

// tümünü tek seferde alma
import * as paket from "./paket/index.js"; 
console.log(paket.kilo);
console.log(paket.yas);