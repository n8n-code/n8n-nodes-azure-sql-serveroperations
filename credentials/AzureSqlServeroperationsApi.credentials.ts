import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlServeroperationsApi implements ICredentialType {
        name = 'N8nDevAzureSqlServeroperationsApi';

        displayName = 'Azure SQL Serveroperations API';

        icon: Icon = { light: 'file:../nodes/AzureSqlServeroperations/azure-sql-serveroperations.png', dark: 'file:../nodes/AzureSqlServeroperations/azure-sql-serveroperations.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Serveroperations API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
