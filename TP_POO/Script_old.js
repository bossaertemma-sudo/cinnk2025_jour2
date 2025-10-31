
class Livres {
constructor(titre,auteur) {
this.titre= titre;
this.auteur= auteur;
}
}

class Livre_1 extends Livres {
super(titre,auteur) {
this.titre= "Le Petit Prince";
this.auteur= "Antoine de Saint-Exupéry";
}
}
class Livre_2 extends Livres {
super(titre,auteur) {
this.titre=  "1984" ;
this.auteur= "George Orwell";
}
}
class Livre_3 extends Livres {
super(titre,auteur) {
this.titre=  "Harry Potter" ;
this.auteur= "J.K. Rowling";
}
}

Décrire(); {
    console.log(`"${this.titre}" par ${this.auteur}`);
}

class Bibliotheque {
    constuctor (nom) {
        this.nom = Bibliotheque;
        this.Livres = [
  new Livres_1("Le Petit Prince", "Antoine de Saint-Exupéry"),
  new Livres_2("1984", "George Orwell"),
  new Livres_3("Harry Potter", "J.K. Rowling"),
        ];
    }
}

const Livres = [
  new Livres_1("Le Petit Prince", "Antoine de Saint-Exupéry"),
  new Livres_2("1984", "George Orwell"),
  new Livres_3("Harry Potter", "J.K. Rowling"),
];

document
  .getElementById("form-Livres")
  .addEventListener("add", function (e) {
    e.preventDefault();
    const titre = document.getElementById("Titre");
    const auteur = document.getElementById("Auteur");
    Livre.push(
      new Livre(titre.value, auteur.value)
    );
    titre.value = "";
    auteur.value = "";
    afficherLivres("list-books");
  });
