(this["webpackJsonpbb2-teams-app"]=this["webpackJsonpbb2-teams-app"]||[]).push([[0],{54:function(e,t,a){e.exports=a.p+"static/media/bb2.94f058f7.jpg"},61:function(e,t,a){e.exports=a(77)},66:function(e,t,a){},67:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),o=(a(66),a(67),a(7)),u=a(13),i=a(14),s=a(16),m=a(15),E=a(17),p=a(21),f=a(8),d=a(26),h=a(30),y=a(24),b=function(e){var t=e.name.toLowerCase();return r.a.createElement(y.b,{to:"/".concat(t),activeStyle:{disabled:!0},id:t},r.a.createElement(h.a,{id:"category-button"},e.name))},T=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(b,{name:"Teams"})),r.a.createElement(d.a,null,r.a.createElement(b,{name:"Players"})),r.a.createElement(d.a,null,r.a.createElement(b,{name:"Star_Players"}))))}}]),t}(n.Component),v=a(2),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},a.increment=function(){var e=a.state.count+1;a.setState({count:e})},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{onClick:function(t){t.preventDefault(),e.increment()}},"Likes: ",this.state.count," "))}}]),t}(n.Component),O=function(e){return r.a.createElement(v.a,{onClick:function(t){e.view(e.info.id,"teams","DISPLAY_TEAMS")},style:{width:"18rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,e.info.name,r.a.createElement(j,null))),r.a.createElement(v.a.Img,{variant:"bottom",style:{height:"12rem"},src:e.info.image}))},_=function(e){return r.a.createElement(v.a,{border:"dark",onClick:function(){e.view(e.info.id,"players","DISPLAY_PLAYERS")},style:{width:"18rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,e.info.name),r.a.createElement(v.a.Text,null,"Player Type: ",e.info.player_type),r.a.createElement(v.a.Text,null,"Cost: ",e.info.cost),r.a.createElement(v.a.Text,null,"Movement Allowance: ",e.info.movement_allowance),r.a.createElement(v.a.Text,null,"Strength: ",e.info.strength),r.a.createElement(v.a.Text,null,"Agility: ",e.info.agility),r.a.createElement(v.a.Text,null,"Armour Value: ",e.info.armour_value),r.a.createElement(v.a.Text,null,"Skills: ",e.info.skills)))},S=function(e){return r.a.createElement(v.a,{onClick:function(){e.view(e.info.id,"star_players","DISPLAY_STAR_PLAYERS")},style:{width:"18rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,e.info.name),r.a.createElement(v.a.Text,null,"Player Type: ",e.info.player_type),r.a.createElement(v.a.Text,null,"Cost: ",e.info.cost),r.a.createElement(v.a.Text,null,"Movement Allowance: ",e.info.movement_allowance),r.a.createElement(v.a.Text,null,"Strength: ",e.info.strength),r.a.createElement(v.a.Text,null,"Agility: ",e.info.agility),r.a.createElement(v.a.Text,null,"Armour Value: ",e.info.armour_value),r.a.createElement(v.a.Text,null,"Skills: ",e.info.skills)))},w=function(){return console.log("c"),function(e){e({type:"LOADING_TEAMS"}),fetch("/api/teams").then((function(e){return e.json()})).then((function(t){console.log("d"),e({type:"ADD_TEAMS",cards:t})}))}},A=a(46),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).sortTeams=function(){a.props.sort_teams.cards.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),a.setState({teams:a.props.sort_teams})},a.displayCards=function(){switch(a.props.path){case"teams":return a.props.teams.cards.map((function(e){return r.a.createElement(y.b,{style:{color:"black"},to:"/teams/".concat(e.id),key:e.id},r.a.createElement(O,{view:a.props.displayObject,info:e}))}));case"players":return a.props.players.cards.map((function(e){return r.a.createElement(y.b,{style:{color:"black"},to:"/players/".concat(e.id),key:e.id},r.a.createElement(_,{view:a.props.displayObject,info:e}))}));case"star_players":return a.props.star_players.cards.map((function(e){return r.a.createElement(y.b,{style:{color:"black"},to:"/star_players/".concat(e.id),key:e.id},r.a.createElement(S,{view:a.props.displayObject,info:e}))}));default:return r.a.createElement("div",null,"Empty")}},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{id:"sort-button",title:"Sort Teams",onClick:this.sortTeams},"Sort Teams")),r.a.createElement(A.a,null,this.displayCards()))}}]),t}(n.Component),x=Object(o.b)((function(e){return{sort_teams:e.teams,teams:e.teams,players:e.players,star_players:e.star_players}}),(function(e){return{displayObject:function(t,a,n){return e(function(e,t,a){return function(n){var r={id:e};fetch("/api/".concat(t,"/show"),{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){n({type:a,object:e})}))}}(t,a,n))}}}))(g),k=Object(o.b)((function(e){return{info:e.teams.object}}))((function(e){var t=e.info;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement(v.a,{style:{width:"50rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,t.name)),r.a.createElement(v.a.Img,{variant:"bottom",src:t.image}),r.a.createElement(v.a.Text,null,"Views: ",t.views))):r.a.createElement("div",null,"Loading"))})),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleTeamFetch=function(e){a.props.fetchTeams()},a.state={teams:[]},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("button",{id:"team-show-button",title:"Show All Teams",onClick:this.handleTeamFetch},"Show All Teams"))))}}]),t}(n.Component),L=Object(o.b)((function(e){return{teams:e.teams}}),(function(e){return{fetchTeams:function(t){return e(w())}}}))(D),P=Object(o.b)((function(e){return{info:e.players.object}}))((function(e){var t=e.info;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement(v.a,{border:"dark",style:{width:"18rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,t.name),r.a.createElement(v.a.Text,null,"Player Type: ",t.player_type),r.a.createElement(v.a.Text,null,"Cost: ",t.cost),r.a.createElement(v.a.Text,null,"Movement Allowance: ",t.movement_allowance),r.a.createElement(v.a.Text,null,"Strength: ",t.strength),r.a.createElement(v.a.Text,null,"Agility: ",t.agility),r.a.createElement(v.a.Text,null,"Armour Value: ",t.armour_value),r.a.createElement(v.a.Text,null,"Skills: ",t.skills),r.a.createElement(v.a.Text,null,"Views: ",t.views)))):r.a.createElement("div",null,"Loading"))})),C=a(27),R=a.n(C),I=a(22),M=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleTeamSelection=function(t){t.preventDefault();var a=t.target.title;e.props.setTeam(a),e.props.fetchPlayers(a),e.setState({currentTeam:t.target.dataset.team})},e.state={data:[],currentTeam:"Select Team"},e}return Object(E.a)(t,e),Object(i.a)(t,[{key:"fetchButtonTeams",value:function(){var e,t;return R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.a.awrap(fetch("/api/teams"));case 2:return e=a.sent,a.next=5,R.a.awrap(e.json());case 5:t=a.sent,this.setState({data:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"componentDidMount",value:function(){this.fetchButtonTeams()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(I.a,{id:"dropdown-player-button",title:this.props.team},r.a.createElement(I.a.Toggle,{id:"dropdown-button"},this.state.currentTeam),r.a.createElement(I.a.Menu,null,this.state.data.map((function(t){return r.a.createElement("div",{key:t},r.a.createElement(I.a.Item,{onClick:e.handleTeamSelection,title:t.id,"data-team":t.name},t.name))}))))))}}]),t}(n.Component),Y=Object(o.b)((function(e){return{team:e.players.team}}),(function(e){return{fetchPlayers:function(t){return e((a=t,function(e){e({type:"LOADING_PLAYERS"}),fetch("/api/teams/".concat(a,"/players")).then((function(e){return e.json()})).then((function(t){e({type:"ADD_PLAYERS",cards:t})}))}));var a},fetchTeams:function(t){return e(w())},setTeam:function(t){return e({type:"SET_TEAM",team:t})}}}))(M),B=Object(o.b)((function(e){return{info:e.star_players.object}}))((function(e){var t=e.info;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement(v.a,{border:"dark",style:{width:"18rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,t.name),r.a.createElement(v.a.Text,null,"Player Type: ",t.player_type),r.a.createElement(v.a.Text,null,"Cost: ",t.cost),r.a.createElement(v.a.Text,null,"Movement Allowance: ",t.movement_allowance),r.a.createElement(v.a.Text,null,"Strength: ",t.strength),r.a.createElement(v.a.Text,null,"Agility: ",t.agility),r.a.createElement(v.a.Text,null,"Armour Value: ",t.armour_value),r.a.createElement(v.a.Text,null,"Skills: ",t.skills),r.a.createElement(v.a.Text,null,"Views: ",t.views)))):r.a.createElement("div",null,"Loading"))})),N=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleTeamSelection=function(t){t.preventDefault();var a=t.target.title;e.props.setTeam(a),e.props.fetchStarPlayers(a),e.setState({currentTeam:t.target.dataset.team})},e.state={data:[],currentTeam:"Select Team"},e}return Object(E.a)(t,e),Object(i.a)(t,[{key:"fetchButtonTeams",value:function(){var e,t;return R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.a.awrap(fetch("/api/teams"));case 2:return e=a.sent,a.next=5,R.a.awrap(e.json());case 5:t=a.sent,this.setState({data:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"componentDidMount",value:function(){this.fetchButtonTeams()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(I.a,{id:"dropdown-star-player-button",title:this.props.team},r.a.createElement(I.a.Toggle,{id:"dropdown-button"},this.state.currentTeam),r.a.createElement(I.a.Menu,null,this.state.data.map((function(t){return r.a.createElement("div",{key:t},r.a.createElement(I.a.Item,{onClick:e.handleTeamSelection,title:t.id,"data-team":t.name},t.name))}))))))}}]),t}(n.Component),V=Object(o.b)((function(e){return{team:e.star_players.team}}),(function(e){return{fetchStarPlayers:function(t){return e((a=t,function(e){e({type:"LOADING_STAR_PLAYERS"}),fetch("/api/teams/".concat(a,"/star_players")).then((function(e){return e.json()})).then((function(t){e({type:"ADD_STAR_PLAYERS",cards:t})}))}));var a},fetchTeams:function(t){return e(w())},setTeam:function(t){return e({type:"SET_TEAM",team:t})}}}))(N),G=a(25),X=(a(75),a(53)),F=a(79),J=a(55),U=a(54),W=a.n(U);function z(){var e=Object(X.a)(["\n  .jumbo {\n    background: url(",") no-repeat;\n    background-size: cover;\n    height: 250px;\n    position: relative;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    box-shadow: 0px 0px 10px black;\n  }\n\n  .jumbo h2 {\n    color: white;\n    margin-top:-40px;\n    margin-left:30px;\n    text-shadow: 2px 2px 5px black;\n  }\n\n  .overlay{\n    opacity: 0.2;\n    position: absolute;\n    margin: 0 auto;\n  }\n"]);return z=function(){return e},e}var $=J.a.div(z(),W.a),q=function(){return r.a.createElement($,null,r.a.createElement(F.a,{fluid:!0,className:"jumbo"},r.a.createElement("h2",null,"Teams and Players of Blood Bowl")))},H=Object(o.b)((function(e){return{info:e.object}}))((function(e){return r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/teams/:id"},r.a.createElement(q,null),r.a.createElement(k,{info:e.info})),r.a.createElement(G.a,{path:"/players/:id"},r.a.createElement(q,null),r.a.createElement(P,{info:e.info})),r.a.createElement(G.a,{path:"/star_players/:id"},r.a.createElement(q,null),r.a.createElement(B,{info:e.info})),r.a.createElement(G.a,{path:"/teams"},r.a.createElement(q,null),r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(L,{path:"teams"}))),r.a.createElement(f.a,null,r.a.createElement(T,null)),r.a.createElement(f.a,null,r.a.createElement(x,{path:"teams"}))),r.a.createElement(G.a,{path:"/players"},r.a.createElement(q,null),r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(Y,{path:"players"}))),r.a.createElement(f.a,null,r.a.createElement(T,null)),r.a.createElement(f.a,null,r.a.createElement(x,{path:"players"}))),r.a.createElement(G.a,{path:"/star_players"},r.a.createElement(q,null),r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(V,{path:"star_players"}))),r.a.createElement(f.a,null,r.a.createElement(T,null)),r.a.createElement(f.a,null,r.a.createElement(x,{path:"star_players"}))),r.a.createElement(G.a,{path:"/"},r.a.createElement(q,null),r.a.createElement(T,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(28),Q=a(59),Z=a(10);var ee=Object(K.c)({teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cards:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_TEAMS":return Object(Z.a)({},e);case"ADD_TEAMS":return Object(Z.a)({},e,{cards:t.cards});case"DISPLAY_TEAMS":return Object(Z.a)({},e,{object:t.object});default:return e}},players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cards:[],loading:!1,team:"Select Team"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_PLAYERS":return Object(Z.a)({},e);case"ADD_PLAYERS":return Object(Z.a)({},e,{cards:t.cards});case"DISPLAY_PLAYERS":return Object(Z.a)({},e,{object:t.object});case"SET_TEAM":return Object(Z.a)({},e,{team:t.team});default:return e}},star_players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cards:[],loading:!1,team:"Select Team"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_STAR_PLAYERS":return Object(Z.a)({},e);case"ADD_STAR_PLAYERS":return Object(Z.a)({},e,{cards:t.cards});case"DISPLAY_STAR_PLAYERS":return Object(Z.a)({},e,{object:t.object});case"SET_TEAM":return Object(Z.a)({},e,{team:t.team});default:return e}}}),te=Object(K.e)(ee,Object(K.d)(Object(K.a)(Q.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(o.a,{store:te},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.5c5b211e.chunk.js.map