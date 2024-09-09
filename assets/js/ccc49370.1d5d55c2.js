"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3249],{3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});n(6540);var o=n(4164),a=n(1213),s=n(7559),i=n(7131),c=n(6535),r=n(2011),l=n(1312),d=n(9022),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(l.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(l.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,i.e)(),{title:n,description:o,date:s,tags:c,authors:r,frontMatter:l}=t,{keywords:d}=l,m=e.image??l.image;return(0,u.jsxs)(a.be,{title:n,description:o,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")})]})}var p=n(5260),h=n(6676);function b(){const e=(0,h.J)();return(0,u.jsx)(p.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=n(7763),x=n(996);function v(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:a}=(0,i.e)(),{nextItem:s,prevItem:l,frontMatter:d,unlisted:g}=o,{hide_table_of_contents:p,toc_min_heading_level:h,toc_max_heading_level:b}=d;return(0,u.jsxs)(c.A,{sidebar:t,toc:!p&&a.length>0?(0,u.jsx)(f.A,{toc:a,minHeadingLevel:h,maxHeadingLevel:b}):void 0,children:[g&&(0,u.jsx)(x.A,{}),(0,u.jsx)(r.A,{children:n}),(s||l)&&(0,u.jsx)(m,{nextItem:s,prevItem:l})]})}function k(e){const t=e.content;return(0,u.jsx)(i.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,o.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(b,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var o=n(4164),a=n(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(4848);const c="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function l(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,o.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(a.A,{...n,linkClassName:c,linkActiveClassName:r})})}},5195:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(6540),a=n(6342);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):o.push(a)})),o}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>c(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function l(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,o.useRef)(void 0),n=l();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let a=t;a<=n;a+=1)o.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),l=r(c,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var u=n(8774),m=n(4848);function g(e){let{toc:t,className:n,linkClassName:o,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:o})]},e.id)))}):null}const p=o.memo(g);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:u,...g}=e;const h=(0,a.p)(),b=l??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:f});return d((0,o.useMemo)((()=>{if(c&&r)return{linkClassName:c,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:f}}),[c,r,b,f])),(0,m.jsx)(p,{toc:x,className:n,linkClassName:c,...g})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var o=n(6025),a=n(4586),s=n(6803);var i=n(7131);const c=e=>new Date(e).toISOString();function r(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function l(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.A)(),{withBaseUrl:n}=(0,o.hH)(),{metadata:{blogDescription:s,blogTitle:i,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:i,description:s,blogPost:e.items.map((e=>function(e,t,n){const{assets:o,frontMatter:a,metadata:s}=e,{date:i,title:d,description:u,lastUpdatedAt:m}=s,g=o.image??a.image,p=a.keywords??[],h=`${t.url}${s.permalink}`,b=m?c(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:u,datePublished:i,...b?{dateModified:b}:{},...r(s.authors),...l(g,n,d),...p?{keywords:p}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,s.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,i.e)(),{siteConfig:d}=(0,a.A)(),{withBaseUrl:u}=(0,o.hH)(),{date:m,title:g,description:p,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],v=b?c(b):void 0,k=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:g,name:g,description:p,datePublished:m,...v?{dateModified:v}:{},...r(n.authors),...l(f,u,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},2011:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(4651),a=n(6540),s=n(5293),i=n(7131),c=n(4848);const r=function(e){const{colorMode:t}=(0,s.G)(),{isBlogPostPage:n}=(0,i.e)(),r="dark"===t?"dark":"light",l=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(!n)return;const e=l.current.querySelector("iframe.giscus-frame");e?(()=>{const t={setConfig:{theme:r}};e.contentWindow.postMessage({giscus:t},"https://giscus.app")})():(()=>{const e=document.createElement("script");e.src="https://giscus.app/client.js",e.setAttribute("data-repo","review-me-blog/review-me-blog.github.io"),e.setAttribute("data-repo-id","R_kgDOMQ9vRg"),e.setAttribute("data-category","blog comments"),e.setAttribute("data-category-id","DIC_kwDOMQ9vRs4CglTi"),e.setAttribute("data-mapping","pathname"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","bottom"),e.setAttribute("data-theme",r),e.setAttribute("data-lang","ko"),e.crossOrigin="anonymous",e.async=!0,l.current.appendChild(e)})()}),[r]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.A,{...e}),n&&(0,c.jsx)("div",{ref:l})]})}},1202:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(6540),a=n(2303),s=n(4164),i=n(6058),c=n(7559),r=n(4291);const l={codeBlockContainer:"codeBlockContainer_APcc"};var d=n(4848);function u(e){let{as:t,...n}=e;const o=(0,i.A)(),a=(0,r.M$)(o);return(0,d.jsx)(t,{...n,style:a,className:(0,s.A)(n.className,l.codeBlockContainer,c.G.common.codeBlock)})}const m={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function g(e){let{children:t,className:n}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,s.A)(m.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:m.codeBlockLines,children:t})})}var p=n(6342),h=n(6591),b=n(1765);const f={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function x(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:a,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=a({line:t,className:(0,s.A)(n,o&&f.codeLine)}),r=t.map(((e,t)=>(0,d.jsx)("span",{...i({token:e})},t)));return(0,d.jsxs)("span",{...c,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:f.codeLineNumber}),(0,d.jsx)("span",{className:f.codeLineContent,children:r})]}):r,(0,d.jsx)("br",{})]})}var v=n(6861),k=n(1312),A=n(1473),j=n(4115);const B={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function L(e){let{code:t,className:n}=e;const[a,i]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),r=(0,o.useCallback)((()=>{(0,v.A)(t),i(!0),c.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":a?(0,k.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,k.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,k.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,B.copyButton,a&&B.copyButtonCopied),onClick:r,children:(0,d.jsxs)("span",{className:B.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(A.A,{className:B.copyButtonIcon}),(0,d.jsx)(j.A,{className:B.copyButtonSuccessIcon})]})})}var N=n(5048);const C={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function y(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,k.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,o&&C.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,d.jsx)(N.A,{className:C.wordWrapButtonIcon,"aria-hidden":"true"})})}function _(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:c,language:l}=e;const{prism:{defaultLanguage:g,magicComments:f}}=(0,p.p)(),v=function(e){return e?.toLowerCase()}(l??(0,r.Op)(n)??g),k=(0,i.A)(),A=(0,h.f)(),j=(0,r.wt)(o)||a,{lineClassNames:B,code:N}=(0,r.Li)(t,{metastring:o,language:v,magicComments:f}),C=c??(0,r._u)(o);return(0,d.jsxs)(u,{as:"div",className:(0,s.A)(n,v&&!n.includes(`language-${v}`)&&`language-${v}`),children:[j&&(0,d.jsx)("div",{className:m.codeBlockTitle,children:j}),(0,d.jsxs)("div",{className:m.codeBlockContent,children:[(0,d.jsx)(b.f4,{theme:k,code:N,language:v??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:a,getTokenProps:i}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:A.codeBlockRef,className:(0,s.A)(t,m.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,s.A)(m.codeBlockLines,C&&m.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,d.jsx)(x,{line:e,getLineProps:a,getTokenProps:i,classNames:B[t],showLineNumbers:!0},t)))})})}}),(0,d.jsxs)("div",{className:m.buttonGroup,children:[(A.isEnabled||A.isCodeScrollable)&&(0,d.jsx)(y,{className:m.codeButton,onClick:()=>A.toggle(),isEnabled:A.isEnabled}),(0,d.jsx)(L,{className:m.codeButton,code:N})]})]})]})}function w(e){let{children:t,...n}=e;const s=(0,a.A)(),i=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof i?_:g;return(0,d.jsx)(c,{...n,children:i},String(s))}}}]);