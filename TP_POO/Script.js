class Livre {
constructor(titre,auteur) {
this.titre= titre;
this.auteur= auteur;
}

decrire() {
   return `"${this.titre}" par ${this.auteur}`;

}
}

const livres = [];

function afficherLivres(containerId) {
  const ul = document.getElementById(containerId);
  ul.innerHTML = ""; 
  livres.forEach(livre => {
 const li = document.createElement("li");
 li.textContent = livre.decrire();
  ul.appendChild(li);
});
}


document.getElementById("form-Livres")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const titre = document.getElementById("Titre");
    const auteur = document.getElementById("Auteur");

    if (titre.value, auteur.value) {
      livres.push(new Livre(titre.value, auteur.value));
      afficherLivres("list-books");
      titre.value = "";
      auteur.value = "";
    }
  });
