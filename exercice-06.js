const panier = [
  { nom: "Souris", prix: 150, quantite: 2 },
  { nom: "Casque", prix: 400, quantite: 1 },
  { nom: "Tapis", prix: 60, quantite: 3 },
  { nom: "Webcam", prix: 520, quantite: 1 }
];

const noms = panier.map(article => article.nom);
console.log("Noms :", noms);



const totauxLignes = panier.map(article => ({
  nom: article.nom,
  total: article.prix * article.quantite
}));
console.log("Totaux lignes :", totauxLignes);


const prixPlus100 = panier
  .filter(article => article.prix > 100)
  .map(article => article.nom);
console.log("Prix > 100 :", prixPlus100);

 const prix100 = panier.filter(a => a.prix > 100).map(a=>a.nom)
 console.log(prix100)




// const totalPanier = panier.reduce((total, article) => {
//   return total + article.prix * article.quantite;
// }, 0);

const tot = panier.reduce((to,a)=>{
    return to + a *a.quantite
},0) 

let totalPanier =  0;
for (i =0; i< totauxLignes.length ; i++){
    totalPanier = totalPanier + totauxLignes[i].total
}
console.log(totalPanier);


// const nombreArticles = panier.reduce((total, article) => {
//   return total + article.quantite;
// }, 0);
// console.log("Nombre d'articles :", nombreArticles);