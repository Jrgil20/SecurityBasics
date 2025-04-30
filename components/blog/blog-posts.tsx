"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogPosts() {
  const { t, language } = useLanguage()

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Social Engineering Article */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t("socialEngineeringTitle")}</CardTitle>
              <CardDescription>{t("socialEngineeringDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose dark:prose-invert">
                {language === "en" ? (
                  <>
                    <p>
                      Social engineering is the foundation of most security threats. It refers to psychological
                      manipulation techniques that exploit human error to gain access to valuable information or
                      systems.
                    </p>
                    <p>
                      Unlike technical hacking methods that exploit system vulnerabilities, social engineering targets
                      the human element—often considered the weakest link in security.
                    </p>
                    <h3>Common Social Engineering Techniques</h3>
                    <ul>
                      <li>
                        <strong>Pretexting:</strong> Creating a fabricated scenario to obtain information
                      </li>
                      <li>
                        <strong>Baiting:</strong> Offering something enticing to exchange for information
                      </li>
                      <li>
                        <strong>Quid Pro Quo:</strong> Requesting information in exchange for a service
                      </li>
                      <li>
                        <strong>Tailgating:</strong> Following someone into a restricted area
                      </li>
                    </ul>
                    <p>
                      Understanding these techniques is crucial because they form the basis of more sophisticated
                      attacks like phishing, vishing (voice phishing), and spear phishing.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      La ingeniería social es la base de la mayoría de las amenazas de seguridad. Se refiere a técnicas
                      de manipulación psicológica que explotan el error humano para obtener acceso a información o
                      sistemas valiosos.
                    </p>
                    <p>
                      A diferencia de los métodos técnicos de hacking que explotan vulnerabilidades del sistema, la
                      ingeniería social se dirige al elemento humano, a menudo considerado el eslabón más débil en la
                      seguridad.
                    </p>
                    <h3>Técnicas comunes de ingeniería social</h3>
                    <ul>
                      <li>
                        <strong>Pretexting:</strong> Crear un escenario fabricado para obtener información
                      </li>
                      <li>
                        <strong>Cebo:</strong> Ofrecer algo atractivo a cambio de información
                      </li>
                      <li>
                        <strong>Quid Pro Quo:</strong> Solicitar información a cambio de un servicio
                      </li>
                      <li>
                        <strong>Tailgating:</strong> Seguir a alguien a un área restringida
                      </li>
                    </ul>
                    <p>
                      Entender estas técnicas es crucial porque forman la base de ataques más sofisticados como
                      phishing, vishing (phishing por voz) y spear phishing.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/blog/social-engineering">{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Phishing Article */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t("phishingTitle")}</CardTitle>
              <CardDescription>{t("phishingDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose dark:prose-invert">
                {language === "en" ? (
                  <>
                    <p>
                      Phishing is a type of social engineering attack where attackers disguise themselves as trustworthy
                      entities to trick victims into revealing sensitive information or installing malware.
                    </p>
                    <p>
                      These attacks typically come via email, text message, or social media and often create a sense of
                      urgency or fear to manipulate victims into acting quickly without careful consideration.
                    </p>
                    <h3>How to Identify Phishing Attempts</h3>
                    <ul>
                      <li>Unexpected communications asking for personal information</li>
                      <li>Messages with poor grammar and spelling errors</li>
                      <li>Suspicious or mismatched URLs</li>
                      <li>Requests for urgent action</li>
                      <li>Offers that seem too good to be true</li>
                    </ul>
                    <p>
                      Phishing remains one of the most common and effective attack vectors because it exploits human
                      psychology rather than technical vulnerabilities.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      El phishing es un tipo de ataque de ingeniería social donde los atacantes se disfrazan como
                      entidades confiables para engañar a las víctimas y revelar información sensible o instalar
                      malware.
                    </p>
                    <p>
                      Estos ataques típicamente llegan por correo electrónico, mensaje de texto o redes sociales y a
                      menudo crean una sensación de urgencia o miedo para manipular a las víctimas para que actúen
                      rápidamente sin una consideración cuidadosa.
                    </p>
                    <h3>Cómo identificar intentos de phishing</h3>
                    <ul>
                      <li>Comunicaciones inesperadas que solicitan información personal</li>
                      <li>Mensajes con mala gramática y errores ortográficos</li>
                      <li>URLs sospechosas o que no coinciden</li>
                      <li>Solicitudes de acción urgente</li>
                      <li>Ofertas que parecen demasiado buenas para ser verdad</li>
                    </ul>
                    <p>
                      El phishing sigue siendo uno de los vectores de ataque más comunes y efectivos porque explota la
                      psicología humana en lugar de vulnerabilidades técnicas.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/blog/phishing">{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Password Security Article */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t("passwordSecurityTitle")}</CardTitle>
              <CardDescription>{t("passwordSecurityDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose dark:prose-invert">
                {language === "en" ? (
                  <>
                    <p>
                      Password security is a fundamental aspect of digital protection. Despite advances in
                      authentication technologies, passwords remain the most common form of security control.
                    </p>
                    <p>
                      Unfortunately, poor password practices are widespread, making them a prime target for attackers
                      using techniques like credential stuffing, brute force attacks, and dictionary attacks.
                    </p>
                    <h3>Password Best Practices</h3>
                    <ul>
                      <li>Use long, complex passwords (at least 12 characters)</li>
                      <li>Employ a unique password for each account</li>
                      <li>Utilize a password manager to generate and store passwords</li>
                      <li>Enable two-factor authentication whenever possible</li>
                      <li>Change passwords periodically, especially after a breach</li>
                    </ul>
                    <p>
                      Remember that even the strongest password can be compromised if you fall victim to phishing or
                      social engineering attacks.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      La seguridad de las contraseñas es un aspecto fundamental de la protección digital. A pesar de los
                      avances en tecnologías de autenticación, las contraseñas siguen siendo la forma más común de
                      control de seguridad.
                    </p>
                    <p>
                      Desafortunadamente, las malas prácticas de contraseñas están muy extendidas, lo que las convierte
                      en un objetivo principal para los atacantes que utilizan técnicas como el relleno de credenciales,
                      ataques de fuerza bruta y ataques de diccionario.
                    </p>
                    <h3>Mejores prácticas para contraseñas</h3>
                    <ul>
                      <li>Usar contraseñas largas y complejas (al menos 12 caracteres)</li>
                      <li>Emplear una contraseña única para cada cuenta</li>
                      <li>Utilizar un gestor de contraseñas para generar y almacenar contraseñas</li>
                      <li>Habilitar la autenticación de dos factores siempre que sea posible</li>
                      <li>Cambiar las contraseñas periódicamente, especialmente después de una brecha</li>
                    </ul>
                    <p>
                      Recuerda que incluso la contraseña más fuerte puede verse comprometida si caes víctima de ataques
                      de phishing o ingeniería social.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/blog/password-security">{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Two-Factor Authentication Article */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t("twoFactorTitle")}</CardTitle>
              <CardDescription>{t("twoFactorDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose dark:prose-invert">
                {language === "en" ? (
                  <>
                    <p>
                      Two-factor authentication (2FA) adds an essential extra layer of security to your accounts by
                      requiring two different types of verification before granting access.
                    </p>
                    <p>
                      Even if an attacker manages to steal your password, they would still need the second factor
                      (something you have, something you are, or somewhere you are) to access your account.
                    </p>
                    <h3>Types of Two-Factor Authentication</h3>
                    <ul>
                      <li>
                        <strong>Something you know:</strong> Password or PIN
                      </li>
                      <li>
                        <strong>Something you have:</strong> Mobile phone, security key, or authentication app
                      </li>
                      <li>
                        <strong>Something you are:</strong> Fingerprint, face recognition, or other biometrics
                      </li>
                      <li>
                        <strong>Somewhere you are:</strong> Specific location or network
                      </li>
                    </ul>
                    <p>
                      While SMS-based 2FA is better than no 2FA at all, authentication apps like Google Authenticator,
                      Microsoft Authenticator, or Authy provide stronger security as they're not vulnerable to SIM
                      swapping attacks.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      La autenticación de dos factores (2FA) añade una capa adicional esencial de seguridad a tus
                      cuentas al requerir dos tipos diferentes de verificación antes de conceder acceso.
                    </p>
                    <p>
                      Incluso si un atacante logra robar tu contraseña, aún necesitaría el segundo factor (algo que
                      tienes, algo que eres o algún lugar donde estás) para acceder a tu cuenta.
                    </p>
                    <h3>Tipos de autenticación de dos factores</h3>
                    <ul>
                      <li>
                        <strong>Algo que sabes:</strong> Contraseña o PIN
                      </li>
                      <li>
                        <strong>Algo que tienes:</strong> Teléfono móvil, llave de seguridad o aplicación de
                        autenticación
                      </li>
                      <li>
                        <strong>Algo que eres:</strong> Huella digital, reconocimiento facial u otros datos biométricos
                      </li>
                      <li>
                        <strong>Algún lugar donde estás:</strong> Ubicación o red específica
                      </li>
                    </ul>
                    <p>
                      Aunque la 2FA basada en SMS es mejor que no tener 2FA en absoluto, las aplicaciones de
                      autenticación como Google Authenticator, Microsoft Authenticator o Authy proporcionan una
                      seguridad más fuerte, ya que no son vulnerables a ataques de intercambio de SIM.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/blog/two-factor-authentication">{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Public Wi-Fi Security Article */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t("publicWifiTitle")}</CardTitle>
              <CardDescription>{t("publicWifiDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose dark:prose-invert">
                {language === "en" ? (
                  <>
                    <p>
                      Public Wi-Fi networks in cafes, airports, hotels, and other public places offer convenience but
                      pose significant security risks. These networks are often unsecured or have minimal security
                      measures.
                    </p>
                    <p>
                      When you connect to public Wi-Fi, your data transmissions can be intercepted by attackers on the
                      same network, potentially exposing your sensitive information.
                    </p>
                    <h3>Risks of Public Wi-Fi</h3>
                    <ul>
                      <li>
                        <strong>Man-in-the-middle attacks:</strong> Intercepting communications between you and websites
                      </li>
                      <li>
                        <strong>Evil twin attacks:</strong> Fake networks that mimic legitimate ones
                      </li>
                      <li>
                        <strong>Packet sniffing:</strong> Capturing data packets transmitted over the network
                      </li>
                      <li>
                        <strong>Session hijacking:</strong> Stealing browser cookies to access your logged-in accounts
                      </li>
                    </ul>
                    <p>
                      Always use a VPN when connecting to public Wi-Fi to encrypt your traffic and protect your data
                      from prying eyes.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Las redes Wi-Fi públicas en cafeterías, aeropuertos, hoteles y otros lugares públicos ofrecen
                      comodidad pero plantean riesgos significativos de seguridad. Estas redes a menudo no están
                      protegidas o tienen medidas de seguridad mínimas.
                    </p>
                    <p>
                      Cuando te conectas a Wi-Fi público, tus transmisiones de datos pueden ser interceptadas por
                      atacantes en la misma red, exponiendo potencialmente tu información sensible.
                    </p>
                    <h3>Riesgos del Wi-Fi público</h3>
                    <ul>
                      <li>
                        <strong>Ataques de intermediario:</strong> Interceptar comunicaciones entre tú y los sitios web
                      </li>
                      <li>
                        <strong>Ataques de gemelo malvado:</strong> Redes falsas que imitan a las legítimas
                      </li>
                      <li>
                        <strong>Sniffing de paquetes:</strong> Capturar paquetes de datos transmitidos por la red
                      </li>
                      <li>
                        <strong>Secuestro de sesión:</strong> Robar cookies del navegador para acceder a tus cuentas
                        conectadas
                      </li>
                    </ul>
                    <p>
                      Siempre usa una VPN cuando te conectes a Wi-Fi público para cifrar tu tráfico y proteger tus datos
                      de miradas indiscretas.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/blog/public-wifi-security">{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Data Encryption Article */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t("encryptionTitle")}</CardTitle>
              <CardDescription>{t("encryptionDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose dark:prose-invert">
                {language === "en" ? (
                  <>
                    <p>
                      Data encryption is the process of converting information into a code to prevent unauthorized
                      access. It's one of the most effective ways to secure sensitive data, both in transit and at rest.
                    </p>
                    <p>
                      Encryption transforms readable data (plaintext) into an unreadable format (ciphertext) using
                      mathematical algorithms and encryption keys. Only those with the correct decryption key can
                      convert the data back to its original form.
                    </p>
                    <h3>Types of Encryption</h3>
                    <ul>
                      <li>
                        <strong>Symmetric encryption:</strong> Uses the same key for encryption and decryption
                      </li>
                      <li>
                        <strong>Asymmetric encryption:</strong> Uses different keys for encryption (public key) and
                        decryption (private key)
                      </li>
                      <li>
                        <strong>End-to-end encryption:</strong> Only the communicating users can read the messages
                      </li>
                      <li>
                        <strong>Full-disk encryption:</strong> Encrypts everything on a storage device
                      </li>
                    </ul>
                    <p>
                      Implementing encryption for your sensitive data, communications, and devices is a crucial step in
                      protecting your digital life from unauthorized access.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      El cifrado de datos es el proceso de convertir información en un código para prevenir el acceso no
                      autorizado. Es una de las formas más efectivas de asegurar datos sensibles, tanto en tránsito como
                      en reposo.
                    </p>
                    <p>
                      El cifrado transforma datos legibles (texto plano) en un formato ilegible (texto cifrado)
                      utilizando algoritmos matemáticos y claves de cifrado. Solo aquellos con la clave de descifrado
                      correcta pueden convertir los datos de vuelta a su forma original.
                    </p>
                    <h3>Tipos de cifrado</h3>
                    <ul>
                      <li>
                        <strong>Cifrado simétrico:</strong> Usa la misma clave para cifrado y descifrado
                      </li>
                      <li>
                        <strong>Cifrado asimétrico:</strong> Usa diferentes claves para cifrado (clave pública) y
                        descifrado (clave privada)
                      </li>
                      <li>
                        <strong>Cifrado de extremo a extremo:</strong> Solo los usuarios que se comunican pueden leer
                        los mensajes
                      </li>
                      <li>
                        <strong>Cifrado de disco completo:</strong> Cifra todo en un dispositivo de almacenamiento
                      </li>
                    </ul>
                    <p>
                      Implementar cifrado para tus datos sensibles, comunicaciones y dispositivos es un paso crucial
                      para proteger tu vida digital del acceso no autorizado.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/blog/data-encryption">{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Ransomware Protection Article */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t("ransomwareTitle")}</CardTitle>
              <CardDescription>{t("ransomwareDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose dark:prose-invert">
                {language === "en" ? (
                  <>
                    <p>
                      Ransomware is a type of malicious software that encrypts a victim's files and demands payment
                      (usually in cryptocurrency) to restore access. It has become one of the most prevalent and
                      damaging cyber threats in recent years.
                    </p>
                    <p>
                      Ransomware attacks can target individuals, businesses, healthcare facilities, government agencies,
                      and educational institutions, causing significant financial losses and operational disruptions.
                    </p>
                    <h3>Protecting Against Ransomware</h3>
                    <ul>
                      <li>
                        <strong>Regular backups:</strong> Maintain offline or cloud backups of important data
                      </li>
                      <li>
                        <strong>Software updates:</strong> Keep operating systems and applications up-to-date
                      </li>
                      <li>
                        <strong>Email vigilance:</strong> Be cautious with email attachments and links
                      </li>
                      <li>
                        <strong>Principle of least privilege:</strong> Limit user permissions to only what's necessary
                      </li>
                      <li>
                        <strong>Security awareness:</strong> Train yourself and others to recognize threats
                      </li>
                    </ul>
                    <p>
                      If you do fall victim to ransomware, having recent, secure backups is often the best way to
                      recover without paying the ransom, which is never recommended as it funds criminal activities and
                      doesn't guarantee data recovery.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      El ransomware es un tipo de software malicioso que cifra los archivos de una víctima y exige un
                      pago (generalmente en criptomoneda) para restaurar el acceso. Se ha convertido en una de las
                      amenazas cibernéticas más prevalentes y dañinas en los últimos años.
                    </p>
                    <p>
                      Los ataques de ransomware pueden dirigirse a individuos, empresas, instalaciones de salud,
                      agencias gubernamentales e instituciones educativas, causando pérdidas financieras significativas
                      e interrupciones operativas.
                    </p>
                    <h3>Protección contra el ransomware</h3>
                    <ul>
                      <li>
                        <strong>Copias de seguridad regulares:</strong> Mantén copias de seguridad offline o en la nube
                        de datos importantes
                      </li>
                      <li>
                        <strong>Actualizaciones de software:</strong> Mantén los sistemas operativos y aplicaciones
                        actualizados
                      </li>
                      <li>
                        <strong>Vigilancia de correo electrónico:</strong> Ten cuidado con los archivos adjuntos y
                        enlaces de correo electrónico
                      </li>
                      <li>
                        <strong>Principio de menor privilegio:</strong> Limita los permisos de usuario solo a lo
                        necesario
                      </li>
                      <li>
                        <strong>Conciencia de seguridad:</strong> Entrénate a ti mismo y a otros para reconocer amenazas
                      </li>
                    </ul>
                    <p>
                      Si caes víctima del ransomware, tener copias de seguridad recientes y seguras es a menudo la mejor
                      manera de recuperarse sin pagar el rescate, lo cual nunca se recomienda ya que financia
                      actividades criminales y no garantiza la recuperación de datos.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/blog/ransomware-protection">{t("readMore")}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
