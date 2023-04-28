"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send('not authorized');
}
var router = (0, express_1.Router)();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n      <div>You are logged in</div>\n      <a href=\"/logout\">Log out</a>\n    </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <div>You are not logged in</div>\n      <a href=\"/login\">Log in</a>\n    </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send("\n    <div>\n      <h1>Welcome to protected Route</h1>\n      \n    </div>\n    ");
});
