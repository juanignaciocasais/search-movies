(this["webpackJsonpsearch-movies"]=this["webpackJsonpsearch-movies"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(27),a(10)),s=a(3),i=a(4),u=a(5),m=a(6),h=a(9),v=function(e){var t=e.children;return r.a.createElement("h1",{className:"title"},t)},p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputMovie:""},e._handleChange=function(t){e.setState({inputMovie:t.target.value})},e._handleSubmit=function(t){t.preventDefault();var a=e.state.inputMovie;fetch("https://www.omdbapi.com/?apikey=".concat("6140f1ea","&s=").concat(a)).then((function(e){return e.json()})).then((function(t){var a=t.Search,n=void 0===a?[]:a,r=t.totalResults,c=void 0===r?"0":r;console.log({Search:n,totalResults:c}),e.props.onResults(n)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",onChange:this._handleChange,type:"text",placeholder:"Movie to search..."})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-info"},"Search"))))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.year,c=e.poster;return r.a.createElement(l.b,{to:"/Detail/".concat(t),className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{alt:a,src:c}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},a),r.a.createElement("p",{className:"subtitle is-6"},n)))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.movies;return r.a.createElement("div",{className:"MoviesList"},e.map((function(e){return r.a.createElement("div",{key:e.imdbID,className:"MoviesList-item"},r.a.createElement(d,{id:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster}))})))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={usedSearch:!1,results:[]},e._handleResults=function(t){e.setState({results:t,usedSearch:!0})},e}return Object(i.a)(a,[{key:"_renderResults",value:function(){return 0===this.state.results.length?r.a.createElement("p",null,"Sorry! Results not found... "):r.a.createElement(f,{movies:this.state.results})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null,"Search Movies"),r.a.createElement("div",{className:"SearchForm-wrapper"},r.a.createElement(p,{onResults:this._handleResults})),this.state.usedSearch?this._renderResults():r.a.createElement("small",null,"Use the form to search the movie"))}}]),a}(n.Component),b=function(){return r.a.createElement(l.b,{className:"button is-info",to:"/"},"Return")},y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movie:{}},e}return Object(i.a)(a,[{key:"_fetchMovie",value:function(e){var t=this,a=e.id;fetch("http://www.omdbapi.com/?apikey=".concat("6140f1ea","&i=").concat(a)).then((function(e){return e.json()})).then((function(e){console.log({movie:e}),t.setState({movie:e})}))}},{key:"_goBack",value:function(){window.history.back()}},{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props.match.params.movieId;this._fetchMovie({id:e})}},{key:"render",value:function(){var e=this.state.movie,t=e.Title,a=e.Poster,n=e.Actors,c=e.Metascore,o=e.Plot;return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("h1",null,t),r.a.createElement("img",{src:a,alt:t}),r.a.createElement("h3",null,n),r.a.createElement("span",null,c),r.a.createElement("p",null,o))}}]),a}(n.Component),j=(a(18),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"404 Error!"),r.a.createElement("h2",{className:"subtitle"},"Page dosn't exist!"),r.a.createElement(b,null))}),O=(a(33),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{path:"/detail/:movieId",component:y}),r.a.createElement(h.a,{component:j})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f17d34d8.chunk.js.map