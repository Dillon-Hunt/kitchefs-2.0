export interface ingredient {
    quantity: number,
    unit: string,
    name: string
}

export interface recipe {
    _id?: string,
    url: string,
    title: string,
    description: string,
    image: string,
    tags: string[],
    category: string,
    cook_time: number,
    prep_time: number,
    servings: number,
    ingredients: ingredient[],
    instructions: string[]
}