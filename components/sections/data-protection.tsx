"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MinusCircle, Settings, ShieldCheck, Trash2 } from "lucide-react"

export function DataProtectionSection() {
  const { t, language } = useLanguage()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{t("personalDataProtection")}</CardTitle>
        <CardDescription>{t("dataProtectionDesc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <MinusCircle className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("minimizeSharing")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Settings className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("reviewPrivacySettings")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("secureAccounts")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Trash2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("deleteUnusedAccounts")}</h3>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("minimizeSharing")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "The less personal information you share online, the lower your risk of identity theft and other privacy violations."
                      : "Cuanta menos información personal compartas en línea, menor será tu riesgo de robo de identidad y otras violaciones de privacidad."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Only provide necessary information when creating accounts"
                        : "Solo proporciona información necesaria al crear cuentas"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Be cautious about sharing personal details on social media"
                        : "Ten cuidado al compartir detalles personales en redes sociales"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use privacy-focused services when possible"
                        : "Usa servicios centrados en la privacidad cuando sea posible"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>{t("reviewPrivacySettings")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Privacy settings control who can see your information and how it's used. Review them regularly."
                      : "La configuración de privacidad controla quién puede ver tu información y cómo se utiliza. Revísala regularmente."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Check privacy settings on social media accounts"
                        : "Verifica la configuración de privacidad en cuentas de redes sociales"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Review app permissions regularly"
                        : "Revisa los permisos de aplicaciones regularmente"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Opt out of data collection when possible"
                        : "Opta por no participar en la recopilación de datos cuando sea posible"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>{t("secureAccounts")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Your online accounts contain valuable personal information. Securing them is essential for privacy."
                      : "Tus cuentas en línea contienen información personal valiosa. Asegurarlas es esencial para la privacidad."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Use strong, unique passwords for each account"
                        : "Usa contraseñas fuertes y únicas para cada cuenta"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Enable two-factor authentication"
                        : "Habilita la autenticación de dos factores"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Be cautious about linking accounts together"
                        : "Ten cuidado al vincular cuentas entre sí"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>{t("deleteUnusedAccounts")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Unused accounts can be forgotten security risks. Regularly delete accounts you no longer use."
                      : "Las cuentas no utilizadas pueden ser riesgos de seguridad olvidados. Elimina regularmente las cuentas que ya no uses."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Conduct regular audits of your online accounts"
                        : "Realiza auditorías regulares de tus cuentas en línea"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Request data deletion when closing accounts"
                        : "Solicita la eliminación de datos al cerrar cuentas"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use account deletion services to help find forgotten accounts"
                        : "Usa servicios de eliminación de cuentas para ayudar a encontrar cuentas olvidadas"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}
