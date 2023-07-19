import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import Advertising from '../../../components/Advertising'

export default function MyAds() {

    const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
    const [orders, setOrder] = useState([]);

    const { orders: state } = useSelector(state => state.ordersState);

    useEffect(() => {
        setOrder(state);
    }, [state])

    return (
        <div className="col-md-8">
            <div className="my-ads section">
                <h2>آگهی‌های من</h2>

                {
                    orders?.filter(order => order.user_id == cookies.userID)
                        .map(order => <Advertising order={order} />)
                }
            </div>
        </div>
    )
}
