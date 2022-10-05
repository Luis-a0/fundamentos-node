let nombre = process.env.NOMBRE || "Nombre no definido";
let web = process.env.WEB || "Web no definida";

console.log('Hola '+ nombre);
console.log('El nombre de mi web es '+ web);