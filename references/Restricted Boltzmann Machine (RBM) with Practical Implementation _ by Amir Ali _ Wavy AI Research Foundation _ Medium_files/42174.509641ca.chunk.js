(self.webpackChunklite=self.webpackChunklite||[]).push([[42174],{42174:(e,n,t)=>{"use strict";t.d(n,{Go:()=>et,aU:()=>tt,Mv:()=>nt,I_:()=>lt});var r=t(28655),l=t.n(r),a=t(63038),o=t.n(a),i=t(59713),u=t.n(i),c=t(71439),s=t(67294),m=t(54476),d=t(25885),h=t(27403),g=t(14646);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var v=s.createElement("path",{d:"M0 .5h14M0 7h14M0 13.5h14"});const f=function(e){return s.createElement("svg",p({width:14,height:14},e),v)};var b=function(e){return{stroke:e.baseColor.fill.lighter}},E={display:"flex",alignItems:"center",justifyContent:"center",margin:"0px",border:"0px",padding:"0px",cursor:"pointer"};function _(e){var n=e.onClick,t=e.ariaLabel,r=void 0===t?"expand":t,l=(0,g.I)();return s.createElement("button",{className:l(E),onClick:n,"aria-label":r},s.createElement(f,{className:l(b)}))}var S=t(71652),y=t(84683),x=t(1451),L=t(72719),k=t(86668),P=t(5796),M=t(60406),C=t(90878),I=t(44803),A=t(18037),w=t(31889),T=t(87879),H=function(e){var n,t,r,l,a,i,u=e.children,c=e.rules,m=void 0===c?{}:c,d=(0,g.I)(),h={borderRadius:"1000px",backgroundColor:(n=(0,w.F)(),t=(0,T.n2)(n.backgroundColor),r=o()(t,3),l=r[0],a=r[1],i=r[2],(0,T.JX)([l,a,i,.8]))};return s.createElement("div",{className:d([h,m])},u)},R=t(30408),N=t(6443),B=t(67701),D=t(17193),V=t(27048),U=t(62685),O=t(77355),F=t(66411),z=t(97217);function G(){var e=l()(["\n  fragment MetaHeaderActions_post on Post {\n    ...MetabarButtonConversionLI_post\n    isLocked\n    pendingCollection {\n      ...MetaHeaderActions_collection_common\n    }\n    ...MetabarPostMenuButton_post\n  }\n  ","\n  ","\n  ","\n"]);return G=function(){return e},e}function j(){var e=l()(["\n  fragment MetaHeaderActions_publisher on Publisher {\n    __typename\n    ...MetaHeaderPubMenu_publisher\n    ...SearchWidget_publisher\n    ... on Collection {\n      id\n      creator {\n        id\n      }\n      customStyleSheet {\n        navigation {\n          navItems {\n            name\n          }\n        }\n      }\n      ...CollectionAvatar_collection\n      ...CollectionMetabarActionsPopover_collection\n      ...MetaHeaderActions_collection_common\n    }\n    ... on User {\n      id\n      ...UserAvatar_user\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return j=function(){return e},e}function Y(){var e=l()(["\n  fragment MetaHeaderActions_collection_common on Collection {\n    creator {\n      id\n    }\n  }\n"]);return Y=function(){return e},e}var W,X="12px",K=function(e){var n,t,r,l=e.publisher,a=e.post,o=e.hideAboutLink,i=void 0!==o&&o,u=e.shouldShowStyleReminder,c=void 0===u||u,m=(0,N.H)().value,d="Collection"===l.__typename?l:null,h="User"===(null==l?void 0:l.__typename)?l:null,g=(0,B.gY)(d).viewerEdge,p=!(null==m||!m.mediumMemberAt),v=d&&d.creator&&d.creator.id===(null==m?void 0:m.id),f=!(null==g||!g.isEditor),b=v||f,E=a&&a.creator&&a.creator.id===(null==m?void 0:m.id),_=h&&h.id===(null==m?void 0:m.id),y=!!h&&(null==m?void 0:m.id)===h.id,k=b||y,C=m&&!p&&!b&&!_&&!E,w=(0,A.N)().isNewPostButtonVisible,T=!(null==d||null===(n=d.customStyleSheet)||void 0===n||null===(t=n.navigation)||void 0===t||null===(r=t.navItems)||void 0===r||!r.length);return s.createElement(O.x,{display:"flex",alignItems:"center",marginRight:k?"24px":"12px",height:"32px",overflow:"visible"},m&&!k&&s.createElement(H,null,s.createElement(L.Q,{publisher:l,hideAboutLink:i})),m&&s.createElement(F.cW,{source:{name:"search-popover"}},s.createElement(O.x,{marginLeft:"8px",marginRight:"10px"},s.createElement(H,null,s.createElement(R.Rh,{publisher:l,setIsMetabarLocked:function(){}})))),d&&b&&s.createElement(s.Fragment,null,s.createElement(O.x,{marginLeft:X,marginRight:X},s.createElement(U.o,{flag:z.T3.AURORA_NAV_AVAILABLE,isVisible:d.isAuroraEligible&&!T,targetDistance:15,padding:12,text:"You can now add sections to your publication. Go to ‘Design your publication’ to get started."},s.createElement(x.o,{collection:d,paddingTop:"0px",paddingBottom:"0px"},s.createElement(S.v,{collection:d,size:32})))),w&&s.createElement(I.F,{collection:d,paddingTop:"0px",paddingBottom:"0px",marginLeft:X})),C&&s.createElement(O.x,{marginRight:X,sm:{display:"none"}},s.createElement(M.G,{post:a})),m&&y&&s.createElement(s.Fragment,null,s.createElement(O.x,{marginLeft:X,marginRight:X,display:"flex",alignItems:"center"},s.createElement(P.W,{setIsMetabarLocked:function(){},shouldShowStyleReminder:c},s.createElement(D.Yt,{user:m,scale:"XS"}))),w&&s.createElement(O.x,{marginLeft:X},s.createElement(A.Q,null))))},Q=(0,c.Ps)(Y()),q=(0,c.Ps)(j(),k.fr,R.Aw,y.d,x.s,Q,V.W),Z=(0,c.Ps)(G(),M.V,Q,C.R),$=t(70405),J=t(74954),ee=t(38722),ne=t(46696);function te(){var e=l()(["\n  fragment MetaHeaderBackground_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      headerScale\n      backgroundImageDisplayMode\n      backgroundImageVerticalAlignment\n      backgroundColorDisplayMode\n      backgroundColor {\n        ...getHexFromColorValue_colorValue\n        ...getOpaqueHexFromColorValue_colorValue\n      }\n      secondaryBackgroundColor {\n        ...getHexFromColorValue_colorValue\n      }\n      postBackgroundColor {\n        ...getHexFromColorValue_colorValue\n      }\n      backgroundImage {\n        ...MetaHeaderBackground_imageMetadata\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"]);return te=function(){return e},e}function re(){var e=l()(["\n  fragment MetaHeaderBackground_imageMetadata on ImageMetadata {\n    id\n    originalWidth\n  }\n"]);return re=function(){return e},e}var le=(W={},u()(W,z.v2.START,"top"),u()(W,z.v2.END,"bottom"),u()(W,z.v2.CENTER,"center"),W),ae=function(e){return(0,ne.W6)({miroId:e.id,width:e.originalWidth||2e3,strategy:ne._S.Resample,freezeGifs:!1})},oe=function(e,n){var t=(e||{}).header,r=n?(0,J.eQ)(null==t?void 0:t.postBackgroundColor):null,l=n?(0,J.Z)(null==t?void 0:t.backgroundColor):(0,J.eQ)(null==t?void 0:t.backgroundColor);return{altHex:r,primaryHex:l,backgroundColor:r||l}},ie=function(e,n){var t,r,l=(e||{}).header,a=(0,ee.jb)(),o=null!==(t=null==e||null===(r=e.header)||void 0===r?void 0:r.headerScale)&&void 0!==t?t:a.headerScale;return n||o===z.w6.HEADER_SCALE_SMALL?null:null==l?void 0:l.backgroundImage},ue=function(e){var n=e.customStyleSheet,t=e.withAltBackground,r=void 0!==t&&t,l=e.children,a=(0,g.I)(),o=function(e,n){var t,r,l,a,o=(e||{}).header,i=(0,ee.jb)(),u=null!==(t=null==e||null===(r=e.header)||void 0===r?void 0:r.backgroundImageDisplayMode)&&void 0!==t?t:i.backgroundColorDisplayMode,c=n?z.PG.COLOR_DISPLAY_MODE_SOLID:null!==(l=null==e||null===(a=e.header)||void 0===a?void 0:a.backgroundColorDisplayMode)&&void 0!==l?l:i.backgroundColorDisplayMode,m=ie(e,n),d=m?ae(m):"",h=oe(e,n),g=h.altHex,p=h.primaryHex,v=h.backgroundColor;return s.useMemo((function(){return function(n){var t=(0,J.eQ)(null==o?void 0:o.secondaryBackgroundColor),r={display:"flex",flexDirection:"column"};if(!m&&v&&c===z.PG.COLOR_DISPLAY_MODE_SOLID&&(r.backgroundColor=v||n.backgroundColor),g)return r;var l=[];if(m&&c===z.PG.COLOR_DISPLAY_MODE_SOLID?l.push("linear-gradient(to bottom, ".concat(p||"transparent",", ").concat(p||"transparent",")")):c===z.PG.COLOR_DISPLAY_MODE_VERTICAL_GRADIENT&&l.push("linear-gradient(to bottom, ".concat(p||"transparent",", ").concat(t||"transparent",")")),m){var a,s;l.push("url(".concat(d,")"));var h=null!==(a=null==e||null===(s=e.header)||void 0===s?void 0:s.backgroundImageVerticalAlignment)&&void 0!==a?a:i.backgroundImageVerticalAlignment,f=le[h];switch(r.backgroundPosition=f,u){case z.zc.IMAGE_DISPLAY_MODE_FILL:r.backgroundSize="cover";break;case z.zc.IMAGE_DISPLAY_MODE_TILE:r.backgroundRepeat="repeat",r.backgroundSize="auto";break;case z.zc.IMAGE_DISPLAY_MODE_FIT:r.backgroundRepeat="no-repeat",r.backgroundSize="contain";break;case z.zc.IMAGE_DISPLAY_MODE_AUTO:r.backgroundRepeat="no-repeat",r.backgroundSize="auto"}}return l.length>0&&(r.backgroundImage=l.join(", ")),r}}),[e,d])}(n,r),i=ie(n,r);return s.createElement(s.Fragment,null,i&&s.createElement($.q,null,s.createElement("link",{rel:"preload",href:ae(i),as:"image"})),s.createElement("div",{className:a(o)},l))},ce=(0,c.Ps)(re()),se=(0,c.Ps)(te(),ce,J.xW,J.hB),me=t(82405),de=t(5977),he=function(){return s.createElement(O.x,{position:"relative",width:"100%"},s.createElement(O.x,{position:"absolute",width:"100%",top:"23px",borderBottom:"BASE_DARKER"}))},ge=t(43191),pe=t(93310),ve=t(43487);function fe(){var e=l()(["\n  fragment MetaHeaderNavLink_publisher on Publisher {\n    id\n    ...getNavItemHref_publisher\n  }\n  ","\n"]);return fe=function(){return e},e}function be(){var e=l()(["\n  fragment MetaHeaderNavLink_headerNavigationItem on HeaderNavigationItem {\n    name\n    ...getNavItemHref_headerNavigationItem\n  }\n  ","\n"]);return be=function(){return e},e}var Ee=function(e){var n=e.publisher,t=e.navItem,r=(0,ve.v9)((function(e){return e.config.authDomain})),l=(0,ve.v9)((function(e){return e.navigation.hostname})),a=(0,ge.hl)(n,t,r),o=a.startsWith("/")||a.startsWith("#")||a.includes(r)||a.includes(l);return s.createElement(pe.r,{href:a,target:o?void 0:"_blank"},t.name)},_e=(0,c.Ps)(be(),ge.qQ),Se=(0,c.Ps)(fe(),ge.EV),ye=t(87691),xe=t(75101);function Le(){var e=l()(["\n  fragment MetaHeaderNav_publisher on Publisher {\n    id\n    ...MetaHeaderNavLink_publisher\n  }\n  ","\n"]);return Le=function(){return e},e}function ke(){var e=l()(["\n  fragment MetaHeaderNav_customStyleSheet on CustomStyleSheet {\n    id\n    navigation {\n      navItems {\n        ...MetaHeaderNav_headerNavigationItem\n      }\n    }\n  }\n  ","\n"]);return ke=function(){return e},e}function Pe(){var e=l()(["\n  fragment MetaHeaderNav_headerNavigationItem on HeaderNavigationItem {\n    name\n    tagSlugs\n    ...MetaHeaderNavLink_headerNavigationItem\n  }\n  ","\n"]);return Pe=function(){return e},e}var Me=function(e,n){var t,r=((null==e||null===(t=e.navigation)||void 0===t?void 0:t.navItems)||[]).filter((function(e){var n;return!(null===(n=e.name)||void 0===n||!n.trim())}));return{isNavVisible:r.length>0&&"Collection"===n.__typename,navItems:r}},Ce=function(e){var n=e.customStyleSheet,t=e.publisher,r=Te(),l=Me(n,t),a=l.navItems;if(!l.isNavVisible)return null;var o=!1;return s.createElement(O.x,{display:"flex",alignItems:"center",tag:"nav"},a.map((function(e,n){var l=r(e)&&!o;return l&&(o=!0),s.createElement(O.x,{key:n,tag:"span",margin:"0 12px",display:"flex",flexDirection:"column"},l?s.createElement(ye.F,{scale:"L",color:"DARKER"},e.name):s.createElement(Ee,{navItem:e,publisher:t}),l&&s.createElement(he,null))})))},Ie=(0,c.Ps)(Pe(),_e),Ae=(0,c.Ps)(ke(),Ie),we=(0,c.Ps)(Le(),Se),Te=function(){var e=(0,xe.G)(),n=(0,de.TH)();return function(t){var r,l;switch(t.type){case z.Me.NAV_TYPE_LINK:return e(null!==(r=t.href)&&void 0!==r?r:"");case z.Me.NAV_TYPE_TAG:return!(null===(l=t.tagSlugs)||void 0===l||!l.length)&&n.pathname.includes("tagged/".concat(t.tagSlugs[0]))}return!1}},He=t(92661),Re=t(50458),Ne=t(68216);function Be(){var e=l()(["\n  fragment PublisherAboutLink_publisher on Publisher {\n    __typename\n    id\n    ... on Collection {\n      slug\n    }\n    ... on User {\n      ...userUrl_user\n    }\n  }\n  ","\n"]);return Be=function(){return e},e}var De=function(e){var n,t=e.publisher,r=e.disableLink,l=void 0!==r&&r,a=(0,ve.v9)((function(e){return e.config.authDomain})),o=(0,He.di)("ShowCollectionMasthead",{collectionSlug:"Collection"===t.__typename&&null!==(n=t.slug)&&void 0!==n?n:""}),i="User"===t.__typename?(0,Re.JqW)(t,a):"",u="Collection"===t.__typename?o:i;return l?s.createElement(ye.F,{tag:"span",scale:"L",color:"DARKER"},"About"):s.createElement(pe.r,{href:u},"About")},Ve=(0,c.Ps)(Be(),Ne.$m),Ue=t(55155),Oe=t(32829),Fe=t(37205),ze=t(21417);function Ge(){var e=l()(["\n  fragment UserProfileBooksLink_publisher on Publisher {\n    __typename\n    id\n    ... on User {\n      ...userUrl_user\n      bookAuthor {\n        ... on Author {\n          id\n        }\n      }\n    }\n  }\n  ","\n"]);return Ge=function(){return e},e}var je=function(){return null},Ye=function(e){var n=e.publisher,t=(0,ve.v9)((function(e){return e.config.authDomain})),r=(0,de.TH)().pathname,l=(0,He.$B)(r);if("User"!==n.__typename||!n.bookAuthor)return null;var a="ShowUserBooks"===(null==l?void 0:l.route.name);return s.createElement(ze.b,{name:"enable_lite_book_experience",placeholder:je},(function(e){return e?s.createElement(O.x,{marginLeft:"12px",marginRight:"12px",display:"block"},a?s.createElement(ye.F,{tag:"span",scale:"L",color:"DARKER"},"Books"):s.createElement(pe.r,{href:(0,Re.ssx)(n,t)},"Books")):null}))},We=(0,c.Ps)(Ge(),Ne.$m),Xe=t(24330),Ke=t(27927),Qe=t(98222);function qe(){var e=l()(["\n  fragment UserProfileCatalogsLink_publisher on Publisher {\n    __typename\n    id\n    ... on User {\n      ...userUrl_user\n      homePostsPublished: homepagePostsConnection(paging: {limit: 1}) {\n        posts {\n          id\n        }\n      }\n    }\n  }\n  ","\n"]);return qe=function(){return e},e}var Ze=function(e){var n,t,r=e.publisher,l=(0,ve.v9)((function(e){return e.config.authDomain})),a=(0,de.TH)().pathname,o=(0,He.$B)(a),i=(0,Qe.Z)({id:"User"===r.__typename&&r.id?r.id:""});if("User"!==r.__typename)return null;var u="User"===(null==i||null===(n=i.userResult)||void 0===n?void 0:n.__typename)&&i.userResult.viewerEdge.hasList;if(!((null===(t=r.homePostsPublished)||void 0===t?void 0:t.posts)&&r.homePostsPublished.posts.length>0&&u))return null;var c="ShowUserLists"===(null==o?void 0:o.route.name);return s.createElement(O.x,{margin:"0 12px",xs:{margin:"0"}},c?s.createElement(ye.F,{tag:"span",scale:"L",color:"DARKER"},"Lists"):s.createElement(pe.r,{href:(0,Re.HRw)(r,l)},"Lists"))},$e=(0,c.Ps)(qe(),Ne.$m),Je=t(54878),en=t(66862);function nn(){var e=l()(["\n  fragment MetaHeaderEngagement_publisher on Publisher {\n    __typename\n    ...MetaHeaderNav_publisher\n    ...PublisherAboutLink_publisher\n    ...PublisherFollowButton_publisher\n    ...PublisherFollowerCount_publisher\n    ...UserProfileBooksLink_publisher\n    ... on Collection {\n      creator {\n        id\n      }\n      customStyleSheet {\n        id\n        ...CustomThemeProvider_customStyleSheet\n      }\n    }\n    ... on User {\n      ...UserProfileCatalogsLink_publisher\n      ...UserSubscribeButton_user\n      customStyleSheet {\n        id\n        ...CustomThemeProvider_customStyleSheet\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return nn=function(){return e},e}function tn(){var e=l()(["\n  fragment MetaHeaderEngagement_customStyleSheet on CustomStyleSheet {\n    ...MetaHeaderNav_customStyleSheet\n  }\n  ","\n"]);return tn=function(){return e},e}var rn=function(e){var n=e.publisher,t=e.isVisible;return s.createElement(s.Fragment,null,"User"===n.__typename?s.createElement(O.x,{display:"flex"},s.createElement(Xe.N,{creator:n,followButtonSize:"REGULAR",susiEntry:"follow_profile",showFirstUseToolTip:!0,showMembershipUpsellModal:!0,isVisible:t})):s.createElement(me.Fp,{buttonSize:"REGULAR",collection:n,susiEntry:"follow_header"}))},ln=function(e){var n=e.customStyleSheet,t=e.publisher,r=e.disableAboutLink,l=void 0!==r&&r,a=e.disableFollowersLink,o=void 0!==a&&a,i=e.followersLinkInFront,u=void 0!==i&&i,c=e.isBreakpointSm,m=void 0!==c&&c,d=(0,N.H)().value,h=function(e){var n,t=(0,N.H)(),r=t.loading,l=t.value,a=!!l&&"User"===e.__typename&&l.id===e.id,o=!!l&&"Collection"===e.__typename&&l.id===(null==e||null===(n=e.creator)||void 0===n?void 0:n.id);return{isFollowButtonVisible:!a&&!o&&!r,isFollowerCountVisible:(0,Oe.d)(e).isFollowerCountVisible}}(t),g=h.isFollowButtonVisible,p=h.isFollowerCountVisible,v=Me(n,t).isNavVisible,f="User"===t.__typename,b="Collection"===t.__typename&&v,E=f&&m,_=s.createElement(O.x,{marginTop:"-14px",marginBottom:"-16px"},s.createElement(rn,{publisher:t,isVisible:g}));return s.createElement(ye.F,{tag:"span",scale:"L",leadingTrim:!0},s.createElement(O.x,{display:"flex",alignItems:"center"},g&&u&&s.createElement(O.x,{marginRight:m?"12px":"32px"},s.createElement(Je.G8,{customStyleSheet:t.customStyleSheet},_)),p&&s.createElement(s.Fragment,null,s.createElement(O.x,{display:"inline-flex",flexDirection:"column",marginRight:"12px"},s.createElement(U.o,{flag:z.T3.FOLLOWERS_TOOLTIP,isVisible:"User"===t.__typename&&t.id===(null==d?void 0:d.id),targetDistance:15,text:"You can now see a full list of your followers here, and people you follow from the About page."},s.createElement(Oe.J,{publisher:t,disableLink:o,scale:m?"M":"L"})),b&&o&&s.createElement(he,null)),b&&s.createElement(O.x,{marginLeft:"12px",display:"block",sm:{display:"none"}},"·")),b&&s.createElement(O.x,{marginLeft:"12px",display:"block",sm:{display:"none"}},s.createElement(Ce,{customStyleSheet:n,publisher:t})),f&&s.createElement(O.x,{xs:{display:"none"}},s.createElement(Ze,{publisher:t})),s.createElement(O.x,{xs:{display:"none"}},s.createElement(Ye,{publisher:t})),s.createElement(O.x,{marginLeft:"12px",display:"flex",flexDirection:"column",sm:b?{display:"none"}:void 0,xs:E?{display:"none"}:void 0},s.createElement(De,{publisher:t,disableLink:l}),b&&l&&s.createElement(he,null)),g&&!u&&s.createElement(O.x,{marginLeft:"24px",sm:{marginLeft:b?"0px":"24px"}},s.createElement(Je.G8,{customStyleSheet:t.customStyleSheet},_))))},an=(0,c.Ps)(tn(),Ae),on=(0,c.Ps)(nn(),we,Ve,Ue.f,Fe.j,We,$e,Ke.w,en.K),un=t(99996),cn=t(68894);function sn(){var e=l()(["\n  fragment MetaHeaderNavVertical_publisher on Publisher {\n    id\n    ...PublisherAboutLink_publisher\n    ...MetaHeaderNav_publisher\n    ...MetaHeaderNavLink_publisher\n  }\n  ","\n  ","\n  ","\n"]);return sn=function(){return e},e}function mn(){var e=l()(["\n  fragment MetaHeaderNavVertical_customStyleSheet on CustomStyleSheet {\n    id\n    navigation {\n      navItems {\n        ...MetaHeaderNavLink_headerNavigationItem\n      }\n    }\n    ...MetaHeaderNav_customStyleSheet\n  }\n  ","\n  ","\n"]);return mn=function(){return e},e}var dn=s.forwardRef((function(e,n){var t=e.customStyleSheet,r=e.publisher,l=e.children,a="Collection"===r.__typename,o=Me(t,r).isNavVisible;return a&&!o?null:s.createElement(O.x,{display:"none",sm:{display:"flex"},flexDirection:"column",tag:"nav",width:"100%",padding:"16px 0",ref:n},s.createElement(ye.F,{scale:"XL",tag:"span"},l&&l,s.createElement(O.x,{tag:"span",margin:"14px 0"},s.createElement(De,{publisher:r}))))})),hn=(0,c.Ps)(mn(),Ae,_e),gn=(0,c.Ps)(sn(),Ve,we,Se),pn=t(14294),vn=t(14199);function fn(){var e=l()(["\n  fragment MetaHeaderTagline_publisher on Publisher {\n    __typename\n    ... on Collection {\n      tagline\n    }\n    ... on User {\n      bio\n    }\n  }\n"]);return fn=function(){return e},e}function bn(){var e=l()(["\n  fragment MetaHeaderTagline_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      taglineColor {\n        ...getHexFromColorValue_colorValue\n      }\n      taglineTreatment\n    }\n  }\n  ","\n"]);return bn=function(){return e},e}var En=function(e){var n,t=e.publisher,r=e.customStyleSheet,l=e.color,a=void 0===l?"LIGHTER":l,o=(0,g.I)(),i=(0,vn.n)({name:"subtitle",scale:"M",color:a}),u=(null!==(n=null==r?void 0:r.header)&&void 0!==n?n:{}).taglineColor,c=(0,J.eQ)(u),m=c?{color:c}:{},d=_n(r,t),h=d.tagline;return d.isTaglineVisible?s.createElement("span",{className:o([i,m])},s.createElement(pn.P,null,h)):null},_n=function(e,n){var t,r,l=(0,ee.jb)(),a=null!==(t=null==e||null===(r=e.header)||void 0===r?void 0:r.taglineTreatment)&&void 0!==t?t:l.taglineTreatment,o="Collection"===n.__typename?n.tagline:n.bio;return{tagline:o,isTaglineVisible:!!o&&a===z.KI.TAGLINE_TREATMENT_HEADER}},Sn=(0,c.Ps)(bn(),J.xW),yn=(0,c.Ps)(fn()),xn=t(88322),Ln=t(33916),kn=t(26350),Pn=t(96370),Mn=t(29746),Cn=t(77241);function In(){var e=l()(["\n  fragment MetaHeaderTop_publisher on Publisher {\n    __typename\n    ... on Collection {\n      slug\n      ...CollectionMetabarActionsPopover_collection\n      ...CollectionAvatar_collection\n      ...MetaHeaderTop_collection\n    }\n    ... on User {\n      username\n      id\n    }\n  }\n  ","\n  ","\n  ","\n"]);return In=function(){return e},e}function An(){var e=l()(["\n  fragment MetaHeaderTop_post on Post {\n    id\n    collection {\n      ...MetaHeaderTop_collection\n    }\n    pendingCollection {\n      ...MetaHeaderTop_collection\n    }\n  }\n  ","\n"]);return An=function(){return e},e}function wn(){var e=l()(["\n  fragment MetaHeaderTop_collection on Collection {\n    id\n    creator {\n      id\n    }\n  }\n"]);return wn=function(){return e},e}var Tn,Hn="16px",Rn="10px",Nn=function(){var e=(0,ve.v9)((function(e){return e.config.authDomain}));return s.createElement(h.e,{href:"https://".concat(e,"/"),"aria-label":"Homepage"},s.createElement(d.YR,null))},Bn=function(){return{whiteSpace:"nowrap"}},Dn=function(e){var n,t,r=e.publisher,l=e.post,a=e.withBottomBorder,o=e.withLeftMonogram,i=void 0!==o&&o,u=e.inline,c=void 0!==u&&u,m=e.shouldShowStyleReminder,d=e.maxWidthSize,h=(0,g.I)(),p=(0,N.H)().value,v="Collection"===(null==r?void 0:r.__typename)?r.slug:void 0,f="User"===(null==r?void 0:r.__typename)?r.username:null,b="Collection"===(null==r?void 0:r.__typename)?r:null!==(n=null==l?void 0:l.pendingCollection)&&void 0!==n?n:null==l?void 0:l.collection,E=p&&b&&(null==b||null===(t=b.creator)||void 0===t?void 0:t.id)===(null==p?void 0:p.id),_=(0,B.gY)(b).viewerEdge,y=null==_?void 0:_.isEditor,L=E||y,k=p&&"User"===(null==r?void 0:r.__typename)&&p.id===r.id;return s.createElement(O.x,{zIndex:c?void 0:Cn.ZP.metabar,position:"relative",borderBottom:a?"BASE_LIGHTER":"NONE"},s.createElement(Pn.P,{size:d},s.createElement(O.x,{height:(0,Mn.a)(62),display:"flex",alignItems:"center"},i&&s.createElement(Nn,null),s.createElement(O.x,{flexGrow:"1",flexDirection:"row",display:"flex",alignItems:"center",justifyContent:i?"flex-end":void 0},!p&&s.createElement(O.x,{marginRight:"16px"},s.createElement(kn.R9,{susiEntry:"nav_reg",isButton:!0,buttonStyle:"OBVIOUS",operation:"register"},"Get started")),s.createElement("div",{className:h(Bn)},s.createElement(Ln.a,{removeSpacing:!0,isButton:!1,collectionSlug:v,postId:null==l?void 0:l.id,username:f}))),"Collection"===(null==r?void 0:r.__typename)&&L&&s.createElement(O.x,{marginLeft:i?Hn:void 0,marginRight:Hn,sm:{marginRight:Rn}},s.createElement(x.o,{collection:r},s.createElement(S.v,{collection:r,size:32}))),"User"===(null==r?void 0:r.__typename)&&p&&k&&s.createElement(O.x,{marginRight:Hn,sm:{marginRight:Rn}},s.createElement(P.W,{shouldShowStyleReminder:m,setIsMetabarLocked:function(){}},s.createElement(D.Yt,{user:p,scale:"XS"}))),!i&&s.createElement(Nn,null))))},Vn=(0,c.Ps)(wn()),Un=(0,c.Ps)(An(),Vn),On=(0,c.Ps)(In(),x.s,y.d,Vn),Fn=t(48502),zn=t(71230),Gn=t(92905),jn=t(10074),Yn=t(18155),Wn=t(34135),Xn=t(18027);function Kn(){var e=l()(["\n  fragment MetaHeader_post on Post {\n    id\n    ...SusiClickable_post\n    ...MetaHeaderTop_post\n    ...MetaHeaderActions_post\n  }\n  ","\n  ","\n  ","\n"]);return Kn=function(){return e},e}function Qn(){var e=l()(["\n  fragment MetaHeader_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      headerScale\n      horizontalAlignment\n    }\n    ...MetaHeaderBackground_customStyleSheet\n    ...MetaHeaderEngagement_customStyleSheet\n    ...MetaHeaderLogo_customStyleSheet\n    ...MetaHeaderNavVertical_customStyleSheet\n    ...MetaHeaderTagline_customStyleSheet\n    ...MetaHeaderThemeProvider_customStyleSheet\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return Qn=function(){return e},e}function qn(){var e=l()(["\n  fragment MetaHeader_publisher on Publisher {\n    __typename\n    name\n    ...MetaHeaderEngagement_publisher\n    ...MetaHeaderLogo_publisher\n    ...MetaHeaderNavVertical_publisher\n    ...MetaHeaderTagline_publisher\n    ...MetaHeaderThemeProvider_publisher\n    ...MetaHeaderActions_publisher\n    ...MetaHeaderTop_publisher\n    ...MetaHeaderNavLink_publisher\n    ... on Collection {\n      id\n      favicon {\n        id\n      }\n      tagline\n      ...CollectionNavigationContextProvider_collection\n    }\n    ... on User {\n      id\n      bio\n      ...UserProfileCatalogsLink_publisher\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return qn=function(){return e},e}var Zn={overflowX:"scroll",whiteSpace:"nowrap",scrollbarWidth:"none","-ms-overflow-style":"none","::-webkit-scrollbar":{display:"none"}},$n=(Tn={},u()(Tn,z.v2.START,"flex-start"),u()(Tn,z.v2.END,"flex-end"),u()(Tn,z.v2.CENTER,"center"),Tn),Jn=function(e){return{maxWidth:(0,Mn.a)(e.maxWidths.inset),minWidth:"0",width:"100%",marginTop:"12px"}},et=function(e){var n,t,r,l=e.publisher,a=e.customStyleSheet,i=e.post,u=e.forceSmall,c=void 0!==u&&u,p=e.disableAboutLink,v=void 0!==p&&p,f=e.disableFollowersLink,b=void 0!==f&&f,E=e.shouldShowStyleReminder,S=void 0===E||E,y=(0,un.uP)(a,l,c).shouldShowLogo,x=(0,g.I)(),L=(0,w.F)(),k=s.useState(0),P=o()(k,2),M=P[0],C=P[1],I=(0,ve.v9)((function(e){return e.config.authDomain})),A=(0,N.H)(),T=A.loading,H=A.value,R=(0,ee.jb)(),B=rt({customStyleSheet:a,forceSmall:c}),D=lt({publisher:l,customStyleSheet:a,forceSmall:c}),V=Me(a,l),U=V.navItems,F=V.isNavVisible,G=function(){var e=(0,cn.O)(!1),n=o()(e,3),t=n[0],r=n[1],l=n[2],a=s.useRef(null),i=function(e){var n=a.current,t=e.target;n&&t&&!n.contains(t)&&l()};return s.useEffect((function(){return document.addEventListener("click",i,!0),document.addEventListener("touch",i,!0),function(){document.removeEventListener("click",i,!0),document.removeEventListener("touch",i,!0)}}),[]),{verticalNavRef:a,isVerticalNavVisible:t,showVerticalNav:r,hideVerticalNav:l}}(),j=G.verticalNavRef,Y=G.isVerticalNavVisible,W=G.showVerticalNav,X=G.hideVerticalNav,Q=B===z.w6.HEADER_SCALE_SMALL,q=Q&&y,Z=L.newFonts.heading,$=q?void 0:(0,Yn.mu)((function(e){var n=o()(e,1)[0];return(0,Mn.a)(-1*n)}),(0,jn.AC)(Z,"XS")),J=Q?z.v2.START:null!==(n=null==a||null===(t=a.header)||void 0===t?void 0:t.horizontalAlignment)&&void 0!==n?n:R.horizontalAlignment,ne=!!ie(a,c),te=!Q||F,re=Q?F?184:115:334,le=Q?115:re-(te?70:0),ae=(0,Fn.PB)(l,I),ce="".concat((0,Fn.Zu)(l)," Homepage"),se=!!oe(a,c).backgroundColor,me=!(ne||se)||te,de="Collection"===l.__typename?l:null,he="User"===l.__typename,ge="Collection"===l.__typename,pe=M<L.breakpoints.sm,fe=ge&&F,be=he&&pe,_e=(be||fe)&&Y,Se=function(){C(window.innerWidth)};return s.useEffect((function(){return Se(),Wn.V6.on("resize",Se),function(){return Wn.V6.off("resize",Se)}}),[]),s.createElement(m.Jr,{collection:de},de&&s.createElement(Xn.s,{faviconImageId:null==de||null===(r=de.favicon)||void 0===r?void 0:r.id}),s.createElement(O.x,{boxShadow:me?"inset 0 -1px 0 ".concat(L.baseColor.border.lighter):void 0,minHeight:(0,Mn.a)(re),sm:{boxShadow:"inset 0 -1px 0 ".concat(L.baseColor.border.lighter),minHeight:(0,Mn.a)(230)}},s.createElement(xn.OD,{publisher:l,customStyleSheet:a},s.createElement(ue,{customStyleSheet:a,withAltBackground:c},s.createElement(O.x,{display:"none",sm:{display:"block"}},s.createElement(Dn,{withBottomBorder:!(ne||se),post:i,publisher:l,shouldShowStyleReminder:S})),s.createElement(Pn.P,null,s.createElement(O.x,{display:"flex",flexDirection:Q?"row":"column",alignItems:Q?"center":void 0,justifyContent:"space-between",minHeight:(0,Mn.a)(le),sm:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-start",minHeight:(0,Mn.a)(98)}},!Q&&s.createElement("div",{className:x({display:{xl:"flex",lg:"flex",md:"flex",sm:"none",xs:"none"},justifyContent:"flex-end",alignItems:"center",marginTop:(0,Mn.a)(41),zIndex:Cn.ZP.metabar,visibility:T?"hidden":"visible"})},s.createElement(zn.f,null,!H&&s.createElement(s.Fragment,null,s.createElement(ye.F,{scale:"M"},s.createElement(kn.R9,{linkStyle:"OBVIOUS",operation:"login",susiEntry:"nav_reg"},"Sign in")),s.createElement(O.x,{marginLeft:"14px",marginRight:"24px"},s.createElement(kn.R9,{buttonSize:"REGULAR",isButton:!0,buttonStyle:"OBVIOUS",operation:"register",post:i,susiEntry:"nav_reg"},"Get started"))),H&&s.createElement(K,{publisher:l,post:i,hideAboutLink:v,shouldShowStyleReminder:S})),s.createElement(h.e,{href:"https://".concat(I,"/"),"aria-label":"Homepage"},s.createElement(d.YR,{contrast:se?"darker":"normal"}))),s.createElement(O.x,{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"flex-start"},s.createElement("div",{className:x({paddingTop:$,display:"flex",width:"100%"})},s.createElement(O.x,{width:"100%",display:"flex",flexDirection:Q?"row":"column",alignItems:Q?y?"center":"flex-end":$n[J],marginBottom:Q?"0px":"38px",marginTop:Q?"-32px":"25px",textAlign:J===z.v2.CENTER?"center":void 0,flexWrap:"wrap",sm:{display:"flex",alignItems:Q?"flex-start":void 0,flexDirection:Q?"column":void 0,marginBottom:"28px",marginTop:"0px"}},s.createElement(O.x,{marginLeft:J===z.v2.START?void 0:(0,Mn.a)(24),marginRight:(0,Mn.a)(24),sm:{marginTop:"28px"},marginTop:"32px"},s.createElement(h.e,{href:ae,"aria-label":ce},s.createElement(un.fI,{publisher:l,customStyleSheet:a,forcedTextScale:Q?"XS":void 0,withTextColorSubtle:!1,forceSmall:c}))),D&&s.createElement("div",{className:x(Jn)},s.createElement(En,{customStyleSheet:a,publisher:l})),!te&&!pe&&s.createElement(O.x,{marginTop:"32px"},s.createElement(ln,{customStyleSheet:a,publisher:l,disableAboutLink:v,disableFollowersLink:b,isBreakpointSm:pe})))),Q&&s.createElement("div",{className:x({display:{xl:"flex",lg:"flex",md:"flex",sm:"none",xs:"none"},flex:"0 0 auto",justifySelf:"flex-end",alignItems:"center",zIndex:Cn.ZP.metabar,visibility:T?"hidden":"visible"})},s.createElement(zn.f,null,!H&&s.createElement(s.Fragment,null,s.createElement(ye.F,{scale:"M"},s.createElement(kn.R9,{linkStyle:"OBVIOUS",operation:"login",susiEntry:"nav_reg"},"Sign in")),s.createElement(O.x,{marginLeft:"14px",marginRight:"24px",marginTop:"-3px",marginBottom:"-3px"},s.createElement(kn.R9,{isButton:!0,buttonSize:"REGULAR",buttonStyle:"OBVIOUS",operation:"register",post:i,susiEntry:"nav_reg"},"Get started"))),H&&s.createElement(K,{publisher:l,hideAboutLink:v,shouldShowStyleReminder:S})),s.createElement(h.e,{href:"https://".concat(I,"/"),"aria-label":"Homepage"},s.createElement(d.YR,{contrast:se?"darker":"normal"})))))))),(te||pe)&&s.createElement(O.x,{display:"block"},s.createElement(Pn.P,null,s.createElement("div",{className:F?x(Zn):void 0},s.createElement(O.x,{height:(0,Mn.a)(70),display:"flex",alignItems:"center",paddingTop:"1px"},s.createElement(O.x,{margin:J===z.v2.CENTER?"0 auto":void 0,sm:F?{margin:"0"}:void 0},s.createElement(ln,{customStyleSheet:a,publisher:l,disableAboutLink:v,disableFollowersLink:b,followersLinkInFront:!0,isBreakpointSm:pe})),(fe||be)&&s.createElement(O.x,{display:"none",sm:{display:"block"},position:"absolute",right:"24px"},Y?s.createElement(Gn.R,{onClick:X,ariaLabel:"Collapse navbar"}):s.createElement(_,{onClick:W,ariaLabel:"Expand navbar"}))))))),_e&&s.createElement(O.x,{borderBottom:"BASE_LIGHTER"},s.createElement(Pn.P,null,s.createElement(dn,{ref:j,customStyleSheet:a,publisher:l},U.map((function(e,n){return s.createElement(O.x,{key:n,tag:"span",margin:"14px 0"},s.createElement(Ee,{navItem:e,publisher:l}))})),s.createElement(O.x,{tag:"span",margin:"14px 0"},he&&s.createElement(Ze,{publisher:l}))))))},nt=(0,c.Ps)(qn(),m.hD,on,un.XN,gn,yn,xn.k8,q,On,Se,$e),tt=(0,c.Ps)(Qn(),se,an,un.Ig,hn,Sn,xn.a6),rt=((0,c.Ps)(Kn(),kn.qU,Un,Z),function(e){var n,t,r=e.customStyleSheet,l=e.forceSmall,a=void 0!==l&&l,o=(0,ee.jb)();return a?z.w6.HEADER_SCALE_SMALL:null!==(n=null==r||null===(t=r.header)||void 0===t?void 0:t.headerScale)&&void 0!==n?n:o.headerScale}),lt=function(e){var n=e.publisher,t=e.customStyleSheet,r=e.forceSmall,l=void 0!==r&&r,a=_n(t,n).isTaglineVisible,o=rt({customStyleSheet:t,forceSmall:l});return a&&o!==z.w6.HEADER_SCALE_SMALL}},88322:(e,n,t)=>{"use strict";t.d(n,{_5:()=>p,OD:()=>f,XL:()=>b,a6:()=>E,k8:()=>_});var r=t(28655),l=t.n(r),a=t(82492),o=t.n(a),i=t(71439),u=t(67294),c=t(31889),s=t(98096),m=t(3207);function d(){var e=l()(["\n  fragment MetaHeaderThemeProvider_publisher on Publisher {\n    __typename\n    customStyleSheet {\n      ...MetaHeaderThemeProvider_customStyleSheet\n    }\n    ... on Collection {\n      colorPalette {\n        ...customDefaultBackgroundTheme_colorPalette\n      }\n    }\n  }\n  ","\n  ","\n"]);return d=function(){return e},e}function h(){var e=l()(["\n  fragment MetaHeaderThemeProvider_customStyleSheet on CustomStyleSheet {\n    id\n    ...useMetaHeaderTheme_customStyleSheet\n  }\n  ","\n"]);return h=function(){return e},e}function g(){var e=l()(["\n  fragment useMetaHeaderTheme_customStyleSheet on CustomStyleSheet {\n    ...customDefaultBackgroundTheme_customStyleSheet\n    global {\n      colorPalette {\n        primary {\n          colorPalette {\n            tintBackgroundSpectrum {\n              ...ThemeUtil_colorSpectrum\n            }\n          }\n        }\n      }\n    }\n    header {\n      backgroundColor {\n        colorPalette {\n          tintBackgroundSpectrum {\n            ...ThemeUtil_colorSpectrum\n          }\n        }\n      }\n      postBackgroundColor {\n        colorPalette {\n          tintBackgroundSpectrum {\n            ...ThemeUtil_colorSpectrum\n          }\n        }\n      }\n      backgroundImage {\n        id\n      }\n    }\n  }\n  ","\n  ","\n"]);return g=function(){return e},e}var p=function(e,n){var t,r,l,a,i,u,s=(0,c.F)(),d=function(e){var n,t,r,l;return null==e||null===(n=e.global)||void 0===n||null===(t=n.colorPalette)||void 0===t||null===(r=t.background)||void 0===r||null===(l=r.colorPalette)||void 0===l?void 0:l.tintBackgroundSpectrum}(e),h=(null==e||null===(t=e.header)||void 0===t||null===(r=t.backgroundImage)||void 0===r?void 0:r.id)||d,g=null==e||null===(l=e.global)||void 0===l||null===(a=l.colorPalette)||void 0===a||null===(i=a.primary)||void 0===i||null===(u=i.colorPalette)||void 0===u?void 0:u.tintBackgroundSpectrum,p=o()({},d?(0,m.yd)({tint:d,accentTint:h?null:g},s):(0,m.zI)(e,s,n));return v(p)},v=function(e){return o()({},e,{newFonts:{heading:{fontSize:{XL:80,L:64,M:48,S:36,XS:27},lineHeight:{XL:88,L:72,M:56,S:40,XS:34},weight:700}}})},f=function(e){var n=e.publisher,t=e.customStyleSheet,r=e.children,l="Collection"===n.__typename?n.colorPalette:null,a=p(t,l);return u.createElement(s.f,{theme:a},r)},b=(0,i.Ps)(g(),m.Ui,m.zK),E=(0,i.Ps)(h(),b),_=(0,i.Ps)(d(),E,m.L9)},55155:(e,n,t)=>{"use strict";t.d(n,{D:()=>s,f:()=>m});var r=t(28655),l=t.n(r),a=t(71439),o=t(67294),i=t(82405),u=t(32317);function c(){var e=l()(["\n  fragment PublisherFollowButton_publisher on Publisher {\n    __typename\n    ... on Collection {\n      ...CollectionFollowButton_collection\n    }\n    ... on User {\n      ...UserFollowButton_user\n    }\n  }\n  ","\n  ","\n"]);return c=function(){return e},e}var s=function(e){var n=e.publisher,t=e.buttonSize,r=e.isLinkStyle,l=void 0!==r&&r,a=e.susiEntry,c=e.width;return"Collection"===n.__typename?o.createElement(i.Fp,{buttonSize:t,collection:n,isLinkStyle:l,susiEntry:a,width:c}):o.createElement(u.Bv,{buttonSize:t,user:n,isLinkStyle:l,susiEntry:a,width:c})},m=(0,a.Ps)(c(),i.Iq,u.sj)},54878:(e,n,t)=>{"use strict";t.d(n,{v$:()=>d,G8:()=>h,Ps:()=>g,Kc:()=>p});var r=t(28655),l=t.n(r),a=t(71439),o=t(67294),i=t(31889),u=t(98096),c=t(3207);function s(){var e=l()(["\n  fragment CustomThemeProvider_customStyleSheet on CustomStyleSheet {\n    id\n    ...customDefaultBackgroundTheme_customStyleSheet\n    ...customStyleSheetFontTheme_customStyleSheet\n  }\n  ","\n  ","\n"]);return s=function(){return e},e}function m(){var e=l()(["\n  fragment CustomThemeProvider_publisher on Publisher {\n    id\n    __typename\n    ... on Collection {\n      colorPalette {\n        ...customDefaultBackgroundTheme_colorPalette\n      }\n    }\n  }\n  ","\n"]);return m=function(){return e},e}var d=function(e,n){var t=(0,i.F)(),r="Collection"===(null==n?void 0:n.__typename)?null==n?void 0:n.colorPalette:null;return(0,c.ZI)(e,(0,c.zI)(e,t,r))},h=function(e){var n=e.customStyleSheet,t=e.publisher,r=e.children,l=d(n,t);return o.createElement(u.f,{theme:l},r)},g=(0,a.Ps)(m(),c.L9),p=(0,a.Ps)(s(),c.Ui,c.VE)},92905:(e,n,t)=>{"use strict";t.d(n,{R:()=>g});var r=t(67294),l=t(14646);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.08.32L5.78 4.6 1.5.3.88.94l4.3 4.29L.88 9.5l.62.61 4.29-4.29 4.29 4.29.61-.61L6.4 5.2 10.69.94"});function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var u=r.createElement("path",{d:"M12.6.59L7 6.19 1.39.6l-.8.8L6.19 7 .6 12.61l.8.8L7 7.81l5.61 5.6.8-.8L7.81 7l5.6-5.61"});function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.08.89l-3.5 3.5-3.5-3.5-.5.5 3.5 3.5-3.5 3.5.5.5 3.5-3.5 3.5 3.5.5-.5-3.5-3.5 3.5-3.5"}),m={EXTRA_SMALL:function(e){return r.createElement("svg",c({width:9,height:9},e),s)},SMALL:function(e){return r.createElement("svg",a({width:11,height:11,fill:"none"},e),o)},MEDIUM:function(e){return r.createElement("svg",i({width:14,height:14},e),u)}},d=function(e){return{fill:e.baseColor.fill.lighter,":hover":{fill:e.baseColor.fill.darker},":focus":{fill:e.baseColor.fill.darker}}},h=function(e){return{display:"flex",alignItems:"center",justifyContent:"center",padding:"EXTRA_SMALL"===e?"4px":"0px",margin:"0px",border:"0px",cursor:"pointer"}};function g(e){var n=e.onClick,t=e.size,a=void 0===t?"MEDIUM":t,o=e.ariaLabel,i=void 0===o?"close":o,u=(0,l.I)(),c=m[a];return r.createElement("button",{className:u(h(a)),onClick:n,"aria-label":i},r.createElement(c,{className:u(d)}))}},43191:(e,n,t)=>{"use strict";t.d(n,{hl:()=>d,qQ:()=>h,EV:()=>g,w7:()=>p,u6:()=>f});var r=t(28655),l=t.n(r),a=t(71439),o=t(97217),i=t(50458),u=t(68216);function c(){var e=l()(["\n  fragment getNavItemHref_publisher on Publisher {\n    id\n    ...publisherUrl_publisher\n  }\n  ","\n"]);return c=function(){return e},e}function s(){var e=l()(["\n  fragment getNavItemHref_headerNavigationItem on HeaderNavigationItem {\n    href\n    type\n    tags {\n      id\n      normalizedTagSlug\n    }\n  }\n"]);return s=function(){return e},e}var m,d=function(e,n,t){var r;switch(n.type){case o.Me.NAV_TYPE_LINK:return n.href||"#";case o.Me.NAV_TYPE_TAG:var l=null===(r=n.tags)||void 0===r?void 0:r[0],a=(null==l?void 0:l.normalizedTagSlug)||(null==l?void 0:l.id)||"";return(0,i.Whg)(e,a,t)}return"#"},h=(0,a.Ps)(s()),g=(0,a.Ps)(c(),u.uI);!function(e){e.MissingName="Please enter a section name",e.MissingTag="Please add a tag",e.MissingLink="Please enter a link",e.MissingNameAndTag="Please enter a section name and a tag",e.MissingNameAndLink="Please enter a section name and a link"}(m||(m={}));var p=function(e){var n;switch(e.type){case o.Me.NAV_TYPE_TAG:if(null===(n=e.tagSlugs)||void 0===n||!n.length)return e.name?m.MissingTag:m.MissingNameAndTag;break;case o.Me.NAV_TYPE_LINK:if(null==e||!e.href)return e.name?m.MissingLink:m.MissingNameAndLink}return e.name?null:m.MissingName},v=function(e){return!p(e)},f=function(e){return 0===e.length||(null==e?void 0:e.every(v))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/42174.509641ca.chunk.js.map