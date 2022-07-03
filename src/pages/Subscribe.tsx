import { useState, FormEvent } from "react";

import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { Logo } from "../assets/Logo";

interface EventInput {
  target: {
    value: string;
  };
}

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBE_MUTATION
  );

  const handleChangeName = (e: EventInput) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: EventInput) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1188px] flex items-center justify-between mt-28 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text2-xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              value={name}
              onChange={handleChangeName}
              className="bg-gray-900 rouunded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              value={email}
              onChange={handleChangeEmail}
              className="bg-gray-900 rouunded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button
              disabled={loading}
              type="submit"
              className="mt-4 bg-green-500 uppercase py-5 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}