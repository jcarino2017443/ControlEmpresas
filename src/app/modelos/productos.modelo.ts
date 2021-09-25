export class Producto {
    constructor(
        public _id: String,
        public nombre:String,
        public proveedor:String,
        public stock: Number,
        public vendido: Number,
        public cantidad: Number
    ){

    }
}