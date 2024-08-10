
import { orderActions } from "../reducers/order-reducer"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type PropinasProps ={
    dispatch: React.Dispatch<orderActions>
    tip: number
}

export default function Propinas({dispatch, tip}: PropinasProps) {
  return (
    <div>
        <h3 className="font-black text-white mt-5"> Propinas</h3>
        <form>
            {tipOptions.map(tipop => (
            <div key={tipop.id}>
                <input type="radio" id={tipop.id} name="tip" value={tipop.value} onChange={e => dispatch({type:'add-tip', paylod: {value:+e.target.value}})} checked={tipop.value === tip}/>
                <label className="text-white" htmlFor={tipop.id}> {tipop.label}</label>    
            </div>
            ))}

        </form>
    </div>
  )
}
