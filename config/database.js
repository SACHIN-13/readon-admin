module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', process.env.DB_HOST),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', process.env.DB_PORT),
        database: env('DATABASE_NAME', process.env.DB_NAME),
        username: env('DATABASE_USERNAME', process.env.DB_USER),
        password: env('DATABASE_PASSWORD', process.env.DB_PASS), // to be changed
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
