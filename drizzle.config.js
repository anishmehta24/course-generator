/** @type { import("drizzle-kit").Config } */

export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://accounts:jvsfHIe5hpi3@ep-solitary-cloud-a5uhtsbf.us-east-2.aws.neon.tech/Course?sslmode=require",

    }
  };