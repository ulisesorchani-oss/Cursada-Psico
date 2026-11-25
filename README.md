# Psicología UBA – Guía Académica y Plan de Estudios

Portal web interactivo e independiente pensado para estudiantes e ingresantes de la **Licenciatura en Psicología de la Universidad de Buenos Aires (UBA)**. Reúne el plan de estudios completo, cátedras, correlativas, seguimiento de avance, bibliografía digital autorizada, guía de tesis y una biblioteca conceptual de **114 autores troncales**.

🔗 **Sitio en producción:** [cursadapsicouba.vercel.app](https://cursadapsicouba.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## Funcionalidades principales

- **Plan de Estudios completo (129 espacios curriculares):**
  - **CBC:** 7 materias
  - **Ciclo de Formación General:** 15 materias obligatorias + 17 electivas
  - **Ciclo de Formación Profesional:** 7 materias obligatorias + 25 electivas
  - **Prácticas Profesionales y de Investigación:** 58 ofertas
- **Seguimiento de carrera y mapa de correlativas:** marcá tus materias aprobadas (guardado localmente en `localStorage`), consultá tu progreso por ciclo y explorá visualmente la red de correlatividades.
- **Biblioteca Conceptual de 114 Autores Troncales:** fichas detalladas con biografía, aportes principales, conceptos clave para rendir, obras esenciales, red navegable de influencias y vínculo directo con las materias del plan donde se estudia cada autor, organizadas en 8 corrientes:
  - *Referentes UBA / Argentina* (25)
  - *Psicoanálisis* (20)
  - *Filosofía y Fenomenología* (19)
  - *Desarrollo y Cognición* (15)
  - *TCC y Neurociencias* (12)
  - *Social e Institucional* (9)
  - *Sistémica y Humanista* (8)
  - *Epistemología y Lenguaje* (6)
- **Bibliografía Digital Gratuita (EDI – CEP):** integración con los enlaces oficiales y gratuitos autorizados por el Centro de Estudiantes (Drive por cátedra, Obras Completas de Freud, Seminarios y Escritos de Lacan, Diccionario de Laplanche y Pontalis, manuales de Barlow y DSM-5).
- **Sección de Tesis de Licenciatura:** recorrido orientativo para el requisito de graduación y acceso al Drive de recursos compartido con autorización de Magalí (`@maga.creaycomunica`), estudiante avanzada de Psicología UBA.
- **Búsqueda instantánea y enlaces compartibles:** buscá por materia, docente, autor, concepto u obra, y compartí fichas directamente mediante parámetros de URL (`?materia=<id>` y `?autor=<id>`).

---

## Stack tecnológico

- **Frontend:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animaciones e íconos:** Framer Motion y Lucide React
- **Visualización:** Recharts

---

## Estructura del proyecto

```text
├── public/                     # Activos estáticos (diagrama del plan de estudios)
├── src/
│   ├── components/
│   │   ├── AutoresSection.tsx  # Buscador, filtros por corriente y grilla de autores
│   │   ├── AutorModal.tsx      # Ficha detallada de autor, influencias y materias
│   │   ├── CurriculumFlowchart.tsx # Mapa visual de correlativas
│   │   ├── ProgressChart.tsx   # Gráfico de avance de carrera
│   │   └── TesisSection.tsx    # Guía de Tesis y Drive autorizado
│   ├── data/
│   │   ├── autores.ts          # Tipos, helpers de búsqueda y tanda base de autores
│   │   ├── autoresTanda2.ts … autoresTanda7.ts # Módulos temáticos de autores (114 en total)
│   │   └── ediBibliografias.ts # Mapa de enlaces oficiales a Drive EDI – CEP
│   ├── lib/
│   │   └── utils.ts            # Utilidades de clases CSS (clsx + tailwind-merge)
│   ├── App.tsx                 # Aplicación principal, filtros, modales y estado
│   ├── constants.ts            # Plan de estudios, cátedras, correlativas y bibliografía
│   ├── index.css               # Configuración de Tailwind y paleta académica
│   └── main.tsx                # Punto de entrada React
├── index.html                  # Metadatos SEO, OpenGraph y JSON-LD
└── vite.config.ts              # Configuración de Vite
```

---

## Instalación y desarrollo local

Requisitos previos: **Node.js 20+** y **npm**.

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo (puerto 3000)
npm run dev
```

### Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:3000` |
| `npm run lint` | Verifica tipos de TypeScript (`tsc --noEmit`) |
| `npm run build` | Genera el build optimizado de producción en `dist/` |
| `npm run preview` | Previsualiza localmente el build de producción |
| `npm run clean` | Elimina la carpeta `dist/` |

---

## Cómo contribuir

Las mejoras de programas, nuevas cátedras, actualizaciones de bibliografía o propuestas de autores son muy bienvenidas:

1. Hacé un fork del repositorio y creá una rama descriptiva (`git checkout -b feat/nuevo-autor`).
2. Mantené la estructura tipada en `src/constants.ts` o `src/data/autores*.ts`.
3. Validá que no haya errores de tipos ni de compilación ejecutando:
   ```bash
   npm run lint && npm run build
   ```
4. Abrí un Pull Request detallando las fuentes o el programa oficial correspondiente.

---

## Aviso legal y derechos de autor

- **Portal independiente:** este sitio es un proyecto informativo comunitario sin afiliación institucional oficial con la Facultad de Psicología ni con la Universidad de Buenos Aires. Para trámites, fechas e inscripciones consultá siempre el [Sistema Académico](http://academica.psi.uba.ar/) y la web oficial de la Facultad.
- **Propiedad intelectual:** este repositorio **no aloja libros ni PDFs protegidos por derechos de autor**. Todo acceso a bibliografía digital se realiza exclusivamente mediante enlaces externos a carpetas públicas gratuitas autorizadas por el Centro de Estudiantes (EDI – CEP) y recursos compartidos con permiso explícito de sus autores.
