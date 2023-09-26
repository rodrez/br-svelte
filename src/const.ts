import type { Product } from "$lib/types"

const SITE_TITLE = "Brand Ranks"
const SITE_DESCRIPTION =
  "Brand Ranks is a website that ranks brands products based on scientific testing and research."

const products: Product[] = [
  {
    id: crypto.randomUUID().toString(),
    name: "Product 1",
    description: "Product 1 description",
    price: { amount: "$100.00", currencyCode: "USD" },
    images: [{ src: "https://picsum.photos/200/300", altText: "Product 1" }],
    categories: ["office", "other"],
    selectedOptions: [
      {
        name: "Size",
        value: "Small",
      },
      {
        name: "Color",
        value: "Red",
      },
    ],
    colors: [
      { name: "Red", className: "bg-red-500" },
      { name: "Blue", className: "bg-blue-500" },
      { name: "Black", className: "bg-black" },
      { name: "Gold", className: "bg-yellow-500" },
    ],
    published: true,
  },
  {
    id: crypto.randomUUID().toString(),
    name: "Product 2",
    description: "Product 2 description",
    price: { amount: "$200.00", currencyCode: "USD" },
    images: [{ src: "https://picsum.photos/200/300", altText: "Product 2" }],
    categories: ["office", "other"],
    colors: [{ name: "Red", className: "bg-red-500" }],
    published: true,
    selectedOptions: [
      {
        name: "Size",
        value: "Small",
      },
      {
        name: "Color",
        value: "Red",
      },
    ],
  },
  {
    id: crypto.randomUUID().toString(),
    name: "Product 3",
    description: "Product 3 description",
    price: { amount: "$300.00", currencyCode: "USD" },
    images: [{ src: "https://picsum.photos/200/300", altText: "Product 3" }],
    categories: ["office", "other"],
    colors: [{ name: "Red", className: "bg-red-500" }],
    published: true,
    selectedOptions: [
      {
        name: "Size",
        value: "Small",
      },
      {
        name: "Color",
        value: "Red",
      },
    ],
  },
]

export { SITE_TITLE, SITE_DESCRIPTION, products }
