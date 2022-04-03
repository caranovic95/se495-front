export class Product {
    constructor(
        public id: number=0,
        public category_url='',
        public product_id: string='',
        public title: string='',
        public price: number=0,
        public brand: string='',
        public quantity: number=0,
        public position: number=0,
        public image: string='',
        public crawled_at:string='') {


    }


}

export default Product;