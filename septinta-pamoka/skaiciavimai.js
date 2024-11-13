// const darboValandos = 8;
// const kepaloKepimoLaikas = 30;
// const vienoKepaloSavikaina = 1.5;
// const vienoKepaloKaina = 3.0;
// const dienosUzsakytasKiekis = 20;

// // 1. Suskaiciuoti kiek kepykla per viena darbo diena spes iskepti duonos kepalu.

// const dienosDarboLaikas = darboValandos * 60;
// const darboDienosKepaluSkaicius = dienosDarboLaikas / kepaloKepimoLaikas;
// console.log(
//   `Per darbo dieną bus iškepta kepalų: ${darboDienosKepaluSkaicius} vnt.`
// );

// // 2. Apskaiciuoti visu kepalu savikaina, gautas pajamas pardavus ir is to gauto pelno dali.

// Visu kepalu savikaina
// const savikaina = darboDienosKepaluSkaicius * vienoKepaloSavikaina;
// console.log('Visų kepalų savikaina:', savikaina.toFixed(2), 'EUR');

// // Pajamas pardavus visus kepalus
// const pajamos = darboDienosKepaluSkaicius * vienoKepaloKaina;
// console.log('Pajamos pardavus visus kepalus:', pajamos.toFixed(2), 'EUR');

// Pelnas
// const pelnas = pajamos - savikaina;
// console.log('Pelno suma:', pelnas.toFixed(2), 'EUR');

// 3. Patikrinti ar kepykla spes iskepti visa tos dienos uzsakyma. Jei ne, suiskaiciuoti kiek kepalu nespes iskepti.

// if (darboDienosKepaluSkaicius >= dienosUzsakytasKiekis) {
//   console.log('Užsakymas bus įvykdytas');
// } else {
//   neiskeptiKepalai = dienosUzsakytasKiekis - darboDienosKepaluSkaicius;
//   console.log(
//     `Užsakymas nebus įvykdytas. Kepalų, kurių nespės iškepti: ${neiskeptiKepalai} vnt.`
//   );
// }

// 4. (Papildomai) Ivertinkite tai, kad pajamas ir pelna galite gauti pilnai ivykdius uzsakyma.
// let pajamosNepilnai = 0;
// let pelnasNepilnai = 0;

// if (darboDienosKepaluSkaicius >= dienosUzsakytasKiekis) {
//   console.log(`Pilnai įvykdytas užsakymas. Pajamos: ${pajamos.toFixed(2)} EUR`);
//   console.log(`Pelno suma: ${pelnas.toFixed(2)} EUR`);
// } else {
//   pajamosNepilnai = darboDienosKepaluSkaicius * vienoKepaloKaina;
//   pelnasNepilnai =
//     pajamosNepilnai - darboDienosKepaluSkaicius * vienoKepaloSavikaina;
//   console.log(`Nepilnai įvykdytas užsakymas.`);
//   console.log(
//     `Pajamos už spėtus iškepti kepalus: ${pajamosNepilnai.toFixed(2)} EUR`
//   );
//   console.log(
//     `Pelno suma už spėtus iškepti kepalus: ${pelnasNepilnai.toFixed(2)} EUR`
//   );
// }
// --------------------------- 10 UZDAVINIU -----------------------------

// 1.) Užduotis: Kurjerio pristatymo patikrinimas

// Įsivaizduokite, kad kuriame kurjerio pristatymo sistemą, kuri patikrina, ar užsakymas bus pristatytas tą pačią dieną.
// Pristatymas tą pačią dieną galimas tik tuo atveju, jei užsakymas buvo pateiktas iki tam tikros valandos (pvz., iki 15h) ir jei prekė yra sandėlyje.

// const pateikimoLaikas = '14:30';
// const sandelioStatusas = true;
// const ribinisLaikas = '15:00';

// if (pateikimoLaikas <= ribinisLaikas && sandelioStatusas === true) {
//   console.log('Užsakymas bus pristatytas tą pačią dieną.');
// } else if (pateikimoLaikas > ribinisLaikas) {
//   console.log('Užsakymas bus pristatytas kitą dieną.');
// } else {
//   console.log('Prekės nėra sandėlyje, užsakymas nebus pristatytas.');
// }

// 2️.) Užduotis: Amžiaus kategorijos nustatymas

// Parašykime programą, kuri pagal žmogaus amžių nustato jo amžiaus kategoriją: vaikas, paauglys, suaugęs ar senjoras.
// Taisyklės:

// Jei amžius mažesnis nei 13, žmogus yra vaikas.
// Jei amžius tarp 13 ir 17 (imtinai), žmogus yra paauglys.
// Jei amžius tarp 18 ir 64 (imtinai), žmogus yra suaugęs.
// Jei amžius 65 ar daugiau, žmogus yra senjoras.

// const amzius = 67;

// if (amzius < 13) {
//   console.log('Amžius mažesnis nei 13, žmogus yra vaikas');
// } else if (amzius >= 13 && amzius <= 17) {
//   console.log('Amžius tarp 13 ir 17, žmogus yra paauglys');
// } else if (amzius >= 18 && amzius <= 64) {
//   console.log('Amžius tarp 18 ir 64, žmogus yra suaugęs');
// } else if (amzius >= 65) {
//   console.log('Amžius 65 ir daugiau, žmogus yra senjoras');
// }

// 3.) Užduotis: Kavinės nuolaidų sistema

// Įsivaizduokite, kad kuriame nuolaidų sistemą kavinei. Priklausomai nuo kliento statuso (pvz., ar jis yra lojalumo programos narys) ir pirkinio sumos, gali būti pritaikoma skirtinga nuolaida.

// Taisyklės:
// Jei klientas yra lojalumo narys ir pirkinio suma yra daugiau nei 20 eurų, jis gauna 20% nuolaidą.
// Jei klientas nėra lojalumo narys, bet pirkinio suma viršija 50 eurų, jis gauna 10% nuolaidą.
// Jei nei viena iš sąlygų netenkinama, nuolaida nepritaikoma.

// const yraLojalumoNarys = false;
// const pirkimoSuma = 30;
// let nuolaida = 0;

// if (yraLojalumoNarys && pirkimoSuma > 20) {
//   nuolaida = 0.2;
//   console.log(`Nuolaida pagal lojalumo narystę: ${nuolaida * 100}%`);
// } else if (!yraLojalumoNarys && pirkimoSuma > 50) {
//   nuolaida = 0.1;
//   console.log(`Nuolaida pagal pirkimo sumą (be lojalumo): ${nuolaida * 100}%`);
// } else {
//   nuolaida = 0;
//   console.log('Nuolaida netaikoma');
// }

// const sumaSuNuolaida = pirkimoSuma - pirkimoSuma * nuolaida;
// console.log(`Galutinė suma su nuolaida: ${sumaSuNuolaida.toFixed(2)} EUR`);

// 4️⃣ Užduotis: Sporto klubo abonemento kaina

// Sporto klubas siūlo nuolaidas abonementams, priklausomai nuo lankytojo amžiaus ir ar jis studentas.
// Taisyklės:

// Jei lankytojas yra jaunesnis nei 18 metų arba studentas, jis gauna 15% nuolaidą.
// Jei lankytojas vyresnis nei 60 metų, jam taip pat taikoma 15% nuolaida.
// Kitais atvejais nuolaida netaikoma.

// 5️⃣ Užduotis: Egzamino įvertinimas pagal balą

// Parašykime programą, kuri pagal surinktą balą nustato, kokį įvertinimą gauna mokinys. Ši užduotis padės mokiniams suprasti, kaip veikia sąlygos ir diapazonai.
// Taisyklės:

// Jei balas yra nuo 90 iki 100, mokinys gauna įvertinimą „Puikiai“.
// Jei balas yra nuo 75 iki 89, įvertinimas yra „Gerai“.
// Jei balas yra nuo 50 iki 74, įvertinimas yra „Patenkinamai“.
// Jei balas yra mažesnis nei 50, įvertinimas yra „Nepatenkinamai“.

// 6️⃣ Užduotis: Kino bilietų kainos nustatymas

// Parašykite programą, kuri apskaičiuoja kino bilieto kainą, atsižvelgiant į lankytojo amžių ir seanso laiką.

// Jei lankytojas yra vaikas (mažiau nei 12 metų), bilieto kaina yra 5 eurai.
// Jei lankytojas yra suaugęs ir eina į dienos seansą (iki 17 val.), bilieto kaina yra 7 eurai.
// Jei lankytojas yra suaugęs ir eina į vakarinį seansą (nuo 17 val.), bilieto kaina yra 10 eurų.
// Jei lankytojas yra senjoras (daugiau nei 65 metų), bilieto kaina yra 6 eurai.

// 7️⃣ Užduotis: Atsiskaitymo su nuolaida sistema

// Sukurkite programą, kuri apskaičiuoja galutinę pirkimo sumą, pritaikant nuolaidas pagal savaitės dieną ir pirkinio sumą.

// Jei pirkimo suma viršija 100 eurų ir šiandien yra trečiadienis, taikoma 15% nuolaida.
// Jei pirkimo suma viršija 50 eurų ir šiandien yra penktadienis, taikoma 10% nuolaida.
// Kitais atvejais nuolaida netaikoma.

// 8️⃣ Užduotis: Laikmatis darbo laiko patikrinimui

// Parašykite programą, kuri patikrina, ar įvestas laikas yra darbo laikas.

// Darbo laikas: nuo 9:00 iki 17:00.
// Jei laikas patenka į darbo laiką, programa turi grąžinti pranešimą „Dabar darbo laikas“.
// Jei laikas nepatenka į darbo laiką, programa turi grąžinti pranešimą „Dabar ne darbo laikas“.

// 9️⃣ Užduotis: Mokesčių apskaičiavimas pagal pajamas

// Sukurkite programą, kuri apskaičiuoja mokesčius pagal gyventojo pajamas.

// Jei pajamos yra mažesnės nei 10,000 eurų per metus, mokestis yra 5%.
// Jei pajamos yra tarp 10,000 ir 30,000 eurų, mokestis yra 10%.
// Jei pajamos yra tarp 30,000 ir 60,000 eurų, mokestis yra 15%.
// Jei pajamos yra daugiau nei 60,000 eurų, mokestis yra 20%.

// 🔟 Užduotis: Bibliotekos knygų skolinimo trukmės patikrinimas

// Parašykite programą, kuri nustato, ar knygos skolinimosi trukmė yra leistina, priklausomai nuo skaitytojo statuso.

// Jei skaitytojas yra studentas, jis gali skolintis knygą 30 dienų.
// Jei skaitytojas yra mokytojas, jis gali skolintis knygą 60 dienų.
// Jei skaitytojas yra bibliotekos narys, bet nei studentas, nei mokytojas, jis gali skolintis knygą 14 dienų.
// Jei skaitytojas nėra bibliotekos narys, jis negali skolintis knygos.
