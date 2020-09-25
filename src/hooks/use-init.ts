import { ApiService } from '../services/apiService';

import useAuth from './use-auth';
import { useEffect } from 'react';

const serviceUrl = process.env.REACT_APP_API_URL;

const useInit = () => {

    const { signIn, signOut, currentUser, getTokenSilent } = useAuth();

    const service = new ApiService(serviceUrl!, getTokenSilent);

    useEffect(() => {
        const getUser = async () => {
            await service.login();

        }

        if (currentUser) {
            getUser();
        }

    }, [currentUser, service]);

    const routeGuard = (to: any, from: any, next: any) => {
        if (to.meta.auth) {
            if (currentUser != null) {

                next();
            }

            next.redirect('/start');
        } else {
            next();
        }
    };


    const loginRedirect = async () => {

        signIn();

    }

    return { routeGuard, loginRedirect, signOut, currentUser, service };
}

export default useInit;
