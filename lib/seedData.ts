import { Category, User, Product, Order, OrderedItem, CartItem, Spec } from "./types"
import bcrypt from 'bcrypt';

const Users:User[] = [
    {id: 1, email:"noir@bunnymail.nk", name:"noir", password_hash:`${bcrypt.hash("123123213",10)}`, is_admin:false, created_at: null, }
]