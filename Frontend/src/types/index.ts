export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  unit: string;
  image?: string;          // URL o base64 cuando la suba Alvaro
  featured?: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories?: string[];
  color: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
