// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => {
	if (env('NODE_ENV') === 'development') {
		return {
			defaultConnection: 'default',
			connections: {
				default: {
					connector: 'bookshelf',
					settings: {
						client: 'sqlite',
						filename: env('DATABASE_FILENAME', '.tmp/data.db')
					},
					options: {
						useNullAsDefault: true
					}
				}
			}
		};
	} else {
		return {
			defaultConnection: 'default',
			connections: {
				default: {
					connector: 'bookshelf',
					settings: {
						client: 'postgres',
						host: env('DATABASE_HOST', '127.0.0.1'),
						port: env('DATABASE_PORT', 5432),
						database: env('DATABASE_NAME', 'strapi'),
						username: env('DATABASE_USERNAME', ''),
						password: env('DATABASE_PASSWORD', '')
					},
					options: {
						ssl: false
					}
				}
			}
		};
	}
};
