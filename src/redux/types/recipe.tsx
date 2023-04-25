export interface ingredient {
    quantity: number,
    unit: string,
    name: string
}

export interface recipe {
    _id: string,
    url: string,
    title: string,
    description: string,
    image: string,
    tag: string,
    servings: number,
    ingredients: ingredient[],
    instructions: string[]
}