import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarUsuarioPage } from './criar-usuario.page';

describe('CriarUsuarioPage', () => {
  let component: CriarUsuarioPage;
  let fixture: ComponentFixture<CriarUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
