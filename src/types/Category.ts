import type Product from './Product';

export default interface Category {
    slug: string;
    name: string;
    subCategories?: Category[];
    products?: Product[];
}