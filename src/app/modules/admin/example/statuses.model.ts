export class StatusNotifications {
  book_status: boolean = true;
  vat_status: boolean = true;
  annual_status: boolean = true;
}

export const ASSESMENT_ITEMS: any[] = [
  { id:1, text:'Self Assesment Process Started'},
  { id:2, text:'Information Request Sent to Client' },
  { id:3,status: 'start', text:'Self Assesment WIP' },
  { id:4,status: 'in-progress', text:'Self Assesment Completed' },
  { id:5,status: 'in-progress', text:'Self Assesment Sent to Client' },
  { id:6,status: 'complete', text:'Self Assesment Field' }
]
