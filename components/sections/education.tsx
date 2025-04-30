"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Users, AlertCircle, Bell } from "lucide-react"

export function EducationSection() {
  const { t, language } = useLanguage()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{t("educationAwareness")}</CardTitle>
        <CardDescription>{t("educationDesc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <BookOpen className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("stayInformed")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("educateFamily")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <AlertCircle className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("recognizePhishing")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Bell className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("reportIncidents")}</h3>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("stayInformed")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Staying informed about current security threats helps you protect yourself against new risks."
                      : "Mantenerse informado sobre las amenazas de seguridad actuales te ayuda a protegerte contra nuevos riesgos."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Follow reputable security blogs and news sources"
                        : "Sigue blogs y fuentes de noticias de seguridad de buena reputación"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Subscribe to security alerts from your device manufacturers"
                        : "Suscríbete a alertas de seguridad de los fabricantes de tus dispositivos"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Participate in online security communities"
                        : "Participa en comunidades de seguridad en línea"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>{t("educateFamily")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Your security is only as strong as the weakest link. Educate family members about security best practices."
                      : "Tu seguridad es tan fuerte como el eslabón más débil. Educa a los miembros de tu familia sobre las mejores prácticas de seguridad."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Teach children about online safety from an early age"
                        : "Enseña a los niños sobre seguridad en línea desde una edad temprana"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Help elderly family members recognize scams"
                        : "Ayuda a los miembros mayores de la familia a reconocer estafas"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Share security articles and tips with your household"
                        : "Comparte artículos y consejos de seguridad con tu hogar"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>{t("recognizePhishing")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Phishing attempts try to trick you into revealing sensitive information. Learning to recognize them is crucial."
                      : "Los intentos de phishing tratan de engañarte para que reveles información sensible. Aprender a reconocerlos es crucial."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Be suspicious of unexpected emails asking for personal information"
                        : "Sospecha de correos electrónicos inesperados que soliciten información personal"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Check for poor grammar and spelling in official communications"
                        : "Verifica si hay mala gramática y ortografía en comunicaciones oficiales"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Verify requests through official channels, not the contact information in the message"
                        : "Verifica las solicitudes a través de canales oficiales, no la información de contacto en el mensaje"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>{t("reportIncidents")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Reporting security incidents helps protect others and can assist in recovering from breaches."
                      : "Informar sobre incidentes de seguridad ayuda a proteger a otros y puede ayudar a recuperarse de las brechas."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Know how to report phishing attempts to your email provider"
                        : "Saber cómo informar intentos de phishing a tu proveedor de correo electrónico"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Report financial fraud to your bank immediately"
                        : "Informa inmediatamente sobre fraudes financieros a tu banco"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Share information about scams with friends and family"
                        : "Comparte información sobre estafas con amigos y familiares"}
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
