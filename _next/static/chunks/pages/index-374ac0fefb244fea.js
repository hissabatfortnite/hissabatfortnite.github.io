(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var l,a=(l=r(7294))&&l.__esModule?l:{default:l},s=r(6273),c=r(387),i=r(7190);var d={};function u(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[t+"%"+r+(o?"%"+o:"")]=!0}}var x=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),l=a.default.useMemo((function(){var t=o(s.resolveHref(n,e.href,!0),2),r=t[0],l=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):l||r}}),[n,e.href,e.as]),x=l.href,f=l.as,m=e.children,p=e.replace,g=e.shallow,h=e.scroll,y=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,j=o(i.useIntersection({rootMargin:"200px"}),2),N=j[0],w=j[1],v=a.default.useCallback((function(e){N(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,N]);a.default.useEffect((function(){var e=w&&r&&s.isLocalURL(x),t="undefined"!==typeof y?y:n&&n.locale,o=d[x+"%"+f+(t?"%"+t:"")];e&&!o&&u(n,x,f,{locale:t})}),[f,x,w,y,r,n]);var k={ref:v,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,l,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](r,n,{shallow:l,locale:c,scroll:a}))}(e,n,x,f,p,g,h,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(x)&&u(n,x,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof y?y:n&&n.locale,A=n&&n.isLocaleDomain&&s.getDomainLocale(f,C,n&&n.locales,n&&n.domainLocales);k.href=A||s.addBasePath(s.addLocale(f,C,n&&n.defaultLocale))}return a.default.cloneElement(t,k)};t.default=x},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,i=l.useRef(),d=o(l.useState(!1),2),u=d[0],x=d[1],f=o(l.useState(t?t.current:null),2),m=f[0],p=f[1],g=l.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||u||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,l=n.observer,a=n.elements;return a.set(e,t),l.observe(e),function(){a.delete(e),l.unobserve(e),0===a.size&&(l.disconnect(),c.delete(o))}}(e,(function(e){return e&&x(e)}),{root:m,rootMargin:r}))}),[n,m,r,u]);return l.useEffect((function(){if(!s&&!u){var e=a.requestIdleCallback((function(){return x(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),l.useEffect((function(){t&&p(t.current)}),[t]),[g,u]};var l=r(7294),a=r(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map},3678:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),o=r(9008),l=r(1664),a=(r(3795),r(7294));function s(){var e=(0,a.useState)(""),t=e[0],r=e[1],s=(0,a.useState)(!0),c=s[0],i=s[1],d=(0,a.useState)(!1),u=d[0],x=d[1],f=function(e){r(e.target.parentNode.querySelector("img").getAttribute("src")),i(!1),x(!0)};return(0,n.jsxs)("div",{className:"bg-gray-100 w-full min-h-screen",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"...\u0645\u062a\u062c\u0631 \u0627\u0644\u0634\u0628\u0627\u0628 \u0644\u0628\u064a\u0639 \u062d\u0633\u0627\u0628\u0627\u062a \u0641\u0648\u0631\u062a \u0646\u0627\u064a\u062a - \u062d\u0633\u0627\u0628\u0627\u062a \u0641\u0648\u0631\u062a \u0646\u0627\u064a\u062a \u0645\u062c\u0627\u0646\u064a\u0629\u060c \u0633\u0643\u0646\u0627\u062a \u0646\u0627\u062f\u0631\u0629 \u0648 \u0627\u0644\u0645\u0632\u064a\u062f"}),(0,n.jsx)("meta",{name:"description",content:"...\u0645\u062a\u062c\u0631 \u0627\u0644\u0634\u0628\u0627\u0628 \u0644\u0628\u064a\u0639 \u062d\u0633\u0627\u0628\u0627\u062a \u0641\u0648\u0631\u062a \u0646\u0627\u064a\u062a - \u062d\u0633\u0627\u0628\u0627\u062a \u0641\u0648\u0631\u062a \u0646\u0627\u064a\u062a \u0645\u062c\u0627\u0646\u064a\u0629\u060c \u0633\u0643\u0646\u0627\u062a \u0646\u0627\u062f\u0631\u0629 \u0648 \u0627\u0644\u0645\u0632\u064a\u062f"}),(0,n.jsx)("link",{rel:"icon",href:"/logo.png"})]}),(0,n.jsx)("nav",{className:"w-full bg-gray-600 px-2 py-4 text-center justify-center shadow-lg",children:(0,n.jsx)("img",{src:"https://i.imgur.com/G0Y7C2U.png",className:"lg:w-2/6 mx-auto",alt:""})}),u&&(0,n.jsxs)("div",{className:"w-full px-4 py-4 text-center",children:[(0,n.jsx)("img",{src:t,alt:"",className:"mx-auto lg:w-2/6 rounded-md shadow-md border-2 border-gray-300 mb-3"}),(0,n.jsx)("h1",{className:"text-4xl lg:text-6xl font-bold text-green-500 mb-6",children:"\u0645\u0628\u0631\u0648\u0643"}),(0,n.jsx)("p",{className:"font-bold mb-5",children:"\u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0630\u064a \u0637\u0644\u0628\u062a\u0647 \u0645\u062a\u0627\u062d\u060c \u0623\u0643\u0645\u0644 \u0641\u0642\u0637 \u062e\u0637\u0648\u0629 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0628\u0634\u0631\u064a \u0645\u0646 \u062c\u0648\u062c\u0644 \u0648 \u0633\u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0628 \u0628\u0634\u0643\u0644 \u0623\u0648\u062a\u0648\u0645\u0627\u062a\u064a\u0643\u064a "}),(0,n.jsx)("center",{children:(0,n.jsx)("button",{className:"py-3 px-6 bg-green-500 text-white font-bold rounded-md shadow-md my-3",onClick:function(e){return window.location.href="https://installchecker.com/cl/i/vogrkg"},children:"\u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0628\u0634\u0631\u064a "})})]}),c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{className:"px-5 py-5",children:(0,n.jsx)("img",{src:"https://i.imgur.com/sHdTfJI.jpg",className:"mx-auto rounded shadow-lg",alt:""})}),(0,n.jsxs)("main",{children:[(0,n.jsxs)("section",{className:"px-5",children:[(0,n.jsx)("hr",{className:"w-5/6 mx-auto h2 border-gray-200"}),(0,n.jsx)("h1",{className:"text-center text-2xl mt-2 font-bold text-gray-800 lg:text-6xl",children:"\u0646\u0648\u0627\u062f\u0631 \u0641\u0648\u0631\u062a\u0646\u0627\u064a\u062a "}),(0,n.jsxs)("div",{className:"grid grid-cols-2 lg:grid-cols-4 cursor-pointer lg:px-40 gap-3 my-5",children:[(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/KGSwwAZ.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0633\u0643\u0646 \u0627\u0644\u062c\u0644\u0627\u0643\u0633\u064a + \u0628\u0646\u062a \u0627\u0644\u0632\u0648\u0645\u0628\u064a + \u0631\u0642\u0635\u0627\u062a + 130 \u0633\u0643\u0646 "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/IlQqlnY.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0633\u0643\u0646 \u0634\u064a\u0637\u0648\u0646 + \u0641\u064a \u0628\u0648\u0643\u0633 + \u0631\u0642\u0635\u0627\u062a + 240 \u0633\u0643\u0646 "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/VND6f5W.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0633\u0643\u0646 \u0633\u0643\u0644\u062a\u0648\u0646 + \u0641\u064a \u0628\u0648\u0643\u0633 + \u0631\u0642\u0635\u0627\u062a + 210 \u0633\u0643\u0646 "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/LBmTnnc.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0633\u0643\u0646 \u0628\u0646\u062a \u0627\u0644\u0637\u064a\u0627\u0631\u0629 + \u0641\u064a \u0628\u0648\u0643\u0633 + \u0631\u0642\u0635\u0627\u062a + 330 \u0633\u0643\u0646 "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]})]})]}),(0,n.jsxs)("section",{className:"px-5",children:[(0,n.jsx)("hr",{className:"w-5/6 mx-auto h2 border-gray-200"}),(0,n.jsx)("h1",{className:"text-center text-2xl mt-2 font-bold text-gray-800 lg:text-6xl",children:"\u062d\u0633\u0627\u0628\u0627\u062a \u0639\u0634\u0648\u0627\u0626\u064a\u0629 "}),(0,n.jsxs)("div",{className:"grid grid-cols-2 lg:grid-cols-4 cursor-pointer lg:px-40 gap-3 my-5",children:[(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/lDGZ3wo.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0639\u062f\u062f \u0639\u0634\u0648\u0627\u0626\u064a \u0645\u0646 \u0627\u0644\u0633\u0643\u0646\u0627\u062a "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/iSNsOU5.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0639\u062f\u062f \u0639\u0634\u0648\u0627\u0626\u064a \u0645\u0646 \u0627\u0644\u0633\u0643\u0646\u0627\u062a "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/uAhLBH8.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0639\u062f\u062f \u0639\u0634\u0648\u0627\u0626\u064a \u0645\u0646 \u0627\u0644\u0633\u0643\u0646\u0627\u062a "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/LAeLvAr.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u0639\u062f\u062f \u0639\u0634\u0648\u0627\u0626\u064a \u0645\u0646 \u0627\u0644\u0633\u0643\u0646\u0627\u062a "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/6lFO5AW.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u062d\u0633\u0627\u0628 \u0641\u064a\u0647 \u0641\u064a \u0628\u0648\u0643\u0633 "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]}),(0,n.jsxs)("article",{className:"w-full border-gray-300 border-2 rounded-md shadow-md",children:[(0,n.jsx)("img",{src:"https://i.imgur.com/OdzbIYk.jpg",alt:""}),(0,n.jsx)("p",{className:"py-3 px-2 text-center text-gray-700 font-bold",children:"\u062d\u0633\u0627\u0628 \u0641\u064a\u0647 \u0641\u064a \u0628\u0648\u0643\u0633 "}),(0,n.jsx)("p",{className:"px-2 text-center text-gray-400 font-bold",children:"\u0627\u0644\u0633\u0639\u0631 : 0 \u062f\u0648\u0644\u0627\u0631 (\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629)"}),(0,n.jsx)("button",{onClick:function(e){return f(e)},className:"mx-2 rounded-lg shadow-md font-bold my-3 text-center text-gray-100 py-2 px-2 bg-green-500",children:"\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0622\u0646 "})]})]})]})]})]}),(0,n.jsxs)("footer",{className:"w-full flex gap-3 bg-gray-400 px-5 mt-4 py-5",children:[(0,n.jsx)(l.default,{href:"/privacy-policy",className:"bg-gray-200 px-4 py-3 rounded",children:"\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629"}),(0,n.jsx)(l.default,{href:"/contact-us",className:"bg-gray-200 px-4 py-3 rounded",children:"\u0625\u062a\u0635\u0644 \u0628\u0646\u0627"})]})]})}},3795:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[354,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);