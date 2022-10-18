import React from 'react'


export const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type='search' />
            <input type="checkBox" />
        </div>
    )
}

export const ProductTemp = (props) => {
    return (
        <div>
            <div className='product-container'>
                <h2>{props.ProductCategory}</h2>
                <h2>{props.ProductPrice}</h2>
                <h2>{props.ProductIsAvailable}</h2>
                <h2>{props.ProductName}</h2>
            </div>
        </div>
    )
}

const ProductList = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
    { category: "Development", price: "$1", stocked: true, name: "7th Web" },
    { category: "Development", price: "$1", stocked: true, name: "7th Web" },
    { category: "Development", price: "$1", stocked: true, name: "7th Web" },
    { category: "Development", price: "$1", stocked: true, name: "7th Web" }
]

function ProductsTemp(ProdItem) {
    return (
        <div className='product-' key={ProdItem.id}>
            <ProductTemp key={ProdItem.id} ProductCategory={ProdItem.category} ProductPrice={ProdItem.price} ProductIsAvailable={ProdItem.stocked} ProductName={ProdItem.name} />
        </div>
    )
}

export function Products() {
    return (
        <div style={{ overflowX: 'auto', display: 'flex', justifyContent: 'center', width: '90%', margin: '2em' }}>
                {ProductList.map(ProductsTemp)}
        </div>
    )
}
