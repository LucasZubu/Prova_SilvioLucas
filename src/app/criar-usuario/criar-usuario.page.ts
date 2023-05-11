import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.page.html',
  styleUrls: ['./criar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CriarUsuarioPage implements OnInit {

  email = '';
  first_name = '';
  last_name = '';
  avatar = '';

  constructor(private route: Router, private userService : UserService) { }

  ngOnInit() {
  }

  salvar(){

      const user : User = {
        email: this.email,
        first_name : this.first_name,
        last_name : this.last_name,
        avatar : this.avatar
      }
      this.userService.create(user).subscribe(dados => {
        alert('Cliente Inserido com sucesso: ' + dados.id)
        // navegação vem aqui
        this.route.navigateByUrl('/home');
        //this.route.navigate(['/home']);
      })
      //Nunca colocar a navegação fora... vai voltar sem saber a resposta

  }
}
