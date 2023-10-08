"use strict";(self["webpackChunkcasestudy"]=self["webpackChunkcasestudy"]||[]).push([[752],{5572:(e,t,a)=>{a.d(t,{C:()=>r,_:()=>s});const l="/api/",s=async e=>{let t,a=o();try{let s=await fetch(`${l}${e}`,{method:"GET",headers:a});t=await s.json()}catch(s){console.log(s),t={error:`Error has occured: ${s.message}`}}return t},r=async(e,t)=>{let a,s=o();try{let r=await fetch(`${l}${e}`,{method:"POST",headers:s,body:JSON.stringify(t)});a=await r.json()}catch(r){a=r}return a},o=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("customer"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},7081:(e,t,a)=>{a.d(t,{p:()=>s,x:()=>l});const l=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),s=e=>{let t;t=void 0===e?new Date:new Date(Date.parse(e));let a=t.getDate(),l=t.getMonth()+1,s=t.getFullYear(),r=t.getHours(),o=t.getMinutes();return o<10&&(o="0"+o),s+"-"+l+"-"+a+"  "+r+":"+o}},8752:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var l=a(9835),s=a(6970);const r={class:"text-center"},o=["src"],d=(0,l._)("div",{class:"text-h5 q-mt-md"},"Your Orders",-1),n={class:"text-positive text-h6 q-mt-lg q-mb-lg"},c=(0,l.Uk)("ID"),i=(0,l.Uk)("Date Created"),u={class:"text-h5 text-center"},m=["src"],w=(0,l.Uk)("Name"),f=(0,l.Uk)("Quantities"),g=(0,l.Uk)("Extended"),p=(0,l.Uk)((0,s.zw)("")),_=(0,l.Uk)((0,s.zw)("")),x=(0,l.Uk)((0,s.zw)("Sub:")),h=(0,l.Uk)((0,s.zw)("")),k=(0,l.Uk)((0,s.zw)("")),W=(0,l.Uk)((0,s.zw)("")),y=(0,l.Uk)((0,s.zw)("")),q=(0,l.Uk)((0,s.zw)("Total:")),z=(0,l._)("div",{style:{"font-weight":"bold","font-size":"larger","margin-top":"0vh","text-align":"center"}},null,-1);function b(e,t,a,b,U,S){const D=(0,l.up)("q-avatar"),v=(0,l.up)("q-item-label"),O=(0,l.up)("q-item-section"),C=(0,l.up)("q-item"),I=(0,l.up)("q-list"),Q=(0,l.up)("q-card"),Z=(0,l.up)("q-btn"),A=(0,l.up)("q-card-actions"),$=(0,l.up)("q-card-section"),j=(0,l.up)("q-dialog"),N=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",r,[(0,l.Wm)(D,{class:"q-mb-md",size:"xl",square:""},{default:(0,l.w5)((()=>[(0,l._)("img",{src:"/img/logo.png"},null,8,o)])),_:1}),d,(0,l._)("div",n,(0,s.zw)(b.state.status),1)]),(0,l.Wm)(Q,{class:"q-ma-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{highlight:""},{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[c])),_:1})])),_:1}),(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[i])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.state.orders,(e=>((0,l.wg)(),(0,l.j4)(C,{clickable:"",key:e.id,onClick:t=>b.selectOrder(e.id)},{default:(0,l.w5)((()=>[(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.id),1)])),_:2},1024),(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(b.formatDate(e.dateCreated)),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),(0,l.Wm)(j,{modelValue:b.state.selectedAOrder,"onUpdate:modelValue":t[0]||(t[0]=e=>b.state.selectedAOrder=e),"transition-show":"rotate","transition-hide":"rotate"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(A,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(Z,{flat:"",label:"X",color:"primary",class:"text-h5"},null,512),[[N]])])),_:1}),(0,l.Wm)($,null,{default:(0,l.w5)((()=>[(0,l._)("div",u," Order: #"+(0,s.zw)(b.state.orderDetails[0].orderId),1)])),_:1}),(0,l.Wm)($,{class:"q-pa-none text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{style:{"font-weight":"bold","font-size":"small","text-align":"center",padding:"10px",color:"palevioletred"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(b.formatDate(b.state.orderDetails[0].dateCreated)),1)])),_:1}),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l._)("img",{src:"cart.png"},null,8,m)])),_:1})])),_:1}),(0,l.Wm)($,{class:"q-mb-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C,{style:{bottom:"-2vh"}},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"col-3 q-sm-lg text-accent text-left",style:{"font-weight":"bold","font-size":"medium","text-align":"left","padding-right":"5px","padding-left":"-5px"}},{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(O,{class:"col-2 q-ml-sm text-accent text-center",style:{"font-weight":"bold","font-size":"medium","text-align":"center",padding:"10px"}},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(O,{class:"q-ml-md text-accent text-right",style:{"font-weight":"bold","font-size":"medium"}},{default:(0,l.w5)((()=>[g])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.state.orderDetails,(e=>((0,l.wg)(),(0,l.j4)(C,{key:e.orderId},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"text-left col-3"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.productName),1)])),_:2},1024),(0,l.Wm)(O,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.qtySold),1)])),_:2},1024),(0,l.Wm)(O,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.qtyOrdered),1)])),_:2},1024),(0,l.Wm)(O,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.qtyBackOrdered),1)])),_:2},1024),(0,l.Wm)(O,{class:"text-left col-2"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.sellingPrice*e.qty),1)])),_:2},1024)])),_:2},1024)))),128)),((0,l.wg)(),(0,l.j4)(C,{in:"",state:"",key:b.state.id,clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"col-2"},{default:(0,l.w5)((()=>[p])),_:1}),(0,l.Wm)(O,{class:"text-center"},{default:(0,l.w5)((()=>[_])),_:1}),(0,l.Wm)(O,{class:"text-center",style:{"font-weight":"bold","margin-left":"10px"}},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(O,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(b.state.orderAmount),1)])),_:1})])),_:1})),((0,l.wg)(),(0,l.j4)(C,{in:"",state:"",key:b.state.id,clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"col-2"},{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)(O,{class:"text-center"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(O,{class:"text-center",style:{"font-weight":"bold"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)("Tax(13%):"),1)])),_:1}),(0,l.Wm)(O,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(.13*b.state.orderAmount),1)])),_:1})])),_:1})),((0,l.wg)(),(0,l.j4)(C,{in:"",state:"",key:b.state.id,clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"col-2"},{default:(0,l.w5)((()=>[W])),_:1}),(0,l.Wm)(O,{class:"text-center"},{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)(O,{class:"text-center text-primary",style:{"font-weight":"bold"}},{default:(0,l.w5)((()=>[q])),_:1}),(0,l.Wm)(O,{class:"text-center text-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(b.state.orderAmount+.13*b.state.orderAmount),1)])),_:1})])),_:1}))])),_:1})])),_:1}),(0,l.Wm)($,{class:"text-center text-positive text-h6 q-mb-xs q-mt-lg q-pa-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(b.state.dialogStatus),1)])),_:1}),(0,l.Wm)($,{class:"q-pa-none text-center q-ma-xs"},{default:(0,l.w5)((()=>[z])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var U=a(499),S=a(5572),D=a(7081);const v={setup(){let e=(0,U.qj)({status:"",dialogStatus:"",selectedAOrder:!1,orderDetails:[],orderSelected:{}});(0,l.bv)((()=>{t(),sessionStorage.getItem("order")?(e.order=JSON.parse(sessionStorage.getItem("order")),e.order.forEach((t=>{e.sub+=t.detail.qty*t.qty,e.tax=.13*e.sub,e.total=e.sub+e.tax}))):e.order=[]}));const t=async()=>{try{let t=JSON.parse(sessionStorage.getItem("customer"));const a=await(0,S._)(`order/${t.email}`);void 0===a.error?(e.orders=a,e.status=`loaded ${e.orders.length} orders`):e.status=a.error}catch(t){console.log(t),e.status=`Error has occured: ${t.message}`}},a=async t=>{try{let a=JSON.parse(sessionStorage.getItem("customer"));const l=await(0,S._)(`order/${t}/${a.email}`);e.orderDetails=l,e.dialogStatus="details for order "+e.orderDetails[0].orderId,e.selectedAOrder=!0,e.orderSelected=e.orders.find((e=>e.id===t))}catch(a){console.log(a),e.status=`Error has occured: ${a.message}`}};return{state:e,formatDate:D.p,selectOrder:a}}};var O=a(1639),C=a(1357),I=a(4458),Q=a(3246),Z=a(490),A=a(1233),$=a(3115),j=a(7743),N=a(1821),E=a(4455),T=a(3190),H=a(2146),J=a(9984),Y=a.n(J);const B=(0,O.Z)(v,[["render",b]]),L=B;Y()(v,"components",{QAvatar:C.Z,QCard:I.Z,QList:Q.Z,QItem:Z.Z,QItemSection:A.Z,QItemLabel:$.Z,QDialog:j.Z,QCardActions:N.Z,QBtn:E.Z,QCardSection:T.Z}),Y()(v,"directives",{ClosePopup:H.Z})}}]);