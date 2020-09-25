import React from 'react';
import {
    DetailsList,
    Label, CommandBar
} from '@fluentui/react';

import { useTranslation } from 'react-i18next';

export type Happey365VersionCleanJobListProps = {
    jobs: any[];

}

export const Happey365VersionCleanJobList: React.FunctionComponent<Happey365VersionCleanJobListProps> = (props) => {
    const { t } = useTranslation();


    return <>
        <Label>{t('versionCleanJobs')}</Label>
        <CommandBar items={[]} />
        <DetailsList
            items={props.jobs}
            columns={[]}>
        </DetailsList>

    </>;
}