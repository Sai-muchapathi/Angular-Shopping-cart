import { inject } from '@angular/core';
import {ResolveFn} from "@angular/router";
import { FetchUserDataService, User } from "../fetch-data/fetch-users.service";


export const DataResolver: ResolveFn<any> = () => {
  console.log("Inside DataResolver");
  const fetchUsers = inject(FetchUserDataService);
  return fetchUsers.fetchUsersData();
};
