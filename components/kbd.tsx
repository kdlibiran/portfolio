import "./kbd.css";

export default function Kbd() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <button className=" kbc-button kbc-button-lg">Q</button>
        <button className=" kbc-button kbc-button-lg">W</button>
        <button className=" kbc-button kbc-button-lg kbc-button-secondary">
          E
        </button>
        <button className=" kbc-button kbc-button-lg">R</button>
        <button className=" kbc-button kbc-button-lg">T</button>
        <button className=" kbc-button kbc-button-lg kbc-button-secondary">
          Y
        </button>
        <button className=" kbc-button kbc-button-lg">U</button>
        <button className=" kbc-button kbc-button-lg">I</button>
        <button className=" kbc-button kbc-button-lg">O</button>
        <button className=" kbc-button kbc-button-lg">P</button>
      </div>
      <div>
        <button className=" kbc-button kbc-button-lg">A</button>
        <button className=" kbc-button kbc-button-lg">S</button>
        <button className=" kbc-button kbc-button-lg">D</button>
        <button className=" kbc-button kbc-button-lg">F</button>
        <button className=" kbc-button kbc-button-lg">G</button>
        <button className=" kbc-button kbc-button-lg">H</button>
        <button className=" kbc-button kbc-button-lg">J</button>
        <button className=" kbc-button kbc-button-lg kbc-button-secondary">
          K
        </button>
        <button className=" kbc-button kbc-button-lg kbc-button-secondary">
          L
        </button>
      </div>
      <div>
        <button className=" kbc-button kbc-button-lg">Z</button>
        <button className=" kbc-button kbc-button-lg">X</button>
        <button className=" kbc-button kbc-button-lg">C</button>
        <button className=" kbc-button kbc-button-lg">V</button>
        <button className=" kbc-button kbc-button-lg">B</button>
        <button className=" kbc-button kbc-button-lg">N</button>
        <button className=" kbc-button kbc-button-lg">M</button>
      </div>
    </div>
  );
}
