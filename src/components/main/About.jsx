import { NavLink } from "react-router-dom";

const About = () => {
	return (
		<>
			<section className="about content">
				<div className="about-content">
					<h2>
						Kilka słów <span>o firmie</span>
					</h2>
					<h5>
						Elbląska firma transportowa Usługi transportowe samochodem
						ciężarowym Waldemar Gajewski
					</h5>
					<p>
						Jako jednosobowa działalność gospodarcza, której Właścicielem jest
						Waldemar Gajewski, działa na rynku od 1992 roku. Przez ostatnie 30
						lat oferuje najwyżej jakości usługi transportowe. W tym czasie firma
						świadczyła swoje usługi m.in. dla takich przedsiębiorstw jak: PDiM,
						dzieniszewski.pl, Alstom, HanangZas, Galwan, Terminal Portowy Elbląg
						i wielu innym mniejszym podmiotom oraz osobom prywatnym.
					</p>

					<h5>Doświadczenia nie da się kupić</h5>
					<p>
						Utrzymanie się na rynku przez tak długi okres jest możliwe dzięki
						świadczeniu najwyższej jakości usług oraz poszanowaniu dla partenrów
						biznesowych. Od początku swojej długoletniej działalności firma
						dokonuje wszelkich starań, aby klient był w pełni usatysfakcjonowany
						ze współnej współpracy.
					</p>

					<p>
						Siedziba firmy znajduje się w <strong>Elblągu</strong> przy ul.
						Pszenicznej 27.
					</p>
					<p>Wszystkich zainteresowanych współpracą zapraszam do kontaktu</p>
					<button className="btn">
						<NavLink to="/kontakt">Dane kontaktowe</NavLink>
					</button>
				</div>
			</section>
		</>
	);
};

export default About;
