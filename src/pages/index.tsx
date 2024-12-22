import Image from "next/image";

const timeline = [
  {
    time: "9h00 BRT (31/12)",
    city: "Auckland",
    country: "Nova Zelândia",
    code: "NZ",
  },
  {
    time: "10h00 BRT (31/12)",
    city: "Sydney",
    country: "Austrália",
    code: "AU",
  },
  { time: "12h00 BRT (31/12)", city: "Tóquio", country: "Japão", code: "JP" },
  {
    time: "12h00 BRT (31/12)",
    city: "Seul",
    country: "Coreia do Sul",
    code: "KR",
  },
  {
    time: "13h00 BRT (31/12)",
    city: "Hong Kong",
    country: "China",
    code: "HK",
  },
  {
    time: "13h00 BRT (31/12)",
    city: "Singapura",
    country: "Singapura",
    code: "SG",
  },
  { time: "13h00 BRT (31/12)", city: "Taipei", country: "Taiwan", code: "TW" },
  { time: "13h00 BRT (31/12)", city: "Xangai", country: "China", code: "CN" },
  {
    time: "13h00 BRT (31/12)",
    city: "Kuala Lumpur",
    country: "Malásia",
    code: "MY",
  },
  { time: "13h00 BRT (31/12)", city: "Bali", country: "Indonésia", code: "ID" },
  {
    time: "14h00 BRT (31/12)",
    city: "Bangkok",
    country: "Tailândia",
    code: "TH",
  },
  {
    time: "14h00 BRT (31/12)",
    city: "Phuket",
    country: "Tailândia",
    code: "TH",
  },
  {
    time: "17h00 BRT (31/12)",
    city: "Dubai",
    country: "Emirados Árabes Unidos",
    code: "AE",
  },
  {
    time: "17h00 BRT (31/12)",
    city: "Seychelles",
    country: "Seychelles",
    code: "SC",
  },
  { time: "18h00 BRT (31/12)", city: "Moscou", country: "Rússia", code: "RU" },
  {
    time: "18h00 BRT (31/12)",
    city: "Istambul",
    country: "Turquia",
    code: "TR",
  },
  {
    time: "18h00 BRT (31/12)",
    city: "Zanzibar",
    country: "Tanzânia",
    code: "TZ",
  },
  {
    time: "19h00 BRT (31/12)",
    city: "Cidade do Cabo",
    country: "África do Sul",
    code: "ZA",
  },
  {
    time: "19h00 BRT (31/12)",
    city: "Tel Aviv",
    country: "Israel",
    code: "IL",
  },
  { time: "20h00 BRT (31/12)", city: "Roma", country: "Itália", code: "IT" },
  { time: "20h00 BRT (31/12)", city: "Paris", country: "França", code: "FR" },
  {
    time: "20h00 BRT (31/12)",
    city: "Berlim",
    country: "Alemanha",
    code: "DE",
  },
  { time: "20h00 BRT (31/12)", city: "Madri", country: "Espanha", code: "ES" },
  { time: "20h00 BRT (31/12)", city: "Viena", country: "Áustria", code: "AT" },
  {
    time: "20h00 BRT (31/12)",
    city: "Amsterdã",
    country: "Holanda",
    code: "NL",
  },
  {
    time: "20h00 BRT (31/12)",
    city: "Copenhague",
    country: "Dinamarca",
    code: "DK",
  },
  {
    time: "20h00 BRT (31/12)",
    city: "Bruxelas",
    country: "Bélgica",
    code: "BE",
  },
  {
    time: "20h00 BRT (31/12)",
    city: "Budapeste",
    country: "Hungria",
    code: "HU",
  },
  {
    time: "20h00 BRT (31/12)",
    city: "Praga",
    country: "República Tcheca",
    code: "CZ",
  },
  {
    time: "21h00 BRT (31/12)",
    city: "Londres",
    country: "Inglaterra",
    code: "GB",
  },
  {
    time: "21h00 BRT (31/12)",
    city: "Lisboa",
    country: "Portugal",
    code: "PT",
  },
  {
    time: "21h00 BRT (31/12)",
    city: "Edimburgo",
    country: "Escócia",
    code: "GB",
  },
  { time: "21h00 BRT (31/12)", city: "Dublin", country: "Irlanda", code: "IE" },
  {
    time: "21h00 BRT (31/12)",
    city: "Reiquejavique",
    country: "Islândia",
    code: "IS",
  },
  {
    time: "0h00 BRT (01/01)",
    city: "Rio de Janeiro",
    country: "Brasil",
    code: "BR",
  },
  {
    time: "0h00 BRT (01/01)",
    city: "São Paulo",
    country: "Brasil",
    code: "BR",
  },
  { time: "0h00 BRT (01/01)", city: "Salvador", country: "Brasil", code: "BR" },
  {
    time: "0h00 BRT (01/01)",
    city: "Fortaleza",
    country: "Brasil",
    code: "BR",
  },
  { time: "0h00 BRT (01/01)", city: "Recife", country: "Brasil", code: "BR" },
  {
    time: "0h00 BRT (01/01)",
    city: "Florianópolis",
    country: "Brasil",
    code: "BR",
  },
  {
    time: "0h00 BRT (01/01)",
    city: "Balneário Camboriú",
    country: "Brasil",
    code: "BR",
  },
  {
    time: "0h00 BRT (01/01)",
    city: "Buenos Aires",
    country: "Argentina",
    code: "AR",
  },
  {
    time: "0h00 BRT (01/01)",
    city: "Punta del Este",
    country: "Uruguai",
    code: "UY",
  },
  {
    time: "0h00 BRT (01/01)",
    city: "Valparaíso",
    country: "Chile",
    code: "CL",
  },
  { time: "0h00 BRT (01/01)", city: "Santiago", country: "Chile", code: "CL" },
  {
    time: "1h00 BRT (01/01)",
    city: "Caracas",
    country: "Venezuela",
    code: "VE",
  },
  { time: "2h00 BRT (01/01)", city: "Nova York", country: "EUA", code: "US" },
  { time: "2h00 BRT (01/01)", city: "Toronto", country: "Canadá", code: "CA" },
  { time: "2h00 BRT (01/01)", city: "Montreal", country: "Canadá", code: "CA" },
  { time: "2h00 BRT (01/01)", city: "Miami", country: "EUA", code: "US" },
  { time: "2h00 BRT (01/01)", city: "Cancún", country: "México", code: "MX" },
  { time: "2h00 BRT (01/01)", city: "Bogotá", country: "Colômbia", code: "CO" },
  {
    time: "2h00 BRT (01/01)",
    city: "Cartagena",
    country: "Colômbia",
    code: "CO",
  },
  { time: "3h00 BRT (01/01)", city: "Chicago", country: "EUA", code: "US" },
  {
    time: "3h00 BRT (01/01)",
    city: "Cidade do México",
    country: "México",
    code: "MX",
  },
  { time: "5h00 BRT (01/01)", city: "Los Angeles", country: "EUA", code: "US" },
  { time: "5h00 BRT (01/01)", city: "Las Vegas", country: "EUA", code: "US" },
  {
    time: "5h00 BRT (01/01)",
    city: "Vancouver",
    country: "Canadá",
    code: "CA",
  },
  { time: "7h00 BRT (01/01)", city: "Honolulu", country: "Havaí", code: "US" },
];

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gray-700 py-8 px-4">
      {/* <h1 className="text-center text-3xl font-bold text-black mb-8">
        Linha do Tempo - Réveillon Mundial
      </h1> */}

      {/* Container que limita a largura e desenha a linha à esquerda */}
      <div className="max-w-xl mx-auto border-l border-gray-300 pl-8 relative">
        {timeline.map((event, index) => (
          <div key={index} className="relative mb-8">
            {/* Bolinha que fica sobre a linha */}
            <div className="absolute -left-6 top-7 w-4 h-1 bg-gray-100" />

            {/* Conteúdo da timeline (bandeira + texto) */}
            <div className="flex items-center space-x-4">
              <Image
                src={`https://flagsapi.com/${event.code}/shiny/64.png`}
                alt={`Bandeira de ${event.country}`}
                width={64}
                height={64}
                className="rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-400">
                  {event.city}, {event.country}
                </h2>
                <p className="text-gray-400">{event.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
