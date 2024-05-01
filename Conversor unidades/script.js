function convertirALibras() {
    var kilogramos = document.getElementById('inputKg').value;
    var libras = kilogramos * 2.20462;  // Conversión de kilogramos a libras
    document.getElementById('resultado').textContent = `${kilogramos} kg son ${libras.toFixed(2)} libras.`;
}