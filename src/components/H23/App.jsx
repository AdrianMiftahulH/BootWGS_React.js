import { Provider } from "react-redux";
//applyMiddleware digunakan untuk mengatur redux-thunk
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PostList from "./PostList";

// mengambil reducers
import reducers from './reducers';

//mengatur redux-thunk
//Setiap kali kami mengirimkan suatu action, ACTION ini akan dikirim ke redux-thunk terlebih dahulu sebagai 'middleware'
//Setelah 'redux-thunk', maka ACTION akan dikirim ke semua reducer yang berbeda
const store = createStore(reducers, applyMiddleware(thunk));

const AppRedux = () => {
    return (
        <Provider store={store}>
            <div className="ui container">
                <PostList />
            </div>
        </Provider>
    )
}

export default AppRedux;