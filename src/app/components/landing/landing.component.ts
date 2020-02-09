import { Component, OnInit } from '@angular/core';
import {Landing} from '../../models/Landing';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public errores: string[];
  public titulo: string = 'Ingresa tus Datos';
  public landing: Landing = new Landing();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  continuar() {
    this.router.navigate(['/renta'], {
      state: { landing: this.landing }
    });
  }

}
