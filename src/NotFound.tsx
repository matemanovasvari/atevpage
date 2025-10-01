import { Link } from "react-router-dom";

const DOT_COUNT = 50;

interface DotStyle {
  width: string;
  height: string;
  top: string;
  left: string;
  animationDuration: string;
  "--x-move": string;
  "--y-move": string;
}

function NotFound() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="nav-links">
          <Link className="nav-button" to="/"><button>Főoldal</button></Link>
          <Link className="nav-button" to="/cegunkrol"><button>Cégünkről</button></Link>
          <Link className="nav-button" to="/nyilvanossag"><button>Nyilvánosság</button></Link>
          <Link className="nav-button" to="/dokumentumtar"><button>Dokumentumtár</button></Link>
          <Link className="nav-button" to="/adatvedelem"><button>Adatvédelem</button></Link>
          <Link className="nav-button" to="/kapcsolat"><button>Kapcsolat</button></Link>
          <Link className="nav-button" to="/partnerportal"><button>Partner Portál</button></Link>
        </div>
      </nav>

      <div className="grid-background">
        {Array.from({ length: DOT_COUNT }).map((_, i) => {
          const size = Math.random() * 5 + 3;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = Math.random() * 8 + 5;
          const xMove = Math.random() * 40 + 20;
          const yMove = Math.random() * 40 + 20;

          const style: DotStyle = {
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            "--x-move": `${xMove}px`,
            "--y-move": `${yMove}px`,
          };

          return <div key={i} className="moving-dot" style={style} />;
        })}
      </div>
    </div>
  );
}

export default NotFound;