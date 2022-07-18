import{a5 as g,a as w,l as m,a6 as x,o as u,a7 as d,b as e,w as o,V as b,a8 as q,S as B,d as h,g as t,P as S,a9 as N,aa as n,X as f,f as i,h as c,ab as $,ac as D}from"./index.503153cb.js";import{V as P}from"./VTable.d0a756c6.js";import{V as T}from"./VDivider.82c60a6c.js";const z={id:"cart"},A=t("h1",{class:"text-center"},"\u8CFC\u7269\u8ECA",-1),E=t("thead",null,[t("tr",null,[t("th",null,"\u5716\u7247"),t("th",null,"\u540D\u7A31"),t("th",null,"\u55AE\u50F9"),t("th",null,"\u6578\u91CF"),t("th",null,"\u5C0F\u8A08"),t("th",null,"\u64CD\u4F5C")])],-1),F=c("-"),I=c("+"),L=c("\u522A\u9664"),R={key:1},U=t("td",{colspan:"6"},[t("h3",{class:"text-center"},"\u6C92\u6709\u5546\u54C1")],-1),X=[U],j=c("\u7D50\u5E33"),O={__name:"CartView",setup(G){const C=g(),l=w([]),v=m(()=>l.reduce((a,r)=>a+r.product.price*r.quantity,0)),V=m(()=>l.length>0&&!l.some(a=>!a.product.sell)),_=async(a,r)=>{await C.updateCart({product:l[a].product._id,quantity:r})&&(r===0?l.splice(a,1):l[a].quantity=r)};return(async()=>{try{const{data:a}=await q.get("/users/cart");l.push(...a.result)}catch{B.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(a,r)=>{const k=x("v-divier");return u(),d("div",z,[e(b,null,{default:o(()=>[e(h,{cols:"12"},{default:o(()=>[A]),_:1}),e(k),e(h,{cols:"12"},{default:o(()=>[e(P,null,{default:o(()=>[E,t("tbody",null,[l.length>0?(u(!0),d(S,{key:0},N(l,(s,p)=>(u(),d("tr",{key:s._id,class:$({"bg-red":!s.product.sell})},[t("td",null,[e(D,{src:s.product.image},null,8,["src"])]),t("td",null,n(s.product.name),1),t("td",null,n(s.product.price),1),t("td",null,[e(i,{color:"primary",onClick:y=>_(p,s.quantity-1),variant:"text"},{default:o(()=>[F]),_:2},1032,["onClick"]),c(n(s.quantity),1),e(i,{color:"primary",onClick:y=>_(p,s.quantity+1),variant:"text"},{default:o(()=>[I]),_:2},1032,["onClick"])]),t("td",null,n(s.product.price*s.quantity),1),t("td",null,[e(i,{color:"primary",onClick:y=>_(p,0)},{default:o(()=>[L]),_:2},1032,["onClick"])])],2))),128)):(u(),d("tr",R,X))])]),_:1})]),_:1}),e(T),e(h,{class:"text-center",cols:"12"},{default:o(()=>[t("p",null,"\u7E3D\u91D1\u984D "+n(f(v)),1),e(i,{class:"mx-auto",color:"success",onClick:f(C).checkout,disabled:!f(V)},{default:o(()=>[j]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})])}}};export{O as default};
