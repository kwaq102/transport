import { NavLink } from "react-router-dom";
const Home = () => {
	return (
		<>
			<section className="home">
				<div className="home-content">
					<h1>
						Transport <span>Elbląg</span>
					</h1>
					<h2>
						Usługi transportowe samochodem ciężarowym <br />
						Waldemar Gajewski
					</h2>
					<p>Solidość pod każdym względem</p>
					<div className="home-contact">
						<button>
							<NavLink to="/kontakt">Umów transport</NavLink>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
