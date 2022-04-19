(self.webpackChunklite=self.webpackChunklite||[]).push([[27927],{14856:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(67294);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=r.createElement("rect",{x:26.25,y:9.25,width:.5,height:6.5,rx:.25,strokeWidth:.5}),l=r.createElement("rect",{x:29.75,y:12.25,width:.5,height:6.5,rx:.25,transform:"rotate(90 29.75 12.25)",strokeWidth:.5}),s=r.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5",strokeLinecap:"round"}),a=r.createElement("path",{d:"M11.5 14.5L19 20l4-3",strokeLinecap:"round"});const u=function(e){return r.createElement("svg",i({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),o,l,s,a)}},66802:(e,n,t)=>{"use strict";t.d(n,{R4:()=>i,Cp:()=>o,o6:()=>l,Ey:()=>s,Ue:()=>a,xG:()=>u,Hp:()=>c});var r=t(93661),i=function(e,n,t){var r,i;return"undefined"!=typeof window&&e&&n&&!!(window.ApplePaySession&&null!==(r=window.ApplePaySession)&&void 0!==r&&r.supportsVersion(t)&&null!==(i=window.ApplePaySession)&&void 0!==i&&i.canMakePayments())},o=function(e){return"US"===e||"CA"===e},l=function(e){return!!e&&(!e.country||o(e.country)&&!e.zipcode)},s=function(e){return"We couldn’t process your payment. Verify that you entered your ".concat("CreditCard"===e?"card ":"","information correctly, or try again with a different payment method.")},a=function(e,n){var t="";switch(n){case"CA":return e===r.FM.Monthly&&(t="monthlyCad"),e===r.FM.Yearly&&(t="yearlyCad"),t;default:return t}};function u(e){var n=e.amount,t=e.currency,r=e.locale,i=e.floatingDigits,o=void 0===i?[2,2]:i,l=e.isLongFormat,s=void 0!==l&&l,a=r||"undefined"!=typeof window&&window.navigator.language||"en-US",u=t||"USD";if(!Intl)return"".concat(n," ").concat(u);try{var c=new Intl.NumberFormat(a,{style:"currency",currency:u,minimumFractionDigits:o[0],maximumFractionDigits:o[1],currencyDisplay:"narrowSymbol"}).format(n);return s?"".concat(c," ").concat(t):c}catch(e){return String(n)}}var c=function(e,n,t){var r=String(e);return t?"".concat(r," ").concat(n):r}},76107:(e,n,t)=>{"use strict";t.d(n,{b:()=>r});var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MembershipUpsellModal_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},61279:(e,n,t)=>{"use strict";t.d(n,{DI:()=>P,nj:()=>_,oT:()=>I});var r=t(59713),i=t.n(r),o=t(63038),l=t.n(o),s=t(28655),a=t.n(s),u=t(82492),c=t.n(u),d=t(71439),m=t(46829),p=t(67294),b=t(25735),v=t(9354),f=t(75880),w=t(18627),h=t(66411),y=t(78285);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(){var e=a()(["\n  mutation fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe($userId: ID!) {\n    fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe(userId: $userId) {\n      __typename\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function V(){var e=a()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);return V=function(){return e},e}function k(){var e=a()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n"]);return k=function(){return e},e}function x(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3_viewerEdge on NewsletterV3 {\n    viewerEdge {\n      id\n      isSubscribed\n    }\n  }\n"]);return x=function(){return e},e}function M(){var e=a()(["\n  fragment useNewsletterV3Subscription_user on User {\n    id\n    username\n    newsletterV3 {\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return M=function(){return e},e}function N(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    type\n    slug\n    name\n    collection {\n      slug\n    }\n    user {\n      id\n      name\n      username\n      newsletterV3 {\n        id\n      }\n    }\n  }\n"]);return N=function(){return e},e}var P=(0,d.Ps)(N()),_=(0,d.Ps)(M(),P),C=((0,d.Ps)(x()),(0,d.Ps)(k())),O=(0,d.Ps)(V()),U=(0,d.Ps)(E(),P),I=function(e){var n=e.newsletterV3,t=e.creator,r=e.newsletterName,i=n||{},o=i.id,s=i.type,a=i.slug,u=i.collection,d=(null==n?void 0:n.user)||t,g=null!=r?r:null==n?void 0:n.name,E=p.useState(!1),V=l()(E,2),k=V[0],x=V[1],M=(0,v.T)({newsletterSlug:a,collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username}),N=M.viewerEdge,P=M.loading,I=(0,b.VB)({name:"enable_auto_follow_on_subscribe",placeholder:!1}),T=p.useState(!1),A=l()(T,2),F=A[0],D=A[1];p.useEffect((function(){D(!(null==N||!N.isSubscribed))}),[null==N?void 0:N.isSubscribed]);var L=(0,w.Av)(),R=(0,h.Qi)(),B=(0,y.w)();k&&L.event("newsletterV3.subscribe.error",{newsletterV3Id:o});var j=function(e,n,t){if(t){var r={id:"User:".concat(null==d?void 0:d.id),fragment:_,fragmentName:"useNewsletterV3Subscription_user"},i=e.readFragment(r);e.writeFragment(S(S({},r),{},{data:S(S({},i),{},{newsletterV3:t})}))}if(N){var o=e.readQuery({query:v.p,variables:{newsletterSlug:a,collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username}}),l=c()({},o,{newsletterV3:{viewerEdge:{isSubscribed:n}}});e.writeQuery({query:v.p,variables:{newsletterSlug:a||"",collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username},data:l})}if(n&&I){var s=e.readQuery({query:f.J4,variables:{userId:null==d?void 0:d.id}}),m=c()({},s,{user:{viewerEdge:{isFollowing:!0}}});e.writeQuery({query:f.J4,variables:{userId:(null==d?void 0:d.id)||""},data:m})}},Y=(0,m.useMutation)(C,{onCompleted:function(e){var n=e.subscribeNewsletterV3;x(!n),n&&(L.event("newsletterV3.subscribeClicked",{newsletterV3Id:o,source:R}),D(!0))},update:function(e){j(e,!0)}}),$=l()(Y,1)[0],G=(0,m.useMutation)(O,{onCompleted:function(e){var n=e.unsubscribeNewsletterV3;x(!n),n&&(D(!1),B({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:g||null,newsletterType:s||null,unsubscribeFn:function(){return D(!1)}}}))},update:function(e){j(e,!1)}}),W=l()(G,1)[0],z=(0,m.useMutation)(U,{onCompleted:function(e){var n=e.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe;x(!n),n&&(L.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.id,source:R}),D(!0))},update:function(e,n){var t,r=S({},null===(t=n.data)||void 0===t?void 0:t.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe);j(e,!0,r)}}),H=l()(z,1)[0];return{isSubscribed:F,hasError:k,setSubscribe:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];x(!1),e&&!n&&null!=t&&t.id?H({variables:{userId:null==t?void 0:t.id}}):e&&null!=n&&n.id?$({variables:{newsletterV3Id:null==n?void 0:n.id,shouldRecordConsent:r}}):null!=n&&n.id?W({variables:{newsletterV3Id:null==n?void 0:n.id}}):x(!0)},loading:P}}},93661:(e,n,t)=>{"use strict";t.d(n,{FM:()=>o,d5:()=>m,kr:()=>p,OS:()=>b});var r,i,o,l=t(59713),s=t.n(l),a=t(66802),u=t(25735),c=t(91157);!function(e){e.Monthly="monthly",e.Yearly="yearly",e.YearlyStaff="yearlyStaff",e.YearlyPriceSaved="yearlyPriceSaved",e.YearlyStaffPriceSaved="YearlyStaffPriceSaved"}(o||(o={}));var d={CA:{plan:(r={},s()(r,o.Monthly,5),s()(r,o.Yearly,50),s()(r,o.YearlyStaff,1),s()(r,o.YearlyPriceSaved,10),s()(r,o.YearlyStaffPriceSaved,49),r),currency:"CAD"},US:{plan:(i={},s()(i,o.Monthly,5),s()(i,o.Yearly,50),s()(i,o.YearlyStaff,1),s()(i,o.YearlyPriceSaved,10),s()(i,o.YearlyStaffPriceSaved,49),i),currency:"USD"}},m=function(){var e=(0,c.x)(),n=e.loading,t=e.geolocation,r=!!(0,u.VB)({name:"enable_lite_canada_plan",placeholder:!1}),i=!n&&t&&t.country?t.country:"";return r&&"CA"===i?"CA":"US"},p=function(e){var n=e.membershipType,t=e.country,r=d[t],i=r.currency,l=r.plan[n||o.Yearly];if(!l)throw new Error("Unavailable membership price");return{amount:l,currency:i}},b=function(e){var n=e.membershipType,t=e.excludeCurrencySign,r=void 0!==t&&t,i=e.isLongFormat,o=void 0!==i&&i,l=m(),s=p({membershipType:n,country:l}),u=s.amount,c=s.currency;return r?(0,a.Hp)(u,c,o):(0,a.xG)({amount:u,currency:c,floatingDigits:[0,0],isLongFormat:o})}},9354:(e,n,t)=>{"use strict";t.d(n,{T:()=>a,p:()=>u});var r=t(28655),i=t.n(r),o=t(46829),l=t(71439);function s(){var e=i()(["\n  query NewsletterV3ViewerEdge($newsletterSlug: ID!, $collectionSlug: ID, $username: ID) {\n    newsletterV3(\n      newsletterSlug: $newsletterSlug\n      collectionSlug: $collectionSlug\n      username: $username\n    ) {\n      ... on NewsletterV3 {\n        id\n        viewerEdge {\n          id\n          isSubscribed\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}var a=function(e){var n,t=e.newsletterSlug,r=void 0===t?"":t,i=e.collectionSlug,l=e.username,s=(0,o.useQuery)(u,{variables:{newsletterSlug:r,collectionSlug:i,username:l},ssr:!1,skip:!r&&!l}),a=s.loading,c=s.error,d=s.data;return a?{loading:a}:c?{error:c}:{viewerEdge:null==d||null===(n=d.newsletterV3)||void 0===n?void 0:n.viewerEdge}},u=(0,l.Ps)(s())},27927:(e,n,t)=>{"use strict";t.d(n,{X:()=>le,w:()=>se});var r=t(28655),i=t.n(r),o=t(63038),l=t.n(o),s=t(71439),a=t(67294),u=t(46829),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateUserPostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userUpdatePostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}}]}}]}}]},d=t(25735),m=t(6443),p=t(84531),b=t(13791),v=t(77355),f=t(8126),w=t(87691),h=t(18627),y=t(66411),g=t(43487),S=t(87498),E=t(78870),V=t(50458),k="after_subscribe_membership_upsell",x=function(e){var n=e.user,t=e.isVisible,r=e.hide,i=(0,g.v9)((function(e){return e.config.authDomain})),o=(0,h.Av)(),s=(0,m.H)(),x=s.value,M=s.loading,N=!!(0,d.VB)({name:"enable_referred_memberships",placeholder:!1});a.useEffect((function(){var e;M||null!=x&&x.postSubscribeMembershipUpsellShownAt||(o.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:k}),_())}),[M]);var P=(0,u.useMutation)(c,{optimisticResponse:{userUpdatePostSubscribeMembershipUpsellShownAt:{__typename:"User",id:(null==x?void 0:x.id)||"",postSubscribeMembershipUpsellShownAt:(new Date).getTime()}}}),_=l()(P,1)[0];return N?a.createElement(y.cW,{source:{name:k}},a.createElement(b.v,{isVisible:t,hide:r,withCloseButton:!0,withAnimation:!0,buttonStyle:"STRONG",buttonSize:"REGULAR",cancelText:"Not now",confirmText:"Become a member",onConfirm:function(){var e,t;o.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:k}),t=(0,E.Rk)((0,V.c5p)(i),{subscribeToUserId:n.id,source:k}),window.location.href=t},showCancelButton:!0,isDestructiveAction:!1},a.createElement(v.x,{marginBottom:"24px"},a.createElement(p.z,{miroId:n.imageId||S.gG,alt:n.name||"",diameter:80,freezeGifs:!1})),a.createElement(v.x,{marginBottom:{xs:"8px",sm:"8px",md:"16px",lg:"16px",xl:"16px"}},a.createElement(f.F1,{scale:{xs:"S",sm:"S",md:"L",lg:"L",xl:"L"}},"You’re subscribed to get email updates. Become a member for more.")),a.createElement(v.x,{marginBottom:"32px"},a.createElement(w.F,{tag:"span",scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Your membership fee directly supports ",n.name," and other writers you read. Get full access to every story on Medium.")))):null},M=t(76107),N=t(77280),P=t(61279),_=t(93661),C=t(98863),O=t(26350),U=t(43822),I=t(62685),T=t(47230),A=t(73917),F=t(26244),D=t(1383),L=t(14646),R=t(31889),B=t(34135),j=t(97217),Y=t(78285);function $(){return($=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var G=a.createElement("path",{d:"M14 7.29L15.6 9 18 6",strokeLinecap:"round",strokeLinejoin:"round"}),W=a.createElement("path",{d:"M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21",strokeLinecap:"round"}),z=a.createElement("path",{d:"M6 8.44l5.27 3.87 1.4-1.06.7-.52",strokeLinecap:"round"});const H=function(e){return a.createElement("svg",$({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),G,W,z)};function Q(){return(Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var q=a.createElement("path",{d:"M24 13l2 2 3-3.5",strokeLinecap:"round",strokeLinejoin:"round"}),J=a.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5",strokeLinecap:"round"}),K=a.createElement("path",{d:"M11.5 14.5L19 20l4-3",strokeLinecap:"round"});const X=function(e){return a.createElement("svg",Q({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),q,J,K)};function Z(){return(Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var ee=a.createElement("path",{strokeLinecap:"round",d:"M14.58 6.89h3.92M16.39 9V5.08M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),ne=a.createElement("path",{d:"M6 8.44l5.27 3.87 2.81-2.11",strokeLinecap:"round"});const te=function(e){return a.createElement("svg",Z({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),ee,ne)};var re=t(14856),ie=t(68894);function oe(){var e=i()(["\n  fragment UserSubscribeButton_user on User {\n    id\n    isPartnerProgramEnrolled\n    name\n    viewerEdge {\n      id\n      isFollowing\n      isUser\n    }\n    viewerIsUser\n    newsletterV3 {\n      id\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n    ...useNewsletterV3Subscription_user\n    ...MembershipUpsellModal_user\n  }\n  ","\n  ","\n  ","\n"]);return oe=function(){return e},e}var le=function(e){var n=e.user,t=e.showFirstUseToolTip,r=void 0!==t&&t,i=e.showMembershipUpsellModal,o=void 0!==i&&i,s=e.showPostFollowSubscribeTooltip,u=void 0!==s&&s,c=e.hidePostFollowSubscribeTooltip,p=void 0===c?function(){}:c,b=e.isVisible,f=void 0===b||b,S=e.isCompact,k=void 0!==S&&S,M=a.useRef(null),$=(0,L.I)(),G=(0,R.F)(),W=(0,m.H)().value,z=(0,ie.O)(!1),Q=l()(z,3),q=Q[0],J=Q[1],K=Q[2],Z=n.newsletterV3,ee=(0,Y.w)(),ne=(0,h.Av)(),oe=(0,y.pK)(),le=(0,y.Qi)(),se=(0,N.PM)(),ae=(0,P.oT)({newsletterV3:Z,creator:n,newsletterName:n.name||void 0}),ue=ae.isSubscribed,ce=ae.hasError,de=ae.loading,me=ae.setSubscribe,pe=j.T3.WRITER_SUBSCRIPTIONS_TOOLTIP,be=!(null==W||!W.dismissableFlags.includes(pe)),ve=!!(0,d.VB)({name:"enable_referred_memberships",placeholder:!1}),fe=(0,g.v9)((function(e){return e.config.authDomain})),we=(0,E.Rk)((0,V.c5p)(fe),{subscribeToUserId:n.id,source:le}),he=!(null==W||!W.mediumMemberAt),ye=a.useState(!1),ge=l()(ye,2),Se=ge[0],Ee=ge[1],Ve=a.useState(!1),ke=l()(Ve,2),xe=ke[0],Me=ke[1],Ne=!be&&r&&!!W&&!ue,Pe=(0,y.P7)(se||"").susiEntry,_e=void 0===Pe?"":Pe,Ce=["newsletter_v3_promo","writer_subscription_landing"].includes(_e),Oe=["newsletter_v3_promo"].includes(_e),Ue=(0,_.OS)({membershipType:_.FM.Monthly}),Ie=!1,Te=function(){var e;!Ie&&f&&Ae()&&(ne.event("newsletterV3.subscribePresented",{newsletterV3Id:(null===(e=n.newsletterV3)||void 0===e?void 0:e.id)||"",source:oe}),Ie=!0)},Ae=function(){var e;if(!M.current)return!1;var n=null===(e=M.current)||void 0===e?void 0:e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=window.innerHeight};a.useEffect((function(){return Te(),window&&B.V6.on("scroll",Te),function(){B.V6.off("scroll",Te)}}),[]),a.useEffect((function(){Te()}),[f]);var Fe=(0,ie.O)(!1),De=l()(Fe,3),Le=De[0],Re=De[1],Be=De[2],je=function(e,n){var t=(0,m.H)(),r=t.value,i=t.loading,o=a.useRef(null),l=!!(0,d.VB)({name:"enable_referred_memberships",placeholder:!1}),s=!(null==r||!r.mediumMemberAt),u=(0,N.PM)(),c=(0,y.P7)(u||"").susiEntry,p=["newsletter_v3_promo","writer_subscription_landing","subscribe_user"].includes(void 0===c?"":c);if(i)return!1;if(null!==o.current)return o.current;var b=l&&p&&!s&&!e.viewerEdge.isUser&&!!e.isPartnerProgramEnrolled&&!(null!=r&&r.postSubscribeMembershipUpsellShownAt);return o.current=b,b}(n),Ye=a.useState(!1),$e=l()(Ye,2),Ge=$e[0],We=$e[1];a.useEffect((function(){o&&ue&&!Ge&&je?Re():Be()}),[ue,Ge,je]),a.useEffect((function(){se&&!je&&Ce&&ue&&(!Oe&&le===_e||Oe)&&ee({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:n.name,newsletterType:j.Rr.NEWSLETTER_TYPE_AUTHOR,unsubscribeFn:function(){return me(!1)}}})}),[se,ue]),a.useEffect((function(){if(ue&&xe&&Z){var e=ve&&!he&&!!n.isPartnerProgramEnrolled;e&&ne.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:Z.id,source:le}),Ee(e),Me(!1)}}),[ue,xe,Z]);var ze=(0,C.f)().isWorkingPreview;if(ce||n.viewerEdge.isUser&&!ze)return null;var He,Qe=ue?"OBVIOUS":"STRONG",qe=function(e,n){return function(t){return{stroke:n?t.baseColor.background.normal:e,height:k?"23px":"36px",width:k?"23px":"36px"}}},Je=$(qe(G.accentColor.fill.normal,de)),Ke=$(qe(G.accentColor.background,de));He=ue?k?a.createElement(H,{className:Je}):a.createElement(X,{className:Je}):k?a.createElement(te,{className:Ke}):a.createElement(re.Z,{className:Ke});var Xe=a.createElement(T.z,{loading:de,buttonStyle:Qe,onClick:function(){var e;Me(!ue),W?ue?me(!1):W&&W.allowEmailAddressSharingEditorWriter?me(!0,!1):J():null!==(e=n.newsletterV3)&&void 0!==e&&e.id?ne.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.newsletterV3.id,source:le}):ne.event("user.LOSubscribeClicked",{targetUserId:n.id,source:le})},padding:"0","aria-label":"Subscribe"},He),Ze=function(){return a.createElement(v.x,{padding:"14px 12px 20px",maxWidth:"220px"},a.createElement(w.F,{tag:"div",scale:"S",color:"DARKER"},a.createElement("strong",null,"You're subscribed to ",n.name,". Become a member for more.")," Get full access to every story on Medium for ",Ue," a month."),a.createElement(v.x,{paddingTop:"8px"},a.createElement(U.a,{isButton:!0,buttonStyle:"STRONG",buttonSize:"SMALL",redirectUrl:we,width:"150px",onClick:function(){ne.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:Z.id,source:le})}},a.createElement(v.x,{textAlign:"center"},a.createElement(w.F,{scale:"S",color:"WHITE"},"Become a member")))))},en=function(){return a.createElement(v.x,{padding:"10px 12px",maxWidth:"166px"},a.createElement(w.F,{tag:"div",scale:"S",color:"DARKER"},"Subscribe to get an email whenever ",n.name," publishes."))},nn=function(e){var n=e.children;return a.createElement(A.J,{isVisible:!!p&&!ue,hide:p,placement:"bottom",popoverRenderFn:en,targetDistance:10,role:"tooltip"},n)},tn=function(e){var n=e.children;return a.createElement(A.J,{isVisible:!de&&Se,hide:function(){return Ee(!1)},placement:"bottom",popoverRenderFn:Ze,targetDistance:10,role:"tooltip"},n)},rn=function(e){var n=e.children;return a.createElement(F.$,{isVisible:!de&&!ue,hideOnClick:!0,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:"bottom",popoverRenderFn:en,role:"tooltip",targetDistance:10},n)},on=function(e){var n=e.children;return a.createElement(I.o,{isVisible:!de,flag:pe,targetDistance:10,text:"You can now subscribe to get stories delivered directly to your inbox.",darkTheme:!0},n)},ln=function(e){var n=e.children;return Ne?a.createElement(on,null,n):u&&!ue?a.createElement(nn,null,n):Se?a.createElement(tn,null,n):a.createElement(rn,null,n)};return a.createElement("div",{ref:M},a.createElement(ln,null,a.createElement(v.x,null,W&&a.createElement(D.Q,{onConfirm:function(){me(!0,!0)},isVisible:q,hide:K,titleText:"Confirm your subscription to ".concat(n.name),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"When you subscribe to a writer or publication, your email address will be shared with them so they can stay in contact with you outside of Medium. Opt out any time by unsubscribing in Settings."),W?Xe:a.createElement(O.R9,{operation:"register",newsletterV3:Z,user:n,actionUrl:Z?(0,V.Zul)(Z.id):(0,V.lcz)(n.id),susiEntry:"subscribe_user"},Xe))),Le&&a.createElement(x,{user:n,isVisible:Le,hide:function(){We(!0),Be()}}))},se=(0,s.Ps)(oe(),P.DI,P.nj,M.b)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/27927.0c766d23.chunk.js.map