(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3gsmj",control:"Checkout_control__3Etwb",actions:"Checkout_actions__fM8I_",submit:"Checkout_submit__pHZFC",invalid:"Checkout_invalid__2cNpM"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1fEMP",total:"Cart_total__1aZ_D",actions:"Cart_actions__1mWZ8","button--alt":"Cart_button--alt__1uE5H",button:"Cart_button__1UBrO"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1opO0",summary:"CartItem_summary__2HG3z",price:"CartItem_price__3iWXx",amount:"CartItem_amount__2_VTd",actions:"CartItem_actions__1MsCd"}},,function(e,t,n){e.exports={button:"HeaderCardButton_button__3Wyaz",icon:"HeaderCardButton_icon__1A4NG",badge:"HeaderCardButton_badge__3gqoI",bump:"HeaderCardButton_bump__2UFEf"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__Zf4-x",modal:"Modal_modal__Ux3Px","slide-down":"Modal_slide-down__2wry3"}},function(e,t,n){e.exports={meal:"MealItem_meal__xXgpf",description:"MealItem_description__2Hy1_",price:"MealItem_price__6wzdZ"}},function(e,t,n){e.exports={header:"Headers_header__hSdiW","main-image":"Headers_main-image__1oE-0"}},function(e,t,n){e.exports={meals:"AvailabelMeals_meals__1Nnbm","meals-appear":"AvailabelMeals_meals-appear__2pgbp",error:"AvailabelMeals_error__1Cgpk"}},,,,function(e,t,n){e.exports={card:"Card_card__DAH_Y"}},function(e,t,n){e.exports={input:"Input_input__1UbBr"}},function(e,t,n){e.exports={form:"MealItemForm_form__3G839"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__mLSZI"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(19),a=n.n(c),r=(n(31),n(2)),i=n(1),s=n.n(i),o=n(6),l=n(12),d=n(4),u=n(5),j=n.n(u),m=n(10),b=n.n(m),O=n(13),p=n.n(O),x=n(0),f=function(e){return Object(x.jsx)("div",{className:p.a.backdrop,onClick:e.onClick})},h=function(e){return Object(x.jsx)("div",{className:p.a.modal,children:Object(x.jsx)("div",{className:p.a.content,children:e.children})})},_=document.getElementById("overlays"),v=function(e){return Object(x.jsxs)(i.Fragment,{children:[b.a.createPortal(Object(x.jsx)(f,{onClick:e.onClose}),_),b.a.createPortal(Object(x.jsx)(h,{children:e.children}),_)]})},C=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearItem:function(){}}),y=n(7),N=n.n(y),g=function(e){var t="$".concat(e.price.toFixed(2));return Object(x.jsxs)("li",{className:N.a["cart-item"],children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsxs)("div",{className:N.a.summary,children:[Object(x.jsx)("span",{className:N.a.price,children:t}),Object(x.jsxs)("span",{className:N.a.amount,children:["x ",e.amount]})]})]}),Object(x.jsxs)("div",{className:N.a.actions,children:[Object(x.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(x.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},A=n(3),k=n.n(A),I=function(e){var t=function(e){return""===e.trim()},n=Object(i.useState)({name:!0,street:!0,city:!0,postolCode:!0}),c=Object(r.a)(n,2),a=c[0],s=c[1],o=Object(i.useRef)(),l=Object(i.useRef)(),d=Object(i.useRef)(),u=Object(i.useRef)(),j="".concat(k.a.control," ").concat(a.name?"":k.a.invalid),m="".concat(k.a.control," ").concat(a.street?"":k.a.invalid),b="".concat(k.a.control," ").concat(a.city?"":k.a.invalid),O="".concat(k.a.control," ").concat(a.postolCode?"":k.a.invalid);return Object(x.jsxs)("form",{className:k.a.form,onSubmit:function(n){n.preventDefault();var c=o.current.value,a=l.current.value,r=d.current.value,i=u.current.value,j=!t(c),m=!t(a),b=!t(i),O=5===r.trim().length;s({name:j,street:m,city:b,postolCode:O}),m&&j&&b&&O&&e.onConfirm({name:c,street:a,city:i,postolCode:r})},children:[Object(x.jsxs)("div",{className:j,children:[Object(x.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(x.jsx)("input",{type:"text",id:"name",ref:o}),!a.name&&Object(x.jsx)("p",{children:"please enter valid name"})]}),Object(x.jsxs)("div",{className:m,children:[Object(x.jsx)("label",{htmlFor:"street",children:"Street"}),Object(x.jsx)("input",{type:"text",id:"street",ref:l}),!a.street&&Object(x.jsx)("p",{children:"please enter valid street"})]}),Object(x.jsxs)("div",{className:O,children:[Object(x.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(x.jsx)("input",{type:"text",id:"postal",ref:d}),!a.postolCode&&Object(x.jsx)("p",{children:"please enter valid postol"})]}),Object(x.jsxs)("div",{className:b,children:[Object(x.jsx)("label",{htmlFor:"city",children:"City"}),Object(x.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(x.jsx)("p",{children:"please enter valid city"})]}),Object(x.jsxs)("div",{className:k.a.actions,children:[Object(x.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(x.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},w=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],u=Object(i.useState)(!1),m=Object(r.a)(u,2),b=m[0],O=m[1],p=Object(i.useState)(!1),f=Object(r.a)(p,2),h=f[0],_=f[1],y=Object(i.useContext)(C),N="$".concat(y.totalAmount.toFixed(2)),A=y.items.length>0,k=function(e){y.removeItem(e)},w=function(e){y.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},M=Object(x.jsxs)("div",{className:j.a.actions,children:[Object(x.jsx)("button",{className:j.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),A&&Object(x.jsx)("button",{className:j.a.button,onClick:function(){a(!0)},children:"Order"})]}),S=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://addorder-8a4e6-default-rtdb.firebaseio.com/orders.json",{method:"Post",body:JSON.stringify({user:t,ordersitems:y.items})});case 3:O(!1),_(!0),y.clearItem();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(x.jsx)("ul",{className:j.a["cart-items"],children:y.items.map((function(e){return Object(x.jsx)(g,{name:e.name,amount:e.amount,price:e.price,onRemove:k.bind(null,e.id),onAdd:w.bind(null,e)},e.id)}))}),E=Object(x.jsxs)(s.a.Fragment,{children:[F,Object(x.jsxs)("div",{className:j.a.total,children:[Object(x.jsx)("span",{children:"Total Amount"}),Object(x.jsx)("span",{children:N})]}),c&&Object(x.jsx)(I,{onCancel:e.onCloseCart,onConfirm:S}),!c&&M]}),H=Object(x.jsx)("p",{children:"Sending order data..."}),R=Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)("p",{children:"Successfully sent the order!"}),Object(x.jsx)("div",{className:j.a.actions,children:Object(x.jsx)("button",{className:j.a["button--alt"],onClick:e.onCloseCart,children:"Close"})})]});return Object(x.jsxs)(v,{onClose:e.onCloseCart,children:[!b&&!h&&E,b&&H,h&&R]})},M=n(15),S=n.n(M),F=n.p+"static/media/meals.2971f633.jpg",E=function(){return Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},H=n(9),R=n.n(H);function D(e){var t=Object(i.useContext)(C),n=Object(i.useState)(!1),c=Object(r.a)(n,2),a=c[0],s=c[1],o=t.items,l="".concat(R.a.button," ").concat(a?R.a.bump:""," "),d=o.reduce((function(e,t){return e+t.amount}),0);return Object(i.useEffect)((function(){if(0!==o.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(x.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(x.jsx)("span",{className:R.a.icon,children:Object(x.jsx)(E,{})}),Object(x.jsx)("span",{children:"Your Cart"}),Object(x.jsx)("span",{className:R.a.badge,children:d})]})}var B=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("header",{className:S.a.header,children:[Object(x.jsx)("h1",{children:"React Meals"}),Object(x.jsx)(D,{onClick:e.onShowCart})]}),Object(x.jsx)("div",{className:S.a["main-image"],children:Object(x.jsx)("img",{src:F,alt:"A table full of delicious food"})})]})},P=n(20),T=n.n(P),z=function(e){return Object(x.jsx)("div",{className:T.a.card,children:e.children})},Z=n(16),U=n.n(Z),V=n(14),W=n.n(V),Y=n(21),G=n.n(Y),J=s.a.forwardRef((function(e,t){return Object(x.jsxs)("div",{className:G.a.input,children:[Object(x.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(x.jsx)("input",Object(d.a)({ref:t},e.input))]})})),L=n(22),$=n.n(L);function q(e){var t=Object(i.useRef)(),n=Object(i.useState)(!0),c=Object(r.a)(n,2),a=c[0],s=c[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{className:$.a.form,onSubmit:function(n){n.preventDefault();var c=t.current.value,a=+c;0===c.trim().length||a<1||a>5?s(!1):e.onAddToCart(a)},children:[Object(x.jsx)(J,{label:"Amount",ref:t,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(x.jsx)("button",{children:"+Add"}),!a&&Object(x.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})})}var X=function(e){var t=Object(i.useContext)(C),n="$".concat(e.price.toFixed(2));return Object(x.jsxs)("li",{className:W.a.meal,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.name}),Object(x.jsx)("div",{className:W.a.description,children:e.description}),Object(x.jsx)("div",{className:W.a.price,children:n})]}),Object(x.jsx)("div",{children:Object(x.jsx)(q,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})};var K=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(r.a)(a,2),d=s[0],u=s[1],j=Object(i.useState)(!1),m=Object(r.a)(j,2),b=m[0],O=m[1],p=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n,a,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://addorder-8a4e6-default-rtdb.firebaseio.com/Meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("faild to fetch");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});console.log(a),c(a),u(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){p().catch((function(e){O(e.message),u(!0)}))}),[]);var f=n.map((function(e){return Object(x.jsx)(X,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return d&&(f=Object(x.jsx)("p",{children:"loading..."})),b&&(f=Object(x.jsx)("p",{className:U.a.error,children:b})),Object(x.jsx)("section",{className:U.a.meals,children:Object(x.jsx)("ul",{children:Object(x.jsx)(z,{children:f})})})},Q=n(23),ee=n.n(Q),te=function(){return Object(x.jsxs)("section",{className:ee.a.summary,children:[Object(x.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(x.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(x.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})};var ne=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(te,{}),Object(x.jsx)(K,{})]})},ce=n(17),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){Object(ce.a)(e.items);return{items:e.items.find((function(e){return e.id===t.item.id}))?e.items.map((function(e){return e.id===t.item.id?Object(d.a)(Object(d.a)({},e),{},{amount:e.amount+t.item.amount}):e})):e.items.concat(t.item),totalAmount:e.totalAmount+t.item.amount*t.item.price}}if("REMOVE"===t.type){var n=Object(ce.a)(e.items),c=n.find((function(e){return e.id===t.id})),a=e.totalAmount-c.price;return 1===c.amount?n=e.items.filter((function(e){return e.id!==t.id})):c.amount--,{items:n,totalAmount:a}}if("CLEAR"===t.type)return ae},ie=function(e){var t=Object(i.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearItem:function(){a({type:"CLEAR"})}};return Object(x.jsx)(C.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)(ie,{children:[n&&Object(x.jsx)(w,{onCloseCart:function(){c(!1)}}),Object(x.jsx)(B,{onShowCart:function(){c(!0)}}),Object(x.jsx)("main",{children:Object(x.jsx)(ne,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(se,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.6ab7b959.chunk.js.map