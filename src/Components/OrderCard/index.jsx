import React from "react"
import { ChevronRightIcon } from '@heroicons/react/24/solid'


const OrderCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-3 border-black p-4 w-80 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">04.04.24</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
      </div>
      <p className="flex items-center gap-2">
        <span className="font-medium text-2xl">{totalPrice}</span>
        <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
      </p>
    </div>
  )
}

export default OrderCard