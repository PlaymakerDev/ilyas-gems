export interface CategoryProduct {
  id: number
  name: string
  description: string
  price: number
  image_url: string
}

export interface CategorySubCategory {
  id: number
  name: string
  description: string
  product: CategoryProduct[]
}

export interface Category {
  id: number
  name: string
  description: string
  sub_category: CategorySubCategory[]
}

export interface ProductCategoryEntry {
  category: Category
}
