  import { Component, OnInit } from "@angular/core";
  import { MemHttpServiceService } from "./services/mem-http.service";
  
  @Component({
    selector: 'app-norris',
    templateUrl: './norris.component.html',
    styleUrls: ['./norris.component.scss']
  })

    export class NorrisComponent  implements OnInit {
         dataValue: string 

      constructor(
        private memHttpRandomMem:MemHttpServiceService,
        )   {}
      

      requestPosts() {
        this.memHttpRandomMem.requestPosts()
          .subscribe((results) => {
            this.dataValue = results.value;
            // console.log(results);
          });
        }

        sendedData(data) {
          data = this.requestPosts()
        }
        
    ngOnInit() {
      this.requestPosts();
    } 
  }
  












  // import { Component, OnInit } from "@angular/core";
  // import { Post } from "../norris/mem/interface/post.model";
  // import { HttpClient } from "@angular/common/http";
  // import { MemDataValueService } from "./services/memNewDataValue.service";
  // import { ShowMemSwitchService } from "./services/show-mem-switch.service";
  
  // @Component({
  //   selector: 'app-norris',
  //   templateUrl: './norris.component.html',
  //   styleUrls: ['./norris.component.scss']
  // })

  //   export class NorrisComponent  implements OnInit {
  //     API:string = "https://api.chucknorris.io/jokes/random"
  //     dataValue: string 

  //     constructor(
  //       private http: HttpClient,
  //       private serviceDataValue:MemDataValueService,
  //       private showMemSwitch: ShowMemSwitchService, )   {}
      

  //     requestPosts() {
  //       this.http
  //         .get<Post>(this.API)
  //         .subscribe((results) => {
  //           this.dataValue = results.value;
  //           // this.clearParagraf()
  //         });
  //       }

  //       sendedData(data) {
  //         data = this.requestPosts()
  //       }
        
  //   ngOnInit() {
  //     this.requestPosts();
  //   } 
  // }
  