// module.exports = ({ env }) => ({
//   // ...
//   upload: {
//     provider: "cloudinary",
//     providerOptions: {
//       cloud_name: env("leonardchiu-cloudinary"),
//       api_key: env("322351532493493"),
//       api_secret: env("x0wBMYXHAAu7UF6hm55M8vPbUVM"),
//     },
//   },
//   // ...
// });

if (process.env.NODE_ENV === "production") {
  module.exports = {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: "${process.env.leonardchiu-cloudinary || ''}",
      api_key: "${process.env.322351532493493 || ''}",
      api_secret: "${process.env.0wBMYXHAAu7UF6hm55M8vPbUVM || ''}",
    },
  };
} else {
  module.exports = {};
}
