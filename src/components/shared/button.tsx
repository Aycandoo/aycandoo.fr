import React, {
  type PropsWithChildren,
  useEffect,
  useState,
  type FC,
} from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonParams = PropsWithChildren<{
  id?: string;
  type: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}>;

const Button: FC<ButtonParams> = ({
  id,
  type = 'button',
  disabled = false,
  className,
  onClick,
  children,
}) => {
  const defaultStyles =
    'rounded-md bg-primary px-4 py-2 font-semibold drop-shadow-md hover:ring-2 hover:ring-black';
  const [classList, setClassList] = useState(defaultStyles);

  useEffect(() => {
    if (className) {
      setClassList((list) => twMerge(list, className));
    }
  }, [className]);

  return (
    <button
      id={id}
      type={type}
      className={classList}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
