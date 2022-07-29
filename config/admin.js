module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b189b4410199cd3559fa408e0c52137'),
  },
});
