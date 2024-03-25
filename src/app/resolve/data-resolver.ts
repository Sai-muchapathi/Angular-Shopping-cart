import { inject } from '@angular/core';
import { ResolveFn } from "@angular/router";
import { FetchUserDataService, User } from "../fetch-data/fetch-users.service";
import { Observable } from "rxjs";
import { first } from 'rxjs/operators';

export const DataResolver: ResolveFn<any> = () => {
  console.log("Inside DataResolver");
  const fetchUsers = inject(FetchUserDataService);

  return new Observable<User[]>(observer => {
    fetchUsers.fetchUsersData()
      .then(() => {
        const subscription = fetchUsers.getAllUsers().pipe(
          first() // Emit the first value and complete
        ).subscribe(users => {
          console.log("Resolved user data:", users);
          observer.next(users);
          observer.complete();
        });

        return () => subscription.unsubscribe();
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        observer.error(error);
        observer.complete();
      });
  });
};
