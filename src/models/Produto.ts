import Categoria from "./Categoria";


interface Produto {

    id: number;
    nome: string;
    preco: number;
    foto: string;
    estoque: number;
    categoria?: Categoria| null;

}

export default Produto;