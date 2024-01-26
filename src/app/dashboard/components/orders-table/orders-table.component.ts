import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrdersTableDataSource } from './orders-table-datasource';
import { CarRequest } from 'src/app/shared/models/car-request';
import { MockCarRequestService } from 'src/app/shared/services/mock-car-request.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CarRequest>;
  dataSource!: OrdersTableDataSource;
  dataLength!: number;

  constructor(private carRequestService: MockCarRequestService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', "status", 'name'];

  displayedColumns = [
    "name",
    "gender",
    "birth date",
    "hobbies",
    "address",
    "city",
    "contry",
    "favorite color",
    "amount of seats",
    "motor type"
  ];

  ngOnInit(): void {
      this.dataSource = new OrdersTableDataSource(this.carRequestService);
      this.dataLength = this.carRequestService.getCount();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
