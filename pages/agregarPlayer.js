import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// ****Hola****
// este ejemplo te ayudara a comunicar tu API ENDPOINT desde Next js y axios
// En este arhivo, utilizamos el metodo POST, usando Axios,
// para CREAR un player hacia la base de datos.

export default function Crear() {
  // activamos el useRouter
  const router = useRouter();

  const [player, setPlayer] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    juego: "",
  });

  // ===========LEER DATOS DEL FORMUARIO===============================
  const actualizarState = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  // ==========ENVIAR PETICION A LA API==========================================

  const crearPlayer = (e) => {
    e.preventDefault();

    // enviar la peticion por axios
    axios
      .post("https://joze-app.herokuapp.com/players", player)
      .then((respuesta) => {
        console.log(respuesta);

        // redireccionar al home
        router.push("/");
      });
  };

  return (
    <div className="container">
      <form onSubmit={crearPlayer} className="box">
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          onChange={actualizarState}
        />
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
          onChange={actualizarState}
        />
        <input
          type="text"
          id="edad"
          name="edad"
          placeholder="Edad"
          onChange={actualizarState}
        />
        <input
          type="text"
          id="juego"
          name="juego"
          placeholder="Juego"
          onChange={actualizarState}
        />
        <button type="submit">Crear</button>
      </form>

      <style jsx>{`
        .container {
          width: 100vw;
          min-height: 100vh;
          background: #1c1c1c;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1em;
        }
        .box {
          width: 600px;
          height: 100%;
          background: #ebebeb;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          padding: 0 0.5em;
        }

        input {
          width: 100%;
          padding: 0.5em;
          background: white;
          border: grey;
          outline: none;
          border-radius: 0.5em;
          margin: 0.5em;
        }

        // =========================
        @media (max-width: 400px) {
          .box,
          .button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
