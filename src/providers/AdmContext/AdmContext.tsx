import { createContext, useState} from 'react';
import { IAdmContext, IAdmProviderProps, INewProduct } from './@types';
import api from '../../services/api';
import { toast } from 'react-toastify';


export const AdmContext = createContext({} as IAdmContext)

export const AdmProvider = ({children}: IAdmProviderProps)=>{
    const token = localStorage.getItem('user@TOKEN')
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)

    
    const editProduct=async (formData:INewProduct, idProduct:number) => {
        try {
            const {data} = await api.put(`/products/${idProduct}`, formData,{
                headers: {
                   Authorization: `Bearer ${token}`
                }
             })

            toast.success('Atualização realizada com sucesso')
            
        } catch (error) {
            toast.error('Não foi possível atualizar o produto')

        }finally{
            setIsEditModalOpen(false)

        }
    }

    const addNewProduct =async (formData:INewProduct) => {
        try {
            const {data} = await api.post('/products', formData,{
                headers: {
                   Authorization: `Bearer ${token}`
                }
             } )
             toast.success('Produto adicionado com sucesso')
            
        } catch (error) {
            toast.error('Não foi possível adicionar novo produto')
        }finally{
            setIsNewProductModalOpen(false)
        }
    }

    const deleteProduct =async (idProduct:number) => {
        try {
            const { data } = await api.delete(`/products/${idProduct}`, {
                headers: {
                   Authorization: `Bearer ${token}`
                }
             })
             toast.success('Produto excluido com sucesso')
        } catch (error) {
            toast.error('Não foi possível excluir produto')
        }
    }


    return( 
        <AdmContext.Provider value={{editProduct, addNewProduct, deleteProduct, isEditModalOpen, setIsEditModalOpen, isNewProductModalOpen, setIsNewProductModalOpen }}>
            {children}
        </AdmContext.Provider>
    )

}