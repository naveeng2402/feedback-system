import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ElementType, ReactNode } from "react";

interface ButtonOwnProps<E extends ElementType>
  extends VariantProps<typeof ButtonCVA> {
  as?: E;
  children?: ReactNode;
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps<E>>;

const ButtonCVA = cva("flex items-center justify-center", {
  variants: {
    intent: {
      primary: "bg-blue-700 text-white fill-white",
      inactive:
        "bg-blue-100 border border-blue-500 fill-blue-700 text-blue-800",
    },
    size: {
      small: "rounded-lg text-xl py-1 px-2 gap-2",
      medium: "rounded-lg text-xl py-2 px-4 gap-2",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button = <E extends ElementType = "button">({
  children,
  intent,
  size,
  className,
  as,
  ...componentProps
}: ButtonProps<E>) => {
  const Component = as || "button";
  return (
    <Component
      {...componentProps}
      className={ButtonCVA({ intent, size, className })}
    >
      {children}
    </Component>
  );
};

export default Button;
