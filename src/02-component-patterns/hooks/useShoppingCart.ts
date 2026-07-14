import { useState } from 'react';
import type { ProductInCart, Product } from '../interfaces/interface';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({
		count,
		product,
	}: {
		count: number;
		product: Product;
	}) => {
		setShoppingCart((oldShoppingCart) => {
			const productInCart: ProductInCart = oldShoppingCart[
				product.id
			] || { ...product, count: 0 };

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}

			const { [product.id]: _toDelete, ...rest } = oldShoppingCart;
			return rest;
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
