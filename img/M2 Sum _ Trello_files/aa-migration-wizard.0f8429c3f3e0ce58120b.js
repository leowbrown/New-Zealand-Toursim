(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./app/src/components/AtlassianAccountMigration/AtlassianAccountMigrationWizard.tsx":function(t,n,e){"use strict";e.r(n),e.d(n,"AtlassianAccountMigrationWizard",(function(){return b}));var r=e("./node_modules/react/index.js"),a=e.n(r),o=e("./packages/feature-flag-client/index.ts"),i=e("./packages/nachos/experimental.ts"),s=e("./app/common/lib/util/i18n/index.ts"),c=e("./app/gamma/src/components/alert/index.tsx"),u=e("./app/src/components/AtlassianAccountMigration/AtlassianAccountMigrationAlertContainer.tsx"),l=e("./app/src/components/AtlassianAccountMigration/AtlassianAccountMigrationClient.ts"),p=e("./app/src/components/AtlassianAccountMigration/AtlassianAccountMigrationDialog.tsx");function f(t,n,e,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(r,a)}function m(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){f(o,r,a,i,s,"next",t)}function s(t){f(o,r,a,i,s,"throw",t)}i(void 0)}))}}function g(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var A=Object(s.forNamespace)(["aa migration wizard","banner"],{shouldEscapeStrings:!1}),b=function(t){var n=t.analyticsContext,e=t.email,s=t.hasTwoFactor,f=t.onDismiss,d=Object(o.useFeatureFlag)("workflowers.ak-flag",!1),b=Object(c.b)({alertArea:u.a,alertName:u.b}).showAlert,h=g(Object(r.useState)(null),2),y=h[0],w=h[1];return Object(r.useEffect)((function(){function t(){return(t=m(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.migrate();case 2:(n=t.sent)?w(n):(d?Object(i.showFlag)({id:u.a,title:A("something-went-wrong"),appearance:"error",isAutoDismiss:!0}):b(),f(),console.error("Could not migrate. API request failed."));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[d,b,f]),a.a.createElement(p.b,{onDismiss:f,email:e,hasTwoFactor:s,analyticsContext:n,migrationResponse:y})};n.default=b}}]);
//# sourceMappingURL=aa-migration-wizard.0f8429c3f3e0ce58120b.js.map