import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/button";
import { Input } from "../../components/form";
import { api } from "../../service/api";
import * as s from "./styles";

interface IData {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [data, setData] = useState<IData>({} as IData);
  const navigate = useNavigate()
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("register", data)
        .then((response) => {
          toast.success("Cadastro realizado com sucesso!");
          navigate('/login')
        })
        .catch((error) => {
          toast.error("Ops.. Algo deu errado!");
        });
    },
    [data]
  );

  return (
    <s.Container>
      <s.Background>
        <s.Title>Registro</s.Title>
        <form onSubmit={handleSubmit}>
          <s.InputContainer>
            <s.Subtitle>Nome</s.Subtitle>
            <Input
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </s.InputContainer>
          <s.InputContainer>
            <s.Subtitle>Sobrenome</s.Subtitle>
            <Input
              type="text"
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </s.InputContainer>
          <s.InputContainer>
            <s.Subtitle>Email</s.Subtitle>
            <Input
              type="text"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </s.InputContainer>
          <s.InputContainer>
            <s.Subtitle>Senha</s.Subtitle>
            <Input
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </s.InputContainer>
          <s.ButtonContainer>
            <Button>Registrar</Button>
          </s.ButtonContainer>
        </form>
      </s.Background>
    </s.Container>
  );
};
