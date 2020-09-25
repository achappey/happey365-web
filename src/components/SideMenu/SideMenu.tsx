import React from 'react';
import { Stack, Nav, INavLinkGroup, Panel, PanelType } from '@fluentui/react';

import { useTranslation } from 'react-i18next';
import { useScreenSize } from '../../hooks/use-screen-size';
import { withRouter } from 'react-router-dom';

export type happey365SideMenuProps = {
    visible: boolean;
    onDismiss: any;

}

export const Happey365SideMenu = withRouter((props: any) => {
    const { t } = useTranslation();
    const largeScreen = useScreenSize();

    const groups: INavLinkGroup[] = [{
        links: [{
            name: "Common Data",
            url: "/commondata",
            links: [{
                name: "Relation Sync",
                url: "/commondata/relationsync",

            }]
        },
        {
            name: "Outlook",
            url: "/outlook",
            links: [{
                name: "Contact Sync",
                url: "/outlook/contactsync",

            }]
        },
        {
            name: "SharePoint",
            url: "/sharepoint",
            links: [{
                name: "Version Clean",
                url: "/sharepoint/versionclean",

            }]
        }]
    }];


    const onLinkClick = (event: any, element: any) => {
        event.preventDefault();
        props.history.push(element.url);
    };

    const content = props.visible ?
        <Nav
            ariaLabel="Navigation"
            onLinkClick={onLinkClick}
            groups={groups}
        />
        : <span></span>;

    return <>
        {largeScreen ?
            <Stack.Item>
                {content}
            </Stack.Item>
            : <Panel isOpen={props.visible}
                headerText={"Menu"}
                onDismiss={props.onDismiss}
                hasCloseButton={false}
                type={PanelType.smallFixedNear}
                isLightDismiss={true}>
                <div style={{ marginTop: 15 }}>
                    {content}
                </div>
            </Panel>
        }
    </>;
})