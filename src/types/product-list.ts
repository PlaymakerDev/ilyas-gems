export interface ProductSortType {
  gems_type: string
  gems_category: string
}

export interface ProductSpecification {
  label: string
  value: string
}

export interface ProductSizeOption {
  size: string
  price_per_piece: number
  pieces_per_lot: number
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
  short_description?: string
  description?: string
  categories?: string[]
  tags?: string[]
  cut?: string
  availability?: string
  specifications?: ProductSpecification[]
  size_options?: ProductSizeOption[]
  price_per_carat?: number
  total_carat_weight?: number
}
