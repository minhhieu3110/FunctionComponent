import {useState} from 'react';
export default function FComponent(){
    let [arrPro, setArrPro] = useState([
        {id: 1, name: 'Socola', quantity: 100, price: 10000},
        {id: 2, name: 'Milk', quantity: 200, price: 15000}
    ])
    let [newArrPro, setNewArrPro] = useState({id:'', name:'', quantity:'', price:''})
    let onChange =(e)=>{
        setNewArrPro({...newArrPro,[e.target.name]:e.target.value})
    }
    let clickAdd =() =>{
        setArrPro([...arrPro,newArrPro])
        setNewArrPro({id:'',name:'',quantity:'',price:''})
    }
    return(
        <div>
            <h2>Danh sách sản phẩm</h2>
            <input onChange={(onChange)} name='id' value={newArrPro.id} placeholder={"ID"}/>
            <input onChange={(onChange)} name={'name'} value={newArrPro.name} placeholder ={'Name'}/>
            <input onChange={(onChange)} name={'quantity'} value={newArrPro.quantity} placeholder ={'Quantity'}/>
            <input onChange={(onChange)} name={'price'} value={newArrPro.price} placeholder={'Price'}/>
            <button onClick={(clickAdd)}>Thêm</button>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {arrPro.map((pro) => (
                    <tr>
                        <td>{pro.id}</td>
                        <td>{pro.name}</td>
                        <td>{pro.quantity}</td>
                        <td>{pro.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}