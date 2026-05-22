import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../models/product.model';

export class ProdutoService {

    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async criar(produto:): Promise<Array<Product>> {

        this.productRepository.create()
        const as: Promise<Array<Product>> = new Promise((resolve, reject) => {
            // código aqui
        });
        return await as;
    }
}