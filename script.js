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

