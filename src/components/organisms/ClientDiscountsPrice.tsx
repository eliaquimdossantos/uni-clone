import React, { ReactNode, useMemo } from 'react'

interface ClientDiscountProps {
  description: ReactNode;
  price: string;
  paymentWays: Array<ReactNode>;
}

export default function ClientDiscountsPrice({ description, price, paymentWays }: ClientDiscountProps) {
  const paymentsWayLength = useMemo(() => (paymentWays.length), [paymentWays])

  return (
    <div className="flex flex-col">
      <span className="text-gray-700 text-xs">
        {description}
      </span>
      <span className="text-primary-900 text-xl font-black">
        {price}
      </span>
      {
        paymentWays.map((paymentWay, index) => (
          <span key={index} className="text-xs text-gray-700 truncate">
            {
              (index >= 1 && index < paymentsWayLength)
              && <>{' '}ou{' '}</>
            }
            {paymentWay}
          </span>
        ))
      }
    </div>
  )
}
