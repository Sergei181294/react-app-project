import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAppDispatch } from "../../hooks/hooks"
import axios from "axios"
import { Loader } from "../../components"
import { Pizza } from "../../redux/cartSlice/slice"
import scss from "./fullpizza.module.scss"
import { Button } from "antd"
import { ShoppingCartOutlined, CheckOutlined } from "@ant-design/icons"
import { actions } from "../../redux/cartSlice/slice"

export const FullPizza = () => {
       const [pizza, setPizza] = useState<Pizza>()
       const [btnValue, setBtnValue] = useState("Положить в корзину")
       const { id } = useParams()
       const navigate = useNavigate()
       const dispatch = useAppDispatch()

       useEffect(() => {
              async function fetchPizza() {
                     try {
                            const { data } = await axios.get("https://63de7bcc3d94d02c0babff3a.mockapi.io/types/" + id)
                            setPizza(data)
                     }
                     catch (error) {
                            alert("Ошибка при получении пиццы")
                            navigate("/")
                     }
              }
              fetchPizza();
       }, [])

       const putInCartHandler = () => {
              setBtnValue("Уже в корзине");
       }

       if (!pizza) {
              return <Loader isLoading />
       }

       return (
              <div className={scss.container}>
                     <img className={scss.pizzaImage} src={pizza.imageUrl} />
                     <div className={scss.conteinerInfo}>
                            <h2 className={scss.title}>{pizza.title}</h2>
                            <p className={scss.price}>Цена: {pizza.price} ₽</p>
                            {btnValue === "Положить в корзину" && <Button
                                   className={scss.btnPutInCart}

                                   icon={<ShoppingCartOutlined />}
                                   onClick={putInCartHandler}
                            >
                                   {btnValue}
                            </Button>}
                            {btnValue === "Уже в корзине" &&
                                   <Link to="/cart">
                                          <Button
                                                 className={scss.btnGoToCart}
                                                 icon={<CheckOutlined />}
                                          >
                                                 {btnValue}
                                          </Button>
                                   </Link>}
                     </div>
              </div>
       )
}