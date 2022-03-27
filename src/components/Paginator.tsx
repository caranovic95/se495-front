import React from 'react';

const Paginator = (props: {
    page: number,
    lastPage: number,
    pageChanged: (page: number) => void
}) => {
    const next = () => {
        if (props.page < props.lastPage) {
            props.pageChanged(props.page + 1);
        }
    }

    const prev = () => {
        if (props.page >= 1) {
            props.pageChanged(props.page - 1);
        }
    }

    const lastPage = () => {

        props.pageChanged(props.lastPage);

    }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prev}>Previous</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link" onClick={next}>Next</a>
                </li>
                <li className="page-item-last">
                    <a href="#" className="page-link" onClick={lastPage}>Last page</a>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;