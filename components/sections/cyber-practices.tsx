"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link2, CheckSquare, Save, RefreshCw } from "lucide-react"

export function CyberPracticesSection() {
  const { t, language } = useLanguage()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{t("cyberSecurityPractices")}</CardTitle>
        <CardDescription>{t("cyberPracticesDesc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Link2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("avoidSuspiciousLinks")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <CheckSquare className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("verifyWebsites")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Save className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("regularBackups")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <RefreshCw className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("updateSoftware")}</h3>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("avoidSuspiciousLinks")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Malicious links and attachments are common ways for attackers to gain access to your devices and data."
                      : "Los enlaces y archivos adjuntos maliciosos son formas comunes que usan los atacantes para obtener acceso a tus dispositivos y datos."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Don't click on links in emails from unknown senders"
                        : "No hagas clic en enlaces de correos electrónicos de remitentes desconocidos"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Hover over links to see the actual URL before clicking"
                        : "Pasa el cursor sobre los enlaces para ver la URL real antes de hacer clic"}
                    </li>
                    <li>{language === "en" ? "Be cautious of shortened URLs" : "Ten cuidado con las URL acortadas"}</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>{t("verifyWebsites")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Before entering sensitive information on a website, verify that it's secure and legitimate."
                      : "Antes de ingresar información sensible en un sitio web, verifica que sea seguro y legítimo."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Look for HTTPS and a padlock icon in the address bar"
                        : "Busca HTTPS y un icono de candado en la barra de direcciones"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Check for spelling errors in the URL"
                        : "Verifica que no haya errores ortográficos en la URL"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Be wary of websites asking for unnecessary information"
                        : "Desconfía de sitios web que soliciten información innecesaria"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>{t("regularBackups")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Regular backups protect your data in case of device failure, theft, or ransomware attacks."
                      : "Las copias de seguridad regulares protegen tus datos en caso de fallo del dispositivo, robo o ataques de ransomware."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Follow the 3-2-1 backup rule: 3 copies, 2 different media types, 1 offsite"
                        : "Sigue la regla de respaldo 3-2-1: 3 copias, 2 tipos diferentes de medios, 1 fuera del sitio"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use cloud storage for convenience"
                        : "Usa almacenamiento en la nube por conveniencia"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Test your backups regularly to ensure they work"
                        : "Prueba tus copias de seguridad regularmente para asegurarte de que funcionan"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>{t("updateSoftware")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Keeping your software updated is crucial for security. Updates often include patches for security vulnerabilities."
                      : "Mantener tu software actualizado es crucial para la seguridad. Las actualizaciones a menudo incluyen parches para vulnerabilidades de seguridad."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Enable automatic updates when possible"
                        : "Habilita las actualizaciones automáticas cuando sea posible"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Update all software, not just your operating system"
                        : "Actualiza todo el software, no solo tu sistema operativo"}
                    </li>
                    <li>
                      {language === "en" ? "Remove software you no longer use" : "Elimina el software que ya no uses"}
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
