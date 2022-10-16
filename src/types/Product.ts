export interface ProductType {
  _id: string;
  name: string;
  slug: string;
  price: number;
  discount: number;
  stock: number;
  code: string;
  categories: string[];
  mainImage: string;
  smallDescription: string;
  longDescription: string;
  active: boolean;
  createdAt: number;
  images: ProductImageType[];
  __v: number;
}

export interface ProductImageType {
  _id: string;
  url: string;
}
