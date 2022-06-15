import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: +this.route.snapshot.paramMap.get('id'),
      name: this.route.snapshot.paramMap.get('name')
    }

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.user.id = +params.get('id');   //強型別寫法
        this.user.name = params.get('name');
      }
    )
  }

}
