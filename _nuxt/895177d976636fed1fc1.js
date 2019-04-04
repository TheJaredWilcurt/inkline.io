(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{755:function(t,n,e){"use strict";function title(t){return"".concat(t," - Inkline")}e.d(n,"a",function(){return title})},800:function(t,n,e){"use strict";e.r(n);var o=e(278),title=e(755),c=e(7),v={name:"NavView",layout:"documentation",extends:o.a,head:{title:Object(title.a)("Pagination")},components:{IButton:c.e,INav:c.I,INavItem:c.J},data:function(){return{currentPage:1,currentPageSm:1,currentPageMd:1,currentPageLg:1,currentPageLight:1,currentPageDark:1}}},_=e(0),component=Object(_.a)(v,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("h1",{attrs:{id:"pagination"}},[t._v("Pagination")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("Pagination provides navigation for large series of related content.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[t._v("Example")]),t._v(" "),t._m(0),t._v(" "),e("i-code-preview",{attrs:{title:"Pagination Example",link:"https://github.com/inkline/inkline/tree/master/src/components/Pagination"}},[e("p",[e("i-pagination",{attrs:{items:300,"items-per-page":20},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1),t._v(" "),e("template",{slot:"html"},[e("pre",{staticClass:"line-numbers language-html"},[e("code",{staticClass:"line-numbers language-html"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-pagination")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("v-model")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("currentPage"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("300"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items-per-page")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("20"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-pagination")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])]),t._v(" "),e("template",{slot:"js"},[e("pre",{staticClass:"line-numbers language-js"},[e("code",{staticClass:"line-numbers language-js"},[e("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),e("span",{staticClass:"token function"},[t._v("data")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      currentPage"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),t._v("\n    "),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])])],2),t._v(" "),e("h3",{attrs:{id:"variants"}},[t._v("Variants")]),t._v(" "),t._m(1),t._v(" "),e("i-code-preview",{attrs:{title:"Pagination Variants",link:"https://github.com/inkline/inkline/tree/master/src/components/Pagination"}},[e("p",[e("i-pagination",{attrs:{variant:"light",items:100,"items-per-page":10},model:{value:t.currentPageLight,callback:function(n){t.currentPageLight=n},expression:"currentPageLight"}})],1),t._v(" "),e("p",[e("i-pagination",{attrs:{variant:"dark",items:100,"items-per-page":10},model:{value:t.currentPageDark,callback:function(n){t.currentPageDark=n},expression:"currentPageDark"}})],1),t._v(" "),e("template",{slot:"html"},[e("pre",{staticClass:"line-numbers language-html"},[e("code",{staticClass:"line-numbers language-html"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-pagination")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("v-model")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("currentPage"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("variant")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("light"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("100"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items-per-page")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("10"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-pagination")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-pagination")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("v-model")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("currentPage"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("variant")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("dark"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("100"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items-per-page")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("10"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-pagination")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])]),t._v(" "),e("template",{slot:"js"},[e("pre",{staticClass:"line-numbers language-js"},[e("code",{staticClass:"line-numbers language-js"},[e("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),e("span",{staticClass:"token function"},[t._v("data")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      currentPage"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),t._v("\n    "),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])])],2),t._v(" "),e("h3",{attrs:{id:"sizes"}},[t._v("Sizes")]),t._v(" "),t._m(2),t._v(" "),e("i-code-preview",{attrs:{title:"Pagination Sizes",link:"https://github.com/inkline/inkline/tree/master/src/components/Pagination"}},[e("div",[e("i-pagination",{attrs:{size:"sm",items:100,"items-per-page":10},model:{value:t.currentPageSm,callback:function(n){t.currentPageSm=n},expression:"currentPageSm"}}),t._v(" "),e("p",[e("i-pagination",{attrs:{size:"md",items:100,"items-per-page":10},model:{value:t.currentPageMd,callback:function(n){t.currentPageMd=n},expression:"currentPageMd"}})],1),t._v(" "),e("p",[e("i-pagination",{attrs:{size:"lg",items:100,"items-per-page":10},model:{value:t.currentPageLg,callback:function(n){t.currentPageLg=n},expression:"currentPageLg"}})],1)],1),t._v(" "),e("template",{slot:"html"},[e("pre",{staticClass:"line-numbers language-html"},[e("code",{staticClass:"line-numbers language-html"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-pagination")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("v-model")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("currentPage"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("size")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("sm"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("100"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items-per-page")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("10"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-pagination")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-pagination")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("v-model")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("currentPage"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("size")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("md"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("100"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items-per-page")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("10"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-pagination")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("i-pagination")]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("v-model")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("currentPage"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v("size")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("lg"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("100"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),e("span",{staticClass:"token attr-name"},[t._v(":items-per-page")]),e("span",{staticClass:"token attr-value"},[e("span",{staticClass:"token punctuation"},[t._v("=")]),e("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("10"),e("span",{staticClass:"token punctuation"},[t._v('"')])]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),e("span",{staticClass:"token tag"},[e("span",{staticClass:"token tag"},[e("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("i-pagination")]),e("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])]),t._v(" "),e("template",{slot:"js"},[e("pre",{staticClass:"line-numbers language-js"},[e("code",{staticClass:"line-numbers language-js"},[e("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),e("span",{staticClass:"token function"},[t._v("data")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      currentPage"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),t._v("\n    "),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])])],2),t._v(" "),e("h3",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),e("i-api-preview",{attrs:{title:"Pagination API",markup:"i-pagination",expanded:"",link:"https://github.com/inkline/inkline/tree/master/src/components/Pagination"}},[e("template",{slot:"props"},[e("table",{staticClass:"table -bordered"},[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Accepted")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("items")]),t._v(" "),e("td",[t._v("Sets the total number of items to paginate.")]),t._v(" "),e("td",[e("code",[t._v("Number")])]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[t._v("itemsPerPage")]),t._v(" "),e("td",[t._v("Sets the number of items per pagination entry.")]),t._v(" "),e("td",[e("code",[t._v("Number")])]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",[t._v("20")])])]),t._v(" "),e("tr",[e("td",[t._v("limit")]),t._v(" "),e("td",[t._v("Sets the maximum number of pagination elements to display at a time.")]),t._v(" "),e("td",[e("code",[t._v("Number")])]),t._v(" "),e("td",[t._v("n % 2 === 1")]),t._v(" "),e("td",[e("code",[t._v("5")])])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("Sets the size of the pagination component.")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[e("code",[t._v("sm")]),t._v(", "),e("code",[t._v("md")]),t._v(", "),e("code",[t._v("lg")])]),t._v(" "),e("td",[e("code",[t._v("md")])])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("Sets the currently selected pagination entry.")]),t._v(" "),e("td",[e("code",[t._v("Number")])]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[t._v("variant")]),t._v(" "),e("td",[t._v("Sets the color variant of the pagination component.")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[e("code",[t._v("light")]),t._v(", "),e("code",[t._v("dark")])]),t._v(" "),e("td",[e("code",[t._v("light")])])])])])]),t._v(" "),e("template",{slot:"slots"},[e("table",{staticClass:"table -bordered _margin-bottom-0"},[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("default")]),t._v(" "),e("td",[t._v("Slot for pagination component default content.")])]),t._v(" "),e("tr",[e("td",[t._v("next")]),t._v(" "),e("td",[t._v("Slot for pagination component next button content.")])]),t._v(" "),e("tr",[e("td",[t._v("previous")]),t._v(" "),e("td",[t._v("Slot for pagination component previous button content.")])])])])]),t._v(" "),e("template",{slot:"events"},[e("table",{staticClass:"table -bordered _margin-bottom-0"},[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Prototype")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("Emitted when active item changes.")]),t._v(" "),e("td",[e("code",[t._v("(item: Number) => {}")])])]),t._v(" "),e("tr",[e("td",[t._v("input")]),t._v(" "),e("td",[t._v("Emitted when active item changes. Used together with "),e("code",[t._v("v-model")]),t._v(".")]),t._v(" "),e("td",[e("code",[t._v("(item: Number) => {}")])])])])])])],2)],1)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Pagination items are automatically generated based on the total item count "),e("code",[t._v("items")]),t._v(" and how many items will be displayed on the page, configured using "),e("code",[t._v("items-per-page")]),t._v(", with the default value being "),e("code",[t._v("20")]),t._v(". The currently selected page is kept synchronised using "),e("code",[t._v("v-model")]),t._v(".")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Inkline includes two predefined pagination styles. You can set the style of a "),e("code",[t._v("<i-pagination>")]),t._v(" using the "),e("code",[t._v("variant")]),t._v(" property, which can have a value of "),e("code",[t._v("light")]),t._v(" or "),e("code",[t._v("dark")]),t._v(". By default, pagination uses the "),e("code",[t._v("light")]),t._v(" variant.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("You're able to use the "),e("code",[t._v("size")]),t._v(" modifier to control the size of your pagination items, using one of the available sizes: "),e("code",[t._v("sm")]),t._v(", "),e("code",[t._v("md")]),t._v(", and "),e("code",[t._v("lg")]),t._v(". The default size is set to "),e("code",[t._v("md")]),t._v(".")])}],!1,null,null,null);n.default=component.exports}}]);