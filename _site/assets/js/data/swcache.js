const resource = [
    /* --- CSS --- */
    '/assets/css/style.css',

    /* --- PWA --- */
    '/app.js',
    '/sw.js',

    /* --- HTML --- */
    '/index.html',
    '/404.html',

    
        '/shortcv/',
    
        '/research/',
    
        '/publications/',
    
        '/talks/',
    
        '/contact/',
    

    /* --- Favicons & compressed JS --- */
    
    
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4180',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

