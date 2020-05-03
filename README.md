# covid19-eu-data-api

## Structure of the Project

1. GitHub Actions pulls data from the raw data repo (`covid19-eu-zh/covid19-eu-data`) and saves a copy in `dataset`.
2. GitHub Actions transformed the data into clean json files and save them in `api/db/`.
3. The code in `api` folder serves the API.

## Development

The API source code is located inside the `api` folder.
There are two ways to access access the api.

1. Start up a local server
1. Serverless Functions 


### Local server

0. `cd server`
1. `yarn`
2. `yarn start`
3. Validate the results: `http://localhost:3001`

There are 2 endpoints available.

#### List all countries

```
/country
```

#### Get data from specific country

```
// alpha2 ex: at, fr, de... etc 
countries/:alpha2
```

### Serverless functions
The API is hosted on [Vercel.com](https://vercel.com/covid19-eu-zh/covid19-eu-data-api).
The 2 endpoints available are:

#### List all countries and their corresponding alpha

```
https://covid19-eu-data-api-gamma.now.sh/api/countryLookup
```

#### Get data from specific country

```
// alpha2 ex: at, fr, de... etc 
https://covid19-eu-data-api-gamma.now.sh/api/countries?alpha2=de
```
