import React from 'react';
import { Stack, Link, MessageBar, MessageBarType } from '@fluentui/react';
import { useTranslation } from 'react-i18next';

export type Happey565ErrorProps = {
    message: string;
}

export const Happey365Error: React.FunctionComponent<Happey565ErrorProps> = (props) => {
    const { t } = useTranslation();

    return <Stack style={{ height: "100vh" }}
        verticalAlign="center"
        horizontalAlign="center">
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close">
            {props.message}
            <Link href="/" >
            </Link>
        </MessageBar>
    </Stack>;
}