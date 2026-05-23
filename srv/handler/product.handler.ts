import { ProductRepository } from '../repositories/product.repository';
import { ProdutoService } from '../services/ProductService'

export class ProductHandler {
    //private repositorio: ProductRepository
    private service: ProdutoService;

    constructor() {
        const repositorio = new ProductRepository();
        this.service = new ProdutoService(repositorio);
    }

    registerHandlers(srv: any): void {
        srv.on('CREATE','Products', async (req: any) => {
            try {
                const id = await this.service.criar(req.data);
                return { ID: id, ...req.data };
            } catch (error: any) {
                req.error(400, error.message);
            }
        });
    }
}