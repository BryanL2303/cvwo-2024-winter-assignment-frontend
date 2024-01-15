import React, { useState, useEffect, useRef, useContext } from 'react';
import { ComponentProps } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

import  { SelectedCategoryContext } from '../context/SelectedCategoryContext'
import  { CategoriesContext } from '../context/CategoriesContext'
import CategoryLabel from './CategoryLabel';
import Button from './Button';

type CategoryFilterProp = ComponentProps<"div">;

function CategoryFilter({ ...props }: CategoryFilterProp) {
    const [categories] = useContext(CategoriesContext)
    const [selectedCategory, setSelectedCategory] = useContext(SelectedCategoryContext)
    const [showLeftArrow, setShowLeftArrow] = useState(true)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const [translate, setTranslate] = useState(0)
    const [TRANSLATE_AMOUNT, setTRANSLATE_AMOUNT] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current == null) return

        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target
            if (container == null) return

            setTRANSLATE_AMOUNT(container.clientWidth - 80)
            setShowLeftArrow(translate > 0)
            setShowRightArrow(translate + container.clientWidth < container.scrollWidth)
        })

        observer.observe(containerRef.current)        

        return () => {
            observer.disconnect()
        }
    }, [categories, translate])

    return <div ref={containerRef} 
        {...props} className="overflow-x-hidden select-none sticky top-20" 
    >
        {showLeftArrow && (<div className="absolute z-40">
            <Button onClick={() => {
                setTranslate(translate => {
                    if (containerRef.current == null) {
                        return translate
                    }
                    const newTranslate = translate - TRANSLATE_AMOUNT
                    if (newTranslate < 0) {
                        return 0
                    }
                    return newTranslate
                })
            }}>
                <ArrowLeft />
            </Button>
        </div>)}
        <div 
            className=" flex w-[max-content] gap-3 whitespace-nowrap touch-pan-x transition-transform overflow-hidden snap-x"
            style={{ transform: `translateX(-${translate}px)` }}
        >
            <CategoryLabel key="All" 
                category="All" 
                selected={"All" === selectedCategory.label_name} 
                onClick={() => setSelectedCategory({id: '0', label_name: "All"})}
                className="snap-start"/>
            {categories.map((category) => {
                return(
                    <CategoryLabel key={category.label_name} 
                    category={category.label_name} 
                    selected={category.label_name === selectedCategory.label_name} 
                    onClick={() => setSelectedCategory(category)}
                    className="snap-start"/>
                )
            })}
        </div>
        {showRightArrow && (<div className="absolute right-0 z-40 justify-end top-0">
            <Button onClick={() => {
                setTranslate(translate => {
                    if (containerRef.current == null) {
                        return translate
                    }
                    const newTranslate = translate + TRANSLATE_AMOUNT
                    const edge = containerRef.current.scrollWidth
                    const width = containerRef.current.clientWidth
                    if (newTranslate + width >= edge) {
                        return edge - width
                    }
                    return newTranslate
                })
            }}>
                <ArrowRight />
            </Button>
        </div>)}
    </div>
}

export default CategoryFilter;