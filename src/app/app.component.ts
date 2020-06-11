/**
  * Name: Maria Qumayo
  * Version: 1.0
  * Date: 09/06/2020
  * For: Integrove interview
*/

import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ɵTestingCompiler } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integrove';
  number = '+61 3 8376 6284';
  email = 'hi@pixelpack.co.za';
  hours = 'Mon-Fri: 9am - 3pm';
  mainHeading = 'Compare Packages';
  show = false;
  windowWidth = window.screen.width;
  $ :any;
  public packages: object;

  constructor() {
    this.packages = {
      'Bambino': {
        'name': 'Bambino',
        'description': 'Get all the base offerings wiht the no-nonsense one-page.Perfect to get you online in a jiffy!',
        'price': '450',
        'currency': 'R',
        'term': 'p/m',
        'domain': true,
        'WebsiteHosting': true,
        'BasicEmail': true,
        'ContenteUpdates': false,
        'Maintenance': false,
        'LandingPage': false,
        'ContactForm': false,
      },
      'Basic': {
        'name': 'Basic',
        'description': 'Go back to basics with  a home, About and Contact page on a classic starter website. Perfect for small businesses and startups.',
        'price': '650',
        'currency': 'R',
        'term': 'p/m',
        'domain': true,
        'WebsiteHosting': true,
        'BasicEmail': true,
        'ContenteUpdates': true,
        'Maintenance': false,
        'LandingPage': false,
        'ContactForm': false,
      },
      'Bizniz': {
        'name': 'Bizniz',
        'description': 'Get down to business with a 5 page website featuring a little bit more of everything, plus a custom form t gather leads or collect useful information',
        'price': '850',
        'currency': 'R',
        'term': 'p/m',
        'domain': true,
        'WebsiteHosting': true,
        'BasicEmail': true,
        'ContenteUpdates': true,
        'Maintenance': true,
        'LandingPage': false,
        'ContactForm': false,
      },
      'Bonanza': {
        'name': 'Bonanza',
        'description': 'You can have all the bells and whistles on 10 lively web pages, designed for the movers and the shakers of the business world.',
        'price': '1250',
        'currency': 'R',
        'term': 'p/m',
        'domain': true,
        'WebsiteHosting': true,
        'BasicEmail': true,
        'ContenteUpdates': true,
        'Maintenance': true,
        'LandingPage': true,
        'ContactForm': true,
      }
    }
  }
   ngOnInit() {

  }

  toggle(){
      this.show = !this.show;
  }
  
  test(){
    var name = $("#Maria").val();
    alert(name);
  }
}