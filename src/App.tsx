import { useReducer } from "react";
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import Propinas from "./components/Propinas";
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer";



function App() {

const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className="bg-amber-900 py-5 ">
        <h1 className=" text-center text-4xl font-black text-gray-50">Calculadora de Propinas y Consumo</h1>
      </header>
    <div className="bg-orange-100 mx-2">
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10">
        <div className="p-5 bg-amber-950 rounded-lg">
          <h2 className="text-center text-3xl font-bold text-white">Menú</h2>

          <div>
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              dispatch= {dispatch}
            />
          ))}
          </div>
            
        </div>
        <div className="p-5 bg-amber-950 rounded-lg">
        {state.order.length > 0 ?(
            <>
              <OrderContents
              order={state.order}
              dispatch = {dispatch}
              />

              <Propinas
              dispatch = {dispatch}
              tip= {state.tip}
              />  

              <OrderTotals
              order = {state.order}
              tip = {state.tip}
              dispatch = {dispatch}
              />
            </>
          ) : <p className="text-center text-white text-2xl mb-3">Aún no has seleccionado nada</p>}

        </div>

      </main>
      
      </div>
      <footer className="bg-amber-900 py-2 text-center text-white font-bold text-1xl">Derechos reservados Kadhir Avila Gallardo </footer>
    </>
  )
}

export default App
