import React, { useState, useEffect } from 'react';
import { Stack, Spinner, SpinnerSize } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { Happey365Error } from '../../components/Error/Error';

export type Happey365SignInProps = {
    signIn: any;
}



export const Happey365SignIn: React.FunctionComponent<Happey365SignInProps> = (props) => {
    const { t } = useTranslation();
    const [error, setError] = useState<string | undefined>(undefined);
    const [signInCompleted, setSignInCompleted] = useState<boolean>(false);

    useEffect(() => {

        const signIn = async () => {
            const user = await props.signIn();
            setSignInCompleted(true);
        }


        if (!signInCompleted) {
            signIn();
        }

    }, [props.signIn, signInCompleted]);

    return <Stack style={{ height: "100vh" }} verticalAlign="center" horizontalAlign="center">
        {error ? <Happey365Error message={error!} /> : signInCompleted ? <Redirect to={"/"} /> :
            <Spinner size={SpinnerSize.large} />
        }
    </Stack>;

}