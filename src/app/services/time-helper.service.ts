import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {addMonths, differenceInMonths, isBefore, startOfDay} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {

  calculateMonths(start: Date, end: Date): number {

    // Make sure they are pure dates (no time)
    start = startOfDay(start);
    end = startOfDay(end);

    let months = differenceInMonths(end, start);
    const adjustedDate = addMonths(start, months);
    if (isBefore(adjustedDate, end)) {
      months += 1; // Only round up if adjusted date is strictly before end
    }
    return months;
  }

}
