import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  BrowserRouter,
} from "react-router-dom";
import App from "./components/App";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export type UserDto = {
//   // уникальное поле
//   login: string;
//   // уникальное поле
//   email: string;
//   name: string;
//   isValidEmail: boolean;
//   avatar: any;
// }
// // при авторизации
// & { jwt: string };
//
// //
// export type CreateUserDto = {
//   // уникальное поле
//   login: string;
//   password: string;
//   // Делается на бэке
//   role: 'USER';
//   // уникальное поле
//   email: string;
//   name: string;
// }
//
// export type UpdateUser = {
//   password: string;
//   // уникальное поле
//   name: string;
// }
//
// export type UpdateUserRole = {
//   uuid: string;
//   role: UserRole;
// }
//
// export type ParticipantDto = {
//   // уникальное поле
//   login: string;
//   // уникальное поле
//   email: string;
//   name: string;
//   isValidEmail: boolean;
// }
//
// enum UserRole {
//   'USER',
//   'ANALYTIC',
//   'ADMIN'
// }
//
// enum TaskStatus {
//   'PROCESS',
//   'APPROVE',
//   'REJECT',
// }
//
// enum ApproveStatus {
//   // пока что письмо не отправлено
//   'NO_PROCESS',
//   'PROCESS',
//   'APROVE',
//   'REJECT',
// }
//
// type TaskDto = {
//   caption: string;
//   description: string;
//   uuid: string;
//   status: TaskStatus;
//   listOfParticipant: {
//     participant: ParticipantDto,
//     status: ApproveStatus
//   }[];
// }
//
// type CreateTaskDto = {
//   caption: string;
//   description: string;
//   /**
//    * Индекс в массиве означает приоритет
//    */
//   listOfParticipant: ParticipantDto[];
// }
//
// type EditTaskDto = {
//   caption: string;
//   description: string;
//   uuid: string;
//   /**
//    * Индекс в массиве означает приоритет
//    */
//   listOfParticipant: ParticipantDto[];
// }
//
// type DeleteTaskDTO = {uuid: string};

type Length<T extends any[]> = T extends { length: infer L } ? L : never;

type BuildTuple<L extends number, T extends any[] = []> =
   T extends { length: L } ? T : BuildTuple<L, [...T, any]>;

type Add<A extends number, B extends number> =
   Length<[...BuildTuple<A>, ...BuildTuple<B>]>;


type Sum<Arr extends number[], S extends number = 0> =
   Arr extends [infer H, ...(infer T)]
      ? H extends number
         ? T extends []
            ? Add<S, H>
            : T extends number[]
               ? Sum<T, Add<S, H>>
               : never
         : never
      : never


type S = Sum<[10, 20, 15]>

const ttt: S = 45