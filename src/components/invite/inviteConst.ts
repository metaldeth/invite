export type InviteType = {
  userList: User[],
  isWoman?: boolean,
  locationId: number,
}

export type User = {
  name: string;
}

export type RouteInviteParam = {
  inviteId: string;
}

export const inviteText = 'Случилось неизбежное - наша сумасшедше влюбленная пара решила свить своё семейное гнёздышко! ' +
  'Звезды подсказали нам лучший день для наших начинаний!\n\n' +
  'Мы были бы рады заручиться поддержкой самых близких нам людей, разделить наши самые позитивные эмоции этого ' +
  'дня, окунуться в атмосферу нашей необъятной любви!\n\n' +
  'Дорогие, родные, драгоценные!\n\n' +
  'Будьте с нами в этот Наш Безумно Важный День!\n\n' +
  'Это грандиозное событие мы хотим закрепить бумагой, печатями и подписями в ЗАГСе и насладиться нашим ' +
  'праздником вместе с вами!'

export const inviteList: InviteType[] = [
  {
    userList: [
      {
        name: 'Мама',
      },
      {
        name: 'Папа',
      },
    ],
    locationId: 0,
  },
  {
    userList: [
      {
        name: 'Мама',
      },
      {
        name: 'Папа',
      },
    ],
    locationId: 1,
  },
  {
    userList: [
      {
        name: 'Бабушка',
      },
      {
        name: 'Дедушка',
      },
    ],
    locationId: 1,
  },
  {
    userList: [
      {
        name: 'Бабушка',
      },
      {
        name: 'Крёстный',
      },
    ],
    locationId: 4,
  },
  {
    userList: [
      {
        name: 'Алексей',
      },
      {
        name: 'Наталья',
      },
    ],
    locationId: 0,
  },
  {
    userList: [
      {
        name: 'Дарья',
      },
      {
        name: 'Михаил',
      },
    ],
    locationId: 0,
  },
  {
    userList: [
      {
        name: 'Наталья',
      },
      {
        name: 'Тимофей',
      },
    ],
    locationId: 0,
  },
  {
    userList: [
      {
        name: 'Татьяна',
      },
      {
        name: 'Олег',
      },
    ],
    locationId: 0,
  },
  {
    userList: [
      {
        name: 'Диана',
      },
    ],
    isWoman: true,
    locationId: 0,
  },
  {
    userList: [
      {
        name: 'Бабушка',
      },
    ],
    isWoman: true,
    locationId: 0,
  },
  {
    userList: [
      {
        name: 'Ирина',
      },
    ],
    isWoman: true,
    locationId: 2,
  },
  {
    userList: [
      {
        name: 'Николай',
      },
      {
        name: 'Валерия',
      },
    ],
    locationId: 2,
  },
  {
    userList: [
      {
        name: 'Даниил',
      },
    ],
    locationId: 2,
  },
  {
    userList: [
      {
        name: 'Сергей',
      },
    ],
    locationId: 2,
  },
  {
    userList: [
      {
        name: 'Дарья',
      },
    ],
    isWoman: true,
    locationId: 2,
  },
  {
    userList: [
      {
        name: 'Ксения, София',
      },
      {
        name: 'Михаил',
      },
    ],
    locationId: 3,
  },
  {
    userList: [
      {
        name: 'Дмитрий',
      },
    ],
    locationId: 4,
  },
]

export const startPosition: {position: string, time: string}[] = [
  {
    position: 'п. Прохладный ул. Рождественского 11',
    time: '17.09.2022 к 10:00',
  },
  {
    position: 'г. Екатеринбург ул. Калинина д.59 кв. 76',
    time: '17.09.2022 к 10:00',
  },
  {
    position: 'г. Екатеринбург ул. Сакко и Ванцетти д. 105/1',
    time: '17.09.2022 к 14:30',
  },
  {
    position: 'г. Берёзовский ул. Рассветная д. 1',
    time: '17.09.2022 к 16:30',
  },
  {
    position: 'г. Екатеринбург ул. Калинина д.59 кв. 76',
    time: '17.09.2022 к 13:00',
  },
]

export const taskList: {caption: string, address: string, time: string}[] = [
  {
    caption: 'Регистрация брака',
    address: 'г. Екатеринбург ул. Сакко и Ванцетти д. 105/1',
    time: '14:45',
  },
  {
    caption: 'Фуршет + фотосессия',
    address: 'г. Березовский ул. Рассветная д. 1',
    time: '16:00-17:00',
  },
  {
    caption: 'Банкет',
    address: 'г. Березовский ул. Рассветная д. 1',
    time: '17:00-22:30',
  },
]
