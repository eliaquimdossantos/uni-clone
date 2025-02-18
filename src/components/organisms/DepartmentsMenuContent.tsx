import React from "react";
import NavLink from "../atoms/NavLink";
import ArrowDownIcon from "../atoms/ArrowDownIcon";
import CompaniesCarousel from "./CompaniesCarousel";

const departments = [
  {
    category: "Saúde e Bem-estar",
    sessions: ["Beleza", "Cuidados Pessoais", "Esportes e Aventura"],
    className: "row-span-1"
  },
  {
    category: "Casa",
    sessions: ["Casa, Jardim e Limpeza", "Móveis e Decoração", "Construção"],
    className: "row-span-1"
  },
  {
    category: "Estilo",
    sessions: ["Vestuário", "Calçados", "Bijuterias e Acessórios"],
    className: "row-span-1"
  },
  {
    category: "Eletro",
    sessions: [
      "Eletrodomésticos",
      "Celulares, Tablets e Acessórios",
      "Câmeras e Acessórios",
    ],
    className: "row-span-1"
  },
  {
    category: "Ipsum Lorem",
    sessions: ["Sit Amet", "Consequat", "Pellentesque"],
    className: "row-span-1"
  },
  {
    category: "Tincidunt",
    sessions: ["Tempor", "Consequat"],
    className: "row-span-1"
  },
  {
    category: "Mais Departamentos",
    sessions: [
      "Petshop",
      "Produtos Regionais",
      "Brinquedos e Jogos",
      "Livros",
      "Música e Hobbies",
      "Bebês",
      "Alimentos e Bebidas",
      "Agro e Indústria",
    ],
    className: "col-span-1 row-span-2"
  }
];

export default function DepartmentsMenu() {
  return (
    <div className="">
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-col lg:grid-rows-2 p-6 gap-8">
        {departments.map((department) => (
          <div className={department.className} key={department.category}>
            <h3 className="text-lg font-semibold text-primary-900 pb-1 mb-2">
              {department.category}
            </h3>
            <ul className="space-y-1 pl-3">
              {department.sessions.map((session) => (
                <li key={session}>
                  <a
                    href={`#${session.toLowerCase().replaceAll(' ', '-')}`}
                    className="text-gray-600 hover:text-primary-900/80 transition"
                  >
                    {session}
                  </a>
                </li>
              ))}
            </ul>
            <NavLink>
              <span className="text-sm mt-3 inline-flex items-center gap-1">Ver mais <ArrowDownIcon /></span>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="bg-primary-200 pt-8">
        <CompaniesCarousel />
      </div>
    </div>
  );
}
