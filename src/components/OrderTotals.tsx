import { useMemo } from "react"
import { OrderItem } from "../types"
import { orderActions } from "../reducers/order-reducer"

type OrderTotalsPropos ={
    order: OrderItem[],
    tip: number,
    dispatch: React.Dispatch<orderActions>
   
}

export default function OrderTotals({order, tip, dispatch}: OrderTotalsPropos) {
    const subtotalAmount= useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order])
    const propina = useMemo(() => subtotalAmount * tip, [tip, order]) //se ejecute cuando cambie de propina o el pedido de order
    const total = useMemo(() => propina + subtotalAmount, [tip, order])

  return (
    <>
    
        <div className="space-y-3 mt-6">
            <h2 className="font-black text-white">Totales y Propina:</h2>
            <p className="text-white">SubTotal a pagar: 
                <span className="font-bold text-white"> ${subtotalAmount}</span>
            </p>

            <p className="text-white">Propina: 
                <span className="font-bold text-white"> ${propina}</span>
            </p>

            <p className="text-white">Total a pagar: 
                <span className="font-bold text-white"> ${total}</span>
            </p>
        </div>

        <button className="w-full bg-white text-black font-bold p-2 uppercase rounded-lg mt-6 disabled:opacity-10 hover:bg-slate-300 "
                disabled={total === 0} onClick={() => dispatch({type: 'place-order'})}>
            Guardar Orden
        </button>
    
    
    </>
  )
}
