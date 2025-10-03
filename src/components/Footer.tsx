import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const topLinks = [
    { key: "footer.links.refund", label: "Возврат билетов", href: "https://onvibe.me/refund" },
    { key: "footer.links.help", label: "Помощь", href: "https://onvibe.me/help" },
    { key: "footer.links.faq", label: "Ответы на вопросы", href: "https://onvibe.me/faq" },
    { key: "footer.links.public", label: "Публичный договор", href: "https://onvibe.me/offer" },
    { key: "footer.links.terms", label: "Условия использования", href: "https://onvibe.me/terms" },
    { key: "footer.links.privacy", label: "Политика конфиденциальности", href: "https://onvibe.me/privacy" },
  ];

  return (
    <footer className="bg-[#F5F7FA] text-[#0F1D2B]" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Лого */}
        <div className="mb-6">
          <div className="text-2xl font-bold">
            <img src="https://onvibe.me/onvibe-logo.svg" alt="" />
          </div>
        </div>

        {/* Верхние ссылки */}
        <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
          {topLinks.map(({ key, label, href }) => (
            <a
              key={key}
              href={href}
              className="text-[16px] font-normal text-[#0F1D2B] hover:opacity-80"
            >
              {t(key, { defaultValue: label })}
            </a>
          ))}
        </nav>

        {/* Контакты */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <div className="text-sm text-[#6A7A90] mb-1">
              Email поддержки
            </div>
            <div className="text-[17px] font-medium">
              support@onvibe.me
            </div>
          </div>

          <div>
            <div className="text-sm text-[#6A7A90] mb-1">
              Телефон поддержки
            </div>
            <div className="text-[17px] font-medium">
              +7 (771) 001-32-32
            </div>
          </div>

          <div>
            <div className="text-sm text-[#6A7A90] mb-1">
              Адрес компании
            </div>
            <div className="text-[17px] font-medium">
              РК, г. Алматы, Алмалинский р-н, пр. Абылай хана 58
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <hr className="border-t border-[#E1E7EF] mb-6" />

        {/* Юр. строка */}
        <div className="text-[#6A7A90] text-sm">
          {t("footer.company.legal", { defaultValue: 'ТОО «Axio» 050004' })}
        </div>
      </div>
    </footer >
  );
}