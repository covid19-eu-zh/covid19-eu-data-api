// load up our shiny new route for users
const userRoutes = require('./country');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send({
            welcome:'Welcome to covid19-eu-data-api',
            endpoints: [
                {
                    path: '/country',
                    description: 'List all available countries'
                },
                {
                    path: '/country/:alpha2',
                    description: 'query data by country using alpha 2 code (de, it, us, ...)'
                }
            ]
        });
    });

    userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;