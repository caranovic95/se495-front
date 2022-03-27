import React, {useEffect, useState} from "react";
import exp from "constants";
import Wrapper from "../../components/Wrapper";
import {Link} from "react-router-dom";
import axios from "axios";
import KeywordProduct from "../../models/keyword_product";
import Paginator from "../../components/Paginator";
import {config} from "../../config";

const KeywordProducts = () => {
    const [keywordProducts, setKeywordProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`/keyword_products?page=${page}`, config);
                setKeywordProducts(data.data);
                setLastPage(data.meta.last_page);
            }
        )()
    }, [page]);
    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this keyword product?')) {
            await axios.delete(`keyword_product/${id}`, config);

            setKeywordProducts(keywordProducts.filter((p: KeywordProduct) => p.id !== id));
        }
    }
    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>Product id</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Product description</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Availability</th>
                        <th>Position</th>
                        <th>Image</th>
                        <th>Crawled At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {keywordProducts.map((p: KeywordProduct) => {
                        //console.log(p);
                        return (
                            <tr key={p.id}>
                                <td>{p.product_id}</td>
                                <td>{p.product_name}</td>
                                <td>{p.price}</td>
                                <td>{p.product_desc}</td>
                                <td>{p.brand}</td>
                                <td>{p.quantity}</td>
                                <td>{p.availability}</td>
                                <td>{p.position}</td>
                                <td>{p.image}</td>
                                <td>{p.crawled_at}</td>
                                <td>
                                    <div className="btn-group mr-2">
                                        <Link to={`/keyword_product/edit/${p.id}`}
                                              className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        <Link to={`/keyword_product/${p.product_id}`}
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
export default KeywordProducts;