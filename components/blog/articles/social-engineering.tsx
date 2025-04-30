"use client"

import { useLanguage } from "@/components/language-provider"
import { BlogPostLayout } from "../blog-post-layout"

export function SocialEngineeringArticle() {
  const { language } = useLanguage()

  // Creation and modification dates
  const createdAt = "2023-09-15"
  const updatedAt = "2023-12-10"

  if (language === "en") {
    return (
      <BlogPostLayout
        title="Social Engineering: Understanding and Preventing Manipulation"
        createdAt={createdAt}
        updatedAt={updatedAt}
      >
        <p>
          Social engineering is the art of manipulating people into performing actions or divulging confidential
          information. Unlike technical hacking, social engineering relies on human interaction and often involves
          tricking people into breaking normal security procedures.
        </p>

        <h2>Common Social Engineering Tactics</h2>

        <h3>Pretexting</h3>
        <p>
          Pretexting involves creating a fabricated scenario to engage a victim and steal their personal information.
          For example, an attacker might impersonate a bank employee, tax authority, or other trusted entity to request
          sensitive information.
        </p>

        <h3>Baiting</h3>
        <p>
          Baiting involves offering something enticing to the victim, such as free music or movie downloads, that
          contains malware. Physical baiting might include leaving infected USB drives in public places, hoping someone
          will use them.
        </p>

        <h3>Quid Pro Quo</h3>
        <p>
          Similar to baiting, quid pro quo attacks promise a benefit in exchange for information. This could be a
          service, like tech support, in exchange for login credentials.
        </p>

        <h3>Tailgating</h3>
        <p>
          Tailgating involves an unauthorized person following an authorized person into a restricted area. This could
          be as simple as holding the door open for someone who appears to be fumbling with their access card.
        </p>

        <h2>How to Protect Yourself</h2>

        <h3>Verify Identity</h3>
        <p>
          Always verify the identity of anyone requesting sensitive information. Don't rely on caller ID or email
          addresses, as these can be spoofed. Call back using a known, verified number or contact the organization
          directly.
        </p>

        <h3>Be Skeptical</h3>
        <p>
          If an offer seems too good to be true, it probably is. Be wary of unsolicited contacts, especially those
          creating a sense of urgency or fear.
        </p>

        <h3>Limit Information Sharing</h3>
        <p>
          Be cautious about what you share online, especially on social media. Attackers can use this information to
          craft convincing pretexts or guess security questions.
        </p>

        <h3>Security Awareness Training</h3>
        <p>
          Regular security awareness training can help individuals recognize and respond appropriately to social
          engineering attempts. Organizations should implement comprehensive training programs.
        </p>

        <h2>Real-World Examples</h2>

        <p>
          In 2020, Twitter experienced a major breach when attackers used social engineering to gain access to internal
          tools, allowing them to take over high-profile accounts. The attackers called Twitter employees and posed as
          IT workers, convincing them to provide access credentials.
        </p>

        <p>
          Another common example is tech support scams, where attackers call victims claiming to be from Microsoft or
          Apple, saying they've detected a problem with the victim's computer and need remote access to fix it.
        </p>

        <h2>Conclusion</h2>

        <p>
          Social engineering remains one of the most effective methods for attackers to bypass security measures. By
          understanding these tactics and implementing proper safeguards, individuals and organizations can
          significantly reduce their risk of falling victim to these attacks.
        </p>

        <p>
          Remember, the best defense against social engineering is awareness and skepticism. When in doubt, verify
          independently and don't be rushed into making security decisions.
        </p>
      </BlogPostLayout>
    )
  }

  return (
    <BlogPostLayout
      title="Ingeniería Social: Comprendiendo y Previniendo la Manipulación"
      createdAt={createdAt}
      updatedAt={updatedAt}
    >
      <p>
        La ingeniería social es el arte de manipular a las personas para que realicen acciones o divulguen información
        confidencial. A diferencia del hacking técnico, la ingeniería social se basa en la interacción humana y a menudo
        implica engañar a las personas para que rompan los procedimientos normales de seguridad.
      </p>

      <h2>Tácticas Comunes de Ingeniería Social</h2>

      <h3>Pretexto</h3>
      <p>
        El pretexto implica crear un escenario fabricado para involucrar a una víctima y robar su información personal.
        Por ejemplo, un atacante podría hacerse pasar por un empleado bancario, autoridad fiscal u otra entidad de
        confianza para solicitar información sensible.
      </p>

      <h3>Cebo</h3>
      <p>
        El cebo implica ofrecer algo atractivo a la víctima, como descargas gratuitas de música o películas, que
        contiene malware. El cebo físico podría incluir dejar unidades USB infectadas en lugares públicos, con la
        esperanza de que alguien las use.
      </p>

      <h3>Quid Pro Quo</h3>
      <p>
        Similar al cebo, los ataques de quid pro quo prometen un beneficio a cambio de información. Esto podría ser un
        servicio, como soporte técnico, a cambio de credenciales de inicio de sesión.
      </p>

      <h3>Tailgating</h3>
      <p>
        El tailgating implica que una persona no autorizada siga a una persona autorizada a un área restringida. Esto
        podría ser tan simple como mantener la puerta abierta para alguien que parece estar teniendo problemas con su
        tarjeta de acceso.
      </p>

      <h2>Cómo Protegerse</h2>

      <h3>Verificar la Identidad</h3>
      <p>
        Siempre verifique la identidad de cualquier persona que solicite información sensible. No confíe en el
        identificador de llamadas o direcciones de correo electrónico, ya que estos pueden ser falsificados. Llame de
        vuelta utilizando un número conocido y verificado o contacte directamente a la organización.
      </p>

      <h3>Sea Escéptico</h3>
      <p>
        Si una oferta parece demasiado buena para ser verdad, probablemente lo sea. Tenga cuidado con los contactos no
        solicitados, especialmente aquellos que crean una sensación de urgencia o miedo.
      </p>

      <h3>Limite el Compartir Información</h3>
      <p>
        Sea cauteloso sobre lo que comparte en línea, especialmente en las redes sociales. Los atacantes pueden usar
        esta información para elaborar pretextos convincentes o adivinar preguntas de seguridad.
      </p>

      <h3>Capacitación en Conciencia de Seguridad</h3>
      <p>
        La capacitación regular en conciencia de seguridad puede ayudar a las personas a reconocer y responder
        adecuadamente a los intentos de ingeniería social. Las organizaciones deben implementar programas de
        capacitación integrales.
      </p>

      <h2>Ejemplos del Mundo Real</h2>

      <p>
        En 2020, Twitter experimentó una brecha importante cuando los atacantes utilizaron la ingeniería social para
        obtener acceso a herramientas internas, lo que les permitió tomar el control de cuentas de alto perfil. Los
        atacantes llamaron a los empleados de Twitter y se hicieron pasar por trabajadores de TI, convenciéndolos de
        proporcionar credenciales de acceso.
      </p>

      <p>
        Otro ejemplo común son las estafas de soporte técnico, donde los atacantes llaman a las víctimas afirmando ser
        de Microsoft o Apple, diciendo que han detectado un problema con la computadora de la víctima y necesitan acceso
        remoto para solucionarlo.
      </p>

      <h2>Conclusión</h2>

      <p>
        La ingeniería social sigue siendo uno de los métodos más efectivos para que los atacantes eludan las medidas de
        seguridad. Al comprender estas tácticas e implementar salvaguardas adecuadas, las personas y organizaciones
        pueden reducir significativamente su riesgo de caer víctimas de estos ataques.
      </p>

      <p>
        Recuerde, la mejor defensa contra la ingeniería social es la conciencia y el escepticismo. En caso de duda,
        verifique de forma independiente y no se apresure a tomar decisiones de seguridad.
      </p>
    </BlogPostLayout>
  )
}
