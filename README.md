# 🚀 The Leader's Dashboard: Predicción de Riesgo de Burnout y "Productivity Theater"

[![Estado del Proyecto: En Desarrollo](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow.svg)](https://github.com/B-GUST/leader-dashboard)

[cite_start]Un dashboard interactivo que aplica Machine Learning para ayudar a los líderes a detectar patrones de "teatro de la productividad" y riesgo de burnout en sus equipos, basándose en la investigación de mi proyecto de grado sobre Ingeniería Organizacional[cite: 330].

---

## 🎯 Contexto del Problema

[cite_start]En los entornos de trabajo híbridos, los líderes han perdido la "Gestión por Paseo" [cite: 346][cite_start], creando un **"punto ciego"**[cite: 347]. Esta falta de visibilidad fomenta comportamientos disfuncionales:

1.  [cite_start]**El "Teatro de la Productividad":** Un fenómeno donde los empleados priorizan *parecer* ocupados por encima de *ser* efectivos[cite: 349, 357]. [cite_start]Mi investigación de caso encontró que un 76.9% de los participantes sentía esta presión[cite: 358].
2.  [cite_start]**La Erosión de la Seguridad Psicológica:** Sin confianza, el equipo no comunica honestamente los fallos, creando un ciclo vicioso que perpetúa el caos operativo[cite: 369, 370].
3.  [cite_start]**El "Ejecutor Ansioso":** El resultado es un profesional que sostiene la productividad a un costo personal insostenible, validando el burnout como un fallo sistémico del diseño organizacional, no individual[cite: 364, 375].

[cite_start]Los líderes operan "a ciegas", basándose en métricas de vanidad (actividad) en lugar de métricas de valor (resultado)[cite: 351, 353].

## 💡 La Solución

**The Leader's Dashboard** es una herramienta de *Business Intelligence* aumentada con Machine Learning, diseñada para cerrar este "punto ciego".

En lugar de medir "horas sentado", este dashboard ingiere datos (simulados o reales) de plataformas de gestión de proyectos (como Jira, Trello, etc.) y los transforma en *insights* accionables.

El núcleo del proyecto es un **modelo de clasificación (regresión logística o similar)** entrenado para predecir la probabilidad de que un conjunto de métricas (ej. exceso de trabajo superficial, alta tasa de retrabajo, comunicación fuera de hora) indique un riesgo alto de **burnout** o la presencia de **"trabajo performativo"**.

## ✨ Características Principales

* **Dashboard Interactivo:** Visualizaciones claras sobre la salud del equipo, carga de trabajo y cuellos de botella.
* **Modelo Predictivo:** Un *score* de riesgo de burnout y "teatro de la productividad" por equipo o proyecto.
* [cite_start]**Análisis de "Trabajo Superficial":** Identificación de la proporción de tareas de bajo valor vs. trabajo profundo (Deep Work)[cite: 359].
* [cite_start]**Simulación de Datos:** (Inicial) Un script de Python para generar un dataset realista que simula los patrones encontrados en la investigación[cite: 356].

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
