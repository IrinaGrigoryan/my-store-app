(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{311:function(t,e,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("2b6d8030",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r.r(e);r(84),r(43),r(29),r(36),r(15),r(69),r(35),r(70);var n=r(27),l=r(71);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={name:"ProductsListFilter",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({categories:function(t){return t.filters.categories}})),created:function(){this.categories||this.$store.dispatch("filters/fetchCategories")}},f=o,_=(r(319),r(24)),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"filter"},[e("p",{staticClass:"filter__label"},[t._v("\n    Категорії:\n  ")]),t._v(" "),e("ul",{staticClass:"filter__list"},[e("li",{staticClass:"filter__item",class:{"is-active":!t.$route.params.category}},[e("NuxtLink",{staticClass:"filter__item-link",attrs:{to:{name:"index"}}},[t._v("\n        All\n      ")])],1),t._v(" "),t._l(t.categories,(function(r){return e("li",{key:r.id,staticClass:"filter__item",class:{"is-active":t.$route.params.category==="".concat(r.slug,"-").concat(r.id)}},[e("NuxtLink",{staticClass:"filter__item-link",attrs:{to:{name:"categories-category",params:{category:"".concat(r.slug,"-").concat(r.id)}}}},[t._v("\n        "+t._s(r.title)+"\n      ")])],1)}))],2)])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,r){"use strict";r(311)},320:function(t,e,r){var n=r(55)(!1);n.push([t.i,".filter{display:flex;flex-wrap:wrap;font-size:1.9rem;margin-bottom:30px}.filter__label{font-weight:700;margin:0 20px 5px 0}.filter__list{align-items:center;display:flex;flex-wrap:wrap;margin:0 -8px}.filter__item{margin:0 8px 5px}.filter__item--active .filter__item-link{color:#727272;text-decoration:underline}.filter__item-link{transition:all 250ms ease-in-out 0ms}.filter__item-link:hover,.filter__item-link:focus,.is-active .filter__item-link{color:#727272;text-decoration:underline}\n",""]),t.exports=n}}]);