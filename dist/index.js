/******/ var __webpack_modules__ = ({

/***/ 25:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 538:
/***/ ((module) => {

module.exports = eval("require")("dotenv");


/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = eval("require")("google-auth-library");


/***/ }),

/***/ 10:
/***/ ((module) => {

module.exports = eval("require")("googleapis");


/***/ }),

/***/ 273:
/***/ ((__webpack_module__, __unused_webpack___webpack_exports__, __nccwpck_require__) => {

__nccwpck_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(538);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(25);
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_2__ = __nccwpck_require__(17);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_3__ = __nccwpck_require__(10);

dotenv__WEBPACK_IMPORTED_MODULE_0__.config();



const sheets = googleapis__WEBPACK_IMPORTED_MODULE_3__.google.sheets("v4");

const user = (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.getInput)("GOOGLE_USER_MAIL", {
  required: true,
});
const key = (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.getInput)("GOOGLE_USER_KEY", {
  required: true,
});
const googleAuth = new google_auth_library__WEBPACK_IMPORTED_MODULE_2__.JWT(user, null, key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);
const spreadsheetId = (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.getInput)("SPREADSHEET", {
  required: true,
});
const tableStartCell = (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.getInput)("TABLE_START_CELL") || "A1";
const dataEnvironmentVariableName = (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.getInput)("DATA_ENV_NAME", {
  required: true,
});

const data = process.env[dataEnvironmentVariableName]
  .split("\n")
  .map((dataRow) => dataRow.split(","));

const update = (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.getInput)("UPDATE") || "false";

if (update.toLowerCase() === "true") {
  (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.info)("Updating data...");
  await sheets.spreadsheets.values.update({
    auth: googleAuth,
    spreadsheetId: spreadsheetId,
    range: tableStartCell,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      majorDimension: "ROWS",
      range: tableStartCell,
      values: data,
    },
  });
} else {
  (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.info)("Appending data...");
  await sheets.spreadsheets.values.append({
    auth: googleAuth,
    spreadsheetId: spreadsheetId,
    range: tableStartCell,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      majorDimension: "ROWS",
      range: tableStartCell,
      values: data,
    },
  });
}

(0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.info)("Done.");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && !queue.d) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__nccwpck_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = 1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module used 'module' so it can't be inlined
/******/ var __webpack_exports__ = __nccwpck_require__(273);
/******/ __webpack_exports__ = await __webpack_exports__;
/******/ 
