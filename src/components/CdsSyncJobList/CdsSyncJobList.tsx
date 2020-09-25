import React, { useState } from 'react';
import {
    Stack, DetailsList, IColumn,
    Label, CommandBar, ICommandBarItemProps, Panel, Dropdown, IDropdownOption
} from '@fluentui/react';

import { useTranslation } from 'react-i18next';

export type Happey365CdsSyncJobListProps = {
    jobs: any[];
    getEnvironments: any;
    // getFields: any;
    // getEntities: any;
}

export const Happey365CdsSyncJobList: React.FunctionComponent<Happey365CdsSyncJobListProps> = (props) => {
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
    /*
        const showNewPanel = async () => {
    
            const envs = await props.getEnvironments();
    
            setEnvironments(envs);
    
            setShowNew(true);
        };
    
        const getEntities = async (env: any) => {
    
            const ents = await props.getEntities(env);
    
            setEntities(ents);
        };
    
        const getEntityFields = async (env: any, field: string) => {
    
            const ents = await props.getFields(env, field);
            console.log(ents);
            setTargetEntityFields(ents);
        };
    
        const columns: IColumn[] = [{
            key: "environment",
            fieldName: "environment",
            name: t("environment"),
            minWidth: 100
        }, {
            key: "displayName",
            fieldName: "displayName",
            name: t("displayName"),
            minWidth: 200
        }, {
            key: "lastRun",
            fieldName: "lastRun",
            name: t("lastRun"),
            minWidth: 100
        }];
    
        const actions: ICommandBarItemProps[] = [{
            key: "new",
            name: t('new'),
            onClick: () => {
                showNewPanel();
            },
            iconProps: { iconName: "Add" }
        }, {
            key: "delete",
            name: t('delete'),
            iconProps: { iconName: "Delete" }
        }];
    
        const dismissNewPanel = () => setShowNew(false);
    
        const envOptions: IDropdownOption[] = environments.map(g => {
            return {
                text: g.friendlyName,
                key: g.environmentId
            };
        });
    
        const entOptions: IDropdownOption[] = entities.map(g => {
            return {
                text: g.logicalName,
                key: g.logicalName
            };
        });
    
    
        const targetKeyOptions: IDropdownOption[] = targetEntityFields
            .filter(g => g.attributeType != "Lookup")
            .map(g => {
                return {
                    text: g.logicalName,
                    key: g.logicalName
                };
            });
    
    
        const targetLookupOptions: IDropdownOption[] = targetEntityFields
            .filter(g => g.attributeType == "Lookup")
            .map(g => {
                return {
                    text: g.logicalName,
                    key: g.schemaName
                };
            });
    
        const envChanged = (event: any, item: any) => {
    
            const env = environments.find(f => f.environmentId == item.key);
            setEnvironment(env);
    
            getEntities(env);
        };
    
        const targetEntChanged = (event: any, item: any) => {
    
            const ent = entities.find(f => f.logicalName == item.key);
            setTargetEntity(ent);
    
            getEntityFields(environment, ent.logicalName);
        };
    */

    return <>
    </>;

    /*
    return <>
        <Label>{t('syncJobs')}</Label>
        <CommandBar items={actions} />
        <DetailsList
            items={props.jobs}
            columns={columns}>
        </DetailsList>
        <Panel isOpen={showNew}
            headerText={t('newSyncJob')}
            onDismiss={dismissNewPanel} >
            <Stack>
                <Stack.Item>
                    <Dropdown label={t('environment')}
                        options={envOptions}
                        required={true}
                        onChange={envChanged}
                    />

                </Stack.Item>
                <Stack.Item>
                    <Dropdown label={t('targetEntity')}
                        options={entOptions}
                        required={true}
                        onChange={targetEntChanged}
                        disabled={!environment}
                    />
                </Stack.Item>
                <Stack.Item>
                    <Dropdown label={t('targetEntityKeyField')}
                        options={targetKeyOptions}
                        required={true}
                        disabled={!targetEntity}

                    />

                </Stack.Item>
                <Stack.Item>
                    <Dropdown label={t('targetEntityLookup')}
                        options={targetLookupOptions}
                        required={true}
                        disabled={!targetEntity}
                    />

                </Stack.Item>
                <Stack.Item>
                    <Dropdown label={t('sourceEntityKeyField')}
                        options={[]}
                        required={true}
                    />

                </Stack.Item>
            </Stack>
        </Panel>
    </>;

    */
}