!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[a]={exports:{}};t[a][0].call(s.exports,(function(e){return o(t[a][1][e]||e)}),s,s.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,t,n){var o=t.indentWithTabs?Math.floor(t.indentUnit/t.tabSize):0,i=t.indentWithTabs?t.indentUnit%t.tabSize:t.indentUnit,a="\t".repeat(o)+" ".repeat(i);t.value=["add_filter( 'admin_footer_text', function ( $text ) {\n",a+"$site_name = get_bloginfo( 'name' );\n",a+'$text = "Thank you for visiting $site_name.";\n',a+"return $text;","} );\n"].join("\n");var u=e(document.getElementById("code_snippets_editor_preview"),t);window.code_snippets_editor_preview=u;var c,f=r(n);try{var s=function(){var e=c.value,t=document.querySelector('[name="code_snippets_settings[editor]['+e.name+']"]');t.addEventListener("change",(function(){var n=e.codemirror,r=function(){switch(e.type){case"codemirror_theme_select":return t.options[t.selectedIndex].value;case"checkbox":return t.checked;case"number":return parseInt(t.value);default:return null}}();null!==r&&u.setOption(n,r)}))};for(f.s();!(c=f.n()).done;)s()}catch(e){f.e(e)}finally{f.f()}}(window.Code_Snippets_CodeMirror,code_snippets_editor_atts,code_snippets_editor_settings)},{}]},{},[1]);
