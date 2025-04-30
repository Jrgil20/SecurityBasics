"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeviceSecuritySection } from "@/components/sections/device-security"
import { NetworkSecuritySection } from "@/components/sections/network-security"
import { CyberPracticesSection } from "@/components/sections/cyber-practices"
import { PhysicalProtectionSection } from "@/components/sections/physical-protection"
import { EducationSection } from "@/components/sections/education"
import { DataProtectionSection } from "@/components/sections/data-protection"
import { SecurityTools } from "@/components/security-tools"

export function SecuritySections() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("device-security")

  return (
    <section id="security-sections" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="device-security" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <div className="mb-8">
            <TabsList className="w-full h-auto flex flex-wrap justify-start gap-2">
              <TabsTrigger
                value="device-security"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {t("deviceSecurity")}
              </TabsTrigger>
              <TabsTrigger
                value="network-security"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {t("networkSecurity")}
              </TabsTrigger>
              <TabsTrigger
                value="cyber-practices"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {t("cyberSecurityPractices")}
              </TabsTrigger>
              <TabsTrigger
                value="physical-protection"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {t("physicalProtection")}
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {t("educationAwareness")}
              </TabsTrigger>
              <TabsTrigger
                value="data-protection"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {t("personalDataProtection")}
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TabsContent value="device-security" className="mt-0">
                <DeviceSecuritySection />
              </TabsContent>
              <TabsContent value="network-security" className="mt-0">
                <NetworkSecuritySection />
              </TabsContent>
              <TabsContent value="cyber-practices" className="mt-0">
                <CyberPracticesSection />
              </TabsContent>
              <TabsContent value="physical-protection" className="mt-0">
                <PhysicalProtectionSection />
              </TabsContent>
              <TabsContent value="education" className="mt-0">
                <EducationSection />
              </TabsContent>
              <TabsContent value="data-protection" className="mt-0">
                <DataProtectionSection />
              </TabsContent>
            </div>

            <div className="lg:col-span-1">
              <SecurityTools activeSection={activeTab} />
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
