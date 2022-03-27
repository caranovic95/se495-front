import "c3/c3.min.css";
import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import * as c3 from 'c3';
import {config} from "../../config";

const PriceProductChart = (props: any) => {

    useEffect(() => {
        (
            async () => {
                const chart = c3.generate({
                    bindto: '#chart',
                    data: {
                        x: 'x',
                        columns: [
                            ['x'],
                            ['Price'],
                            ['Position']

                        ],
                        type: "bar",
                        axes: {
                            Position: 'y2'
                        },
                    },
                    axis: {
                        x: {
                            type: 'category',
                            tick: {
                                format: '%Y-%m-%d',
                                centered: true,
                            },
                        },
                        y: {
                            label: { // ADD
                                text: 'Price',
                                position: 'outer-middle',
                            },
                        },
                        y2: {
                            show: true,
                            label: { // ADD
                                text: 'Position',
                                position: 'inner-middle',
                            },

                        },


                    },
                });
                setTimeout(function () {
                    chart.transform('line', 'Position');
                }, 100);
                const {data} = await axios.get(`/products/${props.match.params.product_id}`, config);
                chart.load({
                    columns: [
                        ['x', ...data.map((r: any) => r.date_col_formed)],
                        ['Price', ...data.map((r: any) => r.price)],
                        ['Position', ...data.map((r: any) => r.position)],
                    ]
                })
            }
        )()
    }, []);
    return (
        <Wrapper>
            <h2>Price chart</h2>

            <div id="chart"/>
        </Wrapper>
    )
}
export default PriceProductChart;