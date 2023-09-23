
import type { Product } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load({ params }: { params: { slug: string } }) {
    const products: Product[] = [
        {
            id: crypto.randomUUID().toString(),
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            images: [ 'https://picsum.photos/200/300' ],
            categories: [ 'Category 1', 'Category 2' ],
            colors: [ 'Red', 'Blue' ],


        },
    ]

    return {products}
    // try {
    //     const post = await import('../../posts/' + params.slug + '.md')
    //
    //     return {
    //         content: post.default,
    //         meta: post.metadata
    //     }
    //
    // } catch (e) {
    //     throw error(404, 'Could not find post ' + params.slug)
    // }
}
