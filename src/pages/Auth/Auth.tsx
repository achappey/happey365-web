import React, { useState } from 'react';
import { Stack, Spinner, SpinnerSize } from '@fluentui/react';
import { Redirect } from 'react-router-dom';
import { Happey365Error } from '../../components/Error/Error';



export type Happey365AuthProps = {
    login: any;
}

export const Happey365Auth: React.FunctionComponent<Happey365AuthProps> = () => {

    const [error] = useState<string | undefined>(undefined);
    const [loggedIn] = useState<boolean>(false);

    return <Stack style={{ height: "100vh" }}
        verticalAlign="center"
        horizontalAlign="center">
        {error ? <Happey365Error message={error!} />
            : loggedIn ? <Redirect to={"/"} />
                : <Spinner size={SpinnerSize.large} />
        }
    </Stack>;

}