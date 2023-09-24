import type { Product } from '$lib/types'

const SITE_TITLE = 'Brand Ranks';
const SITE_DESCRIPTION = 'Brand Ranks is a website that ranks brands products based on scientific testing and research.'; 

const products: Product[] = [
        {
            id: crypto.randomUUID().toString(),
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            images: [ 'https://picsum.photos/200/300' ],
            categories: [ 'office', 'other' ],
            colors: [ 'Red', 'Blue' ],
            published: true,
        },
        {
            id: crypto.randomUUID().toString(),
            name: 'Product 2',
            description: 'Product 2 description',
            price: 200,
            images: [ 'https://picsum.photos/200/300' ],
            categories: [ 'office', 'other' ],
            colors: [ 'Red', 'Blue' ],
            published: true,
        },
        {
            id: crypto.randomUUID().toString(),
            name: 'Product 3',
            description: 'Product 3 description',
            price: 300,
            images: [ 'https://picsum.photos/200/300' ],
            categories: [ 'office', 'other' ],
            colors: [ 'Red', 'Blue' ],
            published: true,
        },
    ]

export {
    SITE_TITLE,
    SITE_DESCRIPTION,
    products,
}
