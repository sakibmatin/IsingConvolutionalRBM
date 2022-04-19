(self.webpackChunklite=self.webpackChunklite||[]).push([[70449],{12108:(e,n,i)=>{"use strict";i.d(n,{r:()=>g,f:()=>h});var t=i(28655),a=i.n(t),l=i(71439),o=i(67294),r=i(4381),d=i(77355),u=i(14199),s=i(14646),m=i(46696);function c(){var e=a()(["\n  fragment PublisherLogo_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n"]);return c=function(){return e},e}function g(e){var n=e.clamp,i=void 0===n?1:n,t=e.maxWidth,a=e.maxHeight,l=e.textScale,c=void 0===l?"S":l,g=e.withTextColorSubtle,h=void 0!==g&&g,f=e.customNameColor,v=e.name,k=e.logo,S=e.shouldShowLogo,p=e.leadingTrim,E=void 0!==p&&p,b=e.withWordBreak,w=void 0!==b&&b,_=(0,s.I)(),x=(0,u.n)({name:"heading",scale:c,clamp:i,leadingTrim:E,fontWeight:"NORMAL"}),N=function(e,n){return function(i){return{color:n||i.baseColor.text[e]}}}(h?"normal":"dark",f),C=w?{wordBreak:"break-word"}:{};if(!k||!k.id||!S)return o.createElement("span",{className:_([x,N,C])},v||"");var A=k.id,L=k.originalWidth||100,y=k.originalHeight||100;if(t&&L>t){var T=L/t;L=Math.floor(L/T),y=Math.floor(y/T)}if(a&&y>a){var F=y/a;L=Math.floor(L/F),y=Math.floor(y/F)}return o.createElement(d.x,{width:"".concat(L,"px"),height:"".concat(y,"px")},o.createElement(r.UV,{miroId:A,alt:v||"Publication logo",width:L,height:y,strategy:m._S.Resample}))}var h=(0,l.Ps)(c())},48941:(e,n,i)=>{"use strict";function t(e,n,i){var t=i/n||0,a={xs:{maxHeight:32,maxWidth:320},md:{maxHeight:40,maxWidth:400},xl:{maxHeight:60,maxWidth:600}};return t<=2.5?a={xs:{maxHeight:50,maxWidth:125},md:{maxHeight:70,maxWidth:175},xl:{maxHeight:90,maxWidth:225}}:t<5&&(a={xs:{maxHeight:40,maxWidth:200},md:{maxHeight:50,maxWidth:250},xl:{maxHeight:70,maxWidth:350}}),a[e]}i.d(n,{p:()=>t})},99996:(e,n,i)=>{"use strict";i.d(n,{gY:()=>T,fI:()=>I,uP:()=>H,Ig:()=>P,XN:()=>V});var t,a,l,o,r=i(28655),d=i.n(r),u=i(59713),s=i.n(u),m=i(71439),c=i(67294),g=i(12108),h=i(48941),f=i(43220),v=i(74954),k=i(38722),S=i(4381),p=i(14199),E=i(14646),b=i(97217),w=i(46696);function _(){var e=d()(["\n  fragment MetaHeaderLogo_publisher on Publisher {\n    __typename\n    id\n    name\n    ... on Collection {\n      logo {\n        ...MetaHeaderLogo_imageMetadata\n        ...PublisherLogo_image\n      }\n    }\n    ...auroraHooks_publisher\n  }\n  ","\n  ","\n  ","\n"]);return _=function(){return e},e}function x(){var e=d()(["\n  fragment MetaHeaderLogo_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      nameColor {\n        ...getHexFromColorValue_colorValue\n      }\n      nameTreatment\n      postNameTreatment\n      logoImage {\n        ...MetaHeaderLogo_imageMetadata\n      }\n      logoScale\n    }\n  }\n  ","\n  ","\n"]);return x=function(){return e},e}function N(){var e=d()(["\n  fragment MetaHeaderLogo_imageMetadata on ImageMetadata {\n    id\n    originalWidth\n    originalHeight\n    ...PublisherLogo_image\n  }\n  ","\n"]);return N=function(){return e},e}var C=function(e,n){var i,t,a=null!==(i=null==n?void 0:n.originalWidth)&&void 0!==i?i:0,l=null!==(t=null==n?void 0:n.originalHeight)&&void 0!==t?t:0,o=Math.min(e.width/a,e.height/l);return{width:Math.floor(o*a),height:Math.floor(o*l)}},A=(t={},s()(t,b.w6.HEADER_SCALE_SMALL,{small:{width:175,height:70},large:{width:175,height:70}}),s()(t,b.w6.HEADER_SCALE_MEDIUM,{small:{width:225,height:90},large:{width:225,height:90}}),s()(t,b.w6.HEADER_SCALE_LARGE,{small:{width:275,height:110},large:{width:275,height:110}}),t),L=(a={},s()(a,b.w6.HEADER_SCALE_SMALL,{small:{width:160,height:32},large:{width:240,height:48}}),s()(a,b.w6.HEADER_SCALE_MEDIUM,{small:{width:280,height:56},large:{width:360,height:72}}),s()(a,b.w6.HEADER_SCALE_LARGE,{small:{width:280,height:64},large:{width:520,height:104}}),a),y=(l={},s()(l,b.w6.HEADER_SCALE_SMALL,{small:{width:280,height:24},large:{width:320,height:32}}),s()(l,b.w6.HEADER_SCALE_MEDIUM,{small:{width:280,height:40},large:{width:600,height:60}}),s()(l,b.w6.HEADER_SCALE_LARGE,{small:{width:280,height:60},large:{width:680,height:80}}),l),T=function(e,n){var i,t,a=(null!==(i=null==n?void 0:n.originalWidth)&&void 0!==i?i:0)/(null!==(t=null==n?void 0:n.originalHeight)&&void 0!==t?t:0);return a<=2.5?A[e]:a<5?L[e]:y[e]},F=function(e,n){var i=T(e,n),t=C(i.small,n),a=C(i.large,n);return{width:{xs:"".concat(t.width,"px"),sm:"".concat(t.width,"px"),md:"".concat(a.width,"px"),lg:"".concat(a.width,"px"),xl:"".concat(a.width,"px")},height:{xs:"".concat(t.height,"px"),sm:"".concat(t.height,"px"),md:"".concat(a.height,"px"),lg:"".concat(a.height,"px"),xl:"".concat(a.height,"px")}}},M=(o={},s()(o,b.w6.HEADER_SCALE_SMALL,{xs:"XS",sm:"XS",md:"M",lg:"M",xl:"M"}),s()(o,b.w6.HEADER_SCALE_MEDIUM,{xs:"XS",sm:"XS",md:"L",lg:"L",xl:"L"}),s()(o,b.w6.HEADER_SCALE_LARGE,{xs:"XS",sm:"XS",md:"XL",lg:"XL",xl:"XL"}),o),D={wordBreak:"break-word"},I=function(e){var n,i,t,a=e.customStyleSheet,l=e.publisher,o=e.withTextColorSubtle,r=void 0!==o&&o,d=e.forcedTextScale,u=e.forceSmall,s=void 0!==u&&u,m=(0,E.I)(),f=(null!==(n=null==a?void 0:a.header)&&void 0!==n?n:{}).nameColor,_=(0,v.eQ)(f),x=(0,k.jb)(),N=s?b.w6.HEADER_SCALE_SMALL:null!==(i=null==a||null===(t=a.header)||void 0===t?void 0:t.logoScale)&&void 0!==i?i:x.logoScale,A=[(0,p.n)({name:"heading",scale:M[N],leadingTrim:!0,fontWeight:"NORMAL"}),function(e){return{color:_||e.baseColor.text[r?"normal":"dark"]}},D],L=H(a,l,s),y=L.logo,I=L.shouldShowLogo,R=(null==y?void 0:y.originalHeight)||0,P=(null==y?void 0:y.originalWidth)||0,V=(0,h.p)("xs",R,P);if(d)return c.createElement(g.r,{withTextColorSubtle:r,customNameColor:_,shouldShowLogo:I,maxHeight:35,maxWidth:V.maxWidth,textScale:d,logo:y,name:l.name,clamp:0,leadingTrim:!0,withWordBreak:!0});if(!I||!y)return c.createElement("span",{className:m(A)},l.name||"");var W=T(N,y),U=C(W.large,y);return c.createElement(S.UV,{miroId:y.id,alt:l.name||"Publication logo",width:U.width,height:U.height,strategy:w._S.Resample,rules:F(null!=N?N:x.logoScale,y)})},H=function(e,n,i){var t,a,l,o,r,d=(0,k.jb)(),u=null==e||null===(t=e.header)||void 0===t?void 0:t.logoImage,s=null!==(a=null==e||null===(l=e.header)||void 0===l?void 0:l.nameTreatment)&&void 0!==a?a:d.nameTreatment,m=null!==(o=null==e||null===(r=e.header)||void 0===r?void 0:r.postNameTreatment)&&void 0!==o?o:d.postNameTreatment,c=(0,f.Iq)(n),g=void 0!==u,h="Collection"===n.__typename?n.logo:null,v=c&&g?u:h,S=!(null==v||!v.id)&&s===b.m3.NAME_TREATMENT_LOGO,p=S&&m===b.m3.NAME_TREATMENT_LOGO;return{logo:v,shouldShowLogo:i?p:S}},R=(0,m.Ps)(N(),g.f),P=(0,m.Ps)(x(),v.xW,R),V=(0,m.Ps)(_(),R,g.f,f.C5)},37205:(e,n,i)=>{"use strict";i.d(n,{j:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowerCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},32829:(e,n,i)=>{"use strict";i.d(n,{J:()=>F,d:()=>T});var t=i(63038),a=i.n(t),l=i(67294),o=i(319),r=i.n(o),d=i(82492),u=i.n(d),s=i(46829),m=i(30472),c=i(77355),g=i(47230),h=i(20113),f=i(17193),v=i(32317),k=i(93310),S=i(87691),p=i(43487),E=i(50458),b=function(e){var n=e.follower,i=n.name,t=n.bio,a=void 0===t?"":t,o=(0,p.v9)((function(e){return e.config.authDomain}));return l.createElement(c.x,{padding:"12px 0"},l.createElement(c.x,{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},l.createElement(c.x,{display:"flex",alignItems:"flex-start"},l.createElement(c.x,{marginRight:"20px"},l.createElement(f.Yt,{user:n,scale:"S"})),l.createElement(c.x,{display:"flex",flexDirection:"column",alignItems:"flex-start"},l.createElement(k.r,{href:(0,E.AWr)(n,o)},l.createElement(h.X6,{scale:"XS"},i)),l.createElement(S.F,{scale:"S"},a))),l.createElement(c.x,{marginLeft:"48px"},l.createElement(v.Bv,{buttonSize:"SMALL",user:n,susiEntry:"follow_list"}))))},w=i(78693),_=i(27048),x=i(68216),N={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersDialog_followers_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(r()(w.s.definitions),r()(_.W.definitions),r()(x.$m.definitions))},C={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersDialog_followers"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"followersUserConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_followers_user"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"to"}},{kind:"Field",name:{kind:"Name",value:"from"}},{kind:"Field",name:{kind:"Name",value:"limit"}}]}}]}}]}}]}}].concat(r()(N.definitions))},A={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowersDialogQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_followers"}}]}}]}}].concat(r()(C.definitions))},L=function(e){var n,i,t,a,o,d=e.publisher,f=e.followerCount,v=e.isVisible,k=e.hide,S=(0,s.useQuery)(A,{variables:{id:d.id,pagingInfo:{limit:10}},ssr:!1}),p=S.data,E=S.error,w=S.fetchMore,_=null==p||null===(n=p.user)||void 0===n||null===(i=n.followersUserConnection)||void 0===i?void 0:i.users,x=null==p||null===(t=p.user)||void 0===t||null===(a=t.followersUserConnection)||void 0===a||null===(o=a.pagingInfo)||void 0===o?void 0:o.next;return E||0===f?null:l.createElement(m.V,{isVisible:v,hide:k,withAnimation:!0},l.createElement(c.x,{maxWidth:"550px",sm:{paddingTop:"0"}},l.createElement(c.x,{display:"flex",flexDirection:"column",textAlign:"center",marginBottom:"24px"},l.createElement(h.X6,{scale:"S"},f," Followers")),_&&_.map((function(e){return l.createElement(b,{follower:e,key:e.id})})),x&&l.createElement(c.x,{display:"flex",flexDirection:"column",margin:"24px",alignItems:"center"},l.createElement(g.z,{buttonStyle:"SOCIAL",size:"SMALL",onClick:function(){if(x){var e=x.limit,n=x.to,i=x.from;w({variables:{pagingInfo:{limit:e,to:n,from:i}},updateQuery:function(e,n){var i,t,a,l,o,d,s=n.fetchMoreResult;return u()({},s,{user:{followersUserConnection:{users:[].concat(r()(null!==(i=null===(t=e.user)||void 0===t||null===(a=t.followersUserConnection)||void 0===a?void 0:a.users)&&void 0!==i?i:[]),r()(null!==(l=null==s||null===(o=s.user)||void 0===o||null===(d=o.followersUserConnection)||void 0===d?void 0:d.users)&&void 0!==l?l:[]))}}})}})}}},"Show more followers"))))},y=i(21372),T=function(e){var n,i,t=null!==(n="Collection"===e.__typename?e.subscriberCount:null===(i=e.socialStats)||void 0===i?void 0:i.followerCount)&&void 0!==n?n:0;return{followerCount:t,isFollowerCountVisible:t>0}},F=function(e){var n=e.publisher,i=e.disableLink,t=void 0!==i&&i,o=e.linkStyle,r=void 0===o?"SUBTLE":o,d=e.scale,u=void 0===d?"L":d,s=T(n),m=s.followerCount,c=s.isFollowerCountVisible,g=l.useState(!1),h=a()(g,2),f=h[0],v=h[1],p=!t;if(!c)return null;var E="".concat((0,y.pY)(m)," Follower").concat(1===m?"":"s");return p?l.createElement(l.Fragment,null,l.createElement(S.F,{playwrightClassName:"pw-follower-count",tag:"span",scale:u},l.createElement(k.r,{onClick:function(){return v(!0)},linkStyle:r},E)),l.createElement(L,{hide:function(){return v(!1)},publisher:n,followerCount:m,isVisible:f})):l.createElement(S.F,{tag:"span",scale:u,color:"DARKER"},E)}},43220:(e,n,i)=>{"use strict";i.d(n,{UL:()=>r,GT:()=>d,KW:()=>u,Iq:()=>s,C5:()=>m});var t=i(28655),a=i.n(t),l=i(71439);function o(){var e=a()(["\n  fragment auroraHooks_publisher on Publisher {\n    __typename\n    ... on Collection {\n      isAuroraEligible\n      isAuroraVisible\n      viewerEdge {\n        id\n        isEditor\n      }\n    }\n    ... on User {\n      isAuroraVisible\n    }\n  }\n"]);return o=function(){return e},e}var r=function(e){return!!e&&(e.isAuroraVisible||"Collection"===e.__typename&&e.isAuroraEligible&&e.viewerEdge.isEditor)},d=function(e){return!!e&&e.isAuroraVisible},u=function(e){return!!e&&e.isAuroraVisible},s=function(e){return!!e&&("Collection"===e.__typename?e.isAuroraVisible||e.isAuroraEligible&&e.viewerEdge.isEditor:e.isAuroraVisible)},m=(0,l.Ps)(o())},74954:(e,n,i)=>{"use strict";i.d(n,{eQ:()=>N,xW:()=>C,Z:()=>A,hB:()=>L,MQ:()=>y,BH:()=>T,zO:()=>I});var t=i(50008),a=i.n(t),l=i(63038),o=i.n(l),r=i(28655),d=i.n(r),u=(i(14176),i(45220),i(18446)),s=i.n(u),m=i(1469),c=i.n(m),g=i(71439);function h(){var e=d()(["\n  fragment SupportedTypeStyles_styleNode on StyleNode {\n    type {\n      color\n      fontSize {\n        phone\n        tablet\n        desktop\n      }\n      fontStyle\n      letterSpacing\n      lineHeight {\n        phone\n        tablet\n        desktop\n      }\n      textAlign\n      textDecoration\n      textTransform\n      weight\n    }\n  }\n"]);return h=function(){return e},e}function f(){var e=d()(["\n  fragment SupportedContainerStyles_styleNode on StyleNode {\n    container {\n      backgroundColor\n      borderColor\n      borderRadius\n      borderStyle\n      borderWidth\n      marginBottom\n      marginLeft\n      marginRight\n      marginTop\n      paddingBottom\n      paddingLeft\n      paddingRight\n      paddingTop\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=d()(["\n  fragment getHasCustomBackgroundColor_publisher on Publisher {\n    customStyleSheet {\n      ...getHasCustomBackgroundColor_customStyleSheet\n    }\n  }\n  ","\n"]);return v=function(){return e},e}function k(){var e=d()(["\n  fragment getHasCustomBackgroundColor_customStyleSheet on CustomStyleSheet {\n    id\n    global {\n      colorPalette {\n        background {\n          rgb\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}function S(){var e=d()(["\n  fragment getHasCustomPrimaryColor_publisher on Publisher {\n    customStyleSheet {\n      ...getHasCustomPrimaryColor_customStyleSheet\n    }\n  }\n  ","\n"]);return S=function(){return e},e}function p(){var e=d()(["\n  fragment getHasCustomPrimaryColor_customStyleSheet on CustomStyleSheet {\n    id\n    global {\n      colorPalette {\n        primary {\n          rgb\n        }\n      }\n    }\n  }\n"]);return p=function(){return e},e}function E(){var e=d()(["\n  fragment getOpaqueHexFromColorValue_colorValue on ColorValue {\n    rgb\n  }\n"]);return E=function(){return e},e}function b(){var e=d()(["\n  fragment getHexFromColorValue_colorValue on ColorValue {\n    rgb\n    alpha\n  }\n"]);return b=function(){return e},e}var w,_,x=/^#?([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$|^#?([0-9a-fA-F]{3})([0-9a-fA-F]{1})?$/;!function(e){e.FULL_WIDTH="FULL_WIDTH",e.HALF_WIDTH="HALF_WIDTH"}(w||(w={})),function(e){e.TEXT="TEXT",e.COLOR_PICKER="COLOR_PICKER"}(_||(_={}));var N=function(e){if(!e)return e;var n=e.rgb,i=e.alpha,t="#".concat(n).concat(i||"");return x.exec(t)?t:null},C=(0,g.Ps)(b()),A=function(e,n){if(!e)return e;var i=e.rgb,t="#".concat(i).concat(null!=n?n:"");return x.exec(t)?t:null},L=(0,g.Ps)(E()),y=function(e){var n=x.exec(e);if(!n)return null;var i=o()(n,5),t=i[1],a=i[2],l=i[3],r=i[4];return{rgb:t||l,alpha:a||r||null}},T=function(e){if(!e)return null;var n=/rgba?\((\d+),(\d+),(\d+),?(\d*\.?\d+)?\)/.exec(e.replace(/\s+/g,""))||[],i=o()(n,5),t=[i[1],i[2],i[3],i[4]];return t[3]=t[3]?Math.round(255*+t[3]).toString():"255",{rgb:(t=t.map((function(e){return(+e).toString(16).padStart(2,"0")}))).slice(0,3).join(""),alpha:t[3]||null}},F=(0,g.Ps)(p()),M=((0,g.Ps)(S(),F),(0,g.Ps)(k())),D=((0,g.Ps)(v(),M),function e(n){if("object"===a()(n)&&null!==n){for(var i=0,t=Object.values(n);i<t.length;i++)if(!e(t[i]))return!1;return!0}return null==n||""===n}),I=function e(n,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(!n&&!i)return D(n)&&D(i);if(!i)return D(n);if(!n)return D(i);if("object"!==a()(n))return n===i;if(c()(n)&&c()(i))return s()(n,i);for(var l=0,r=Object.entries(n);l<r.length;l++){var d=o()(r[l],2),u=d[0],m=d[1];if(!t.includes(u)){var g=i[u];if(!e(m,g))return!1}}return!0};(0,g.Ps)(f()),(0,g.Ps)(h())},38722:(e,n,i)=>{"use strict";i.d(n,{Yk:()=>a,jb:()=>l,Jq:()=>o,se:()=>d});var t=i(97217),a={horizontalAlignment:t.v2.START,headerScale:t.w6.HEADER_SCALE_SMALL,logoScale:t.w6.HEADER_SCALE_MEDIUM,backgroundColorDisplayMode:t.PG.COLOR_DISPLAY_MODE_SOLID,backgroundImageDisplayMode:t.zc.IMAGE_DISPLAY_MODE_FILL,backgroundImageVerticalAlignment:t.v2.START,appNameTreatment:t.m3.NAME_TREATMENT_TEXT,postNameTreatment:t.m3.NAME_TREATMENT_LOGO,taglineTreatment:t.KI.TAGLINE_TREATMENT_SIDEBAR,backgroundColor:null,secondaryBackgroundColor:null,postBackgroundColor:null,taglineColor:null,backgroundImage:null,logoImage:null,appNameColor:null,nameColor:null,nameTreatment:t.m3.NAME_TREATMENT_TEXT},l=function(){return a},o=function(){return r()},r=function(){return{font1:{name:t.G7.SANS_SERIF_1},font2:{name:t.G7.SANS_SERIF_1},font3:{name:t.G7.SERIF_2}}},d=function(){return u()},u=function(){return{visibility:t.n$.BLOGROLL_VISIBILITY_SIDEBAR}}},24330:(e,n,i)=>{"use strict";i.d(n,{N:()=>u});var t=i(63038),a=i.n(t),l=i(67294),o=i(32317),r=i(27927),d=i(77355),u=function(e){var n=e.creator,i=e.followButtonSize,t=void 0===i?"REGULAR":i,u=e.shouldHideTooltip,s=void 0!==u&&u,m=e.post,c=e.showMembershipUpsellModal,g=e.showFirstUseToolTip,h=e.susiEntry,f=e.isVisible,v=e.width,k=e.isSubscribeCompact,S=void 0!==k&&k,p=l.useState(!1),E=a()(p,2),b=E[0],w=E[1];return l.createElement(l.Fragment,null,l.createElement(o.Bv,{buttonSize:t,onClick:function(){n.viewerEdge.isFollowing||w(!0)},post:m,user:n,susiEntry:h,width:v}),l.createElement(d.x,{marginLeft:S?"4px":"8px"},l.createElement(r.X,{user:n,showMembershipUpsellModal:c,showPostFollowSubscribeTooltip:b&&!s,hidePostFollowSubscribeTooltip:function(){return w(!1)},showFirstUseToolTip:g,isVisible:f,isCompact:S})))}},98222:(e,n,i)=>{"use strict";i.d(n,{Z:()=>l});var t=i(46829),a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserHasListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"hasList"}}]}}]}}]}}]}}]},l=function(e){var n=e.id,i=e.username;return(0,t.useQuery)(a,{variables:{id:n,username:i},ssr:!1,skip:!n&&!i}).data}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/70449.82757c97.chunk.js.map