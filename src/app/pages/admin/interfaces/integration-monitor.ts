import { IntegrationStatus } from '../enums/integration-status.enum';

export interface IntegrationMonitor {
    id: number;
    process: string;
    state: IntegrationStatus;
    stateDescription: string;
    message: string;
    createAt: Date | null;
    updateAt: Date | null;
    completedAt: Date;
    duration: string | null;
}
