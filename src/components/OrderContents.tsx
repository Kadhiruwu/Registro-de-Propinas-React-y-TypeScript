import { OrderItem } from "../types"
import { orderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: React.Dispatch<orderActions>
}

export default function OrderContents({order, dispatch}: OrderContentsProps) {
  return (
    <div>
    <h2 className='font-bold text-center text-white text-4xl'>Consumos</h2>
    <div className="space-y-3 mt-5">
            {order.length === 0 ? 
             <p className="text-center text-white text-2xl mb-3">Aún no has seleccionado nada</p>
             : 
             (
                <div>
                <p className="text-center text-white text-2xl mb-5">Tus productos seleccionados</p>
                {order.map(item => (
                    <div className="bg-amber-800 p-2 my-2 rounded-lg flex justify-between items-center gap-3" key={item.id}>
                      <div className="">
                      <p className="text-white text-lg font-mono">{item.name} - ${item.price}</p>
                      <p className="text-white text-sm mt-1 font-black">Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
                      </div>
                        <button className="bg-red-600 rounded-md  text-white py-1 px-2  font-bold" onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}>
                          Eliminar
                        </button>
                    </div>
                ))}
                </div>
             )} 
    </div>
    </div>
  )
}

