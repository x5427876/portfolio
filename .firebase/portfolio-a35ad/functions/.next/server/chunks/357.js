exports.id = 357;
exports.ids = [357];
exports.modules = {

/***/ 1726:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Playfair_Display_59de9f', '__Playfair_Display_Fallback_59de9f'","fontWeight":400,"fontStyle":"normal"},
	"className": "__className_59de9f"
};


/***/ }),

/***/ 52:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_19bf8f', '__Roboto_Fallback_19bf8f'","fontWeight":400,"fontStyle":"normal"},
	"className": "__className_19bf8f"
};


/***/ }),

/***/ 357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App),
  "roboto": () => (/* reexport */ (_app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_default()))
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Playfair_Display","arguments":[{"weight":"400","subsets":["latin"]}],"variableName":"playfair"}
var _app_tsx_import_Playfair_Display_arguments_weight_400_subsets_latin_variableName_playfair_ = __webpack_require__(1726);
var _app_tsx_import_Playfair_Display_arguments_weight_400_subsets_latin_variableName_playfair_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Playfair_Display_arguments_weight_400_subsets_latin_variableName_playfair_);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Roboto","arguments":[{"weight":"400","subsets":["latin"]}],"variableName":"roboto"}
var _app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_ = __webpack_require__(52);
var _app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar.tsx




const Navbar = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex h-full justify-center items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: `mx-8 font-bold cursor-pointer transition-all ${router.pathname === "/" ? "text-gray-500" : "text-gray-300"}`,
                href: "/",
                children: "Home"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: `mx-8 font-bold cursor-pointer transition-all ${router.pathname === "/about" ? "text-gray-500" : "text-gray-300"}`,
                href: "/about",
                children: "About"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: `mx-8 font-bold cursor-pointer transition-all ${router.pathname === "/projects" ? "text-gray-500" : "text-gray-300"}`,
                href: "/projects",
                children: "Projects"
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(_app_tsx_import_Playfair_Display_arguments_weight_400_subsets_latin_variableName_playfair_default()).className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " h-[80px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
``;



/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;