import { useState, useRef, useEffect } from "react"; 
import "./Perfil.css";



function Perfil ({onGuadar}) {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [talla, setTalla] = useState("");
  const [marca, setMarca] = useState("");
  const [detalles, setDetalles] = useState("");

   // Estado de la fotografía
  const [foto, setFoto] = useState(null);
  const [vistaPrevia, setVistaPrevia] = useState(null); 

  // Estado del buscador
  const [busqueda, setBusqueda] = useState("");

  const inputFotoRef = useRef(null);

};

  // Seleccionar fotografía
  const seleccionarFoto = (evento) => {
    const archivo = evento.target.files[0];
    if(!archivo.type.starsWith("image/")){
      setErrores((prev) => ({...prev, foto: "El archivo debe ser una imagen"}));
      return;
    }

  setFoto(archivo);
  setVistaPrevia(URL.createObjectURL(archivo));
  setErrores((prev) => ({ ...prev, foto: undefined }));
  setGuardado(false);
}

const quitarFoto = () => {
    setFoto(null);
    setVistaPrevia(null);
    if (inputFotoRef.current) inputFotoRef.current.value = "";
  };

// Buscador
  const buscar = (evento) => {
    evento.preventDefault();
    console.log("Buscando:", busqueda);
    // Aquí luego puedes navegar a la página de resultados
  };

const validar = () => {
    const nuevos = {};
    if (!foto) nuevos.foto = "Sube una foto de la prenda";
    if (!titulo.trim()) nuevos.titulo = "Agrega un título";
    if (!precio || Number(precio) <= 0) nuevos.precio = "Agrega un precio válido";
    if (!talla.trim()) nuevos.talla = "Agrega la talla";
    if (!marca.trim()) nuevos.marca = "Agrega la marca";
    return nuevos;
  };

  const limpiarFormulario = () => {
    setTitulo("");
    setPrecio("");
    setTalla("");
    setMarca("");
    setDetalles("");
    quitarFoto();
  };

const guardarPrenda = (evento) => {
  evento.preventDefault();

const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;

    const prenda = {
      titulo,
      precio: Numero(precio),
      talla,
      marca,
      detalles,
      foto,
    }
};

 const guardarPrenda = (evento) => {
    evento.preventDefault();

    const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;

    const prenda = {
      titulo,
      precio: Number(precio),
      talla,
      marca,
      detalles,
      foto,
    }
};
