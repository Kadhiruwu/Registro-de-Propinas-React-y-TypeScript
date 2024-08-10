import type { MenuItem } from "../types"
import { orderActions } from "../reducers/order-reducer"


type MenuItemProps ={
    item: MenuItem,
    dispatch: React.Dispatch<orderActions>
}
export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
        className=" bg-amber-800 rounded-lg hover:bg-amber-600 my-4 w-full p-3 flex gap-2 justify-between text-gray-50"
        onClick={() => dispatch({type: 'add-item', payload: {item}})}>   

        <p className="font-bold ">{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}



