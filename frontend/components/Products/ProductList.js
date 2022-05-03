import React from 'react'
import Pagination from '@mui/material/Pagination';
import ProductCard from './ProductCard'
function ProductList() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-4 col-sm-12">
            <ProductCard/>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
            <ProductCard/>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
            <ProductCard/>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
            <ProductCard/>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
            <ProductCard/>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
            <ProductCard/>
            </div>
        </div>
        <div className='justify-content-center'>
          <Pagination count={10} color="primary" />
        </div>
    </div>
  )
}

export default ProductList