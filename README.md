# 🎉 Amigo Secreto — El juego que sabe guardar secretos 🤫

## 📖 Descripción

Este proyecto es un sencillo juego de **Amigo Secreto** implementado en JavaScript, HTML y CSS.  
Permite agregar nombres, evitar duplicados, y sortear un amigo secreto de forma aleatoria.  
Además, conserva la lista completa visible para mantener el misterio intacto durante todo el juego.

---

## 🧩 Estructura del proyecto

- `index.html`: Estructura básica del juego con formularios e interfaz.  
- `app.js`: Lógica principal para agregar amigos, mostrar lista y sortear.  
- `styles.css`: Estilos para el diseño y presentación.  
- `README.md`: Documentación del proyecto

---

## 🚀 Instalación y ejecución

### Opción 1: Usar la versión publicada

Abre el siguiente enlace en tu navegador para usar el juego directamente sin instalar nada:  
https://rawr1989.github.io/Amigo-Secreto/

### Opción 2: Clonar y ejecutar localmente

1. Clona o descarga este repositorio:  
   ```bash
   git clone https://github.com/Rawr1989/Amigo-Secreto.git
2. Abre index.html en tu navegador favorito (Chrome, Firefox, Edge, Safari).
3. No requiere instalación de dependencias ni servidor local, solo un navegador moderno.

---

## 🎯 Uso

1. Ingresa el nombre de un amigo en el campo de texto.
2. Haz clic en Añadir para sumarlo a la lista (no se permiten nombres vacíos ni duplicados).
3. Cuando la lista tenga amigos, haz clic en Sortear amigo para obtener tu amigo secreto.
4. El resultado aparecerá en pantalla y la lista completa permanecerá visible para no revelar pistas.

![Instrucciones](assets/instrucciones.gif)

---

## ⚠️ Consideraciones importantes
**¿Por qué no se actualiza la lista después del sorteo?** 
Para conservar el misterio, no eliminamos visualmente al amigo sorteado.
Así nadie puede deducir quién queda y el juego mantiene su encanto.
**Validaciones robustas para evitar agregar nombres vacíos o repetidos.**
**El sorteo es aleatorio y elimina internamente el amigo asignado para no repetir.**

---

## 🔧 Posibles problemas y soluciones

| Problema                            | Solución                                                 |
| ----------------------------------- | -------------------------------------------------------- |
| El botón "Añadir" no agrega nombres | Verifica que el campo no esté vacío y sin espacios.      |
| Aparece alerta de nombre repetido   | Cambia el nombre o verifica la lista antes de agregar.   |
| No aparece resultado tras sortear   | Asegúrate que la lista tenga al menos un amigo agregado. |

---

## 🛠 Tecnologías utilizadas
* JavaScript ES6 para la lógica.
* HTML5 para estructura y accesibilidad.
* CSS3 para estilos y diseño responsivo.

---

## 👋 Contacto
¿Quieres sugerir mejoras o colaborar?
Abre un issue o contáctame en https://github.com/Rawr1989