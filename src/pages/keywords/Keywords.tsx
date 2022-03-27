import React, {useEffect, useState} from "react";
import exp from "constants";
import Wrapper from "../../components/Wrapper";
import {Link} from "react-router-dom";
import axios from "axios";
import Keyword from "../../models/keyword";
import Paginator from "../../components/Paginator";
import {config} from "../../config";

const Keywords = () => {
    const [keywords, setKeywords] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`keywords_show?page=${page}`, config);
                console.log(data);
                setKeywords(data.data);
                setLastPage(data.meta.last_page);
            }
        )()
    }, [page]);
    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this keyword?')) {
            await axios.delete(`keyword/${id}`, config);

            setKeywords(keywords.filter((p: Keyword) => p.id !== id));
        }
    }
    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>CrawledAt</th>

                    </tr>
                    </thead>
                    <tbody>
                    {keywords.map((p: Keyword) => {
                        //console.log(p);
                        return (
                            <tr key={p.id}>
                                <td>{p.keyword}</td>
                                <td>{p.created_at}</td>
                                <td>
                                    <div className="btn-group mr-2">
                                        <Link to={`/keyword/edit/${p.id}`}
                                              className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        <Link to={`/keyword`}
                                              className="btn btn-sm btn-outline-secondary">Create</Link>
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
export default Keywords;