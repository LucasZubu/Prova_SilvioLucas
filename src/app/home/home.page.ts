import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule ,RouterLink]})
export class HomePage implements OnInit{

  listaUsuarios: User[] = [];

  constructor(private userService: UserService, private router: Router,private http: HttpClient) {  }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  ionViewWillEnter(){
    this.buscarUsuarios();
  }

  buscarUsuarios = () => {
    this.userService.getAll().subscribe(dados => {
      this.listaUsuarios = dados;
    });
  }

  alterarUsuario(id: number){
    this.router.navigateByUrl(`/alterar-usuario/${id}`)
  }

  excluirUsuario(id: number){

  }

}
