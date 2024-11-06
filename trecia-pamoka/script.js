// 1. Uždavinys: Skaičių suma
// Sukurk tris kintamuosius su skaičiaus tipo reikšmėmis. Apskaičiuok jų sumą ir priskirk ją naujam kintamajam. Atspausdink rezultatą.

//Atsakymas:
// let a = 5;
// let b = 10;
// let c = 15;
// let suma = a + b + c;
// console.log(`Skaičių suma: ${suma}`);

// 2. Uždavinys: Stačiakampio plotas
// Sukurk du kintamuosius - ilgis ir plotis, priskirk jiems bet kokias reikšmes ir apskaičiuok stačiakampio plotą.

//Atsakymas:
// let a = 10;
// let b = 15;
// let staciakampioPlotas = a * b;
// console.log('Stačiakampio plotas: ' + staciakampioPlotas);
// arba
// console.log(`Stačiakampio plotas: ${staciakampioPlotas} cm`);

// 3. Uždavinys: Kvadrato plotas
// Sukurk kintamąjį ir priskirk jam bet kokį skaičių. Apskaičiuok kvadrato plotą ir jį atspausdink.

//Atsakymas:
// let a = 10;
// let kvadratoPlotas = a * a;
// console.log('Kvadrato plotas: ' + kvadratoPlotas);
// // aba
// console.log(`Kvadrato plotas: ${kvadratoPlotas} cm`);

// 4. Uždavinys: Vardo pasisveikinimas
// Sukurk kintamąjį vardas ir priskirk jam kokį nors vardą. Programa turi pasisveikinti su tuo vardu. Pvz.: “Labas, Vardeni”.

//Atsakymas:
// const vardas = 'Rolandas';
// const pasisveikinimas = `Labas mano vardas ${vardas}.`;
// console.log(`Pasisveikinimas: ${pasisveikinimas}`);

// 5. Uždavinys: Dvigubas skaičius
// Sukurk kintamąjį skaicius, jam priskirk bet kokią skaitinę reikšmę. Programa turi atspausdinti dvigubą šio skaičiaus reikšmę.

//Atsakymas:
// let a = 5;
// let dvigubasSkaicius = a * a;
// console.log(`Dvigubas skaičius: ${dvigubasSkaicius}`);

// 6. Uždavinys: Kūno masės indeksas
// Sukurk kintamuosius ūgis ir svoris. Parašyk programą, kuri apskaičiuoja kūno masės indeksą.

//Atsakymas:
// let ūgis = 1.78;
// let svoris = 83;
// let kunoMasesIndeksas = svoris / (ūgis * ūgis);
// console.log(`Kūno masės indeskas yra ${kunoMasesIndeksas.toFixed(2)}`);

// 7. Uždavinys: Draugų skaičius
// Sukurk kintamąjį drauguSkaicius, kuriame bus saugomas tavo draugų skaičius. Parašyk programą, kuri prideda 5 naujus draugus ir atspausdina bendrą draugų skaičių.

// Atsakymas:
// let drauguSkaicius = 10;
// drauguSkaicius += 5;
// console.log(`draugų skaičius: ${drauguSkaicius}`);

// 8. Uždavinys: Kavos užsakymas
// Sukurk kintamuosius kavosKiekis ir kavosKaina. Parašyk programą, kuri suskaičiuoja kavos užsakymo sumą ir ją atspausdina.

// Atsakymas:
// let kavosKiekis = 5;
// let kavosKaina = 10;
// let valiuta = 'Dollar'

// let kavosUzsakymoSuma = kavosKiekis * kavosKaina;
// console.log(`Kavos užsakymo suma: ${kavosUzsakymoSuma} ${valiuta}`);

// 9. Uždavinys: PVM skaičiavimas
// Sukurk kintamuosius kainaBePVM ir pvm, kurie išsaugos prekės kainą ir PVM procentą (pvz., 21). Programa turi apskaičiuoti kainą su PVM.

// Atsakymas
// let kainaBePVM = 10;
// let pvmProcentai = 21;
// let kainaSuPVM = kainaBePVM + kainaBePVM * (pvmProcentai / 100);
// console.log(`Kaina su PVM: ${kainaSuPVM}`);

// 10. Uždavinys: Automobilio kuro sąnaudos
// Sukurk kintamuosius nuvaziuotiKm, kuroSanaudos ir kuroKaina. Parašyk programą, kuri apskaičiuoja kiek kainuos nukeliauti nuvaziuotiKm su šiuo automobiliu.

// Atsakymas
// let nuvaziuotiKm = 5;
// let kuroSanaudos = 10;
// let kuroKaina = 6;
// let valiuta = 'Eur';
// let vaziavimoKaina = (nuvaziuotiKm / 100) * kuroSanaudos * kuroKaina;
// console.log(`Važiavimo kaina: ${vaziavimoKaina} ${valiuta}`);

// 11. Uždavinys: Metų skaičius mėnesiais.
// Sukurk kintamąjį metai, kuriame būtų saugomas skaičius, kiek metų. Programa turi apskaičiuoti, kiek tai sudaro mėnesių.

// Atsakymas
// let metai = 4;
// const menesiai = 12;
// let kiekMenesiu = metai * menesiai;
// console.log(`Tai sudaro mėnesių: ${kiekMenesiu}`);

// 12. Uždavinys: Temperatūros perskaičiavimas
// Parašyk programą, kuri konvertuoja temperatūrą iš Celsijaus į Farenheito skalę. Sukurk kintamąjį temperaturaC ir priskirk jam bet kokią reikšmę,
// o tada apskaičiuok temperatūrą Farenheito skalėje. Formulė: F = C * 9/5 + 32

// Atsakymas
// let temperaturaC = 5;
// let temperaturaF = (temperaturaC * 9) / 5 + 32;
// console.log('Temperatūra pagal Farengeitą: ' + temperaturaF);
// aba
// console.log(`Temperatūra pagal Farengeitą: ${temperaturaF} F`);

// Back tikus  ` ` naudojame, kai į stringo vidų įdedame kintamojo reikšmę.

// Vinegubas kabutes ' ' naudojame, kai stringo viduje nėra kintamojo.

// Pakelti kubu
// let skaičius = 5;
// console.log(skaičius ** 3);

// Peklti kvadratu

// let skaičius = 5;
// console.log(skaičius ** 2);
