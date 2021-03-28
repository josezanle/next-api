import Link from "next/link";

export default function Home({ players }) {
  return (
    <div className="container">
      <div className="top">
        <button>
          <Link href={"/agregarPlayer"}>
            <a>Crear Player</a>
          </Link>
        </button>
      </div>
      {players &&
        players.map((player) => {
          return (
            <Link href={`/${player._id}`} key={player._id}>
              <a className="card">
                <h2>{player.nombre}</h2>
                <h2>{player.apellido}</h2>
                <h2>{player.edad}</h2>
                <h2>{player.juego}</h2>
              </a>
            </Link>
          );
        })}

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
          height: 250px;
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
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://joze-app.herokuapp.com/players");
  const players = await res.json();

  return {
    props: {
      players,
    },
  };
}
