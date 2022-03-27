import axios from 'axios';
import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Wrapper from "../../components/Wrapper";
import {config} from "../../config";

const KeywordProductEdit = (props: any) => {
    const [product_name, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [product_desc, setProductDesc] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [availability, setAvailability] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`/keyword_product/${props.match.params.id}`, config);
                console.log("DATAAAAAAAAAAAAAAAAAAAAA:", data);
                setProductName(data.product_name);
                setPrice(data.price);
                setProductDesc(data.product_desc);
                setBrand(data.brand);
                setQuantity(data.quantity);
                setAvailability(data.availability);
                setPosition(data.position);
                setImage(data.image);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`product/${props.match.params.id}`, {
            product_name,
            price,
            product_desc,
            brand,
            quantity,
            availability,
            position,
            image
        }, config);

        setRedirect(true);
    }


    if (redirect) {
        return <Redirect to="/keyword_products"/>;
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Product name</label>
                    <input className="form-control"
                           defaultValue={product_name}
                           onChange={e => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input className="form-control"
                           defaultValue={price}
                           onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Product description</label>
                    <input className="form-control"
                           defaultValue={product_desc}
                           onChange={e => setProductDesc(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Brand</label>
                    <input className="form-control"
                           defaultValue={brand}
                           onChange={e => setBrand(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Quantity</label>
                    <div className="input-group">
                        <input className="form-control"
                               defaultValue={quantity}
                               onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Availability</label>
                    <div className="input-group">
                        <input className="form-control"
                               defaultValue={availability}
                               onChange={e => setAvailability(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Position</label>
                    <div className="input-group">
                        <input className="form-control"
                               defaultValue={position}
                               onChange={e => setPosition(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control"

                               defaultValue={image}
                               onChange={e => setImage(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default KeywordProductEdit;