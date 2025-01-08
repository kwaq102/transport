import { Route, Switch } from 'react-router-dom';

import Home from '../main/Home';
import About from '../main/About';
import Offer from '../main/Offer';
import Price from '../main/Price';
import Contact from '../main/Contact';
import ErrorPage from '../main/ErrorPage';


const Main = () => {

    return (
        <>
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/o-firmie" exact component={About} />
                    <Route path="/oferta" exact component={Offer} />
                    <Route path="/cennik" exact component={Price} />
                    <Route path="/kontakt" exact component={Contact} />
                    <Route exact component={ErrorPage} />
                </Switch>
            </main>
        </>
    );
}

export default Main;