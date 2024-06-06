const encodedDBPassword = encodeURIComponent(process.env.DB_PWD || '');

export default {
    env: process.env.ENV,
    port: process.env.PORT,
    
    mongoUrl: `mongodb://${process.env.DB_USER}:${encodedDBPassword}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
};
