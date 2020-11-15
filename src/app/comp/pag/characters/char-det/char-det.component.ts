import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { char } from '@app/mixed/interface/char.interface';
import { CharService } from '@app/mixed/service/char.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-char-det',
  templateUrl: './char-det.component.html',
  styleUrls: ['./char-det.component.css']
})
export class CharDetComponent implements OnInit {
  char$: Observable<char>;
  constructor(private route: ActivatedRoute, private characterSvc: CharService, private location: Location) { }

  ngOnInit(): void {
  }

}
