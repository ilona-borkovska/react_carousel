(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(5),s=n.n(a),i=n(2),c=n(1),l=(n(10),n(4)),r=n.n(l),m=(n(11),n(0)),o=function(e){var t=e.images,n=e.position,a=e.animationDuration,s=e.frameSize,i=e.itemWidth,c=e.isPrevBtnActive,l=e.handlePrevBtnClick,o=e.isNextBtnActive,u=e.handleNextBtnClick,j=s*i,b=n*-i;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("div",{className:"Carousel__content",style:{maxWidth:"".concat(j,"px")},children:Object(m.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(b,"px)"),transition:"transform ".concat(a,"ms linear")},children:t.map((function(e){return Object(m.jsx)("li",{className:"Carousel__item",style:{flexBasis:"".concat(i,"px")},children:Object(m.jsx)("img",{className:"Carousel__image",src:e,alt:"1"})},e)}))})}),Object(m.jsxs)("div",{className:"Carousel__btns",children:[Object(m.jsx)("button",{type:"button",disabled:!c,className:r()("Carousel__button",{"is-disabled":!c}),onClick:l,children:"Prev"}),Object(m.jsx)("button",{type:"button",disabled:!o,className:r()("Carousel__button",{"is-disabled":!o}),onClick:u,"data-cy":"next",children:"Next"})]})]})},u=(n(13),function(e){var t=e.itemWidth,n=e.setItemWidth,a=e.IMAGE_COUNT,s=e.frameSize,i=e.setFrameSize,c=e.step,l=e.setStep,r=e.animationDuration,o=e.setAnimationDuration;return Object(m.jsxs)("div",{className:"Settings",children:[Object(m.jsxs)("div",{className:"Settings__row",children:[Object(m.jsx)("label",{className:"Settings__label",htmlFor:"itemWidth",children:"Image width:"}),Object(m.jsx)("input",{className:"Settings__field",type:"range",value:t,min:100,max:300,onChange:function(e){return n(+e.target.value)},name:"itemWidth"}),Object(m.jsx)("span",{className:"Settings__currentValue",children:t})]}),Object(m.jsxs)("div",{className:"Settings__row",children:[Object(m.jsx)("label",{className:"Settings__label",htmlFor:"frameSize",children:"Images count:"}),Object(m.jsx)("input",{className:"Settings__field",type:"range",min:1,max:Math.floor(a/2),value:s,onChange:function(e){return i(+e.target.value)},name:"frameSize"}),Object(m.jsx)("span",{className:"Settings__currentValue",children:s})]}),Object(m.jsxs)("div",{className:"Settings__row",children:[Object(m.jsx)("label",{className:"Settings__label",htmlFor:"step",children:"Step size:"}),Object(m.jsx)("input",{className:"Settings__field",type:"range",value:c,min:1,max:a,onChange:function(e){return l(+e.target.value)},name:"step"}),Object(m.jsx)("span",{className:"Settings__currentValue",children:c})]}),Object(m.jsxs)("div",{className:"Settings__row",children:[Object(m.jsx)("label",{className:"Settings__label",htmlFor:"animationDuration",children:"Animation duration:"}),Object(m.jsx)("input",{className:"Settings__field",type:"range",min:500,max:5e3,value:r,onChange:function(e){return o(+e.target.value)},name:"animationDuration"}),Object(m.jsx)("span",{className:"Settings__currentValue",children:r})]})]})}),j=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],b=j.length,d=function(){var e=Object(c.useState)(130),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(3),l=Object(i.a)(s,2),r=l[0],d=l[1],g=Object(c.useState)(1),_=Object(i.a)(g,2),h=_[0],p=_[1],O=Object(c.useState)(1e3),x=Object(i.a)(O,2),f=x[0],N=x[1],S=Object(c.useState)(0),v=Object(i.a)(S,2),C=v[0],y=v[1],A=Object(c.useState)(!1),B=Object(i.a)(A,2),W=B[0],z=B[1],k=Object(c.useState)(!0),w=Object(i.a)(k,2),D=w[0],I=w[1],F=b-r;return Object(c.useEffect)((function(){z(C>0),I(C<F)}),[C]),Object(c.useEffect)((function(){}),[n,r,h,f]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",b," images"]}),Object(m.jsx)(u,{itemWidth:n,setItemWidth:a,IMAGE_COUNT:b,frameSize:r,setFrameSize:d,step:h,setStep:p,animationDuration:f,setAnimationDuration:N}),Object(m.jsx)("div",{className:"App__content",style:{maxWidth:"".concat(b*n,"px")},children:Object(m.jsx)(o,{images:j,position:C,animationDuration:f,frameSize:r,itemWidth:n,isPrevBtnActive:W,handlePrevBtnClick:function(){y((function(e){return C-h>=0?e-h:0}))},isNextBtnActive:D,handleNextBtnClick:function(){y((function(e){return C+h<=F?e+h:F}))}})})]})};s.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.e70cd4e2.chunk.js.map