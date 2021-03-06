import React, {Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const UseHook = () => {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [search, setSearch] = useState('');
    const [url, setUrl] = useState(
        'https://hn.algolia.com/api/v1/search?query=redux',
    );
    useEffect(() => {
        const getData = async () => {
            const result = await axios(url);
            setData(result.data);
        }
        getData();
    }, [url])
    return (
        <Fragment>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button type="button" onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>Search</button>
            <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </Fragment >
    )
}

export default UseHook;