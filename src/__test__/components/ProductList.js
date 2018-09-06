import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedProductList from '../../components/ProductList';

const mockStore = configureStore();

if('renders no products when store is empty', () => {
    const store = mockStore({ products: []});

    const wrapper = render(<ConnectedProductList store={store}/>);
    expect(wrapper.find(".product").length.toBe(0))
});