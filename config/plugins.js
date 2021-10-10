module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID', process.env.XAWS_ACCESS_KEY_ID),
        secretAccessKey: env('AWS_ACCESS_SECRET', process.env.XAWS_ACCESS_SECRET),
        region: env('AWS_REGION', process.env.XAWS_REGION),
        params: {
          Bucket: env('AWS_BUCKET_NAME', process.env.XAWS_BUCKET_NAME),
        },
      },
    },
    email: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_ACCESS_KEY_ID', process.env.XAWS_ACCESS_KEY_ID),
        secret: env('AWS_SECRET_ACCESS_KEY', process.env.XAWS_ACCESS_SECRET),
        amazon: `https://email.${env('AWS_REGION', process.env.XAWS_REGION)}.amazonaws.com`
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM', 'team@readon.in'),
        defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', 'team@readon.in')
      }
    },
  });
   