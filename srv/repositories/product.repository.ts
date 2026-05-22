import { cds } from '@sap/cds';
import { Product } from '../models/product.model';

export class ProductRepository {
    private db = cds.db;

    async findAll(): Promise<Product[]> {
        try {
            const products: Array<Product> = await this.db.run(cds.SELECT.from('Products'));

            return products.map(p => {
                const produto: Product = new Product();
                produto.id = p.id
                produto.name = p.name
                produto.price = p.price

                return produto;
            });
        } catch (error: any) {
            throw new Error(`Erro ao buscar produtos: ${error.message}`);
        }
    }


    async create(produto: Product): Promise<String | undefined> {

        try {
            const result: Product = await this.db.run(
                 cds.INSERT.into('Products').entries({
                    name: produto.name,
                    description: produto.description,
                    price: produto.price,
                    category: produto.category,
                    quantity: produto.quantity,
                    image: produto.image
                })
            )
            return result.name ;
        } catch (error: any) {

            throw new Error(`Erro ao criar produto: ${error.message}`);
        }

    }
}