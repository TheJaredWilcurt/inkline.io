(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{827:function(t,n,e){"use strict";e.r(n);var o={name:"GettingStartedView",layout:"documentation",extends:e(261).a,head:{title:"Getting Started"}},c=e(0),component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("h1",{attrs:{id:"getting-started"}},[t._v("Getting Started")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("Inkline is a modern UI/UX framework for Vue.js, designed for creating flawless content-rich responsive web applications.")]),t._v(" "),e("p",[t._v("The quickest way to get started is to add the files from a CDN, with minimal setup. If you're looking to use Inkline with Vue CLI, Webpack or a build system of choice, please read the "),e("nuxt-link",{attrs:{to:{name:"docs-introduction-installation"}}},[t._v("Installation")]),t._v(" section.")],1),t._v(" "),e("h3",{attrs:{id:"cdn"}},[t._v("CDN")]),t._v(" "),e("p",[t._v("If you're not using using package managers and build systems and you want to add Inkline to your project, you can import the compiled files from CDN:")]),t._v(" "),t._m(0),t._v(" "),e("h3",{attrs:{id:"starter-template"}},[t._v("Starter Template")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Be sure to have your pages set up with the latest design and development standards, using an HTML5 doctype and including a viewport meta tag for proper responsive behavior.")]),t._v(" "),t._m(2)])},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"line-numbers language-html"},[e("code",{staticClass:"line-numbers language-html"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("href")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.css"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("rel")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("stylesheet"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("src")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.js"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token script language-javascript"}),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("To quickly test Inkline, copy the code below into your "),n("code",[this._v("index.html")]),this._v(". This will pull the latest version of Vue and Inkline, allowing you to start playing around with Vue and Inkline's components.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"line-numbers language-html"},[e("code",{staticClass:"line-numbers language-html"},[e("span",{staticClass:"token doctype"},[t._v("<!DOCTYPE html>")]),t._v("\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("html")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("head")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("charset")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("utf-8"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("href")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.css"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("rel")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("stylesheet"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("name")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("viewport"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("content")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("head")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("body")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("id")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("app"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-container")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n      "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-row")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-column")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n          "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("h1")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("Welcome to Inkline!"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("h1")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n          "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("p")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("This is your starter page. Make sure to read the documentation to learn about what Inkline has to offer."),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("p")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n          "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-button")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("href")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("http://inkline.io/docs/introduction/getting-started"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("Read Documentation"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-button")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-column")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n      "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-row")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-container")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("div")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("src")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue/dist/vue.js"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token script language-javascript"}),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("src")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@inkline/inkline/dist/inkline.js"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token script language-javascript"}),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token script language-javascript"},[t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("new")]),t._v(" "),e("span",{staticClass:"token class-name"},[t._v("Vue")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" \n        el"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'#app'")]),t._v(" \n    "),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n  ")]),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("body")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("html")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])}],!1,null,null,null);n.default=component.exports}}]);