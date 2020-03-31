/* -------------------------------------------------------------------------- */
/*                               MENU PRINCIPAL                               */
/* -------------------------------------------------------------------------- */

const btnDepartamentos = document.getElementById('btn-departamentos'),
      grid = document.getElementById('grid'),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      btnRegresar = document.querySelector('#grid .categorias .btn-regresar'),
      btnRegresarSubcategorias = document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar'),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubcategorias = document.querySelector('#grid .contenedor-subcategorias'),
      esDispositivoMovil = () => window.innerWidth <= 800;
       

btnDepartamentos.addEventListener('mouseover', () => { 
   grid.classList.toggle('activo');
   if (!esDispositivoMovil()) {
       grid.classList.add('activo');
   }
   if (esDispositivoMovil()) {
    grid.classList.remove('activo');
   }

});

grid.addEventListener('mouseleave', () => {
    if (!esDispositivoMovil()) {
        grid.classList.remove('activo');
    }
});

// DETECTAR SUBCATEGORIAS DE CADA CATEGORIAS Y ACTIVARLA

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
      if (!esDispositivoMovil()) {
        document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
          categoria.classList.remove('activo');
          if ( categoria.dataset.categoria == e.target.dataset.categoria ) {
              categoria.classList.add('activo');
          }     
       });
      };
    });
});

// DETECTAR SUBCATEGORIAS DE CADA CATEGORIAS Y ACTIVARLA al hacer click

document.querySelectorAll('#menu .categorias a').forEach( (elemento) => {
  elemento.addEventListener('click', (e) => {
    if (esDispositivoMovil()) {
        contenedorSubcategorias.classList.add('activo');
        document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
           categoria.classList.remove('activo');
           if (categoria.dataset.categoria == e.target.dataset.categoria) {
             categoria.classList.add('activo');
           }
        });
    }
  });
});

/* -------------------------------------------------------------------------- */
/*            TRABAJAR CON LOS LISTENER DE LOS DISPOSITIVOS MOVILES           */
/* -------------------------------------------------------------------------- */


document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
  e.preventDefault();
  
  if (contenedorEnlacesNav.classList.contains('activo')) {
    contenedorEnlacesNav.classList.remove('activo');
      document.querySelector('body').style.overflow = 'visible';
  } else {
    contenedorEnlacesNav.classList.add('activo');
      document.querySelector('body').style.overflow = 'hidden';
  }
});

/* -------------------------------------------------------------------------- */
/*             DESPLEGAR EL MENU DEPARTAMENTOS EN LA VERSION MOVIL            */
/* -------------------------------------------------------------------------- */

btnDepartamentos.addEventListener('click', (e) => {
   e.preventDefault();
   grid.classList.add('activo');
   btnCerrarMenu.classList.add('activo');
});

/* -------------------------------------------------------------------------- */
/*                 BOTON DE REGRESAR EN EL MENU DE CATEGORIAS                 */
/* -------------------------------------------------------------------------- */

btnRegresar.addEventListener('click', (e) => {
  e.preventDefault();
  grid.classList.remove('activo');
  btnCerrarMenu.classList.remove('activo');
});

btnCerrarMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
      elemento.classList.remove('activo');
    }); 
    document.querySelector('body').style.overflow = 'visible';
  });

/* -------------------------------------------------------------------------- */
/*                        BOTON REGRESAR EN EL MENU DE SUBCATEGORIAS            */
/* -------------------------------------------------------------------------- */

btnRegresarSubcategorias.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    contenedorSubcategorias.classList.remove('activo'); 
   });
});

