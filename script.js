const biblioteca = [];

function Libro(libro, autor, id){
   this.libro = libro;
   this.autor = autor;
   this.id = id;
}

function aniadirLibro(libro, autor, id){
   const nuevoLibro = new Libro(libro, autor, id)
   biblioteca.push(nuevoLibro);
}

function leerBiblioteca(){
   biblioteca.forEach(function(element){
      console.log(element);
   });
}

aniadirLibro("El Hobbit", "Tolkien", 1)
aniadirLibro("El dragon rojo", "Thomas Harris", 2)


leerBiblioteca()