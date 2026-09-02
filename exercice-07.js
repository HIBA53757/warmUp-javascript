const titre = " Mon    Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

function genererSlug(titre) {
    const mots = titre.trim().toLowerCase().split(" ").filter(mot => mot !== "");
    return mots.join("-");
}

function compterMots(phrase) {
    const mots = phrase.trim().split(" ").filter(mot => mot !== "");
    return mots.length;
}

function initiales(nomComplet) {
    const mots = nomComplet.trim().split(" ").filter(mot => mot !== "");
    return mots 
    .map(mot => mot[0].toUpperCase()) 
    .join(".");
}

console.log(`genererSlug(titre) -> "${genererSlug(titre)}"`);

console.log(`compterMots(phrase) -> ${compterMots(phrase)}`);
console.log(`initiales(nomComplet) -> "${initiales(nomComplet)}"`);
console.log(`genererSlug(" Sprint 1 ") -> "${genererSlug(" Sprint 1 ")}"`);