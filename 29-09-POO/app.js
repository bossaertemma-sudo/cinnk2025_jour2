class Voiture {
  constructor(marque, modele, annee, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.couleur = couleur;
    this.kilometrage = 0;
  }

  afficherInfos() {
    console.log(`${this.marque} ${this.modele} ${this.annee} ${this.couleur} ${this.kilometrage}km au compteur
    `);
  }

  rouler(km) {
    this.kilometrage += km;
    console.log(
      `${this.marque} ${this.modele} a roulé ${km}, total : ${this.kilometrage}`
    );
  }
}

class VoitureElectrique extends Voiture {
  constructor(marque, modele, annee, couleur, autonomie) {
    super(marque, modele, annee, couleur);
    this.autonomie = autonomie;
  }

  recharger() {
    console.log(`${this.marque} ${this.modele} est en train de recharger`);
  }

  rouler(km) {
    if (km > this.autonomie) {
      console.log(
        `${this.marque} ${this.modele} n'a pas assez d'autonomie pour rouler ${km} km`
      );
    } else {
      this.autonomie -= km;
      super.rouler(km);
      console.log(`il reste ${this.autonomie} km d'autonomie`);
    }
  }
}

class Garage {
  constructor(nom) {
    this.nom = nom;
    this.voitures = [];
  }

  ajouterVoiture(voiture) {
    if (voiture instanceof Voiture) {
      this.voitures.push(voiture);
      console.log(
        `${voiture.marque} ${voiture.modele} a été ajouté au garage ${this.nom}`
      );
    } else {
      console.log(`${voiture} n'est pas une voiture valide`);
    }
  }

  afficherVoitures() {
    console.log(`_____GARAGE ${this.nom}_____`);
    this.voitures.forEach((v) => v.afficherInfos());
  }
}

// const clio = new Voiture("Renault", "Clio", 2018, "bleu");
// const tesla = new VoitureElectrique("Tesla", "Model S", 2022, "blanc", 400);
// const garage = new Garage("Mon garage");

//debut app.js
const garages = [
  new Garage("Garage1"),
  new Garage("Garage2"),
  new Garage("Garage3"),
  new Garage("Garage4"),
];

const voitures = [
  new Voiture("Renault", "Clio", 2018, "bleu"),
  new VoitureElectrique("Tesla", "Model S", 2022, "blanc", 400),
];

document.getElementById("form-garage").addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = document.getElementById("new-garage-name");
  garages.push(new Garage(nom.value));
  nom.value = "";
  afficherGarages();
});

document
  .getElementById("form-voiture")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const marque = document.getElementById("new-voiture-marque");
    const modele = document.getElementById("new-voiture-modele");
    const annee = document.getElementById("new-voiture-annee");
    const couleur = document.getElementById("new-voiture-couleur");
    voitures.push(
      new Voiture(marque.value, modele.value, annee.value, couleur.value)
    );
    marque.value = "";
    modele.value = "";
    annee.value = "";
    couleur.value = "";
    afficherVoitures();
  });

document
  .getElementById("form-garage-voiture")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const garage = document.getElementById("select-garages");
    const voiture = document.getElementById("select-voitures");

    garages[garage.value].ajouterVoiture(voitures[voiture.value]);
    afficherVoitures();
    afficherGarages();
  });

function afficherGarages() {
  const liste_garages = document.getElementById("liste-garages");
  const select_garages = document.getElementById("select-garages");
  liste_garages.innerHTML = "";
  select_garages.innerHTML = "";
  if (garages.length === 0) {
    liste_garages.innerHTML = `<p>Aucun garage</p>`;
  }

  garages.forEach((garage, index) => {
    //item garage
    const div = document.createElement("div");
    div.className = "garage-item";
    div.innerHTML = `
    <h3>${garage.nom}</h3>
    <button onclick="supprimerGarage(${index})">
    Supprimer
    </button>
    `;

    //voitures du garage

    if (garage.voitures.length > 0) {
      const ul = document.createElement("ul");
      garage.voitures.forEach((voiture, index) => {
        const li = document.createElement("li");
        li.textContent = `${voiture.marque} ${voiture.modele} ${voiture.annee}  - ${voiture.couleur} `;
        ul.appendChild(li);
      });
      div.appendChild(ul);
    } else {
      const p = document.createElement("p");
      p.textContent = "Aucune voiture dans ce garage";
      div.appendChild(p);
    }

    //select garages
    const option = document.createElement("option");
    option.setAttribute("value", index);
    option.textContent = garage.nom;
    liste_garages.appendChild(div);
    select_garages.appendChild(option);
  });
}

function afficherVoitures() {
  const liste_voitures = document.getElementById("liste-voitures");
  const select_voitures = document.getElementById("select-voitures");
  liste_voitures.innerHTML = "";
  select_voitures.innerHTML = "";
  if (voitures.length === 0) {
    liste_voitures.innerHTML = `<p>Aucune voiture</p>`;
  }

  voitures.forEach((voiture, index) => {
    const div = document.createElement("div");
    div.className = "voiture-item";
    div.innerHTML = `
    <h3>${voiture.marque} ${voiture.modele}</h3>
 
    <button onclick="supprimerVoiture(${index})">
    Supprimer
    </button>
    `;

    const option = document.createElement("option");
    option.setAttribute("value", index);
    option.textContent = voiture.marque + " " + voiture.modele;
    liste_voitures.appendChild(div);
    select_voitures.appendChild(option);
  });
}

function supprimerGarage(index) {
  garages.splice(index, 1);
  afficherGarages();
}
function supprimerVoiture(index) {
  voitures.splice(index, 1);
  afficherVoitures();
}

afficherGarages();
afficherVoitures();;





