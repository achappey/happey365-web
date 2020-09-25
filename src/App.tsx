import React from 'react';
import './App.css';
import { initializeIcons } from '@uifabric/icons';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { Helmet } from "react-helmet";
import './i18n';
import { Happey365SignIn } from './pages/SignIn/SignIn';
import useInit from './hooks/use-init';
import { UserProvider } from './context/UserContext';
import { ServiceProvider } from './context/ServiceContext';
import { Happey365Start } from './pages/Start/Start';
import { Happey365Auth } from './pages/Auth/Auth';
import { Happey365Layout } from './pages/Layout/Layout';

const brandName = process.env.REACT_APP_BRANDNAME;

initializeIcons();

const App = () => {
    const config = useInit();

    return (
        <UserProvider value={config.currentUser}>
            <ServiceProvider value={config.service}>
                <Helmet>
                    <title>{brandName}</title>
                </Helmet>
                <BrowserRouter>
                    <GuardProvider guards={[config.routeGuard]}>
                        <Switch>
                            <GuardedRoute path='/start'
                                render={() => <Happey365Start />} />

                            <GuardedRoute path='/signin'
                                render={() => <Happey365SignIn
                                    signIn={config.loginRedirect}
                                />} />

                            <GuardedRoute path='/auth'
                                render={() => <Happey365Auth
                                    login={() => {

                                    }}
                                />} />

                            <GuardedRoute path='/'
                                meta={{ auth: true }}
                                component={Happey365Layout} />
                        </Switch>
                    </GuardProvider>
                </BrowserRouter>
            </ServiceProvider>
        </UserProvider>
    );
}

export default App;
