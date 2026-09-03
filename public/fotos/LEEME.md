# Fotografías de la web

Sube aquí las fotos con **exactamente estos nombres**. En cuanto el archivo
existe y se despliega, la foto sustituye sola al recuadro de marcador. No hay
que tocar ninguna línea de código.

| Archivo | Dónde sale | Qué debería mostrar |
| --- | --- | --- |
| `home.jpg` | Portada, arriba a la derecha | Equipo trabajando en un acceso. Es la foto más importante de la web. |
| `control-accesos.jpg` | Página de Control de accesos | Un punto de acceso con personal comprobando entradas. |
| `eventos.jpg` | Página de Eventos | Entrada de un concierto, festival o fiesta con público. |
| `locales.jpg` | Página de Locales | Puerta de un pub, sala o discoteca con personal. |
| `empresas.jpg` | Página de Empresas | Mostrador de recepción o acreditación en un congreso. |

## Ojo: nada de texto dentro de la foto

No subas imágenes con titulares o eslóganes quemados encima. En la web ya hay
un titular real justo al lado, y quedan dos textos compitiendo. Además, el
texto de una imagen no lo lee ni Google ni un lector de pantalla.

## Cómo deben ser

- **Formato:** `.jpg` (o `.webp`). Respeta la extensión de la tabla.
- **Tamaño:** 1440-1600 px de ancho es más que suficiente.
- **Peso:** por debajo de 400 KB. Next.js las reoptimiza al servirlas, así que
  un archivo pesado no penaliza al visitante, pero sí engorda el repositorio y
  alarga los despliegues.
- **Luz:** si es una foto nocturna, comprueba que se distingan las caras y la
  ropa. Muy oscura no se lee sobre el fondo claro de la web.
- **Orientación:** horizontal. Los huecos son apaisados (proporción 4:3).
- **Contenido:** gente trabajando, no posados. Y cuidado con que se reconozcan
  caras de clientes o asistentes sin su permiso.

## Cómo subirlas desde GitHub

1. Entra en la carpeta `public/fotos` del repositorio.
2. **Add file → Upload files**.
3. Arrastra las fotos con el nombre correcto y pulsa **Commit changes**.
4. Vercel despliega solo en un par de minutos y las fotos ya están en la web.

Si una foto no aparece, casi siempre es que el nombre no coincide exactamente
(mayúsculas, acentos o extensión distinta).
