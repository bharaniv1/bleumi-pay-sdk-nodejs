export * from './hostedCheckoutsApi';
import { HostedCheckoutsApi } from './hostedCheckoutsApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './payoutsApi';
import { PayoutsApi } from './payoutsApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [HostedCheckoutsApi, PaymentsApi, PayoutsApi];
