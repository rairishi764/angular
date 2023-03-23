  node --version
  npm install -g @angular/cli@^8.0.0
  ng version
# angular
  ng new <app>
  cd angular-tour-of-heroes
  ng serve --open

  npm install --save bootstrap@latest 

  ng generate component <component>   
 The --open flag opens a browser to http://localhost:4200


package.json - has list of all dependencies reqd for project
src          - has all 
angular.json - project configs

can change selector to work as attribute as `[app-selector]` and class as `(.app-selector)`

### data binding
   string intrapolation - define var in component.ts and intrapolate the value to .html file using {{var/fn that reurns var}}

   property binding - bind property calues to vars in component.ts file ex: `[tag property] = "varVal"`

### event binding
 bind the action property by (action) = "component.ts fn"
 (click) = "onCreateServer()"

### two-way binding
  bind such that any change `ng-model="var"`


### Directives
   Used to include logic as well as enable creation of complex HTML DOM elements.


NgModule decorator is used to convert a plain Typescript / JavaScript class into Angular module.

declarations option is used to include components into the AppModulemodule.

bootstrap option is used to set the root component of the AppModulemodule.

providers option is used to include the services for the AppModulemodule.

imports option is used to import other modules into the AppModulemodule.


 