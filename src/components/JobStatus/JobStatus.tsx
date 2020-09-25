import React from 'react';
import { Stack, Link, MessageBar, MessageBarType, Icon, FontIcon } from '@fluentui/react';
import { useTranslation } from 'react-i18next';

export type Happey565JobStatusProps = {
    status: number;
}

export const Happey365JobStatus: React.FunctionComponent<Happey565JobStatusProps> = (props) => {
    const { t } = useTranslation();

    let content = <></>;

    switch (props.status) {
        case 0:
            content = <FontIcon iconName={"Forward"} />;
            break;
        case 1:
            content = <FontIcon iconName={"Running"} />;
            break;
        case 2:
            content = <FontIcon iconName={"CheckMark"} />;
            break;
        case 3:
            content = <FontIcon iconName={"Error"} />;
            break;
        default:
            break;

    }

    return <>
        {content}
    </>;
}