(this.webpackJsonpexchangeratetable=this.webpackJsonpexchangeratetable||[]).push([[0],{148:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},301:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var s=a(5),c=a(0),i=a(27),r=a.n(i),n=(a(175),a(54)),o=a(82),l=a(31),d=(a(176),a(177),a(315)),u=a(131),f=a(321),j=a(325),m=a(326),y=a(327),D=a(328),b=a(329),h=a(330),v=a(331),x=a(90),O=(a(178),a(179),function(e){var t=e.calculatedDate,a=e.tradingDate,c=e.calculatedCurrency,i=e.calculatedAmount,r=e.rate,n=e.calculationResult;return console.log(i),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:["Wybrana data: ",Object(s.jsx)("strong",{children:t})]}),Object(s.jsxs)("p",{children:["Kwota:"," ",Object(s.jsxs)("strong",{children:[i," ",c]})]}),Object(s.jsxs)("p",{children:["Znaleziona data ",Object(s.jsx)("strong",{children:a})]}),Object(s.jsxs)("p",{children:["Znaleziony kurs:",Object(s.jsxs)("strong",{children:[" ",r]})]}),Object(s.jsxs)("p",{children:["Otrzymana kwota: ",Object(s.jsxs)("strong",{children:[n," PLN"]})]})]})}),p=a(318),g=a(317),R=a(319),T=a(320),w=a(316),E=a(48),F=a(45),k=a.n(F),S=p.a.Option,C={labelCol:{span:4},wrapperCol:{span:4}},z={wrapperCol:{offset:4,span:4}},I=function(e){var t=(new Date).toISOString().toLocaleString("pl-pl").slice(0,10),a="",i="",r="",o="",l=Object(c.useState)("",[]),d=Object(n.a)(l,2),u=d[0],f=d[1],j=Object(c.useState)("",[]),m=Object(n.a)(j,2),y=m[0],D=m[1],b=Object(c.useState)("",[]),h=Object(n.a)(b,2),v=h[0],F=h[1],I=Object(c.useState)("",[]),N=Object(n.a)(I,2),K=N[0],U=N[1],P=Object(c.useState)("",[]),A=Object(n.a)(P,2),H=A[0],W=A[1],q=Object(c.useState)("",[]),B=Object(n.a)(q,2),J=B[0],M=B[1],Z=g.a.useForm(),G=Object(n.a)(Z,1)[0];var L=["EUR","GBP","SEK","AUD","HUF","RUB","NOK","CZK","DKK","CHF","JPY"].map((function(e){return Object(s.jsx)(S,{value:e,children:e})}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(g.a,Object(x.a)(Object(x.a)({},C),{},{form:G,name:"control-hooks",onFinish:function(e){if(void 0===e.Data||e.Data>t){a=t,console.log("Data pobrana z inputa "+a);var s=k()(a).subtract(0,"day").toISOString().split("T")[0];i=s,console.log("data minus 1 dzien: ",i)}else{var c=e.Data.toISOString().split("T")[0];a=c;var n=k()(c).subtract(0,"day").toISOString().split("T")[0];i=n}if(e.kwota.match(/^[0-9]+(\.[0-9]{1,2})?$/)?o=e.kwota:R.a.warning({title:"Ooops co\u015b posz\u0142o nie tak...",content:"Prosz\u0119 poda\u0107 prawid\u0142ow\u0105 kwot\u0119..."}),r=e.waluta,o){var l="https://api.nbp.pl/api/exchangerates/rates/a/".concat(r,"/").concat(i,"/?format=json");fetch(l).then((function(e){if(console.log("sprawdzamy pierwszy fetch data to"+i),e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){console.log(e),f(e.rates[0].effectiveDate),D(e.rates[0].mid),F((o*e.rates[0].mid).toFixed(2)),U(o),W(r),M(a)})).catch((function(e){console.log("taki blad ",e);var t=k()(i).subtract(0,"day").toISOString().split("T")[0];console.log("Nowa data to: ",t),fetch("https://api.nbp.pl/api/exchangerates/rates/a/".concat(r,"/").concat(t,"/?format=json")).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){console.log(e),f(e.rates[0].effectiveDate),D(e.rates[0].mid),console.log(e.rates[0].effectiveDate,e.rates[0].mid),F((o*e.rates[0].mid).toFixed(2)),U(o),W(r),M(a)})).catch((function(){var e=k()(t).subtract(0,"day").toISOString().split("T")[0];console.log("Nowa data to: ",e),fetch("https://api.nbp.pl/api/exchangerates/rates/a/".concat(r,"/").concat(e,"/?format=json")).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){console.log(e),f(e.rates[0].effectiveDate),D(e.rates[0].mid),console.log(e.rates[0].effectiveDate,e.rates[0].mid),F((o*e.rates[0].mid).toFixed(2)),U(o),W(r),M(a)})).catch((function(){var t=k()(e).subtract(0,"day").toISOString().split("T")[0];console.log("Nowa data to: ",t),fetch("https://api.nbp.pl/api/exchangerates/rates/a/".concat(r,"/").concat(t,"/?format=json")).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){console.log(e),f(e.rates[0].effectiveDate),D(e.rates[0].mid),F((o*e.rates[0].mid).toFixed(2)),U(o),W(r),M(a),console.log(e.rates[0].effectiveDate,e.rates[0].mid)})).catch((function(){var e=k()(t).subtract(0,"day").toISOString().split("T")[0];console.log("Nowa data to: ",e),fetch("https://api.nbp.pl/api/exchangerates/rates/a/".concat(r,"/").concat(e,"/?format=json")).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){console.log(e),f(e.rates[0].effectiveDate),D(e.rates[0].mid),F((o*e.rates[0].mid).toFixed(2)),U(o),W(r),M(a),console.log(e.rates[0].effectiveDate,e.rates[0].mid)})).catch((function(e){return console.log(e)}))}))}))}))}))}},children:[Object(s.jsx)(g.a.Item,{name:"kwota",label:"Kwota",tooltip:"Przyk\u0142ad: 100.45",rules:[{required:!0}],children:Object(s.jsx)(T.a,{})}),Object(s.jsx)(g.a.Item,{name:"waluta",label:"Waluta",rules:[{required:!0}],children:Object(s.jsx)(p.a,{placeholder:"Prosz\u0119 wybra\u0107 z listy",allowClear:!0,children:L})}),Object(s.jsx)(g.a.Item,{noStyle:!0,shouldUpdate:function(e,t){return e.waluta!==t.waluta},children:function(e){return"inne"===(0,e.getFieldValue)("waluta")?Object(s.jsx)(g.a.Item,{name:"dodatkoweWaluty",label:"Dodatkowe waluty",rules:[{required:!0}],children:Object(s.jsx)(T.a,{})}):null}}),Object(s.jsx)(g.a.Item,{name:"Data",label:"Data",tooltip:"Puste pole - oznacza dzisiejsz\u0105 dat\u0119",rules:[{required:!1}],children:Object(s.jsx)(w.a,{})}),Object(s.jsxs)(g.a.Item,Object(x.a)(Object(x.a)({},z),{},{children:[Object(s.jsx)(E.a,{type:"primary",htmlType:"submit",children:"Oblicz"}),Object(s.jsx)(E.a,{htmlType:"button",onClick:function(){G.resetFields(),F("")},children:"Reset"})]}))]})),""!==v?Object(s.jsx)(O,{calculatedDate:J,calculatedCurrency:H,calculatedAmount:K,tradingDate:u,rate:y,calculationResult:v}):null]})},N=(a(148),a(301),a(322)),K=a(323),U=a(324);var P=function(e){var t=e.code,a=e.actualRate,c=e.currency,i=e.yesterdayRate,r=e.yesterdayEffectiveDate,n=e.minusTwoDaysRate,o=e.minusTwoDaysEffectiveDate,l=e.minusThreeDaysRate,d=e.minusThreeDaysEffectiveDate,u=e.minusFourDaysRate,f=e.minusFourDaysEffectiveDate,j=e.cssClass;return Object(s.jsxs)("div",{className:j,children:[Object(s.jsxs)("h3",{children:[t," ",a.toFixed(4),a>i?Object(s.jsx)(N.a,{style:{color:"#52c41a"}}):a===i?Object(s.jsx)(K.a,{style:{color:"#f28c2c"}}):Object(s.jsx)(U.a,{style:{color:"#eb2f96"}})]}),Object(s.jsx)("p",{className:" d-none d-sm-block",children:c}),Object(s.jsx)("div",{className:"last5 d-none d-sm-block",children:"Poprzednie dni (handlowe):"}),Object(s.jsxs)("section",{className:"last5 d-none d-sm-block",children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("strong",{children:[" ",r]}),Object(s.jsx)("br",{}),i.toFixed(2)]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("strong",{children:o}),Object(s.jsx)("br",{}),n.toFixed(2)]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("strong",{children:d}),Object(s.jsx)("br",{}),l.toFixed(2)]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("strong",{children:f}),Object(s.jsx)("br",{}),u.toFixed(2)]})]})]})};var A=function(e){var t=e.ert;return Object(s.jsxs)(s.Fragment,{children:[console.log("render ert"),Object(s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,900",rel:"stylesheet"}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-"+Math.floor(3*Math.random()+1),code:t[4].rates[1].code,currency:t[4].rates[1].currency,actualRate:t[4].rates[1].mid,yesterdayRate:t[3].rates[1].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[1].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[1].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[1].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{className:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-2",code:t[4].rates[7].code,currency:t[4].rates[7].currency,actualRate:t[4].rates[7].mid,yesterdayRate:t[3].rates[7].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[7].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[7].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[7].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{className:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-3",code:t[4].rates[10].code,currency:t[4].rates[10].currency,actualRate:t[4].rates[10].mid,yesterdayRate:t[3].rates[10].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[10].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[10].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[10].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-1",code:t[4].rates[9].code,currency:t[4].rates[9].currency,actualRate:t[4].rates[9].mid,yesterdayRate:t[3].rates[9].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[9].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[9].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[9].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-2",code:t[4].rates[13].code,currency:t[4].rates[13].currency,actualRate:t[4].rates[13].mid,yesterdayRate:t[3].rates[13].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[13].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[13].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[13].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-3",code:t[4].rates[17].code,currency:t[4].rates[17].currency,actualRate:t[4].rates[17].mid,yesterdayRate:t[3].rates[17].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[17].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[17].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[17].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-1",code:t[4].rates[11].code,currency:t[4].rates[11].currency,actualRate:t[4].rates[11].mid,yesterdayRate:t[3].rates[11].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[11].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[11].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[11].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-2",code:t[4].rates[16].code,currency:t[4].rates[16].currency,actualRate:t[4].rates[16].mid,yesterdayRate:t[3].rates[16].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[16].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[16].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[16].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-3",code:t[4].rates[12].code,currency:t[4].rates[12].currency,actualRate:t[4].rates[12].mid,yesterdayRate:t[3].rates[12].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[12].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[12].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[12].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-1",code:t[4].rates[14].code,currency:t[4].rates[14].currency,actualRate:t[4].rates[14].mid,yesterdayRate:t[3].rates[14].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[14].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[14].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[14].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-2",code:t[4].rates[18].code,currency:t[4].rates[18].currency,actualRate:t[4].rates[18].mid,yesterdayRate:t[3].rates[18].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[18].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[18].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[18].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})}),Object(s.jsx)("div",{class:"col-sm",children:Object(s.jsx)(P,{cssClass:"card card-3",code:t[4].rates[22].code,currency:t[4].rates[22].currency,actualRate:t[4].rates[22].mid,yesterdayRate:t[3].rates[22].mid,yesterdayEffectiveDate:t[3].effectiveDate.slice(5),minusTwoDaysRate:t[2].rates[22].mid,minusTwoDaysEffectiveDate:t[2].effectiveDate.slice(5),minusThreeDaysRate:t[1].rates[22].mid,minusThreeDaysEffectiveDate:t[1].effectiveDate.slice(5),minusFourDaysRate:t[0].rates[22].mid,minusFourDaysEffectiveDate:t[0].effectiveDate.slice(5)})})]})]})]})};var H=function(){return Object(s.jsx)("p",{children:"cokolwiek EUR"})},W=d.a.Header,q=d.a.Content,B=d.a.Footer,J=d.a.Sider,M=u.a.SubMenu;var Z=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)("",[]),x=Object(n.a)(r,2),O=x[0],p=x[1];return Object(c.useEffect)((function(){if(console.log("uruchomienie useEffect"),""===O){console.log("ert - uruchomienie if");fetch("https://api.nbp.pl/api/exchangerates/tables/a/last/5/").then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){p(e)})).catch((function(e){return console.log(e,"Ooops co\u015b posz\u0142o nie tak...")}))}})),Object(s.jsxs)(o.a,{basename:"/ert",children:[console.log("render App"),Object(s.jsxs)(d.a,{style:{minHeight:"100vh"},children:[Object(s.jsxs)(J,{collapsible:!0,collapsed:!a,onCollapse:function(){return i((function(e){return!e}))},zeroWidthTriggerStyle:{height:"50px","border-top-right-radius":"10px","border-bottom-right-radius":"10px",top:"90vh","background-color":"#001529",position:"-webkit-sticky"},children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)(o.b,{to:"/",children:Object(s.jsxs)("p",{className:"ert",children:[Object(s.jsx)(j.a,{style:{fontSize:"60px"}}),Object(s.jsx)("span",{children:"ert"})]})})}),Object(s.jsxs)(u.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(s.jsx)(u.a.Item,{icon:Object(s.jsx)(m.a,{}),children:Object(s.jsx)(o.b,{exact:!0,to:"/",children:"Kursy walut"})},"1"),Object(s.jsx)(u.a.Item,{icon:Object(s.jsx)(y.a,{style:{fontSize:"20px"}}),children:Object(s.jsx)(o.b,{to:"/CurrencyConverter",children:"Kalkulator walutowy"})},"2"),Object(s.jsxs)(M,{icon:Object(s.jsx)(D.a,{style:{fontSize:"20px"}}),title:"Waluty",children:[Object(s.jsx)(u.a.Item,{children:Object(s.jsx)(o.b,{to:"/EUR",children:" EUR "})},"3"),Object(s.jsx)(u.a.Item,{children:"USD"},"4"),Object(s.jsx)(u.a.Item,{children:"GBP"},"5")]},"sub1"),Object(s.jsxs)(M,{icon:Object(s.jsx)(b.a,{}),title:"Team",children:[Object(s.jsx)(u.a.Item,{children:"Team 1"},"6"),Object(s.jsx)(u.a.Item,{children:"Team 2"},"8")]},"sub2"),Object(s.jsx)(u.a.Item,{icon:Object(s.jsx)(h.a,{}),onClick:function(){return console.log(O)},children:"Files"},"9")]})]}),Object(s.jsxs)(d.a,{className:"site-layout",children:[Object(s.jsx)(W,{className:"site-layout-background",style:{padding:0}}),Object(s.jsxs)(q,{style:{margin:"0 16px"},children:[Object(s.jsx)(f.a,{style:{margin:"16px 0"},children:Object(s.jsx)(f.a.Item,{children:"Exchange Rate Table"})}),Object(s.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[""===O?Object(s.jsx)(v.a,{style:{fontSize:24},spin:!0}):Object(s.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(s.jsx)(A,{ert:O})}}),Object(s.jsx)(l.a,{path:"/CurrencyConverter",render:function(){return Object(s.jsx)(I,{ert:O})}}),Object(s.jsx)(l.a,{path:"/EUR",component:H})]})]}),Object(s.jsx)(B,{style:{textAlign:"center"},children:"ERT - Exchange Rate Table / Ant Design \xa92020"})]})]})]})};r.a.render(Object(s.jsx)(Z,{}),document.getElementById("root"))}},[[313,1,2]]]);
//# sourceMappingURL=main.4e21f9b2.chunk.js.map