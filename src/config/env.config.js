import "dotenv/config";

const requiredVariables = ["PORT", "NODE_ENV"];

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(
      `Falta configurar la variable de entorno: ${variable}`
    );
  }
}

const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
};

export default config;