'use strict';

var jwt = require("jsonwebtoken");
var apiConfig = require('../api-config');

exports.handleAuthorization = function (req, res, next) {

    const token = extractToken(req)
    if (!token) {
        res.setHeader('WWW-Athenticate', 'Bearer token_type="JWT"');
        res.status(401).json({ message: 'You need to authenticate' });
    } else {
        jwt.verify(token, apiConfig.secret, (error, decoded) => {
            if (decoded) {
                next();
            } else {
                res.status(403).json({ message: 'Not allowed.' });
            }
        })
    }
}

function extractToken(request) {
    let token = undefined;

    if (request.headers && request.headers.authorization) {
        //Authorization: Bearer ZZZ.ZZZ.ZZZ
        const parts = request.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }

    return token;
}