"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[944],{5944:(ze,p,l)=>{l.r(p),l.d(p,{ReportsModule:()=>Ee});var r=l(7392),m=l(5655),a=l(7155),f=l(4977),d=l(2510),t=l(4650);function s(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," Accountant "),t.qZA())}function k(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}function g(e,n){1&e&&t._UZ(0,"td",21)}function h(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1," Filed "),t.qZA())}function C(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function T(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function w(e,n){1&e&&(t.TgZ(0,"th",23),t._uU(1," VAT Return sent to client "),t.qZA())}function x(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.sent," ")}}function Z(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("sent"))}}function B(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1," VAT Return Review from Accountatnt "),t.qZA())}function D(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function q(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function A(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1," VAT Return Sent to Accountatnt "),t.qZA())}function y(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.req," ")}}function U(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("req"))}}function N(e,n){1&e&&(t.TgZ(0,"th",25),t._uU(1," At Bookkeeping Stage "),t.qZA())}function Y(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function v(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function b(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," Total "),t.qZA())}function Q(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function O(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculation())}}function M(e,n){1&e&&t._UZ(0,"tr",26)}function R(e,n){1&e&&t._UZ(0,"tr",27)}function S(e,n){1&e&&t._UZ(0,"tr",28)}const u=[{id:1,name:"Rayan",weight:0,sent:0,req:2},{id:2,name:"David",weight:1,sent:4,req:14.1},{id:3,name:"Tariq",weight:3,sent:5,req:3},{id:4,name:"Rizwan",weight:2,sent:0,req:0},{id:5,name:"Shital",weight:3,sent:6,req:0}];let P=(()=>{class e{constructor(){this.displayedColumns=["accountant","filed","sentClient","review","sentAccountant","book","total"],this.dataSource=u,this.players=u.slice()}ngOnInit(){}calculateTotal(o){return this.players.reduce("weight"===o?(i,c)=>i+c.weight:"sent"===o?(i,c)=>i+c.sent:(i,c)=>i+c.req,0)}calculation(){const o=this.dataSource.map(i=>({weight:i.weight,sent:i.sent,req:i.req}));return e.sum(o[0])}static sum(o){var i=0;for(var c in o)o.hasOwnProperty(c)&&(i+=parseFloat(o[c]));return i}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-vat-break-down"]],decls:34,vars:4,consts:[[1,"font-bold"],["mat-table","",1,"min-w-240","overflow-y-visible","w-full","vat-table",3,"dataSource"],["matColumnDef","accountant"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","filed"],["mat-header-cell","","class","package-col",4,"matHeaderCellDef"],["matColumnDef","sentClient"],["mat-header-cell","","class","book-col",4,"matHeaderCellDef"],["matColumnDef","review"],["mat-header-cell","","class","vat-col",4,"matHeaderCellDef"],["matColumnDef","sentAccountant"],["matColumnDef","book"],["mat-header-cell","","class","account-col",4,"matHeaderCellDef"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["mat-header-cell",""],["mat-cell",""],["mat-footer-cell",""],["mat-header-cell","",1,"package-col"],["mat-header-cell","",1,"book-col"],["mat-header-cell","",1,"vat-col"],["mat-header-cell","",1,"account-col"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(o,i){1&o&&(t.TgZ(0,"p",0),t._uU(1,"VAT Breakdown"),t.qZA(),t.TgZ(2,"table",1),t.ynx(3,2),t.YNc(4,s,2,0,"th",3),t.YNc(5,k,2,1,"td",4),t.YNc(6,g,1,0,"td",5),t.BQk(),t.ynx(7,6),t.YNc(8,h,2,0,"th",7),t.YNc(9,C,2,1,"td",4),t.YNc(10,T,2,1,"td",5),t.BQk(),t.ynx(11,8),t.YNc(12,w,2,0,"th",9),t.YNc(13,x,2,1,"td",4),t.YNc(14,Z,2,1,"td",5),t.BQk(),t.ynx(15,10),t.YNc(16,B,2,0,"th",11),t.YNc(17,D,2,1,"td",4),t.YNc(18,q,2,1,"td",5),t.BQk(),t.ynx(19,12),t.YNc(20,A,2,0,"th",11),t.YNc(21,y,2,1,"td",4),t.YNc(22,U,2,1,"td",5),t.BQk(),t.ynx(23,13),t.YNc(24,N,2,0,"th",14),t.YNc(25,Y,2,1,"td",4),t.YNc(26,v,2,1,"td",5),t.BQk(),t.ynx(27,15),t.YNc(28,b,2,0,"th",3),t.YNc(29,Q,2,1,"td",4),t.YNc(30,O,2,1,"td",5),t.BQk(),t.YNc(31,M,1,0,"tr",16),t.YNc(32,R,1,0,"tr",17),t.YNc(33,S,1,0,"tr",18),t.qZA()),2&o&&(t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(29),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("matFooterRowDef",i.displayedColumns))},dependencies:[a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.mD,a.Ke,a.ge,a.ev,a.yh,a.XQ,a.Gk,a.Q2],styles:[".vat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(2), .vat-table[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(2){background-color:#01950114}.vat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(3), .vat-table[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(3){background-color:#f9e92a17}.vat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(n+4):nth-child(-n+5), .vat-table[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(n+4):nth-child(-n+5){background-color:#f9820714}.vat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(6), .vat-table[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(6){background-color:#ff4aa412}"]}),e})();function $(e,n){1&e&&(t.TgZ(0,"th",16),t._uU(1," Accountant "),t.qZA())}function j(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}function I(e,n){1&e&&(t.TgZ(0,"th",18),t._uU(1," Stage 4 "),t.qZA())}function F(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," %")}}function V(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," Stage 3 "),t.qZA())}function H(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.sent," %")}}function J(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," Stage 2 "),t.qZA())}function E(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," %")}}function z(e,n){1&e&&(t.TgZ(0,"th",21),t._uU(1," Stage 1 "),t.qZA())}function X(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," %")}}function L(e,n){1&e&&(t.TgZ(0,"th",16),t._uU(1," Stage 3 & 4"),t.qZA())}function G(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," %")}}function K(e,n){1&e&&t._UZ(0,"tr",22)}function W(e,n){1&e&&t._UZ(0,"tr",23)}const tt=[{id:1,name:"Rayan",weight:0,sent:5,req:37.5},{id:2,name:"David",weight:3.1,sent:3.4,req:5.5},{id:3,name:"Tariq",weight:18.2,sent:13.6,req:36.4},{id:4,name:"Rizwan",weight:4.2,sent:0,req:55.6},{id:5,name:"Shital",weight:0,sent:9.1,req:11.1}];let et=(()=>{class e{constructor(){this.displayedColumns=["accountant","filed","sentClient","review","sentAccountant","book"],this.dataSource=tt}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-individual"]],decls:23,vars:3,consts:[[1,"font-bold"],["mat-table","",1,"min-w-240","overflow-y-visible","w-full","individual-table",3,"dataSource"],["matColumnDef","accountant"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","filed"],["mat-header-cell","","class","package-col",4,"matHeaderCellDef"],["matColumnDef","sentClient"],["mat-header-cell","","class","book-col",4,"matHeaderCellDef"],["matColumnDef","review"],["mat-header-cell","","class","vat-col",4,"matHeaderCellDef"],["matColumnDef","sentAccountant"],["mat-header-cell","","class","account-col",4,"matHeaderCellDef"],["matColumnDef","book"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"package-col"],["mat-header-cell","",1,"book-col"],["mat-header-cell","",1,"vat-col"],["mat-header-cell","",1,"account-col"],["mat-header-row",""],["mat-row",""]],template:function(o,i){1&o&&(t.TgZ(0,"p",0),t._uU(1,"Individual Stage %"),t.qZA(),t.TgZ(2,"table",1),t.ynx(3,2),t.YNc(4,$,2,0,"th",3),t.YNc(5,j,2,1,"td",4),t.BQk(),t.ynx(6,5),t.YNc(7,I,2,0,"th",6),t.YNc(8,F,2,1,"td",4),t.BQk(),t.ynx(9,7),t.YNc(10,V,2,0,"th",8),t.YNc(11,H,2,1,"td",4),t.BQk(),t.ynx(12,9),t.YNc(13,J,2,0,"th",10),t.YNc(14,E,2,1,"td",4),t.BQk(),t.ynx(15,11),t.YNc(16,z,2,0,"th",12),t.YNc(17,X,2,1,"td",4),t.BQk(),t.ynx(18,13),t.YNc(19,L,2,0,"th",3),t.YNc(20,G,2,1,"td",4),t.BQk(),t.YNc(21,K,1,0,"tr",14),t.YNc(22,W,1,0,"tr",15),t.qZA()),2&o&&(t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns))},dependencies:[a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk],styles:[".individual-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(2){background-color:#01950114}.individual-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(3){background-color:#f9e92a17}.individual-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(4){background-color:#f9820714}.individual-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:nth-child(5){background-color:#ff4aa412}"]}),e})();function nt(e,n){1&e&&(t.TgZ(0,"th",53),t._uU(1," Accountant "),t.qZA())}function ot(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.name," ")}}function at(e,n){1&e&&t._UZ(0,"td",55)}function it(e,n){1&e&&(t.TgZ(0,"th",56),t._uU(1," MR Complete "),t.qZA())}function lt(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function ct(e,n){if(1&e&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function mt(e,n){1&e&&(t.TgZ(0,"th",57),t._uU(1," MR Sent to Client "),t.qZA())}function pt(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.sent," ")}}function rt(e,n){if(1&e&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("sent"))}}function dt(e,n){1&e&&(t.TgZ(0,"th",57),t._uU(1," MR Reviewed by Accountant "),t.qZA())}function ut(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function _t(e,n){if(1&e&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function ft(e,n){1&e&&(t.TgZ(0,"th",57),t._uU(1," Bookkeeping and Create MR "),t.qZA())}function st(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function kt(e,n){if(1&e&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function gt(e,n){1&e&&(t.TgZ(0,"th",58),t._uU(1," Query Request sent to Client "),t.qZA())}function ht(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function Ct(e,n){if(1&e&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function Tt(e,n){1&e&&(t.TgZ(0,"th",58),t._uU(1," Queries Requested "),t.qZA())}function wt(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.req," ")}}function xt(e,n){if(1&e&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("req"))}}function Zt(e,n){1&e&&(t.TgZ(0,"th",58),t._uU(1," Bookkeeping WIP "),t.qZA())}function Bt(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function Dt(e,n){if(1&e&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.calculateTotal("weight"))}}function qt(e,n){1&e&&(t.TgZ(0,"th",58),t._uU(1," Information Request sent to Client "),t.qZA())}function At(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function yt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"57"),t.qZA())}function Ut(e,n){1&e&&(t.TgZ(0,"th",59),t._uU(1," Information Requested "),t.qZA())}function Nt(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function Yt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"26"),t.qZA())}function vt(e,n){1&e&&(t.TgZ(0,"th",59),t._uU(1," Bookkeeping Process Started "),t.qZA())}function bt(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function Qt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"51"),t.qZA())}function Ot(e,n){1&e&&(t.TgZ(0,"th",53),t._uU(1," Total "),t.qZA())}function Mt(e,n){1&e&&(t.TgZ(0,"td",54),t._uU(1," 10 "),t.qZA())}function Rt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"238"),t.qZA())}function St(e,n){1&e&&(t.TgZ(0,"th",53),t._uU(1," Check "),t.qZA())}function Pt(e,n){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.weight," ")}}function $t(e,n){1&e&&t._UZ(0,"td",55)}function jt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1," % Client at each status "),t.qZA())}function It(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"2.1 %"),t.qZA())}function Ft(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"3.8%"),t.qZA())}function Vt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"0.4% "),t.qZA())}function Ht(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"6.7%"),t.qZA())}function Jt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"8.0% "),t.qZA())}function Et(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1," 7.1%"),t.qZA())}function zt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"15.5% "),t.qZA())}function Xt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"23.9% "),t.qZA())}function Lt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1," 10.9%"),t.qZA())}function Gt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1," 21.4%"),t.qZA())}function Kt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"% Client at each stage "),t.qZA())}function Wt(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1,"2.1 % "),t.qZA())}function te(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1," 10.9% "),t.qZA())}function ee(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1," 54.6% "),t.qZA())}function ne(e,n){1&e&&(t.TgZ(0,"td",55),t._uU(1," 32.4% "),t.qZA())}function oe(e,n){1&e&&t._UZ(0,"td",55)}function ae(e,n){1&e&&(t.TgZ(0,"th",60),t._uU(1,"Bookkeeping"),t.qZA()),2&e&&t.uIk("colspan",1)}function ie(e,n){1&e&&(t.TgZ(0,"th",60),t._uU(1,"Stage 4"),t.qZA()),2&e&&t.uIk("colspan",1)}function le(e,n){1&e&&(t.TgZ(0,"th",60),t._uU(1,"Stage 3"),t.qZA()),2&e&&t.uIk("colspan",3)}function ce(e,n){1&e&&(t.TgZ(0,"th",60),t._uU(1,"Stage 2"),t.qZA()),2&e&&t.uIk("colspan",4)}function me(e,n){1&e&&(t.TgZ(0,"th",60),t._uU(1,"Stage 1"),t.qZA()),2&e&&t.uIk("colspan",2)}function pe(e,n){1&e&&t._UZ(0,"th",60),2&e&&t.uIk("colspan",2)}function re(e,n){1&e&&t._UZ(0,"tr",61)}function de(e,n){1&e&&t._UZ(0,"tr",61)}function ue(e,n){1&e&&t._UZ(0,"tr",62)}function _e(e,n){1&e&&t._UZ(0,"tr",63)}function fe(e,n){1&e&&t._UZ(0,"tr",64)}function se(e,n){1&e&&t._UZ(0,"tr",64)}const ke=function(){return["header-first-group","header-second-group","header-third-group","header-forth-group","header-fifth-group","header-six-group"]},ge=[{id:1,name:"Rayan",weight:0,sent:0,req:10},{id:2,name:"David",weight:1,sent:4,req:30},{id:3,name:"Tariq",weight:3,sent:5,req:0},{id:4,name:"Ram",weight:2,sent:0,req:67},{id:5,name:"Shital",weight:0,sent:0,req:4}];let he=(()=>{class e{constructor(){this.displayedColumns=["accountant","complete","sentClient","review","createMr","querySent","queryRequest","wip","informationsent","informationRequest","start","total","check"],this.displayedFooter=["accountantf","completef","sentClientf","reviewf","createMrf","querySentf","queryRequestf","wipf","informationsentf","informationRequestf","startf","emptyFooter","emptyFooter"],this.displayedFooter2=["title","stage4","stage3","emptyFooter","emptyFooter","stage2","emptyFooter","emptyFooter","emptyFooter","stage1"],this.dataSource=ge}ngOnInit(){}calculateTotal(o){return this.dataSource.reduce("weight"===o?(i,c)=>i+c.weight:"sent"===o?(i,c)=>i+c.sent:(i,c)=>i+c.req,0)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-bookkeeping-break-down"]],decls:115,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex-auto","p-6","sm:p-6"],[1,"sm:col-span-6","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","mb-3"],[1,"flex","flex-col","flex-auto","overflow-auto","table-container"],["mat-table","",1,"min-w-240","overflow-y-visible","bookkeeping-table",3,"dataSource"],["matColumnDef","accountant"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","complete"],["mat-header-cell","","class","package-col",4,"matHeaderCellDef"],["matColumnDef","sentClient"],["mat-header-cell","","class","book-col",4,"matHeaderCellDef"],["matColumnDef","review"],["matColumnDef","createMr"],["matColumnDef","querySent"],["mat-header-cell","","class","vat-col",4,"matHeaderCellDef"],["matColumnDef","queryRequest"],["matColumnDef","wip"],["matColumnDef","informationsent"],["matColumnDef","informationRequest"],["mat-header-cell","","class","account-col",4,"matHeaderCellDef"],["matColumnDef","start"],["matColumnDef","total"],["matColumnDef","check"],["matColumnDef","accountantf"],["matColumnDef","completef"],["matColumnDef","sentClientf"],["matColumnDef","reviewf"],["matColumnDef","createMrf"],["matColumnDef","querySentf"],["matColumnDef","queryRequestf"],["matColumnDef","wipf"],["matColumnDef","informationsentf"],["matColumnDef","informationRequestf"],["matColumnDef","startf"],["matColumnDef","title"],["matColumnDef","stage4"],["matColumnDef","stage3"],["matColumnDef","stage2"],["matColumnDef","stage1"],["matColumnDef","emptyFooter"],["matColumnDef","header-first-group"],["mat-header-cell","","class","font-extrabold text-left border-r border-t",4,"matHeaderCellDef"],["matColumnDef","header-second-group"],["matColumnDef","header-third-group"],["matColumnDef","header-forth-group"],["matColumnDef","header-fifth-group"],["matColumnDef","header-six-group"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","","class","footer-row",4,"matFooterRowDef"],["mat-footer-row","",4,"matFooterRowDef"],["mat-header-cell",""],["mat-cell",""],["mat-footer-cell",""],["mat-header-cell","",1,"package-col"],["mat-header-cell","",1,"book-col"],["mat-header-cell","",1,"vat-col"],["mat-header-cell","",1,"account-col"],["mat-header-cell","",1,"font-extrabold","text-left","border-r","border-t"],["mat-header-row",""],["mat-row",""],["mat-footer-row","",1,"footer-row"],["mat-footer-row",""]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-vat-break-down"),t.qZA()(),t.TgZ(5,"div",2)(6,"div",3)(7,"table",4),t.ynx(8,5),t.YNc(9,nt,2,0,"th",6),t.YNc(10,ot,2,1,"td",7),t.YNc(11,at,1,0,"td",8),t.BQk(),t.ynx(12,9),t.YNc(13,it,2,0,"th",10),t.YNc(14,lt,2,1,"td",7),t.YNc(15,ct,2,1,"td",8),t.BQk(),t.ynx(16,11),t.YNc(17,mt,2,0,"th",12),t.YNc(18,pt,2,1,"td",7),t.YNc(19,rt,2,1,"td",8),t.BQk(),t.ynx(20,13),t.YNc(21,dt,2,0,"th",12),t.YNc(22,ut,2,1,"td",7),t.YNc(23,_t,2,1,"td",8),t.BQk(),t.ynx(24,14),t.YNc(25,ft,2,0,"th",12),t.YNc(26,st,2,1,"td",7),t.YNc(27,kt,2,1,"td",8),t.BQk(),t.ynx(28,15),t.YNc(29,gt,2,0,"th",16),t.YNc(30,ht,2,1,"td",7),t.YNc(31,Ct,2,1,"td",8),t.BQk(),t.ynx(32,17),t.YNc(33,Tt,2,0,"th",16),t.YNc(34,wt,2,1,"td",7),t.YNc(35,xt,2,1,"td",8),t.BQk(),t.ynx(36,18),t.YNc(37,Zt,2,0,"th",16),t.YNc(38,Bt,2,1,"td",7),t.YNc(39,Dt,2,1,"td",8),t.BQk(),t.ynx(40,19),t.YNc(41,qt,2,0,"th",16),t.YNc(42,At,2,1,"td",7),t.YNc(43,yt,2,0,"td",8),t.BQk(),t.ynx(44,20),t.YNc(45,Ut,2,0,"th",21),t.YNc(46,Nt,2,1,"td",7),t.YNc(47,Yt,2,0,"td",8),t.BQk(),t.ynx(48,22),t.YNc(49,vt,2,0,"th",21),t.YNc(50,bt,2,1,"td",7),t.YNc(51,Qt,2,0,"td",8),t.BQk(),t.ynx(52,23),t.YNc(53,Ot,2,0,"th",6),t.YNc(54,Mt,2,0,"td",7),t.YNc(55,Rt,2,0,"td",8),t.BQk(),t.ynx(56,24),t.YNc(57,St,2,0,"th",6),t.YNc(58,Pt,2,1,"td",7),t.YNc(59,$t,1,0,"td",8),t.BQk(),t.ynx(60,25),t.YNc(61,jt,2,0,"td",8),t.BQk(),t.ynx(62,26),t.YNc(63,It,2,0,"td",8),t.BQk(),t.ynx(64,27),t.YNc(65,Ft,2,0,"td",8),t.BQk(),t.ynx(66,28),t.YNc(67,Vt,2,0,"td",8),t.BQk(),t.ynx(68,29),t.YNc(69,Ht,2,0,"td",8),t.BQk(),t.ynx(70,30),t.YNc(71,Jt,2,0,"td",8),t.BQk(),t.ynx(72,31),t.YNc(73,Et,2,0,"td",8),t.BQk(),t.ynx(74,32),t.YNc(75,zt,2,0,"td",8),t.BQk(),t.ynx(76,33),t.YNc(77,Xt,2,0,"td",8),t.BQk(),t.ynx(78,34),t.YNc(79,Lt,2,0,"td",8),t.BQk(),t.ynx(80,35),t.YNc(81,Gt,2,0,"td",8),t.BQk(),t.ynx(82,36),t.YNc(83,Kt,2,0,"td",8),t.BQk(),t.ynx(84,37),t.YNc(85,Wt,2,0,"td",8),t.BQk(),t.ynx(86,38),t.YNc(87,te,2,0,"td",8),t.BQk(),t.ynx(88,39),t.YNc(89,ee,2,0,"td",8),t.BQk(),t.ynx(90,40),t.YNc(91,ne,2,0,"td",8),t.BQk(),t.ynx(92,41),t.YNc(93,oe,1,0,"td",8),t.BQk(),t.ynx(94,42),t.YNc(95,ae,2,1,"th",43),t.BQk(),t.ynx(96,44),t.YNc(97,ie,2,1,"th",43),t.BQk(),t.ynx(98,45),t.YNc(99,le,2,1,"th",43),t.BQk(),t.ynx(100,46),t.YNc(101,ce,2,1,"th",43),t.BQk(),t.ynx(102,47),t.YNc(103,me,2,1,"th",43),t.BQk(),t.ynx(104,48),t.YNc(105,pe,1,1,"th",43),t.BQk(),t.YNc(106,re,1,0,"tr",49),t.YNc(107,de,1,0,"tr",49),t.YNc(108,ue,1,0,"tr",50),t.YNc(109,_e,1,0,"tr",51),t.YNc(110,fe,1,0,"tr",52),t.YNc(111,se,1,0,"tr",52),t.qZA()()(),t.TgZ(112,"div",2)(113,"div",3),t._UZ(114,"app-individual"),t.qZA()()()()),2&o&&(t.xp6(7),t.Q6J("dataSource",i.dataSource),t.xp6(99),t.Q6J("matHeaderRowDef",t.DdM(7,ke)),t.xp6(1),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("matFooterRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matFooterRowDef",i.displayedFooter),t.xp6(1),t.Q6J("matFooterRowDef",i.displayedFooter2))},dependencies:[a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.mD,a.Ke,a.ge,a.ev,a.yh,a.XQ,a.Gk,a.Q2,P,et],styles:["[_nghost-%COMP%]     .bookkeeping-table .mat-cell:nth-child(2){background-color:#01950114}[_nghost-%COMP%]     .bookkeeping-table .mat-cell:nth-child(n+3):nth-child(-n+5){background-color:#f9e92a17}[_nghost-%COMP%]     .bookkeeping-table .mat-cell:nth-child(n+6):nth-child(-n+9){background-color:#f9820714}[_nghost-%COMP%]     .bookkeeping-table .mat-cell:nth-child(n+10):nth-child(-n+11){background-color:#ff4aa412}[_nghost-%COMP%]     table .mat-cell{font-size:13px;padding:8px}[_nghost-%COMP%]     table .mat-header-cell, [_nghost-%COMP%]     table .mat-cell, [_nghost-%COMP%]     table .mat-footer-cell{text-align:center!important;min-width:140px}[_nghost-%COMP%]     table .mat-header-cell:first-child, [_nghost-%COMP%]     table .mat-cell:first-child, [_nghost-%COMP%]     table .mat-footer-cell:first-child{min-width:180px}.footer-row[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(2){background-color:#01950114}.footer-row[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(n+3):nth-child(-n+5){background-color:#f9e92a17}.footer-row[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(n+6):nth-child(-n+9){background-color:#f9820714}.footer-row[_ngcontent-%COMP%]   .mat-footer-cell[_ngcontent-%COMP%]:nth-child(n+10):nth-child(-n+11){background-color:#ff4aa412}"]}),e})();var Ce=l(7579),Te=l(2722),we=l(3079),_=l(6895),xe=l(9549),Ze=l(4385),Be=l(3238),De=l(2591);function qe(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.AsE(" ",null==o?null:o.first_name," ",null==o?null:o.last_name," ")}}function Ae(e,n){if(1&e&&t._uU(0),2&e){const o=t.oxw().$implicit;t.hij(" ",null==o?null:o.username," ")}}function ye(e,n){if(1&e&&(t.TgZ(0,"mat-option",30),t.YNc(1,qe,2,2,"ng-container",31),t.YNc(2,Ae,1,1,"ng-template",null,32,t.W1O),t.qZA()),2&e){const o=n.$implicit,i=t.MAs(3);t.Q6J("value",o.id),t.xp6(1),t.Q6J("ngIf",null==o?null:o.first_name)("ngIfElse",i)}}function Ue(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," USer Name "),t.qZA())}function Ne(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}function Ye(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," Company "),t.qZA())}function ve(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.company,"")}}function be(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," Task Type "),t.qZA())}function Qe(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.type,"")}}function Oe(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," Task "),t.qZA())}function Me(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.task,"")}}function Re(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," Date "),t.qZA())}function Se(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.date,"")}}function Pe(e,n){1&e&&(t.TgZ(0,"th",33),t._uU(1," Time"),t.qZA())}function $e(e,n){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.time," AM")}}function je(e,n){1&e&&t._UZ(0,"tr",35)}function Ie(e,n){1&e&&t._UZ(0,"tr",36),2&e&&t.Gre("",n.$implicit.type,"-row")}const Fe=function(){return[10,20,30]},Ve=[{id:1,name:"Rayan",company:"xero",type:"bookkeeping",date:"11/11/2022",time:"10:20",task:"task here"},{id:2,name:"David",company:"xero",type:"vat",date:"11/11/2022",time:"10:20",task:"task here"},{id:3,name:"James",company:"xero",type:"bookkeeping",date:"11/11/2022",time:"10:20",task:"task here"},{id:4,name:"Rasmus",company:"xero",type:"account",date:"11/11/2022",time:"10:20",task:"task here"},{id:5,name:"Shital",company:"xero",type:"assessment",date:"11/11/2022",time:"10:20",task:"task here"}],He=[{path:"",children:[{path:"",pathMatch:"full",redirectTo:"book"},{path:"bookkeeping",component:he},{path:"completed-task",component:(()=>{class e{constructor(o){this.taskService=o,this.displayedColumns=["username","company","taskType","task","date","time"],this.dataSource=Ve,this.users=[],this.destroyer$=new Ce.x}ngOnInit(){this.getUserList()}ngOnDestroy(){this.destroyer$.next(),this.destroyer$.complete()}getUserList(){this.taskService.userList({}).pipe((0,Te.R)(this.destroyer$)).subscribe(o=>{this.users=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(we.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-completed-task"]],decls:52,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex-auto","p-6","sm:p-6"],[1,"sm:col-span-6","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","mb-3"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate","mb-2"],[1,"flex","items-center","justify-between","flex-wrap","pb-2"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","heroicons_outline:filter"],["menu","matMenu"],["mat-menu-item",""],[1,"w-3","h-3","mr-2","rounded-full","bg-amber-200"],[1,"w-3","h-3","mr-2","rounded-full","bg-orange-300"],[1,"w-3","h-3","mr-2","rounded-full","bg-pink-300"],[1,"w-3","h-3","mr-2","rounded-full","bg-lime-300"],["appearance","fill","id","status",1,"w-36"],["placeholder","Select User","disableOptionCentering","",1,"text-lg","text-gray-500"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","flex-col","flex-auto","overflow-auto","table-container"],["mat-table","",1,"min-w-240","overflow-y-visible","w-full","individual-table",3,"dataSource"],["matColumnDef","username"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","company"],["matColumnDef","taskType"],["matColumnDef","task"],["matColumnDef","date"],["matColumnDef","time"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"class",4,"matRowDef","matRowDefColumns"],[1,"text-right","mt-3.5"],[3,"pageSizes","count","perPage"],[3,"value"],[4,"ngIf","ngIfElse"],["nousername",""],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"button",5),t._UZ(6,"mat-icon",6),t.qZA(),t.TgZ(7,"mat-menu",null,7)(9,"button",8),t._UZ(10,"span",9),t.TgZ(11,"span"),t._uU(12,"Bookkeeping Status "),t.qZA()(),t.TgZ(13,"button",8),t._UZ(14,"span",10),t.TgZ(15,"span"),t._uU(16,"VAT Status "),t.qZA()(),t.TgZ(17,"button",8),t._UZ(18,"span",11),t.TgZ(19,"span"),t._uU(20,"Account Status "),t.qZA()(),t.TgZ(21,"button",8),t._UZ(22,"span",12),t.TgZ(23,"span"),t._uU(24,"Self Assessment Status "),t.qZA()()(),t.TgZ(25,"mat-form-field",13)(26,"mat-select",14),t.YNc(27,ye,4,3,"mat-option",15),t.qZA()()()(),t.TgZ(28,"div",16)(29,"table",17),t.ynx(30,18),t.YNc(31,Ue,2,0,"th",19),t.YNc(32,Ne,2,1,"td",20),t.BQk(),t.ynx(33,21),t.YNc(34,Ye,2,0,"th",19),t.YNc(35,ve,2,1,"td",20),t.BQk(),t.ynx(36,22),t.YNc(37,be,2,0,"th",19),t.YNc(38,Qe,2,1,"td",20),t.BQk(),t.ynx(39,23),t.YNc(40,Oe,2,0,"th",19),t.YNc(41,Me,2,1,"td",20),t.BQk(),t.ynx(42,24),t.YNc(43,Re,2,0,"th",19),t.YNc(44,Se,2,1,"td",20),t.BQk(),t.ynx(45,25),t.YNc(46,Pe,2,0,"th",19),t.YNc(47,$e,2,1,"td",20),t.BQk(),t.YNc(48,je,1,0,"tr",26),t.YNc(49,Ie,1,3,"tr",27),t.qZA()()(),t.TgZ(50,"div",28),t._UZ(51,"app-paginator",29),t.qZA()()()),2&o){const c=t.MAs(8);t.xp6(5),t.Q6J("matMenuTriggerFor",c),t.xp6(22),t.Q6J("ngForOf",i.users),t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizes",t.DdM(8,Fe))("count",10)("perPage",10)}},dependencies:[_.sg,_.O5,xe.KE,Ze.gD,Be.ey,De.J,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,r.Hw,m.VK,m.OP,m.p6],styles:[".mat-row.bookkeeping-row[_ngcontent-%COMP%]{background:rgba(249,233,42,.0901960784)}.mat-row.vat-row[_ngcontent-%COMP%]{background:rgba(249,130,7,.0784313725)}.mat-row.account-row[_ngcontent-%COMP%]{background:rgba(255,74,164,.0705882353)}.mat-row.assessment-row[_ngcontent-%COMP%]{background:rgba(194,245,116,.1411764706)}"]}),e})()}]}];let Je=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(He),d.Bz]}),e})(),Ee=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.m,a.p0,r.Ps,m.Tx,Je]}),e})()}}]);