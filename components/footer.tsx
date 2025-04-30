"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 md:py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jesus Rodolfo Gil Farias. {t("allRightsReserved")}.
            </p>
            <p className="text-sm text-muted-foreground">
              {language === "en" ? "Licensed under the MIT License." : "Licenciado bajo la Licencia MIT."}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{t("footerText")}</p>
            <p className="text-sm text-muted-foreground">Made with ❤️ by Jesus Gil | Assisted by AI (v0)</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
