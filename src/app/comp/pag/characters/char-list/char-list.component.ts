import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Component, OnInit,} from '@angular/core';
import { take, filter } from 'rxjs/operators';
import { char } from '@app/mixed/interface/char.interface';
import { CharService } from '@app/mixed/service/char.service';


type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})

export class CharListComponent implements OnInit {

  characters: char[]=[];

  info: RequestInfo={
    next: "",
  };

  private pageNum=1;
  private query: string="";
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private characterSvc: CharService, private route: ActivatedRoute, private router : Router) { 
    this.changeURL();
  }

  ngOnInit(): void {
    this.queryCharacters();
  }

  private changeURL(): void {
    this.router.events.pipe(filter((event)=> event instanceof NavigationEnd)).subscribe( ()=>{
        this.characters=[];
        this.pageNum=1;
        this.queryCharacters();
      });
  }
  
  private queryCharacters(): void {
    this.route.queryParamMap.subscribe(params => {
      this.query = params.get('q') as string;
      this.getDataFromService();
    })
  }

  private getDataFromService():void{
    
    this.characterSvc.searchChar(this.query, this.pageNum).pipe(
      take(1)
    ).subscribe((res:any)=>{
      if(res?.results?.length){
        const{info,results}= res;
        this.characters=[... this.characters, ... results];
        this.info=info;
      }else {
        this.characters = [];
      }
    })
  }
  
}
