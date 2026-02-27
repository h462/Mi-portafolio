// proyectos.js
const proyectos = [
  {
    titulo: 'Portafolio Web',
    descripcion: 'Sitio web personal para mostrar habilidades y proyectos.',
    imagen: 'portafolio.png'
  },
  {
    titulo: 'E-commerce',
    descripcion: 'Tienda online desarrollada con React y Node.js.',
    imagen: 'ecommerce.png'
  },
  {
    titulo: 'Blog Técnico',
    descripcion: 'Blog sobre desarrollo web y tecnología.',
    imagen: 'blog.png'
  }
];

function cargarProyectos() {
  const contenedor = document.getElementById('proyectos');
  contenedor.innerHTML = '';
  proyectos.forEach(proj => {
    const div = document.createElement('div');
    div.className = 'proyecto';
    div.innerHTML = `
      <img src="${proj.imagen}" alt="${proj.titulo}" class="proyecto-img">
      <h3>${proj.titulo}</h3>
      <p>${proj.descripcion}</p>
    `;
    contenedor.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', cargarProyectos);