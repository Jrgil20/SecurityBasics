"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Copy, RefreshCw } from "lucide-react"

export function SecurityTools({ activeSection }: { activeSection: string }) {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("checklist")

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>
          {activeTab === "checklist" && t("securityChecklistTitle")}
          {activeTab === "password" && t("passwordGeneratorTitle")}
          {activeTab === "quiz" && t("securityQuizTitle")}
        </CardTitle>
        <CardDescription>
          {activeTab === "checklist" &&
            (language === "en" ? "Track your security practices" : "Haz seguimiento de tus prácticas de seguridad")}
          {activeTab === "password" &&
            (language === "en" ? "Create strong, unique passwords" : "Crea contraseñas fuertes y únicas")}
          {activeTab === "quiz" &&
            (language === "en" ? "Test your security knowledge" : "Pon a prueba tus conocimientos de seguridad")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="checklist" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="checklist">{language === "en" ? "Checklist" : "Lista"}</TabsTrigger>
            <TabsTrigger value="password">{language === "en" ? "Password" : "Contraseña"}</TabsTrigger>
            <TabsTrigger value="quiz">{language === "en" ? "Quiz" : "Cuestionario"}</TabsTrigger>
          </TabsList>

          <TabsContent value="checklist" className="mt-4">
            <SecurityChecklist activeSection={activeSection} />
          </TabsContent>

          <TabsContent value="password" className="mt-4">
            <PasswordGenerator />
          </TabsContent>

          <TabsContent value="quiz" className="mt-4">
            <SecurityQuiz activeSection={activeSection} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function SecurityChecklist({ activeSection }: { activeSection: string }) {
  const { t, language } = useLanguage()
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const getChecklistItems = () => {
    switch (activeSection) {
      case "device-security":
        return [
          {
            id: "update",
            label: language === "en" ? "I keep my devices updated" : "Mantengo mis dispositivos actualizados",
          },
          {
            id: "password",
            label: language === "en" ? "I use strong, unique passwords" : "Uso contraseñas fuertes y únicas",
          },
          {
            id: "2fa",
            label:
              language === "en"
                ? "I have enabled two-factor authentication"
                : "He habilitado la autenticación de dos factores",
          },
          {
            id: "antivirus",
            label: language === "en" ? "I have installed antivirus software" : "He instalado software antivirus",
          },
        ]
      case "network-security":
        return [
          { id: "wifi", label: language === "en" ? "I use secure Wi-Fi networks" : "Uso redes Wi-Fi seguras" },
          { id: "firewall", label: language === "en" ? "I have enabled my firewall" : "He habilitado mi firewall" },
          {
            id: "vpn",
            label: language === "en" ? "I use a VPN for public networks" : "Uso una VPN para redes públicas",
          },
          {
            id: "router",
            label: language === "en" ? "I have secured my home router" : "He asegurado mi router doméstico",
          },
        ]
      case "cyber-practices":
        return [
          {
            id: "links",
            label:
              language === "en"
                ? "I avoid suspicious links and attachments"
                : "Evito enlaces y archivos adjuntos sospechosos",
          },
          {
            id: "websites",
            label:
              language === "en"
                ? "I verify website security before sharing information"
                : "Verifico la seguridad del sitio web antes de compartir información",
          },
          {
            id: "backups",
            label: language === "en" ? "I perform regular backups" : "Realizo copias de seguridad regularmente",
          },
          {
            id: "software",
            label: language === "en" ? "I keep my software updated" : "Mantengo mi software actualizado",
          },
        ]
      case "physical-protection":
        return [
          {
            id: "lock",
            label:
              language === "en" ? "I lock my devices when not in use" : "Bloqueo mis dispositivos cuando no los uso",
          },
          {
            id: "storage",
            label: language === "en" ? "I store my devices securely" : "Almaceno mis dispositivos de forma segura",
          },
          {
            id: "tracking",
            label: language === "en" ? "I have enabled tracking options" : "He habilitado opciones de seguimiento",
          },
          { id: "encryption", label: language === "en" ? "I encrypt sensitive data" : "Cifro datos sensibles" },
        ]
      case "education":
        return [
          {
            id: "informed",
            label:
              language === "en"
                ? "I stay informed about current threats"
                : "Me mantengo informado sobre amenazas actuales",
          },
          {
            id: "family",
            label: language === "en" ? "I educate my family members" : "Educo a los miembros de mi familia",
          },
          {
            id: "phishing",
            label: language === "en" ? "I can recognize phishing attempts" : "Puedo reconocer intentos de phishing",
          },
          {
            id: "report",
            label: language === "en" ? "I report security incidents" : "Informo sobre incidentes de seguridad",
          },
        ]
      case "data-protection":
        return [
          {
            id: "sharing",
            label:
              language === "en" ? "I minimize sharing personal information" : "Minimizo compartir información personal",
          },
          {
            id: "privacy",
            label:
              language === "en"
                ? "I review privacy settings regularly"
                : "Reviso la configuración de privacidad regularmente",
          },
          { id: "accounts", label: language === "en" ? "I secure my online accounts" : "Aseguro mis cuentas en línea" },
          { id: "delete", label: language === "en" ? "I delete unused accounts" : "Elimino cuentas no utilizadas" },
        ]
      default:
        return [
          {
            id: "update",
            label: language === "en" ? "I keep my devices updated" : "Mantengo mis dispositivos actualizados",
          },
          {
            id: "password",
            label: language === "en" ? "I use strong, unique passwords" : "Uso contraseñas fuertes y únicas",
          },
          { id: "wifi", label: language === "en" ? "I use secure Wi-Fi networks" : "Uso redes Wi-Fi seguras" },
          {
            id: "backups",
            label: language === "en" ? "I perform regular backups" : "Realizo copias de seguridad regularmente",
          },
        ]
    }
  }

  const items = getChecklistItems()

  const handleCheckChange = (id: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const checkedCount = Object.values(checkedItems).filter(Boolean).length
  const progress = (checkedCount / items.length) * 100

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox
              id={item.id}
              checked={checkedItems[item.id] || false}
              onCheckedChange={(checked) => handleCheckChange(item.id, checked as boolean)}
            />
            <Label htmlFor={item.id} className="text-sm">
              {item.label}
            </Label>
          </div>
        ))}
      </div>

      <div className="space-y-2 pt-4">
        <div className="flex justify-between text-sm">
          <span>{t("checklistComplete")}</span>
          <span>
            {checkedCount}/{items.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  )
}

function PasswordGenerator() {
  const { t, language } = useLanguage()
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [strength, setStrength] = useState(0)

  const generatePassword = () => {
    let charset = ""
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumbers) charset += "0123456789"
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    if (charset === "") {
      setPassword(
        language === "en" ? "Please select at least one character type" : "Selecciona al menos un tipo de carácter",
      )
      setStrength(0)
      return
    }

    let newPassword = ""
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    setPassword(newPassword)

    // Calculate password strength
    let strengthScore = 0
    if (length >= 12) strengthScore += 1
    if (length >= 16) strengthScore += 1
    if (includeUppercase) strengthScore += 1
    if (includeLowercase) strengthScore += 1
    if (includeNumbers) strengthScore += 1
    if (includeSymbols) strengthScore += 1

    setStrength(Math.min(strengthScore, 5))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  const getStrengthText = () => {
    if (strength === 0) return language === "en" ? "Very Weak" : "Muy Débil"
    if (strength === 1) return language === "en" ? "Weak" : "Débil"
    if (strength === 2) return language === "en" ? "Moderate" : "Moderada"
    if (strength === 3) return language === "en" ? "Good" : "Buena"
    if (strength === 4) return language === "en" ? "Strong" : "Fuerte"
    return language === "en" ? "Very Strong" : "Muy Fuerte"
  }

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500"
    if (strength === 2) return "bg-orange-500"
    if (strength === 3) return "bg-yellow-500"
    if (strength === 4) return "bg-green-500"
    return "bg-emerald-500"
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          value={password}
          readOnly
          className="pr-10 font-mono text-sm"
          placeholder={
            language === "en" ? "Generated password will appear here" : "La contraseña generada aparecerá aquí"
          }
        />
        {password && (
          <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full" onClick={copyToClipboard}>
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy</span>
          </Button>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <Label htmlFor="length">
            {language === "en" ? "Length" : "Longitud"}: {length}
          </Label>
        </div>
        <Input
          id="length"
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(Number.parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="uppercase"
            checked={includeUppercase}
            onCheckedChange={(checked) => setIncludeUppercase(!!checked)}
          />
          <Label htmlFor="uppercase">
            {language === "en" ? "Include Uppercase (A-Z)" : "Incluir Mayúsculas (A-Z)"}
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="lowercase"
            checked={includeLowercase}
            onCheckedChange={(checked) => setIncludeLowercase(!!checked)}
          />
          <Label htmlFor="lowercase">
            {language === "en" ? "Include Lowercase (a-z)" : "Incluir Minúsculas (a-z)"}
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="numbers" checked={includeNumbers} onCheckedChange={(checked) => setIncludeNumbers(!!checked)} />
          <Label htmlFor="numbers">{language === "en" ? "Include Numbers (0-9)" : "Incluir Números (0-9)"}</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="symbols" checked={includeSymbols} onCheckedChange={(checked) => setIncludeSymbols(!!checked)} />
          <Label htmlFor="symbols">{language === "en" ? "Include Symbols (!@#$)" : "Incluir Símbolos (!@#$)"}</Label>
        </div>
      </div>

      <Button onClick={generatePassword} className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" />
        {t("generatePassword")}
      </Button>

      {password && strength > 0 && (
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-sm">
            <span>{t("passwordStrength")}</span>
            <span>{getStrengthText()}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div
              className={`h-full rounded-full ${getStrengthColor()}`}
              style={{ width: `${(strength / 5) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

function SecurityQuiz({ activeSection }: { activeSection: string }) {
  const { language } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const getQuizQuestions = () => {
    switch (activeSection) {
      case "device-security":
        return [
          {
            question:
              language === "en"
                ? "What is the most important reason to keep your devices updated?"
                : "¿Cuál es la razón más importante para mantener tus dispositivos actualizados?",
            options:
              language === "en"
                ? [
                    "To get new features",
                    "To fix security vulnerabilities",
                    "To improve performance",
                    "To save battery life",
                  ]
                : [
                    "Para obtener nuevas funciones",
                    "Para corregir vulnerabilidades de seguridad",
                    "Para mejorar el rendimiento",
                    "Para ahorrar batería",
                  ],
            correctAnswer: 1,
          },
          {
            question:
              language === "en"
                ? "Which of these is NOT a good password practice?"
                : "¿Cuál de estas NO es una buena práctica de contraseña?",
            options:
              language === "en"
                ? [
                    "Using different passwords for each account",
                    "Including special characters",
                    "Writing it down on a sticky note",
                    "Using a password manager",
                  ]
                : [
                    "Usar diferentes contraseñas para cada cuenta",
                    "Incluir caracteres especiales",
                    "Anotarla en una nota adhesiva",
                    "Usar un gestor de contraseñas",
                  ],
            correctAnswer: 2,
          },
        ]
      case "network-security":
        return [
          {
            question:
              language === "en"
                ? "What should you do when using public Wi-Fi?"
                : "¿Qué debes hacer cuando usas Wi-Fi público?",
            options:
              language === "en"
                ? ["Access your banking information", "Use a VPN", "Share sensitive files", "Disable your firewall"]
                : [
                    "Acceder a tu información bancaria",
                    "Usar una VPN",
                    "Compartir archivos sensibles",
                    "Desactivar tu firewall",
                  ],
            correctAnswer: 1,
          },
          {
            question:
              language === "en" ? "What is the purpose of a firewall?" : "¿Cuál es el propósito de un firewall?",
            options:
              language === "en"
                ? ["Speed up your internet", "Block unauthorized access", "Encrypt your data", "Boost Wi-Fi signal"]
                : [
                    "Acelerar tu internet",
                    "Bloquear acceso no autorizado",
                    "Cifrar tus datos",
                    "Aumentar la señal Wi-Fi",
                  ],
            correctAnswer: 1,
          },
        ]
      default:
        return [
          {
            question:
              language === "en"
                ? "What is the best way to protect against phishing attacks?"
                : "¿Cuál es la mejor manera de protegerse contra ataques de phishing?",
            options:
              language === "en"
                ? [
                    "Open all email attachments",
                    "Click on links to verify them",
                    "Be suspicious of unexpected emails",
                    "Share the email with friends",
                  ]
                : [
                    "Abrir todos los archivos adjuntos de correo electrónico",
                    "Hacer clic en enlaces para verificarlos",
                    "Sospechar de correos electrónicos inesperados",
                    "Compartir el correo electrónico con amigos",
                  ],
            correctAnswer: 2,
          },
          {
            question:
              language === "en"
                ? "How often should you back up important data?"
                : "¿Con qué frecuencia debes hacer copias de seguridad de datos importantes?",
            options:
              language === "en"
                ? [
                    "Never",
                    "Only when your device is slow",
                    "Regularly, on a schedule",
                    "Only before selling your device",
                  ]
                : [
                    "Nunca",
                    "Solo cuando tu dispositivo está lento",
                    "Regularmente, según un horario",
                    "Solo antes de vender tu dispositivo",
                  ],
            correctAnswer: 2,
          },
        ]
    }
  }

  const questions = getQuizQuestions()

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
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

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResults(false)
  }

  if (showResults) {
    return (
      <div className="space-y-4 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="text-lg font-medium">
          {language === "en"
            ? `Quiz Complete! Your Score: ${score}/${questions.length}`
            : `¡Cuestionario completo! Tu puntuación: ${score}/${questions.length}`}
        </h3>
        <p>
          {language === "en"
            ? `You answered ${score} out of ${questions.length} questions correctly.`
            : `Respondiste ${score} de ${questions.length} preguntas correctamente.`}
        </p>
        <Button onClick={resetQuiz} className="mt-4">
          {language === "en" ? "Try Again" : "Intentar de nuevo"}
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-2">
          {language === "en"
            ? `Question ${currentQuestion + 1} of ${questions.length}`
            : `Pregunta ${currentQuestion + 1} de ${questions.length}`}
        </h3>
        <p className="mb-4">{questions[currentQuestion].question}</p>

        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`p-3 rounded-md border cursor-pointer transition-colors ${
                selectedAnswer === index ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <Button onClick={handleNextQuestion} disabled={selectedAnswer === null} className="w-full">
        {currentQuestion < questions.length - 1
          ? language === "en"
            ? "Next Question"
            : "Siguiente Pregunta"
          : language === "en"
            ? "See Results"
            : "Ver Resultados"}
      </Button>
    </div>
  )
}
