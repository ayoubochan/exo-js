/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
  return texte.length
}
var remplaceECar = function (texte) {
  return texte.replace('e', ' ')
}
var concatString = function (texte1, texte2) {
  return `${texte1}${texte2}`
}
var afficherCar5 = function (texte) {
  return texte[4]
}
var afficher9Car = function (texte) {
  return texte.substring(0, 9)
}
var majusculeString = function (texte) {
  return texte.toUpperCase()
}
var minusculeString = function (texte) {
  return texte.toLowerCase()
}
var SupprEspaceString = function (texte) {
  return texte.trim()
}
var IsString = function (texte) {
  return (typeof texte === 'string' ? true : false)
}

var AfficherExtensionString = function (texte) {
  return texte.substring(texte.lastIndexOf('.') + 1)
}
var NombreEspaceString = function (texte) {
  return texte.split(' ').length - 1
}
var InverseString = function (texte) {
  const array = []
  for (let i = (texte.length - 1); i >= 0; i--) {
    array.push(texte[i])
  }
  return array.join('')
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  return Math.pow(x, y)
}
calculPuissance()
var valeurAbsolue = function (nombre) {
  return Math.abs(nombre)
}
var valeurAbsolueArray = function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i])
  }
  return array
}
var sufaceCercle = function (rayon) {
  return Math.round(Math.pow(rayon, 2) * Math.PI)
}
var hypothenuse = function (ab, ac) {
  return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2))
}
var calculIMC = function (poids, taille) {
  return Math.round(poids / Math.pow(taille, 2) * 100) /100
}