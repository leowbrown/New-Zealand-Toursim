(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less":function(e,n,t){var r=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},"./app/gamma/src/components/popovers/enterprise-menu/index.tsx":function(e,n,t){"use strict";t.r(n);var r=t("./app/gamma/src/modules/state/models/enterprises.ts"),o=t("./node_modules/react-redux/es/index.js"),a=t("./app/gamma/src/selectors/enterprises.ts"),s=t("./app/common/lib/util/i18n/index.ts"),i=t("./node_modules/react/index.js"),c=t.n(i),l=t("./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less"),u=t.n(l),p=t("./app/src/components/PopoverMenu/index.ts");function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=Object(s.forTemplate)("header_enterprise_admin_dashboard_menu"),g=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(s,e);var n,t,r,o,a=(n=s,function(){var e,t=y(n);if(v()){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function s(){return d(this,s),a.apply(this,arguments)}return t=s,(r=[{key:"componentDidMount",value:function(){this.props.fetchEnterprises()}},{key:"render",value:function(){var e=this,n=this.props,t=n.isLoading,r=n.enterprises;return t?c.a.createElement("div",null,h("loading")):0===r.length?c.a.createElement("div",null,h("no-enterprises")):c.a.createElement(p.a,{className:u.a.popoverMenu},r.map((function(n){return c.a.createElement(p.c,{key:"enterprise-".concat(n.id),href:"/e/".concat(n.name,"/admin"),onClick:function(){return e.props.onEnterpriseSelected(n.name)}},n.displayName)})))}}])&&f(t.prototype,r),o&&f(t,o),s}(c.a.Component);n.default=Object(o.c)((function(e){return{isLoading:Object(a.i)(e),enterprises:Object(a.a)(e)}}),(function(e){return{fetchEnterprises(){e(Object(r.b)())}}}))(g)},"./app/src/components/PopoverMenu/PopoverMenu.less":function(e,n,t){var r=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/PopoverMenu/PopoverMenu.less");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},"./app/src/components/PopoverMenu/index.ts":function(e,n,t){"use strict";t.d(n,"a",(function(){return _})),t.d(n,"b",(function(){return g})),t.d(n,"c",(function(){return h}));var r=t("./node_modules/classnames/index.js"),o=t.n(r),a=t("./app/common/lib/util/forward-ref-component.ts"),s=t("./app/common/components/singlespa/router-link.tsx"),i=t("./node_modules/react/index.js"),c=t.n(i),l=t("./app/src/components/PopoverMenu/PopoverMenu.less"),u=t.n(l),p=t("./packages/a11y/index.ts");function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var v=function(e){var n=e.children,t=e.description,r=e.rawDescription,a=e.title,s=e.icon;return c.a.createElement(c.a.Fragment,null,s&&c.a.cloneElement(s,{size:"small"}),c.a.createElement("span",{className:o()(u.a.title,t&&u.a.withoutMargins)},a||n),(t||r)&&c.a.createElement("p",{className:u.a.description},t||r))},y=function(e){var n=e.appendSeparator,t=e.children;return c.a.createElement("li",{className:o()(u.a.item,n&&u.a.withSeparator)},t)},h=function(e){var n=e.appendSeparator,t=e.testId,r=e.href,a=e.target,i=e.className,l=e.onClick,m=b(e,["appendSeparator","testId","href","target","className","onClick"]),h=f(Object(p.a)(),2),g=h[0],_=h[1];return c.a.createElement(y,{appendSeparator:n},c.a.createElement(s.a,d({className:o()(u.a.link,i,g&&u.a.linkFocusRing),href:r,testId:t,onClick:l,target:a},_),c.a.createElement(v,m)))},g=Object(a.a)("PopoverMenuButton",(function(e,n){var t=e.appendSeparator,r=e.onClick,a=e.className,s=e.disabled,i=e.testId,l=b(e,["appendSeparator","onClick","className","disabled","testId"]),m=f(Object(p.a)(),2),h=m[0],g=m[1];return c.a.createElement(y,{appendSeparator:t},c.a.createElement("button",d({className:o()(u.a.link,h&&u.a.linkFocusRing,a),disabled:s,onClick:r,"data-test-id":i,ref:n},g),c.a.createElement(v,l)))})),_=function(e){var n=e.className,t=e.children,r=e.testId;return c.a.createElement("nav",{className:n},c.a.createElement("ul",{"data-test-id":r},t))}},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less":function(e,n,t){(n=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".-lGl2yEhqfdGTe{margin:0 -12px}",""]),n.locals={popoverMenu:"-lGl2yEhqfdGTe"}},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/PopoverMenu/PopoverMenu.less":function(e,n,t){(n=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'._2FCfpANq784raH{background-color:transparent;border:none;background:#fff;border-radius:0;box-shadow:none;color:#172b4d;display:block;height:100%;padding:6px 12px;text-align:left;text-decoration:none;width:100%;transition:none;margin:0;outline:0}._2FCfpANq784raH:hover{background-color:transparent;border:none;box-shadow:none;background:rgba(9,30,66,.04)}._2FCfpANq784raH:active{background-color:transparent;border:none;box-shadow:none;background:#e4f0f6}._2FCfpANq784raH._154-yjtGZB4imr:focus{outline:1px dotted #000}@media screen and (-webkit-min-device-pixel-ratio:0){._2FCfpANq784raH._154-yjtGZB4imr:focus{outline:5px auto -webkit-focus-ring-color}}._2FCfpANq784raH[disabled]:active,._2FCfpANq784raH[disabled]:focus,._2FCfpANq784raH[disabled]:hover{background:transparent;color:#a5adba!important}._2FCfpANq784raH[disabled]:active ._3oK2g02ecSZ4wX svg,._2FCfpANq784raH[disabled]:focus ._3oK2g02ecSZ4wX svg,._2FCfpANq784raH[disabled]:hover ._3oK2g02ecSZ4wX svg{color:#a5adba!important}._2FCfpANq784raH[disabled]:active span[name=check],._2FCfpANq784raH[disabled]:focus span[name=check],._2FCfpANq784raH[disabled]:hover span[name=check]{color:#6b778c!important}._2FCfpANq784raH[disabled]:active .Puvhv7-oGbJGmR,._2FCfpANq784raH[disabled]:focus .Puvhv7-oGbJGmR,._2FCfpANq784raH[disabled]:hover .Puvhv7-oGbJGmR{color:#a5adba!important}.lcLi2SyiMFND91{font-size:14px;font-weight:400;line-height:20px}.lcLi2SyiMFND91._27ZbL25GrWr6E2{margin:0}.Puvhv7-oGbJGmR{color:#5e6c84;font-size:12px;font-weight:400;line-height:16px;margin:4px 0 0;padding:0}._1IJ3BWdWDb2xH2:after{background-color:rgba(9,30,66,.13);content:" ";display:block;height:1px;margin:8px auto;width:calc(100% - 20px)}',""]),n.locals={link:"_2FCfpANq784raH",linkFocusRing:"_154-yjtGZB4imr",icon:"_3oK2g02ecSZ4wX",description:"Puvhv7-oGbJGmR",title:"lcLi2SyiMFND91",withoutMargins:"_27ZbL25GrWr6E2",withSeparator:"_1IJ3BWdWDb2xH2"}},"./packages/a11y/index.ts":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("./node_modules/react/index.js");function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(r.useState)(!1),t=o(n,2),a=t[0],s=t[1],i=Object(r.useState)(!1),c=o(i,2),l=c[0],u=c[1],p=Object(r.useState)(!1),d=o(p,2),f=d[0],m=d[1],b=function(){l&&f||s(!0)},v={onMouseEnter:function(n){u(!0),s(!1),e.onMouseEnter&&e.onMouseEnter(n)},onMouseLeave:function(n){u(!1),s(!1),e.onMouseLeave&&e.onMouseLeave(n)},onMouseDown:function(n){m(!0),s(!1),e.onMouseDown&&e.onMouseDown(n)},onKeyDown:function(n){m(!1),b(),e.onKeyDown&&e.onKeyDown(n)},onKeyUp:function(n){b(),e.onKeyUp&&e.onKeyUp(n)},onBlur:function(n){s(!1),e.onBlur&&e.onBlur(n)}};return[a,v]}}}]);
//# sourceMappingURL=enterprise-menu-popover.3da43c5c643db07d4682.js.map