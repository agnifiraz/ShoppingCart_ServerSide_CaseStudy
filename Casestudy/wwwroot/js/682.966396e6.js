"use strict";(self["webpackChunkcasestudy"]=self["webpackChunkcasestudy"]||[]).push([[682],{5572:(e,t,a)=>{a.d(t,{C:()=>s,_:()=>r});const l="/api/",r=async e=>{let t,a=o();try{let r=await fetch(`${l}${e}`,{method:"GET",headers:a});t=await r.json()}catch(r){console.log(r),t={error:`Error has occured: ${r.message}`}}return t},s=async(e,t)=>{let a,r=o();try{let s=await fetch(`${l}${e}`,{method:"POST",headers:r,body:JSON.stringify(t)});a=await s.json()}catch(s){a=s}return a},o=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("customer"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},7081:(e,t,a)=>{a.d(t,{p:()=>r,x:()=>l});const l=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),r=e=>{let t;t=void 0===e?new Date:new Date(Date.parse(e));let a=t.getDate(),l=t.getMonth()+1,r=t.getFullYear(),s=t.getHours(),o=t.getMinutes();return o<10&&(o="0"+o),r+"-"+l+"-"+a+"  "+s+":"+o}},3682:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var l=a(9835),r=a(6970);const s={class:"text-center"},o=["src"],d=(0,l._)("div",{class:"text-h5 q-mt-md"},"Your Orders",-1),n={class:"text-positive text-h6 q-mt-lg q-mb-lg"},c=(0,l.Uk)("ID"),u=(0,l.Uk)("Date Created"),i={class:"text-h5 text-center"},m=["src"],w=(0,l.Uk)("Name"),g=(0,l.Uk)("Quantities"),f=(0,l.Uk)("Extended"),p=(0,l._)("div",{style:{"font-weight":"bold","font-size":"larger","margin-top":"0vh","text-align":"center"}},null,-1);function _(e,t,a,_,h,x){const y=(0,l.up)("q-avatar"),q=(0,l.up)("q-item-label"),W=(0,l.up)("q-item-section"),k=(0,l.up)("q-item"),b=(0,l.up)("q-list"),S=(0,l.up)("q-card"),z=(0,l.up)("q-btn"),D=(0,l.up)("q-card-actions"),U=(0,l.up)("q-card-section"),v=(0,l.up)("q-dialog"),O=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",s,[(0,l.Wm)(y,{class:"q-mb-md",size:"xl",square:""},{default:(0,l.w5)((()=>[(0,l._)("img",{src:"/img/logo.png"},null,8,o)])),_:1}),d,(0,l._)("div",n,(0,r.zw)(_.state.status),1)]),(0,l.Wm)(S,{class:"q-ma-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{highlight:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[c])),_:1})])),_:1}),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[u])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.state.orders,(e=>((0,l.wg)(),(0,l.j4)(k,{clickable:"",key:e.id,onClick:t=>_.selectOrder(e.id)},{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.id),1)])),_:2},1024),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(_.formatDate(e.dateCreated)),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),(0,l.Wm)(v,{modelValue:_.state.selectedAOrder,"onUpdate:modelValue":t[0]||(t[0]=e=>_.state.selectedAOrder=e),"transition-show":"rotate","transition-hide":"rotate"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(z,{flat:"",label:"X",color:"primary",class:"text-h5"},null,512),[[O]])])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l._)("div",i," Order: #"+(0,r.zw)(_.state.orderDetails[0].orderId),1)])),_:1}),(0,l.Wm)(U,{class:"q-pa-none text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{style:{"font-weight":"bold","font-size":"small","text-align":"center",padding:"10px",color:"palevioletred"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(_.formatDate(_.state.orderDetails[0].dateCreated)),1)])),_:1}),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l._)("img",{src:"cart.png"},null,8,m)])),_:1})])),_:1}),(0,l.Wm)(U,{class:"q-mb-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{style:{bottom:"-2vh"}},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"col-3 q-sm-lg text-accent text-left",style:{"font-weight":"bold","font-size":"medium","text-align":"left","padding-right":"5px","padding-left":"-5px"}},{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(W,{class:"col-2 q-ml-sm text-accent text-center",style:{"font-weight":"bold","font-size":"medium","text-align":"center",padding:"10px"}},{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(W,{class:"q-ml-md text-accent text-right",style:{"font-weight":"bold","font-size":"medium"}},{default:(0,l.w5)((()=>[f])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.state.orderDetails,(e=>((0,l.wg)(),(0,l.j4)(k,{key:e.orderId},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"text-left col-3"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.productName),1)])),_:2},1024),(0,l.Wm)(W,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.qtySold),1)])),_:2},1024),(0,l.Wm)(W,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.qtyOrdered),1)])),_:2},1024),(0,l.Wm)(W,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.qtyBackOrdered),1)])),_:2},1024),(0,l.Wm)(W,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)(" $"+(0,r.zw)(e.sellingPrice*e.qty),1)])),_:2},1024)])),_:2},1024)))),128)),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.state.orders,(e=>((0,l.wg)(),(0,l.j4)(k,{key:e.id},{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Sub-Total: $"+(0,r.zw)(e.orderAmount),1)])),_:2},1024),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Tax(13%): $"+(0,r.zw)(.13*e.orderAmount),1)])),_:2},1024),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Total: $"+(0,r.zw)(e.orderAmount+.13*e.orderAmount),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,l.Wm)(U,{class:"text-center text-positive text-h6 q-mb-xs q-mt-lg q-pa-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(_.state.dialogStatus),1)])),_:1}),(0,l.Wm)(U,{class:"q-pa-none text-center q-ma-xs"},{default:(0,l.w5)((()=>[p])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var h=a(499),x=a(5572),y=a(7081);const q={setup(){let e=(0,h.qj)({status:"",dialogStatus:"",selectedAOrder:!1,orderDetails:[],orderSelected:{}});(0,l.bv)((()=>{t(),sessionStorage.getItem("order")?(e.order=JSON.parse(sessionStorage.getItem("order")),e.order.forEach((t=>{e.sub+=t.detail.qty*t.qty,e.tax=.13*e.sub,e.total=e.sub+e.tax}))):e.order=[]}));const t=async()=>{try{let t=JSON.parse(sessionStorage.getItem("customer"));const a=await(0,x._)(`order/${t.email}`);void 0===a.error?(e.orders=a,e.status=`loaded ${e.orders.length} orders`):e.status=a.error}catch(t){console.log(t),e.status=`Error has occured: ${t.message}`}},a=async t=>{try{let a=JSON.parse(sessionStorage.getItem("customer"));const l=await(0,x._)(`order/${t}/${a.email}`);e.orderDetails=l,e.dialogStatus="details for order "+e.orderDetails[0].orderId,e.selectedAOrder=!0,e.orderSelected=e.orders.find((e=>e.id===t))}catch(a){console.log(a),e.status=`Error has occured: ${a.message}`}};return{state:e,formatDate:y.p,selectOrder:a}}};var W=a(1639),k=a(1357),b=a(4458),S=a(3246),z=a(490),D=a(1233),U=a(3115),v=a(7743),O=a(1821),$=a(4455),C=a(3190),I=a(2146),Q=a(9984),Z=a.n(Q);const A=(0,W.Z)(q,[["render",_]]),j=A;Z()(q,"components",{QAvatar:k.Z,QCard:b.Z,QList:S.Z,QItem:z.Z,QItemSection:D.Z,QItemLabel:U.Z,QDialog:v.Z,QCardActions:O.Z,QBtn:$.Z,QCardSection:C.Z}),Z()(q,"directives",{ClosePopup:I.Z})}}]);