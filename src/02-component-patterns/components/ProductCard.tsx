import { createContext, type JSX } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import type {
	ProductContextProps,
	Product,
	onChangeArgs,
	InitialValues,
	ProductCardHandlers,
} from '../interfaces/interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	product: Product;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	children,
	className,
	initialValues,
	onChange,
	product,
	style,
	value,
}: Props) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
		useProduct({
			initialValues,
			onChange,
			product,
			value,
		});

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				maxCount,
				product,
			}}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					increaseBy,
					isMaxCountReached,
					maxCount,
					product,
					reset,
				})}
			</div>
		</Provider>
	);
};
