import axios from 'axios';
import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Wrapper from "../../components/Wrapper";
import {config} from "../../config";

const ProductEdit = (props: any) => {
    const [keyword, setKeyword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`keyword/${props.match.params.id}`, config);
                setKeyword(data.keyword);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`keyword/${props.match.params.id}`, {
            keyword
        });

        setRedirect(true);
    }


    if (redirect) {
        return <Redirect to="/keywpord"/>;
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Keyword</label>
                    <input className="form-control"
                           defaultValue={keyword}
                           onChange={e => setKeyword(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductEdit;