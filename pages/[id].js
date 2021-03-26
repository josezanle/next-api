export default function player({ player }) {
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
        <h1>Nombre: {player.nombre}</h1>
        <h4>Apellido:{player.apellido}</h4>
        <h4>Juego: {player.juego}</h4>
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
