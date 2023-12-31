import {useSelector, useDispatch} from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import {Fragment, useEffect} from "react";
import {sendCartData} from "./store/cart-slice";

let initial = true;
function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const notification = useSelector(state => state.ui.notification);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (initial){
            initial = false;
            return;
        }
        dispatch(sendCartData(cart));


    }, [cart, dispatch]);
    return (
        <Fragment>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}/>}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
