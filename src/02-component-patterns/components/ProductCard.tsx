import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import type {
	ProductContextProps,
	ProdcutCardProps,
} from '../interfaces/interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProdcutCardProps) => {
	const { counter, increaseBy } = useProduct();

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};
