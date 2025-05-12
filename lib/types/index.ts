export type User = {
    id: number;
    email: string;
    password_hash: string;
    name?: string | null;
    is_admin: boolean;
    created_at: Date;
    orders: Order[];
    cartItems: CartItem[];
};

export type Category = {
    id: number;
    name: string;
    products: Product[];
};

export type Product = {
    id: number;
    name: string;
    description?: string | null;
    price: string; // Prisma `Decimal` is best handled as string in raw TS types
    image_url?: string | null;
    stock: number;
    category_id: number;
    created_at: Date;
    category: Category;
    orderedItems: OrderedItem[];
    cartItems: CartItem[];
    specs: Spec[];
};

export type Order = {
    id: number;
    user_id: number;
    status: string;
    total: string; // Decimal
    created_at: Date;
    updated_at: Date;
    user: User;
    orderedItems: OrderedItem[];
};

export type OrderedItem = {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price_at_order: string; // Decimal
    order: Order;
    product: Product;
};

export type CartItem = {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
    user: User;
    product: Product;
};

export type AdminSetting = {
    id: number;
    key: string;
    value: string;
};

export type Spec = {
    id: number;
    product_id: number;
    name: string;
    value: string;
    product: Product;
};
