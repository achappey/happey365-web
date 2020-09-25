import React, { useContext } from 'react';
import { ActionButton, Stack } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const brandName = process.env.REACT_APP_BRANDNAME;

export type Happey365StartProps = {
}

export const Happey365Start: React.FunctionComponent<Happey365StartProps> = (props) => {
    const { t } = useTranslation();

    const currentUser = useContext(UserContext);

    return <Stack style={{ height: "100vh" }} verticalAlign="center" horizontalAlign="center" horizontal>
        <Stack.Item>
            {
                currentUser ? <Redirect to={"/"} /> :
                    <Stack>
                        <Stack.Item>
                            <div style={{ textAlign: "center" }}>
                                <h1>{brandName}</h1>
                            </div>
                        </Stack.Item>
                        <Stack.Item>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <ActionButton iconProps={{ iconName: "Signin" }} href={"/signin"}>
                                    {t('signIn')}
                                </ActionButton>
                                <ActionButton iconProps={{ iconName: "AddFriend" }} href={"/signup"}>
                                    {t('signUp')}
                                </ActionButton>
                            </div>
                        </Stack.Item>
                    </Stack>
            }

        </Stack.Item>
    </Stack>;
}