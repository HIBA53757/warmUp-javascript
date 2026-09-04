const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre");

const positionLait = courses.indexOf("lait");

if (positionLait !== -1) {
    courses.splice(positionLait, 1);
}

console.log("nombre d'articles : " + courses.length);

for (let i = 0; i < courses.length; i++) {
    console.log((i + 1) + ". " + courses[i]);
}

if (courses.indexOf("cafe") !== -1) {
    console.log("Le cafe est bien dans la liste");
} else {
    console.log("Le cafe n est pas dans la liste");
}