import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-link-info',
  templateUrl: './link-info.component.html',
  styleUrls: ['./link-info.component.scss']
})
export class LinkInfoComponent implements OnChanges {
  @Input() link;
  form: FormGroup;
  types = ['Вода', 'Воздух', 'Земля'];
  sub: Subscription;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: null,
      path: null
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
    this.form.reset(this.link.info);
    this.sub = this.form.valueChanges.subscribe(
      res => {
        this.link.info = res;
      }
    );
  }

}
