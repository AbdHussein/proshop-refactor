import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ProductReducer } from './Product/reducer';
import { ThemeReducer } from './Theme/reducer';
import { AuthReducer } from './Auth/reducer';
import { AdminReducer } from './Admin/reducer';
import { UserReducer } from './User/reducer';
import { CartReducer } from './Cart/reducer';
import { OrderReducer } from './Order/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const reducers = combineReducers({
  theme: ThemeReducer,
  auth: AuthReducer,
  product: ProductReducer,
  admin: AdminReducer,
  user: UserReducer,
  cart: CartReducer,
  order: OrderReducer,
});
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

export type AppDispatch = typeof Store.dispatch;
export type AppState = ReturnType<typeof reducers>;
(window as any).store = Store;
export default Store;
