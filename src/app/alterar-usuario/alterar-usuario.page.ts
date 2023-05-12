import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarUsuarioPage implements OnInit {
  id =  0;
  email = '';
  first_name = '';
  last_name = '';
  avatar = '';

  constructor(private route: Router, private userService : UserService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.userService.getOne(this.id).subscribe(retorno => {
      this.email      = retorno.email as string;
      this.first_name    = retorno.first_name ? retorno.first_name : '';
      this.last_name       = retorno.last_name? retorno.last_name : '';
      this.avatar = retorno.avatar? retorno.avatar : '';
    })
  }

  salvar(){

      const user : User = {
        id : this.id,
        email: this.email,
        first_name : this.first_name,
        last_name : this.last_name,
        avatar : this.avatar
      }
      this.userService.update(user).subscribe(dados => {
        alert('Cliente Inserido com sucesso: ' + dados.id)
        // navegação vem aqui
        this.route.navigateByUrl('/home');
        //this.route.navigate(['/home']);
      })
      //Nunca colocar a navegação fora... vai voltar sem saber a resposta

  }
}
