import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../models/product.model';
 
export class ProdutoService {

    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async criar(produto: Product ): Promise<String | undefined> {

        if (produto?.price !== undefined && produto.price < 10) {
            throw new Error("preco maior que 10")
        }
        return this.productRepository.create(produto);
        
    }
}