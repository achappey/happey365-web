import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActionButton, Stack, Image, DefaultPalette } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import UserContext from '../../context/UserContext';

const brandName = process.env.REACT_APP_BRANDNAME;
const brandLogo = process.env.REACT_APP_BRANDLOGO;

export type Happey365HeaderProps = {
}

export const Happey365Header: React.FunctionComponent<Happey365HeaderProps> = (props) => {
    const { t } = useTranslation();

    const iconStyle = {
        color: DefaultPalette.white
    };

    const user = useContext(UserContext);

    const headerStyle = {
        height: 40,
        color: DefaultPalette.white,
        backgroundColor: DefaultPalette.blue,
    };

    const brandNameStyle = {
        marginTop: 8,
        fontSize: "large"
    };

    const logoStyle = {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 5,
        display: "inline",
        maxHeight: 30
    };

    return <>
        <Stack horizontal
            style={headerStyle}
            horizontalAlign="space-between">
            <Stack.Item>
                <Stack horizontal>
                    <Stack.Item>
                        <Link to="/">
                            <Image
                                src={brandLogo}
                                style={logoStyle}
                            />
                        </Link>
                    </Stack.Item>
                    <Stack.Item>
                        <div style={brandNameStyle}>
                            {brandName}
                        </div>
                    </Stack.Item>
                </Stack>


            </Stack.Item>
            <Stack.Item>
                {user ?
                    <ActionButton style={iconStyle}>
                        {user.name}
                    </ActionButton>
                    :
                    <ActionButton style={iconStyle}>
                        {t('signIn')}
                    </ActionButton>
                }
            </Stack.Item>
        </Stack>
    </>;

}