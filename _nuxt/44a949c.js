(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5,6,7],{309:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("4e525aea",content,!0,{sourceMap:!1})},310:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("d21de6cc",content,!0,{sourceMap:!1})},311:function(t,e,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("2b6d8030",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";r(309)},313:function(t,e,r){var n=r(55)(!1);n.push([t.i,".product-card{font-size:2.4rem;text-align:center}.product-card__link:hover .product-card__image,.product-card__link:focus .product-card__image{box-shadow:0 0 20px 1px rgba(0,0,0,0.5)}.product-card__image{transition:all 250ms ease-in-out 0ms;align-items:center;border-radius:5px;box-shadow:0 0 10px 1px rgba(0,0,0,0.3);display:flex;justify-content:center;height:350px;padding:30px}@media screen and (max-width: 767px){.product-card__image{padding:15px}}.product-card__image img{height:100%;object-fit:contain;width:100%}.product-card__content{padding:20px}.product-card__title{font-size:2.2rem;font-weight:400;margin:0 0 20px}.product-card__price{font-weight:700;margin-bottom:20px}.product-card__updated{font-size:1.6rem}\n",""]),t.exports=n},314:function(t,e,r){"use strict";r.r(e);var n={name:"ProductsList",components:{ProductCard:r(316).default},props:{products:{type:Array,required:!0}}},c=(r(317),r(24)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"products-list"},t._l(t.products,(function(t){return e("li",{key:t.id,staticClass:"products-list__item"},[e("ProductCard",{attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";r.r(e);r(84),r(43),r(29),r(36),r(15),r(69),r(35),r(70);var n=r(27),c=r(71);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ProductsListFilter",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({categories:function(t){return t.filters.categories}})),created:function(){this.categories||this.$store.dispatch("filters/fetchCategories")}},d=l,f=(r(319),r(24)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"filter"},[e("p",{staticClass:"filter__label"},[t._v("\n    Категорії:\n  ")]),t._v(" "),e("ul",{staticClass:"filter__list"},[e("li",{staticClass:"filter__item",class:{"is-active":!t.$route.params.category}},[e("NuxtLink",{staticClass:"filter__item-link",attrs:{to:{name:"index"}}},[t._v("\n        All\n      ")])],1),t._v(" "),t._l(t.categories,(function(r){return e("li",{key:r.id,staticClass:"filter__item",class:{"is-active":t.$route.params.category==="".concat(r.slug,"-").concat(r.id)}},[e("NuxtLink",{staticClass:"filter__item-link",attrs:{to:{name:"categories-category",params:{category:"".concat(r.slug,"-").concat(r.id)}}}},[t._v("\n        "+t._s(r.title)+"\n      ")])],1)}))],2)])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);r(84);var n=r(335),c=r(321),o={name:"ProductCard",props:{product:{type:Object,required:!0}},methods:{timeAgoHandler:function(t){n.a.addLocale(c),n.a.setDefaultLocale("uk");var e=new n.a("uk"),r=Date.now(),o=new Date(t).getTime();return e.format(r-(r-o))}}},l=(r(312),r(24)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-card"},[e("NuxtLink",{staticClass:"product-card__link",attrs:{to:{name:"products-product",params:{product:"".concat(t.product.slug,"-").concat(t.product.id)}}}},[e("picture",{staticClass:"product-card__image"},[e("img",{attrs:{src:t.product.images[0],alt:t.product.title}})]),t._v(" "),e("div",{staticClass:"product-card__content"},[e("h2",{staticClass:"product-card__title"},[t._v(t._s(t.product.title))]),t._v(" "),e("p",{staticClass:"product-card__price"},[t._v(t._s(t._f("formatPrice")(t.product.price)))]),t._v(" "),e("p",{staticClass:"product-card__updated"},[t._v("Оновлено "+t._s(t.timeAgoHandler(t.product.updated_at)))])])])],1)}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,r){"use strict";r(310)},318:function(t,e,r){var n=r(55)(!1);n.push([t.i,".products-list{display:flex;flex-wrap:wrap;margin:0 -15px}.products-list__item{margin-bottom:30px;padding:0 15px;width:25%}@media screen and (max-width: 1279px){.products-list__item{width:50%}}@media screen and (max-width: 767px){.products-list__item{margin:0 auto 30px;max-width:480px;width:100%}}\n",""]),t.exports=n},319:function(t,e,r){"use strict";r(311)},320:function(t,e,r){var n=r(55)(!1);n.push([t.i,".filter{display:flex;flex-wrap:wrap;font-size:1.9rem;margin-bottom:30px}.filter__label{font-weight:700;margin:0 20px 5px 0}.filter__list{align-items:center;display:flex;flex-wrap:wrap;margin:0 -8px}.filter__item{margin:0 8px 5px}.filter__item--active .filter__item-link{color:#727272;text-decoration:underline}.filter__item-link{transition:all 250ms ease-in-out 0ms}.filter__item-link:hover,.filter__item-link:focus,.is-active .filter__item-link{color:#727272;text-decoration:underline}\n",""]),t.exports=n},322:function(t,e,r){"use strict";var n=r(9),c=(r(42),r(141));e.a={list:function(filter){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("products/",{params:{filter:JSON.stringify(filter)}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))()},get:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("products/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()}}},325:function(t,e,r){"use strict";r.r(e);var n=r(9),c=(r(42),r(314)),o=r(315),l={name:"FullProductsListPage",components:{ProductsList:c.default,ProductsFilter:o.default},props:{loadProducts:{type:Function,required:!0}},data:function(){return{products:[]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadProducts();case 2:t.products=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},d=r(24),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"site-main"},[e("div",{staticClass:"container"},[e("ProductsFilter"),t._v(" "),e("ProductsList",{attrs:{products:t.products}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsFilter:r(315).default,ProductsList:r(314).default})},338:function(t,e,r){"use strict";r.r(e);var n=r(9),c=(r(42),r(322)),o={components:{FullProductsListPage:r(325).default},methods:{loadProducts:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.list();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},l=r(24),component=Object(l.a)(o,(function(){return(0,this._self._c)("FullProductsListPage",{attrs:{"load-products":this.loadProducts}})}),[],!1,null,null,null);e.default=component.exports}}]);