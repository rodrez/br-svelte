type Categories = "cars" | "oil" | "home products"

type Post = {
  title: string
  slug: string
  description: string
  pubDate: string
  category: Categories[]
  published: boolean
  heroImage: string
}

// TODO: Separate this into a separate file
type ProductCategories =
  | "office"
  | "utilities"
  | "apparell"
  | "electronics"
  | "home"
  | "other"

type Image = { src: string; altText: string }

type Product = {
  id: string
  name: string
  colors: string[]
  price: number
  description: string
  categories: ProductCategories[]
  images: Image[]
  published: boolean
}

type ProductOption = {
  id: string
  name: string
  values: string[]
}

type Money = {
  amount: string
  currencyCode: string
}

type ProductVariant = {
  id: string
  title: string
  availableForSale: boolean
  selectedOptions: {
    name: string
    value: string
  }[]
  price: Money
}

export type {
  Image,
  Post,
  Product,
  ProductCategories,
  Categories,
  ProductOption,
  ProductVariant,
}
