import { Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PageNotFound from "./Pages/404";
import ProductsProvider from "./Context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
