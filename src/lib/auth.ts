import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoUrl = process.env.BETTER_AUTH_MONGODB_URL;

if (!mongoUrl) {
    throw new Error("BETTER_AUTH_MONGODB_URL is not defined");
}

const client = new MongoClient(mongoUrl);
const db = client.db('bazar_dor');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENDTID as string,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENDTSECRET as string
        },
        github: {
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENDTID as string,
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENDTSECRET as string
        }
    },
    database: mongodbAdapter(db, {
        client,
    }),
});