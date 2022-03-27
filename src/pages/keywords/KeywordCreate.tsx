import axios from 'axios';
import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Wrapper from "../../components/Wrapper";
import {config} from "../../config";

const KeywordCreate = () => {
    const [keyword, SetKeyword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('keyword', {
            keyword,
        }, {
            headers: {
                'authorization': config.headers.Authorization,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/keywords_show"/>;
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Keyword</label>
                    <input className="form-control"
                           onChange={e => SetKeyword(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default KeywordCreate;