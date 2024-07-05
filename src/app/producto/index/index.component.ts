import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  productos: Producto[]=[];

  constructor(public productoService: ProductoService){}

  ngOnInit(): void{
    this.productoService.getAllProducto().subscribe((data: Producto[])=>{
      this.productos = data;
      console.log("Dataaaa ")
      console.table(this.productos);
    })  
  }

  deleteProducto(id:string){
    this.productoService.deleteProducto(id).subscribe(res => {
         this.productos = this.productos.filter(item => item.idProducto !== id);
         console.log('Post deleted successfully!');
    })
  }
}
