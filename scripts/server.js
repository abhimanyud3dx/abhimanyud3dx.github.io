// Simple Express server setup to serve the build output
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
var ghpages = require('gh-pages');

const app = express();
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrcElem: [
                "'self'",
                "'unsafe-inline'",
                '*.googletagmanager.com',
                '*.google-analytics.com'
            ],
            styleSrc: ["'self'", "'unsafe-inline'"],
            connectSrc: ['*.google-analytics.com', 'www.googleapis.com'],
            imgSrc: ["'self'", '*.google-analytics.com']
        }
    })
);
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './dist';


ghpages.publish('dist', (err)=>{ console.log(err);});

app.use(express.static(DIST_DIR));

app.use('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);
