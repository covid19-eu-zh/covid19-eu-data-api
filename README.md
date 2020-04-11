# covid19-eu-data-api

## Structure of the Project

1. GitHub Actions pulls data from the raw data repo (`covid19-eu-zh/covid19-eu-data`) and saves a copy in `dataset`.
2. GitHub Actions transformed the data into clean json files and save them in `api/db/`.
3. The code in `api` folder serves the API.

## Development

The API source code is located inside the `api` folder.

0. `cd api`
1. `yarn`
2. `yarn start`
3. Validate the results: `http://localhost:3001`
