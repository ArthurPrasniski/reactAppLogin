import React from "react";
import * as s from './styles'

export function Home() {
  return (
    <s.Container>
      <s.LinkToRedirect href="/login">LOGIN</s.LinkToRedirect>
      <s.LinkToRedirect href="/register">Registrar-se</s.LinkToRedirect>
      </s.Container>
  );
}
