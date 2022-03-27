import axios from 'axios';
import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Wrapper from "../../components/Wrapper";
import {config} from "../../config";

const ProductEdit = (props: any) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`product/${props.match.params.id}`, config);

                setTitle(data.title);
                setPrice(data.price);
                setBrand(data.brand);
                setQuantity(data.quantity);
                setPosition(data.position);
                setImage(data.image);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`product/${props.match.params.id}`, {
            title,
            price,
            brand,
            quantity,
            position,
            image
        }, config);

        setRedirect(true);
    }


    if (redirect) {
        return <Redirect to="/products"/>;
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input className="form-control"
                           defaultValue={title}
                           onChange={e => setTitle(e.target.value)}
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

export default ProductEdit;