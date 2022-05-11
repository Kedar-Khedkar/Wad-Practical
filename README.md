# Wad-Practical Angular
- To install angular `npm install -g @angular/cli`.
- To create angular project `ng new first-app`.
- create new component by command `ng generate component home.`
- For making a form  copy content from home.html to home.component.html.
- In app-routing.module.ts add the code  `import { HomeComponent } from './home/home.component';` in Routes list add  {path:'', component: HomeComponent} .
- To add link to another page add anchor tag where you want to add link `<a routerLink="<name of component>">(any string)</a>` Example: `<a routerLink="aboutus">About us</a>`. 
