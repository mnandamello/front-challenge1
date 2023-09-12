import React from "react";
import "./FormAcessorio.css";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";


export default function FormAcessorio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <div className="body-form-ac">
        <div className="bg">
          <div className="fundo-img">
            <div className="form-ac">
              <form onSubmit={handleSubmit(onSubmit)}>
                <legend>Informações do Acessório</legend>
                <input
                  id="marcaC"
                  type="text"
                  placeholder="Marca"
                  {...register("Marca", { required: true, maxLength: 50 })}
                />

                <input
                  id="modeloC"
                  type="text"
                  placeholder="Modelo"
                  {...register("Modelo", { required: true, maxLength: 100 })}
                />

                <div className="flex">
                  <input
                    id="tipoC"
                    type="text"
                    placeholder="Tipo"
                    {...register("Tipo", { required: true })}
                  />

                  <input
                    id="valorC"
                    type="number"
                    placeholder="Valor"
                    {...register("Valor", {
                      required: true,
                      min: 4,
                      maxLength: 10,
                    })}
                  />
                </div>

                <input
                  id="nfC"
                  type="number"
                  placeholder="Nota Fiscal"
                  {...register("Nota Fiscal", { required: true, max: 7 })}
                />

                <div className="validAc">
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
