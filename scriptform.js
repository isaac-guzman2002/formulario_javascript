const formulario = document.getElementById("formulario");
const tablaCuerpo = document.getElementById("tablaCuerpo");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const ciudad = document.getElementById("ciudad").value;

  const nuevaFila = document.createElement("tr");

  nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${correo}</td>
    <td>${telefono}</td>
    <td>${ciudad}</td>
    `;

  tablaCuerpo.appendChild(nuevaFila);
  formulario.reset();
});
document.getElementById("exportarExcel").addEventListener("click", function () {
  const tabla = document.getElementById("tabla");
  const wb = XLSX.utils.table_to_book(tabla, { sheet: "Sheet1" });

  XLSX.writeFile(wb, "datos.xlsx");
});
