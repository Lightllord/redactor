import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-service-cost',
  templateUrl: './service-cost.component.html',
  styleUrls: ['./service-cost.component.scss']
})
export class ServiceCostComponent implements OnChanges {
  @Input() info;
  @Input() type: 'consumer' | 'middleman';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type || changes.info) {
      if (!this.info.serviceCost) {
        if (this.type === 'middleman') {
          this.info.serviceCost = {
            service: null,
            lossOfSpoiling: null,
            lossOfDeficit: null,
          };
        } else {
          this.info.serviceCost = {
            service: null,
            lossOfSpoiling: null,
            lossOfDeficit: null,
            income: null
          };

        }
      }
    }
  }
}
