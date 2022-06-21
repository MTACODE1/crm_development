export interface OnboardingItems {
  id:number;
  text:string;
  active:boolean;
  type:string
}

export const ONBOARDING_FORM_ITEMS: OnboardingItems[] = [
  {id:1, text:'Professional clearance received', type:'profession', active:true },
  {id:2, text:'64-8 sent', type:'profession', active:true},
  {id:3,text:'64-8 received', type:'profession', active:true},
  {id:4,text:'KYC completed', type:'profession', active:true},
  { id:5,text:'Bookkeeping strategy call completed', type:'profession', active:true},
  {id:6,text:'Welcome email sent', type:'profession', active:true},
  {id:7,text:'Client provided expenses guide', type:'profession', active:true},
  {id:8,text:'Call back set to go through first management report', type:'profession', active:true},
  {id:9,text:'Cut off date for bookkeeping agreed', type:'profession', active:true},
  {id:10, text:'VAT Certificate', type:'vat', active:true },
  {id:11, text:'VAT Gateway Received', type:'vat', active:true},
  {id:12,text:'Client Registered for VAT if applicable', type:'vat', active:true},
  {id:13,text:'Login detail for current software received', type:'software', active:true},
  {id:14,text:'Balances from current software imported to Xero', type:'software', active:true},
  {id:15,text:'If Xero, has license been transferred to us', type:'software', active:true},
  {id:16,text:'Login details for third party software received (EPOS) etc.', type:'software', active:true},
  {id:17,text:'Xero Setup', type:'software', active:true},
  {id:18,text:'Dext Setup', type:'software', active:true},
  {id:19,text:'Linked Xero and Dext', type:'software', active:true},
  {id:20,text:'Bank Feed Setup on Xero', type:'software', active:true},
  {id:21,text:'Client company logo on Xero', type:'software', active:true},
  {id:22,text:'Relevant company accounts added to chart of accounts', type:'software', active:true},
  {id:23,text:'Payment terms and info added to invoice template on Xero', type:'software', active:true}
];
