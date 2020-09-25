import React, { useContext, useState, useEffect } from 'react';
import {
    ActionButton, Stack, Spinner, Image, ImageFit, Link, DetailsList, IColumn,
    Label, CommandBar, ICommandBarItemProps, Panel, Dropdown, IDropdownOption
} from '@fluentui/react';

import { useTranslation } from 'react-i18next';
import ServiceContext from '../../context/ServiceContext';
import { env } from 'process';

export type Happey365VersionCleanJobListProps = {
    jobs: any[];

}

export const Happey365VersionCleanJobList: React.FunctionComponent<Happey365VersionCleanJobListProps> = (props) => {
    const { t } = useTranslation();
    const [showNew, setShowNew] = useState<boolean>(false);
    const [environments, setEnvironments] = useState<any[]>([]);
    const [environment, setEnvironment] = useState<any>(undefined);
    const [entities, setEntities] = useState<any[]>([]);
    const [targetEntity, setTargetEntity] = useState<any>(undefined);
    const [targetEntityFields, setTargetEntityFields] = useState<any[]>([]);
    const [targetEntityKey, setTargetEntityKey] = useState<any>(undefined);
    const [targetEntityLookup, setTargetEntityLookup] = useState<any>(undefined);
    const [sourceEntityKey, setSourceEntityKey] = useState<any>(undefined);

    return <>
        <Label>{t('versionCleanJobs')}</Label>
        <CommandBar items={[]} />
        <DetailsList
            items={props.jobs}
            columns={[]}>
        </DetailsList>

    </>;
}