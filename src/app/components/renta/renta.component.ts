import {Component, OnInit} from '@angular/core';
import {Landing} from '../../models/Landing';
import {ActivatedRoute, Router} from '@angular/router';
import {RentServiceService} from '../../services/rent-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements OnInit {

  private landing: Landing;
  public error: string;
  public titulo = 'Ayudanos con unos datos mas';
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private rentaService: RentServiceService) {
    this.landing = this.router.getCurrentNavigation().extras.state.landing;
  }

  ngOnInit() {

  }

  guardar() {
    this.rentaService.save(this.landing).subscribe((resp: any) => {
      console.log(resp);
      Swal.fire('Registro Exitoso', resp.msg, 'success');
      this.router.navigate(['/landing']);
    }, err => {
      this.error = err.error.error;
    });
  }
}
