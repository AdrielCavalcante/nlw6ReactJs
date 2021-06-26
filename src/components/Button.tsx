import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean //adicionando um opcional com &
};

export function Button({isOutlined = false, ...props}: ButtonProps) {
	return <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />;
}
