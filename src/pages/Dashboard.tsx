import React, {useEffect, useState} from "react";
import exp from "constants";
import {Link} from "react-router-dom";
import axios from "axios";
import {config} from "../config";
import Wrapper from "../components/Wrapper";


export default function Dashboard() {
    const [data, setData] = useState([])
    const [formData, setFormData] = useState('')

    useEffect(() => {
        // Fetch games when component is mounted
    }, [])


    const startCategoryCrawler = async () => {
        await axios.post(`category`, data, {
            headers: {
                'authorization': config.headers.Authorization,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    const startProductCrawler = async () => {
        await axios.post(`product`, data, {
            headers: {
                'authorization': config.headers.Authorization,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    const startKeywordCrawler = async () => {
        await axios.post(`keyword_product`, data, {
            headers: {
                'authorization': config.headers.Authorization,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    // const handleSubmit = async (event: any) => {
    //     event.preventDefault()
    //     await startCategoryCrawler()
    //     await startKeywordCrawler()
    //     await startProductCrawler()
    //
    // }
    //
    // const handleChange = (event: any) => {
    //     console.log(event);
    //     setFormData(event.target.value)
    // }
    return (
        <Wrapper>

            {/* method="post" not needed here because `fetch` is doing the POST not the `form` */}
            {/* Also, note I changed the function name, handleSubmit */}

            <div className='is-grouped'>
                <button type="button" className="btn btn-primary" onClick={startCategoryCrawler}>Start category
                    crawler
                </button>
                <button type="button" className="btn btn-primary" onClick={startKeywordCrawler}>Start keyword crawler
                </button>
                <button type="button" className="btn btn-primary" onClick={startProductCrawler}>Start product crawler
                </button>
            </div>

        </Wrapper>

    )
}
