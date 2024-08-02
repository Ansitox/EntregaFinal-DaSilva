import React from "react";

import { Button, TextField } from "@mui/material";

import "./checkout.css";

export const Checkout = ({ errors, handleChange, handleSubmit, total }) => {
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Finaliza tu compra</h1>
        <p>
          El total del carrito es: <span className="total">$ {total}</span>
        </p>
        <p>Ingresa tus datos si deseas completar la compra.</p>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          fullWidth
          type="text"
          label="Nombre"
          name="firstName"
          onChange={handleChange}
          error={errors.firstName ? true : false}
          helperText={errors.firstName}
        />
        <TextField
          variant="filled"
          fullWidth
          type="text"
          label="Apellido"
          name="lastName"
          onChange={handleChange}
          error={errors.lastName ? true : false}
          helperText={errors.lastName}
        />
        <TextField
          variant="filled"
          fullWidth
          type="number"
          label="Teléfono"
          name="phoneNumber"
          onChange={handleChange}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber}
        />
        <TextField
          variant="filled"
          fullWidth
          type="text"
          label="Email"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          variant="filled"
          fullWidth
          type="text"
          label="Repite el email"
          name="repeatEmail"
          onChange={handleChange}
          error={errors.repeatEmail ? true : false}
          helperText={errors.repeatEmail}
        />
        <Button type="submit" variant="contained">
          Finalizar compra
        </Button>
      </form>
    </div>
  );
};
