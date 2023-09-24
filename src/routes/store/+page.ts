
import { products as prods} from "$const";
import type { Product } from "$lib/types";

export async function load() {
    const products: Product[] = prods

    return {products}
}
