const Contact = () => {
	return (
		<>
			<section className="contact content">
				<div className="contact-data">
					<h2>
						Dane <span>kontaktowe</span>
					</h2>
					<div className="address">
						<h5>
							<strong>Transport Elbląg</strong>
						</h5>
						<p className="name">
							Usługi transportowe samochodem ciężarowym{" "}
							<span>Waldemar Gajewski</span>
						</p>
						<p>ul. Pszeniczna 27</p>
						<p>
							82-300 <strong>Elbląg</strong>
						</p>
						<p className="nip">
							NIP: <span>5780016949</span>
						</p>
						<p className="regon">
							REGON: <span>170104130</span>
						</p>
						<p className="bank-account">
							Numer konta bankowego:
							<br />
							<span>31 1140 2004 0000 3502 7931 2515</span>
						</p>
					</div>
					<div className="contact">
						<p className="phone">
							Tel: <span>+48 601 649 132</span>
						</p>
						<p className="email">
							e-Mail: <span>waldemar.gajewski@interia.pl</span>
						</p>
					</div>
					<p className="contact-msg">
						W związku ciągłej pracy w podróży najszybciej mogą Państwo
						skontaktować się ze mną telefonicznie.
					</p>
				</div>
				<div className="contact-map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6695.347625578637!2d19.38646968860493!3d54.21149915504958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52934c1140e34b1f!2sUs%C5%82ugi%20transportowe%20samochodem%20ci%C4%99%C5%BCarowym%20Elbl%C4%85g%20Waldemar%20Gajewski!5e0!3m2!1spl!2spl!4v1618651005409!5m2!1spl!2spl"
						width="100%"
						height="100%"
						loading="lazy"
					></iframe>
				</div>
			</section>
		</>
	);
};

export default Contact;
