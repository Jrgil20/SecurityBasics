"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wifi, Shield, Globe, Home } from "lucide-react"

export function NetworkSecuritySection() {
  const { t, language } = useLanguage()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{t("networkSecurity")}</CardTitle>
        <CardDescription>{t("networkSecurityDesc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Wifi className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("useSecureWifi")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("enableFirewall")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Globe className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("useVPN")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Home className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("secureRouter")}</h3>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("useSecureWifi")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Public Wi-Fi networks can be risky. Avoid accessing sensitive information when connected to public networks."
                      : "Las redes Wi-Fi públicas pueden ser riesgosas. Evita acceder a información sensible cuando estés conectado a redes públicas."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Use WPA3 encryption for your home Wi-Fi"
                        : "Usa cifrado WPA3 para tu Wi-Fi doméstico"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Verify network names before connecting"
                        : "Verifica los nombres de las redes antes de conectarte"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use a VPN when connecting to public Wi-Fi"
                        : "Usa una VPN cuando te conectes a Wi-Fi público"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>{t("enableFirewall")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "A firewall acts as a barrier between your device and potential threats from the internet."
                      : "Un firewall actúa como una barrera entre tu dispositivo y posibles amenazas de internet."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Enable the built-in firewall on your operating system"
                        : "Activa el firewall integrado en tu sistema operativo"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Configure it to block unauthorized connections"
                        : "Configúralo para bloquear conexiones no autorizadas"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Consider a hardware firewall for additional protection"
                        : "Considera un firewall de hardware para protección adicional"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>{t("useVPN")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "A Virtual Private Network (VPN) encrypts your internet connection, providing privacy and security, especially on public networks."
                      : "Una Red Privada Virtual (VPN) cifra tu conexión a internet, proporcionando privacidad y seguridad, especialmente en redes públicas."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Choose a reputable VPN service"
                        : "Elige un servicio VPN de buena reputación"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use it whenever connecting to public Wi-Fi"
                        : "Úsala siempre que te conectes a Wi-Fi público"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Ensure your VPN has a kill switch feature"
                        : "Asegúrate de que tu VPN tenga una función de interrupción de emergencia"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>{t("secureRouter")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Your home router is the gateway to your network. Securing it is essential for protecting all connected devices."
                      : "Tu router doméstico es la puerta de entrada a tu red. Asegurarlo es esencial para proteger todos los dispositivos conectados."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Change default admin credentials"
                        : "Cambia las credenciales de administrador predeterminadas"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Update router firmware regularly"
                        : "Actualiza el firmware del router regularmente"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use a strong, unique Wi-Fi password"
                        : "Usa una contraseña Wi-Fi fuerte y única"}
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
