"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[249],{3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(6540);var a=n(4164),i=n(1213),o=n(7559),s=n(7131),r=n(6535),l=n(2011),c=n(1312),d=n(9022),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,s.e)(),{title:n,description:a,date:o,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.be,{title:n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var p=n(5260),h=n(6676);function f(){const e=(0,h.J)();return(0,u.jsx)(p.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var b=n(7763),v=n(996);function x(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,s.e)(),{nextItem:o,prevItem:c,frontMatter:d,unlisted:g}=a,{hide_table_of_contents:p,toc_min_heading_level:h,toc_max_heading_level:f}=d;return(0,u.jsxs)(r.A,{sidebar:t,toc:!p&&i.length>0?(0,u.jsx)(b.A,{toc:i,minHeadingLevel:h,maxHeadingLevel:f}):void 0,children:[g&&(0,u.jsx)(v.A,{}),(0,u.jsx)(l.A,{children:n}),(o||c)&&(0,u.jsx)(m,{nextItem:o,prevItem:c})]})}function A(e){const t=e.content;return(0,u.jsx)(s.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(f,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),i=n(5195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=n(4848);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(i.A,{...n,linkClassName:r,linkActiveClassName:l})})}},5195:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(6540),i=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>r(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:s}),c=l(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(8774),m=n(4848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const p=a.memo(g);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const h=(0,i.p)(),f=c??h.tableOfContents.minHeadingLevel,b=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:f,maxHeadingLevel:b});return d((0,a.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:b}}),[r,l,f,b])),(0,m.jsx)(p,{toc:v,className:n,linkClassName:r,...g})}},996:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),i=n(1312),o=n(5260),s=n(4848);function r(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(o.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(7293);function m(e){let{className:t}=e;return(0,s.jsx)(u.A,{type:"caution",title:(0,s.jsx)(r,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,{...e})]})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var a=n(6025),i=n(4586),o=n(6803);var s=n(7131);const r=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.hH)(),{metadata:{blogDescription:o,blogTitle:s,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:s,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:o}=e,{date:s,title:d,description:u,lastUpdatedAt:m}=o,g=a.image??i.image,p=i.keywords??[],h=`${t.url}${o.permalink}`,f=m?r(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:u,datePublished:s,...f?{dateModified:f}:{},...l(o.authors),...c(g,n,d),...p?{keywords:p}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,s.e)(),{siteConfig:d}=(0,i.A)(),{withBaseUrl:u}=(0,a.hH)(),{date:m,title:g,description:p,frontMatter:h,lastUpdatedAt:f}=n,b=t.image??h.image,v=h.keywords??[],x=f?r(f):void 0,A=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:g,name:g,description:p,datePublished:m,...x?{dateModified:x}:{},...l(n.authors),...c(b,u,g),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},2011:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(4651),i=n(6540),o=n(5293),s=n(7131),r=n(4848);const l=function(e){const{colorMode:t}=(0,o.G)(),{isBlogPostPage:n}=(0,s.e)(),l="dark"===t?"dark":"light",c=(0,i.useRef)(null);return(0,i.useEffect)((()=>{if(!n)return;const e=c.current.querySelector("iframe.giscus-frame");e?(()=>{const t={setConfig:{theme:l}};e.contentWindow.postMessage({giscus:t},"https://giscus.app")})():(()=>{const e=document.createElement("script");e.src="https://giscus.app/client.js",e.setAttribute("data-repo","review-me-blog/review-me-blog.github.io"),e.setAttribute("data-repo-id","R_kgDOMQ9vRg"),e.setAttribute("data-category","blog comments"),e.setAttribute("data-category-id","DIC_kwDOMQ9vRs4CglTi"),e.setAttribute("data-mapping","pathname"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","bottom"),e.setAttribute("data-theme",l),e.setAttribute("data-lang","ko"),e.crossOrigin="anonymous",e.async=!0,c.current.appendChild(e)})()}),[l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{...e}),n&&(0,r.jsx)("div",{ref:c})]})}}}]);