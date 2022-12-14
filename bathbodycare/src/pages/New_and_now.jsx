import React from "react";
import "../css/newandnow.css"
import { Link } from "react-router-dom"
import Footer from "../components/footer";

function New_and_now() {
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [limit, setLimit] = React.useState(5)
    
    // console.log(products)
    const LoadMore = (val) => {
        let changeBy = limit + val;
        setLimit(changeBy)
    }

    const getData = () => {
        return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then((res) => res.json())
    }

    React.useEffect(() => {
        fetchData();
    }, [limit])

    const fetchData = async () => {
        setLoading(true)
        try {
            const data = await getData();
            setLoading(false)
            setProducts(data)
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    return(
        <>
        <br />
        <br />
        <div className="newAndNowMain">
            <div className="newAndNowSideBr">
                <h4>NEW AND NOW</h4>
                <p>3 WIK CANDLES</p>
                <p>ALL NEW ARRIVELS</p>
                <p>AROMATHERAPY</p>
                <p>HAND SOAP'S</p>
                <p>MEN SOAP'S</p>
                <h4>TOP OFFERS</h4>
            </div>
            <div className="newAndNowItems">
                {products && products.map((ele) => (
                    <Link key={ele.id} to={`${ele.id}`} >
                        <div className="newItemBox">
                            <img src={ele.image} alt="" />
                            <div className="newItemDetails">
                                <h4>{ele.title}</h4>
                                <span>{ele.category}</span>
                                <h5>₹ {ele.price}</h5>

                                <div className="newItemBtnbx">
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        <br />
        <br />
        <center>
            <button className="LoadMore" disabled={loading} style={{visibility: limit >= 20 ? "hidden" : "visible"}} onClick={() => LoadMore(5)}>
                {loading ? "Fetching..." : "LOAD MORE"}
            </button>
        </center>
        <br />
        <br />
        <Footer />
        </>
    )
}

export default New_and_now