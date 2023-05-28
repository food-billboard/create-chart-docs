"use strict";(self.webpackChunkchart_docs=self.webpackChunkchart_docs||[]).push([[7918],{1310:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3117),r=a(7294),l=a(4334),i=a(5281),c=a(3651),o=a(8596),s=a(9960),d=a(5999),m=a(4996);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v="breadcrumbHomeIcon_YNFT";function f(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(s.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:v})))}var h="breadcrumbsContainer_Z_bl";function p(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(s.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function b(e){var t=e.children,a=e.active,i=e.index,c=e.addMicrodata;return r.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function g(){var e=(0,c.s1)(),t=(0,o.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,h),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(f,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(b,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},5154:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var n=a(7294),r=a(1944),l=a(4700),i=n.createContext(null);function c(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(i.Provider,{value:a},t)}function o(){var e=(0,n.useContext)(i);if(null===e)throw new l.i6("DocProvider");return e}function s(){var e,t=o(),a=t.metadata,l=t.frontMatter,i=t.assets;return n.createElement(r.d,{title:a.title,description:a.description,keywords:l.keywords,image:null!=(e=i.image)?e:l.image})}var d=a(4334),m=a(7524),u=a(49);function v(){var e=o().metadata;return n.createElement(u.Z,{previous:e.previous,next:e.next})}var f=a(3120),h=a(4364),p=a(5281),b=a(5999);function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return n.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function L(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:p.k.common.lastUpdated},n.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(4881),Z=a(6233),_="lastUpdated_vwxv";function k(e){return n.createElement("div",{className:(0,d.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function C(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(p.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",_)},(a||r)&&n.createElement(L,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function T(){var e=o().metadata,t=e.editUrl,a=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,i=e.tags,c=i.length>0,s=!!(t||a||l);return c||s?n.createElement("footer",{className:(0,d.Z)(p.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(k,{tags:i}),s&&n.createElement(C,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var x=a(6043),H=a(3743),U=a(3117),y=a(102),A="tocCollapsibleButton_TO0P",w="tocCollapsibleButtonExpanded_MG3E",M=["collapsed"];function B(e){var t=e.collapsed,a=(0,y.Z)(e,M);return n.createElement("button",(0,U.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",A,!t&&w,a.className)}),n.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var I="tocCollapsible_ETCw",O="tocCollapsibleContent_vkbj",V="tocCollapsibleExpanded_sAul";function S(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,i=(0,x.u)({initialState:!0}),c=i.collapsed,o=i.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(I,!c&&V,a)},n.createElement(B,{collapsed:c,onClick:o}),n.createElement(x.z,{lazy:!0,className:O,collapsed:c},n.createElement(H.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}var P="tocMobile_ITEo";function D(){var e=o(),t=e.toc,a=e.frontMatter;return n.createElement(S,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(p.k.docs.docTocMobile,P)})}var R=a(9407);function z(){var e=o(),t=e.toc,a=e.frontMatter;return n.createElement(R.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var F=a(2503),j=a(2593);function q(e){var t,a,r,l,i=e.children,c=(t=o(),a=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:a.title);return n.createElement("div",{className:(0,d.Z)(p.k.docs.docMarkdown,"markdown")},c&&n.createElement("header",null,n.createElement(F.Z,{as:"h1"},c)),n.createElement(j.Z,null,i))}var G=a(1310),J="docItemContainer_Djhp",Q="docItemCol_VOVn";function W(e){var t,a,r,l,i,c,s=e.children,u=(t=o(),a=t.frontMatter,r=t.toc,l=(0,m.i)(),i=a.hide_table_of_contents,c=!i&&r.length>0,{hidden:i,mobile:c?n.createElement(D,null):void 0,desktop:!c||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(z,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&Q)},n.createElement(f.Z,null),n.createElement("div",{className:J},n.createElement("article",null,n.createElement(G.Z,null),n.createElement(h.Z,null),u.mobile,n.createElement(q,null,s),n.createElement(T,null)),n.createElement(v,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function X(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(c,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(s,null),n.createElement(W,null,n.createElement(a,null))))}},49:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),r=a(7294),l=a(5999),i=a(2244);function c(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(i.Z,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(i.Z,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(4334),l=a(5999),i=a(5281),c=a(4477);function o(e){var t=e.className,a=(0,c.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(4334),l=a(2263),i=a(9960),c=a(5999),o=a(143),s=a(5281),d=a(373),m=a(4477);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,i=e.versionMetadata,c=(0,l.Z)().siteConfig.title,m=(0,o.gA)({failfast:!0}).pluginId,u=(0,d.J)(m).savePreferredVersionName,h=(0,o.Jo)(m),p=h.latestDocSuggestion,b=h.latestVersionSuggestion,g=null!=p?p:(t=b).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:c,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:b.label,to:g.path,onClick:function(){return u(b.name)}})))}function p(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}},4881:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(5999),l=a(5281),i=a(3117),c=a(102),o=a(4334),s="iconEdit_Z9Sw",d=["className"];function m(e){var t=e.className,a=(0,c.Z)(e,d);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(4334),l=a(9960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,c=e.isNext;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},9407:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),r=a(102),l=a(7294),i=a(4334),c=a(3743),o="tableOfContents_bqdL",s=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(c.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3117),r=a(102),l=a(7294),i=a(6668),c=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,c);a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:a.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,a])}function f(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var h=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,b=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,i.L)(),N=null!=b?b:L.tableOfContents.minHeadingLevel,Z=null!=g?g:L.tableOfContents.maxHeadingLevel,_=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,f,N,Z])),l.createElement(h,(0,n.Z)({toc:_,className:c,linkClassName:m},E))}},6233:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(4334),l=a(5999),i=a(9960),c="tag_zVej",o="tagRegular_sFm0",s="tagWithCount_h2kH";function d(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(i.Z,{href:t,className:(0,r.Z)(c,l?s:o)},a,l&&n.createElement("span",null,l))}var m="tags_jXut",u="tag_QGVx";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(d,{label:t,permalink:a}))}))))}}}]);