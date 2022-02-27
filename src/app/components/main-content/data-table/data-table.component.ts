import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Campaign } from '../../../models/campaign.model';
import { PricingModalComponent } from './pricing-modal/pricing-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['DATE', 'CAMPAIGN', 'VIEW', 'ACTIONS'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() dataList;
  @Output() dateChange = new EventEmitter();

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.dataList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.dataList);
  }
  openDialog(row: Campaign): void {
    const dialogRef = this.dialog.open(PricingModalComponent, {
      width: '250px',
      data: row,
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDateChange(date: any, row: Campaign) {
    this.dateChange.emit({ date: date.value, row: row });
  }
}
