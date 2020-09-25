import { ApiService } from '../services/apiService';
import { useTranslation } from 'react-i18next';
import useAuth from './use-auth';
import { useEffect } from 'react';

const serviceUrl = process.env.REACT_APP_API_URL;

const useInit = () => {
    const { i18n } = useTranslation();
    const { signIn, signOut, getToken, currentUser, getTokenSilent } = useAuth();

    const service = new ApiService(serviceUrl!, getTokenSilent);

    useEffect(() => {
        const getUser = async () => {
            const user = await service.login();

        }

        if (currentUser) {
            getUser();
        }

    }, [currentUser]);

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
