import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const offers = [
    {
      title: "Веб-разработка",
      description:
        "Создаем современные и быстрые веб-сайты с адаптивным дизайном",
      icon: "Globe",
      price: "от 50 000 ₽",
      features: ["Адаптивный дизайн", "SEO-оптимизация", "Быстрая загрузка"],
    },
    {
      title: "Мобильные приложения",
      description:
        "Разрабатываем нативные и кроссплатформенные мобильные приложения",
      icon: "Smartphone",
      price: "от 120 000 ₽",
      features: ["iOS и Android", "Современный UI/UX", "Push-уведомления"],
    },
    {
      title: "Дизайн интерфейсов",
      description:
        "Создаем привлекательные и удобные пользовательские интерфейсы",
      icon: "Palette",
      price: "от 30 000 ₽",
      features: ["UX исследования", "Прототипирование", "Брендинг"],
    },
    {
      title: "Техническая поддержка",
      description: "Обеспечиваем стабильную работу ваших проектов 24/7",
      icon: "Shield",
      price: "от 15 000 ₽/мес",
      features: [
        "Мониторинг 24/7",
        "Быстрое реагирование",
        "Регулярные обновления",
      ],
    },
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Быстрая реализация",
      description: "Запускаем проекты в кратчайшие сроки",
    },
    {
      icon: "Award",
      title: "Высокое качество",
      description: "Используем современные технологии и лучшие практики",
    },
    {
      icon: "Users",
      title: "Команда экспертов",
      description: "Опытные разработчики и дизайнеры",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Ваши идеи — наши решения
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-open-sans opacity-90 max-w-3xl mx-auto">
            Создаем цифровые продукты, которые помогают вашему бизнесу расти и
            развиваться
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-100 font-semibold text-lg px-8 py-3"
            >
              <Icon name="Phone" size={20} />
              Обсудить проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-violet-600 font-semibold text-lg px-8 py-3"
            >
              <Icon name="Eye" size={20} />
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-montserrat">
              Наши предложения
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Выберите подходящее решение для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={offer.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-montserrat">
                    {offer.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 font-open-sans">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-6 font-montserrat">
                    {offer.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-center gap-2 text-gray-700 font-open-sans"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 font-semibold">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-montserrat">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={benefit.icon} size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600 font-open-sans">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Готовы начать проект?
          </h2>
          <p className="text-xl mb-8 font-open-sans opacity-90">
            Свяжитесь с нами сегодня и получите бесплатную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-100 font-semibold text-lg px-8 py-3"
            >
              <Icon name="MessageCircle" size={20} />
              Написать нам
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-violet-600 font-semibold text-lg px-8 py-3"
            >
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
