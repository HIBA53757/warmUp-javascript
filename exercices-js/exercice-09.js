
const commandes = [
    { montant: 150, statut: "standard" },
    { montant: 620, statut: "standard" },
    { montant: 1200, statut: "premium" }
];

function calculerCommande(montant, statut) {

    let porsantageremise = 0;

    if (montant < 200) {
        porsantageremise = 0;

    } else if (montant >= 200 && montant <= 499) {
        porsantageremise = 5

    } else if (montant >= 500 && montant <= 999) {
        porsantageremise = 10

    } else if (montant >= 1000) {
        porsantageremise = 15
    } 
    
    if (statut === "premium") {
        porsantageremise += 5;
    }

    porsantageremise = Math.min(porsantageremise, 20);

    const remise = montant * porsantageremise / 100;
    const totalApresRemise = montant - remise;



    let livraison = 0;
    if (montant >= 300) {
        livraison = 0;
    }else {
        livraison = 30 ;
    }

    const total = totalApresRemise + livraison;


    return {
    porsantageremise: porsantageremise ,
    remise : remise ,
    totalApresRemise : totalApresRemise ,
    livration : livraison ,
    totalApresRemise : totalApresRemise
    }

}
console.log(calculerCommande(1000 , "premium"));