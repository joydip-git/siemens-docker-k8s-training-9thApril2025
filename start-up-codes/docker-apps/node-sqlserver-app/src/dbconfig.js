const DB_CONFIG = {
    user: 'sa',
    password: 'sqlserver2024',
    server: 'joydip-pc',
    database: 'siemensdb',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        instanceName: 'SQLEXPRESS'
    },
    port: 1433
};
module.exports = DB_CONFIG