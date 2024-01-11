const path = require('path');

module.exports = ({ env }) => ({
     connection: {
      client : "postgres",
      connection: {
        host: env('DATABASE_HOST', 'db.achzrgpkvkkwdtzswhjp.supabase.co'),
        port: env('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '9d+V!Fjz5*@TB$N'),
        ssl: env.bool('DATABASE_SSL', false) 
         },
        useNullAsDefault: true
      }
     });
