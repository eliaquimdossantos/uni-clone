import React from "react";

const departments = [
  {
    category: "Saúde e Bem-estar",
    sessions: ["Beleza", "Cuidados Pessoais", "Esportes e Aventura"],
  },
  {
    category: "Casa",
    sessions: ["Casa, Jardim e Limpeza", "Móveis e Decoração", "Construção"],
  },
  {
    category: "Estilo",
    sessions: ["Vestuário", "Calçados", "Bijuterias e Acessórios"],
  },
  {
    category: "Eletro",
    sessions: [
      "Eletrodomésticos",
      "Celulares, Tablets e Acessórios",
      "Câmeras e Acessórios",
    ],
  },
  {
    category: "Ipsum Lorem",
    sessions: ["Sit Amet", "Consequat", "Pellentesque"],
  },
  {
    category: "Tincidunt",
    sessions: ["Tempor", "Consequat"],
  },
];

const moreDepartments = {
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
};

export default function DepartmentsMenu() {
  return (
    <div className="bg-white shadow-lg rounded-lg grid grid-cols-4 gap-6 p-4">
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div key={department.category}>
            <h3 className="text-lg font-semibold text-primary-900 pb-1 mb-2">
              {department.category}
            </h3>
            <ul className="space-y-1">
              {department.sessions.map((session) => (
                <li key={session}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-900/80 transition"
                  >
                    {session}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="col-span-1 border-l pl-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
          {moreDepartments.category}
        </h3>
        <ul className="space-y-1">
          {moreDepartments.sessions.map((session) => (
            <li key={session}>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-900/80 transition"
              >
                {session}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
