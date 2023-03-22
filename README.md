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

## data binding
   string intrapolation - define var in component.ts and intrapolate the value to .html file using {{var/fn that reurns var}}

   property binding - bind property calues to vars in component.ts file ex: `[tag property] = "varVal"`

## event binding
 bind the action property by (action) = "component.ts fn"
 (click) = "onCreateServer()"

## two-way binding