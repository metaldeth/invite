export type InviteType = {
  userList: User[],
  caption: string,
}

export type User = {
  name: string;
  surname?: string;
}

export type RouteInviteParam = {
  inviteId: string;
}

export const inviteList: InviteType[] = [
  {
    userList: [
      {
        name: 'Светлана',
      },
      {
        name: 'Сергей',
        surname: 'Нефедовы'
      },
    ],
    caption: 'Мы приглашаем вас на свадьбу, можно тут побольше текста, прям сильно побольше, ' +
      'очень сильно побольше и ещё побольше и ещё больше и ещё пару вагонов теста и небольшая тележка текста'
  }
]