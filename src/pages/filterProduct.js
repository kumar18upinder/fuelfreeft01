import React from 'react'

const FilterProduct = () => {
    const getProduct=localStorage.getItem('NewVehicleByBudget')?(JSON.parse(localStorage.getItem('NewVehicleByBudget'))):""
  return (
    <div>
      {
        getProduct&&getProduct.map(data=>(
            <h1>{data.productName}</h1>
        ))
      }
    </div>
  )
}

export default FilterProduct
