import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements = [{type:'server',name:'TestServer', content:'Server'}];

onServerAdded(serverData:{serverName:string, serverContent:string}) {
  alert(serverData.serverName)
  // adding to server list
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }
  
    onBlueprintAdded(blueprintData:{ serverName:string, serverContent:string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
    }

    // Life cyle hooks
    ngOnInit(){} // called after a bound property changes
    ngOnChange(){} // called once component is initialized
    ngDoCheck(){} //called during every change detection run
    ngAfterContentInit(){} // caleed after content(ng-content) has neen projected in view
    ngAfterViewInit(){} //after view and child view have been initialized
    ngAfterViewChecked(){} //after view and child view have been initialized
    ngOnDestroy(){}// once component is destroyed

}
