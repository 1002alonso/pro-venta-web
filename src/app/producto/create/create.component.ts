import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Producto } from '../producto';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!: FormGroup;

  constructor(
    public postService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      cveProducto: new FormControl('', [Validators.required]),
      nomProducto: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
  
    this.postService.createProducto(this.form.value).subscribe((res:Producto) => {
         this.router.navigateByUrl('producto/index');
    })
  }
  
}
