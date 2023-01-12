import { useState } from "react";


export default function useForm(initialState){
    const [formulario, setFormulario] = useState(initialState)

    const onChangeAll = (e) => {
        const {name, value} = e.target
        setFormulario({...formulario, [name]: value})
    }
    const clean = () => {
        setFormulario(initialState)
    } 

    return [formulario, onChangeAll, clean]
}