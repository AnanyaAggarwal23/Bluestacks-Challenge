import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/models/campaign.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  data = {
    data: [
      {
        name: 'Test Whatsapp',
        region: 'US',
        createdOn: 1559807714999,
        price: 'Price info of Test Whatsapp',
        csv: 'Some CSV link for Whatsapp',
        report: 'Some report link for Whatsapp',
        image_url: '../../../../assets//Dashboard/Row/Thumb/Bitmap.png',
      },
      {
        name: 'Super Jewels Quest',
        region: 'CA, FR',
        createdOn: 1559806715124,
        price: 'Price info of Super Jewels Quest',
        csv: 'Some CSV link for Super Jewels Quest',
        report: 'Some report link for Super Jewels Ques',
        image_url:
          '../../../../assets//Dashboard/Row Copy 2-Row/Thumb/Bitmap.png',
      },
      {
        name: 'Mole Slayer',
        region: 'FR',
        createdOn: 1559806711124,
        price: 'Price info of Mole Slayer',
        csv: 'Some CSV link for Mole Slayer',
        report: 'Some report link for Mole Slayer',
        image_url:
          '../../../../assets//Dashboard/Row Copy 3-Row/Thumb/Bitmap.png',
      },
      {
        name: 'Mancala Mix',
        region: 'JP',
        createdOn: 1559806680124,
        price: 'Price info of Mancala Mix',
        csv: 'Some CSV link for Mancala Mix',
        report: 'Some report link for Mancala Mix',
        image_url:
          '../../../../assets//Dashboard/Row Copy 4-Row/Thumb/Bitmap.png',
      },
    ],
  };
  liveCamp = [];
  pastCamp = [];
  upcomingCamp = [];
  constructor() {
    this.data.data.map((row) => {
      let dt = new Date(row.createdOn);
      row.createdOn =
        (this.month[dt.getMonth()] +
          ' ' +
          dt.getDate() +
          ', ' +
          dt.getFullYear()) as undefined;
      let timeDiff = Math.round(
        (new Date().getTime() - new Date(row.createdOn).getTime()) /
          (1000 * 3600 * 24)
      );
      row['timeDiff'] = timeDiff + 'Days';
      if (timeDiff === 1) {
        this.liveCamp.push(row);
      } else if (Math.sign(timeDiff) === -0 || Math.sign(timeDiff) === -1) {
        this.upcomingCamp.push(row);
      } else if (timeDiff > 0) {
        this.pastCamp.push(row);
      }
    });
  }

  ngOnInit(): void {}

  onDateChange(data: any) {
    this.upcomingCamp = this.upcomingCamp.filter(
      (it) => it.name != data.row.name
    );
    this.liveCamp = this.liveCamp.filter((it) => it.name != data.row.name);
    this.pastCamp = this.pastCamp.filter((it) => it.name != data.row.name);
    this.data.data.map((it) => {
      if (it.name === data.row.name) {
        it.createdOn =
          (this.month[data.date.getMonth()] +
            ' ' +
            data.date.getDate() +
            ', ' +
            data.date.getFullYear()) as undefined;
        let timeDiff = Math.round(
          (new Date().getTime() - new Date(it.createdOn).getTime()) /
            (1000 * 3600 * 24)
        );
        it['timeDiff'] = timeDiff + 'Days';
        if (timeDiff === 1) {
          this.liveCamp.push(it);
        } else if (Math.sign(timeDiff) === -0 || Math.sign(timeDiff) === -1) {
          this.upcomingCamp.push(it);
        } else if (timeDiff > 0) {
          this.pastCamp.push(it);
        }
      }
    });
  }
}
