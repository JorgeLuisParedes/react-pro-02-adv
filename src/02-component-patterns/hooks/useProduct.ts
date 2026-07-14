import { useEffect, useRef, useState } from 'react';
import type {
	InitialValues,
	onChangeArgs,
	Product,
} from '../interfaces/interface';

interface useProductArgs {
	initialValues?: InitialValues;
	onChange?: (args: onChangeArgs) => void;
	product: Product;
	value?: number;
}

export const useProduct = ({
	initialValues,
	onChange,
	product,
	value = 0,
}: useProductArgs) => {
	const [counter, setCounter] = useState<number>(
		initialValues?.count || value,
	);
	const isMounted = useRef(false);

	const increaseBy = (value: number) => {
		let newValue = Math.max(counter + value, 0);

		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		setCounter(newValue);

		onChange?.({ count: newValue, product });
	};

	const reset = () => {
		setCounter(initialValues?.count || value);
	};

	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [value]);

	return {
		counter,
		increaseBy,
		isMaxCountReached:
			!!initialValues?.count && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount,
		reset,
	};
};
