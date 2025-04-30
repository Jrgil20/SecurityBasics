"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Smartphone, Lock, Shield, AlertTriangle } from "lucide-react"

export function DeviceSecuritySection() {
  const { t, language } = useLanguage()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{t("deviceSecurity")}</CardTitle>
        <CardDescription>{t("deviceSecurityDesc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Smartphone className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("updateDevices")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Lock className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("securePasswords")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("enableTwoFactor")}</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg text-center">
              <AlertTriangle className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-medium">{t("installAntivirus")}</h3>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("updateDevices")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Regular updates patch security vulnerabilities and protect your devices from known threats. Enable automatic updates whenever possible."
                      : "Las actualizaciones regulares corrigen vulnerabilidades de seguridad y protegen tus dispositivos contra amenazas conocidas. Habilita las actualizaciones automáticas siempre que sea posible."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Check for updates weekly if automatic updates aren't available"
                        : "Verifica actualizaciones semanalmente si las actualizaciones automáticas no están disponibles"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Update all devices: computers, phones, tablets, and smart home devices"
                        : "Actualiza todos los dispositivos: computadoras, teléfonos, tabletas y dispositivos domésticos inteligentes"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Don't postpone critical security updates"
                        : "No pospongas actualizaciones críticas de seguridad"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>{t("securePasswords")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Strong passwords are your first line of defense. Use unique passwords for each account and consider using a password manager."
                      : "Las contraseñas fuertes son tu primera línea de defensa. Usa contraseñas únicas para cada cuenta y considera usar un gestor de contraseñas."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Use a mix of letters, numbers, and special characters"
                        : "Usa una combinación de letras, números y caracteres especiales"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Aim for at least 12 characters in length"
                        : "Procura que tengan al menos 12 caracteres de longitud"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Consider using passphrases instead of single passwords"
                        : "Considera usar frases de contraseña en lugar de contraseñas simples"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>{t("enableTwoFactor")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Two-factor authentication adds an extra layer of security by requiring a second form of verification beyond your password."
                      : "La autenticación de dos factores añade una capa adicional de seguridad al requerir una segunda forma de verificación además de tu contraseña."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Enable 2FA on all accounts that offer it, especially email and financial accounts"
                        : "Activa 2FA en todas las cuentas que lo ofrezcan, especialmente correo electrónico y cuentas financieras"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Use authentication apps instead of SMS when possible"
                        : "Usa aplicaciones de autenticación en lugar de SMS cuando sea posible"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Keep backup codes in a secure location"
                        : "Guarda los códigos de respaldo en un lugar seguro"}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>{t("installAntivirus")}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    {language === "en"
                      ? "Antivirus software helps detect and remove malicious software that could compromise your device and data."
                      : "El software antivirus ayuda a detectar y eliminar software malicioso que podría comprometer tu dispositivo y datos."}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {language === "en"
                        ? "Choose reputable security software"
                        : "Elige software de seguridad de buena reputación"}
                    </li>
                    <li>
                      {language === "en"
                        ? "Keep virus definitions updated"
                        : "Mantén actualizadas las definiciones de virus"}
                    </li>
                    <li>{language === "en" ? "Run regular system scans" : "Ejecuta escaneos regulares del sistema"}</li>
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
