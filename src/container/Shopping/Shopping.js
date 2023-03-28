import React, { useEffect, useState } from 'react'
import Controls from '../../components/Controls/Controls'
import Wrapper from '../../hoc/Wrapper'
import Model from '../../components/Ui/Model/Model'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import Loading from '../../components/Ui/Loading/Loading'

const prices = {
    product1:10,
    product2:20,
    product3:30,
    product4:40,
    product5:50,    
}
const Shopping = (props) => {
    const [product, setproduct] = useState([])
    const [totalPrice, settotalPrice] = useState(0)
    const [showOrder, setshowOrder] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    axios.get("/products.json")
    .then(Response=> {
        setproduct(Response.data)
        console.log(Response.data)
    })
    }, [])

    const addProductHandler = (type)=> {
//        ------------------تعداد محصول خاص-------------------
        const prevCount = product[type]
        const updatedCount = prevCount + 1
        const updatedProduct ={
            ...product
        }
        updatedProduct[type]=updatedCount
//        -----------------مجموع قیمت محصول خاص---------------
        const AddPrice = prices[type]
        const prevPrice = totalPrice
        const newPrice = prevPrice + AddPrice
//        ---------------------update State---------------------
        setproduct(updatedProduct)
        settotalPrice(newPrice)
    }
    const deleteProductHandler = (type)=> {
//        -------------------تعداد محصول خاص-------------------
        const prevCount=product[type]
        const updateCount=prevCount > 0 ? prevCount - 1 : 0
        const updatedProduct={
            ...product
        }
        updatedProduct[type]=updateCount
//        ------------------مجموع قیمت محصول خاص---------------
        const prevPrice = totalPrice
        const subPrice = prices[type]
        const newPrice = prevPrice > 0 ? prevPrice - subPrice : 0
//        ------------------update State-------------------------
        setproduct(updatedProduct)
        settotalPrice(newPrice)
    }
    const orderShow = ()=> {
        setshowOrder(!showOrder)
    }
    const closeBackdropHandler = ()=> {
        setshowOrder(false)
    }
    const continueClickHandler = ()=> {
        setLoading(true)
        const orders = {
            product:product,
            price:totalPrice,
            customer: {
                name:"alireza",
                email:"ebadia256@gmail.com"
            }
        }
        axios.post("/orders.json",orders)
        .then((Response)=> {
            setLoading(false)
            setshowOrder(false)
            console.log(Response)
        }).catch((error)=> {
            setLoading(false)
            setshowOrder(false)
        })
    }
  return (
      <Wrapper>
        <Model show={showOrder} closeBackdropHandler={closeBackdropHandler}>
            {loading?<Loading/>:<Order product={product} closeBackdropHandler={closeBackdropHandler} totalPrices={totalPrice} continueClickHandler={continueClickHandler}/>}
        </Model>
        <Controls
        addProduct={addProductHandler}
        removeProduct={deleteProductHandler}
        totalPrices={totalPrice}
        orderShow={orderShow}
        />
    </Wrapper>
  )
}

export default Shopping