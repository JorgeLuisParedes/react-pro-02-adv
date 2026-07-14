import { useEffect, useState } from 'react';
import type { onChangeArgs, Product } from '../interfaces/interface';

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
}: useProductArgs) => {
	const [counter, setCounter] = useState(value);

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

		onChange?.({ count: newValue, product });
	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return { counter, increaseBy };
};
