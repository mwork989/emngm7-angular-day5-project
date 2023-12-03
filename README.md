## Fastest way to add bootstrap

ng add @ng-bootstrap/ng-bootstrap

we dont have to manually enter packages and their dependencies

Note: this approach is used to add ng-bootstrap and anular flavoured UI library
https://ng-bootstrap.github.io/#/components/accordion/overview

and automatically adds bootstrap.min.css in angular.json file but boostrap JS related components and dialog boxes will not function

class commands
----------------------
ng add @ng-bootstrap/ng-bootstrap
ng g c components/parent
ng g c components/child
ng g c components/stock-records1
ng g c components/stock-records2
ng g c components/stock-records3
ng g c components/stock-records4
ng g d common/highlight
ng g i models/stock.model


Pipes
---------------------
Pipes will transform value from intiial state to desired state depending upon the data type
 1 Built in Pipes
       String based
       number based
       date obj based
       json object based