import {
    AboutUsPage,
    HomePageBDS,
    HomePage,
    ProductsPage,
    CartPage
    
} from "./containers";

export const routes = [
    {
        path: '/',
        element: <HomePage /> 
    },
    {
        path: '/home',
        element: <HomePageBDS /> 
    },
    {
        path: '/about',
        element: <AboutUsPage /> 
    },
    {
        path: '/products',
        element: <ProductsPage /> 
    },
    {
        path: '/cart',
        element: <CartPage /> 
    }
]