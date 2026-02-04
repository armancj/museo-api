# Plan de mejora de velocidad (VPS basico)

## Objetivo
Reducir latencia p95/p99 y aumentar throughput sin degradar estabilidad ni funcionalidad.

## Infra actual (asumida)
- VPS basico (1-2 vCPU, 2-4 GB RAM, disco SSD, red compartida).
- MongoDB en el mismo VPS o servicio cercano (latencia baja, recursos limitados).
- Despliegue single-node, sin balanceador.

## Metricas objetivo (definir)
- p95/p99 por endpoint critico.
- RPS sostenido por endpoint.
- Uso de CPU/RAM bajo carga.
- Errores (5xx, timeouts).

## Fase 0: linea base (1 dia)
- Identificar 5-10 endpoints criticos.
- Cargar trafico realista y capturar p50/p95/p99.
- Medir tiempos de DB, validacion, serializacion y llamadas externas.
- Resultado: tabla base de rendimiento y top endpoints.

## Fase 1: instrumentacion y profiling (2-3 dias)
- Agregar metricas por ruta (latencia, errores, event loop lag).
- Trazas basicas para consultas Mongo/Mongoose.
- Profiling CPU en staging (muestras cortas).
- Resultado: mapa de cuellos de botella.

## Fase 2: base de datos (3-5 dias)
- Revisar indices reales vs consultas.
- Aplicar proyecciones y `lean()` donde sea seguro.
- Revisar `populate` y evitar N+1.
- Optimizar paginacion y agregaciones pesadas.
- Resultado: queries mas livianas y predecibles.

## Fase 3: API y serializacion (3-5 dias)
- Reducir validaciones costosas en rutas masivas.
- Evitar transformaciones innecesarias (`class-transformer`).
- Cachear respuestas hot con TTL corto.
- Mover tareas pesadas (ej. `sharp`, email) a background.
- Resultado: latencias mas bajas en rutas criticas.

## Fase 4: AI/chat (2-4 dias)
- Limitar concurrencia del endpoint de AI.
- Cachear prompts frecuentes (si aplica).
- Separar workers o microservicio si degrada p95 general.
- Resultado: aislamiento del costo de AI.

## Fase 5: runtime e infraestructura (2-3 dias)
- Asegurar `NODE_ENV=production` y `start:prod`.
- Minimizar logging en prod.
- Habilitar keep-alive y compresion HTTP.
- Evaluar cluster/PM2 o 2 instancias si la VPS lo permite.
- Resultado: mejor uso de CPU/IO.

## Fase 6: validacion y guardrails (1-2 dias)
- Repetir pruebas y comparar p95/p99.
- Definir budgets de rendimiento en CI.
- Alertas simples (CPU, RAM, latencia p95).
- Resultado: mejoras sostenibles.

## Quick wins esperados (VPS basico)
- Indices correctos en Mongo.
- `lean()` + proyecciones.
- Reducir `populate` y serializacion pesada.
- Cache TTL corto en endpoints hot.

## Cronograma estimado
- Total: 2-3 semanas segun prioridad y hallazgos.

## Riesgos
- Cambios en queries pueden impactar consistencia de datos.
- Cache mal invalidado puede servir datos obsoletos.
- VPS basico limita escalado vertical.

## Pendientes para cerrar
- Definir objetivos numericos.
- Confirmar top endpoints.
- Confirmar top 3 queries mas costosas.
