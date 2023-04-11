"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./styles.scss'));
});
var style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = "./styles.css";
document.head.appendChild(style);
var a1 = document.createElement("a");
var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var ul1 = document.createElement("ul");
var ul2 = document.createElement("ul");
var ul3 = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var a2 = document.createElement("a");
var a3 = document.createElement("a");
var a4 = document.createElement("a");
a1.textContent = "Labs";
a1.setAttribute("href", "../../index.nginx-debian.html");
h1.textContent = "Lab 7 Alejandro Martinez 21430";
a2.textContent = "Popular Books";
a2.setAttribute("href", "./pages/popular.html");
a3.textContent = "New Releases";
a3.setAttribute("href", "./pages/newreleases.html");
a4.textContent = "Story";
a4.setAttribute("href", "./pages/story.html");
h2.appendChild(ul1);
h2.appendChild(ul2);
h2.appendChild(ul3);
ul1.appendChild(li1);
ul2.appendChild(li2);
ul3.appendChild(li3);
li1.appendChild(a2);
li2.appendChild(a3);
li3.appendChild(a4);
document.body.appendChild(a1);
document.body.appendChild(h1);
document.body.appendChild(h2);
var bg = document.createElement("div");
bg.setAttribute("class", "gradient");
document.body.appendChild(bg);
