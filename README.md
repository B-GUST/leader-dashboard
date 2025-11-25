# 🚀 The Leader's Dashboard: Predicción de Riesgo de Burnout y "Productivity Theater"

[![Estado del Proyecto: En Desarrollo](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow.svg)](https://github.com/B-GUST/leader-dashboard)

Un dashboard interactivo que aplica Machine Learning para ayudar a los líderes a detectar patrones de "teatro de la productividad" y riesgo de burnout en sus equipos, basándose en la investigación de mi proyecto de grado sobre Ingeniería Organizacional.

---
# Leader Dashboard: Strategic Operations Center 🚀

> "Transformando datos dispersos en decisiones ejecutivas."

## 📋 Project Overview
Este proyecto es una prueba de concepto (PoC) de un **Dashboard de Operaciones Unificado**. Diseñado desde la perspectiva de un COO/Program Manager, su objetivo es centralizar métricas críticas de múltiples flujos de trabajo (Desarrollo, Ventas, RRHH) en una sola vista accionable.

No es solo un administrador de tareas; es una herramienta de **Gobernanza de Proyectos**.

## 🎯 Key Features (Roadmap)
- **Vista de Pájaro (Bird's Eye View):** Estado de salud de los proyectos (RAG Status - Red/Amber/Green) en tiempo real.
- **Matriz de Riesgos:** Visualización de bloqueos y riesgos potenciales antes de que se conviertan en problemas.
- **Team Pulse:** Métricas de carga de trabajo y sentimiento del equipo (simulado).
- **Financial Snapshot:** Burn-rate y presupuesto vs. ejecución.

## 🛠 Tech Stack (Arquitectura)
Este proyecto demuestra la capacidad de construir interfaces de alto rendimiento para la toma de decisiones:
- **Frontend:** React + Vite (Velocidad y modularidad).
- **Styling:** Tailwind CSS + ShadcnUI (Diseño profesional y accesible tipo Enterprise).
- **State Management:** Zustand / Context API.
- **Data Visualization:** Recharts (Gráficos ejecutivos).
- **Deployment:** Vercel / Netlify.

## 💡 Why this stack?
Elegí esta arquitectura porque prioriza la velocidad de desarrollo, la escalabilidad y una experiencia de usuario (UX) limpia, vital para herramientas utilizadas por C-Levels.

---
*Developed by [Benito August](https://www.linkedin.com/in/benitoaugust/) - Strategic Tech Leader.*
---
## 🎯 Contexto del Problema

 En los entornos de trabajo híbridos, los líderes han perdido la "Gestión por Paseo", creando un **"punto ciego"**. Esta falta de visibilidad fomenta comportamientos disfuncionales:

1. **El "Teatro de la Productividad":** Un fenómeno donde los empleados priorizan *parecer* ocupados por encima de *ser* efectivos. Mi investigación de caso encontró que un 76.9% de los participantes sentía esta presión.
2. **La Erosión de la Seguridad Psicológica:** Sin confianza, el equipo no comunica honestamente los fallos, creando un ciclo vicioso que perpetúa el caos operativo.
3. **El "Ejecutor Ansioso":** El resultado es un profesional que sostiene la productividad a un costo personal insostenible, validando el burnout como un fallo sistémico del diseño organizacional, no individual.

 Los líderes operan "a ciegas", basándose en métricas de vanidad (actividad) en lugar de métricas de valor (resultado).

## 💡 La Solución

**The Leader's Dashboard** es una herramienta de *Business Intelligence* aumentada con Machine Learning, diseñada para cerrar este "punto ciego".

En lugar de medir "horas sentado", este dashboard ingiere datos (simulados o reales) de plataformas de gestión de proyectos (como Jira, Trello, etc.) y los transforma en *insights* accionables.

El núcleo del proyecto es un **modelo de clasificación (regresión logística o similar)** entrenado para predecir la probabilidad de que un conjunto de métricas (ej. exceso de trabajo superficial, alta tasa de retrabajo, comunicación fuera de hora) indique un riesgo alto de **burnout** o la presencia de **"trabajo performativo"**.

## ✨ Características Principales

* **Dashboard Interactivo:** Visualizaciones claras sobre la salud del equipo, carga de trabajo y cuellos de botella.
* **Modelo Predictivo:** Un *score* de riesgo de burnout y "teatro de la productividad" por equipo o proyecto.
* **Análisis de "Trabajo Superficial":** Identificación de la proporción de tareas de bajo valor vs. trabajo profundo (Deep Work).
* **Simulación de Datos:** (Inicial) Un script de Python para generar un dataset realista que simula los patrones encontrados en la investigación.

## 🛠️ Stack Tecnológico

Este proyecto demuestra un ciclo de vida de producto de datos completo:

* **Lenguaje:** `Python`
* **Análisis y Modelado (EDA & ML):** `Pandas`, `NumPy`, `Scikit-learn`
* **Dashboard y Visualización:** `Streamlit` (o `Dash`) y `Plotly`
* **Entorno:** `Jupyter Notebooks` (para exploración) y `Docker` (para despliegue)

## 📈 Estado del Proyecto

* **Fase 1: Exploración y Modelado (En Progreso)**
    * [ ] Definición del Dataset Sintético.
    * [ ] Análisis Exploratorio de Datos (EDA).
    * [ ] Entrenamiento y evaluación del modelo de clasificación base.
* **Fase 2: Desarrollo del Dashboard**
    * [ ] Creación de la interfaz de usuario en Streamlit.
    * [ ] Integración del modelo entrenado en la app.
* **Fase 3: Despliegue**
    * [ ] Creación de un `Dockerfile` para la aplicación.
    * [ ] (Opcional) Despliegue en un servicio (ej. Streamlit Cloud).

## 🚀 Cómo Empezar (Próximamente)

```bash
# Instrucciones para clonar y ejecutar el proyecto localmente
git clone [https://github.com/B-GUST/leader-dashboard.git](https://github.com/B-GUST/leader-dashboard.git)
cd leader-dashboard
pip install -r requirements.txt
streamlit run app.py


---

## Frontend: Strategic Operations Dashboard (React + Vite + Tailwind)

He añadido un scaffold minimal de frontend con una vista de `Strategic Operations Dashboard` (COO). Está en `src/` y puedes levantarlo localmente.

Pasos para correr la UI localmente (PowerShell):

```pwsh
# Instalar dependencias
npm install

# Ejecutar modo desarrollo
npm run dev
```

Dependencias clave incluidas en `package.json`:
- `react`, `react-dom`, `vite`, `tailwindcss`, `lucide-react`

Instalación opcional: "shadcn MCP"
- Si quieres integrar la librería de componentes de shadcn (UI primitives), sigue las instrucciones oficiales: https://ui.shadcn.com/
- Ejemplo (instalar la herramienta CLI y añadir componentes):

```pwsh
npx shadcn-ui@latest add
```

Nota: No puedo ejecutar instalaciones desde aquí; los comandos anteriores son instrucciones para ejecutar en tu máquina.

Si quieres, puedo ejecutar `npm install` y arrancar el servidor de desarrollo aquí (necesito permiso para ejecutar comandos). También puedo añadir soporte para Recharts o integrar componentes shadcn directamente.
