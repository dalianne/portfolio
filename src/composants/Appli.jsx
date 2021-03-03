import Entete from './Entete';
import AnneesLiens from './AnneesLiens';
import Footer from './Footer';
import "./Appli.scss"

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <AnneesLiens />
      <Footer />
    </div>
  );
}