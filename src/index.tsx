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

