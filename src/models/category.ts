export class Category {
    constructor(
        public id: number=0,
        public shop_name: string='',
        public category_url: string='',
        public screenshot: string='',
        public crawled_at: string='',
        public sub_category: string='',
        ) {


    }


}

export default Category;