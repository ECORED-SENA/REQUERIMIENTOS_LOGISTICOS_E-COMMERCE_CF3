(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a6037e"],{ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,html:t.elm.outerHTML,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},bae2:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"linea-tiempo-d"},[t._l(t.elements,(function(e,i){return s("div",{key:"linea-tiempo-d-key-"+e.id,staticClass:"linea-tiempo-d__item row",class:{"linea-tiempo-d__item--selected":t.selected===e.id}},[s("div",{staticClass:"col-auto linea-tiempo-d__item__col-number"},[s("div",{staticClass:"linea-tiempo-d__item__number tarjeta tarjeta--gris",class:[,{"px-3":e.numero.length>1}],on:{click:function(s){t.selected=e.id}}},[s("span",[t._v(t._s(e.numero))])]),i<t.elements.length-1?s("div",{staticClass:"linea-tiempo-d__item__dots"}):t._e()]),s("div",{staticClass:"col",class:{"mb-4":i<t.elements.length-1}},[s("div",{staticClass:"linea-tiempo-d__item__content tarjeta tarjeta--gris"},[s("div",{staticClass:"linea-tiempo-d__item__content__title px-3",on:{click:function(s){t.selected=e.id}}},[s("span",[t._v(t._s(e.titulo))])]),s("div",{staticClass:"linea-tiempo-d__item__content__slot",style:{height:t.rendered&&t.selected===e.id?t.getActiveHeight(e.id):0}},[s("div",{ref:e.id,refInFor:!0,staticClass:"p-3 pt-0",domProps:{innerHTML:t._s(e.html)}})])])])])})),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},a=[],n=s("ab14"),d={name:"LineaTiempoD",mixins:[n["a"]],data:function(){return{}},computed:{},watch:{},methods:{}},l=d,r=s("2877"),o=Object(r["a"])(l,i,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-13a6037e.59462c4b.js.map