const inscription = {
    nom: "hiba",
    email: "amina@example.com",
    motDePasse: "123fghjkl",
    age: 19
};

function valider(donne) {
    const errors = [];

    if (donne.nom.length < 2) {
        errors.push("Le nom doit contenir au moins 2 caracteres.")
    }
    if (!donne.email.includes("@") || !donne.email.includes(".")) {
        errors.push("L'email n'est pas valide.")
    }
    if (donne.motDePasse.length < 8) {
        errors.push("Le mot de passe doit contenir au moins 8 caracteres.")

    }
    if (donne.age < 18) {
        errors.push("Vous devez avoir au moins 18 ans.")
    }
return {
    valide : errors.length === 0,
    errors : errors
}

}
console.log(valider(inscription));