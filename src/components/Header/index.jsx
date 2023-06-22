import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../utils/style/css/style.css";
import logo from "../../assets/logos/logo-kasa.svg";

function Header() {
  // Recuperation de l'url et en fonction ajout ou non de la classe css de soulignement
  const { pageActuelle } = useParams();
  let souligneAccueil = "";
  let souligneApropos = "";
  if (pageActuelle === undefined) {
    souligneAccueil = "lien-souligne";
  } else if (pageActuelle === "apropos") {
    souligneApropos = "lien-souligne";
  }

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo de Kasa"></img>
      </Link>
      <nav>
        <Link to="/" className={souligneAccueil}>
          Accueil
        </Link>
        <Link to="/apropos" className={souligneApropos}>
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
