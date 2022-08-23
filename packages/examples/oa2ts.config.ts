import { defineConfig } from '@oa2ts/cli/config';
import reactQueryPlugin from '@oa2ts/plugin-react-query';

export default defineConfig({
	plugins: [reactQueryPlugin()],
	services: {
		'petstore-swagger': {
			output: './petstore-swagger',
			url: 'https://petstore.swagger.io/v2/swagger.json',
		},
		'petstore-openapi-v3.0': {
			output: './petstore-openapi-v3.0',
			url: 'https://petstore3.swagger.io/api/v3/openapi.json',
		},
	},
});
