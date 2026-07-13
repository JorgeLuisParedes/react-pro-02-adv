import type { JSX } from 'react';
import type { Props as ProdcutCardProps } from '../components/ProductCard';
import type { Props as ProductButtonsProps } from '../components/ProductButtons';
import type { Props as ProductImageProps } from '../components/ProductImage';
import type { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
	id: string;
	img?: string;
	title: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}

export interface ProductCardHOCProps {
	({ children, product }: ProdcutCardProps): JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
}
