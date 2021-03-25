import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

// ****Hola****
// este ejemplo te ayudara a comunicar tu API ENDPOINT desde Next js y axios
// En este Index, utilizamos el metodo GET, usando Axios,
// para traer todos los players desde la base de datos.

export default function Home() {
  const [player, setPlayer] = useState([]);

  const consultarApi = () => {
    axios
      .get("https://joze-app.herokuapp.com/players")
      .then((respuesta) => {
        // console.log(respuesta.data);
        // setPlayer , para agregar al state(player)
        setPlayer(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <div className="container">
      <button>
        <Link href={"/agregarPlayer"}>
          <a>Crear Player</a>
        </Link>
      </button>
      {player &&
        player.map((user) => (
          <div key={user._id} className="card">
            <h2>{user.nombre}</h2>
            <h2>{user.apellido}</h2>
            <h2>{user.edad}</h2>
            <h2>{user.juego}</h2>
          </div>
        ))}

      <style jsx>{`
        .container {
          width: 100vw;
          min-height: 100vh;
          background: #ebebeb;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          paddding: 1em;
        }

        .card {
          width: 300px;
          height: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: white;
          border: grey;
          border-radius: 1em;
          margin: 0.5em;
          padding: 0.5em;
        }
      `}</style>
    </div>
  );
}
