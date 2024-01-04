import React from 'react';
import { ComponentProps } from "react";

import Button from './Button';

type CategoryFilterProp = {
    category: string,
    selected: boolean,
} & ComponentProps<"button">

function CategoryLabel({ category, selected, ...props }: CategoryFilterProp) {
    return <Button {...props} selected={selected}>
        {category}
    </Button>
}

export default CategoryLabel;