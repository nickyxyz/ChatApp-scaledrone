import React, { useEffect } from 'react';

const Loader = ({ loading, setLoading }) => {
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [setLoading]);

    return loading ? (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    ) : null;
};

export default Loader;