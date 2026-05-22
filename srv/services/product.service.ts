import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../models/product.model';

export class ProdutoService {

    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async criar(produto: Product): Promise<String | undefined> {

        return this.productRepository.create(produto);
        
    }
}