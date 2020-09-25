import React, { useContext, useState, useEffect } from 'react';
import { Label } from '@fluentui/react';

import { useTranslation } from 'react-i18next';
import ServiceContext from '../../context/ServiceContext';
import { Happey365ContactSyncJobList } from '../../components/ContactSyncJobList/ContactSyncJobList';

export type Happey365ContactSyncProps = {
    url: string;
    logo: string;
}

export const Happey365ContactSync: React.FunctionComponent<Happey365ContactSyncProps> = (props) => {
    const { t } = useTranslation();
    const [jobs, setJobs] = useState<any[]>([]);

    const service = useContext(ServiceContext);

    const getItems = async () => {
        const items = await service.getContactSyncJobs();

        setJobs(items);
    }

    useEffect(() => {
        getItems();
    }, []);

    const addJob = async () => {
        const newJob = await service.addContactSyncJob();
        const newItems = jobs.map(y => y);

        newItems.splice(0, 0, newJob);

        setJobs(newItems);
    }

    return <>
        <Label>
            {t('contactSyncJobs')}
        </Label>

        <Happey365ContactSyncJobList jobs={jobs}
            addJob={addJob}
            refresh={getItems}
        />
    </>;
}