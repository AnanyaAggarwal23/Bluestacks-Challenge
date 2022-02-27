import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Campaign } from 'src/app/models/campaign.model';

@Component({
  selector: 'app-pricing-modal',
  templateUrl: './pricing-modal.component.html',
  styleUrls: ['./pricing-modal.component.scss'],
})
export class PricingModalComponent {
  constructor(
    public dialogRef: MatDialogRef<PricingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Campaign
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
