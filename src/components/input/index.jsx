/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Input,} from "./styles";

export const InputComponent = ({inputName, placeholder, type }) => {
  return (
    <>
      <Input placeholder={placeholder} type={type} name={inputName} />
    </>
  );
};
