import { defineConfig } from '@oa2ts/cli/config';
import reactQueryPlugin from '@oa2ts/plugin-react-query';
import fetchPlugin from '@oa2ts/plugin-fetch';

export default defineConfig({
	plugins: [reactQueryPlugin({}), fetchPlugin()],
	services: {
		'petstore-swagger': {
			output: './output/petstore-swagger',
			url: 'https://petstore.swagger.io/v2/swagger.json',
		},
		'petstore-openapi-v3.0': {
			output: './output/petstore-openapi-v3.0',
			file: './schemas/petstore-v3.yaml',
		},
		github: {
			output: './output/github',
			file: './schemas/github.yaml',
		},
	},
});
