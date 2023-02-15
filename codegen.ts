import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://uncwjombmjfpeoigszsb.supabase.co/graphql/v1?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuY3dqb21ibWpmcGVvaWdzenNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MDkyNjYsImV4cCI6MTk4OTA4NTI2Nn0.Dd4CtPhHFEpJ2RIvgdVLDvMFx9wdY0enMK6KkTmYwnY",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
      plugins: [],
    },
  },
};

export default config;
