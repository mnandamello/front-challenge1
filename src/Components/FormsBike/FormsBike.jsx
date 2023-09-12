import React, { useState } from "react";
import "./FormsBike.css";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Header from "../Header/Header";

/* const Form = [
   {
     placeholder: 'Marca',
     type: 'text',
     minlength: '8',
     row: false
   },
   {
     placeholder: 'Modelo',
     type: 'text',
     minlength: '8',
     row: false
   },
   {
     placeholder: 'Valor',
     type: 'number',
     minlength: '8',
     row: true
   },
   {
     placeholder: 'Ano de Compra',
     type: 'number',
     minlength: '8',
     row: true
   },
   {
     placeholder: 'Nota Fiscal',
      type: 'number',
     minlength: '8',
     row: false
   }
 ]  */

export default function FormsBike() {
  const [check, setCheck] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <div className="header-mobile">
        <Header/>
      </div>
      <div className="body-forms">
        <div className="backgraound">
          <div className="form-fundo">
            <div className="form-cont">
              <form onSubmit={handleSubmit(onSubmit)}>
                <legend>Informações da Bike</legend>
                <input
                  id="marca"
                  type="text"
                  placeholder="Marca"
                  {...register("Marca", { required: true, maxLength: 50 })}
                />

                <input
                  id="modelo"
                  type="text"
                  placeholder="Modelo"
                  {...register("Modelo", { required: true, maxLength: 100 })}
                />

                <div className="duble">
                  <input
                    id="valor"
                    type="number"
                    placeholder="Valor"
                    {...register("Valor", { required: true })}
                  />

                  <input
                    id="ano"
                    type="number"
                    placeholder="Ano de Compra"
                    {...register("Ano de Compra", {
                      required: true,
                      min: 4,
                      maxLength: 4,
                    })}
                  />
                </div>

                <input
                  id="nf"
                  type="number"
                  placeholder="Nota Fiscal"
                  {...register("Nota Fiscal", { required: true, max: 7 })}
                />

                <div className="validB">
                  <Button />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
