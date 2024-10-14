/*
const jmeno = "   Hanka   "
const heslo = "sskkllrr(("
//             0123456789
const rodneCislo = "980514/3366"
const telCislo = "111222333"

console.log(jmeno)
console.log(jmeno.trim())

//          vlastnost která vrátí počet znaků
console.log(heslo.length) 
console.log(jmeno.length)

const castHesla = heslo.slice(0, 4)

console.log(castHesla)


console.log(heslo.indexOf("sk"))

const poziceLomitka = rodneCislo.indexOf("/") + 1

console.log(rodneCislo.slice(poziceLomitka, poziceLomitka + 5))

console.log(jmeno.toLowerCase())
console.log(jmeno.toUpperCase())

console.log(telCislo.padStart (13, "+420"))
console.log(telCislo.padEnd (13, "0"))


const zprava = `
<h1>Ahoj svete</h1>
<p>Tve dnesni stastne cislo je ${Math.floor(Math.random() * 1000)}</p>

<p>Tvoje mys je prave na souradnicich ${100 * 100}</p>
`


document.body.innerHTML += zprava

*/


const title = "Pán prstenů";

console.log(`Počet znaků názvu: ${title.length}`);
console.log(`Název filmu velkými písmeny: ${title.toUpperCase()}`);
console.log(`Prvních pět písmen: ${title.slice(0, 5)}`);
console.log(`Posledních pět písmen: ${title.slice(-5)}`);

document.body.innerHTML += `
  <p>Počet znaků názvu: ${title.length}</p>
  <p>Název filmu velkými písmeny: ${title.toUpperCase()}</p>
  <p>Prvních pět písmen: ${title.slice(0, 5)}</p>
  <p>Posledních pět písmen: ${title.slice(-5)}</p>
`;



function zpracovatEmail() {
           
const email = document.getElementById("emailInput").value;
const atIndex = email.indexOf("@");
const userName = email.slice(0, atIndex);
const domain = email.slice(atIndex + 1);
const parsedEmail = {
                userName: userName,
                domain: domain
};

const vysledek = document.getElementById("vysledek");
        vysledek.innerHTML += `
                <p><strong>Uživatelské jméno:</strong> ${parsedEmail.userName}</p>
                <p><strong>Doména:</strong> ${parsedEmail.domain}</p>
            `;
        }


// Doručování
function zpracovatAdresu() {

const ulice = document.getElementById("ulice").value;
const cislo = document.getElementById("cislo").value;
const mesto = document.getElementById("mesto").value;
const psc = document.getElementById("psc").value;
const adresaHTML = `
                <address>
                    <p>${ulice} ${cislo}</p>
                    <p>${psc} ${mesto}</p>
                </address>
            `;

document.getElementById("vysledek").innerHTML += adresaHTML;
}

//Registrace na očkování
function zpracovatRegistraci() {
    
const jmeno = document.getElementById("jmeno").value;
const vek = parseInt(document.getElementById("vek").value, 10);
const heslo = document.getElementById("heslo").value;

let vysledek = "";


if (vek >= 65) {
        vysledek += "<p>Věk v pořádku.</p>";


if (heslo.length > 8) {
        vysledek += "<p>Heslo v pořádku.</p>";
    } else {
        vysledek += "<p>Slabé heslo.</p>";
        }
    } else {
        vysledek += "<p>Nízký věk.</p>";
    }

document.getElementById("vysledek").innerHTML += vysledek; 
}

function zpracovatVstupenku() {
    // Získání věku od uživatele
    const vek = parseInt(document.getElementById("vek").value, 10);

    // Základní cena
    const plnaCena = 12;
    let cena = 0;

    // Výpočet ceny dle věku
    if (vek < 6) {
        cena = 0; // Děti do 6 let mají vstup zdarma
    } else if (vek >= 6 && vek <= 26) {
        cena = Math.round(plnaCena * 0.65); // Studenti a žáci platí 65 % ceny
    } else if (vek >= 27 && vek <= 64) {
        cena = plnaCena; // Dospělí platí plnou cenu
    } else {
        cena = Math.round(plnaCena * 0.50); // Senioři platí 50 % ceny
    }

    // Výpis ceny do stránky
    document.getElementById("vysledek").innerHTML += `<p>Vaše cena vstupenky je ${cena} euro.</p>`;
}
