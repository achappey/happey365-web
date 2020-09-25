import React from 'react';
import { Stack } from '@fluentui/react';


import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { Switch } from 'react-router-dom';
import { Happey365Header } from '../../components/Header/Header';
import { Happey365SideMenu } from '../../components/SideMenu/SideMenu';
import { Happey365CdsSync } from '../CdsSync/CdsSync';
import { Happey365Home } from '../Home/Home';
import { Happey365ContactSync } from '../ContactSync/ContactSync';

export type Happey365LayoutProps = {
    url: string;
    logo: string;
}

export const Happey365Layout: React.FunctionComponent<Happey365LayoutProps> = (props) => {


    return <Stack style={{ height: "100%" }}>
        <Stack.Item>
            <Happey365Header />
        </Stack.Item>
        <Stack.Item>
            <Stack style={{ height: "100%" }} horizontal>
                <Stack.Item>
                    <Happey365SideMenu onDismiss={() => { }} visible={true} />
                </Stack.Item>
                <Stack.Item>
                    <GuardProvider>
                        <Switch>
                            <GuardedRoute path='/commondata/relationsync'
                                component={Happey365CdsSync} />
                            <GuardedRoute path='/outlook/contactsync'
                                component={Happey365ContactSync} />

                            <GuardedRoute path='/'
                                component={Happey365Home} />
                        </Switch>
                    </GuardProvider>
                </Stack.Item>
            </Stack>
        </Stack.Item>
    </Stack>;
}