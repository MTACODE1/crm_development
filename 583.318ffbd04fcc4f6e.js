"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[583],{6583:(j,u,i)=>{i.r(u),i.d(u,{TaskListModule:()=>Q});var _=i(4859),f=i(9549),h=i(7392),k=i(4977),v=i(6298),x=i(2510),c=i(7340),m=i(4006),r=(()=>{return(e=r||(r={})).SETUP="setup",e.BOOK="book_keeping",e.VAT="vat",e.ANNUAL="annual_accounts",e.SELF="self_assessment",r;var e})(),d=i(5439),T=i(7579),g=i(2722),t=i(4650),y=i(1683),M=i(3079),C=i(6895),O=i(4385),L=i(3238);function b(e,a){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.AsE(" ",null==n?null:n.first_name," ",null==n?null:n.last_name," ")}}function Z(e,a){if(1&e&&t._uU(0),2&e){const n=t.oxw().$implicit;t.hij(" ",null==n?null:n.username," ")}}function A(e,a){if(1&e&&(t.TgZ(0,"mat-option",8),t.YNc(1,b,2,2,"ng-container",9),t.YNc(2,Z,1,1,"ng-template",null,10,t.W1O),t.qZA()),2&e){const n=a.$implicit,s=t.MAs(3);t.Q6J("value",n.id),t.xp6(1),t.Q6J("ngIf",null==n?null:n.first_name)("ngIfElse",s)}}function P(e,a){if(1&e&&(t.TgZ(0,"span",29),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.Oqu(n.date)}}function w(e,a){if(1&e&&(t.TgZ(0,"a",26),t._UZ(1,"img",30),t.qZA()),2&e){const n=t.oxw(4);t.MGl("href","https://go.xero.com/organisationlogin/default.aspx?shortcode=",null==n.selectedClient?null:n.selectedClient.xero,"",t.LSH)}}function S(e,a){if(1&e&&(t.TgZ(0,"a",26),t._UZ(1,"img",31),t.qZA()),2&e){const n=t.oxw(4);t.MGl("href","https://app.dext.com/clients/",null==n.selectedClient?null:n.selectedClient.dext,"/gamma/costs/inbox",t.LSH)}}function U(e,a){if(1&e&&(t.TgZ(0,"a",26),t._UZ(1,"img",32),t.qZA()),2&e){const n=t.oxw(4);t.MGl("href","https://find-and-update.company-information.service.gov.uk/company/",null==n.selectedClient?null:n.selectedClient.crn,"",t.LSH)}}function J(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",18),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.markCompleted(o))}),t.TgZ(1,"div",19)(2,"div",20)(3,"button",21),t._UZ(4,"mat-icon",22),t.qZA(),t.TgZ(5,"div",23)(6,"p"),t._uU(7),t.qZA(),t.YNc(8,P,2,1,"span",24),t.qZA()()(),t.TgZ(9,"div",25),t.NdJ("click",function(o){return o.stopImmediatePropagation()}),t.TgZ(10,"a",26),t._UZ(11,"img",27),t.qZA(),t.YNc(12,w,2,1,"a",28),t.YNc(13,S,2,1,"a",28),t.YNc(14,U,2,1,"a",28),t.qZA()()}if(2&e){const n=t.oxw().$implicit,s=t.oxw().$implicit,o=t.oxw();t.MT6("flex flex-col border-b overflow-hidden priority_",s.color,"_",n.priority," cursor-pointer list-item"),t.Q6J("@myTrigger",o.state),t.xp6(4),t.Tol("2"!==n.t_status?"text-hint":"text-primary"),t.Q6J("svgIcon","heroicons_outline:check-circle"),t.xp6(3),t.Oqu(n.description),t.xp6(1),t.Q6J("ngIf",n.date),t.xp6(2),t.MGl("href","https://www.morethanaccountants.co.uk/salesflow/admin/v_lead.html?id=",null==o.selectedClient?null:o.selectedClient.id,"",t.LSH),t.xp6(2),t.Q6J("ngIf",null==o.selectedClient?null:o.selectedClient.xero),t.xp6(1),t.Q6J("ngIf",null==o.selectedClient?null:o.selectedClient.dext),t.xp6(1),t.Q6J("ngIf",null==o.selectedClient?null:o.selectedClient.crn)}}function N(e,a){if(1&e&&(t.ynx(0),t.YNc(1,J,15,14,"div",17),t.BQk()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("ngIf",n.description)}}function I(e,a){if(1&e&&(t.TgZ(0,"div",11)(1,"div",12)(2,"h1",13),t._uU(3),t.qZA(),t.TgZ(4,"div",14),t._UZ(5,"mat-icon",15),t.qZA()(),t.YNc(6,N,2,1,"ng-container",16),t.qZA()),2&e){const n=a.$implicit;t.xp6(3),t.Oqu(n.name),t.xp6(2),t.MT6("icon-size-18 opacity-25 text-",n.color,"-800 dark:text-",n.color,"-800"),t.xp6(1),t.Q6J("ngForOf",n.text)}}const $=[{path:"",component:(()=>{class e{constructor(n,s){this._fuseConfirmationService=n,this.taskService=s,this.username=new m.NI,this.users=[],this.taskListArr=[{color:"gray",name:"Setup & Compliance",dataType:r.SETUP},{color:"yellow",name:"Bookkeeping",dataType:r.BOOK},{color:"orange",name:"VAT",dataType:r.VAT},{color:"pink",name:"Annual Accounts",dataType:r.ANNUAL},{color:"green",name:"Self Assessment",dataType:r.SELF}],this.destroyer$=new T.x}ngOnInit(){this.getUserList()}ngOnDestroy(){this.destroyer$.next(),this.destroyer$.complete()}getTaskList(n){let s={};n&&(s={...n}),this.taskService.getTaskList(s).pipe((0,g.R)(this.destroyer$)).subscribe(o=>{const l=o;Object.keys(l).forEach(p=>{this.taskListArr.map((Y,B)=>{Y.dataType===p&&(this.taskListArr[B].text=l[p].length?l[p].sort((E,R)=>E.t_status-R.t_status):null)})})})}onClientChange(n){const s={uid:n.value,month:d(new Date).format("MMM-yyyy")};this.username.setValue(n.value),this.getTaskList(s)}getUserList(){this.taskService.userList({}).pipe((0,g.R)(this.destroyer$)).subscribe(n=>{this.users=n;const s=JSON.parse(localStorage.getItem("loginUser")),o=this.users.find(l=>l.id===s.user_id);this.username.setValue(o.id),this.selectedClient=this.users.find(l=>l.id===this.username.value),this.getTaskList({uid:o.id,month:d(new Date).format("MMM-yyyy")})})}markCompleted(n){this._fuseConfirmationService.open({title:"Are you sure?",message:"2"!==n.t_status?`Mark <b>${n.text}</b> as completed ?`:`Mark <b>${n.text}</b> as uncompleted?`,dismissible:!0,actions:{cancel:{label:"No"},confirm:{label:"Yes",color:"warn"}}}).afterClosed().pipe((0,g.R)(this.destroyer$)).subscribe(o=>{"confirmed"===o&&this.moveCompleted(n,"2"!==n.t_status)})}moveCompleted(n,s){this.taskService.updateTaskStatus({id:n.task_id,t_status:s?2:1}).pipe((0,g.R)(this.destroyer$)).subscribe(l=>{this.getTaskList({uid:this.username.value,month:d(new Date).format("MMM-yyyy")})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.R),t.Y36(M.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-task-list"]],decls:9,vars:3,consts:[[1,"w-full"],[1,"flex","flex-col","px-6","pt-6"],["for","status",1,"text-xl"],["appearance","none","id","status",1,"w-36"],["placeholder","Select User","disableOptionCentering","",1,"text-lg","text-gray-500",3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","w-full","p-6","sm:p-6","flex-wrap","h-fit","task-lists"],["class","flex-1 mx-2 bg-white rounded-md drop-shadow-lg  mb-3",4,"ngFor","ngForOf"],[3,"value"],[4,"ngIf","ngIfElse"],["nousername",""],[1,"flex-1","mx-2","bg-white","rounded-md","drop-shadow-lg","mb-3"],[1,"relative","overflow-hidden"],[1,"mb-4","text-xl","font-bold","py-3","px-4","text-center"],[1,"absolute","bottom-0","right-0","w-18","h-18","-m-6"],["svgIcon","heroicons_outline:check-circle"],[4,"ngFor","ngForOf"],[3,"class","click",4,"ngIf"],[3,"click"],[1,"flex","flex-auto","flex-col","px-4","py-3","mb-4"],[1,"flex"],["mat-icon-button",""],[3,"svgIcon"],[1,"ml-2"],["class","text-sm",4,"ngIf"],[1,"items-center","justify-end","flex-wrap","icon-list","mb-2","px-3",3,"click"],["target","_blank",3,"href"],["src","assets/images/logo/logo.png","alt","logo",1,"h-auto","w-12"],["target","_blank",3,"href",4,"ngIf"],[1,"text-sm"],["src","assets/images/logo/bespoke.png","alt","bespoke",1,"h-auto","w-8"],["src","assets/images/logo/dext.png","alt","dext",1,"h-auto","w-9"],["src","assets/images/logo/ltd.png","alt","ltd",1,"h-auto","w-8"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Select User"),t.qZA(),t.TgZ(4,"mat-form-field",3)(5,"mat-select",4),t.NdJ("selectionChange",function(l){return s.onClientChange(l)}),t.YNc(6,A,4,3,"mat-option",5),t.qZA()()(),t.TgZ(7,"div",6),t.YNc(8,I,7,6,"div",7),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("formControl",s.username),t.xp6(1),t.Q6J("ngForOf",s.users),t.xp6(2),t.Q6J("ngForOf",s.taskListArr))},dependencies:[C.sg,C.O5,m.JJ,f.KE,O.gD,L.ey,m.oH,h.Hw,_.lW],styles:[".task-lists[_ngcontent-%COMP%]   .priority_gray_low[_ngcontent-%COMP%]{background:rgba(128,128,128,.1490196078)}.task-lists[_ngcontent-%COMP%]   .priority_gray_high[_ngcontent-%COMP%]{background:rgba(128,128,128,.3607843137)}.task-lists[_ngcontent-%COMP%]   .priority_yellow_high[_ngcontent-%COMP%]{background:#E0D2C2}.task-lists[_ngcontent-%COMP%]   .priority_yellow_low[_ngcontent-%COMP%]{background:rgba(224,210,194,.3215686275)}.task-lists[_ngcontent-%COMP%]   .priority_orange_high[_ngcontent-%COMP%]{background:rgba(229,204,195,.7490196078)}.task-lists[_ngcontent-%COMP%]   .priority_orange_low[_ngcontent-%COMP%]{background:rgba(229,204,195,.2901960784)}.task-lists[_ngcontent-%COMP%]   .priority_pink_high[_ngcontent-%COMP%]{background:rgba(230,197,210,.7607843137)}.task-lists[_ngcontent-%COMP%]   .priority_pink_low[_ngcontent-%COMP%]{background:rgba(230,197,210,.3411764706)}.task-lists[_ngcontent-%COMP%]   .priority_green_high[_ngcontent-%COMP%]{background:rgba(196,216,204,.6117647059)}.task-lists[_ngcontent-%COMP%]   .priority_green_low[_ngcontent-%COMP%]{background:rgba(196,216,204,.2784313725)}.list-item[_ngcontent-%COMP%]:hover   .icon-list[_ngcontent-%COMP%]{display:flex!important}.list-item[_ngcontent-%COMP%]:hover   .icon-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){margin:0 4px}.list-item[_ngcontent-%COMP%]:hover   .icon-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){margin-right:4px}.icon-list[_ngcontent-%COMP%]{display:none}.text-pink-800[_ngcontent-%COMP%]{color:#9d174d}.text-orange-800[_ngcontent-%COMP%]{color:#9a3412}"],data:{animation:[(0,c.X$)("myTrigger",[(0,c.SB)("fadeInFlash",(0,c.oB)({opacity:"1"})),(0,c.eR)("void => *",[(0,c.oB)({opacity:"0",transform:"translateY(20px)"}),(0,c.jt)("500ms")])])]}}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[x.Bz.forChild($),x.Bz]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[k.m,h.Ps,v.vi,_.ot,f.lN,F]}),e})()}}]);