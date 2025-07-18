Checklist para el Ejercicio de Presupuestos Web
Nivel 1
Ejercicio 1: Checkboxes para Servicios Básicos

Crear un proyecto con Vite + React. ✅

Diseñar 3 checkboxes para los servicios:

Campaña SEO (300€).✅

Campaña de Publicidad (400€).✅

Página Web (500€).✅

Usar estados (useState) para controlar las selecciones.✅

Calcular y mostrar el precio total en tiempo real.✅

Ejercicio 2: Personalización de Página Web

Mostrar un componente adicional al seleccionar "Página Web".✅

Incluir inputs para:

Número de páginas.✅

Número de idiomas.✅

Calcular coste: (páginas + idiomas) \* 30€.✅

Sumar este coste al total del presupuesto.✅

Ejercicio 3: Botones de Incremento/Decremento✅

Añadir botones +/- junto a los inputs de páginas e idiomas.✅

Permitir ajustar valores en ±1 unidad.✅

Validar que los valores no sean negativos.✅

Ejercicio 4: Pantalla de Bienvenida y Routing

Crear una pantalla de bienvenida (explicación de la web).✅

Implementar React Router para navegar entre:✅

Bienvenida (/).

Calculadora (/calculator).

Botón en bienvenida → calculadora.✅

Botón en calculadora → bienvenida.✅✅

Ejercicio 5: Listado de Presupuestos

Añadir inputs para:

Nombre del presupuesto.✅

Nombre del cliente.✅

Botón "Guardar Presupuesto" que añada al listado:✅

Servicios seleccionados.✅

Precio total.✅

Fecha (opcional).✅

Mostrar el listado en una tabla o cards.✅

Nivel 2
Ejercicio 6: Popup de Ayuda ✅

Botón con icono de "info" (ℹ️) junto a páginas/idiomas. ✅

Al hacer clic, mostrar un modal (Bootstrap/Tailwind) con:

Explicación de los campos.✅

Ejercicio 7: Ordenación de Presupuestos

3 botones en el listado:

Orden alfabético (por nombre).

Orden por fecha (más reciente primero).

Restablecer orden original.(guardar array original)

Ejercicio 8: Buscador de Presupuestos

Input de búsqueda en el listado.

Filtrar presupuestos que coincidan con el texto (nombre o cliente).

Ejercicio 9: Descuento Anual (20%)

Checkbox/botón "Presupuesto Anual".

Aplicar 20% de descuento al total.

Mostrar visualmente que el descuento está activo.

Nivel 3
Ejercicio 10: Compartir URL con Parámetros

Usar useSearchParams (React Router) para:

Almacenar opciones en la URL (?SEO=true&pages=3).

Cargar opciones al acceder a la URL.

Ejemplo de URL:
http://localhost:3000/calculator?SEO=true&Web=true&pages=2&lang=1.

Extras Recomendados
Validar inputs (ej. páginas ≥ 1).

Diseño responsive (Tailwind/CSS).

Animaciones suaves (ej. cambios de precio).

Tests básicos (Jest/Vitest).
