import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";

export const useProductStore = create((set) => ({
    products: [],
    loading: false,

    setProducts: (products) => set({ products }),

    createProduct: async(productData) => {
        set({ loading: true });
        try {
            const res = await axios.post("api/products", productData);
            set((prevState) => ({
                products: [...prevState.products, res.data],
                loading: false,
            }));
        } catch (error) {
            toast.error(error.response.data.error);
            set({ loading: false });
        }
    },

    fetchAllProducts: async () => {
        set({ loading: true });
        try {
            const response = await axios.get("api/products")
            set({ products: response.data.products, loading: false });
        } catch (error) {
            set({ error: "Falha ao agrupar produtos", loading: false });
            toast.error(error.response.data.error || "Falha ao agrupar produtos");
        }
    },

    fetchProductsByCategory: async (category) => {
        set({ loading: true });
        try {
            const response = await axios.get(`/api/products/category/${category}`);
            set({ products: response.data.products, loading: false });
        } catch (error) {
            set({ error: "Falha ao agrupar produtos", loading: false });
            toast.error(error.response.data.error || "Falha ao agrupar produtos");
        }
    },

    deleteProduct: async (productId) => {
        set({ loading: true });
        try {
            await axios.delete(`api/products/${productId}`);
            set((prevProducts) => ({
                products: prevProducts.products.filter((product) => product._id !== productId),
                loading: false,
            }));
        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.error || "Falha ao deletar Produto")
        }
    },

    toggleFeaturedProduct: async (productId) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`api/products/${productId}`);
            //this will update the isFeatured prop of the product
            set((prevProducts) => ({
                products: prevProducts.products.map((product) => 
                    product._id === productId ? {...product, isFeatured: response.data.isFeatured } : product
                ),
                loading: false,
            }));

        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.error || "Falha ao carregar Produto")
        }
    },

    fetchFeaturedProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("api/products/featured");
			set({ products: response.data, loading: false });
		} catch (error) {
			set({ error: "Falha ao agrupar produtos", loading: false });
			console.log("Erro ao agrupar produtos em destaque:", error);
		}
	},
}));