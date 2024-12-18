// Gauname konteinerį į kurį sukursiu profilio kortelę
const container = document.getElementById('profile-container');
// Mano profilio korteles duomenys kurie atsivaizduios kortelėje
const userProfile = {
  name: 'Vardenis Pavardenis',
  age: 30,
  photo:
    'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
  bio: 'Esu daktaras, kuris gydo zmones',
};

// Susikuriu profilio kortelės HTML
const card = document.createElement('div');
card.classList.add('profile-card');

// Pridėsim paveiksliuką

const img = document.createElement('img');
img.src = userProfile.photo;
img.alt = userProfile.name;

// Pridedam vardą
const name = document.createElement('h2');
name.textContent = userProfile.name;

// Pridedam amzių
const age = document.createElement('p');
age.textContent = userProfile.age;

// Pridedam bio
const bio = document.createElement('p');
bio.textContent = userProfile.bio;

// Pridedame kortelę į konteinerį
card.append(name);
card.append(age);
card.append(img);
card.append(card);
card.append(bio);

container.append(card);
