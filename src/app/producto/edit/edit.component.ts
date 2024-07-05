import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!:string;
  producto!:Producto;
  form!: FormGroup;
  
  constructor(
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productoId'];
    this.productoService.findProducto(this.id).subscribe((data: Producto)=>{
     
      this.producto = data;
     
    }); 


    this.form = new FormGroup({
      cveProducto: new FormControl('', [Validators.required]),
      nomProducto: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){

    this.productoService.updateProducto(this.id, this.form.value).subscribe((res:Producto) => {
         this.router.navigateByUrl('producto/index');
    })
  }

}
