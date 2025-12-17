const suma = require('./suma');
console.log('Iniciando prueba...');
const resultado = suma(2, 3);
if (resultado === 5) {
    console.log('✅ Prueba PASADA');
    process.exit(0); // éxito
} else {
    console.log('❌ Prueba FALLIDA: esperaba 5, obtuvo', resultado);
    process.exit(1); // error
}