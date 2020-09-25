import React, { useContext, useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import ServiceContext from '../../context/ServiceContext';
import { Happey365CdsSyncJobList } from '../../components/CdsSyncJobList/CdsSyncJobList';

export type Happey365CdsSyncProps = {
    url: string;
    logo: string;
}

export const Happey365CdsSync: React.FunctionComponent<Happey365CdsSyncProps> = (props) => {
    const { t } = useTranslation();
    const [jobs, setJobs] = useState<any[]>([]);

    const service = useContext(ServiceContext);

    useEffect(() => {
        const getJobs = async () => {
            const items = await service.getVersionCleanJobs();
            console.log(items);

            setJobs(items);
        }

        getJobs();
    }, []);

    return <>
        <Happey365CdsSyncJobList jobs={jobs}

            getEnvironments={service.getEnvironments}
        />
    </>;
}