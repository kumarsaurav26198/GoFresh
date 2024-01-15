import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';

async function fetchProducts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  return response.json();
}

function* getProducts() {
  try {
    const data = yield fetchProducts();
    console.warn('getProducts Api is called', data);
    yield put({ type: ActionTypes.SET_PRODUCT_LIST, data });
  } catch (error) {
    console.error('Error fetching products:', error);
    // Handle the error as needed.
  }
}

function* productSaga() {
  yield takeEvery(ActionTypes.PRODUCT_LIST, getProducts);
}

export default productSaga;
