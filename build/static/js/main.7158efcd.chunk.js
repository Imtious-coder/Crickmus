(this["webpackJsonpassignment-07"]=this["webpackJsonpassignment-07"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"name":"Mashrafi","salary":"400000","image":"https://static.indiatvnews.com/ins-web/images/mashrafe-1541502008.jpg"},{"id":2,"name":"Sakib Al Hasan","salary":"500000","image":"https://resources.pulse.icc-cricket.com/players/champions-trophy-2017/210/201.png"},{"id":3,"name":"Mushfiq","salary":"600000","image":"https://3.bp.blogspot.com/-ET4E9fPaTAg/WAoT0NXcILI/AAAAAAAAAPE/9faUb2Jr0so9HcvfgXdPdmIOO5DKWOPTwCEw/s400/491.png"},{"id":4,"name":"Tamim","salary":"550000","image":"https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_2/public/feature/images/tamim-iqbal.jpg?itok=ATZxN_bX"},{"id":5,"name":"Mustafiz","salary":"300000","image":"https://lh3.googleusercontent.com/proxy/bTRNWJGSWwBDPgdoX0y5jv3_08vK2dbDDyVkGO5hqspfenjt-oteZWTkFrzPZDkGKx9pEXib9zGa5NkZPtudOQyBchkfHGG0hfEQhmP75QBSRnnNqBQn8fL8cL5ooKo"},{"id":6,"name":"Sabbir","salary":"280000","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyMEyAn_0B-2rUEXVHyWPV43xN-do-JLTSg&usqp=CAU"},{"id":7,"name":"Taskin","salary":"310000","image":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c156212/taskin-ahmed.jpg"},{"id":8,"name":"Nasir","salary":"200000","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LQGYUd5x0cM4QaXf_6BBkvX1KjHASXLHcA&usqp=CAU"},{"id":9,"name":"Saifuddin","salary":"200000","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ULdmp9nECAe3Xq6JHAUjJZyuZlx5h9do6A&usqp=CAU"},{"id":10,"name":"Rubel","salary":"180000","image":"https://st3.cricketcountry.com/wp-content/uploads/cricket/20150301121956.jpeg"},{"id":11,"name":"Birat Kohli","salary":"20000000","image":"http://www.iplt20zone.com/images/india/virat-kohli.jpg"},{"id":12,"name":"AB","salary":"40000000","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8_TW68jnygZ38whI8nbwN-zmLEoS5x860A&usqp=CAU"},{"id":13,"name":"Bravo","salary":"5000000","image":"http://justnewsly.com/wp-content/uploads/Darren-Bravo.jpg"},{"id":14,"name":"Watson","salary":"250000000","image":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c180329/shane-watson.jpg"},{"id":15,"name":"Shachin","salary":"450000000","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFMRpWEPpmNPAoSvJ0zvPXIgH52wx5XCjcg&usqp=CAU"}]')},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(9),i=a.n(n),r=(a(18),a(19),a(20),a(0)),d=function(){return Object(r.jsxs)("div",{className:"Header",children:[Object(r.jsx)("h1",{children:"Team Creator"}),Object(r.jsxs)("nav",{children:[Object(r.jsx)("a",{href:"/team",children:"Team"}),Object(r.jsx)("a",{href:"/selected",children:"Home"}),Object(r.jsx)("a",{href:"/payment",children:"Payment"})]})]})},m=a(13),l=a(8),o=a(10),j=(a(22),a(23),a(24),function(e){var t=e.card,a=t.name,c=t.image,s=t.salary;return Object(r.jsxs)("div",{id:"card",children:[Object(r.jsx)("div",{id:"image",children:Object(r.jsx)("img",{src:c,alt:""})}),Object(r.jsxs)("div",{className:"name",children:[Object(r.jsx)("h3",{children:a}),Object(r.jsxs)("small",{children:["Salary is:- $",s]}),Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"btn btn-success",onClick:function(){return e.handleAddCrickter(e.crickter)},children:"Select"})]})]})}),b=(a(25),a(11)),h=a(12),g=function(e){var t=e.selected;return console.log(t),Object(r.jsxs)("div",{className:"Selected-Area",children:[Object(r.jsxs)("h1",{className:"Title",children:["Total Selected ",Object(r.jsx)(b.a,{icon:h.a})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:["Players: ",t.length]}),Object(r.jsxs)("h4",{children:["Name: ",t.name]}),Object(r.jsxs)("small",{children:["Salary: $",t.salary]})]})},p=function(){var e=o,t=Object(c.useState)(e),a=Object(l.a)(t,2),s=a[0],n=(a[1],Object(c.useState)([])),i=Object(l.a)(n,2),d=i[0],b=i[1],h=function(e){var t=[].concat(Object(m.a)(d),[e]);b(t)};return Object(r.jsxs)("div",{className:"Total-Container",children:[Object(r.jsx)("div",{className:"crickter-container",children:s.map((function(e){return Object(r.jsx)(j,{handleAddCrickter:h,card:e})}))}),Object(r.jsx)("div",{className:"selected-container",children:Object(r.jsx)(g,{selected:d})})]})};var u=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{}),Object(r.jsx)(p,{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),x()}},[[31,1,2]]]);
//# sourceMappingURL=main.7158efcd.chunk.js.map