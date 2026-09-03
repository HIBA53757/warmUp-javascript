const ventes = [
    { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
    { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
    { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
    { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
    { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
    { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

function genererRapport(ventes) {

    const caTotal = ventes.reduce((total, vente) => {
        return total + vente.montant;
    }, 0);


    const meilleureVente = ventes.reduce((meilleure, vente) => {
        if (vente.montant > meilleure.montant) {
            return vente;
        }
        return meilleure;
    });


    const caParVendeur = ventes.reduce((ca, vente) => {

        if (ca[vente.vendeur]) {
            ca[vente.vendeur] += vente.montant;
        } else {
            ca[vente.vendeur] = vente.montant;
        }

        return ca;
    }, {});


    const vendeurs = Object.values(caParVendeur);

    const moyenne = vendeurs.reduce((total, ca) => {
        return total + ca;
    }, 0) / vendeurs.length;




    const vendeursAuDessus = Object.keys(caParVendeur).filter(vendeur => {
        return caParVendeur[vendeur] > moyenne;
    });


    let rapport = "=== RAPPORT DES VENTES ===\n";
    rapport += `Chiffre d'affaires total : ${caTotal} DH\n`;
    rapport += `Meilleure vente : ${meilleureVente.produit} (${meilleureVente.vendeur}) - ${meilleureVente.montant} DH\n`;
    rapport += "CA par vendeur :\n";
    Object.keys(caParVendeur).forEach(vendeur => {
        rapport += ` ${vendeur} : ${caParVendeur[vendeur]} DH\n`;
    });
    rapport += `Moyenne par vendeur : ${moyenne.toFixed(2)} DH\n`;
    rapport += `Au-dessus de la moyenne : ${vendeursAuDessus.join(", ")}`;
    return rapport;
}

console.log(genererRapport(ventes));