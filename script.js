const map = L.map('map').setView([19.613127461053665, -99.33933418452095], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const edificios = [
    { nombre: "La Era", coords: [19.613065042754652, -99.33843453247002], imagen: "Image/LaEra.jpg", texto: "Zona en la que se encuentra el area de psicologia y la zona rosa la cual es la zona de apoyo hacia las mujeres", iframe: "https://panoraven.com/es/embed/Mrmm8WEuc9" },
    { nombre: "Edificio D", coords: [19.613199385731225, -99.33929682332334], imagen: "Image/EdificioD.png", texto: "Este edificio se encarga de lo que es la programación. La principal carrera que se desarrolla aquí es Desarrollo de Software Multiplataforma.", iframe: "https://panoraven.com/es/embed/Mrmm8WEuc9" },
    { nombre: "Edificio E", coords: [19.612658550345884, -99.33923302928696], imagen: "Image/EdificioE.png", texto: "Este es el encargado de los laboratorios de textiles, serigrafía y planchado", iframe: "https://panoraven.com/es/embed/hyJ7y1XC7O" },
    { nombre: "Edificio G", coords: [19.612740662393154, -99.34097796305412], imagen: "Image/EdificioG.jpg", texto: "Carreras ofertadas: Técnico Superior universitario en emprendimiento formulación y evaluación de proyectos, TSU en Gestión del capital Humano , TSU en Administración Área Capital Humano", iframe: "https://panoraven.com/es/embed/2JsXuQydkU" },
    { nombre: "Cafeteria", coords: [19.61259982026864, -99.34032226031468], imagen: "Image/Cafeteria.jpg", texto: "La cafeteria actualmente se encuentra fuera de servicio debido a las nuevas leyes impartidas por la presidenta actual Claudia Sheinbaum", iframe: "https://panoraven.com/es/embed/ffWOmO5UPs" },
    { nombre: "Edificio K", coords: [19.612345485457844, -99.34055844750884], imagen: "Image/EdificioK.jpg", texto: "Carreras ofertadas: T.S.U. en Mantenimiento, Área Industrial, T.S.U. en Mecatronica, Área Sistemas de Manufactura Flexible ,T.S.U. en Procesos Industriales, Área Automotríz, ING. en Mantenimiento Industrial ,ING. en Mecatronica, ING. en Sistemas Productivos, Ingeniería en Mantenimiento Industrial (Nuevo Plan), Ingeniería en Mecatrónica (Nuevo Plan) , Ingeniería Industrial (Nuevo Plan)", iframe: "https://panoraven.com/es/embed/30CBNY0HCO" },
    { nombre: "Edificio L", coords: [19.611967304478743, -99.33941718477618], imagen: "Image/EdificioL.jpg", texto: "Zonas Utilizables: Laboratorio de Ingeniera de Procesos, Laboratorio de Serigrafía , Laboratorio de Flexografía , Laboratorio de Post-Prensa , Laboratorio de manufactura-esbelta", iframe: "https://panoraven.com/es/embed/GusDMiJELO" },
    { nombre: "Edificio M", coords: [19.6115459976567, -99.33884497301763], imagen: "Image/EdificioM.jpg", texto: "Carreras ofertadas: TSU en Quimica (Area Tecnologia Ambiental ), TSU en Energias Renovables (Area Solar ), TSU en Nanotecnlogia (Area Materiales), Ingeniera en Nanotecnologia, Ingenieria en Tecnologia Ambiental, Ingeneria en Energias Renovables", iframe: "" },
    { nombre: "Edificio F", coords: [19.6115459976567, -99.33884497301763], imagen: "Image/LaboratorioPesado.jpg", texto: "Laboratorio Pesado de Nanotecnología y Tecnología Ambiental", iframe: "" },
    { nombre: "Centro de Idiomas", coords: [19.61291571529895, -99.34203939229064], imagen: "Image/CentroIdiomas.jpg", texto: "En el centro de idiomas se puede encontrar informacion relevante a lo que son las certificaciones dadas por la universidad, chequeo referente a los horarios de las clases de ingles y ademas se puede llegar a consultar sobre lo que son los intercambios escolares a otros paises extranjeros", iframe: "https://panoraven.com/es/embed/Zf6OzM4pOl" },
    { nombre: "Edificio O", coords: [19.611573572691313, -99.34284378630267], imagen: "Image/EdificioO.jpg", texto: "Carreras Ofertadas: Licenciatura en administracion , Licenciatura en Contaduria, Licenciatura en Negocios y Mercadotecnia", iframe: "https://panoraven.com/es/embed/SzKEWfHQ4a" },
    { nombre: "Edificio P", coords: [19.609741423421426, -99.34507255218833], imagen: "Image/EdificioP.jpg", texto: "Carreras ofertadas: Licenciatura en Enfermeria y Licenciatura en Terapia Fisica", iframe: "" },
    { nombre: "Puerta 1", coords: [19.613497987240066, -99.33705293640301], imagen: "Image/Puerta1.jpg", texto: "Puerta de Acceso Principal para Directivos y Docentes : Aqui se encuentra disponible un estacionamiento para estos", iframe: "" },
    { nombre: "Puerta 2", coords: [19.61388716696635, -99.339454727527], imagen: "Image/Puerta2.jpg", texto: "Puerta de Acceso Y Salida para Docentes y Directivos y ademas con estacionamiento disponible para los estudiantes dejando lo que es su credencial de lector", iframe: "https://panoraven.com/es/embed/OVPuI82vKo" },
    { nombre: "Puerta 3", coords: [19.613171955219137, -99.34140875996792], imagen: "Image/Puerta3.jpg", texto: "Puerta de Acceso y Salida para Docentes y Directo con estacionamiento disponible solo para ellos y los estudiantes solo se les tiene permitido la salida", iframe: "https://panoraven.com/es/embed/i9vENJxrA2" },
    { nombre: "Puerta 4", coords: [19.613333951711006, -99.34217566011411], imagen: "Image/Puerta4.jpg", texto: "Puerta de acceso principal para los estudiantes", iframe: "https://panoraven.com/es/embed/oxnUHagvOJ" },
    { nombre: "Puerta 5", coords: [19.613505302108074, -99.34378693919246], imagen: "Image/Puerta5.jpg", texto: "Puerta de acceso para los estudiantes que cursan principalmente Enfermeria y Terapia Fisica", iframe: "" },
    { nombre: "ExHacienda", coords: [19.61297453785049, -99.3370500652114], imagen: "Image/ExHacienda.jpg", texto: "Este es el lugar en el que se encuentran los restos de la hacienda en la que se plantaron las bases para lo que es la Universidad Tecnologica Fidel Velazquez", iframe: "" },
    { nombre: "Centro de Investigacion", coords: [19.612731460349398, -99.34158703635343], imagen: "Image/CentroInvestigacion.jpg", texto: "Centro de vinculacion e investigacion para la resolucion de problemas y vinculacion con empresas para proyectos a futuro, ademas se encuentran los laboratorio de Metrología y Manufactura.", iframe: "https://panoraven.com/es/embed/XtytdM72be" },
    { nombre: "Gimnasio", coords: [19.61192531212748, -99.34346601220417], imagen: "Image/Gimnasio.jpg", texto: "Aqui es donde se encuentra el Estadio Dragones y ademas se practican diferentes disciplinas como lo son basquetball, taekwondo, voleyball y en la parte superior se encuentra lo que es el gimnasio con acceso gratuito para los estudiantes", iframe: "https://panoraven.com/es/embed/yo1POTdxXY" }
];
edificios.forEach(edificio => {
  if (edificio.coords.length === 2) {
    const marker = L.marker(edificio.coords).addTo(map)
      .bindPopup(`<strong>${edificio.nombre}</strong>`);

    marker.on('click', () => {
      map.setView(edificio.coords, 17, { animate: true });
      abrirInfoEdificio(edificio);
    });
  }
});

function abrirInfoEdificio(edificio) {
  const panel = document.getElementById('info-edificio');
  const imagen = panel.querySelector('img');
  const texto = panel.querySelector('.texto p');
  const iframe = panel.querySelector('iframe');
  const panoramaIframe = document.getElementById('panorama'); // Nuevo

  imagen.src = edificio.imagen;
  texto.innerHTML = `<strong>${edificio.nombre}</strong><br>${edificio.texto}`;
  iframe.src = edificio.iframe;


  if (edificio.iframe) {
    panoramaIframe.src = edificio.iframe;
  }

  panel.style.display = 'block';
  document.getElementById('iframe-container').style.display = 'none';
}



map.on('dblclick', () => {
  cerrarInfo();
});
function cerrarInfo() {
  document.getElementById('info-edificio').style.display = 'none';


  document.getElementById('iframe-container').style.display = 'block';
}

function togglePanel() {
    const panel = document.getElementById("panel");
    const overlay = document.getElementById("overlay");
    panel.classList.toggle("activo");
    overlay.classList.toggle("activo");
}


const edificiosS = {
  'La Era': 'Zona de psicología y apoyo a la mujer',
  'Edificio D': 'Edificio de Tecnologías de la Información',
  'Edificio E': 'Laboratorio "Ing. Alejo Peralta"',
  'Edificio G': 'Edificio de Administración y Logística',
  'Cafeteria': 'Cafetería Universitaria',
  'Edificio K': 'Edificio de Ingeniería Industrial y Mecatrónica',
  'Edificio L': 'Laboratorio de Producción Gráfica',
  'Edificio M': 'Edificio de Tecnología Ambiental y Energías',
  'Edificio F': 'Laboratorio Pesado de Nanotecnología',
  'Centro de Idiomas': 'Centro de Idiomas e Intercambios',
  'Edificio O': 'Edificio de Contaduría y Mercadotecnia',
  'Edificio P': 'Edificio del Área de Salud',
  'Puerta 1': 'Acceso Principal (Directivos y Docentes)',
  'Puerta 2': 'Acceso Estacionamiento Estudiantes',
  'Puerta 3': 'Acceso y Salida Estudiantes (Restricción)',
  'Puerta 4': 'Acceso Principal Estudiantes',
  'Puerta 5': 'Acceso Estudiantes de Área de Salud',
  'ExHacienda': 'Casco de la Ex-Hacienda',
  'Centro de Investigacion': 'Centro de Investigación y Vinculación',
  'Gimnasio': 'Estadio y Gimnasio "Dragones"'
};


  let indiceSeleccionado = -1;

  function filtrarSugerencias(e) {
  const input = document.getElementById('busqueda');
  const sugerenciasDiv = document.getElementById('sugerencias');
  const texto = input.value.toLowerCase();

  if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
    navegarSugerencias(e.key);
    return;
  }

  sugerenciasDiv.innerHTML = '';
  indiceSeleccionado = -1;

  if (texto === '') {
    sugerenciasDiv.style.display = 'none';
    return;
  }

  const coincidencias = Object.entries(edificiosS).filter(([clave, nombre]) =>
    clave.toLowerCase().includes(texto) || nombre.toLowerCase().includes(texto)
  );

  if (coincidencias.length === 0) {
    sugerenciasDiv.style.display = 'none';
    return;
  }

  coincidencias.forEach(([clave, nombre]) => {
    const div = document.createElement('div');
    div.innerHTML = `<img class="icono" src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="icono">
                     <span><strong>${clave}</strong> - ${nombre}</span>`;
    div.onclick = () => seleccionarSugerencia(`${clave} - ${nombre}`);
    sugerenciasDiv.appendChild(div);
  });

  sugerenciasDiv.style.display = 'block';
}


function seleccionarSugerencia(nombreCompleto) {
  const clave = nombreCompleto.split(' - ')[0];
  const edificio = edificios.find(e => e.nombre === clave);

  if (edificio && edificio.coords.length === 2) {
    map.setView(edificio.coords, 17, { animate: true });
    abrirInfoEdificio(edificio);
  } else {
    alert("No se encontraron coordenadas para: " + clave);
  }

document.getElementById('busqueda').value = edificiosS[clave];

  document.getElementById('sugerencias').style.display = 'none';
}


  function navegarSugerencias(tecla) {
    const sugerencias = document.querySelectorAll('#sugerencias div');
    if (sugerencias.length === 0) return;

    if (tecla === 'ArrowDown') {
      indiceSeleccionado = (indiceSeleccionado + 1) % sugerencias.length;
    } else if (tecla === 'ArrowUp') {
      indiceSeleccionado = (indiceSeleccionado - 1 + sugerencias.length) % sugerencias.length;
    } else if (tecla === 'Enter' && indiceSeleccionado !== -1) {
      sugerencias[indiceSeleccionado].click();
      return;
    }

    sugerencias.forEach((div, i) => {
      div.classList.toggle('seleccionado', i === indiceSeleccionado);
    });
  }
  

  document.addEventListener('click', function (e) {
    if (!document.getElementById('sugerencias').contains(e.target) &&
        e.target.id !== 'busqueda') {
      document.getElementById('sugerencias').style.display = 'none';
    }
  });


  
    function cambiarImagen(num) {
    const imagenes = {
      '1': 'Image/Calendario (1).png',
      '2': 'Image/Calendario (2).png',
      '3': 'Image/Calendario (3).png'
    };

    document.getElementById('calendar-img').src = imagenes[num];
  }
  
function llenarSelectores() {
  const origenSelect = document.getElementById('origen');
  const destinoSelect = document.getElementById('destino');

  origenSelect.length = 1; // conserva el primer <option>
  destinoSelect.length = 1;

  edificios.forEach(edificio => {
    const option1 = document.createElement('option');
    option1.value = edificio.nombre;
    option1.textContent = edificio.nombre;
    origenSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = edificio.nombre;
    option2.textContent = edificio.nombre;
    destinoSelect.appendChild(option2);
  });
}

document.addEventListener("DOMContentLoaded", llenarSelectores);

function seleccionarSugerencia(nombreCompleto) {
  const clave = nombreCompleto.split(' - ')[0];
  const edificio = edificios.find(e => e.nombre === clave);

  if (!edificio) {
    alert("No se encontró el edificio: " + clave);
    return;
  }

  if (edificio.coords.length === 2) {
    map.setView(edificio.coords, 17, { animate: true });
    abrirInfoEdificio(edificio);
  }

  document.getElementById('busqueda').value = edificiosS[clave];
  document.getElementById('sugerencias').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombreBuscado = params.get("edificio");

  if (nombreBuscado) {
    const edificio = edificios.find(e => e.nombre === nombreBuscado);
    if (edificio && edificio.coords.length === 2) {
      map.setView(edificio.coords, 17, { animate: true });
      abrirInfoEdificio(edificio);
    } else {
      console.warn("Edificio no encontrado o sin coordenadas:", nombreBuscado);
    }
  }
});
