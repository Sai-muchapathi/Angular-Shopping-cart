import {inject, Injectable} from '@angular/core';
import {ResolveFn} from "@angular/router";
import {FetchUserDataService, User} from "../fetch-data/fetch-users.service";

// export const DataResolver : ResolveFn<any> = async (route, state)
//   : Promise<BehaviorSubject<User[]>> => {
//   console.log("Inside Resolver function");
//   const fetchUsers = inject(FetchUserDataService);
//   await fetchUsers.fetchUsersData();
//   console.log("......");
//   console.log("Fetching data....", fetchUsers.fetchUsersData());
//   console.log("Get all users...", fetchUsers.getAllUsers().value);
//   return fetchUsers.getAllUsers();
// }

export const DataResolver : ResolveFn<any> = (route, state) => {
  const fetchUsers = inject(FetchUserDataService);
  console.log(fetchUsers.getAllUsers());
  return fetchUsers.getAllUsers().subscribe();
}

