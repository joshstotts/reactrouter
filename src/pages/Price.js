import { useState, useEffect } from "react";

const Price = (props) => {
    const apiKey ='abf1fd8d14e7f81358d0943f79472303';

    const symbol = props.match.params.symbol;

    const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`;

    const [org, setOrg] = useState(null);

    const getOrg = async () => {
        const data = await fetch(url).then(res => res.json());
        setOrg(data);
    };

    useEffect(() => {
        getOrg();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>
                    Stock: {org.symbol}
                    <br />
                    Price: {org.price}
                </h1>
            </div>
        );
    };

    const loading = () => <h1>Loading</h1>

    return org ? loaded() : loading();
};

export default Price;

