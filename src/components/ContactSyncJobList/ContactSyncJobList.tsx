import React from 'react';
import {
    DetailsList, IColumn, CommandBar, ICommandBarItemProps
} from '@fluentui/react';

import { useTranslation } from 'react-i18next';
import { Happey365JobStatus } from '../JobStatus/JobStatus';

export type Happey365ContactSyncJobListProps = {
    jobs: any[];
    addJob: any;
    refresh: any;

}

export const Happey365ContactSyncJobList: React.FunctionComponent<Happey365ContactSyncJobListProps> = (props) => {
    const { t } = useTranslation();

    const columns: IColumn[] = [{
        key: "status",
        fieldName: "status",
        onRender: (item: any) => {
            return <Happey365JobStatus status={item.status} />;
        },
        name: t("status"),
        minWidth: 40
    }, {
        key: "startTime",
        onRender: (item: any) => {
            return new Date(item.startTime).toLocaleString();
        },
        fieldName: "startTime",
        name: t("startTime"),
        minWidth: 200
    }, {
        key: "progress",
        fieldName: "progress",
        name: t("progress"),
        minWidth: 100
    }, {
        key: "runTime",
        fieldName: "runTime",
        name: t("runTime"),
        minWidth: 100
    }, {
        key: "usersChanged",
        fieldName: "usersChanged",
        name: t("usersChanged"),
        minWidth: 100
    }, {
        key: "itemsAdded",
        fieldName: "itemsAdded",
        name: t("itemsAdded"),
        minWidth: 100
    }, {
        key: "itemsUpdated",
        fieldName: "itemsUpdated",
        name: t("itemsUpdated"),
        minWidth: 100
    }, {
        key: "itemsDeleted",
        fieldName: "itemsDeleted",
        name: t("itemsDeleted"),
        minWidth: 100
    }];


    const actions: ICommandBarItemProps[] = [{
        key: "add",
        name: t('add'),
        onClick: () => {
            props.addJob();
        },
        iconProps: { iconName: "Add" }
    }, {
        key: "refresh",
        name: t('refresh'),
        onClick: () => {
            props.refresh();
        },
        iconProps: { iconName: "Refresh" }
    }];


    return <>
        <CommandBar items={actions} />

        <DetailsList columns={columns}
            items={props.jobs}>
        </DetailsList>

    </>;
}