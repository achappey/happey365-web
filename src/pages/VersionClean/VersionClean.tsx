import React, { useContext, useState, useEffect } from 'react';
import ServiceContext from '../../context/ServiceContext';
import { Happey365VersionCleanJobList } from '../../components/VersionCleanJobList/VersionCleanJobList';


export type Happey365VersionCleanProps = {
    url: string;
    logo: string;
}

export const Happey365VersionClean: React.FunctionComponent<Happey365VersionCleanProps> = (props) => {

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
        <Happey365VersionCleanJobList jobs={jobs}
        />
    </>;
}