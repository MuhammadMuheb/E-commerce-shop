import React from 'react'
import DynamicProductShow from './productdetail/DynamicProductShow'
import Youmightalsolike from './productdetail/Youmightalsolike'
import ProductInformation from './productdetail/productinformation'

function ProductDetailPage() {
  return (
    <>
      <main>
        <DynamicProductShow />
        <ProductInformation />
        <Youmightalsolike />
      </main>
    </>
  )
}

export default ProductDetailPage;