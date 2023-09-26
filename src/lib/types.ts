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
type Color = { name: string; className: string }
type SelectedOption = { name: string; value: string }

type Product = {
  id: string
  name: string
  colors: Color[]
  price: Price
  description: string
  categories: ProductCategories[]
  selectedOptions: SelectedOption[]
  images: Image[]
  published: boolean
}

type ProductOption = {
  id: string
  name: string
  values: string[]
}

type ProductVariant = {
  id: string
  title: string
  availableForSale: boolean
  selectedOptions: {
    name: string
    value: string
  }[]
  price: Price
}

type Price = {
  amount: string
  currencyCode: string
}

type CarouselItem = {
  href: string
  src: string
  title: string
  id: string
  image: string
  price: Price
}

export type {
  CarouselItem,
  Image,
  Post,
  Product,
  ProductCategories,
  Categories,
  ProductOption,
  ProductVariant,
}
