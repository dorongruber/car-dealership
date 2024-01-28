import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';
import { CarRequestService } from 'src/app/shared/services/mock-car-request.service';
import { CarRequest } from 'src/app/shared/models/car-request';


/**
 * Data source for the OrdersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OrdersTableDataSource extends DataSource<CarRequest> {
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor(private carRequestService: CarRequestService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CarRequest[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.   
      return merge(of([]), this.paginator.page, this.sort.sortChange).pipe(map(() => {
        
        
        return this.carRequestService.getData(this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize,this.sort);
      }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  
}


