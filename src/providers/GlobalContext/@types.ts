import { TRegisterData } from "../../pages/Register/RegisterSchema";
import { TLoginData } from "../../pages/Login/LoginSchema";

export interface IGlobalProviderProps{
    children: React.ReactNode;
}

export interface IProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface ICartProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

export interface ICurrentUser{
    accessToken: string;
    user: {
        email: string;
        name: string;
        id: number;
    };
}

export interface IGlobalContext{
    ProductsList: IProduct[];
    setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
    CurrentProduct: IProduct | null;
    SuggestedProducts: IProduct[];
    CartList: IProduct[];
    renderProduct: (idProduct: number) => Promise<void>;
    addProductToCart: (idProduct: number) => Promise<void>;
    removeProductFromCart: (idProduct: number) => void;
    updateCartFromInputs: (inputValue: string, idProduct: number) => void;
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    CurrentUser: ICurrentUser | null
    loginAdm: (formData: TLoginData) => Promise<void>;
    logoutAdm: () => void;
    registerNewUser: (formData: TRegisterData) => Promise<void>;
    CartValue: number;
    setCartValue: React.Dispatch<React.SetStateAction<number>>;
}