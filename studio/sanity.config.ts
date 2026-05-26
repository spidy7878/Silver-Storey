/**
 * Sanity Studio configuration.
 *
 * Steps to use:
 * 1. From the repo root run: npx create-sanity@latest --template clean --output-path ./studio-app
 * 2. Copy the files inside this `studio/` folder into the generated `studio-app/` folder.
 * 3. Replace the generated `sanity.config.ts` with this file.
 * 4. Run `npm install` inside `studio-app/`, then `npm run dev` to start the studio.
 *
 * Alternatively, you can create the project at https://sanity.io/manage and upload
 * these schemas there.
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'silver-storey',
  title: 'Silver Storey CMS',

  // Replace these with your actual project ID and dataset from https://sanity.io/manage
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
