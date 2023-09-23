export type Categories = 'cars' | 'oil' | 'home products' 

export type Post = {
    title: string;
    slug: string;
    description: string;
    pubDate: string;
    category: Categories[];
    published: boolean;
    heroImage: string;
}


// TODO: Separate this into a separate file
export type ProductCategories = 'office' | 'utilities'
export type Product = {
    id: string; 
    name: string;
    colors: string[];
    price: number;
    description: string;
    categories: ProductCategories[];
    images: string[];
    published: boolean;
    slug: string;
}
    
