import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DOT_COUNT = 50;

interface DotStyle {
    'width': string;
    'height': string;
    'top': string;
    'left': string;
    'animationDuration': string;
    '--x-move': string;
    '--y-move': string;
}

const CARDS = [
    {
        title: 'GYÁRAK',
        text: 'Gyárainkban történik az egyes földrajzi területekről származó állati melléktermékek, nyersanyagok begyűjtése és ezen alapanyagok fajtájától függően azok ártalmatlanítása vagy termékek előállítása.',
        img: '/gyar.jpg',
        link: '/telephelyek',
    },
    {
        title: 'TERMÉKEK, SZOLGÁLTATÁSOK',
        text: 'Termékeinkkel és kereskedelmi szolgáltatásainkkal ügyfeleink megbízható és minőségi kiszolgálását kívánjuk biztosítani.',
        img: '/termekek.jpg',
        link: '/termekeink',
    },
    {
        title: 'KARRIER',
        text: 'Betöltendő álláshelyeinkre a munkaerő toborzása belső ajánlások, továbbá meghirdetett, nyitott keresések által történik, amely pozíciókat a weboldalunkon is közzétesszük.',
        img: '/karrier.jpg',
        link: '/karrier',
    },
    {
        title: 'HÍREK',
        text: 'Társaságunk számára kiemelten fontos a társadalmi felelősségvállalás, a környezettudatosság, mely kapcsolódó feladatokban önként és példaértékkel kívánunk részt venni.',
        img: '/hirek.jpg',
        link: '/esemenyek',
    },
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CARDS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="grid-background">
                {Array.from({ length: DOT_COUNT }).map((_, i) => {
                    const size = Math.random() * 5 + 3;
                    const top = Math.random() * 100;
                    const left = Math.random() * 100;
                    const duration = Math.random() * 8 + 5;
                    const xMove = Math.random() * 40 + 20;
                    const yMove = Math.random() * 40 + 20;

                    const style: DotStyle = {
                        'width': `${size}px`,
                        'height': `${size}px`,
                        'top': `${top}%`,
                        'left': `${left}%`,
                        'animationDuration': `${duration}s`,
                        '--x-move': `${xMove}px`,
                        '--y-move': `${yMove}px`,
                    };

                    return <div key={i} className="moving-dot" style={style} />;
                })}
            </div>

            <header>
                <nav className="nav-bar">
                    <div className="nav-links">
                        <Link className="nav-button" to="/">
                            <button>Főoldal</button>
                        </Link>
                        <Link className="nav-button" to="/cegunkrol">
                            <button>Cégünkről</button>
                        </Link>
                        <Link className="nav-button" to="/nyilvanossag">
                            <button>Nyilvánosság</button>
                        </Link>
                        <Link className="nav-button" to="/dokumentumtar">
                            <button>Dokumentumtár</button>
                        </Link>
                        <Link className="nav-button" to="/adatvedelem">
                            <button>Adatvédelem</button>
                        </Link>
                        <Link className="nav-button" to="/kapcsolat">
                            <button>Kapcsolat</button>
                        </Link>
                        <Link className="nav-button" to="/partnerportal">
                            <button>Partner Portál</button>
                        </Link>
                    </div>
                </nav>
            </header>

            <div id="main">
                <div id="infos">
                    <div id="info_text">
                        <p>CALL CENTER</p>
                        <p>ELÉRHETŐSÉG MUNKANAPOKON</p>
                        <p>EMAIL</p>
                    </div>
                    <div id="info_text2">
                        <p>
                            <b>+06-80-820-024</b>
                        </p>
                        <p>
                            <b>7:00-tól - 12:00-ig</b>
                        </p>
                        <p>
                            <b>UGYFELSZOLGALAT@ATEV.HU</b>
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        A hétköznaponként 14 óráig beérkezett üzeneteket munkatársaink aznap
                        feldolgozzák,
                        <br /> míg a 14 óra után, illetve hétvégén leadott megrendelések a következő
                        munkanapon kerülnek feldolgozásra.
                    </p>
                </div>

                <div className="carousel">
                    <div
                        className="carousel-inner"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {CARDS.map((card, i) => (
                            <Link to={card.link} key={i} id="link">
                                <div id="info_card">
                                    <h2>{card.title}</h2>
                                    <div>
                                        <p>{card.text}</p>
                                    </div>
                                    <img src={card.img} alt={card.title} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    ELKÖTELEZETTEK VAGYUNK ABBAN, HOGY A MŰKÖDÉSI ÉS GYÁRTÁSI FOLYAMATAINKAT A
                    KÖLTSÉG- ÉS ENERGIAHATÉKONYSÁG,
                    <br />
                    ILLETVE KÖRNYEZETTUDATOSSÁG VEZÉRELJE, A FENNTARTHATÓ FEJLŐDÉS FOLYAMATOS
                    BIZTOSÍTÁSA ÉRDEKÉBEN.
                </div>
            </div>

            <footer>
                <div>
                    <h6>CÉGADATOK</h6>
                    <p>
                        <strong>Cég neve:</strong> <span>ATEV Zrt.</span>
                        <br />
                        <strong>Adószám:</strong> <span>10893661-2-44</span>
                        <br />
                        <strong>Cégjegyzékszám:</strong> <span>01 10 042409</span>
                        <br />
                        <strong>Bankszámlaszám:</strong> <span>18203332-06013403-40010019</span>
                        <br />
                        <br />
                        <strong>Székhely:</strong> <span>1097 Budapest, Illatos út 23.</span>
                        <br />
                    </p>
                </div>
                <div>
                    <h6>NEMZETKÖZI KAPCSOLATOK</h6>
                    <div>
                        <Link to="http://efpra.eu/">
                          <img src="/efpra.png" id='efpra'/>
                        </Link>
                    </div>
                </div>
                <div>
                    <h6>KAPCSOLODÓ</h6>
                    <div>
                        <a href="leanyvallalatok">Leányvállalatok</a>
                    </div>
                    <div>
                        <a href="dokumentumtar">Engedélyek</a>
                    </div>
                    <div>
                        <a href="dokumentumtar">Pályázatok</a>
                    </div>
                    <div>
                        <a href="integritas">Integritás - panasz</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
