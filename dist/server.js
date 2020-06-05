/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config/development.ts":
/*!******************************************!*\
  !*** ./src/server/config/development.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\nvar envFound = dotenv.config();\r\nif (!envFound) {\r\n    throw new Error(\"Can't find .env!\");\r\n}\r\nexports.default = {\r\n    mysql: {\r\n        host: process.env.DB_HOST,\r\n        user: process.env.DB_USER,\r\n        password: process.env.DB_PASS,\r\n        database: process.env.DB_SCHEMA,\r\n    },\r\n    port: parseInt(process.env.PORT, 10),\r\n    auth: {\r\n        secret: process.env.SECRET,\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/config/development.ts?");

/***/ }),

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = __webpack_require__(/*! ./development */ \"./src/server/config/development.ts\").default;\r\n\n\n//# sourceURL=webpack:///./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/models/index.ts":
/*!***************************************!*\
  !*** ./src/server/db/models/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\r\nvar activities_1 = __webpack_require__(/*! ../queries/activities */ \"./src/server/db/queries/activities.ts\");\r\nvar users_1 = __webpack_require__(/*! ../queries/users */ \"./src/server/db/queries/users.ts\");\r\nvar members_1 = __webpack_require__(/*! ../queries/members */ \"./src/server/db/queries/members.ts\");\r\nvar tokens_1 = __webpack_require__(/*! ../queries/tokens */ \"./src/server/db/queries/tokens.ts\");\r\nexports.Connection = mysql.createPool(config_1.default.mysql);\r\nexports.Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        exports.Connection.query(query, values, function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.default = { Activities: activities_1.default, Members: members_1.default, Users: users_1.default, Tokens: tokens_1.default };\r\n\n\n//# sourceURL=webpack:///./src/server/db/models/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/activities.ts":
/*!*********************************************!*\
  !*** ./src/server/db/queries/activities.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../models/index */ \"./src/server/db/models/index.ts\");\r\n// Returns all activities\r\nexports.all = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"SELECT a.id, a.userid, u.firstname, u.lastname, a.type, a.title, a.desciption, a.hrs, a.min, a.sec, a.distance, a._created as date FROM activity a JOIN users u ON u.id = a.userid ORDER BY a._created DESC\")];\r\n    });\r\n}); };\r\n// Returns one activity based on activity id\r\nexports.one = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"SELECT a.id, a.userid, u.firstname, u.lastname, a.type, a.title, a.desciption, a.hrs, a.min, a.sec, a.distance, a._created as date FROM activity a JOIN users u ON u.id = a.userid WHERE a.id = ?\", [id])];\r\n    });\r\n}); };\r\n// Inserts one activity and returns id\r\nexports.add = function (activity) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"INSERT INTO activity SET ?\", [activity])];\r\n    });\r\n}); };\r\n// Updates one activity and returns number of rows affected in db\r\nexports.update = function (id, activity) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"UPDATE activity SET ? WHERE id = ?\", [activity, id])];\r\n    });\r\n}); };\r\n// Deletes one activity and returns number of rows affected in db\r\nexports.remove = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"DELETE FROM activity WHERE id = ?\", [id])];\r\n    });\r\n}); };\r\n// Returns user activities\r\nexports.allByUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"CALL spGetUser(?)\", [id])];\r\n    });\r\n}); };\r\n// Returns all activities from members that the user follows\r\nexports.followedActivities = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"CALL spUserFollows(?)\", [id])];\r\n    });\r\n}); };\r\nexports.default = {\r\n    all: exports.all,\r\n    one: exports.one,\r\n    add: exports.add,\r\n    update: exports.update,\r\n    remove: exports.remove,\r\n    allByUser: exports.allByUser,\r\n    followedActivities: exports.followedActivities,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/activities.ts?");

/***/ }),

/***/ "./src/server/db/queries/members.ts":
/*!******************************************!*\
  !*** ./src/server/db/queries/members.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\n// Returns user info\r\nexports.getUserDetails = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, models_1.Query(\"CALL spUserDetails(?)\", [id])];\r\n    });\r\n}); };\r\n// Returns all members not followed by user\r\nexports.getSuggestedUsers = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, models_1.Query(\"CALL spSuggestedUsers(?)\", [id])];\r\n    });\r\n}); };\r\n// Adds an object to the social table\r\nexports.addUser = function (body) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, models_1.Query(\"INSERT INTO social SET ?\", [body])];\r\n    });\r\n}); };\r\n// Removes an object from the social table\r\nexports.removeUser = function (body) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, models_1.Query(\"DELETE from social WHERE userid = ? AND following_userid = ?\", [\r\n                body.userid,\r\n                body.following_userid,\r\n            ])];\r\n    });\r\n}); };\r\n// Returns all members that a user follows\r\nexports.followedUsers = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, models_1.Query(\"SELECT u.id FROM users u JOIN social s ON s.following_userid = u.id WHERE s.userid = ?\", [id])];\r\n    });\r\n}); };\r\n// Returns a search results for users\r\nexports.searchResults = function (name) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, models_1.Query(\"SELECT u.id, u.firstname, u.lastname FROM users u WHERE u.firstname LIKE ? OR u.lastname LIKE ?\", [\"%\" + name + \"%\", \"%\" + name + \"%\"])];\r\n    });\r\n}); };\r\nexports.default = {\r\n    getUserDetails: exports.getUserDetails,\r\n    getSuggestedUsers: exports.getSuggestedUsers,\r\n    addUser: exports.addUser,\r\n    removeUser: exports.removeUser,\r\n    followedUsers: exports.followedUsers,\r\n    searchResults: exports.searchResults,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/members.ts?");

/***/ }),

/***/ "./src/server/db/queries/tokens.ts":
/*!*****************************************!*\
  !*** ./src/server/db/queries/tokens.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\nexports.findOne = function (token, id) {\r\n    return new Promise(function (resolve, reject) {\r\n        models_1.Connection.query(\"SELECT * FROM accesstokens WHERE token = ? AND id = ? LIMIT 1\", [token, id], function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.insert = function (userid) {\r\n    return new Promise(function (resolve, reject) {\r\n        models_1.Connection.query(\"INSERT INTO accesstokens SET userid = ?\", userid, function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.update = function (id, token) {\r\n    return new Promise(function (resolve, reject) {\r\n        models_1.Connection.query(\"UPDATE accesstokens SET token = ? WHERE id = ?\", [token, id], function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.default = {\r\n    findOne: exports.findOne,\r\n    insert: exports.insert,\r\n    update: exports.update,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/tokens.ts?");

/***/ }),

/***/ "./src/server/db/queries/users.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/users.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\nexports.findOneById = function (id) {\r\n    return new Promise(function (resolve, reject) {\r\n        models_1.Connection.query(\"SELECT * FROM users WHERE id = ? LIMIT 1\", id, function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.findOneByEmail = function (email) {\r\n    return new Promise(function (resolve, reject) {\r\n        models_1.Connection.query(\"SELECT * FROM users WHERE email = ? LIMIT 1\", email, function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.insert = function (user) {\r\n    return new Promise(function (resolve, reject) {\r\n        models_1.Connection.query(\"INSERT INTO users SET ?\", [user], function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.default = {\r\n    findOneById: exports.findOneById,\r\n    findOneByEmail: exports.findOneByEmail,\r\n    insert: exports.insert,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/users.ts?");

/***/ }),

/***/ "./src/server/middleware/bearerstrategy.ts":
/*!*************************************************!*\
  !*** ./src/server/middleware/bearerstrategy.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar BearerStrategy = __webpack_require__(/*! passport-http-bearer */ \"passport-http-bearer\");\r\nvar models_1 = __webpack_require__(/*! ../db/models */ \"./src/server/db/models/index.ts\");\r\nvar tokens_1 = __webpack_require__(/*! ../utils/security/tokens */ \"./src/server/utils/security/tokens.ts\");\r\npassport.use(new BearerStrategy.Strategy(function (token, done) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var payload, user, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, tokens_1.ValidToken(token)];\r\n            case 1:\r\n                payload = _a.sent();\r\n                return [4 /*yield*/, models_1.default.Users.findOneById(payload.userid)];\r\n            case 2:\r\n                user = (_a.sent())[0];\r\n                if (user) {\r\n                    done(null, user);\r\n                }\r\n                else {\r\n                    done(null, false);\r\n                }\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                done(e_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); }));\r\n\n\n//# sourceURL=webpack:///./src/server/middleware/bearerstrategy.ts?");

/***/ }),

/***/ "./src/server/middleware/localstrategy.ts":
/*!************************************************!*\
  !*** ./src/server/middleware/localstrategy.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\");\r\nvar passwords_1 = __webpack_require__(/*! ../utils/security/passwords */ \"./src/server/utils/security/passwords.ts\");\r\nvar models_1 = __webpack_require__(/*! ../db/models */ \"./src/server/db/models/index.ts\");\r\npassport.serializeUser(function (user, done) { return done(null, user); });\r\npassport.deserializeUser(function (user, done) { return done(null, user); });\r\npassport.use(new LocalStrategy.Strategy({ usernameField: \"email\", session: false }, function (email, password, done) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, models_1.default.Users.findOneByEmail(email)];\r\n            case 1:\r\n                user = (_a.sent())[0];\r\n                if (user && passwords_1.comparePassword(password, user.password)) {\r\n                    done(null, user);\r\n                }\r\n                else {\r\n                    done(null, false);\r\n                }\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                done(e_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); }));\r\n\n\n//# sourceURL=webpack:///./src/server/middleware/localstrategy.ts?");

/***/ }),

/***/ "./src/server/routes/api/activities.ts":
/*!*********************************************!*\
  !*** ./src/server/routes/api/activities.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar models_1 = __webpack_require__(/*! ../../db/models */ \"./src/server/db/models/index.ts\");\r\nvar router = express.Router();\r\nvar isLoggedIn = function (req, res, next) {\r\n    if (!req.user || req.user.role !== \"guest\") {\r\n        console.log(\"req.user.role: \" + req.user.role);\r\n        return res.sendStatus(401);\r\n    }\r\n    else {\r\n        return next();\r\n    }\r\n};\r\n// Returns an array of all activities or one activity by id\r\nrouter.get(\"/:id?\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, activity, e_1, activities, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = Number(req.params.id);\r\n                if (!id) return [3 /*break*/, 5];\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, models_1.default.Activities.one(id)];\r\n            case 2:\r\n                activity = (_a.sent())[0];\r\n                res.json(activity);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                next(e_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [3 /*break*/, 8];\r\n            case 5:\r\n                _a.trys.push([5, 7, , 8]);\r\n                return [4 /*yield*/, models_1.default.Activities.all()];\r\n            case 6:\r\n                activities = _a.sent();\r\n                res.json(activities);\r\n                return [3 /*break*/, 8];\r\n            case 7:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                next(e_2);\r\n                return [3 /*break*/, 8];\r\n            case 8: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// Returns an array of activities associated with a userid\r\nrouter.get(\"/byUser/:id\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, activities, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = Number(req.params.id);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, models_1.default.Activities.allByUser(id)];\r\n            case 2:\r\n                activities = _a.sent();\r\n                res.json(activities.reverse());\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_3 = _a.sent();\r\n                console.log(e_3);\r\n                next(e_3);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// Inserts activity\r\nrouter.post(\"/\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var activityDTO, details, e_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                activityDTO = req.body;\r\n                return [4 /*yield*/, models_1.default.Activities.add(activityDTO)];\r\n            case 1:\r\n                details = _a.sent();\r\n                res.json({ details: details, msg: \"Activity inserted.\" });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_4 = _a.sent();\r\n                console.log(e_4);\r\n                next(e_4);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// Updates activity by id\r\nrouter.put(\"/:id\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, activityDTO, details, e_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = Number(req.params.id);\r\n                activityDTO = req.body;\r\n                return [4 /*yield*/, models_1.default.Activities.update(id, activityDTO)];\r\n            case 1:\r\n                details = _a.sent();\r\n                res.json({ details: details, msg: \"Activity updated.\" });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_5 = _a.sent();\r\n                console.log(e_5);\r\n                next(e_5);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// Deletes activity by id\r\nrouter.delete(\"/:id\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, details, e_6;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = Number(req.params.id);\r\n                return [4 /*yield*/, models_1.default.Activities.remove(id)];\r\n            case 1:\r\n                details = _a.sent();\r\n                res.json({ details: details, msg: \"Activity deleted.\" });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_6 = _a.sent();\r\n                console.log(e_6);\r\n                next(e_6);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/user/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, activities, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = Number(req.params.id);\r\n                return [4 /*yield*/, models_1.default.Activities.allByUser(id)];\r\n            case 1:\r\n                activities = (_a.sent())[0];\r\n                res.json(activities.reverse());\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                next(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/userFollows/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, activities, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = Number(req.params.id);\r\n                return [4 /*yield*/, models_1.default.Activities.followedActivities(id)];\r\n            case 1:\r\n                activities = (_a.sent())[0];\r\n                res.json(activities);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                next(err_2);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/activities.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar activities_1 = __webpack_require__(/*! ./activities */ \"./src/server/routes/api/activities.ts\");\r\nvar members_1 = __webpack_require__(/*! ./members */ \"./src/server/routes/api/members.ts\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar router = express.Router();\r\nrouter.use(function (req, res, next) {\r\n    passport.authenticate(\"bearer\", { session: false }, function (err, user, info) {\r\n        if (user)\r\n            req.user = user;\r\n        return next();\r\n    })(req, res, next);\r\n});\r\nrouter.use(\"/activities\", activities_1.default);\r\nrouter.use(\"/members\", members_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/members.ts":
/*!******************************************!*\
  !*** ./src/server/routes/api/members.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar models_1 = __webpack_require__(/*! ../../db/models */ \"./src/server/db/models/index.ts\");\r\nvar router = express.Router();\r\nvar isLoggedIn = function (req, res, next) {\r\n    if (!req.user || req.user.role !== \"guest\") {\r\n        console.log(\"req.user.role: \" + req.user.role);\r\n        return res.sendStatus(401);\r\n    }\r\n    else {\r\n        return next();\r\n    }\r\n};\r\nrouter.get(\"/user_details/:id\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, user, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = Number(req.params.id);\r\n                return [4 /*yield*/, models_1.default.Members.getUserDetails(id)];\r\n            case 1:\r\n                user = (_a.sent())[0];\r\n                res.json(user);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                next(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/following/:id\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, users, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = Number(req.params.id);\r\n                return [4 /*yield*/, models_1.default.Members.followedUsers(id)];\r\n            case 1:\r\n                users = _a.sent();\r\n                res.json(users);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                next(err_2);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/suggestedUsers/:id\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, users, err_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = Number(req.params.id);\r\n                return [4 /*yield*/, models_1.default.Members.getSuggestedUsers(id)];\r\n            case 1:\r\n                users = (_a.sent())[0];\r\n                res.json(users);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_3 = _a.sent();\r\n                console.log(err_3);\r\n                next(err_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/search/:id\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var name, users, err_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                name = req.params.id;\r\n                return [4 /*yield*/, models_1.default.Members.searchResults(name)];\r\n            case 1:\r\n                users = _a.sent();\r\n                res.json(users);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_4 = _a.sent();\r\n                console.log(err_4);\r\n                next(err_4);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post(\"/followUser\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var body, insertId, err_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                body = req.body;\r\n                return [4 /*yield*/, models_1.default.Members.addUser(body)];\r\n            case 1:\r\n                insertId = (_a.sent()).insertId;\r\n                res.json({ insertId: insertId });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_5 = _a.sent();\r\n                console.log(err_5);\r\n                next(err_5);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete(\"/unfollowUser\", isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var body, affectedRows, err_6;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                body = req.body;\r\n                return [4 /*yield*/, models_1.default.Members.removeUser(body)];\r\n            case 1:\r\n                affectedRows = (_a.sent()).affectedRows;\r\n                res.json({ affectedRows: affectedRows });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_6 = _a.sent();\r\n                console.log(err_6);\r\n                next(err_6);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/members.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar login_1 = __webpack_require__(/*! ./login */ \"./src/server/routes/auth/login.ts\");\r\nvar register_1 = __webpack_require__(/*! ./register */ \"./src/server/routes/auth/register.ts\");\r\nvar router = express.Router();\r\nrouter.use(\"/login\", login_1.default);\r\nrouter.use(\"/register\", register_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/login.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/login.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/security/tokens */ \"./src/server/utils/security/tokens.ts\");\r\nvar router = express.Router();\r\nrouter.post(\"/\", passport.authenticate(\"local\"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var token, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, tokens_1.CreateToken({ userid: req.user.id })];\r\n            case 1:\r\n                token = _a.sent();\r\n                res.json({\r\n                    token: token,\r\n                    role: req.user.role,\r\n                    userid: req.user.id,\r\n                });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                next(e_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/login.ts?");

/***/ }),

/***/ "./src/server/routes/auth/register.ts":
/*!********************************************!*\
  !*** ./src/server/routes/auth/register.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar models_1 = __webpack_require__(/*! ../../db/models */ \"./src/server/db/models/index.ts\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/security/tokens */ \"./src/server/utils/security/tokens.ts\");\r\nvar passwords_1 = __webpack_require__(/*! ../../utils/security/passwords */ \"./src/server/utils/security/passwords.ts\");\r\nvar router = express.Router();\r\nrouter.post(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, result, token, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                user = req.body;\r\n                user.password = passwords_1.hashPassword(req.body.password);\r\n                return [4 /*yield*/, models_1.default.Users.insert(user)];\r\n            case 1:\r\n                result = _a.sent();\r\n                return [4 /*yield*/, tokens_1.CreateToken({ userid: result.insertId })];\r\n            case 2:\r\n                token = _a.sent();\r\n                res.json({\r\n                    token: token,\r\n                    role: \"guest\",\r\n                    userid: result.insertId,\r\n                });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                next(e_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/register.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\r\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\r\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\r\nvar router = express.Router();\r\nrouter.use(morgan(\"dev\"));\r\nrouter.use(\"/auth\", auth_1.default);\r\nrouter.use(\"/api\", api_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/server/config/index.ts\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\r\nvar compression = __webpack_require__(/*! compression */ \"compression\");\r\n__webpack_require__(/*! ./middleware/bearerstrategy */ \"./src/server/middleware/bearerstrategy.ts\");\r\n__webpack_require__(/*! ./middleware/localstrategy */ \"./src/server/middleware/localstrategy.ts\");\r\nvar app = express();\r\napp.use(helmet());\r\napp.use(compression());\r\napp.use(cors());\r\napp.use(express.static(\"public\"));\r\napp.use(passport.initialize());\r\napp.use(express.json());\r\napp.use(routes_1.default);\r\napp.use(function (err, req, res, next) {\r\n    res.status(err.status || 500);\r\n    res.json({ errors: { err: err.message } });\r\n});\r\napp.get(\"*\", function (req, res) {\r\n    return res.sendFile(path.join(__dirname, \"../public/index.html\"));\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () {\r\n    return console.log(\"Server listening on port: \" + config_1.default.port);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/security/passwords.ts":
/*!************************************************!*\
  !*** ./src/server/utils/security/passwords.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nexports.hashPassword = function (password) {\r\n    var salt = bcrypt.genSaltSync(10);\r\n    var hash = bcrypt.hashSync(password, salt);\r\n    return hash;\r\n};\r\nexports.comparePassword = function (password, hash) {\r\n    return bcrypt.compareSync(password, hash);\r\n};\r\nexports.default = {\r\n    hashPassword: exports.hashPassword,\r\n    comparePassword: exports.comparePassword,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/utils/security/passwords.ts?");

/***/ }),

/***/ "./src/server/utils/security/tokens.ts":
/*!*********************************************!*\
  !*** ./src/server/utils/security/tokens.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar models_1 = __webpack_require__(/*! ../../db/models */ \"./src/server/db/models/index.ts\");\r\nexports.CreateToken = function (payload) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var tokenid, token;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, models_1.default.Tokens.insert(payload.userid)];\r\n            case 1:\r\n                tokenid = _a.sent();\r\n                payload.accesstokenid = tokenid.insertId;\r\n                payload.unique = crypto.randomBytes(32).toString(\"hex\");\r\n                return [4 /*yield*/, jwt.sign(payload, process.env.SECRET)];\r\n            case 2:\r\n                token = _a.sent();\r\n                return [4 /*yield*/, models_1.default.Tokens.update(payload.accesstokenid, token)];\r\n            case 3:\r\n                _a.sent();\r\n                return [2 /*return*/, token];\r\n        }\r\n    });\r\n}); };\r\nexports.ValidToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var payload, accesstokenid;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                payload = jwt.decode(token);\r\n                return [4 /*yield*/, models_1.default.Tokens.findOne(token, payload.accesstokenid)];\r\n            case 1:\r\n                accesstokenid = (_a.sent())[0];\r\n                if (!accesstokenid) {\r\n                    throw new Error(\"Invalid Token!\");\r\n                }\r\n                else {\r\n                    return [2 /*return*/, payload];\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.default = {\r\n    CreateToken: exports.CreateToken,\r\n    ValidToken: exports.ValidToken,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/utils/security/tokens.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-http-bearer":
/*!***************************************!*\
  !*** external "passport-http-bearer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-http-bearer\");\n\n//# sourceURL=webpack:///external_%22passport-http-bearer%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });