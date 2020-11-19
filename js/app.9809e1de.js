(function(e){function t(t){for(var c,l,n=t[0],i=t[1],s=t[2],d=0,b=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&b.push(a[l][0]),a[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,n=1;n<r.length;n++){var i=r[n];0!==a[i]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var c={},a={app:0},o=[];function l(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=c,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(r,c,function(t){return e[t]}.bind(null,c));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=t,n=n.slice();for(var s=0;s<n.length;s++)t(n[s]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),a={class:"row"},o={class:"row form-group"},l=Object(c["e"])("label",{class:"col-sm-6 col-form-label",for:"reads"},"Read ops/sec",-1),n={class:"row form-group"},i=Object(c["e"])("label",{class:"col-sm-6 col-form-label",for:"writes"},"Write ops/sec",-1),s={class:"row form-group"},u=Object(c["e"])("label",{class:"col-sm-6 col-form-label",for:"item-size"},"Average item size (KB)",-1),d={class:"row form-group"},b=Object(c["e"])("label",{class:"col-sm-6 col-form-label",for:"storage-size"},"Storage set size (GB)",-1),p={class:"row"},O=Object(c["d"])("Permalink "),j=Object(c["e"])("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-link-45deg",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{d:"M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),Object(c["e"])("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"})],-1),m=Object(c["e"])("hr",null,null,-1),y={class:"row"},v={class:"col-6 m-x-1"},f={class:"col-6 m-x-1"},g=Object(c["e"])("div",{class:"row"},[Object(c["e"])("p",null,[Object(c["e"])("small",null,"Prices are monthly, but reserved offerings require a 1 year subscription period.")])],-1);function h(e,t,r,h,w,S){var k=Object(c["j"])("dropdown");return Object(c["h"])(),Object(c["c"])("div",null,[Object(c["e"])("div",a,[Object(c["e"])("form",null,[Object(c["e"])("div",o,[l,Object(c["n"])(Object(c["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.workload.reads=t}),class:"col-sm-3 form-control",type:"number",name:"reads",id:"reads"},null,512),[[c["m"],e.workload.reads]])]),Object(c["e"])("div",n,[i,Object(c["n"])(Object(c["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.workload.writes=t}),class:"col-sm-3 form-control",type:"number",name:"writes",id:"writes"},null,512),[[c["m"],e.workload.writes]])]),Object(c["e"])("div",s,[u,Object(c["n"])(Object(c["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.workload.itemSize=t}),class:"col-sm-3 form-control",type:"number",name:"items-size",id:"item-size"},null,512),[[c["m"],e.workload.itemSize]])]),Object(c["e"])("div",d,[b,Object(c["n"])(Object(c["e"])("input",{class:"col-sm-3 form-control",type:"number","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.workload.storage=t}),name:"storage-size",id:"storage-size"},null,512),[[c["m"],e.workload.storage]])])])]),Object(c["e"])("div",p,[Object(c["e"])("button",{class:"btn",onClick:t[5]||(t[5]=function(t){return e.copyLink()})},[O,j])]),m,Object(c["e"])("div",y,[Object(c["e"])("div",v,[Object(c["e"])(k,{options:e.scyllaCalcs,modelValue:e.calc1,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.calc1=t}),description:"Scylla offering"},null,8,["options","modelValue"]),(Object(c["h"])(),Object(c["c"])(Object(c["k"])(e.calc1),{workload:e.workload},null,8,["workload"]))]),Object(c["e"])("div",f,[Object(c["e"])(k,{options:e.rivalCalcs,modelValue:e.calc2,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.calc2=t}),description:"Rival offering"},null,8,["options","modelValue"]),(Object(c["h"])(),Object(c["c"])(Object(c["k"])(e.calc2),{workload:e.workload},null,8,["workload"]))])]),g])}r("4160"),r("d3b7"),r("ac1f"),r("25f0"),r("3ca3"),r("841c"),r("159b"),r("ddb0"),r("2b3d"),r("b0c0");var w={class:"pricing container",id:"scylla-cloud"},S=Object(c["e"])("h1",null,"Scylla cloud",-1),k={class:"table"},L=Object(c["e"])("td",null,"Cross AZ data transfer (replication)",-1),P=Object(c["e"])("td",null,"Cluster nodes",-1),C={class:"card"},T=Object(c["e"])("div",{class:"card-header"},[Object(c["e"])("button",{class:"btn btn-link","data-toggle":"collapse","data-target":"#scylla-details","aria-expanded":"true","aria-controls":"scylla-details"},"More details")],-1),U={class:"collapse",id:"scylla-details"},x=Object(c["e"])("h3",null,"Cluster capacity",-1),D={class:"table"},V=Object(c["e"])("td",null,"Storage (post replication)",-1),z=Object(c["e"])("td",null,"Sustained throughput",-1),A=Object(c["e"])("td",null,"Peak throughput",-1),B=Object(c["e"])("h3",null,"Cluster specs",-1),M={class:"table"},F=Object(c["e"])("td",null,"Nodes",-1),R=Object(c["e"])("td",null,"Total raw storage",-1),W=Object(c["e"])("td",null,"Total vCPU",-1),E={key:1,class:"alert alert-warning"};function G(e,t,r,a,o,l){var n=Object(c["j"])("dropdown");return Object(c["h"])(),Object(c["c"])("div",w,[S,Object(c["e"])("form",null,[Object(c["e"])(n,{modelValue:e.replicationFactor,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.replicationFactor=t}),readonly:"",options:[3,4,5],description:"Replication factor"},null,8,["modelValue"])]),l.cluster?(Object(c["h"])(),Object(c["c"])(c["a"],{key:0},[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(l.prices,(function(e){return Object(c["h"])(),Object(c["c"])("div",{key:e.id,class:"row container"},[Object(c["e"])("a",{"data-toggle":"collapse",href:"#scylla-"+e.id+"-price","aria-expanded":"false","aria-controls":"scylla"+e.id+"-price"},Object(c["l"])(e.name)+": "+Object(c["l"])(e.total.toLocaleString(void 0,{style:"currency",currency:"USD"})),9,["href","aria-controls"]),Object(c["e"])("div",{class:"collapse",id:"scylla-"+e.id+"-price"},[Object(c["e"])("table",k,[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[L,Object(c["e"])("td",null,Object(c["l"])(e.dataTransfer.toLocaleString(void 0,{style:"currency",currency:"USD"})),1)]),Object(c["e"])("tr",null,[P,Object(c["e"])("td",null,Object(c["l"])(e.compute.toLocaleString(void 0,{style:"currency",currency:"USD"})),1)])])])],8,["id"])])})),128)),Object(c["e"])("div",C,[T,Object(c["e"])("div",U,[x,Object(c["e"])("table",D,[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[V,Object(c["e"])("td",null,Object(c["l"])(l.clusterCapacity.dataset.toLocaleString())+" GB",1)]),Object(c["e"])("tr",null,[z,Object(c["e"])("td",null,Object(c["l"])(l.clusterCapacity.sustainedLoad.toLocaleString())+" ops/sec",1)]),Object(c["e"])("tr",null,[A,Object(c["e"])("td",null,Object(c["l"])(l.clusterCapacity.peakLoad.toLocaleString())+" ops/sec",1)])])]),B,Object(c["e"])("table",M,[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[F,Object(c["e"])("td",null,[Object(c["d"])(Object(c["l"])(l.cluster.nodes)+" x "+Object(c["l"])(l.cluster.instanceType.name)+" ",1),Object(c["e"])("small",null,"("+Object(c["l"])(l.cluster.instanceType.vcpu.toLocaleString())+" vCPUs, "+Object(c["l"])(l.cluster.instanceType.memory.toLocaleString())+"GB RAM, "+Object(c["l"])(l.cluster.instanceType.storage.toLocaleString())+"GB storage)",1)])]),Object(c["e"])("tr",null,[R,Object(c["e"])("td",null,Object(c["l"])(l.clusterCapacity.storage.toLocaleString())+"GB",1)]),Object(c["e"])("tr",null,[W,Object(c["e"])("td",null,Object(c["l"])(l.clusterCapacity.vcpu.toLocaleString()),1)])])])])])],64)):(Object(c["h"])(),Object(c["c"])("div",E," Could not find suitable configuration "))])}r("4de4"),r("d81d"),r("4fad"),r("c1f9");var N=r("5530"),Q=r("b85c"),_=r("ade3"),K=(r("a4d3"),r("e01a"),{class:"form-group row"});function J(e,t,r,a,o,l){return Object(c["h"])(),Object(c["c"])("div",K,[Object(c["e"])("label",{class:"col-form-label col",for:e.name},Object(c["l"])(r.description),9,["for"]),Object(c["e"])("select",{disabled:r.readonly,class:"form-control col",value:r.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),name:e.name,id:e.name},[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(l.opts,(function(e,t){return Object(c["h"])(),Object(c["c"])("option",{value:e,key:t},Object(c["l"])(t),9,["value"])})),128))],40,["disabled","value","name","id"])])}r("13d5");var $={props:{options:{},description:{type:String},modelValue:{type:String},readonly:{type:Boolean,default:!1}},computed:{opts:function(e){return e.options instanceof Array?e.options.reduce((function(e,t,r){return Object(N["a"])(Object(N["a"])({},e),{},Object(_["a"])({},t,t))}),{}):e.options}}};$.render=J;var q,I,Z=$,H=730,X=r("2ef0"),Y=r.n(X);(function(e){e["CQL"]="CQL",e["LWT"]="LWT",e["NoLWT"]="NoLWT"})(I||(I={}));var ee={CPU:"vcpu",STORAGE:"storage"},te=(q={},Object(_["a"])(q,I.CQL,{reads:8e3,writes:1e4}),Object(_["a"])(q,I.LWT,{writes:1200,reads:4e3}),Object(_["a"])(q,I.NoLWT,{writes:6e3,reads:4e3}),q),re=.01,ce=2,ae=30,oe={CQL:I.CQL,"Alternator with LWT":I.LWT,"Alternator without LWT":I.NoLWT},le={modes:oe,mode:I.CQL,replicationFactor:3,optimizeFor:ee.CPU},ne={aws:[{name:"i3.large",vcpu:2,memory:15.25,storage:475,hourlyPrice:.327,reservedPrice:155},{name:"i3.xlarge",vcpu:4,memory:30.5,storage:950,hourlyPrice:.654,reservedPrice:310},{name:"i3.2xlarge",vcpu:8,memory:61,storage:1900,hourlyPrice:1.309,reservedPrice:620},{name:"i3.4xlarge",vcpu:16,memory:122,storage:3800,hourlyPrice:2.618,reservedPrice:1240},{name:"i3.8xlarge",vcpu:32,memory:244,storage:7600,hourlyPrice:5.236,reservedPrice:2480},{name:"i3.16xlarge",vcpu:64,memory:488,storage:15200,hourlyPrice:10.471,reservedPrice:4960},{name:"i3en.large",vcpu:2,memory:16,storage:1250,hourlyPrice:.568,reservedPrice:269.83},{name:"i3en.xlarge",vcpu:4,memory:32,storage:2500,hourlyPrice:1.137,reservedPrice:539.75},{name:"i3en.2xlarge",vcpu:8,memory:64,storage:5e3,hourlyPrice:2.274,reservedPrice:1079.5},{name:"i3en.3xlarge",vcpu:12,memory:96,storage:7500,hourlyPrice:3.411,reservedPrice:1619.25},{name:"i3en.6xlarge",vcpu:24,memory:192,storage:15e3,hourlyPrice:6.822,reservedPrice:3238.42},{name:"i3en.12xlarge",vcpu:48,memory:384,storage:3e4,hourlyPrice:13.643,reservedPrice:6476.83},{name:"i3en.24xlarge",vcpu:96,memory:768,storage:6e4,hourlyPrice:27.286,reservedPrice:12953.75}]};function ie(e){return e.nodes*e.instanceType.hourlyPrice}function se(e){return e.nodes*e.instanceType.reservedPrice}function ue(e){return e*H}function de(e){return{storage:e.instanceType.storage*e.nodes,vcpu:e.instanceType.vcpu*e.nodes,memory:e.instanceType.memory*e.nodes}}function be(e){return e<=10?1:e<100?.75:e<1e3?.5:.25}function pe(e,t,r){var c,a=ne.aws,o=[],l=Object(Q["a"])(Y.a.range(t,100*t,t));try{for(l.s();!(c=l.n()).done;){var n,i=c.value,s=Object(Q["a"])(a);try{for(s.s();!(n=s.n()).done;){var u=n.value;u.vcpu*i>=e.vcpu&&u.memory*i>=e.memory&&u.storage*i>=e.storage&&o.push({instanceType:u,nodes:i})}}catch(b){s.e(b)}finally{s.f()}}}catch(b){l.e(b)}finally{l.f()}var d=Y.a.chain(o).map(ie).min().value();Y.a.chain(o).filter();return Y.a.chain(o).filter((function(e){return ie(e)<1.2*d})).sortBy("nodes").head().value()}var Oe={data:function(){return le},props:["workload"],components:{dropdown:Z},computed:{dimensions:function(){return Object.fromEntries(Object.entries(ee))},estimatedResources:function(e){var t=e.workload,r=e.replicationFactor,c=te[e.mode],a=Math.ceil((t.reads/c.reads+t.writes/c.writes)*r/be(t.itemSize)),o=Math.ceil(t.storage/ae)*r,l=t.storage*r*ce;return{vcpu:a,storage:l,memory:o}},cluster:function(e){return pe(e.estimatedResources,e.replicationFactor,e.optimizeFor)},clusterCapacity:function(e){var t=e.cluster,r=te[e.mode],c=de(t),a=c.storage/e.replicationFactor/ce,o=c.vcpu*(r.writes+r.reads)/2/e.replicationFactor,l=.66*o;return Object(N["a"])({sustainedLoad:l,peakLoad:o,dataset:a},c)},prices:function(e){var t=e.workload,r=e.replicationFactor,c=(t.reads+t.writes)*t.itemSize*(r-1)/1e6,a=c*re,o=e.cluster,l=ue(ie(o)),n=se(o);return[{id:"ondemand",name:"On demand",compute:l,dataTransfer:a,total:l+a},{id:"reserved",name:"Reserved",compute:n,dataTransfer:a,total:n+a}]}}};Oe.render=G;var je=Oe,me={class:"pricing container",id:"dynamodb"},ye=Object(c["e"])("h1",null,"DynamoDB",-1),ve=Object(c["e"])("td",null,"Storage",-1),fe=Object(c["e"])("td",null,"Workload (operations)",-1);function ge(e,t,r,a,o,l){return Object(c["h"])(),Object(c["c"])("div",me,[ye,(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(l.prices,(function(e){return Object(c["h"])(),Object(c["c"])("div",{key:e.id,class:"row container"},[Object(c["e"])("a",{"data-toggle":"collapse",href:"#dynamodb-"+e.id+"-price","aria-expanded":"false","aria-controls":"dynamodb-"+e.id+"-price"},Object(c["l"])(e.name)+": "+Object(c["l"])(e.total.toLocaleString(void 0,{style:"currency",currency:"USD"})),9,["href","aria-controls"]),Object(c["e"])("table",{class:"table collapse",id:"dynamodb-"+e.id+"-price"},[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[ve,Object(c["e"])("td",null,Object(c["l"])(e.storage.toLocaleString(void 0,{style:"currency",currency:"USD"})),1)]),Object(c["e"])("tr",null,[fe,Object(c["e"])("td",null,Object(c["l"])(e.ops.toLocaleString(void 0,{style:"currency",currency:"USD"})),1)])])],8,["id"])])})),128))])}var he={wcu:65e-5,rcu:13e-5},we={wcu:.000299232876712328,rcu:592e-7},Se={wcu:1.25,rcu:.25},ke=.25,Le={props:["workload"],computed:{prices:function(e){var t=Math.ceil(e.workload.itemSize)*e.workload.writes,r=Math.ceil(e.workload.itemSize/4)*e.workload.reads,c=e.workload.storage*ke,a=3600*(r*Se.rcu+t*Se.wcu)*H/1e6,o=(t*he.wcu+r*he.rcu)*H,l=(t*we.wcu+r*we.rcu)*H;return[{id:"on-demand",name:"On demand",total:c+a,storage:c,ops:a},{id:"provisioned",name:"Provisioned",total:c+o,storage:c,ops:o},{id:"reserved",name:"Provisioned (1y reserved)",total:c+l,storage:c,ops:l}]}}};Le.render=ge;var Pe=Le,Ce=Object(c["e"])("div",{class:"container pricing",id:"keyspaces"},[Object(c["e"])("h1",null,"AWS Keyspaces")],-1),Te=Object(c["e"])("td",null,"Storage",-1),Ue=Object(c["e"])("td",null,"Workload (operations)",-1);function xe(e,t,r,a,o,l){return Object(c["h"])(),Object(c["c"])(c["a"],null,[Ce,(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(l.prices,(function(e){return Object(c["h"])(),Object(c["c"])("div",{key:e.id,class:"row container"},[Object(c["e"])("a",{"data-toggle":"collapse",href:"#dynamodb-"+e.id+"-price","aria-expanded":"false","aria-controls":"dynamodb-"+e.id+"-price"},Object(c["l"])(e.name)+": "+Object(c["l"])(e.total.toLocaleString(void 0,{style:"currency",currency:"USD"})),9,["href","aria-controls"]),Object(c["e"])("table",{class:"table collapse",id:"dynamodb-"+e.id+"-price"},[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[Te,Object(c["e"])("td",null,Object(c["l"])(e.storage.toLocaleString(void 0,{style:"currency",currency:"USD"})),1)]),Object(c["e"])("tr",null,[Ue,Object(c["e"])("td",null,Object(c["l"])(e.ops.toLocaleString(void 0,{style:"currency",currency:"USD"})),1)])])],8,["id"])])})),128))],64)}var De={wcu:75e-5,rcu:15e-5},Ve={wcu:1.45,rcu:.29},ze=.3,Ae={props:["workload"],computed:{prices:function(e){var t=Math.ceil(e.workload.itemSize)*e.workload.writes,r=Math.ceil(e.workload.itemSize/4)*e.workload.reads,c=e.workload.storage*ze,a=3600*(r*Ve.rcu+t*Ve.wcu)*H/1e6,o=(t*De.wcu+r*De.rcu)*H;return[{id:"on-demand",name:"On demand",total:c+a,storage:c,ops:a},{id:"provisioned",name:"Provisioned",total:c+o,storage:c,ops:o}]}}};Ae.render=xe;var Be=Ae,Me=(r("99af"),{class:"pricing container",id:"datastax-astra"}),Fe=Object(c["e"])("h1",null,"Astra",-1),Re={class:"table"},We=Object(c["e"])("td",null,"Cluster nodes",-1),Ee={class:"card"},Ge=Object(c["e"])("div",{class:"card-header"},[Object(c["e"])("button",{class:"btn btn-link","data-toggle":"collapse","data-target":"#astra-details","aria-expanded":"true","aria-controls":"astra-details"},"More details")],-1),Ne={class:"collapse",id:"astra-details"},Qe=Object(c["e"])("h3",null,"Cluster capacity",-1),_e={class:"table"},Ke=Object(c["e"])("td",null,"Storage (post replication)",-1),Je=Object(c["e"])("td",null,"Sustained throughput",-1),$e=Object(c["e"])("td",null,"Peak throughput",-1),qe=Object(c["e"])("h3",null,"Cluster specs",-1),Ie={class:"table"},Ze=Object(c["e"])("td",null,"Capacity units",-1),He=Object(c["e"])("td",null,"Total vCPU",-1),Xe={key:1,class:"alert alert-warning"},Ye=Object(c["e"])("p",null,"Could not find suitable configuration",-1);function et(e,t,r,a,o,l){var n=Object(c["j"])("dropdown");return Object(c["h"])(),Object(c["c"])("div",Me,[Fe,Object(c["e"])("form",null,[Object(c["e"])(n,{modelValue:e.replicationFactor,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.replicationFactor=t}),readonly:"",options:[3,4,5],description:"Replication factor"},null,8,["modelValue"]),Object(c["e"])(n,{modelValue:e.tier,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.tier=t}),options:e.tiers.concat("AUTOSELECT"),description:"Tier"},null,8,["modelValue","options"])]),e.cluster?(Object(c["h"])(),Object(c["c"])(c["a"],{key:0},[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.prices,(function(e){return Object(c["h"])(),Object(c["c"])("div",{key:e.id,class:"row container"},[Object(c["e"])("a",{"data-toggle":"collapse",href:"#astra-"+e.id+"-price","aria-expanded":"false","aria-controls":"astra"+e.id+"-price"},Object(c["l"])(e.name)+": "+Object(c["l"])(e.total.toLocaleString(void 0,{style:"currency",currency:"USD"})),9,["href","aria-controls"]),Object(c["e"])("div",{class:"collapse",id:"astra-"+e.id+"-price"},[Object(c["e"])("table",Re,[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[We,Object(c["e"])("td",null,Object(c["l"])(e.total.toLocaleString(void 0,{style:"currency",currency:"USD"})),1)])])])],8,["id"])])})),128)),Object(c["e"])("div",Ee,[Ge,Object(c["e"])("div",Ne,[Qe,Object(c["e"])("table",_e,[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[Ke,Object(c["e"])("td",null,Object(c["l"])(e.clusterCapacity.dataset.toLocaleString())+" GB",1)]),Object(c["e"])("tr",null,[Je,Object(c["e"])("td",null,Object(c["l"])(e.clusterCapacity.sustainedLoad.toLocaleString())+" ops/sec",1)]),Object(c["e"])("tr",null,[$e,Object(c["e"])("td",null,Object(c["l"])(e.clusterCapacity.peakLoad.toLocaleString())+" ops/sec",1)])])]),qe,Object(c["e"])("table",Ie,[Object(c["e"])("tbody",null,[Object(c["e"])("tr",null,[Ze,Object(c["e"])("td",null,[Object(c["d"])(Object(c["l"])(e.cluster.capacityUnits)+" x "+Object(c["l"])(e.cluster.instanceType.name)+" ",1),Object(c["e"])("small",null,"("+Object(c["l"])(e.cluster.instanceType.vcpu.toLocaleString())+" vCPUs, "+Object(c["l"])(e.cluster.instanceType.memory.toLocaleString())+"GB RAM, "+Object(c["l"])(e.cluster.instanceType.storage.toLocaleString())+"GB storage)",1)])]),Object(c["e"])("tr",null,[He,Object(c["e"])("td",null,Object(c["l"])(e.clusterCapacity.vcpu.toLocaleString()),1)])])])])])],64)):(Object(c["h"])(),Object(c["c"])("div",Xe,[Ye]))])}var tt={reads:1500,writes:1700},rt=30,ct=[{name:"C10",vcpu:12,memory:48,storage:500,hourlyPrice:2.25},{name:"C20",vcpu:24,memory:96,storage:500,hourlyPrice:3.1},{name:"C40",vcpu:48,memory:192,storage:500,hourlyPrice:4.9},{name:"D10",vcpu:12,memory:48,storage:1536,hourlyPrice:5.42},{name:"D20",vcpu:24,memory:96,storage:1536,hourlyPrice:6.69},{name:"D40",vcpu:48,memory:192,storage:1536,hourlyPrice:9.86}];function at(e){return e*H}function ot(e){return at(e.instanceType.hourlyPrice)*e.capacityUnits}function lt(e){return{storage:e.instanceType.storage*e.capacityUnits,vcpu:e.instanceType.vcpu*e.capacityUnits,memory:e.instanceType.memory*e.capacityUnits}}function nt(e){return e<=10?1:e<100?.75:e<1e3?.5:.25}function it(e,t,r){var c,a=[],o=Object(Q["a"])(Y.a.range(1,500));try{for(o.s();!(c=o.n()).done;){var l,n=c.value,i=Object(Q["a"])(ct);try{for(i.s();!(l=i.n()).done;){var s=l.value;("AUTOSELECT"==r&&s.vcpu*n>e.vcpu&&s.memory*n>e.memory&&s.storage*n>e.storage||s.name==r&&s.vcpu*n>e.vcpu&&s.storage*n>e.storage)&&a.push({instanceType:s,capacityUnits:n})}}catch(d){i.e(d)}finally{i.f()}}}catch(d){o.e(d)}finally{o.f()}var u=Y.a.chain(a).map(ot).min().value();Y.a.chain(a).filter();return Y.a.chain(a).filter((function(e){return ot(e)<1.2*u})).sortBy("capacityUnits").head().value()}var st={replicationFactor:3,tier:"AUTOSELECT",tiers:ct.map((function(e){var t=e.name;return t}))},ut=Object(c["f"])({data:function(){return st},props:["workload"],components:{dropdown:Z},computed:{estimatedResources:function(e){var t=e.workload,r=e.replicationFactor,c=Math.ceil((t.reads/tt.reads+t.writes/tt.writes)*r/nt(t.itemSize)),a=Math.ceil(t.storage/rt)*r;return{vcpu:c,storage:t.storage,memory:a}},cluster:function(e){return it(e.estimatedResources,e.replicationFactor,e.tier)},clusterCapacity:function(e){var t=e.cluster,r=lt(t),c=r.storage,a=r.vcpu*(tt.writes+tt.reads)/2/e.replicationFactor,o=.66*a;return Object(N["a"])({sustainedLoad:o,peakLoad:a,dataset:c},r)},prices:function(e){e.workload,e.replicationFactor;var t=e.cluster,r=ot(t);return[{id:"ondemand",name:"On demand",total:r}]}},render:function(){return console.log("render"),Y.a.isEmpty(this.cluster)?Object(c["g"])("p","No suitable cluster could be slected"):this.$slots.default}});ut.render=et;var dt=ut,bt=Object(c["f"])({data:function(){return{scyllaCalcs:{"Scylla cloud":"ScyllaCloud"},rivalCalcs:{DynamoDB:"DynamoDB",Keyspaces:"keyspaces",Astra:"Astra"},workload:{writes:1e4,reads:5e4,storage:200,itemSize:1},calc1:"ScyllaCloud",calc2:"DynamoDB"}},components:{ScyllaCloud:je,DynamoDB:Pe,Keyspaces:Be,Astra:dt,Dropdown:Z},methods:{copyLink:function(){var e=new URL(window.location.href);Y.a.forEach(this.workload,(function(t,r){e.searchParams.set(r,t.toString())})),navigator.clipboard.writeText(e.toString())}},mounted:function(){var e=new URLSearchParams(window.location.search),t=function(t,r){var c;return Y.a.toNumber(null!==(c=e.get(t))&&void 0!==c?c:r)};this.workload=Y.a.mapValues(this.workload,(function(e,r){return t(r,e)}))},errorCaptured:function(e,t,r){return console.error("Error occurred in Astra component "+e),!1}});bt.render=h;var pt=bt;Object(c["b"])(pt).mount("#app")}});
//# sourceMappingURL=app.9809e1de.js.map