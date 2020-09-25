import React, { useState } from 'react';
import { Stack, Spinner, SpinnerSize } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { Happey365Error } from '../../components/Error/Error';

const audience = process.env.REACT_APP_AUDIENCE;

export type Happey365AuthProps = {
    login: any;
}

export const Happey365Auth: React.FunctionComponent<Happey365AuthProps> = (props) => {
    const { t } = useTranslation();
    const loadState = useState<number>(0);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return <Stack style={{ height: "100vh" }}
        verticalAlign="center"
        horizontalAlign="center">
        {error ? <Happey365Error message={error!} />
            : loggedIn ? <Redirect to={"/"} />
                : <Spinner size={SpinnerSize.large} />
        }
    </Stack>;

}