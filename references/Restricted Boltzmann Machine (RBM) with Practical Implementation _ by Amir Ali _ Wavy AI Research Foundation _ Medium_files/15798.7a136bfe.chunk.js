(self.webpackChunklite=self.webpackChunklite||[]).push([[15798],{14603:(e,n,i)=>{"use strict";i.d(n,{x:()=>u});var l=i(319),a=i.n(l),t=i(61243),d=i(37205),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowerCount_publisher"}}]}}].concat(a()(d.j.definitions))},m=i(1279),s=i(84492),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AuthorInfo_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherName_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherDescription_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}}]}}].concat(a()(t.qy.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherName_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),a()(o.definitions),a()(m.m.definitions),a()(s.i.definitions),a()(t.FB.definitions))}},1279:(e,n,i)=>{"use strict";i.d(n,{m:()=>l});var l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherDescription_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bio"}}]}}]}}]}},89199:(e,n,i)=>{"use strict";i.d(n,{b:()=>l});var l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowingCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followingCount"}},{kind:"Field",name:{kind:"Name",value:"collectionFollowingCount"}}]}},{kind:"Field",name:{kind:"Name",value:"followedCollections"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},12549:(e,n,i)=>{"use strict";i.d(n,{gp:()=>c,DX:()=>v,b5:()=>S});var l=i(28655),a=i.n(l),t=i(71439),d=i(67294),o=i(25735),m=i(93310),s=i(87691),u=i(21372),r=i(50458);function k(){var e=a()(["\n  fragment PublisherFollowingCount_publisher on Publisher {\n    __typename\n    id\n    ... on User {\n      socialStats {\n        followingCount\n        collectionFollowingCount\n      }\n      followedCollections\n      username\n    }\n  }\n"]);return k=function(){return e},e}var c=function(e){var n,i,l,a,t=(0,o.VB)({name:"enable_fix_follow_counts",placeholder:!1}),d=null!==(n="Collection"===e.__typename?0:(null===(i=e.socialStats)||void 0===i?void 0:i.followingCount)+e.followedCollections)&&void 0!==n?n:0;return t&&"User"===e.__typename&&(d=(null===(l=e.socialStats)||void 0===l?void 0:l.followingCount)+(null===(a=e.socialStats)||void 0===a?void 0:a.collectionFollowingCount)),{followingCount:d,isFollowingCountVisible:d>0}},v=function(e){var n,i=e.publisher,l=e.linkStyle,a=void 0===l?"SUBTLE":l,t=c(i),o=t.followingCount,k=t.isFollowingCountVisible,v="User"===i.__typename?(0,r.MzF)(null!==(n=i.username)&&void 0!==n?n:""):"",S=!!v;if(!k)return null;var p="".concat((0,u.pY)(o)," Following");return S?d.createElement(m.r,{linkStyle:a,href:v},p):d.createElement(s.F,{tag:"span",scale:"L",color:"DARKER"},p)},S=(0,t.Ps)(k())},61243:(e,n,i)=>{"use strict";i.d(n,{qy:()=>u,FB:()=>r});var l=i(319),a=i.n(l),t=i(89199),d=i(68216),o=i(14337),m=i(54341),s=i(77136),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}}]},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(a()(t.b.definitions),a()(d.$m.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}}].concat(a()(o.v.definitions))};[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherSidebarFollowsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"}}]}}]}}]}}].concat(a()(m.O.definitions),a()(k.definitions),a()(s.g.definitions))},77136:(e,n,i)=>{"use strict";i.d(n,{g:()=>o});var l=i(319),a=i.n(l),t=i(84683),d=i(19308),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat(a()(t.d.definitions),a()(d.Iq.definitions))}},75210:(e,n,i)=>{"use strict";i.d(n,{L:()=>s});var l=i(67294),a=i(71652),t=i(82405),d=i(77355),o=i(20113),m=i(87691),s=function(e){var n=e.collection,i=e.buttonSize,s=e.buttonStyleFn,u=n.name,r=n.description;return l.createElement(d.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},l.createElement(d.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},l.createElement(d.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},l.createElement(o.X6,{scale:"S"},u),l.createElement(m.F,{scale:"S"},r)),l.createElement(d.x,null,l.createElement(a.v,{collection:n,link:!0}))),l.createElement(d.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},l.createElement(m.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),l.createElement(t.Fp,{collection:n,simpleButton:!0,buttonSize:i,buttonStyleFn:s,susiEntry:"follow_card"})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/15798.7a136bfe.chunk.js.map