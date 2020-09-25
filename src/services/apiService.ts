import { happey365 } from "happey365";

export class ApiService {
    private api: happey365;

    constructor(baseUrl: string, private getToken: () => Promise<string>) {
        this.api = new happey365(baseUrl);
    }

    public login = async () => {
        const token = await this.getToken();
        await this.api.login(token);
    }

    public getVersionCleanJobs = async () => {
        const token = await this.getToken();

        const jobs = await this.api.getVersionCleanJobs(token);

        return jobs;
    }


    public addContactSyncJob = async () => {
        const token = await this.getToken();

        const jobs = await this.api.addContactSyncJob(token);

        return jobs;
    }

    public getContactSyncJobs = async () => {
        const token = await this.getToken();

        const jobs = await this.api.getContactSyncJobs(token);

        return jobs;
    }

    public getFolders = async (url: string) => {
        const token = await this.getToken();

        const folders = await this.api.getFolders(url, token);

        return folders;
    }

    public getEnvironments = async () => {
        const token = await this.getToken();

        const environments = await this.api.getEnvironments(token);

        return environments;
    }

}