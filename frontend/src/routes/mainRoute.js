import React from "react";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import { Cart } from '../components/Cart'

export default function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/single-product" element={<SingleProductPage />} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </>
    );
}
