export interface TaskItem {
  bookKeepingStatus:any[]
}


export const ONBOARDING_TASK_ITEMS: TaskItem[] = [
  {
    bookKeepingStatus: [
      {id:1, text:'Self Assessment Process Started' },
      {id:2, text:'Information Requeste Sent to Client'},
      {id:3,status: 'start', text:'Self Assessment WIP'},
      {id:4,status: 'in-progress', text:'Self Assessment Completed'},
      { id:5,status: 'in-progress', text:'Self Assessment Sent to CLient'},
      {id:6,status: 'complete', text:'Self Assessment Field'},
    ],
  },
];

// export const TASK_ITEMS: any =
//  {
//   setup:[
//     {
//       id:1, text:'Complete onboarding for Bespoke Alpha Limited', date: '12/06/2022', priority:'low', completed:false
//     },
//     {
//       id:2, text:'Complete onboarding for Bespoke Alpha Limited task', date: '12/06/2022', priority:'high', completed:false
//     },
//   ],
//   book_keeping:[
//     {
//       id:1, text:'Receive bookkeeping information request from Aplha solution and send to bookkeeper management accountant', 
//       date: '12/06/2022', priority:'high', completed:false
//     },
//     {
//       id:2, text:'Review then request bookkeeping information request for Aplha solution from accountant', 
//       date: '12/06/2022', priority:'low', completed:false
//     },
//   ],
//   vat:[
//     {
//       id:1, text:'Complete bookkeeping for the client bespoke limited .', date: '12/06/2022', priority:'high', completed:false
//     },
//     {
//       id:2, text:'Send VAT  return for cleint Alpha solution to accountant review', date: '12/06/2022', priority:'low', completed:false
//     },
//   ],
//   annual_accounts:[
//     {
//       id:1, text:'Review then request accounts information for the company from accountant',priority:'high', completed:false
//     },
//     {
//       id:2, text:'Receive accounts information request from company and send to EOY accountant', date: '12/06/2022', priority:'low', completed:false
//     },
//   ],
//   self_assessment:[
//     {
//       id:1, text:'Chase Self Assessment checklist or company name here', priority:'high', completed:false
//     },
//     {
//       id:2, text:'Chase Self Assessment checklist or company name here', date: '12/06/2022', priority:'low', completed:false
//     },
//   ],
//  };