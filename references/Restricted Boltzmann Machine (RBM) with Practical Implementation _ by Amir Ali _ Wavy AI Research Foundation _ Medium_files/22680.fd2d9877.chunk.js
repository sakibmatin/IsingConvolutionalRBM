(self.webpackChunklite=self.webpackChunklite||[]).push([[22680],{22680:(n,t,e)=>{"use strict";e.d(t,{j7:()=>d,OO:()=>f,iI:()=>p});var o=e(28655),r=e.n(o),i=e(71439),a=e(97217),s=e(15085),c=e(42498);function l(){var n=r()(["\n  fragment shortformPostMetaDescription_post on Post {\n    id\n    metaDescription\n    seoDescription\n    shortformType\n    title\n    ...getPostContentAsString_post\n  }\n  ","\n"]);return l=function(){return n},n}function u(){var n=r()(["\n  fragment postMetaDescription_post on Post {\n    id\n    title\n    seoDescription\n    metaDescription\n    creator {\n      id\n      name\n    }\n    collection {\n      id\n      name\n    }\n    previewContent {\n      subtitle\n    }\n    ...getPostContentAsString_post\n  }\n  ","\n"]);return u=function(){return n},n}var d=function(n){return function(n){var t=n.metaDescription,e=n.seoDescription,o=n.title||"";if(e)return e;if(t)return t;var r=function(n){var t=(0,s.r4)(n,250);return t&&(0,c.N8)(t,200)}(n);if(r.length>150)return r;var i=n.previewContent&&n.previewContent.subtitle||"";if(i.length>140)return i;i.length>0&&(i+=".");var a=(o.length?o+". ":"")+i;if(a.length>140)return a;var l="“".concat(o,"” is published");return n.creator&&n.creator.name&&(l+=" by ".concat(n.creator.name)),n.collection&&n.collection.name&&(l+=" in ".concat(n.collection.name)),"".concat(i," ").concat(l,".")}(n).trim()},f=function(n,t){var e=n.metaDescription,o=n.seoDescription,r=n.shortformType,i=r===a.po.SHORTFORM_TYPE_NOTE||!r;if(o)return o;if(e)return e;if(i&&t){var l=(0,s.r4)(n,350,0);return(0,c.N8)(l,300)}return""},p=(0,i.Ps)(u(),s.bh);(0,i.Ps)(l(),s.bh)},15085:(n,t,e)=>{"use strict";e.d(t,{r4:()=>D,bh:()=>A,yB:()=>C,lO:()=>w,Bg:()=>N,_t:()=>j,bq:()=>L,oS:()=>U,c_:()=>k});var o=e(59713),r=e.n(o),i=e(28655),a=e.n(i),s=e(71439),c=e(93022),l=e(61796),u=e(97217),d=e(44987),f=e(42498);function p(){var n=a()(["\n  fragment shouldIndexPost_post on Post {\n    id\n    firstPublishedAt\n    isLimitedState\n    isShortform\n    shortformType\n    visibility\n    curationStatus\n    creator {\n      name\n      atsQualifiedAt\n      customDomainState {\n        live {\n          status\n          isSubdomain\n        }\n      }\n    }\n    collection {\n      customDomainState {\n        live {\n          status\n          isSubdomain\n        }\n      }\n      creator {\n        atsQualifiedAt\n      }\n      ptsQualifiedAt\n    }\n    noIndex\n    isIndexable\n    ...getPostContentAsString_post\n  }\n  ","\n"]);return p=function(){return n},n}function m(){var n=a()(["\n  fragment shortformPostTitle_post on Post {\n    id\n    title\n    seoTitle\n    ...getPostContentAsString_post\n    ...appendPostContext_post\n    collection {\n      ...maybeAppendProductName_collection\n    }\n  }\n  ","\n  ","\n  ","\n"]);return m=function(){return n},n}function v(){var n=a()(["\n  fragment getTitleForPost_post on Post {\n    id\n    title\n    ...postTitle_post\n    ...getTitleDetails_post\n  }\n  ","\n  ","\n"]);return v=function(){return n},n}function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function g(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){r()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function P(){var n=a()(["\n  fragment postTitle_post on Post {\n    id\n    title\n    seoTitle\n    firstPublishedAt\n    ...getPostContentAsString_post\n    ...appendPostContext_post\n    collection {\n      id\n      name\n      domain\n      ...maybeAppendProductName_collection\n    }\n    creator {\n      name\n    }\n    previewContent {\n      subtitle\n    }\n  }\n  ","\n  ","\n  ","\n"]);return P=function(){return n},n}function b(){var n=a()(["\n  fragment maybeAppendProductName_collection on Collection {\n    id\n    domain\n  }\n"]);return b=function(){return n},n}function y(){var n=a()(["\n  fragment getTitleDetails_post on Post {\n    id\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        ...GetTitleIndexMap_bodyModel\n      }\n    }\n    ...getPostContentAsString_post\n  }\n  ","\n  ","\n"]);return y=function(){return n},n}function x(){var n=a()(["\n  fragment getPostContentAsString_post on Post {\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          text\n          type\n          mixtapeMetadata {\n            href\n          }\n        }\n      }\n    }\n  }\n"]);return x=function(){return n},n}function S(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return T(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?T(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var o=0,r=function(){};return{s:r,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){s=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(s)throw i}}}}function T(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function O(){var n=a()(["\n  fragment appendPostContext_post on Post {\n    id\n    sequence {\n      title\n    }\n    collection {\n      name\n    }\n    creator {\n      name\n    }\n  }\n"]);return O=function(){return n},n}function _(n,t){var e,o,r;return null!==(e=t.sequence)&&void 0!==e&&e.title?n+=" - ".concat(t.sequence.title):null!==(o=t.collection)&&void 0!==o&&o.name?n+=" - ".concat(t.collection.name):null!==(r=t.creator)&&void 0!==r&&r.name&&(n+=" - ".concat(t.creator.name)),n}var I=(0,s.Ps)(O());function D(n){var t,e,o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{includeMixtapeHref:!1},s=a.includeMixtapeHref,c=(null===(t=n.content)||void 0===t||null===(e=t.bodyModel)||void 0===e?void 0:e.paragraphs)||[],l="",u=S(c);try{for(u.s();!(o=u.n()).done;){var d=o.value,f=d.mixtapeMetadata,p=d.text,m=d.type;if(s&&null!=f&&f.href?l+=l?" ".concat(f.href):f.href:"P"===m&&p&&p.length>i&&(l+=l?" ".concat(p):p),l.length>r)break}}catch(n){u.e(n)}finally{u.f()}return l}var A=(0,s.Ps)(x());function C(n){var t=!1,e="";if(n.content&&n.content.bodyModel&&n.content.bodyModel.paragraphs){var o=n.content.bodyModel.paragraphs,r=(0,l.LI)(o).titleIndex;"number"==typeof r&&(e=o[r].text||"",t=!0)}return{hasTitleGraf:t,latestTitle:e}}var M=(0,s.Ps)(y(),A,l.k);function R(n,t,e){return null!=e&&e.domain?n:"".concat(n," - ").concat(t)}var E=(0,s.Ps)(b());function w(n,t){var e,o,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n.seoTitle,a=n.title||"",s=(null===(e=n.previewContent)||void 0===e?void 0:e.subtitle)||"";if(i)return(0,d.p)(i,n.collection&&n.collection.name,t);if(!r)return a.length>50?a:a=R(a=_(a,n),t,n.collection);a.length<33&&s&&(s=(0,f.N8)(s,40),a+=". ".concat(s)),null!==(o=n.creator)&&void 0!==o&&o.name&&(a+=" | by ".concat(n.creator.name));var l="",u=Date.now()-5184e6;n.firstPublishedAt>=u&&(l=" | ".concat((0,c.Z)(n.firstPublishedAt,"LLL, yyyy")));var p=n.collection;return p?p.domain?a+="".concat(l," | ").concat(p.name):a+=" | ".concat(p.name).concat(l," | ").concat(t):a+="".concat(l," | ").concat(t),a}var N=(0,s.Ps)(P(),A,I,E);function j(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C(n),o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=n.title||"",i=e.latestTitle||r,a=g(g({},n),{},{title:i});return w(a,t,o).trim()}var L=(0,s.Ps)(v(),N,M);function U(n,t,e){var o=n.seoTitle,r=n.title||"";return o?(0,d.p)(o,n.collection&&n.collection.name,t):r=R(r=_(r=function(n,t,e){var o=t.shortformType,r=o===u.po.SHORTFORM_TYPE_NOTE||!o;return e||(r?n=D(t,250,0):o===u.po.SHORTFORM_TYPE_LINK&&(n=D(t,250,0,{includeMixtapeHref:!0}))),(0,f.N8)(n,200)}(r,n,e),n),t,n.collection)}function k(n){var t,e,o,r,i=n.noIndex,a=n.collection,s=n.curationStatus,c=n.firstPublishedAt,l=n.isLimitedState,d=n.isShortform,f=n.shortformType,p=n.visibility,m=n.isIndexable,v=f===u.po.SHORTFORM_TYPE_NOTE||!f;if(i)return{shouldIndexPost:!1,indexReason:"noIndex is set"};if(!c)return{shouldIndexPost:!1,indexReason:"draft"};if("PUBLIC"!==p&&"LOCKED"!==p)return{shouldIndexPost:!1,indexReason:"unlisted (PUBLIC | LOCKED)"};if(l)return{shouldIndexPost:!1,indexReason:"limited state"};if(d)if(v){if(D(n,10,0).length<=10)return{shouldIndexPost:!1,indexReason:"insufficient content <=10 chars"}}else if(0===D(n,10,0).length)return{shouldIndexPost:!1,indexReason:"shortform with no commentary"};if(m&&c<16347744e5)return{shouldIndexPost:!0,indexReason:"english, has spam score < 0.5 & published before 10/21/2021"};if((null===(t=n.creator)||void 0===t?void 0:t.atsQualifiedAt)>0||a&&a.ptsQualifiedAt>0)return{shouldIndexPost:!0,indexReason:"author or pub is high-quality"};if(s&&(s===u.Xg.CURATION_STATUS_DISTRIBUTED||s===u.Xg.CURATION_STATUS_DISTRIBUTED_AND_DISABLED))return{shouldIndexPost:!0,indexReason:"curated post"};var h=["DELETED","FAILED","UNSPECIFIED"],g=null==a||null===(e=a.customDomainState)||void 0===e?void 0:e.live,P=null===(o=n.creator)||void 0===o||null===(r=o.customDomainState)||void 0===r?void 0:r.live;return g&&!g.isSubdomain&&!h.includes(g.status)||P&&!P.isSubdomain&&!h.includes(P.status)?{shouldIndexPost:!0,indexReason:"custom domain user or pub"}:{shouldIndexPost:!1,indexReason:"no matching rule"}}(0,s.Ps)(m(),A,I,E),(0,s.Ps)(p(),A)},44987:(n,t,e)=>{"use strict";e.d(t,{N:()=>o,p:()=>r});var o=function(n){return n||"Untitled story"},r=function(n,t,e){return t?"".concat(n," | ").concat(t):e?"".concat(n," | ").concat(e):n}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/22680.fd2d9877.chunk.js.map