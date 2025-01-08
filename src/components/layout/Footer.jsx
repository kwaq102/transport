import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>

                <div className="footer-data">
                    <h3>
                        Transport Elbląg
                    </h3>
                    <h4>Usługi transportowe samochodem ciężarowym <span>Waldemar Gajewski</span></h4>
                    <div className="nip">NIP: <span>5780016949</span></div>
                    <div className="regon">REGON: <span>170104130</span></div>
                    <div className="bank-account">
                        Numer konta bankowego:
                    <br />
                        <span>31 1140 2004 0000 3502 7931 2515</span>
                    </div>
                </div>

                <div className="footer-about">
                    <h3>O firmie</h3>
                    <div>
                        <p>Firma usługi transportowe samochodem ciężarowym Waldemar Gajewski działa na rynku od 30 lat. Specjalizuje się w transporcie towarów na terenie kraju i świadczy najwyższej jakości usługi...</p>
                        <button>
                            <NavLink to="/o-firmie" exact>Czytaj więcej</NavLink>
                        </button>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Kontakt</h3>
                    <div className="footer-address">
                        ul. Pszeniczna 27
                    <br />
                    82-300 <strong>Elbląg</strong>
                    </div>
                    <div className="footer-phone">
                        Tel: <span>+48 601 649 132</span>
                    </div>
                    <div className="footer-email">
                        e-Mail: <span>waldemar.gajewski@interia.pl</span>
                    </div>
                </div>

                <div className="copyright">

                    <p>Projekt i wykonanie strony <a href="https://www.gajewwwski.pl/">gajewwwski.pl</a></p>
                    <div>||</div>
                    <p>© Wszelkie prawa zastrzeżone</p>

                </div>

            </footer>
        </>
    );
}

export default Footer;