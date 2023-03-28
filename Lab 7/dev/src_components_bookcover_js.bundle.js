/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_bookcover_js"],{

/***/ "./src/components/bookcover.js":
/*!*************************************!*\
  !*** ./src/components/bookcover.js ***!
  \*************************************/
/***/ (() => {

eval("﻿class bookcover extends HTMLElement {Image\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t}\r\n\r\n\tget observedAttributes() {\r\n\t\treturn [\"mc-image\", \"mc-title\", \"mc-subtitle\", \"mc-description\", \"mc-link\", \"mc-linkurl\", \"mc-width\", \"mc-height\", \"mc-bg-color\", \"mc-border-color\", \"mc-text-color\", \"mc-link-color\", \"mc-img-height\", \"mc-img-shiftx\", \"mc-img-shifty\"];\r\n\t}\r\n\r\n\tconnectedCallback() {\r\n\t\tthis.render()\r\n\t}\r\n\r\n\trender() {\r\n\t\tconst cardImage = this.getAttribute(\"mc-image\") || \"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg\"\r\n\t\tconst cardTitle = this.getAttribute(\"mc-title\") || \"Title\"\r\n\t\tconst cardSubtitle = this.getAttribute(\"mc-subtitle\") || \"Subtitle\"\r\n\t\tconst cardDesc = this.getAttribute(\"mc-description\") || \"Description\"\r\n\t\tconst link1Text = this.getAttribute(\"mc-link\") || \"Read\"\r\n\t\tconst link1 = this.getAttribute(\"mc-linkurl\") || \"../../index.html\"\r\n\r\n\t\tconst width = this.getAttribute(\"mc-width\") || \"400px\"\r\n\t\tconst height = this.getAttribute(\"mc-height\") || \"600px\"\r\n\t\tconst borderColor = this.getAttribute(\"mc-border-color\") || \"rgb(0,0,0)\"\r\n\t\tconst imgHeight = this.getAttribute(\"mc-img-height\") || \"400px\"\r\n\t\tconst imgShiftX = this.getAttribute(\"mc-img-shiftx\") || \"center\"\r\n\t\tconst imgShiftY = this.getAttribute(\"mc-img-shifty\") || \"top\"\r\n\r\n\t\tconst template = `\r\n\t\t<div style=\"display: inline-block; width: ${width}; height: ${height}; border-style: solid; border-width: 2px; border-radius: 20px; border-color: ${borderColor}; overflow: hidden;\">\r\n\t\t\t<img style=\"width: ${width}; height: ${imgHeight}; object-position: ${imgShiftX} ${imgShiftY}; object-fit: cover;\" src=\"${cardImage}\">\r\n\t\t\t<h1 style=\"margin-left: 20px;\">${cardTitle}</h1>\r\n\t\t\t<h3 style=\"margin-left: 20px;\">${cardSubtitle}</h3>\r\n\t\t\t<p style=\"margin-left: 20px;\">${cardDesc}</p>\r\n\t\t\t<a style=\"margin-left: 20px; color: rgb(250,250,250);\" href=\"${link1}\">${link1Text}</a>\r\n\t\t</div>\r\n\t\t`\r\n\t\tthis.attachShadow({ mode: \"open\" }).innerHTML = template\r\n\t}\r\n\t\r\n\tattributeChangedCallback(name, oldValue, newValue) {\r\n\t\tthis.render()\r\n\t}\r\n}\r\ncustomElements.define(\"my-cover\", bookcover)\n\n//# sourceURL=webpack:///./src/components/bookcover.js?");

/***/ })

}]);