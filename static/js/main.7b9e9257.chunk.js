(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},173:function(e,t,a){e.exports=a(403)},182:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){},213:function(e,t){},216:function(e,t,a){},384:function(e,t,a){},397:function(e,t,a){},399:function(e,t,a){},401:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),l=a.n(i),s=a(23),u=(a(182),a(26)),c=a(27),o=a(29),d=a(28),m=a(30),E=(a(184),a(167)),p=a.n(E),h=(a(186),function(){return r.a.createElement("span",null,"Nothing Playing, Party's Dead ",r.a.createElement("i",{className:"Tear-Icon far fa-sad-tear"}))}),f=function(){return r.a.createElement("i",{className:"fas fa-compact-disc Now-Playing-Icon"})},g=Object(s.b)(function(e){return{nowPlayingTitle:e.video.nowPlaying,username:e.user.username}})(function(e){var t=e.nowPlayingTitle,a=e.username;return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},r.a.createElement(f,null),""!==t?"Now Playing : "+t:r.a.createElement(h,null)),r.a.createElement("h3",{className:"App-title"},"Welcome, ",r.a.createElement("span",{className:"Username-Field"}," ",a," ")))}),y=a(12),v=a(95),b=a.n(v),S=a(94),N=a.n(S),_=a(10),P=a(42),O=a(33),I={initialVideo:{suggestedUser:"",nowPlaying:"",videoId:""},initialPlaylist:{currentPlaylist:[]},initialUser:{username:""},initialLobby:{users:[]}},T="UPDATE_CURRENT_VIDEO_TITLE",U="UPDATE_CURRENT_VIDEO_ID",A="UPDATE_SUGGESTED_USER",C="UPDATE_PLAYLIST",D="UPDATE_USERNAME",V="UPDATE_USERS",j=Object(P.b)({video:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.initialVideo,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(O.a)({},e,{nowPlaying:t.data});case U:return Object(O.a)({},e,{videoId:t.data});case A:return Object(O.a)({},e,{suggestedUser:t.data});default:return e}},playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.initialPlaylist,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(O.a)({},e,{currentPlaylist:t.data});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.initialUser,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(O.a)({},e,{username:t.data});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.initialLobby,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(O.a)({},e,{users:t.data});default:return e}}}),w=Object(P.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),k=a(168),L={NEW_USER:"NEW_USER",USER_JOINED:"USER_JOINED",FETCH_PLAYLIST:"FETCH_PLAYLIST",UPDATE_PLAYLIST:"UPDATE_PLAYLIST",FETCH_LOBBY_USERS:"FETCH_LOBBY_USERS",UPDATE_LOBBY_USERS:"UPDATE_LOBBY_USERS",PLAY_NEXT_VIDEO:"PLAY_NEXT_VIDEO",ADD_TO_PLAYLIST:"ADD_TO_PLAYLIST"},R={keys:{API_KEY:"AIzaSyDXQUtd40PzAqYAuet9-Ol0LzKrI6ZTDDM",API_BASE_URL:"https://www.googleapis.com/youtube/v3/search",SERVER_BASE_ENDPOINT:"https://tranquil-thicket-13222.herokuapp.com/"},environment:{debug:!1}},B=function(e){return{type:D,data:e}},Y=function(e){return{type:V,data:e}},q=a.n(k)()(R.keys.SERVER_BASE_ENDPOINT),H=function(){!function(){var e=localStorage.getItem("username"),t=e?{username:e}:{username:""};q.emit(L.NEW_USER,t),q.on(L.USER_JOINED,function(t){e?w.dispatch(B(e)):(w.dispatch(B(t.username)),localStorage.setItem("username",t.username))})}(),q.emit(L.FETCH_PLAYLIST),q.on(L.UPDATE_PLAYLIST,function(e){var t=e.videos,a=x.getHeadVideoPlaylist(t),n=a.videoId,r=a.videoTitle,i=a.suggestedUser;w.dispatch(x.updatePlaylist(t)),w.dispatch(x.updateCurrentVideoTitle(r)),w.dispatch(x.updateCurrentVideoId(n)),w.dispatch(x.updateSuggestedUser(i))}),q.emit(L.FETCH_LOBBY_USERS),q.on(L.UPDATE_LOBBY_USERS,function(e){w.dispatch(Y(e))})},F=function(e){q.emit(L.ADD_TO_PLAYLIST,e)},W=function(e){q.emit(L.PLAY_NEXT_VIDEO,e)},x={addVideoToQueue:function(e,t){var a=w.getState().user.username;F({suggestedUser:a,videoId:e,videoTitle:t})},updateCurrentVideoTitle:function(e){return{type:T,data:e}},updateCurrentVideoId:function(e){return{type:U,data:e}},updateSuggestedUser:function(e){return{type:A,data:e}},updatePlaylist:function(e){return{type:C,data:e}},getHeadVideoPlaylist:function(e){return e&&e[0]||{videoTitle:"",videoId:"",suggestedUser:""}},updateQueue:function(){var e=w.getState().video.videoId;W(e)}},M=(a(216),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e,t){x.addVideoToQueue(e,t)}},{key:"renderCols",value:function(e){var t=this,a=e.etag,n=e.snippet.title,i=e.snippet.thumbnails.high.url;return r.a.createElement(_.Col,{key:a,sm:12,md:6},r.a.createElement("li",{className:"Suggestion-Container",key:a},r.a.createElement(_.Panel,{className:"Panel-Wrapper"},r.a.createElement(_.Panel.Heading,null,r.a.createElement("div",{className:"Suggestion-Title"},n)),r.a.createElement(_.Panel.Body,null,r.a.createElement("div",null,r.a.createElement("img",{alt:"video-thumbnail",className:"Suggestion-Thumbnail",src:i})),r.a.createElement(_.Button,{className:"Add-Video-Button",bsStyle:"primary",onClick:function(){return t.handleClick(e.id.videoId,n)}},"Add To Queue")))))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.videos.map(function(t){return e.renderCols(t)}))}}]),t}(r.a.Component)),X=function(e){var t=e.videos.map(function(e){return r.a.createElement(_.Row,{key:e[0].etag,className:"show-grid"},r.a.createElement(M,{videos:e}))});return r.a.createElement("ul",{className:"Video-List"},r.a.createElement(_.Grid,null,t))},Q=a(169),J=a.n(Q),z={getVideos:function(e){return new Promise(function(t,a){var n=[];J.a.get(R.keys.API_BASE_URL+"?key="+R.keys.API_KEY+"&part=snippet&q="+e+"&maxResults=10").then(function(e){var a=e.data;(n=a.items.filter(function(e){return"youtube#video"===e.id.kind})).length%2!==0&&n.splice(-1,1),t(n)}).catch(function(e){a(e.response)})})}},G=(a(384),2),K=function(){return r.a.createElement("i",{className:"fas fa-headphones-alt Head-Phone-Icon"})},Z=function(){return r.a.createElement("div",{className:"Search-Video-Prompt-Container"},r.a.createElement(K,null),r.a.createElement("h3",{className:"Search-Video-Prompt-Prefix"}," Search for your favorite songs "),r.a.createElement("h4",{className:"Search-Video-Prompt-Suffix"}," Add them to the playlist and get this party started! "))},$=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).formatVideos=function(e){for(var t=[],a=0;a<e.length;a+=G){var n=[];n.push(e[a]),n.push(e[a+1]),t.push(n)}return t},a.getVideos=function(){z.getVideos(a.state.query).then(function(e){a.setState({results:a.formatVideos(e)})})},a.handleInputChange=function(e){a.setState({query:e.target.value},function(){a.state.query&&a.state.query.length>2?a.getVideos():a.query||a.setState({results:[]})})},a.state={query:"",results:[]},a.handleInputChange=a.handleInputChange.bind(Object(y.a)(Object(y.a)(a))),a.submitForm=a.submitForm.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.focus()}},{key:"submitForm",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement(b.a,{controlId:"formBasicText"},r.a.createElement(N.a,{className:"Search-Bar",type:"text",value:this.state.query,placeholder:"Start typing your query for videos ...",onChange:this.handleInputChange})),r.a.createElement("div",{className:"Video-Suggestions"},this.state.results.length>0?r.a.createElement(X,{videos:this.state.results}):r.a.createElement(Z,null)))}}]),t}(r.a.Component),ee=a(170),te=(a(397),function(e){var t=e.suggestedUser,a=e.videoId;return r.a.createElement("h4",{className:"Video-Banner-Title"},"Added by : ",r.a.createElement("span",{className:"Suggested-User"},t),r.a.createElement(_.Button,{className:"Skip-Video-Button",bsStyle:"primary",onClick:function(){return x.updateQueue(a)}},"Skip ",r.a.createElement("i",{className:"Skip-Icon fas fa-forward"})))}),ae=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).onReady=a._onReady.bind(Object(y.a)(Object(y.a)(a))),a.onChangeVideo=a._onStateChange.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentVideoId,a=e.suggestedUser,n=R.environment.debug?"Youtube-Player-Debug":"Youtube-Player",i={height:"250",width:"420",playerVars:R.environment.debug?{autoplay:1}:{autoplay:1,controls:0,showinfo:0}};return r.a.createElement("div",{className:"Youtube-Player-Wrapper"},r.a.createElement(ee.a,{className:n,videoId:t,opts:i,onReady:this._onReady,onStateChange:this._onStateChange}),""!==a&&r.a.createElement(te,{suggestedUser:a,videoId:t}))}},{key:"_onReady",value:function(e){e.target.playVideo()}},{key:"_onStateChange",value:function(e){e.data,0===e.data&&x.updateQueue(),e.target.playVideo()}}]),t}(r.a.Component),ne=Object(s.b)(function(e){return{currentVideoId:e.video.videoId,suggestedUser:e.video.suggestedUser}})(ae),re=(a(399),function(){return r.a.createElement("div",{className:"Empty-Video-Background"},r.a.createElement("i",{className:"Pause-Icon far fa-pause-circle"}),r.a.createElement("h4",{className:"No-Video-Text"},"Currently no videos on the queue"))}),ie=Object(s.b)(function(e){return{playlist:e.playlist.currentPlaylist}})(function(e){var t=e.playlist,a=t.map(function(e,t){return r.a.createElement("div",{key:t,className:"Playlist-Item-Wrapper"},r.a.createElement("li",{className:"Playlist-Item",key:t},r.a.createElement("i",{className:"Music-Icon fas fa-music"}),e.videoTitle),r.a.createElement("hr",{className:"Seperator"}))});return r.a.createElement("div",{className:"Playlist-Section"},r.a.createElement("h4",{className:"Playlist-Header"}," Current Playlist"),r.a.createElement("hr",{className:"Seperator"}),r.a.createElement("ul",{className:"Video-Playlist"},t.length>0?a:r.a.createElement(re,null)))}),le=(a(401),function(){return r.a.createElement(_.MenuItem,null,"Currently No Users")}),se=function(){return r.a.createElement("i",{className:"User-Icon fas fa-user"})},ue=Object(s.b)(function(e){return{username:e.user.username,users:e.lobby.users}})(function(e){var t=e.users,a=e.username,n=t.map(function(e,t){return r.a.createElement(_.MenuItem,{key:t},r.a.createElement(se,null),r.a.createElement("span",{className:"Username-List-Item"},e.username,a===e.username&&" (You)"))});return r.a.createElement(_.Navbar,{inverse:!0,collapseOnSelect:!0},r.a.createElement(_.Navbar.Header,null,r.a.createElement(_.Navbar.Brand,null,"Online Jukebox"),r.a.createElement(_.Navbar.Toggle,null)),r.a.createElement(_.Navbar.Collapse,null,r.a.createElement(_.Nav,{pullRight:!0},r.a.createElement(_.NavDropdown,{title:"Users",id:"Users-Nav-Dropdown"},t.length>0?n:r.a.createElement(le,null)))))}),ce=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){H()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ue,null),r.a.createElement(g,null),r.a.createElement("div",{className:"Main-Container"},r.a.createElement("div",{className:"Player-View-Container"},r.a.createElement("span",{className:"Current-Playlist"},r.a.createElement(ie,null)),r.a.createElement("span",{className:"Youtube-Player-Container"},r.a.createElement(ne,null)))),r.a.createElement("div",{className:"Search-Bar-Wrapper"},r.a.createElement($,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,{store:w},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[173,2,1]]]);
//# sourceMappingURL=main.7b9e9257.chunk.js.map