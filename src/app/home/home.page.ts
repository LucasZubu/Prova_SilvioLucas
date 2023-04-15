import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private ClientesService: ClientesService) {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.ClientesService.getAll().subscribe(dados => {
      console.log(dados)
    });
  }
}
