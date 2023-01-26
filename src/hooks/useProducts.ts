import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";

interface FetchProductsParams {
  pageNumber: number;
  pageRows: number;
  pageSortBy: string;
  pageOrderBy: string;
}

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  updatedAt: string;
}

interface Product {
  products: ProductProps[];
}

export async function getProducts({
  pageNumber,
  pageRows,
  pageSortBy,
  pageOrderBy,
}: FetchProductsParams) {
  const { data } = await api.get<Product>(
    `/products?page=${pageNumber}&rows=${pageRows}&sortBy=${pageSortBy}&orderBy=${pageOrderBy}`
  );

  return data.products;
}

export function useProducts({
  pageNumber,
  pageRows,
  pageSortBy,
  pageOrderBy,
}: FetchProductsParams) {
  return useQuery(
    ["products"],
    () =>
      getProducts({
        pageNumber,
        pageRows,
        pageSortBy,
        pageOrderBy,
      }),
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    }
  );
}
