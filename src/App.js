import "./App.css";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <a
          href="https://www.instagram.com/loja.sanguinaria"
          target="_blank"
          rel="noreferrer"
          alt="Instagram"
        >
          <img src={logo} alt="Loja Sanguinaria - Links" className="logo" />
        </a>
      </div>
      {/* <div className="title">
        <h1>COMPRE AQUI:</h1>
      </div> */}
      <div className="links-list">
        <a
          href="https://www.lojasanguinaria.com.br/"
          target="_blank"
          rel="noreferrer"
          alt="Site Oficial"
        >
          <button className="link-button">Site</button>
        </a>
        <a
          href="https://shopee.com.br/lojasanguinaria"
          target="_blank"
          rel="noreferrer"
          alt="Shopee"
        >
          <button className="link-button">Shopee</button>
        </a>
        <a
          href="https://lista.mercadolivre.com.br/_CustId_118848739"
          target="_blank"
          rel="noreferrer"
          alt="Mercado Livre"
        >
          <button className="link-button">Mercado Livre</button>
        </a>
      </div>
    </div>
  );
}
