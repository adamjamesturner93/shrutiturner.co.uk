import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './studio/schemas/schema.js',
  outputPath: './src/types/schema.ts',
};

export default config;
