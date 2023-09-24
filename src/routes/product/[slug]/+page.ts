import { products } from '$const'
import { error } from '@sveltejs/kit'

export async function load({ params }: { params: { slug: string } }) {

        const product = products.find(product => product.id === params.slug)
        console.log('product', product);
        console.log('params', params);
        
        
        if(product) {
            return {product:product}
        }

        throw error(404, 'Could not find product ' + params.slug)

}
