import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px] cursor-pointer';

    const variantStyles = {
      primary:
        'bg-brand text-brand-ink hover:opacity-90 active:scale-[0.98] shadow-sm',
      secondary:
        'bg-surface-2 text-text border border-border hover:border-border-strong active:scale-[0.98]',
      outline:
        'bg-transparent text-text border border-border-strong hover:bg-surface-2 active:scale-[0.98]',
      ghost: 'bg-transparent text-text hover:bg-surface-2 active:scale-[0.98]',
    };

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm rounded-sm gap-1.5',
      md: 'px-4 py-2.5 text-base rounded gap-2',
      lg: 'px-6 py-3 text-lg rounded-lg gap-2.5',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <span
            className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            role="status"
            aria-label="Loading"
          />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
