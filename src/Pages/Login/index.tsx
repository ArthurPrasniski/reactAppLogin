import { useState, useCallback, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "../../components/button";
import { Input } from "../../components/form";
import { api } from "../../service/api";
import * as s from "./styles";

interface IData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const navigate = useNavigate();
  const handleSubmit =  useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("login", data)
        .then((response) => {
          toast.success("Login realizado com sucesso!");
          navigate("/dashboard");
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
        <s.Title>Sign In</s.Title>
        <form onSubmit={handleSubmit}>
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
            <Button>Login</Button>
          </s.ButtonContainer>
        </form>
        <s.LinkToRedirect href="/register">Registrar-se!</s.LinkToRedirect>
      </s.Background>
    </s.Container>
  );
};
