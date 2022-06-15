export interface TaskItem {
  id?: string
  type: string;
  title: string;
  notes: string;
  completed: boolean;
  dueDate?: string;
  assignedTo?: string;
  priority?: number;
  order?: number;
  tags?: string[];
  subTasks?: any;
}

export const ONBOARDING_TASK_ITEMS: TaskItem[] = [
  {
      id        : 'f65d517a-6f69-4c88-81f5-416f47405ce1',
      type      : 'section',
      title     : 'VAT Status',
      notes     : 'Magna consectetur culpa duis ad est tempor pariatur velit ullamco aute exercitation magna sunt commodo minim enim aliquip eiusmod ipsum adipisicing magna ipsum reprehenderit lorem magna voluptate magna aliqua culpa.\n\nSit nisi adipisicing pariatur enim enim sunt officia ad labore voluptate magna proident velit excepteur pariatur cillum sit excepteur elit veniam excepteur minim nisi cupidatat proident dolore irure veniam mollit.',
      completed : false,
      dueDate   : '2017-10-18T13:03:37.943Z',
      priority  : 1,
      tags      : [
          '91658b8a-f382-4b0c-a53f-e9390351c2c5',
          '51483dd3-cb98-4400-9128-4bd66b455807'
      ],
      assignedTo: null,
      subTasks  : [
          {
              id       : '2768a969-a316-449b-bf82-93cff4252cbf',
              title    : 'Minim irure fugiat ullamco irure',
              completed: false
          },
          {
              id       : '6cc5ac8f-3a02-47e6-ad4b-0bd0222e2717',
              title    : 'Sint velit ex in adipisicing fugiat',
              completed: false
          }
      ],
      order     : 0
  },
  {
      id        : '0fcece82-1691-4b98-a9b9-b63218f9deef',
      type      : 'task',
      title     : 'Bookkeeping Stage',
      notes     : 'Et in lorem qui ipsum deserunt duis exercitation lorem elit qui qui ipsum tempor nulla velit aliquip enim consequat incididunt pariatur duis excepteur elit irure nulla ipsum dolor dolore est.\n\nAute deserunt nostrud id non ipsum do adipisicing laboris in minim officia magna elit minim mollit elit velit veniam lorem pariatur veniam sit excepteur irure commodo excepteur duis quis in.',
      completed : false,
      dueDate   : null,
      priority  : 0,
      tags      : [],
      assignedTo: 'e2c81627-a8a1-4bbc-9adc-ac4281e040d4',
      subTasks  : [],
      order     : 1
  },
  {
      id        : '2e6971cd-49d5-49f1-8cbd-fba5c71e6062',
      type      : 'task',
      title     : 'VAT Return Sent to Accountatnt',
      notes     : 'Id fugiat et cupidatat magna nulla nulla eu cillum officia nostrud dolore in veniam ullamco nulla ex duis est enim nisi aute ipsum velit et laboris est pariatur est culpa.\n\nCulpa sunt ipsum esse quis excepteur enim culpa est voluptate reprehenderit consequat duis officia irure voluptate veniam dolore fugiat dolor est amet nostrud non velit irure do voluptate id sit.',
      completed : false,
      dueDate   : '2019-05-24T03:55:38.969Z',
      priority  : 0,
      tags      : [
          'c6058d0d-a4b0-4453-986a-9d249ec230b1',
          '2b884143-419a-45ca-a7f6-48f99f4e7798',
          '91658b8a-f382-4b0c-a53f-e9390351c2c5'
      ],
      assignedTo: '88a2a76c-0e6f-49da-b617-46d7c3b6e64d',
      subTasks  : [
          {
              id       : 'b9566b52-82cd-4d2a-b9b6-240c6b44e52b',
              title    : 'Nulla officia elit adipisicing',
              completed: false
          },
          {
              id       : '76f4dc8d-4803-4d98-b461-367a1d3746a8',
              title    : 'Magna nisi ut aliquip aliquip amet deserunt',
              completed: false
          }
      ],
      order     : 2
  },
  {
      id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
      type      : 'task',
      title     : 'VAT Reviewed by Accountatnt',
      notes     : 'Excepteur deserunt tempor do lorem elit id magna pariatur irure ullamco elit dolor consectetur ad officia fugiat incididunt do elit aute esse eu voluptate adipisicing incididunt ea dolor aliqua dolor.\n\nConsequat est quis deserunt voluptate ipsum incididunt laboris occaecat irure laborum voluptate non sit labore voluptate sunt id sint ut laboris aute cupidatat occaecat eiusmod non magna aliquip deserunt nisi.',
      completed : false,
      dueDate   : null,
      priority  : 2,
      tags      : [],
      assignedTo: null,
      subTasks  : [ ],
      order     : 3
  },
  {
      id        : '5d877fc7-b881-4527-a6aa-d39d642feb23',
      type      : 'task',
      title     : 'VAt Return sent to client',
      notes     : 'Labore mollit in aliqua exercitation aliquip elit nisi nisi voluptate reprehenderit et dolor incididunt cupidatat ullamco nulla consequat voluptate adipisicing dolor qui magna sint aute do excepteur in aliqua consectetur.\n\nElit laborum non duis irure ad ullamco aliqua enim exercitation quis fugiat aute esse esse magna et ad cupidatat voluptate sint nulla nulla lorem et enim deserunt proident deserunt consectetur.',
      completed : false,
      dueDate   : null,
      priority  : 1,
      tags      : [],
      assignedTo: '4678ad07-e057-48a9-a5d1-3cf98e722eeb',
      subTasks  : [],
      order     : 4
  },
  {
      id        : '11bd2b9a-85b4-41c9-832c-bd600dfa3a52',
      type      : 'task',
      title     : 'VAt Return Filed',
      notes     : 'Sint mollit consectetur voluptate fugiat sunt ipsum adipisicing labore exercitation eiusmod enim excepteur enim proident velit sint magna commodo dolor ex ipsum sit nisi deserunt labore eu irure amet ea.\n\nOccaecat ut velit et sint pariatur laboris voluptate duis aliqua aliqua exercitation et duis duis eu laboris excepteur occaecat quis esse enim ex dolore commodo fugiat excepteur adipisicing in fugiat.',
      completed : true,
      dueDate   : '2017-10-12T12:03:55.559Z',
      priority  : 2,
      tags      : [],
      assignedTo: '271e6a06-0d37-433d-bc8d-607b12bcbed9',
      subTasks  : [
          {
              id       : '9cd8eba8-7c41-4230-9d80-f71f7ed1cfe9',
              title    : 'Eu exercitation proident dolore velit',
              completed: true
          }
      ],
      order     : 5
  },
];
