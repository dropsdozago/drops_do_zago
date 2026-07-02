export type StoreId = "shopee" | "aliexpress" | "shein" | "mercadolivre";

export interface Store {
  id: StoreId;
  name: string;
  color: string;
}

export const STORES: Store[] = [
  { id: "shopee", name: "Shopee", color: "#EE4D2D" },
  { id: "aliexpress", name: "AliExpress", color: "#E62E04" },
  { id: "shein", name: "Shein", color: "#000000" },
  { id: "mercadolivre", name: "Mercado Livre", color: "#FFE600" },
];

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  store: StoreId;
  image: string;
  category: string;
  url: string;
  hot?: boolean;
  deal?: boolean;
}

export const CATEGORIES = [
  { id: "tech", name: "Tecnologia", icon: "📱", query: "gadget" },
  { id: "casa", name: "Casa & Decoração", icon: "🏠", query: "home decor" },
  { id: "moda", name: "Moda", icon: "👕", query: "fashion clothing" },
  { id: "beleza", name: "Beleza", icon: "💄", query: "beauty cosmetics" },
  { id: "fitness", name: "Fitness", icon: "💪", query: "fitness equipment" },
  { id: "cozinha", name: "Cozinha", icon: "🍳", query: "kitchen gadget" },
];

const img = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Fone de Ouvido Bluetooth TWS Pro",
    price: 49.9,
    oldPrice: 129.9,
    store: "shopee",
    image: img("3784221"),
    category: "tech",
    url: "#",
    hot: true,
    deal: true,
  },
  {
    id: "p2",
    name: "Smartwatch Esportivo IP68",
    price: 89.9,
    oldPrice: 249.9,
    store: "aliexpress",
    image: img("437037"),
    category: "tech",
    url: "#",
    hot: true,
  },
  {
    id: "p3",
    name: "Vestido Floral Verão Feminino",
    price: 39.9,
    oldPrice: 99.9,
    store: "shein",
    image: img("7679720"),
    category: "moda",
    url: "#",
    deal: true,
  },
  {
    id: "p4",
    name: "Liquidificador Portátil USB",
    price: 59.9,
    oldPrice: 159.9,
    store: "mercadolivre",
    image: img("2284166"),
    category: "cozinha",
    url: "#",
    hot: true,
  },
  {
    id: "p5",
    name: "Luminária LED de Mesa Touch",
    price: 34.9,
    oldPrice: 89.9,
    store: "shopee",
    image: img("1112584"),
    category: "casa",
    url: "#",
    deal: true,
  },
  {
    id: "p6",
    name: "Kit Halteres Ajustáveis 20kg",
    price: 149.9,
    oldPrice: 399.9,
    store: "aliexpress",
    image: img("4164761"),
    category: "fitness",
    url: "#",
    hot: true,
  },
  {
    id: "p7",
    name: "Conjunto Skincare Coreano 5 Itens",
    price: 79.9,
    oldPrice: 199.9,
    store: "shein",
    image: img("3373736"),
    category: "beleza",
    url: "#",
    deal: true,
  },
  {
    id: "p8",
    name: "Carregador Turbo 65W GaN 3 Portas",
    price: 69.9,
    oldPrice: 179.9,
    store: "mercadolivre",
    image: img("4526473"),
    category: "tech",
    url: "#",
    hot: true,
  },
  {
    id: "p9",
    name: "Organizador de Gavetas Acrílico",
    price: 24.9,
    oldPrice: 69.9,
    store: "shopee",
    image: img("2762249"),
    category: "casa",
    url: "#",
  },
  {
    id: "p10",
    name: "Tênis Esportivo Unisex Ultra Leve",
    price: 119.9,
    oldPrice: 299.9,
    store: "aliexpress",
    image: img("2529148"),
    category: "moda",
    url: "#",
    deal: true,
  },
  {
    id: "p11",
    name: "Air Fryer 4L Digital Touch",
    price: 199.9,
    oldPrice: 499.9,
    store: "mercadolivre",
    image: img("4226805"),
    category: "cozinha",
    url: "#",
    hot: true,
    deal: true,
  },
  {
    id: "p12",
    name: "Tapete Yoga Antiderrapante 6mm",
    price: 44.9,
    oldPrice: 119.9,
    store: "shopee",
    image: img("3823039"),
    category: "fitness",
    url: "#",
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function discountPct(p: Product): number {
  return Math.round((1 - p.price / p.oldPrice) * 100);
}
