!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=138)}({131:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);n(131);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=wp.compose.compose,p=wp.data,f=p.withSelect,y=p.dispatch,m=wp.element,d=m.Component,b=m.Fragment,g=window.PGC_SGB_POST,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,o,u=i(a);function a(){return r(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"copyToClipboard",value:function(e){var __=wp.i18n.__;if(document.getElementsByClassName(e)[0]){window.getSelection().removeAllRanges();var t=document.createRange();t.selectNodeContents(document.getElementsByClassName(e)[0]),window.getSelection().addRange(t);try{document.execCommand("copy")?(console.log("Shortcode copied to clipboard."),y("core/notices").createNotice("success","".concat(__("Shortcode copied to clipboard.","simply-gallery-block")),{type:"snackbar",isDismissible:!0,id:"pgc-notic"})):y("core/notices").createNotice("warning","".concat(__("Cannot copy Shortcode.","simply-gallery-block")),{type:"snackbar",isDismissible:!0,id:"pgc-notic"})}catch(e){console.log(e)}window.getSelection().removeAllRanges()}}},{key:"return",value:function(){}},{key:"render",value:function(){var e=this,__=wp.i18n.__,t=this.props,n=t.postID,o=t.postSlug,r=t.blockCount,c=t.isCurrentPostPublished,l="[".concat(g.postType,' id="').concat(n,'"]'),i="[".concat(g.postType,' slug="').concat(o,'"]');return wp.element.createElement(b,null,wp.element.createElement("div",{className:"pgc-sgb-post-plug"},wp.element.createElement("div",{className:"pgc-description"},wp.element.createElement("div",{className:"pgc-title"},__("Welcome!","simply-gallery-block")),__("The Shortcode is designed to transfer (clone) this gallery to various places (posts, pages, sitebars, footers, etc.) on your site. Also, the shortcode can be used to add a gallery when using third-party Page Builders (which have a shortcode widget).","simply-gallery-block")),0===r&&wp.element.createElement("div",{className:"pgc-info-notic"},__('Please add a Gallery Block using the "Plus" button. And then publish this post!',"simply-gallery-block")),r>1&&wp.element.createElement("div",{className:"pgc-warning-notic"},__("For the Shortcode to work correctly, we strongly recommend that you publish only one Gallery in this post.","simply-gallery-block")),1===r&&c&&wp.element.createElement(b,null,wp.element.createElement("div",{className:"pgc-success-notic"},__("The shortcode for this gallery is ready:","simply-gallery-block")),wp.element.createElement("div",{className:"pgc-sgb-flex-column"},wp.element.createElement("code",{className:"pgc_sgb_shortcode_id",role:"button",tabIndex:"0",onKeyDown:null,onClick:function(){e.copyToClipboard("pgc_sgb_shortcode_id")}},l),wp.element.createElement("div",{className:"pgc-warning-notic"},__("Using a short code with Slug is a risk of losing the gallery when editing the Slug for SimpLy Gallery post!","simply-gallery-block")),wp.element.createElement("code",{className:"pgc_sgb_shortcode_slug",role:"button",tabIndex:"0",onKeyDown:null,onClick:function(){e.copyToClipboard("pgc_sgb_shortcode_slug")}},i)))))}}])&&c(t.prototype,n),o&&c(t,o),a}(d),w=s([f((function(e){return{postID:e("core/editor").getEditedPostAttribute("id"),postSlug:e("core/editor").getEditedPostAttribute("slug"),blockCount:e("core/block-editor").getBlockCount(),isCurrentPostPublished:e("core/editor").isCurrentPostPublished()}}))])(h);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=k(e);if(t){var r=k(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=wp.element,C=j.Component,R=j.Fragment,x=wp.editPost,T=x.PluginSidebar,N=x.PluginSidebarMoreMenuItem,D="pgc-sgb-plugin-post-editor",B=wp.element.createElement("svg",{enableBackground:"new 0 0 24 24",height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("text",{fontWeight:"bold",fontStyle:"normal",xmlSpace:"preserve",textAnchor:"start",fontFamily:"Georgia, Times, 'Times New Roman', serif",fontSize:"18",id:"svg_11",y:"16",x:"0",strokeWidth:"0",stroke:"#fff",fill:"#0085ba"},"[/]"))),A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,n,o,r=O(c);function c(){return S(this,c),r.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var __=wp.i18n.__;return wp.element.createElement(R,null,wp.element.createElement(N,{target:D,icon:B},"SimpLy ".concat(__("Shortcode","simply-gallery-block"))),wp.element.createElement(T,{name:D,icon:B,title:"SimpLy ".concat(__("Shortcode","simply-gallery-block"))},wp.element.createElement(w,null)))}}])&&_(t.prototype,n),o&&_(t,o),c}(C);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=K(e);if(t){var r=K(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(c,e);var t,n,o,r=L(c);function c(){return G(this,c),r.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return wp.element.createElement(w,null)}}])&&M(t.prototype,n),o&&M(t,o),c}(wp.element.Component),U=wp.element.render;document.getElementById("simply-gallery-block-post-editor")&&U(wp.element.createElement(z,null),document.getElementById("simply-gallery-block-post-editor"));(0,wp.plugins.registerPlugin)("pgc-sgb-plugin-post-editor",{render:A})}});