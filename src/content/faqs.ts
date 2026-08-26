import type { FaqItem } from "@/components/Faq";

/**
 * Preguntas frecuentes. Fuente única para la página /preguntas-frecuentes/,
 * el bloque resumido de la home y el JSON-LD de tipo FAQPage.
 *
 * Norma: ninguna respuesta inventa precios, plazos, mínimos de horas,
 * garantías absolutas, número de trabajadores ni certificaciones.
 */
export const faqs: FaqItem[] = [
  {
    question: "¿Qué es un controlador de accesos?",
    answer:
      "Es la persona encargada de organizar y controlar la entrada de público a un local o a un evento: comprobar entradas o invitaciones, ordenar la fila de acceso, informar a los asistentes y aplicar las condiciones de admisión y aforo que fija el organizador o la normativa aplicable.",
  },
  {
    question: "¿Un controlador de accesos es un vigilante de seguridad?",
    answer:
      "No. Son dos figuras distintas, con normativa y funciones diferentes. El vigilante de seguridad pertenece al ámbito de la seguridad privada y presta funciones legalmente reservadas a ese sector. El personal de control de accesos organiza la entrada y el acceso del público, sin asumir esas funciones reservadas.",
  },
  {
    question: "¿Qué funciones puede realizar el personal de control de accesos?",
    answer:
      "Comprobar entradas, listados y acreditaciones; organizar la fila y el flujo de entrada; informar y orientar a los asistentes; aplicar las condiciones de admisión y el control de aforo según las instrucciones del organizador y la normativa aplicable; y apoyar la operativa del acceso durante el servicio.",
  },
  {
    question: "¿El personal de control de accesos necesita habilitación en Galicia?",
    answer:
      "La actividad de control de acceso a espectáculos públicos y actividades recreativas está regulada por normativa autonómica, que establece requisitos de formación y acreditación para el personal. Organizamos cada servicio conforme a la normativa aplicable. Si necesitas comprobar un requisito concreto para tu local o tu evento, consúltanos y lo revisamos contigo.",
  },
  {
    question: "¿Prestáis servicios de seguridad privada?",
    answer:
      "No. GaliControl Brigantia no es una empresa de seguridad privada y no presta servicios legalmente reservados a ese sector. Prestamos servicios de control de accesos y personal auxiliar dentro de las funciones que legalmente corresponden. Si tu evento necesita vigilantes de seguridad, tendrás que contratarlos con una empresa de seguridad privada habilitada.",
  },
  {
    question: "¿Cuánto cuesta contratar personal?",
    answer:
      "Depende de la fecha, el horario, la duración, el número de personas y el tipo de servicio. No trabajamos con una tarifa única: preparamos un presupuesto concreto para cada caso. Cuéntanos qué necesitas y te lo enviamos.",
  },
  {
    question: "¿Hay un mínimo de horas?",
    answer:
      "Las condiciones mínimas de contratación se concretan en cada presupuesto, según el tipo de servicio, la fecha y el horario. Antes de contratar sabrás por escrito qué horas incluye el servicio.",
  },
  {
    question: "¿Qué pasa si el evento termina más tarde de lo previsto?",
    answer:
      "En el presupuesto dejamos definidas las horas incluidas y las condiciones de ampliación, para que no haya dudas si el evento se alarga. Si durante el servicio se necesita más tiempo, se aplica lo acordado previamente.",
  },
  {
    question: "¿Podéis trabajar solo una noche?",
    answer:
      "Sí. Trabajamos tanto servicios puntuales de una sola fecha como servicios recurrentes. Un refuerzo para una noche concreta, una fiesta o una sustitución puntual son encargos habituales.",
  },
  {
    question: "¿Hacéis servicios recurrentes para locales?",
    answer:
      "Sí. Es una de nuestras líneas principales: pubs, salas, discotecas y espacios de ocio que necesitan personal determinados días o varias veces al mes, con una planificación continuada y un único interlocutor.",
  },
  {
    question: "¿Qué ocurre si una persona del equipo se pone enferma?",
    answer:
      "Organizamos la sustitución siempre que la disponibilidad operativa lo permita. Ese es precisamente el sentido de trabajar con una empresa que coordina el equipo: no tienes que buscar tú un sustituto ni llamar uno a uno a los trabajadores.",
  },
  {
    question: "¿Trabajáis fuera de A Coruña?",
    answer:
      "Nuestra base está en A Coruña y trabajamos principalmente en la provincia. También prestamos servicios en otros puntos de Galicia según las características, la duración y las necesidades de cada encargo. Consúltanos tu localidad.",
  },
  {
    question: "¿Con cuánto tiempo debería reservar?",
    answer:
      "Cuanto antes, mejor, sobre todo en fines de semana, fiestas y fechas señaladas, porque la disponibilidad de personal es limitada. Dicho esto, también atendemos necesidades urgentes: escríbenos o llámanos y te decimos si podemos cubrirlo.",
  },
  {
    question: "¿Qué necesitáis para preparar un presupuesto?",
    answer:
      "Fecha, localidad, horario aproximado, tipo de recinto o local, asistentes previstos y qué necesitas cubrir. Con eso te planteamos una cobertura razonable y el presupuesto correspondiente. Si no tienes todos los datos, empezamos con los que tengas.",
  },
];

/** Selección corta para la portada. */
export const homeFaqQuestions = [
  "¿Cuánto cuesta contratar personal?",
  "¿Podéis trabajar solo una noche?",
  "¿Hacéis servicios recurrentes para locales?",
  "¿Qué ocurre si una persona del equipo se pone enferma?",
  "¿Qué necesitáis para preparar un presupuesto?",
];

export const homeFaqs: FaqItem[] = homeFaqQuestions
  .map((q) => faqs.find((f) => f.question === q))
  .filter((f): f is FaqItem => Boolean(f));
