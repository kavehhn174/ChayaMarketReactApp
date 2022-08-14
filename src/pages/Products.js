import {useEffect, useState} from "react";


function Products () {
    const [products, setProduct] = useState(null)
    
    useEffect(function () {
        async function fetchProducts () {
            const response = await fetch('http://localhost:4000/api/products')
            const json = await response.json();

            if (response.ok) {

            }
        }

        fetchProducts();
    }, [])

    return (
        <div className="product">
            <h1> Home </h1>
        </div>
    )
}

export default Products;