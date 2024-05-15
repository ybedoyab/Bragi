# Bragi 🎨📱

## Descripción
Bragi es una innovadora plataforma web y app móvil que revoluciona la manera en que los artistas comparten su talento y los clientes descubren servicios artísticos en la ciudad de Medellín. Con Bragi, los artistas pueden exhibir su trabajo y ofrecer una amplia gama de servicios creativos, desde pintura, escritura, hasta danza y música, a través de perfiles personalizados que destacan su arte y habilidades. Los clientes tienen la oportunidad única de explorar una variedad de opciones artísticas, respaldadas por una plataforma segura que utiliza tecnología blockchain para garantizar transacciones seguras y la protección de datos. Además, Bragi ofrece características innovadoras como comunidades de artistas, seguidores y contrataciones de sus servicios, creando un ecosistema dinámico, seguro, creativo y generador de experiencias.

![image](https://github.com/ybedoyab/Bragi/assets/72664432/4bc1ef00-d3d6-4fcc-b2d3-f77eef5b7a9d)


## Problemática ❓
Bragi aborda la falta de visibilidad que enfrentan los artistas en la ciudad de Medellín. A pesar de su talento y creatividad, muchos artistas luchan por encontrar oportunidades para mostrar su trabajo y llegar a un público más amplio. Esta falta de visibilidad limita su capacidad para generar ingresos y desarrollar sus carreras artísticas.

## Implementación de ICP 💻
Para la implementación de la plataforma Bragi en Medellín, se propone utilizar las tecnologías de Internet Computer Protocol (ICP), que ofrece características importantes para el desarrollo de la solución, como:  
- Smart Contracts para transacciones seguras
- Identidad digital descentralizada
- Almacenamiento descentralizado de datos
- Interoperabilidad con criptomonedas

![Screenshot_2024-05-10_23_09_27 1](https://github.com/ybedoyab/Bragi/assets/72664432/de2d602f-16a6-433c-921e-b08cd6ff0348)


Estas características de ICP permiten a Bragi ofrecer una plataforma segura, transparente y escalable, que ayuda a abordar los desafíos en la promoción del arte en Medellín.

## Modelo de negocio 💼
La base del modelo de negocio de Bragi se fundamenta en los siguientes aspectos clave:  
- **Ingresos por comisiones de servicios**: Bragi generará ingresos mediante una comisión por cada transacción realizada entre artistas y clientes a través de la plataforma.  
- **Suscripciones premium para artistas**: Bragi ofrecerá planes de suscripción premium para los artistas, que les permitirán acceder a funcionalidades adicionales y herramientas de promoción.  
- **Publicidad y patrocinios**: Bragi explorará la inclusión de espacios publicitarios y oportunidades de patrocinio dentro de la plataforma.  

## GitHub 🚀
En nuestro repositorio de GitHub encontrarás la implementación del ICP en forma de backend o con un prototipo de frontend muy básico. La visualización de cómo funciona Bragi se encuentra en el siguiente enlace: [Visualización de Bragi en Figma](https://www.figma.com/proto/AmQPUAtlrZurNAtIAu6WhV/Bragi?node-id=72-1625&t=BnAcLXVRa0hBFj30-1&scaling=min-zoom&page-id=19%3A2664&starting-point-node-id=19%3A2666)

## Prueba Bragi 😸

Pasos:

1. Necesitas clonar este repositorio en tu maquina local con el siguiente comando:
```bash

git clone https://github.com/ybedoyab/Bragi.git
```
2. Posteriormente muevete a la carpeta 'Bragi':
```bash

cd ./Bragi
```

3. Se requiere ejecutar luego el siguiente comando:  
```bash
rm -rf node_modules
```

4.  Posteriormente correr el comando:

```bash
npm install
```

5. Corre el siguiente comando:

```bash
dfx start --background
```

6. Luego escribe: 

```bash
dfx deploy
```

7. Se generarán varios links en el localhost para los canisters de front, back y internet_identity, dado que estamos usando una version de desarrollo requieres copiar el segundo link que se genera para internet_identity y compiarlo en el archivo del codigo ./Bragi/src/usuarios_frontend/src/components y modificar una linea del componente Menu.jsx como se muestra en la imagen 

![image](https://github.com/ybedoyab/Bragi/assets/117226776/d5e213c7-9304-4521-b763-400853fecc07)


En el espacio resaltado pega el link que te mencioné anteriormente.

Ya deberías poder consultar el front_end de la aplicación (por medio de cualquiera de los links que se generan) y consultar el prototipo
