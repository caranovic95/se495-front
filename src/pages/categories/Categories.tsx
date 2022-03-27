import React, {useEffect, useState} from "react";
import exp from "constants";
import Wrapper from "../../components/Wrapper";
import {Link} from "react-router-dom";
import axios from "axios";
import Category from "../../models/category";
import Paginator from "../../components/Paginator";
import {config} from "../../config";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`categories_page?page=${page}`, config);
                setCategories(data.data);
                setLastPage(data.meta.last_page);
            }
        )()
    }, [page]);
    // const del = async (id: number) => {
    //     if (window.confirm('Are you sure you want to delete this product?')) {
    //         await axios.delete(`product/${id}`);
    //
    //         setProducts(products.filter((p: Product) => p.id !== id));
    //     }
    // }
    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>Shop name</th>
                        <th>Category url</th>
                        <th>Screenshot</th>
                        <th>CrawledAt</th>
                        <th>Subcategory</th>

                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((p: Category) => {
                        //console.log(p);
                        return (
                            <tr key={p.id}>
                                <td>{p.shop_name}</td>
                                <td>{p.category_url}</td>
                                <td>{p.screenshot}</td>
                                <td>{p.crawled_at}</td>
                                <td>{p.sub_category}</td>
                                <td>
                                    {/*<div className="btn-group mr-2">*/}
                                    {/*    <Link to={`/product/edit/${p.id}`}*/}
                                    {/*          className="btn btn-sm btn-outline-secondary">Edit</Link>*/}
                                    {/*    <Link to={`/products/${p.product_id}`}*/}
                                    {/*          className="btn btn-sm btn-outline-secondary">Show price chart</Link>*/}
                                    {/*    <a href="#" className="btn btn-sm btn-outline-secondary"*/}
                                    {/*       onClick={() => del(p.id)}*/}
                                    {/*    >Delete</a>*/}
                                    {/*</div>*/}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            <Paginator page={page} lastPage={lastPage} pageChanged={setPage}/>

        </Wrapper>
    )
}
export default Categories;