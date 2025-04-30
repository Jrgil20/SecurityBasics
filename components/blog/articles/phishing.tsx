"use client"

import { useLanguage } from "@/components/language-provider"
import { BlogPostLayout } from "../blog-post-layout"

export function PhishingArticle() {
  const { language } = useLanguage()

  // Creation and modification dates
  const createdAt = "2023-10-05"
  const updatedAt = "2024-01-20"

  if (language === "en") {
    return (
      <BlogPostLayout
        title="Phishing Attacks: How to Recognize and Avoid Them"
        createdAt={createdAt}
        updatedAt={updatedAt}
      >
        <p>
          Phishing is a type of social engineering attack often used to steal user data, including login credentials and
          credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening
          an email, instant message, or text message.
        </p>

        <h2>Types of Phishing Attacks</h2>

        <h3>Email Phishing</h3>
        <p>
          The most common type of phishing attack involves sending fraudulent emails that appear to come from legitimate
          organizations. These emails typically contain urgent or threatening language and prompt recipients to click on
          a link or download an attachment.
        </p>

        <h3>Spear Phishing</h3>
        <p>
          Unlike regular phishing, spear phishing targets specific individuals or organizations. Attackers research
          their targets to create highly personalized and convincing messages, often appearing to come from trusted
          sources.
        </p>

        <h3>Whaling</h3>
        <p>
          Whaling attacks specifically target senior executives and other high-profile targets. These attacks are highly
          customized and often involve business-related content.
        </p>

        <h3>Smishing and Vishing</h3>
        <p>
          Smishing uses SMS messages, while vishing uses voice calls to trick victims. Both methods aim to manipulate
          victims into revealing sensitive information or taking actions that benefit the attacker.
        </p>

        <h2>How to Identify Phishing Attempts</h2>

        <h3>Check the Sender's Email Address</h3>
        <p>
          Phishers often use email addresses that resemble legitimate ones but contain subtle differences. Always verify
          the sender's email address, especially for messages requesting sensitive information.
        </p>

        <h3>Look for Poor Spelling and Grammar</h3>
        <p>
          Professional organizations typically have content teams that ensure communications are error-free. Phishing
          emails often contain spelling mistakes, poor grammar, or unusual phrasing.
        </p>

        <h3>Beware of Urgent or Threatening Language</h3>
        <p>
          Phishing attempts often create a sense of urgency or fear to prompt immediate action. Be skeptical of emails
          threatening account closure or legal action if you don't respond quickly.
        </p>

        <h3>Hover Over Links Before Clicking</h3>
        <p>
          Before clicking on any links, hover your mouse over them to see the actual URL they lead to. If the URL looks
          suspicious or doesn't match the purported organization, don't click on it.
        </p>

        <h2>Protecting Yourself from Phishing</h2>

        <h3>Use Multi-Factor Authentication</h3>
        <p>
          Multi-factor authentication adds an extra layer of security by requiring additional verification beyond just a
          password. Even if attackers obtain your password through phishing, they won't be able to access your account
          without the second factor.
        </p>

        <h3>Keep Software Updated</h3>
        <p>
          Ensure your operating system, browsers, and security software are up to date. Updates often include patches
          for security vulnerabilities that phishers might exploit.
        </p>

        <h3>Use Email Filtering</h3>
        <p>
          Most email services include spam filters that can help identify and segregate suspicious emails. Adjust your
          filter settings for optimal protection.
        </p>

        <h3>Verify Requests for Sensitive Information</h3>
        <p>
          If you receive a request for sensitive information, verify it through a different communication channel. For
          example, if you get an email from your bank requesting information, call the bank directly using the number on
          their official website or the back of your card.
        </p>

        <h2>What to Do If You've Been Phished</h2>

        <h3>Change Your Passwords</h3>
        <p>
          If you suspect you've fallen victim to a phishing attack, immediately change your passwords for all affected
          accounts. Use strong, unique passwords for each account.
        </p>

        <h3>Monitor Your Accounts</h3>
        <p>
          Keep a close eye on your financial accounts and credit reports for any suspicious activity. Early detection
          can limit the damage from identity theft.
        </p>

        <h3>Report the Phishing Attempt</h3>
        <p>
          Report phishing emails to the organization being impersonated and to relevant authorities. This helps protect
          others and might assist in shutting down the phishing operation.
        </p>

        <h2>Conclusion</h2>

        <p>
          Phishing remains one of the most prevalent cyber threats because it exploits human psychology rather than
          technical vulnerabilities. By staying vigilant and following best practices, you can significantly reduce your
          risk of falling victim to these attacks.
        </p>

        <p>
          Remember, legitimate organizations will never ask for sensitive information via email or text message. When in
          doubt, always verify through official channels before providing any information or taking action.
        </p>
      </BlogPostLayout>
    )
  }

  return (
    <BlogPostLayout
      title="Ataques de Phishing: Cómo Reconocerlos y Evitarlos"
      createdAt={createdAt}
      updatedAt={updatedAt}
    >
      <p>
        El phishing es un tipo de ataque de ingeniería social que se utiliza a menudo para robar datos de usuarios,
        incluidas credenciales de inicio de sesión y números de tarjetas de crédito. Ocurre cuando un atacante,
        haciéndose pasar por una entidad de confianza, engaña a una víctima para que abra un correo electrónico, un
        mensaje instantáneo o un mensaje de texto.
      </p>

      <h2>Tipos de Ataques de Phishing</h2>

      <h3>Phishing por Correo Electrónico</h3>
      <p>
        El tipo más común de ataque de phishing implica el envío de correos electrónicos fraudulentos que parecen
        provenir de organizaciones legítimas. Estos correos electrónicos suelen contener un lenguaje urgente o
        amenazante y solicitan a los destinatarios que hagan clic en un enlace o descarguen un archivo adjunto.
      </p>

      <h3>Spear Phishing</h3>
      <p>
        A diferencia del phishing regular, el spear phishing se dirige a individuos u organizaciones específicas. Los
        atacantes investigan a sus objetivos para crear mensajes altamente personalizados y convincentes, que a menudo
        parecen provenir de fuentes confiables.
      </p>

      <h3>Whaling</h3>
      <p>
        Los ataques de whaling se dirigen específicamente a ejecutivos senior y otros objetivos de alto perfil. Estos
        ataques están altamente personalizados y a menudo involucran contenido relacionado con negocios.
      </p>

      <h3>Smishing y Vishing</h3>
      <p>
        El smishing utiliza mensajes SMS, mientras que el vishing utiliza llamadas de voz para engañar a las víctimas.
        Ambos métodos tienen como objetivo manipular a las víctimas para que revelen información sensible o realicen
        acciones que beneficien al atacante.
      </p>

      <h2>Cómo Identificar Intentos de Phishing</h2>

      <h3>Verifique la Dirección de Correo Electrónico del Remitente</h3>
      <p>
        Los phishers a menudo utilizan direcciones de correo electrónico que se asemejan a las legítimas pero contienen
        diferencias sutiles. Siempre verifique la dirección de correo electrónico del remitente, especialmente para
        mensajes que solicitan información sensible.
      </p>

      <h3>Busque Errores de Ortografía y Gramática</h3>
      <p>
        Las organizaciones profesionales suelen tener equipos de contenido que garantizan que las comunicaciones estén
        libres de errores. Los correos electrónicos de phishing a menudo contienen errores ortográficos, mala gramática
        o frases inusuales.
      </p>

      <h3>Tenga Cuidado con el Lenguaje Urgente o Amenazante</h3>
      <p>
        Los intentos de phishing a menudo crean una sensación de urgencia o miedo para provocar una acción inmediata.
        Sea escéptico con los correos electrónicos que amenazan con cerrar cuentas o tomar acciones legales si no
        responde rápidamente.
      </p>

      <h3>Pase el Ratón Sobre los Enlaces Antes de Hacer Clic</h3>
      <p>
        Antes de hacer clic en cualquier enlace, pase el ratón sobre ellos para ver la URL real a la que conducen. Si la
        URL parece sospechosa o no coincide con la organización supuesta, no haga clic en ella.
      </p>

      <h2>Protegerse del Phishing</h2>

      <h3>Use Autenticación Multifactor</h3>
      <p>
        La autenticación multifactor agrega una capa adicional de seguridad al requerir una verificación adicional más
        allá de una contraseña. Incluso si los atacantes obtienen su contraseña a través de phishing, no podrán acceder
        a su cuenta sin el segundo factor.
      </p>

      <h3>Mantenga el Software Actualizado</h3>
      <p>
        Asegúrese de que su sistema operativo, navegadores y software de seguridad estén actualizados. Las
        actualizaciones a menudo incluyen parches para vulnerabilidades de seguridad que los phishers podrían explotar.
      </p>

      <h3>Use Filtrado de Correo Electrónico</h3>
      <p>
        La mayoría de los servicios de correo electrónico incluyen filtros de spam que pueden ayudar a identificar y
        segregar correos electrónicos sospechosos. Ajuste la configuración de su filtro para una protección óptima.
      </p>

      <h3>Verifique las Solicitudes de Información Sensible</h3>
      <p>
        Si recibe una solicitud de información sensible, verifíquela a través de un canal de comunicación diferente. Por
        ejemplo, si recibe un correo electrónico de su banco solicitando información, llame al banco directamente
        utilizando el número en su sitio web oficial o en el reverso de su tarjeta.
      </p>

      <h2>Qué Hacer Si Ha Sido Víctima de Phishing</h2>

      <h3>Cambie Sus Contraseñas</h3>
      <p>
        Si sospecha que ha sido víctima de un ataque de phishing, cambie inmediatamente sus contraseñas para todas las
        cuentas afectadas. Use contraseñas fuertes y únicas para cada cuenta.
      </p>

      <h3>Monitoree Sus Cuentas</h3>
      <p>
        Mantenga un ojo atento en sus cuentas financieras e informes de crédito para detectar cualquier actividad
        sospechosa. La detección temprana puede limitar el daño del robo de identidad.
      </p>

      <h3>Reporte el Intento de Phishing</h3>
      <p>
        Reporte los correos electrónicos de phishing a la organización que está siendo suplantada y a las autoridades
        relevantes. Esto ayuda a proteger a otros y podría ayudar a cerrar la operación de phishing.
      </p>

      <h2>Conclusión</h2>

      <p>
        El phishing sigue siendo una de las amenazas cibernéticas más prevalentes porque explota la psicología humana en
        lugar de vulnerabilidades técnicas. Al mantenerse vigilante y seguir las mejores prácticas, puede reducir
        significativamente su riesgo de ser víctima de estos ataques.
      </p>

      <p>
        Recuerde, las organizaciones legítimas nunca solicitarán información sensible a través de correo electrónico o
        mensaje de texto. En caso de duda, siempre verifique a través de canales oficiales antes de proporcionar
        cualquier información o tomar medidas.
      </p>
    </BlogPostLayout>
  )
}
