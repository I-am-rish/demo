"use strict";(self.webpackChunkangolosport=self.webpackChunkangolosport||[]).push([[533],{5533:(e,s,a)=>{a.r(s),a.d(s,{default:()=>N});var t=a(5043),o=a(1591),r=a(7360),l=a(854),i=a.n(l),n=a(7503),d=a(3516),p=a(3216),c=a(3033),m=a(6178),g=a.n(m),u=a(446),h=a.n(u),x=a(579);const N=function(){const{id:e}=(0,p.g)(),[s,a]=(0,t.useState)(!1),[l,m]=(0,t.useState)([]),[u,N]=(0,t.useState)([]),[b,j]=(0,t.useState)(!1),[v,y]=(0,t.useState)(new Date),[f,S]=(0,t.useState)(null),[C,L]=(0,t.useState)(h()(g()().format("YYYY-MM-DDTHH:mm"))),[k,w]=(0,t.useState)(null),[Y,D]=(0,t.useState)(h()(g()().format("YYYY-MM-DDTHH:mm"))),[H,O]=(0,t.useState)(0),[M,B]=(0,t.useState)({id:"",sportName:"",sportLogo:""}),P=(0,p.Zp)(),R=(0,t.useCallback)((async()=>{try{j(!0);let s=await i().get("admin/getSportsCategory/".concat(e));m(s.data.data),N(s.data.data),B({id:s.data.data._id,sportName:s.data.data.sportName,sportLogo:s.data.data.sportLogo}),j(!1)}catch(s){(0,n.oR)(s.response.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,type:"error"})}}),[H]),q=c.Ik({sportName:c.Yj().required("Please choose a sport name"),sportLogo:c.Yj().required("Sport Link is required")}),z=(0,d.Wx)({initialValues:M,enableReinitialize:!0,validationSchema:q,onSubmit:async e=>{console.log("valllllllll",e),a(!0);try{let s=new FormData;s.append("sportLogo",e.sportLogo),s.append("sportName",e.sportName),console.log("formDATA",e.sportLogo);let t=await i().patch("admin/updateSportsCategory/".concat(e.id),s);console.log("res ==> ",t),O(Math.random()),a(!1),(0,n.oR)(t.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,type:"success"})}catch(s){s.response.data.error&&(0,n.oR)(s.response.data.error.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,type:"error"}),a(!1)}}});return(0,t.useEffect)((()=>{R()}),[R]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.m,{children:(0,x.jsx)("title",{children:"Edit Category "})}),(0,x.jsx)(r.A,{children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)("div",{className:"card my-4",children:[(0,x.jsx)("div",{className:"card-header p-0 position-relative mt-n4 mx-3 z-index-2",children:(0,x.jsx)("div",{style:{backgroundColor:"#46456e"},className:"shadow-primary border-radius-lg pt-0 pb-0 ",children:(0,x.jsx)("h6",{className:"text-white text-capitalize ps-3",children:(0,x.jsxs)("div",{className:"d-flex justify-content-between align-item-end py-3 px-4",children:["Edit Category"," ",(0,x.jsx)("i",{className:"fa fa-close fonts",style:{cursor:"pointer"},onClick:()=>{P("/category")}})]})})})}),(0,x.jsx)("div",{className:"card-body px-0 pb-2",children:(0,x.jsx)("div",{className:"p-4",children:(0,x.jsxs)("form",{onSubmit:z.handleSubmit,children:[(0,x.jsxs)("div",{className:"input-group input-group-outline mb-3",children:[(0,x.jsx)("img",{src:u.sportLogo,alt:"logo",style:{width:"100px",marginBottom:"15px"}}),(0,x.jsx)("input",{style:{width:"100%"},type:"file",id:"sportLogo",name:"sportLogo",className:"form-control",placeholder:"sport Logo",onChange:e=>{z.setFieldValue("sportLogo",e.target.files[0])}})]}),z.errors.sportLogo?(0,x.jsx)("div",{className:"text-danger",children:z.errors.sportLogo}):null,(0,x.jsx)("div",{className:"input-group input-group-outline mb-3",children:(0,x.jsx)("input",{type:"text",id:"sportName",name:"sportName",className:"form-control",placeholder:"Sport Name",value:z.values.sportName||"",onChange:z.handleChange})}),z.errors.sportName?(0,x.jsx)("div",{className:"text-danger",children:z.errors.sportName}):null,(0,x.jsxs)("div",{className:"text-center",children:["\xa0\xa0",(0,x.jsx)("button",{type:"submit",className:"btn btn-lg  btn-lg w-20 mt-4 mb-0",disabled:s,style:{backgroundColor:"#46456e",color:"#fff"},children:s?(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),(0,x.jsx)("span",{className:"sr-only"})," Submitting"]}):"Submit"})]})]})})})]})})})})]})}}}]);
//# sourceMappingURL=533.5bb964d5.chunk.js.map