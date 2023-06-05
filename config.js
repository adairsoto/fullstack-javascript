const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
    mongodbUrl: 'mongodb://127.0.0.1:27017',
    dbName: 'test',
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};