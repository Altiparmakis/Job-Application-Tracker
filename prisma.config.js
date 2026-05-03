const { defineConfig, env } = require("prisma/config");

require("dotenv").config({ path: ".env.local" });

module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
