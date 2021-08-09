module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', process.env.URL),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9f4ffc3715151caaf53c768e2149b42a'),
    },
  },
});
