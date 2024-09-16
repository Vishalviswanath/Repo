import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_ENDPOINT)
  .setProject(import.meta.VITE_PROJECT_ID);

const databases = new Databases(client);

export { client, databases };
