import axios from "axios";
import { useRouter } from "next/router";

import Link from "next/link";

export default function player({ player }) {
  const { _id, apellido, nombre, edad, juego } = player;

  const router = useRouter();

  const eliminarPlayer = (_id) => {
    axios.delete("https://joze-app.herokuapp.com/players/:id");
    router.push("/");
  };

  return (
    <div className="container">
      <div className="top">
        <button>
          <Link href={"/"}>
            <a>Volver</a>
          </Link>
        </button>
      </div>
      <div className="card">
        <h1>Nombre: {nombre}</h1>
        <h4>Apellido:{apellido}</h4>
        <h4>Edad: {edad}</h4>
        <h4>Juego: {juego}</h4>
        <br />
        <button
          type="button"
          className="coral"
          onClick={() => eliminarPlayer(_id)}
        >
          Borrar
        </button>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          min-height: 100vh;
          background: #ebebeb;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          paddding: 1em;
        }
        .top {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background: silver;
          padding: 2em 0;
        }

        .card {
          width: 300px;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: white;
          border: 2px solid grey;
          border-radius: 1em;
          margin: 0.5em;
          padding: 0.5em;
        }
        .coral {
          background: coral;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://joze-app.herokuapp.com/players/${params.id}`
  );
  const player = await res.json();

  return {
    props: {
      player,
    },
  };
}
