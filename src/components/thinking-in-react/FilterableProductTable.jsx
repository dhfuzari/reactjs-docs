import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';       

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        
        this.state ={
            filterText: '',
            inStockOnly: false
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(_filterText) {
        this.setState({
            filterText: _filterText 
        });
    }

    handleInStockChange(_inStockOnly) {
        this.setState({
            inStockOnly: _inStockOnly
        });
    }

    render() {        
        return(
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}                    
                />
                <ProductTable 
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}                
                />   
            </div>
        );
    }
}

export default FilterableProductTable;