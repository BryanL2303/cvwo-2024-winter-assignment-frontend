import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react";

const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"]
        },
        size: {
            default: ["rounded", "p-2"],
        },
        selected: {
            true: ["bg-secondary-dark", "text-white", "hover:bg-secondary-dark-hover"],
            false: [],
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        selected: false,
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

function Button({ variant, size, selected, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonStyles({variant, size, selected})} />
    )
}

export default Button;