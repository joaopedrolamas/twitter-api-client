(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["endpoints.Birdwatch"],{72609:e=>{e.exports={queryId:"3ss48WFwGokBH_gj8t_8aQ",operationName:"BirdwatchAliasSelect",operationType:"mutation",metadata:{featureSwitches:[]}}},74147:e=>{e.exports={queryId:"88OmI0lxLM2MrNsVEdGVYg",operationName:"BirdwatchFetchContributorNotesSlice",operationType:"query",metadata:{featureSwitches:["responsive_web_graphql_timeline_navigation_enabled","tweetypie_unmention_optimization_enabled","vibe_api_enabled","responsive_web_edit_tweet_api_enabled","graphql_is_translatable_rweb_tweet_is_translatable_enabled","view_counts_everywhere_api_enabled","longform_notetweets_consumption_enabled","tweet_awards_web_tipping_enabled","freedom_of_speech_not_reach_fetch_enabled","standardized_nudges_misinfo","tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled","interactive_text_enabled","responsive_web_text_conversations_enabled","longform_notetweets_richtext_consumption_enabled","responsive_web_twitter_blue_verified_badge_is_enabled","responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled","responsive_web_enhance_cards_enabled"]}}},42987:e=>{e.exports={queryId:"TKdL0YFsX4DMOpMKeneLvA",operationName:"BirdwatchCreateAppeal",operationType:"mutation",metadata:{featureSwitches:[]}}},4095:e=>{e.exports={queryId:"0NTp75x6x6U1TLiUnYeHAA",operationName:"BirdwatchCreateNote",operationType:"mutation",metadata:{featureSwitches:["responsive_web_graphql_timeline_navigation_enabled","responsive_web_twitter_blue_verified_badge_is_enabled","responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled"]}}},24256:e=>{e.exports={queryId:"xWLuzZoATvfEIEGxnsLt7w",operationName:"BirdwatchCreateRating",operationType:"mutation",metadata:{featureSwitches:[]}}},31964:e=>{e.exports={queryId:"IKS_qrShkDyor6Ri1ahd9g",operationName:"BirdwatchDeleteNote",operationType:"mutation",metadata:{featureSwitches:[]}}},36858:e=>{e.exports={queryId:"OpvCOyOoQClUND66zDzrnA",operationName:"BirdwatchDeleteRating",operationType:"mutation",metadata:{featureSwitches:[]}}},97571:e=>{e.exports={queryId:"FLgLReVIssXjB_ui3wcrRQ",operationName:"BirdwatchEditNotificationSettings",operationType:"mutation",metadata:{featureSwitches:[]}}},18545:e=>{e.exports={queryId:"szoXMke8AZOErso908iglw",operationName:"BirdwatchFetchAliasSelfSelectOptions",operationType:"query",metadata:{featureSwitches:[]}}},92661:e=>{e.exports={queryId:"LUEdtkcpBlGktUtms4BvwA",operationName:"BirdwatchFetchAliasSelfSelectStatus",operationType:"query",metadata:{featureSwitches:[]}}},68783:e=>{e.exports={queryId:"pMbW6Y4LuS5MzlSOEqERJQ",operationName:"BirdwatchFetchAuthenticatedUserProfile",operationType:"query",metadata:{featureSwitches:[]}}},52751:e=>{e.exports={queryId:"btgGtchypc3D491MJ7XXWA",operationName:"BirdwatchFetchBirdwatchProfile",operationType:"query",metadata:{featureSwitches:[]}}},46880:e=>{e.exports={queryId:"9qMnIpGc_7Cl7lO-kUICOw",operationName:"BirdwatchFetchGlobalTimeline",operationType:"query",metadata:{featureSwitches:["responsive_web_twitter_blue_verified_badge_is_enabled","responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","responsive_web_graphql_timeline_navigation_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled","tweetypie_unmention_optimization_enabled","vibe_api_enabled","responsive_web_edit_tweet_api_enabled","graphql_is_translatable_rweb_tweet_is_translatable_enabled","view_counts_everywhere_api_enabled","longform_notetweets_consumption_enabled","tweet_awards_web_tipping_enabled","freedom_of_speech_not_reach_fetch_enabled","standardized_nudges_misinfo","tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled","interactive_text_enabled","responsive_web_text_conversations_enabled","longform_notetweets_richtext_consumption_enabled","responsive_web_enhance_cards_enabled"]}}},10957:e=>{e.exports={queryId:"YwWrVFjt-JFzAIoORhb7iQ",operationName:"BirdwatchFetchNotes",operationType:"query",metadata:{featureSwitches:["responsive_web_graphql_timeline_navigation_enabled","responsive_web_twitter_blue_verified_badge_is_enabled","responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled"]}}},38389:e=>{e.exports={queryId:"KEMqX7AZZ_4aB9yYSNQk8g",operationName:"BirdwatchFetchOneNote",operationType:"query",metadata:{featureSwitches:["responsive_web_graphql_timeline_navigation_enabled","responsive_web_twitter_blue_verified_badge_is_enabled","responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled"]}}},78111:e=>{e.exports={queryId:"9bDdJ6AL26RLkcUShEcF-A",operationName:"BirdwatchFetchPublicData",operationType:"query",metadata:{featureSwitches:[]}}},85949:e=>{e.exports={queryId:"cED9wJy8Nd1kZCCYuIq9zQ",operationName:"BirdwatchProfileAcknowledgeEarnOut",operationType:"mutation",metadata:{featureSwitches:[]}}},10695:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>te,isFatalBirdwatchGlobalTimelineError:()=>H});var a=i(6899),r=i(69114),n=i(72599),_=i(17360),o=i(83175),s=i(46395),l=i(28962),d=i(30669),c=i(85364);const p=(e,t,i)=>{if(null==t||!t.data_v1)return null;const a=t.data_v1.summary,{tweet_results:r,...n}=t;return{...n,data_v1:{...n.data_v1,summary:a&&(0,l.Z)(e,a)},tombstone:t.tombstone&&(0,l.Z)(e,t.tombstone),tweet:null==r?void 0:r.result,tweetId:i}},u=new a.fK.Entity("birdwatchNotes",{},{idAttribute:e=>e.tweet_id,processStrategy:e=>{const t=(0,d.$)(),i={};if(e.misleading_birdwatch_notes){const a=e.misleading_birdwatch_notes.notes.map((e=>p(t,e)));i.misleading_ids=a.filter(Boolean)}if(e.not_misleading_birdwatch_notes){const a=e.not_misleading_birdwatch_notes.notes.map((e=>p(t,e)));i.not_misleading_ids=a.filter(Boolean)}return e.self_birdwatch_note&&(i.ownNoteId=e.self_birdwatch_note.rest_id),i}}),h=new a.fK.Entity("birdwatchNotes",{},{idAttribute:e=>e.alias,processStrategy:e=>{const t=(0,d.$)(),{notes_slice:i,...a}=e;return i&&(a.notes=i.notes.map((e=>p(t,e))).filter(Boolean)),a}}),w=new a.fK.Entity("birdwatchContributorNotes",{},{idAttribute:"rest_id",processStrategy:(e,t,i)=>{var a,r;const{tweet_results:n,..._}=e,o={..._},l=(0,d.$)(),c=null!=n&&null!=(a=n.result)&&a.tweet?null==n||null==(r=n.result)?void 0:r.tweet:null==n?void 0:n.result,u=p(l,o,c)||{};return(0,s.Z)(u,t,i)}});w.define({tweetId:c.Z});const b=new a.fK.Entity("birdwatchNotes",{},{idAttribute:e=>e.rest_id,processStrategy:e=>p((0,d.$)(),e)});var v=i(72609),f=i.n(v),m=i(74147),g=i.n(m),y=i(42987),S=i.n(y),q=i(4095),N=i.n(q),B=i(24256),x=i.n(B),L=i(31964),I=i.n(L),Q=i(36858),T=i.n(Q),A=i(97571),F=i.n(A),k=i(18545),E=i.n(k),C=i(92661),O=i.n(C),D=i(68783),G=i.n(D),R=i(52751),P=i.n(R),z=i(46880),M=i.n(z),Z=i(10957),U=i.n(Z),K=i(38389),Y=i.n(K),j=i(78111),X=i.n(j),J=i(85949),W=i.n(J),V=i(82249);const $={result:[],entities:{},slice_info:{}},H=(e,t)=>{var i,a;const r=null==t||null==(i=t.viewer)||null==(a=i.birdwatch_home_page)?void 0:a.body;return r||(0,n.ZP)("GQL URT: Failed to render Birdwatch Global timeline"),!r&&(0,_.jB)(e)},ee=(e,t)=>e.graphQL(E(),{}).then((i=>{const{options:a,retry_in_millis:n}=i.authenticated_user_birdwatch_alias_self_select_options||{};return n&&t<5?(0,r.Z)(n).then((()=>ee(e,t+1))):a})),te=({apiClient:e,featureSwitches:t})=>({acknowledgeEarnOut:()=>e.graphQL(W(),{}),createAppeal:t=>e.graphQL(S(),{note_id:t.note_id}),createNote:i=>e.graphQL(N(),{tweet_id:i.tweet_id,data_v1:i.data,...(0,o.S)(t)}).then((e=>{var t,i,r;if("BirdwatchError"===(null==(t=e.birdwatchnote_create_v2)?void 0:t.type))return{error:"BirdwatchError",reason:null==(i=e.birdwatchnote_create_v2)?void 0:i.reason,error_code:null==(r=e.birdwatchnote_create_v2)?void 0:r.error_code};const n={...e.birdwatchnote_create_v2};return n&&(0,a.Fv)(n,b)})),createRating(i){const{data:a,note_id:r}=i,n=t.isTrue("responsive_web_birdwatch_ratings_v2_enabled")?{note_id:r,data_v2:a}:{note_id:r,data_v1:a};return e.graphQL(x(),n).then((e=>{var t,i;return"BirdwatchError"===(null==(t=e.birdwatchnote_rate_v3)?void 0:t.type)?{error:"BirdwatchError",error_code:null==(i=e.birdwatchnote_rate_v3)?void 0:i.error_code}:{...e.birdwatchnote_rate_v3}}))},deleteNote:t=>e.graphQL(I(),{note_id:t.note_id}),deleteRating:t=>e.graphQL(T(),{note_id:t.note_id}),editNotificationSettings:t=>e.graphQL(F(),{settings:t.settings}),fetchOneNote:i=>e.graphQL(Y(),{note_id:i.note_id,...(0,o.S)(t)}).then((e=>{const t={...e.birdwatch_note_by_rest_id};return t&&(0,a.Fv)(t,b)})),fetchNotes(i){const{tweet_id:r}=i;return e.graphQL(U(),{tweet_id:r,...(0,o.S)(t)}).then((e=>{const t=e.tweet_result_by_rest_id.result,i={...null!=t&&t.tweet?t.tweet:t,tweet_id:r};return i&&(0,a.Fv)(i,u)}))},fetchBirdwatchProfile:t=>e.graphQL(P(),{alias:t.alias}).then((e=>{const t={...e.birdwatch_profile_by_alias};return t&&(0,a.Fv)(t,h)})),fetchBirdwatchContributorNotesSlice:i=>i?e.graphQL(g(),{count:10,...i,...(0,o.S)(t)},(0,_.kj)((e=>{var t;return!(null!=e&&null!=(t=e.birdwatch_profile_by_alias)&&t.notes_slice)}),"GQL Birdwatch: Failed to fetch Contributor Notes Slice")).then((e=>{var t;const i=null==e||null==(t=e.birdwatch_profile_by_alias)?void 0:t.notes_slice;if(i){const{entities:e,result:t}=(0,a.Fv)(i.notes,[w]);return{result:t,entities:e,slice_info:i.slice_info}}return $})):Promise.resolve($),fetchBirdwatchContributorDeletedNotesSlice:i=>i?e.graphQL(g(),{count:10,...i,...(0,o.S)(t)},(0,_.kj)((e=>{var t;return!(null!=e&&null!=(t=e.birdwatch_profile_by_alias)&&t.deleted_notes_slice)}),"GQL Birdwatch: Failed to fetch Contributor Notes Slice")).then((e=>{var t;const i=null==e||null==(t=e.birdwatch_profile_by_alias)?void 0:t.deleted_notes_slice;if(i){const{entities:e,result:t}=(0,a.Fv)(i.notes,[w]);return{result:t,entities:e,slice_info:i.slice_info}}return $})):Promise.resolve($),fetchAuthenticatedUserProfile:()=>e.graphQL(G(),{}).then((e=>e.authenticated_user_birdwatch_profile)),fetchAliasSelfSelectStatus:()=>e.graphQL(O(),{}).then((e=>e.authenticated_user_birdwatch_alias_self_select_status)),fetchAliasSelfSelectOptions:()=>ee(e,0),selectAlias:t=>e.graphQL(f(),{alias:t.alias}),fetchPublicData:()=>e.graphQL(X(),{}).then((e=>({...e.birdwatch_latest_public_data_file_bundle}))),fetchGlobalTimeline:()=>e.graphQL(M(),{...(0,o.d)(t)},H).then((e=>{var t;const i=null==e||null==(t=e.viewer)?void 0:t.birdwatch_home_page;return null!=i&&i.body?i:V.ln}))})},83175:(e,t,i)=>{"use strict";i.d(t,{S:()=>_,d:()=>n});var a=i(60917),r=i.n(a);const n=e=>{const t=e.isTrue("responsive_web_reactions_enabled");return{..._(e),withDownvotePerspective:e.isTrue("rweb_reply_downvote_enabled"),withReactionsMetadata:t,withReactionsPerspective:t}},_=e=>r()}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Birdwatch.68d959ea.js.map