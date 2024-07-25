export interface IProduct {
    pid: number;
    pname: string;
    price: number;
    category: string;
    description: string;
    image: string; 
    rating?: {
        rate: number,
        count: number
    }
}
export interface INewProduct {

    pname: string;
    price: number;
    category: string;
    description: string;
    image: string; 
    rating?: {
        rate: number,
        count: number
    }
}