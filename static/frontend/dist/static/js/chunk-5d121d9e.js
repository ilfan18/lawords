(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d121d9e"],{"00a5":function(e,t,c){"use strict";c.r(t);var i=c("f2bf"),r=function(e){return Object(i["x"])("data-v-00a6574d"),e=e(),Object(i["v"])(),e},n={class:"profile content"},a=Object(i["i"])("Мой профиль"),s=r((function(){return Object(i["h"])("div",{class:"profile__cover"},null,-1)})),o={class:"profile__content"},d={class:"profile__card"};function l(e,t,c,r,l,u){var f=Object(i["C"])("v-header"),j=Object(i["C"])("profile-card");return Object(i["u"])(),Object(i["g"])("div",n,[Object(i["j"])(f,null,{default:Object(i["J"])((function(){return[a]})),_:1}),s,Object(i["h"])("div",o,[Object(i["h"])("div",d,[Object(i["j"])(j,{user:e.user},null,8,["user"])])])])}var u=c("5530"),f=c("5502"),j=c("a369"),b=function(e){return Object(i["x"])("data-v-6100a980"),e=e(),Object(i["v"])(),e},p={key:0,class:"profile-card"},O={class:"profile-card__header"},h={class:"profile-card__image"},_={class:"profile-card__content"},v={class:"profile-card__name"},m={class:"profile-card__info-item"},g=b((function(){return Object(i["h"])("div",{class:"profile-card__info-item-title"},"Возраст",-1)})),x={class:"profile-card__info-item-content"},w={class:"profile-card__info-item"},k=b((function(){return Object(i["h"])("div",{class:"profile-card__info-item-title"},"Уровень",-1)})),C={class:"profile-card__info-item-content"};function P(e,t,c,r,n,a){var s=Object(i["C"])("image-loader"),o=Object(i["C"])("image-uploader-btn"),d=Object(i["C"])("profile-card-skeleton");return e.isProfileLoading?(Object(i["u"])(),Object(i["e"])(d,{key:1})):(Object(i["u"])(),Object(i["g"])("div",p,[Object(i["h"])("div",O,[Object(i["h"])("div",h,[Object(i["j"])(s,{src:c.user.image,alt:"Ваш аватар",width:"340px",height:"145px",radius:"0px"},null,8,["src"])]),Object(i["j"])(o)]),Object(i["h"])("div",_,[Object(i["h"])("div",v,Object(i["E"])(a.displayName),1),Object(i["h"])("div",m,[g,Object(i["h"])("div",x,Object(i["E"])(c.user.age),1)]),Object(i["h"])("div",w,[k,Object(i["h"])("div",C,Object(i["E"])(c.user.level),1)]),Object(i["h"])("button",{onClick:t[0]||(t[0]=Object(i["L"])((function(){return a.editProfile&&a.editProfile.apply(a,arguments)}),["prevent"])),class:Object(i["p"])(["profile-card__button",a.theme]),title:"Перейти в настройки"},"Редактировать профиль",2)])]))}var y=c("a18c"),E=function(e){return Object(i["x"])("data-v-cecde48e"),e=e(),Object(i["v"])(),e},L={class:"profile-card"},B={class:"profile-card__image"},I={class:"profile-card__content"},J={class:"profile-card__name"},N={class:"profile-card__info-item"},$=E((function(){return Object(i["h"])("div",{class:"profile-card__info-item-title"},"Возраст",-1)})),q={class:"profile-card__info-item-content"},H={class:"profile-card__info-item"},S=E((function(){return Object(i["h"])("div",{class:"profile-card__info-item-title"},"Уровень",-1)})),V={class:"profile-card__info-item-content"};function z(e,t,c,r,n,a){var s=Object(i["C"])("skeleton-loader");return Object(i["u"])(),Object(i["g"])("div",L,[Object(i["h"])("div",B,[Object(i["j"])(s,{width:"340px",height:"145px",radius:"0px"})]),Object(i["h"])("div",I,[Object(i["h"])("div",J,[Object(i["j"])(s,{width:"280px",height:"40px"})]),Object(i["h"])("div",N,[$,Object(i["h"])("div",q,[Object(i["j"])(s,{width:"20px",height:"17px"})])]),Object(i["h"])("div",H,[S,Object(i["h"])("div",V,[Object(i["j"])(s,{width:"60px",height:"17px"})])]),Object(i["j"])(s,{width:"280px",height:"59px",radius:"10px"})])])}var A={},D=(c("fec2"),c("d959")),F=c.n(D);const G=F()(A,[["render",z],["__scopeId","data-v-cecde48e"]]);var K=G,M={components:{ProfileCardSkeleton:K},name:"profile-card",props:{user:{type:Object,required:!0}},computed:Object(u["a"])(Object(u["a"])({},Object(f["d"])({isProfileLoading:function(e){return e.user.isProfileLoading}})),{},{displayName:function(){return this.user.first_name?this.user.first_name+" "+this.user.last_name:this.user.username},theme:function(){return this.$store.state.ui.theme},stroke:function(){return"light"==this.$store.state.ui.theme?"#2E2E2E":"#B8B8B8"}}),methods:{editProfile:function(){y["a"].push("/settings")}}};c("2fee");const Q=F()(M,[["render",P],["__scopeId","data-v-6100a980"]]);var R=Q,T={components:{VHeader:j["a"],ProfileCard:R},computed:Object(u["a"])({},Object(f["d"])({user:function(e){return e.user.user}}))};c("7374");const U=F()(T,[["render",l],["__scopeId","data-v-00a6574d"]]);t["default"]=U},"2fee":function(e,t,c){"use strict";c("d389")},"469d":function(e,t,c){},7374:function(e,t,c){"use strict";c("469d")},d389:function(e,t,c){},d680:function(e,t,c){},fec2:function(e,t,c){"use strict";c("d680")}}]);
//# sourceMappingURL=chunk-5d121d9e.js.map