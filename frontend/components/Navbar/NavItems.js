import React from 'react'
import Link from 'next/link'
export const Products = ()=> {
  return <Link href="/products">Products</Link>
}
export const Admin = ()=> {
    return <Link href="/admin/products">Admin</Link>
}
export const Pricing = ()=> {
return <Link href="/pricing">Pricing</Link>
}
export const Dashboard = ()=> {
    return <Link href="/">Dashboard</Link>
}
export const Profile = ()=> {
    return <Link href="/">Profile</Link>
}

