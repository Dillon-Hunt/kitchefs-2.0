export interface ingredient {
    quantity: number,
    unit: string,
    name: string
}

export interface recipe {
    id: string,
    title: string,
    image: string,
    tag: string,
    ingredients: ingredient[],
    instructions: string[]
}