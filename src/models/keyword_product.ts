export class KeywordProduct {
    constructor(
        public id: number = 0,
        public product_id: number = 0,
        public keyword: string = '',
        public product_name: string = '',
        public price: number = 0,
        public product_desc = '',
        public brand: string = '',
        public quantity: number = 0,
        public availability: string = '',
        public position: number = 0,
        public image: string = '',
        public crawled_at: string = '') {


    }


}

export default KeywordProduct;