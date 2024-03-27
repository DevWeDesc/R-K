import { Header } from "@/components/Header";
import { CardHome } from "./CardHome";
import { CardHomeMock } from "@/mocks/CardHomeMock";
import Cookies from "js-cookie";

export const Home = () => {
  return (
    <>
      <Header navIsVisible />
      <div className="py-16 flex flex-col gap-16 items-center h-[88vh]">
        <div className="flex flex-col gap-6">
          <p className="text-center font-semibold text-4xl">
            Explore nossos <br />
            Serviços Veterinários
          </p>
          <p className="text-center font-light text-sm max-w-5xl">
            Bem-vindo à nossa plataforma dedicada ao cuidado e bem-estar dos
            seus animais de estimação! Aqui, você encontrará uma ampla gama de
            serviços veterinários para atender às necessidades de saúde dos seus
            companheiros peludos. Explore as opções disponíveis e descubra como
            podemos ajudar a garantir uma vida longa e feliz para seus animais
            de estimação.
          </p>
        </div>
        <div
          className={`grid ${
            Cookies.get("userRole") === "admin" &&
            `grid-cols-${CardHomeMock.length}`
          }  gap-20`}
        >
          {Cookies.get("userRole") === "admin"
            ? CardHomeMock.map((card, index) => (
                <CardHome
                  key={index}
                  title={card.title}
                  description={card.description}
                  LinkButton={card.LinkButton}
                  TextButton={card.TextButton}
                  OpenModal={card.OpenModal}
                />
              ))
            : CardHomeMock.filter((card) => card.Role != "admin").map(
                (card, index) => (
                  <CardHome
                    key={index}
                    title={card.title}
                    description={card.description}
                    LinkButton={card.LinkButton}
                    TextButton={card.TextButton}
                    OpenModal={card.OpenModal}
                  />
                )
              )}
        </div>
      </div>
    </>
  );
};
