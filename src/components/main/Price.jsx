import { NavLink } from 'react-router-dom';

const Price = () => {

    return (
        <>
            <section className="price content">

                <h2>Wycena <span>usługi</span></h2>

                <h5>Ceny za usługi transpowe są ustalane indywidualnie</h5>
                <p>W związku z dynamiczną zmianą cen paliwa koszt transportu jest ustalany indywidualnie przed wykonaniem usługi. Średnia cena za usługi transportowej to ok. 3,6 zł/km lub 150 zł/h, natomiast na ostateczną cenę wpływają:</p>

                <ul>
                    <li>aktualna cena paliwa</li>
                    <li>rodzaj transportowanego towaru</li>
                    <li>rodzaj, jakość drogi</li>
                    <li>czas</li>
                </ul>
                <p>Po wykonaniu usługi transportowej wystawiam fakturę z 23% vatem.</p>

                <button className="btn"><NavLink to="/kontakt">Zapytaj o wycenę</NavLink></button>

            </section>
        </>
    );
}

export default Price;