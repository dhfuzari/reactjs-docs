import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1) {
                return;
            }
            if(inStockOnly && !product.stocked) {
                return
            }

            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow 
                        key={product.category} 
                        category={product.category} 
                    />
                );
            }
            rows.push(
                <ProductRow 
                    key={product.name}
                    product={product}
                />
            );
            lastCategory = product.category;
        });

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>                    
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;