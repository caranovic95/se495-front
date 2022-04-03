import React, {useEffect, useState} from "react";
import exp from "constants";
import Wrapper from "../../components/Wrapper";
import {Link} from "react-router-dom";
import axios from "axios";
import Product from "../../models/product";
import Paginator from "../../components/Paginator";
import {config} from "../../config";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`product?page=${page}`, config);
                setProducts(data.data);
                setLastPage(data.meta.last_page);
            }
        )()
    }, [page]);
    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await axios.delete(`product/${id}`);

            setProducts(products.filter((p: Product) => p.id !== id));
        }
    }
    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>Product id</th>
                        <th>Category URL</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Position</th>
                        <th>Image</th>
                        <th>Crawled At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((p: Product) => {
                        //console.log(p);
                        return (
                            <tr key={p.id}>
                                <td>{p.product_id}</td>
                                <td>{p.category_url}</td>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                                <td>{p.brand}</td>
                                <td>{p.quantity}</td>
                                <td>{p.position}</td>
                                <td>{p.image}</td>
                                <td>{p.crawled_at}</td>
                                <td>
                                    <div className="btn-group mr-2">
                                        <Link to={`/product/edit/${p.id}`}
                                              className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        <Link to={`/products/${p.product_id}`}
                                              className="btn btn-sm btn-outline-secondary">Show price chart</Link>
                                        <a href="#" className="btn btn-sm btn-outline-secondary"
                                           onClick={() => del(p.id)}
                                        >Delete</a>
                                    </div>
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
export default Products;