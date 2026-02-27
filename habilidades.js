// habilidades.js
const habilidades = [
  { nombre: 'HTML', nivel: 'Avanzado' },
  { nombre: 'CSS', nivel: 'Avanzado' },
  { nombre: 'JavaScript', nivel: 'Intermedio' },
  { nombre: 'React', nivel: 'Intermedio' },
  { nombre: 'Node.js', nivel: 'Básico' }
];

function cargarHabilidades() {
  const contenedor = document.getElementById('habilidades');
  contenedor.innerHTML = '';
  habilidades.forEach((hab, i) => {
    const div = document.createElement('div');
    div.className = 'habilidad fade-in';
    div.innerHTML = `<strong>${hab.nombre}</strong> <span>${hab.nivel}</span>`;
    setTimeout(() => {
      contenedor.appendChild(div);
    }, 100 * i);
  });
}

document.addEventListener('DOMContentLoaded', cargarHabilidades);