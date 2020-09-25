import * as Msal from "msal";

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT;
const audience = process.env.REACT_APP_AUDIENCE;

const msalConfig: Msal.Configuration = {
    auth: {
        clientId: clientId!,
        redirectUri: redirectUrl,
    }
};

const authParams: Msal.AuthenticationParameters = {
    scopes: [
        audience!
    ],
};

const msalInstance = new Msal.UserAgentApplication(msalConfig);

const getToken = async () => {
    try {
        const token = await msalInstance.acquireTokenSilent(authParams);

        return token.accessToken;
    }
    catch (error) {
        msalInstance.acquireTokenRedirect(authParams);
    }
}

const getTokenSilent = async () => {
    const token = await msalInstance.acquireTokenSilent(authParams);
    console.log(token.accessToken);
    return token.accessToken;
}

const signIn = () => {
    msalInstance.loginRedirect(authParams);
}

const signOut = () => {
    msalInstance.logout();
}

const useAuth = () => {
    const currentUser = msalInstance.getAccount();

    return { signIn, signOut, getToken, currentUser, getTokenSilent };
}

export default useAuth;
