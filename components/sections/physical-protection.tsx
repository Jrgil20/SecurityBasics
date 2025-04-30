"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lock, Briefcase, MapPin, FileKey } from "lucide-react"

export function PhysicalProtectionSection() {
  const { t, language } = useLanguage()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{t("physicalProtection")}</CardTitle>
        <CardDescription>{t("physicalProtectionDesc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Lock className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("lockDevices")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Briefcase className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("secureStorage")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <MapPin className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("trackingOptions")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <FileKey className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("dataEncryption")}</h3>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("lockDevices")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Physical access to your devices can lead to data theft. Always lock your devices when not in use."
                      : "El acceso físico a tus dispositivos puede llevar al robo de datos. Siempre bloquea tus dispositivos cuando no los estés usando."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Set up automatic screen locks after short periods of inactivity"
                        : "Configura bloqueos automáticos de pantalla después de cortos períodos de inactividad"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use biometric authentication when available"
                        : "Usa autenticación biométrica cuando esté disponible"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Never leave devices unattended in public places"
                        : "Nunca dejes dispositivos desatendidos en lugares públicos"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>{t("secureStorage")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Proper storage of devices and media helps prevent theft and unauthorized access."
                      : "El almacenamiento adecuado de dispositivos y medios ayuda a prevenir el robo y el acceso no autorizado."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Use lockable drawers or cabinets for devices not in use"
                        : "Usa cajones o gabinetes con llave para dispositivos que no estén en uso"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Consider using a safe for highly sensitive devices or backups"
                        : "Considera usar una caja fuerte para dispositivos o copias de seguridad altamente sensibles"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Keep backup drives in a different location from your primary device"
                        : "Mantén las unidades de respaldo en un lugar diferente al de tu dispositivo principal"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>{t("trackingOptions")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Device tracking can help recover lost or stolen devices and protect your data."
                      : "El seguimiento de dispositivos puede ayudar a recuperar dispositivos perdidos o robados y proteger tus datos."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Enable Find My Device features on all your devices"
                        : "Habilita las funciones de Encontrar mi dispositivo en todos tus dispositivos"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Set up remote wipe capabilities when available"
                        : "Configura capacidades de borrado remoto cuando estén disponibles"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Consider third-party tracking solutions for additional protection"
                        : "Considera soluciones de seguimiento de terceros para protección adicional"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>{t("dataEncryption")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Encryption makes your data unreadable to unauthorized users, even if they gain physical access to your device."
                      : "El cifrado hace que tus datos sean ilegibles para usuarios no autorizados, incluso si obtienen acceso físico a tu dispositivo."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Enable full-disk encryption on all your devices"
                        : "Habilita el cifrado completo del disco en todos tus dispositivos"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use encrypted USB drives for sensitive data"
                        : "Usa unidades USB cifradas para datos sensibles"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Encrypt backups and cloud storage"
                        : "Cifra copias de seguridad y almacenamiento en la nube"}
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
