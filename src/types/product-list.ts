export interface ProductSortType {
  gems_type: string
  gems_category: string
}

export interface Product {
  id: number
  name: string
  price: number
  min_price: number
  max_price: number
  has_price_range: boolean
  image_url: string
  sort_type: ProductSortType
}
