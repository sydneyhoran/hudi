"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[87557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Asynchronous Clustering using Hudi",excerpt:"How to setup Hudi for asynchronous clustering",author:"codope",category:"blog",image:"/assets/images/blog/clustering/example_perf_improvement.png"},a=void 0,c={permalink:"/cn/blog/2021/08/23/async-clustering",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-23-async-clustering.md",source:"@site/blog/2021-08-23-async-clustering.md",title:"Asynchronous Clustering using Hudi",description:"In one of the previous blog posts, we introduced a new",date:"2021-08-23T00:00:00.000Z",formattedDate:"August 23, 2021",tags:[],readingTime:6.055,truncated:!0,authors:[{name:"codope"}],prevItem:{title:"Building an ExaByte-level Data Lake Using Apache Hudi at ByteDance",permalink:"/cn/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance"},nextItem:{title:"Reliable ingestion from AWS S3 using Hudi",permalink:"/cn/blog/2021/08/23/s3-events-source"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In one of the ",(0,o.kt)("a",{parentName:"p",href:"/blog/2021/01/27/hudi-clustering-intro"},"previous blog")," posts, we introduced a new\nkind of table service called clustering to reorganize data for improved query performance without compromising on\ningestion speed. We learnt how to setup inline clustering. In this post, we will discuss what has changed since then and\nsee how asynchronous clustering can be setup using HoodieClusteringJob as well as DeltaStreamer utility."))}p.isMDXComponent=!0}}]);