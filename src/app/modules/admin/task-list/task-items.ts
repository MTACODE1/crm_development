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
