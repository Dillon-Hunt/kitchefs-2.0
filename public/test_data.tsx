let ingredients = [
    {
        name: "unsalted butter",
        type: "butter-oil",
        image_url: "../public/images/unsalted-butter.png",
    },
    {
        name: "olive oil",
        type: "butter-oil",
        image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmorejuicepress.com%2Fwp-content%2Fthemes%2FMoreJuicePress%2Fimg%2Folive-oil.png&f=1&nofb=1&ipt=a4ea4a2a4de22aad6761671c987488d3c060abef5cfbb40fb148c41660eecd49&ipo=images",
    }
]

let substitutions = [
    {
        type: "butter-oil",
        equivalent: [
            {
                ingredient_id: 0,
                amount: [
                    {
                        quantity: 225,
                        unit: "g"
                    },
                    {
                        quantity: 0.75,
                        unit: "cup"
                    }
                ]
            },
            {
                ingredient_id: 1,
                amount: [
                    {
                        quantity: 180,
                        unit: "ml"
                    }
                ]
            }
        ]
    }
]

let recipes = [
    {
        title: "Chocolate Chip Cookies",
        subtitle: "A classic recipe for chocolate chip cookies",
        ingredients: [
            {
                ingredient_id: 0,
                attributes: ["softened"],
                amount: [
                    {
                        quantity: 180,
                        unit: "g"
                    }
                ]
            },
            {
                name: "brown sugar",
                type: "sugar",
                attributes: [],
                amount: [
                    {
                        quantity: 0.75,
                        unit: "cup"
                    },
                    {
                        quantity: 135,
                        unit: "g"
                    }
                ]
            },
            {
                name: "vanilla extract",
                type: "vanilla",
                attributes: [],
                amount: [
                    {
                        quantity: 1,
                        unit: "tsp"
                    }
                ]
            },
            {
                name: "egg",
                type: "egg",
                attributes: [],
                amount: [
                    {
                        quantity: 1,
                        unit: null
                    }
                ]
            },
            {
                name: "Plain Flour",
                type: "flour",
                attributes: ["sifted"],
                amount: [
                    {
                        quantity: 2,
                        unit: "cup"
                    },
                    {
                        quantity: 300,
                        unit: "g"
                    }
                ]
            },
            {
                name: "baking powder",
                type: "baking powder",
                attributes: ["sifted"],
                amount: [
                    {
                        quantity: 1,
                        unit: "tsp"
                    }
                ]
            },
            {
                name: "dark chocolate",
                type: "chocolate",
                attributes: ["chopped"],
                amount: [
                    {
                        quantity: 150,
                        unit: "g"
                    }
                ]
            }

        ],
        instructions: [
            {
                text: "Preheat oven to {data_1}. Place the {data_2}, {data_3} and {data_4} in the bowl of an electric mixer and beat until pale and creamy. Gradually add the {data_5} and beat well. Add the {data_6} and {data_7} and beat until a smooth dough forms. Fold through the {data_8}.",
                data: {
                    data_1: {
                        type: "temperature",
                        value: 180,
                        unit: "°C"
                    },
                    data_2: {
                        type: "ingredient",
                        index: 0
                    },
                    data_3: {
                        type: "ingredient",
                        index: 1
                    },
                    data_4: {
                        type: "ingredient",
                        index: 2
                    },
                    data_5: {
                        type: "ingredient",
                        index: 3
                    },
                    data_6: {
                        type: "ingredient",
                        index: 4
                    },
                    data_7: {
                        type: "ingredient",
                        index: 5
                    },
                    data_8: {
                        type: "ingredient",
                        index: 6
                    }
                }
            },
            {
                text: "Roll 2 tablespoonfuls of the mixture into balls, place on baking trays lined with non-stick baking paper and press to flatten. Bake for {data_1} or until golden. Allow to cool on the trays.",
                data: {
                    data_1: {
                        type: "time",
                        value: 12,
                        unit: "minute"
                    }
                }
            }
        ]
    }
]

export { ingredients, substitutions, recipes }