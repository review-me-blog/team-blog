"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3142],{7460:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>a,toc:()=>x});var l=r(4848),t=r(8453),o=r(4862),i=r(960),s=r(1012);const c={slug:"exception-response",title:"\uc2a4\ud504\ub9c1\uc5d0\uc11c \uc608\uc678\ub97c \uc798! \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95",authors:["nayonsoso"],tags:["review-me","blog","backend","exception"]},d=void 0,a={permalink:"/blog/exception-response",editUrl:"https://github.com/review-me-blog/review-me-blog.github.io/tree/main/blog/2024-07-22-exception-handling/index.mdx",source:"@site/blog/2024-07-22-exception-handling/index.mdx",title:"\uc2a4\ud504\ub9c1\uc5d0\uc11c \uc608\uc678\ub97c \uc798! \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95",description:"Intro",date:"2024-07-22T00:00:00.000Z",tags:[{inline:!0,label:"review-me",permalink:"/blog/tags/review-me"},{inline:!0,label:"blog",permalink:"/blog/tags/blog"},{inline:!1,label:"backend",permalink:"/blog/tags/backend",description:"\ubc31\uc5d4\ub4dc \uac1c\ubc1c \uc0c1\ud669\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4."},{inline:!0,label:"exception",permalink:"/blog/tags/exception"}],readingTime:11.465,hasTruncateMarker:!1,authors:[{name:"\ub098\uc601\uc11c (\uc0b0\ucd08)",title:"\ub9ac\ubdf0\ubbf8 BE",url:"https://github.com/nayonsoso",imageURL:"https://github.com/nayonsoso.png",key:"nayonsoso"}],frontMatter:{slug:"exception-response",title:"\uc2a4\ud504\ub9c1\uc5d0\uc11c \uc608\uc678\ub97c \uc798! \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95",authors:["nayonsoso"],tags:["review-me","blog","backend","exception"]},unlisted:!1,lastUpdatedAt:1722585106e3,nextItem:{title:"GitHub Actions\ub97c \ud65c\uc6a9\ud55c CI/CD (Self-Hosted Runner)",permalink:"/blog/ci-cd"}},p={authorsImageUrls:[void 0]},x=[{value:"Intro",id:"intro",level:2},{value:"\ud83d\udd0d \uc2a4\ud504\ub9c1\uc758 \uae30\ubcf8 \uc608\uc678 \ucc98\ub9ac \ubc29\uc2dd",id:"-\uc2a4\ud504\ub9c1\uc758-\uae30\ubcf8-\uc608\uc678-\ucc98\ub9ac-\ubc29\uc2dd",level:2},{value:"BasicErrorController",id:"basicerrorcontroller",level:3},{value:"BasicErrorController\uc758 \uc751\ub2f5",id:"basicerrorcontroller\uc758-\uc751\ub2f5",level:3},{value:"BasicErrorController\ub97c \ud1b5\ud55c \uc608\uc678 \ucc98\ub9ac\uc758 \ud55c\uacc4",id:"basicerrorcontroller\ub97c-\ud1b5\ud55c-\uc608\uc678-\ucc98\ub9ac\uc758-\ud55c\uacc4",level:3},{value:"\ud83d\udd0d \uc2a4\ud504\ub9c1\uc774 \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud55c \uc608\uc678 \ucc98\ub9ac \ubc29\uc2dd",id:"-\uc2a4\ud504\ub9c1\uc774-\uc81c\uacf5\ud558\ub294-\ub2e4\uc591\ud55c-\uc608\uc678-\ucc98\ub9ac-\ubc29\uc2dd",level:2},{value:"HandlerExceptionResolver",id:"handlerexceptionresolver",level:3},{value:"HandlerExceptionResolver\uc758 \uad6c\ud604\uccb4\ub4e4",id:"handlerexceptionresolver\uc758-\uad6c\ud604\uccb4\ub4e4",level:3},{value:"\ud83d\udd0d HandlerExceptionResolver\ub97c \ub3d9\uc791\uc2dc\ud0a4\ub294 \uac83\ub4e4",id:"-handlerexceptionresolver\ub97c-\ub3d9\uc791\uc2dc\ud0a4\ub294-\uac83\ub4e4",level:2},{value:"@ExceptionHandler\uc640 @ControllerAdvice",id:"exceptionhandler\uc640-controlleradvice",level:3},{value:"\uc2a4\ud504\ub9c1 \ub0b4\ubd80\uc758 \uae30\ubcf8 \uc608\uc678\ub4e4",id:"\uc2a4\ud504\ub9c1-\ub0b4\ubd80\uc758-\uae30\ubcf8-\uc608\uc678\ub4e4",level:3},{value:"ResponseEntityExceptionHandler",id:"responseentityexceptionhandler",level:3},{value:"\uc5b4\ub5bb\uac8c \ud574\uc57c \uc608\uc678\ub97c \uc798 \uc751\ub2f5\ud560 \uc218 \uc788\uc744\uae4c?",id:"\uc5b4\ub5bb\uac8c-\ud574\uc57c-\uc608\uc678\ub97c-\uc798-\uc751\ub2f5\ud560-\uc218-\uc788\uc744\uae4c",level:2},{value:"1. ExceptionHandler\ub97c \uc0ac\uc6a9\ud558\uc790.",id:"1-exceptionhandler\ub97c-\uc0ac\uc6a9\ud558\uc790",level:3},{value:"2. ControllerAdvice \uc548\uc5d0\uc11c ExceptionHandler\ub97c \uc0ac\uc6a9\ud558\uc790.",id:"2-controlleradvice-\uc548\uc5d0\uc11c-exceptionhandler\ub97c-\uc0ac\uc6a9\ud558\uc790",level:3},{value:"3. \ucd5c\uc0c1\uc704 \uc608\uc678\uc778 Exception\ub97c \ud578\ub4e4\ub9c1\ud558\uc790.",id:"3-\ucd5c\uc0c1\uc704-\uc608\uc678\uc778-exception\ub97c-\ud578\ub4e4\ub9c1\ud558\uc790",level:3},{value:"4. \uc2a4\ud504\ub9c1 \uae30\ubcf8 \uc608\uc678\uc758 \uc751\ub2f5\uc744 \ud1b5\uc77c\ud558\uc790.",id:"4-\uc2a4\ud504\ub9c1-\uae30\ubcf8-\uc608\uc678\uc758-\uc751\ub2f5\uc744-\ud1b5\uc77c\ud558\uc790",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,l.jsxs)(n.p,{children:["\uc790\ubc14 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\uba74 \uc2a4\ub808\ub4dc\uac00 \uc885\ub8cc\ub429\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc2a4\ud504\ub9c1\uc5d0\uc11c\ub294 \uc608\uc678\uac00 \ubc1c\uc0dd\ud574\ub3c4 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc885\ub8cc\ub418\uc9c0 \uc54a\uace0, \uc608\uc678 \uc751\ub2f5\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\n\uc2a4\ud504\ub9c1\uc740 \uc5b4\ub5bb\uac8c \uc608\uc678\ub97c \ucc98\ub9ac\ud558\uae30\uc5d0 \uc774\ub807\uac8c \uc791\ub3d9\ud558\ub294 \uac83\uc77c\uae4c\uc694?\ud83e\udd14\n\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 ",(0,l.jsx)(n.strong,{children:"\uc2a4\ud504\ub9c1\uc5d0\uc11c \uc5b4\ub5bb\uac8c \uc608\uc678\ub97c \ucc98\ub9ac\ud558\ub294\uc9c0\uc640,\n\uc5b4\ub5bb\uac8c\ud574\uc57c \uc608\uc678\ub97c \uc798~ \ucc98\ub9ac\ud560 \uc218 \uc788\ub294\uc9c0"})," \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"-\uc2a4\ud504\ub9c1\uc758-\uae30\ubcf8-\uc608\uc678-\ucc98\ub9ac-\ubc29\uc2dd",children:"\ud83d\udd0d \uc2a4\ud504\ub9c1\uc758 \uae30\ubcf8 \uc608\uc678 \ucc98\ub9ac \ubc29\uc2dd"}),"\n",(0,l.jsxs)(n.p,{children:["\uc5b4\ub5a0\ud55c \uc608\uc678\ucc98\ub9ac\ub3c4 \ud558\uc9c0 \uc54a\uc558\uc744 \ub54c, \uc2a4\ud504\ub9c1\uc5d0\uc11c \uc5b4\ub5a4\uc2dd\uc73c\ub85c \uc608\uc678\uac00 \ucc98\ub9ac\ub420\uae4c\uc694?\n\uc6b0\uc120 \uc2a4\ud504\ub9c1\uc758 \uae30\ubcf8 \uc791\ub3d9 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4.\n\uc2a4\ud504\ub9c1\uc5d0 \uc694\uccad\uc774 \uc624\uba74, ",(0,l.jsx)(n.code,{children:"WAS - Dispatcher Servlet - HandlerMapping - HandlerAdapter - Controller"})," \ub97c \uac70\uccd0 \ub85c\uc9c1\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["\uc774\ub54c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\uba74 \uc608\uc678 \ub0b4\uc6a9\uc740 WAS\uae4c\uc9c0 \uac70\uc2ac\ub7ec \uc62c\ub77c\uac11\ub2c8\ub2e4.\n\uadf8\ub7fc WAS\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ucc98\ub9ac\ud560 \uc218 \uc5c6\ub294 \uc608\uc678\ub77c \ud310\ub2e8\ud558\uc5ec ",(0,l.jsx)(n.strong,{children:"\uc5d0\ub7ec \ucee8\ud2b8\ub864\ub7ec"}),"\ub85c \uc608\uc678 \ub0b4\uc6a9\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4.\n\uc989, \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\uba74 ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"WAS - Controller - WAS - ErrorController"})})," \uc758 \ud750\ub984\uc744 \uac16\uac8c \ub429\ub2c8\ub2e4.\n\uc774 \uacfc\uc815\uc744 \ud1b5\ud574 \uc608\uc678\uac00 \ubc1c\uc0dd\ud574\ub3c4 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc885\ub8cc\ud558\uc9c0 \uc54a\uace0, \ub9c8\uce58 \uc815\uc0c1 \uc694\uccad\uc778 \uac83\ucc98\ub7fc \uc608\uc678 \uc751\ub2f5\uc744 \ubc18\ud658\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h3,{id:"basicerrorcontroller",children:"BasicErrorController"}),"\n",(0,l.jsxs)(n.p,{children:["\uc774\ub54c \ud638\ucd9c\ub418\ub294 \uc5d0\ub7ec \ucee8\ud2b8\ub864\ub7ec\uac00 \ubc14\ub85c ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"BasicErrorController"})})," \uc785\ub2c8\ub2e4.\n\uc2e4\uc81c\ub85c \uc5b4\ub5a0\ud55c \uc608\uc678\ucc98\ub9ac\ub3c4 \ud558\uc9c0 \uc54a\uace0 BasicErrorController\uc5d0 BreakPoint \ub97c \uac78\uc5b4\ub450\uace0 \ub514\ubc84\uae45\ud558\ub2c8,\nBasicErrorController\uc5d0\uc11c \uc608\uc678\uac00 \ud578\ub4e4\ub9c1\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)("p",{style:{textAlign:"center"},children:(0,l.jsx)("img",{src:o.A,style:{width:"100%"}})}),"\n",(0,l.jsx)(n.h3,{id:"basicerrorcontroller\uc758-\uc751\ub2f5",children:"BasicErrorController\uc758 \uc751\ub2f5"}),"\n",(0,l.jsxs)(n.p,{children:["BasicErrorController\ub294 ",(0,l.jsx)(n.code,{children:"DefaultErrorAttributes"}),"\uc758 ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"getErrorAttributes()"})})," \ud568\uc218\ub97c \ud638\ucd9c\ud574\uc11c \uc751\ub2f5\ud560 \ub0b4\uc6a9\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4.\n\uc774\ub54c getErrorAttributes()\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \uc81c\uacf5\ud558\ub294 \uc18d\uc131\uacfc, \uc124\uc815\uc744 \ud1b5\ud574 \ucd94\uac00\ud560 \uc218 \uc788\ub294 \uc18d\uc131\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"timestamp: \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uc2dc\uac04"}),"\n",(0,l.jsx)(n.li,{children:"status: \uc5d0\ub7ec\uc758 Http \uc0c1\ud0dc"}),"\n",(0,l.jsx)(n.li,{children:"error: \uc5d0\ub7ec \ucf54\ub4dc"}),"\n",(0,l.jsx)(n.li,{children:"path: \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c uri"}),"\n",(0,l.jsx)(n.li,{children:"exception: \ucd5c\uc0c1\uc704 \uc608\uc678 \ud074\ub798\uc2a4\uc758 \uc774\ub984(\uc124\uc815 \ud544\uc694)"}),"\n",(0,l.jsx)(n.li,{children:"message: \uc5d0\ub7ec\uc5d0 \ub300\ud55c \ub0b4\uc6a9(\uc124\uc815 \ud544\uc694)"}),"\n",(0,l.jsx)(n.li,{children:"errors: BindingExecption\uc5d0 \uc758\ud574 \uc0dd\uae34 \uc5d0\ub7ec \ubaa9\ub85d(\uc124\uc815 \ud544\uc694)"}),"\n",(0,l.jsx)(n.li,{children:"trace: \uc5d0\ub7ec \uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4(\uc124\uc815 \ud544\uc694)"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'// \uc5b4\ub5a4 \uc124\uc815\ub3c4 \ud558\uc9c0 \uc54a\uc558\uc744 \ub54c\uc758 \uc751\ub2f5\n{\n    "timestamp": "2024-07-21T16:16:40.463+00:00",\n    "status": 500,\n    "error": "Internal Server Error",\n    "path": "/reviews/999"\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-properties",children:"// \ucd94\uac00\ud560 \uc218 \uc788\ub294 \uc18d\uc131\ub4e4\nserver:\n  error:\n    include-message: always\n    include-binding-errors: always\n    include-stacktrace: always\n    include-exception: true\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'// \ubaa8\ub4e0 \uc18d\uc131\uc744 \ucd94\uac00\ud588\uc744 \ub54c\uc758 \uc751\ub2f5\n{\n    "timestamp": "2024-07-21T16:19:58.729+00:00",\n    "status": 500,\n    "error": "Internal Server Error",\n    "exception": "org.springframework.orm.jpa.JpaObjectRetrievalFailureException",\n    "trace": "org.springframework.orm.jpa.JpaObjectRetrievalFailureException\\n\\tat \u2026.",\n    "message": "No message available",\n    "path": "/reviews/999"\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"basicerrorcontroller\ub97c-\ud1b5\ud55c-\uc608\uc678-\ucc98\ub9ac\uc758-\ud55c\uacc4",children:"BasicErrorController\ub97c \ud1b5\ud55c \uc608\uc678 \ucc98\ub9ac\uc758 \ud55c\uacc4"}),"\n",(0,l.jsx)(n.p,{children:"\ud639\uc2dc '\uc774\uac83\ub9cc\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud788 \ud6cc\ub96d\ud55c\ub370?' \ub77c\ub294 \uc0dd\uac01\uc774 \ub4dc\uc2dc\ub098\uc694?\n\ud558\uc9c0\ub9cc \uc774 \ubc29\uc2dd\uc5d0\ub294 \uba87\uac00\uc9c0 \ud55c\uacc4\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4.\n\uccab\uc9f8\ub85c, \uc774 \ubc29\uc2dd\uc740 WAS\uc5d0\uc11c \ucee8\ud2b8\ub864\ub7ec\ub97c \uac70\uccd0, \ub2e4\uc2dc WAS\ub85c \uc654\ub2e4\uac00, \uc5d0\ub7ec \ucee8\ud2b8\ub864\ub7ec\ub85c \uac00\ub294 \ud750\ub984\uc778\ub370\uc694, \uc774 \uacfc\uc815\uc774 \uae38\uace0 \ubcf5\uc7a1\ud558\uac8c \ub290\uaef4\uc9d1\ub2c8\ub2e4.\n\ub610 \uc774\ub294 \ud544\ud130\ub098 \uc778\ud130\uc149\ud130\ub97c 2\ubc88 \ud638\ucd9c\ud558\ub294 \ub4f1 \ub2e4\ub978 \ubb38\uc81c\ub97c \uc57c\uae30\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \uacb0\uc815\uc801\uc73c\ub85c, \uc608\uc678\uc5d0 \ub530\ub77c \ub2e4\ub978 HttpStatusCode\uc640 \uba54\uc138\uc9c0\ub97c \uc904 \uc218\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4\ud83d\ude13"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"-\uc2a4\ud504\ub9c1\uc774-\uc81c\uacf5\ud558\ub294-\ub2e4\uc591\ud55c-\uc608\uc678-\ucc98\ub9ac-\ubc29\uc2dd",children:"\ud83d\udd0d \uc2a4\ud504\ub9c1\uc774 \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud55c \uc608\uc678 \ucc98\ub9ac \ubc29\uc2dd"}),"\n",(0,l.jsx)(n.p,{children:"\uc774\ub7f0 \ub2e8\uc810\uc744 \ubcf4\uc644\ud558\uae30 \uc704\ud574\uc11c, \uc2a4\ud504\ub9c1\uc5d0\uc11c\ub294 \uae30\ubcf8 \uc608\uc678 \ucc98\ub9ac \uc678\uc5d0\ub3c4 \ub2e4\uc591\ud55c \uc608\uc678 \ucc98\ub9ac \ubc29\uc2dd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"handlerexceptionresolver",children:"HandlerExceptionResolver"}),"\n",(0,l.jsx)(n.p,{children:"HandlerExceptionResolver\ub294 \uc608\uc678 \ucc98\ub9ac \ubc29\uc2dd\uc744 \ucd94\uc0c1\ud654\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4.\n\uc774\ub97c \uad6c\ud604\ud558\ub294 \uad6c\ud604\uccb4\ub4e4\uc740 \ubc1c\uc0dd\ud55c \uc608\uc678\ub97c \uce90\uce58\ud558\uc5ec \uc751\ub2f5\uc758 Http \uc0c1\ud0dc\ub098 \uba54\uc138\uc9c0\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"handlerexceptionresolver\uc758-\uad6c\ud604\uccb4\ub4e4",children:"HandlerExceptionResolver\uc758 \uad6c\ud604\uccb4\ub4e4"}),"\n",(0,l.jsx)(n.p,{children:"HandlerExceptionResolver\uc758 \uad6c\ud604\uccb4\ub4e4\uc740 HandlerExceptionResolverComposite\uc5d0 \uc6b0\uc120\uc21c\uc704 \uc21c\uc11c\ub300\ub85c \ube48\uc73c\ub85c \ub4f1\ub85d\ub418\uc5b4 \uad00\ub9ac\ub429\ub2c8\ub2e4."}),"\n",(0,l.jsx)("p",{style:{textAlign:"center"},children:(0,l.jsx)("img",{src:i.A,style:{width:"100%"}})}),"\n",(0,l.jsx)(n.p,{children:"\uadf8\ub9ac\uace0 \uc608\uc678 \ubc1c\uc0dd \uc2dc, \uc6b0\uc120\uc21c\uc704 \uc21c\uc73c\ub85c \uad6c\ud604\uccb4\ub4e4\uc744 \uc21c\ud68c\ud558\uba70 \ud578\ub4e4\ub9c1\uc744 \ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class HandlerExceptionResolverComposite implements HandlerExceptionResolver, Ordered {\n\n\t@Override\n\t@Nullable\n\tpublic ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, @Nullable Object handler, Exception ex) {\n\t\tif (this.resolvers != null) {\n                        // \uad6c\ud604\uccb4\ub4e4\uc744 \uc21c\ud68c\ud558\uba74\uc11c \uc608\uc678\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\n\t\t\tfor (HandlerExceptionResolver handlerExceptionResolver : this.resolvers) {\n\t\t\t\tModelAndView mav = handlerExceptionResolver.resolveException(request, response, handler, ex);\n\t\t\t\tif (mav != null) {\n\t\t\t\t\treturn mav;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn null;\n\t}\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\ube48\uc73c\ub85c \ub4f1\ub85d\ub41c HandlerExceptionResolver \uad6c\ud604\uccb4\uacfc \uadf8\uac83\uc774 \ucc98\ub9ac\ud558\ub294 \ub300\uc0c1\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"ExceptionHandlerExceptionResolver"})," : ExceptionHandler\ub97c \ucc98\ub9ac"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"ResponseStatusExceptionResolver"})," : ResponseStatus, ResponseStatusException\ub97c \ucc98\ub9ac"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"DefaultHandlerExceptionResolver"})," : \uc2a4\ud504\ub9c1 \ub0b4\ubd80\uc758 \uae30\ubcf8 \uc608\uc678\ub4e4\uc744 \ucc98\ub9ac"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\ud558\uc9c0\ub9cc ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"ResponseStatusExceptionResolver"})})," \ub9cc\uc73c\ub85c\ub294 \uc5d0\ub7ec \uc751\ub2f5\uc744 \uc218\uc815\ud560 \uc218 \uc5c6\uc73c\uba70, \uc77c\uad04 \uc5d0\ub7ec \ucc98\ub9ac\ub97c \ud560 \uc218 \uc5c6\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc73c\ubbc0\ub85c \uc774\ubc88 \uae00\uc5d0\uc11c\ub294 \uc124\uba85\ud558\uc9c0 \uc54a\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"-handlerexceptionresolver\ub97c-\ub3d9\uc791\uc2dc\ud0a4\ub294-\uac83\ub4e4",children:"\ud83d\udd0d HandlerExceptionResolver\ub97c \ub3d9\uc791\uc2dc\ud0a4\ub294 \uac83\ub4e4"}),"\n",(0,l.jsx)(n.h3,{id:"exceptionhandler\uc640-controlleradvice",children:"@ExceptionHandler\uc640 @ControllerAdvice"}),"\n",(0,l.jsxs)(n.p,{children:["@ExceptionHandler\ub294 \uac00\uc7a5 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc740 \uc608\uc678 \ud578\ub4e4\ub7ec\uc778 ",(0,l.jsx)(n.strong,{children:"ExceptionHandler ExceptionResolver"}),"\uc5d0\uc11c \ucc98\ub9ac\ub429\ub2c8\ub2e4.\n@ExceptionHandler\ub294 \uc608\uc678 \uc751\ub2f5\uc758 \ucf54\ub4dc\uc640 ",(0,l.jsx)(n.strong,{children:"\uba54\uc138\uc9c0\ub97c \uc790\uc720\ub86d\uac8c \uc124\uc815"}),"\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n@ExceptionHandler\ub294 \ucee8\ud2b8\ub864\ub7ec\uc758 \uba54\uc11c\ub4dc\uc5d0 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc73c\uba70, @ControllerAdvice\ub098 @RestControllerAdvice\uac00 \uc788\ub294 \ud074\ub798\uc2a4\uc758 \uba54\uc18c\ub4dc\uc5d0\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub9cc\uc57d \ucee8\ud2b8\ub864\ub7ec\uc758 \uba54\uc11c\ub4dc\uc5d0\ub3c4 @ExceptionHandler\ub97c \uc0ac\uc6a9\ud558\uace0, @ControllerAdvice\uc5d0\ub3c4 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc804\uc790\uac00 \uc6b0\uc120\uc2dc\ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h3,{id:"\uc2a4\ud504\ub9c1-\ub0b4\ubd80\uc758-\uae30\ubcf8-\uc608\uc678\ub4e4",children:"\uc2a4\ud504\ub9c1 \ub0b4\ubd80\uc758 \uae30\ubcf8 \uc608\uc678\ub4e4"}),"\n",(0,l.jsxs)(n.p,{children:["\uc2a4\ud504\ub9c1\uc5d0\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uae30\ubcf8 \uc608\uc678\ub4e4\uc740 \ubbf8\ub9ac \uc815\uc758\ub418\uc5b4, ",(0,l.jsx)(n.strong,{children:"DefaultHandler ExceptionResolver"}),"\uc5d0\uc11c \ucc98\ub9ac\ub429\ub2c8\ub2e4.\n\ub300\ud45c\uc801\uc778 \uc608\uc678\ub85c\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 HttpMethod \ub85c \uc694\uccad\uc744 \ubcf4\ub0bc \ub54c \ubc1c\uc0dd\ud558\ub294 HttpRequestMethod NotSupportedException\uac00 \uc788\uc2b5\ub2c8\ub2e4.\nDefaultHandler ExceptionResolver\ub294 \uc5d0\ub7ec\ub97c \ud578\ub4e4\ub9c1\ud574\uc11c \uc5b4\ub5a4 \uae30\ubcf8 \uc608\uc678\uc778\uc9c0 \ud310\ubcc4\ud558\ub294 \uc5ed\ud560\uae4c\uc9c0\ub9cc \ud558\ubbc0\ub85c, \uc9c1\uc811 \uc608\uc678 \uc751\ub2f5\uc744 \ubc18\ud658\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ucd5c\uc885\uc801\uc73c\ub85c ",(0,l.jsx)(n.strong,{children:"BasicController\ub97c \ud1b5\ud574\uc11c \uc608\uc678 \uc751\ub2f5\uc744 \ubc18\ud658"}),"\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)("p",{style:{textAlign:"center"},children:(0,l.jsx)("img",{src:s.A,style:{width:"100%"}})}),"\n",(0,l.jsx)(n.h3,{id:"responseentityexceptionhandler",children:"ResponseEntityExceptionHandler"}),"\n",(0,l.jsxs)(n.p,{children:["\uc5ec\uae30\uae4c\uc9c0 \uc77d\uc73c\uc2dc\uba70 \uc774\uc0c1\ud568\uc744 \ub290\ub07c\uc168\ub098\uc694?\ud83d\ude33\nExceptionHandler\ub97c \uc0ac\uc6a9\ud558\uba74 \uc608\uc678 \uc751\ub2f5 \ud615\uc2dd\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ubc18\uba74 \uc2a4\ud504\ub9c1 \uae30\ubcf8 \uc608\uc678\ub294 DefaultHandler ExceptionResolver\ub85c \ucc98\ub9ac\ub418\uae30 \ub54c\ubb38\uc5d0 BasicController\uc758 \uc751\ub2f5 \ud615\uc2dd\uc744 \ub530\ub974\uac8c \ub429\ub2c8\ub2e4.\n\ub530\ub77c\uc11c ",(0,l.jsx)(n.strong,{children:"ExceptionHandler\ub85c \ucc98\ub9ac\ub418\ub294 \uc608\uc678\uc640, \uae30\ubcf8 \uc608\uc678\uc758 \uc751\ub2f5 \ud615\uc2dd\uc774 \ub2e4\ub974\ub2e4"}),"\ub294 \ubb38\uc81c\uac00 \uc0dd\uae30\uac8c \ub429\ub2c8\ub2e4.\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc2a4\ud504\ub9c1\uc740 ",(0,l.jsx)(n.strong,{children:"ResponseEntity ExceptionHandler"})," \ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["ResponseEntity ExceptionHandler\ub294 ",(0,l.jsx)(n.strong,{children:"\uc2a4\ud504\ub9c1 \uae30\ubcf8 \uc608\uc678\uc5d0 \ub300\ud55c \ud578\ub4e4\ub9c1\uc744 \ubbf8\ub9ac \uc815\uc758"}),"\ud574\ub454 \ucd94\uc0c1 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4.\n\ub530\ub77c\uc11c ControllerAdvice\uac00 ResponseEntity ExceptionHandler\ub97c \uc0c1\uc18d\ud558\uac8c \ud558\ub294\uac83 \ub9cc\uc73c\ub85c \uc2a4\ud504\ub9c1 \uae30\ubcf8 \uc608\uc678\ub97c \ud578\ub4e4\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c ResponseEntity ExceptionHandler\ub294 \ubaa8\ub4e0 \uae30\ubcf8 \uc608\uc678\ub97c ",(0,l.jsx)(n.strong,{children:"handleExceptionInternal()"})," \ud568\uc218\ub85c \ucc98\ub9ac\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0,\n\uc774 \ud568\uc218\ub97c \uc624\ubc84\ub77c\uc774\ub529\ud574\uc90c\uc73c\ub85c\uc368, \ubaa8\ub4e0 \uae30\ubcf8 \uc608\uc678\uc758 \uc751\ub2f5\uc744 \ucee4\uc2a4\ud140 \uc608\uc678 \uc751\ub2f5\ud615\uc2dd\uc73c\ub85c \ud1b5\uc77c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\uc5b4\ub5bb\uac8c-\ud574\uc57c-\uc608\uc678\ub97c-\uc798-\uc751\ub2f5\ud560-\uc218-\uc788\uc744\uae4c",children:"\uc5b4\ub5bb\uac8c \ud574\uc57c \uc608\uc678\ub97c \uc798 \uc751\ub2f5\ud560 \uc218 \uc788\uc744\uae4c?"}),"\n",(0,l.jsx)(n.p,{children:"\uc5ec\uae30\uae4c\uc9c0 \uc6b0\ub9ac\ub294 \uc2a4\ud504\ub9c1\uc5d0\uc11c \uc608\uc678\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd24\uc2b5\ub2c8\ub2e4.\n\uadf8\ub7fc \uc774\ub4e4\uc744 \ubc14\ud0d5\uc73c\ub85c \uc6b0\ub9ac\ub294 \uc5b4\ub5bb\uac8c \uc608\uc678\ub97c \uc798 \ucc98\ub9ac\ud558\uace0, \uc798 \uc751\ub2f5\ud560 \uc218 \uc788\uc744\uae4c\uc694?\ud83e\udd14\n\uc81c\uac00 \uc138\uc6b4 \uae30\uc900\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"1-exceptionhandler\ub97c-\uc0ac\uc6a9\ud558\uc790",children:"1. ExceptionHandler\ub97c \uc0ac\uc6a9\ud558\uc790."}),"\n",(0,l.jsx)(n.p,{children:"\uc2a4\ud504\ub9c1\uc758 \uae30\ubcf8 \uc608\uc678 \ucc98\ub9ac \ubc29\uc2dd\uc778 BasicErrorController \ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc740,\nhttp status code \uc640 \uc608\uc678 \uba54\uc138\uc9c0\ub97c \uc9c0\uc815\ud560 \uc218 \uc5c6\ub2e4\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.\nExceptionHandler \ub97c \uc0ac\uc6a9\ud574\uc11c \uc720\uc5f0\ud558\uac8c \uc608\uc678\ub97c \ud578\ub4e4\ub9c1\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"2-controlleradvice-\uc548\uc5d0\uc11c-exceptionhandler\ub97c-\uc0ac\uc6a9\ud558\uc790",children:"2. ControllerAdvice \uc548\uc5d0\uc11c ExceptionHandler\ub97c \uc0ac\uc6a9\ud558\uc790."}),"\n",(0,l.jsx)(n.p,{children:"ExceptionHandler\ub97c \uc0ac\uc6a9\ud574\uc11c \uac01 \ucee8\ud2b8\ub864\ub7ec\ub9c8\ub2e4 \uc608\uc678\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc740 \uc911\ubcf5\ub418\ub294 \ucf54\ub4dc\uac00 \ub9ce\uc744 \uac83\uc785\ub2c8\ub2e4.\n\ub610\ud55c \uc5b4\ub5a4 \ucee8\ud2b8\ub864\ub7ec\uc5d0\ub294 ExceptionHandler\ub97c \ubd99\uc774\uace0, \ub2e4\ub978 \ucee8\ud2b8\ub864\ub7ec\uc5d0\ub294 \ubd99\uc774\uc9c0 \uc54a\ub294 \ub4f1\uc758 \ub204\ub77d\ub3c4 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc608\uc678 \ud578\ub4e4\ub9c1\uc744 \uc804\uc5ed\uc73c\ub85c \ud560 \uc218 \uc788\ub294 ControllerAdvice \uc548\uc5d0\uc11c ExceptionHandler\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"3-\ucd5c\uc0c1\uc704-\uc608\uc678\uc778-exception\ub97c-\ud578\ub4e4\ub9c1\ud558\uc790",children:"3. \ucd5c\uc0c1\uc704 \uc608\uc678\uc778 Exception\ub97c \ud578\ub4e4\ub9c1\ud558\uc790."}),"\n",(0,l.jsxs)(n.p,{children:["\ucd5c\uc0c1\uc704 \uc608\uc678\uc5d0 \ub300\ud55c \ud578\ub4e4\ub9c1\uc744 \ud558\uc9c0 \uc54a\ub294\ub2e4\uba74, ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"BasicController"})})," \ub97c \ud1b5\ud574 \uc751\ub2f5\ub418\ub294 \uc608\uc678\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub807\ub2e4\uba74 \uc6b0\ub9ac\uac00 \uc815\uc758\ud55c \ucee4\uc2a4\ud140 \uc608\uc678 \uc751\ub2f5\uacfc \ub2e4\ub978 \ud615\uc2dd\uc774 \ub418\ubbc0\ub85c, \uc77c\uad00\uc131\uc774 \uae68\uc9c0\uac8c \ub429\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ucd5c\uc0c1\uc704 \uc608\uc678\uc5d0 \ub300\ud574 \ucc98\ub9ac\ub97c \ud574\uc918\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h3,{id:"4-\uc2a4\ud504\ub9c1-\uae30\ubcf8-\uc608\uc678\uc758-\uc751\ub2f5\uc744-\ud1b5\uc77c\ud558\uc790",children:"4. \uc2a4\ud504\ub9c1 \uae30\ubcf8 \uc608\uc678\uc758 \uc751\ub2f5\uc744 \ud1b5\uc77c\ud558\uc790."}),"\n",(0,l.jsx)(n.p,{children:"\ub9c8\ucc2c\uac00\uc9c0\ub85c \uc77c\uad00\uc131\uc744 \uc704\ud574 \uc2a4\ud504\ub9c1 \uae30\ubcf8 \uc608\uc678\uc758 \uc751\ub2f5\ub3c4 \ud1b5\uc77c\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c ControllerAdvice\uc5d0\uc11c ResponseEntityExceptionHandler\ub97c \uc0c1\uc18d\ud558\uace0, handleExceptionInternal() \ud568\uc218\ub97c \uc624\ubc84\ub77c\uc774\ub529\ud574\uc918\uc57c \ud569\ub2c8\ub2e4."})]})}function v(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4862:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/BasicErrorControllerDebugging-9e7433c3538a8ed8eed1554dd65073c0.png"},1012:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/DefaultHandlerExceptionResolver-1934477ed9f0c0121039d95e599db76b.png"},960:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/HandlerExceptionResolverComposite-afdfcaef06c2decbd2fe07f7693029b0.png"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var l=r(6540);const t={},o=l.createContext(t);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);