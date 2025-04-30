# Security Tools

This document explains the security tools implemented in the Security Basics project.

## Overview

Security Basics includes several interactive security tools that help users learn about security concepts and best practices:

1. **Security Checklist**: A checklist of security best practices
2. **Password Generator**: A tool for generating secure passwords
3. **Security Quiz**: A quiz to test security knowledge

## Implementation

### Security Tools Component

The security tools are implemented in the `SecurityTools` component:

\`\`\`tsx
"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SecurityChecklist } from "@/components/tools/security-checklist"
import { PasswordGenerator } from "@/components/tools/password-generator"
import { SecurityQuiz } from "@/components/tools/security-quiz"

interface SecurityToolsProps {
  activeSection: string
}

export function SecurityTools({ activeSection }: SecurityToolsProps) {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("checklist")

  return (
    <div className="container py-10">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="checklist">{t("securityChecklistTitle")}</TabsTrigger>
          <TabsTrigger value="password">{t("passwordGeneratorTitle")}</TabsTrigger>
          <TabsTrigger value="quiz">{t("securityQuizTitle")}</TabsTrigger>
        </TabsList>
        <TabsContent value="checklist">
          <Card>
            <CardHeader>
              <CardTitle>{t("securityChecklistTitle")}</CardTitle>
              <CardDescription>
                {activeSection === "deviceSecurity"
                  ? t("deviceSecurityDesc")
                  : activeSection === "networkSecurity"
                  ? t("networkSecurityDesc")
                  : activeSection === "cyberSecurityPractices"
                  ? t("cyberPracticesDesc")
                  : activeSection === "physicalProtection"
                  ? t("physicalProtectionDesc")
                  : activeSection === "educationAwareness"
                  ? t("educationDesc")
                  : t("dataProtectionDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SecurityChecklist activeSection={activeSection} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>{t("passwordGeneratorTitle")}</CardTitle>
              <CardDescription>
                {t("passwordSecurityDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PasswordGenerator />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quiz">
          <Card>
            <CardHeader>
              <CardTitle>{t("securityQuizTitle")}</CardTitle>
              <CardDescription>
                {activeSection === "deviceSecurity"
                  ? t("deviceSecurityDesc")
                  : activeSection === "networkSecurity"
                  ? t("networkSecurityDesc")
                  : activeSection === "cyberSecurityPractices"
                  ? t("cyberPracticesDesc")
                  : activeSection === "physicalProtection"
                  ? t("physicalProtectionDesc")
                  : activeSection === "educationAwareness"
                  ? t("educationDesc")
                  : t("dataProtectionDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SecurityQuiz activeSection={activeSection} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
\`\`\`

### Security Checklist

The `SecurityChecklist` component displays a list of security best practices for the active section:

\`\`\`tsx
"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

interface SecurityChecklistProps {
  activeSection: string
}

export function SecurityChecklist({ activeSection }: SecurityChecklistProps) {
  const { t, language } = useLanguage()
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const getChecklistItems = () => {
    switch (activeSection) {
      case "deviceSecurity":
        return [
          { id: "update", label: t("updateDevices") },
          { id: "passwords", label: t("securePasswords") },
          { id: "twoFactor", label: t("enableTwoFactor") },
          { id: "antivirus", label: t("installAntivirus") },
        ]
      case "networkSecurity":
        return [
          { id: "wifi", label: t("useSecureWifi") },
          { id: "firewall", label: t("enableFirewall") },
          { id: "vpn", label: t("useVPN") },
          { id: "router", label: t("secureRouter") },
        ]
      // Other sections...
      default:
        return []
    }
  }

  const items = getChecklistItems()
  const progress = items.length > 0 ? (checkedItems.length / items.length) * 100 : 0

  return (
    <div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox
              id={item.id}
              checked={checkedItems.includes(item.id)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setCheckedItems([...checkedItems, item.id])
                } else {
                  setCheckedItems(checkedItems.filter((id) => id !== item.id))
                }
              }}
            />
            <label htmlFor={item.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {item.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{t("checklistComplete")}</span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>
    </div>
  )
}
\`\`\`

### Password Generator

The `PasswordGenerator` component allows users to generate secure passwords:

\`\`\`tsx
"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Copy } from 'lucide-react'

export function PasswordGenerator() {
  const { t } = useLanguage()
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [strength, setStrength] = useState(0)

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"

    let chars = lowercase
    if (includeUppercase) chars += uppercase
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    let newPassword = ""
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    setPassword(newPassword)
    calculateStrength(newPassword)
  }

  const calculateStrength = (pass: string) => {
    let score = 0
    if (pass.length >= 8) score += 1
    if (pass.length >= 12) score += 1
    if (/[A-Z]/.test(pass)) score += 1
    if (/[0-9]/.test(pass)) score += 1
    if (/[^A-Za-z0-9]/.test(pass)) score += 1
    setStrength(score)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <div className="space-y-6">
      <div className="flex space-x-2">
        <Input value={password} readOnly className="flex-1" />
        <Button variant="outline" size="icon" onClick={copyToClipboard}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>{t("length")}</Label>
            <span>{length}</span>
          </div>
          <Slider
            value={[length]}
            min={8}
            max={32}
            step={1}
            onValueChange={(value) => setLength(value[0])}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="uppercase">{t("includeUppercase")}</Label>
          <Switch
            id="uppercase"
            checked={includeUppercase}
            onCheckedChange={setIncludeUppercase}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="numbers">{t("includeNumbers")}</Label>
          <Switch
            id="numbers"
            checked={includeNumbers}
            onCheckedChange={setIncludeNumbers}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="symbols">{t("includeSymbols")}</Label>
          <Switch
            id="symbols"
            checked={includeSymbols}
            onCheckedChange={setIncludeSymbols}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span>{t("passwordStrength")}</span>
          <span>
            {strength === 0 && t("veryWeak")}
            {strength === 1 && t("weak")}
            {strength === 2 && t("medium")}
            {strength === 3 && t("strong")}
            {strength === 4 && t("veryStrong")}
            {strength === 5 && t("excellent")}
          </span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full ${
              strength === 0
                ? "bg-red-500 w-1/5"
                : strength === 1
                ? "bg-orange-500 w-2/5"
                : strength === 2
                ? "bg-yellow-500 w-3/5"
                : strength === 3
                ? "bg-lime-500 w-4/5"
                : "bg-green-500 w-full"
            }`}
          />
        </div>
      </div>

      <Button onClick={generatePassword} className="w-full">
        {t("generatePassword")}
      </Button>
    </div>
  )
}
\`\`\`

### Security Quiz

The `SecurityQuiz` component allows users to test their security knowledge:

\`\`\`tsx
"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

interface SecurityQuizProps {
  activeSection: string
}

export function SecurityQuiz({ activeSection }: SecurityQuizProps) {
  const { t, language } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const getQuizQuestions = () => {
    // Return questions based on activeSection and language
    // ...
  }

  const questions = getQuizQuestions()

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResults(false)
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResults(true)
    }
  }

  if (!quizStarted) {
    return (
      <div className="text-center">
        <p className="mb-4">{t("quizIntro")}</p>
        <Button onClick={startQuiz}>{t("startQuiz")}</Button>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">{t("quizResults")}</h3>
        <p className="mb-4">
          {t("quizScore")}: {score} / {questions.length}
        </p>
        <Progress value={(score / questions.length) * 100} className="mb-4" />
        <Button onClick={startQuiz}>{t("retakeQuiz")}</Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4">
        <span className="text-sm font-medium">
          {t("question")} {currentQuestion + 1} / {questions.length}
        </span>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} />
      </div>

      <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>

      <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value={answer} id={`answer-${index}`} />
            <Label htmlFor={`answer-${index}`}>{answer}</Label>
          </div>
        ))}
      </RadioGroup>

      <Button
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
        className="mt-4"
      >
        {currentQuestion < questions.length - 1 ? t("nextQuestion") : t("seeResults")}
      </Button>
    </div>
  )
}
\`\`\`

## Multilingual Support

All security tools are fully translated and support both English and Spanish.

## Theme Support

Security tools adapt to the current theme, with appropriate styling for both light and dark modes.

## Next Steps

- [Internationalization](./internationalization.md)
- [Theme System](./theme-system.md)
- [Blog System](./blog-system.md)
\`\`\`

Let's create the development documentation:
