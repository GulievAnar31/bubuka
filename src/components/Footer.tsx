import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("footer.company.name")}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.company.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("footer.product.title")}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.product.links.features")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.product.links.pricing")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.product.links.templates")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.product.links.integrations")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.product.links.mobileApp")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.product.links.api")}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("footer.resources.title")}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.resources.links.helpCenter")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.resources.links.guide")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.resources.links.blog")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.resources.links.webinars")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.resources.links.cases")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.resources.links.community")}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("footer.contact.title")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{t("footer.contact.email")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{t("footer.contact.phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{t("footer.contact.address")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                {t("footer.bottom.rights")}
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.bottom.privacy")}
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.bottom.terms")}
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.bottom.cookies")}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">{t("footer.bottom.madeWithLove")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}