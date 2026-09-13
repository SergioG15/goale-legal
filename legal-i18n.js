// Traducciones de las páginas legales de GOALÉ a los 12 idiomas del juego.
//
// POR QUÉ ESTE ARCHIVO EXISTE: el juego se publica en doce idiomas, y una
// política de privacidad en español que un jugador coreano no entiende no le
// informa de nada - que es exactamente lo único que una política de privacidad
// tiene que hacer.
//
// El idioma sale de `?lang=xx`, del último elegido en esta web, o del
// navegador. A diferencia de Murdoku, aquí NO se comparte localStorage con el
// juego: GOALÉ es una app nativa de Godot y estas páginas se abren en un
// navegador aparte, así que el juego enlaza con `?lang=` puesto.
//
// ⚠️ El ESPAÑOL es la versión de referencia: si una traducción y el español
// dicen cosas distintas, manda el español (ver la nota "prevalece" al pie de
// cada documento). Al tocar un texto legal hay que actualizar el español
// PRIMERO y luego propagarlo a los 11 restantes.
//
// ⚠️ Y LO QUE AQUÍ SE DICE TIENE QUE SER VERDAD EN EL CÓDIGO. Comprobado el
// 13-09-2026 contra el repositorio del juego y contra el VPS:
//   - `AccountStore` (columnas, correo solo verificado, borrado de cuentas
//     vacías a las 6 h), `MailSender` / `MailQuota` (qué recibe Brevo y qué se
//     queda en memoria), `GameServer` (el árbitro NO recibe la IP: le llega
//     127.0.0.1 desde nginx), `TournamentStore` (cuadros terminados: 7 días,
//     salvo copas), `TeamStore` (qué queda en el aparato).
//   - El nginx del VPS: el registro de accesos está apagado para /ws; solo el
//     registro de errores anota la IP si rechaza una conexión; rota semanal ×4.
//   - `export_presets.cfg` + el manifiesto de la APK (permisos) y el kit de
//     Google AdMob (lo que declara Google que recoge y comparte).
// Si algún día cambia cualquiera de esas cosas, este archivo se actualiza EN
// EL MISMO commit.
//
// LA VERSIÓN DEL 13-09-2026 describe los anuncios y la pregunta de la edad.
// NO SE PUBLICA hasta que el juego que los lleva esté hecho y subido.

export const LEGAL_LANGS = [
  "es", "en", "zh", "ja", "de", "fr", "it", "pt", "pl", "ko", "hi", "sv"
];

export const LEGAL_LANG_LABELS = {
  "es": "Español",
  "en": "English",
  "zh": "中文",
  "ja": "日本語",
  "de": "Deutsch",
  "fr": "Français",
  "it": "Italiano",
  "pt": "Português (BR)",
  "pl": "Polski",
  "ko": "한국어",
  "hi": "हिन्दी",
  "sv": "Svenska"
};

export const LEGAL_UI = {
  "es": { "picker": "Idioma", "prevails": "Este documento está disponible en varios idiomas. En caso de discrepancia entre versiones, prevalece la versión en español." },
  "en": { "picker": "Language", "prevails": "This document is available in several languages. In case of any discrepancy between versions, the Spanish version prevails." },
  "zh": { "picker": "语言", "prevails": "本文件提供多种语言版本。如各版本之间存在差异，以西班牙语版本为准。" },
  "ja": { "picker": "言語", "prevails": "本書は複数の言語で提供されています。各版に相違がある場合は、スペイン語版が優先されます。" },
  "de": { "picker": "Sprache", "prevails": "Dieses Dokument liegt in mehreren Sprachen vor. Bei Abweichungen zwischen den Fassungen ist die spanische Fassung maßgeblich." },
  "fr": { "picker": "Langue", "prevails": "Ce document est disponible en plusieurs langues. En cas de divergence entre les versions, la version espagnole prévaut." },
  "it": { "picker": "Lingua", "prevails": "Questo documento è disponibile in più lingue. In caso di discrepanza tra le versioni, prevale la versione spagnola." },
  "pt": { "picker": "Idioma", "prevails": "Este documento está disponível em vários idiomas. Em caso de divergência entre as versões, prevalece a versão em espanhol." },
  "pl": { "picker": "Język", "prevails": "Ten dokument jest dostępny w kilku językach. W razie rozbieżności między wersjami rozstrzygająca jest wersja hiszpańska." },
  "ko": { "picker": "언어", "prevails": "본 문서는 여러 언어로 제공됩니다. 각 版 간에 차이가 있는 경우 스페인어 版이 우선합니다." },
  "hi": { "picker": "भाषा", "prevails": "यह दस्तावेज़ कई भाषाओं में उपलब्ध है। संस्करणों के बीच किसी भी विसंगति की स्थिति में, स्पेनिश संस्करण मान्य होगा।" },
  "sv": { "picker": "Språk", "prevails": "Detta dokument finns på flera språk. Vid avvikelser mellan versionerna gäller den spanska versionen." }
};

export const LEGAL_LINKS = {
  "mail": "sergio.gonzalez.sy@gmail.com",
  "gPrivacy": "https://policies.google.com/privacy",
  "gPartners": "https://policies.google.com/technologies/partner-sites"
};

// ---------------------------------------------------------------------
// POLÍTICA DE PRIVACIDAD
// ---------------------------------------------------------------------
export const PRIVACY = {
"es": {
 "title": "Política de Privacidad de GOALÉ",
 "updated": "Última actualización: 13 de septiembre de 2026",
 "intro": "Esta política explica qué datos se recogen al usar <strong>GOALÉ</strong> (el \"juego\"), un juego de fútbol por rondas desarrollado de forma independiente por Sergio González (\"nosotros\", \"el desarrollador\"). Al usar el juego, aceptas las prácticas descritas aquí.",
 "sumH": "Resumen rápido",
 "sum": [
  "<strong>Si juegas contra la máquina, a nuestro servidor no le llega nada.</strong> Tu equipo, tu escudo y tus estadísticas se quedan en tu aparato.",
  "<strong>En Android, el juego muestra un anuncio de Google AdMob al terminar cada partido.</strong> Para servirlo, Google recibe datos técnicos de tu aparato, como tu dirección IP y el identificador de publicidad (sección 6).",
  "La primera vez que abres el juego en Android te pedimos tu <strong>fecha de nacimiento</strong>. <strong>No sale de tu aparato</strong>: solo sirve para que, si tienes menos de 16 años, los anuncios sean aptos para menores y nunca personalizados.",
  "Para jugar <strong>en línea</strong> necesitas una cuenta: escribes tu <strong>correo</strong>, te enviamos un código de seis cifras y eliges un <strong>alias</strong>. No hay contraseña.",
  "En esa cuenta guardamos lo que el modo en línea necesita: tu correo, tu alias, tu nombre de club, el aspecto de tu equipo, tu ELO, tus partidos y tu palmarés de torneos.",
  "Puedes <strong>borrar tu cuenta desde el propio juego</strong>, en AJUSTES → VER MI CUENTA → BORRAR MI CUENTA.",
  "<strong>No vendemos tus datos</strong>, y el juego no tiene chat ni ninguna forma de enviar texto libre a otros jugadores."
 ],
 "s1": {
  "h": "1. Datos que el juego guarda en tu propio aparato",
  "p": "GOALÉ guarda en el almacenamiento privado de la aplicación tu equipo (nombre del club, equipación, escudo, y el nombre y aspecto de tus tres futbolistas), tus estadísticas, tus ajustes (idioma, mano y dificultad), si ya has visto el tutorial y, si juegas en línea, la clave secreta de tu cuenta. En Android guarda además tu <strong>fecha de nacimiento</strong>. Estos datos:",
  "li": [
   "No salen de tu aparato mientras juegas contra la máquina.",
   "<strong>La fecha de nacimiento nunca sale de tu aparato.</strong> Solo se usa para decidir qué tipo de anuncio se pide. Si tienes menos de 16 años, lo único que llega a Google es la indicación de que esa petición de anuncio debe tratarse como la de un menor.",
   "Mientras esperas el código de registro, tu aparato recuerda el correo que escribiste, para no perderlo si sales a mirar tu bandeja. Se olvida al entrar o al cambiar de correo.",
   "Se borran del todo si desinstalas el juego o borras sus datos desde los ajustes del sistema."
  ],
  "p2": "En Android, el juego pide los permisos <code>INTERNET</code> y <code>ACCESS_NETWORK_STATE</code>, para jugar en línea y cargar los anuncios, y <code>VIBRATE</code>, para la vibración. El kit de anuncios de Google añade <code>AD_ID</code>, los permisos de la plataforma de privacidad de Android (<code>ACCESS_ADSERVICES_AD_ID</code>, <code>ACCESS_ADSERVICES_ATTRIBUTION</code> y <code>ACCESS_ADSERVICES_TOPICS</code>), <code>WAKE_LOCK</code> y <code>FOREGROUND_SERVICE</code>. El juego no pide cámara, micrófono, ubicación, contactos ni acceso a tus archivos.",
  "p3": "<strong>La versión de ordenador no tiene anuncios</strong>: no pregunta la edad y no lleva ningún kit de anuncios."
 },
 "s2": {
  "h": "2. Tu cuenta de GOALÉ (solo si juegas en línea)",
  "p": "Al entrar por primera vez en el modo en línea, el servidor crea una cuenta con un identificador aleatorio, y tu aparato guarda una clave secreta para volver a entrar en ella. Para jugar te pedimos un <strong>correo electrónico</strong>: te enviamos un código de seis cifras que caduca a los 15 minutos y, al escribirlo, ese correo queda unido a tu cuenta. <strong>No hay contraseña.</strong> Después eliges tu alias. En nuestro servidor se guarda:",
  "li": [
   "El identificador aleatorio de la cuenta y la fecha en que se creó.",
   "Tu <strong>correo electrónico</strong>, y solo después de haberlo verificado con el código. Sirve para una sola cosa: que puedas volver a entrar en tu cuenta desde otro aparato, por ejemplo si pierdes el móvil. <strong>No te enviamos publicidad ni boletines</strong>, y ningún otro jugador lo ve.",
   "Tu <strong>alias</strong>, que es como te llaman a ti — no a tu club — en la clasificación y en los cuadros de torneo. Lo eliges la primera vez que entras al modo en línea y <strong>no se puede cambiar después</strong>: un nombre que cambia cada tarde no significaría nada en una clasificación. Dos jugadores no pueden tener el mismo alias.",
   "El <strong>nombre de tu club</strong>, que es el que ven tus rivales. Lo eliges tú en MI EQUIPO y puedes cambiarlo cuando quieras.",
   "El aspecto de tu club: la equipación, el escudo y el nombre y aspecto de tus tres futbolistas. Esto es lo que hace que tu rival te vea como te has vestido, y que tu equipo te siga si juegas desde otro aparato.",
   "Tu <strong>ELO</strong> y tus contadores de juego: partidos jugados, ganados y empatados, tu racha actual y la mejor que hayas tenido.",
   "Tu <strong>palmarés de torneos</strong>: cuántos has jugado, cuántos has ganado, en cuántos fuiste finalista y en cuántos subiste al podio.",
   "La <strong>bandera</strong> que hayas elegido en tu perfil, si eliges alguna. Es opcional, la eliges tú a mano de una lista y puedes cambiarla cuando quieras: <strong>no se deduce de tu conexión, de tu aparato ni del idioma de tu móvil</strong>.",
   "El <strong>nombre comercial de cada aparato</strong> vinculado a la cuenta (por ejemplo, \"OnePlus Nord 3 5G\") y la fecha en que se vinculó, para que puedas reconocerlos en la lista y desvincular el que hayas perdido.",
   "Si tienes el <strong>pack premium</strong>: que lo tienes, de dónde vino y la fecha (sección 5)."
  ],
  "p2": "<strong>La clave secreta de tu aparato no se guarda en el servidor.</strong> Solo se guarda su huella criptográfica (SHA-256), que sirve para comprobarla pero no permite reconstruirla: alguien que se llevara una copia entera de nuestra base de datos no podría entrar en ninguna cuenta con ella.",
  "p3": "<strong>Para enviarte el código usamos Brevo</strong> (Sendinblue SAS, París, Francia), un servicio de envío de correos con servidores en la Unión Europea. Brevo recibe tu dirección y el mensaje con el código, lo trata por encargo nuestro solo para entregarlo, y conserva un registro de cada envío durante 1 mes. En nuestro servidor, el código vive solo en memoria hasta que lo usas o caduca, nunca en la base de datos. Para frenar abusos, el servidor recuerda también en memoria, durante 24 horas, a qué direcciones se ha enviado un código y cuándo.",
  "p4": "<strong>No usamos tu cuenta de Google, ni Google Play Games, ni ninguna red social</strong> para identificarte. La cuenta de GOALÉ solo existe dentro de GOALÉ."
 },
 "s3": {
  "h": "3. Partidas en línea y clasificación",
  "p": "Mientras juegas una partida en línea, tu aparato envía al servidor las órdenes de cada ronda (qué jugador mueve, adónde, y qué hace con el balón). El servidor las necesita para arbitrar la partida y para que los dos jugadores vean exactamente lo mismo. <strong>Esas órdenes viven lo que dura la partida y no se guardan después</strong>: cuando la sala se cierra, desaparecen.",
  "p2": "Al terminar una partida <strong>emparejada</strong> se actualizan tu ELO y tu contador de partidos. Las partidas con código de sala — las que juegas con alguien que conoces — <strong>no puntúan</strong> y no dejan ningún registro.",
  "p3": "<strong>El servidor del juego no recibe tu dirección IP.</strong> Te conectas a través de un intermediario cifrado (nginx) que funciona en la misma máquina. Es el único que ve tu dirección, y la usa para limitar cuántas conexiones puede abrir una misma dirección, que es lo que frena los ataques. Ese intermediario <strong>no guarda un registro de tus conexiones al juego</strong>: solo si rechaza una conexión por superar esos límites, o se produce un error, anota la dirección en el registro de errores del servidor, que se borra solo en unas cinco semanas.",
  "p4": "Si juegas un <strong>torneo</strong> o la <strong>copa semanal</strong>, el servidor guarda el cuadro mientras esa competición existe: en tu plaza quedan tu alias, tu bandera, tu ELO y el aspecto de tu club, y el resultado de cada cruce. Los cuadros ya terminados se borran del servidor una semana después de crearse, salvo los de la copa semanal, que se conservan porque son el palmarés de sus campeones."
 },
 "s4": {
  "h": "4. Jugar en varios aparatos y recuperar tu cuenta",
  "p": "Puedes usar la misma cuenta en el móvil y en el ordenador. Para ello, el aparato que ya está dentro genera un <strong>código de ocho caracteres que caduca a los dos minutos</strong>, y el aparato nuevo lo teclea. El primero tiene que aceptar la petición. Esos códigos <strong>viven solo en la memoria del servidor</strong>, no se guardan en la base de datos y caducan también tras tres intentos fallidos.",
  "p2": "<strong>Si pierdes tu aparato</strong>, puedes recuperar tu cuenta desde otro escribiendo tu correo: te llega un código y, al escribirlo, el aparato nuevo entra en tu cuenta con tu alias, tu ELO y tu palmarés. Desde la lista de aparatos puedes desvincular el que hayas perdido."
 },
 "s5": {
  "h": "5. Compras dentro del juego",
  "p": "GOALÉ tiene un único producto de pago opcional, el pack premium, que desbloquea contenido de personalización (celebraciones, peinados, colores de equipación y piezas de escudo) y quita los anuncios. No afecta a las reglas del juego ni da ninguna ventaja deportiva.",
  "p2": "<strong>Hoy todavía no se puede comprar</strong>: la tienda del juego lo indica como PRÓXIMAMENTE. Cuando esté disponible, <strong>el cobro lo hará íntegramente Google Play o Steam</strong>: el juego nunca verá tu tarjeta, tu dirección ni tus datos de facturación, y nosotros no los recibiremos ni los guardaremos. En tu cuenta de GOALÉ solo quedará que la compra existe, de qué tienda vino, la fecha y una <strong>huella criptográfica</strong> del comprobante, nunca el comprobante en claro. Esa huella es lo que permite recuperar el contenido si cambias de aparato, y que una compra valga para una sola cuenta.",
  "p3": "El tratamiento de tus datos de pago por parte de Google se rige por su propia política de privacidad: {gPrivacy}."
 },
 "s6": {
  "h": "6. Anuncios (Google AdMob)",
  "p": "La versión de Android de GOALÉ es gratuita y muestra <strong>un anuncio a pantalla completa al terminar cada partido</strong>, que puedes cerrar. No hay anuncios en el partido guiado del tutorial, ni en la versión de ordenador, ni para quien tenga el pack premium. Los anuncios los sirve <strong>Google AdMob</strong>. Para ello, el kit de anuncios de Google que va dentro del juego recoge y envía a Google:",
  "li": [
   "Tu <strong>dirección IP</strong>, que puede usarse para estimar tu ubicación aproximada.",
   "El <strong>identificador de publicidad</strong> de Android y el identificador del conjunto de apps (app set ID).",
   "Tus interacciones con la app y con los anuncios, como abrir la app, tocar un anuncio o ver un vídeo.",
   "Información de diagnóstico, como el tiempo de arranque y el rendimiento de la app y del propio kit."
  ],
  "p2": "Google usa estos datos para mostrar y medir los anuncios y para prevenir el fraude, según su propia política de privacidad: {gPrivacy}. Puedes ver cómo usa Google la información de las apps que usan sus servicios en {gPartners}. <strong>Nosotros no recibimos esos datos</strong>: en AdMob solo vemos cifras agregadas, como cuántos anuncios se han mostrado. Aparte de este kit, el juego no incorpora ninguna herramienta de analítica ni de informes de fallos.",
  "p3": "<strong>Si estás en el Espacio Económico Europeo, el Reino Unido o Suiza y tienes 16 años o más</strong>, antes del primer anuncio verás el formulario de consentimiento de Google, donde eliges si aceptas anuncios personalizados. Si no los aceptas, los anuncios no serán personalizados. Puedes cambiar tu elección cuando quieras desde AJUSTES.",
  "p4": "<strong>Si tienes menos de 16 años</strong>, las peticiones de anuncio se marcan como dirigidas a menores: los anuncios son aptos para todos los públicos, no son personalizados y Google no recibe el identificador de publicidad. En cualquier caso, puedes restablecer o eliminar tu identificador de publicidad desde los ajustes de Android."
 },
 "s7": {
  "h": "7. Dónde se guardan los datos y cuánto tiempo",
  "p": "El servidor de GOALÉ es un servidor privado alojado en <strong>OVHcloud (Francia, Unión Europea)</strong>, gestionado únicamente por el desarrollador. Los datos se guardan en un fichero de base de datos SQLite en ese servidor. Toda la comunicación entre el juego y el servidor va <strong>cifrada (TLS / wss://)</strong>. Cuánto tiempo se conserva cada cosa:",
  "li": [
   "<strong>Tu cuenta</strong>: mientras exista. No hay borrado por inactividad, porque es lo que hace que tu equipo y tu palmarés sigan ahí cuando vuelvas. Se borra en cuanto lo pidas (sección 8).",
   "<strong>Una cuenta que nunca llegó a usarse</strong> (sin correo, sin alias, sin partidos, sin club guardado y sin compra): se borra sola a las 6 horas.",
   "<strong>Los cuadros de torneo terminados</strong>: una semana; los de la copa semanal se conservan.",
   "<strong>Los códigos de registro y de vinculación</strong>: solo en memoria, hasta que se usan o caducan (15 minutos y 2 minutos).",
   "<strong>El registro de errores</strong> del intermediario de conexiones: unas cinco semanas.",
   "<strong>Brevo</strong>: el registro de cada correo enviado, 1 mes.",
   "<strong>Google</strong>: los datos de anuncios, según su propia política."
  ],
  "p3": "No vendemos ni alquilamos tus datos. Aparte de Brevo, que envía los códigos por encargo nuestro, y de Google, que sirve los anuncios, nadie más recibe datos del juego, y nadie más tiene acceso a nuestra base de datos."
 },
 "s8": {
  "h": "8. Tus derechos y cómo borrar tu cuenta",
  "p": "Según el Reglamento General de Protección de Datos (RGPD), tienes derecho a acceder a tus datos, corregirlos, borrarlos, limitar su tratamiento, oponerte a él y obtener una copia portable. Para ejercerlos, escribe a la dirección del recuadro de abajo <strong>desde el correo de tu cuenta</strong>, indicando tu alias.",
  "p2": "<strong>Puedes borrar tu cuenta desde el propio juego</strong>, en AJUSTES → VER MI CUENTA → BORRAR MI CUENTA: se borra en el momento. Si ya no puedes entrar en el juego, sigue las instrucciones de la página <a href=\"./eliminar-datos.html\">Eliminar mis datos</a>. Desinstalar el juego borra todo lo que hay en tu aparato.",
  "p3": "Responderemos a cualquier solicitud en un plazo máximo de 30 días. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">aepd.es</a>)."
 },
 "s9": {
  "h": "9. Menores de edad",
  "p": "GOALÉ está pensado para jugadores a partir de 13 años. La primera vez que abres el juego en Android te pedimos tu fecha de nacimiento, sin sugerirte ninguna edad, y la guardamos solo en tu aparato. <strong>Si tienes menos de 16 años, los anuncios que ves son aptos para menores y no personalizados</strong> (sección 6).",
  "p2": "El modo en línea no tiene chat ni ninguna forma de que dos jugadores intercambien texto libre: lo único que un rival ve de ti es tu alias, el nombre de tu club, la bandera que hayas elegido y el aspecto de tu equipo. Tu correo no lo ve nadie.",
  "p3": "Si eres madre, padre o tutor y crees que un menor a tu cargo ha creado una cuenta, escríbenos y la borraremos."
 },
 "s10": {
  "h": "10. Cambios en esta política",
  "p": "Si esta política cambia, se actualizará la fecha del encabezado y la nueva versión estará disponible en esta misma dirección. Si el cambio afectara a qué datos se recogen o para qué, se avisará dentro del propio juego antes de que entre en vigor.",
  "p2": "El historial completo de cambios de esta página es público y se puede consultar en el repositorio donde vive: cualquiera puede ver qué decía antes y qué dice ahora."
 },
 "contact": {
  "h": "Contacto",
  "p": "Para cualquier duda sobre privacidad, o para ejercer tus derechos:"
 }
},
"en": {
 "title": "GOALÉ Privacy Policy",
 "updated": "Last updated: 13 September 2026",
 "intro": "This policy explains what data is collected when you use <strong>GOALÉ</strong> (the \"game\"), a round-based football game developed independently by Sergio González (\"we\", \"the developer\"). By using the game, you accept the practices described here.",
 "sumH": "Quick summary",
 "sum": [
  "<strong>If you play against the computer, nothing reaches our server.</strong> Your team, your crest and your stats stay on your device.",
  "<strong>On Android, the game shows a Google AdMob ad at the end of each match.</strong> To serve it, Google receives technical data from your device, such as your IP address and advertising identifier (section 6).",
  "The first time you open the game on Android, we ask for your <strong>date of birth</strong>. <strong>It never leaves your device</strong>: it is only used so that, if you are under 16, ads are suitable for minors and never personalised.",
  "To play <strong>online</strong> you need an account: you enter your <strong>email</strong>, we send you a six-digit code, and you choose an <strong>alias</strong>. There is no password.",
  "That account holds what online play needs: your email, your alias, your club name, your team's appearance, your ELO, your matches and your tournament record.",
  "You can <strong>delete your account from inside the game</strong>, in SETTINGS → VIEW MY ACCOUNT → DELETE MY ACCOUNT.",
  "<strong>We do not sell your data</strong>, and the game has no chat and no way to send free text to other players."
 ],
 "s1": {
  "h": "1. Data the game stores on your own device",
  "p": "GOALÉ stores in the app's private storage your team (club name, kit, crest, and the name and look of your three footballers), your stats, your settings (language, handedness and difficulty), whether you have seen the tutorial and, if you play online, your account's secret key. On Android it also stores your <strong>date of birth</strong>. This data:",
  "li": [
   "Never leaves your device while you play against the computer.",
   "<strong>Your date of birth never leaves your device.</strong> It is only used to decide what kind of ad to request. If you are under 16, all Google receives is the indication that the ad request must be treated as one for a minor.",
   "While you wait for your sign-up code, your device remembers the email you typed, so it is not lost if you leave to check your inbox. It is forgotten once you sign in or change the email.",
   "Is deleted entirely if you uninstall the game or clear its data from the system settings."
  ],
  "p2": "On Android, the game requests the <code>INTERNET</code> and <code>ACCESS_NETWORK_STATE</code> permissions, for online play and to load ads, and <code>VIBRATE</code>, for haptic feedback. Google's ads kit adds <code>AD_ID</code>, the Android Privacy Sandbox permissions (<code>ACCESS_ADSERVICES_AD_ID</code>, <code>ACCESS_ADSERVICES_ATTRIBUTION</code> and <code>ACCESS_ADSERVICES_TOPICS</code>), <code>WAKE_LOCK</code> and <code>FOREGROUND_SERVICE</code>. The game does not request camera, microphone, location, contacts or access to your files.",
  "p3": "<strong>The desktop version has no ads</strong>: it does not ask for your age and contains no ads kit."
 },
 "s2": {
  "h": "2. Your GOALÉ account (only if you play online)",
  "p": "The first time you enter online play, the server creates an account with a random identifier, and your device stores a secret key to get back into it. To play, we ask for an <strong>email address</strong>: we send you a six-digit code that expires after 15 minutes and, once you enter it, that email is tied to your account. <strong>There is no password.</strong> Then you choose your alias. Our server stores:",
  "li": [
   "The account's random identifier and the date it was created.",
   "Your <strong>email address</strong>, and only after you have verified it with the code. It has one purpose: letting you get back into your account from another device, for example if you lose your phone. <strong>We do not send you advertising or newsletters</strong>, and no other player can see it.",
   "Your <strong>alias</strong>, which is what you — not your club — are called in the ranking and in tournament brackets. You choose it the first time you enter online play and <strong>it cannot be changed afterwards</strong>: a name that changes every afternoon would mean nothing in a ranking. No two players can have the same alias.",
   "Your <strong>club name</strong>, which is what your opponents see. You choose it in MY TEAM and can change it whenever you like.",
   "Your club's appearance: the kit, the crest, and the name and look of your three footballers. This is what lets your opponent see you as you dressed, and lets your team follow you if you play from another device.",
   "Your <strong>ELO</strong> and your game counters: matches played, won and drawn, your current streak and the best streak you have had.",
   "Your <strong>tournament record</strong>: how many you have played, how many you have won, in how many you were runner-up and in how many you reached the podium.",
   "The <strong>flag</strong> you have chosen in your profile, if you choose one. It is optional, you pick it by hand from a list and you can change it whenever you like: <strong>it is not inferred from your connection, your device or your phone's language</strong>.",
   "The <strong>commercial name of each device</strong> linked to the account (for example, \"OnePlus Nord 3 5G\") and the date it was linked, so you can recognise them in the list and unlink one you have lost.",
   "If you own the <strong>premium pack</strong>: that you own it, where it came from and the date (section 5)."
  ],
  "p2": "<strong>Your device's secret key is not stored on the server.</strong> Only its cryptographic hash (SHA-256) is kept, which can verify the key but cannot reconstruct it: someone who walked off with a complete copy of our database could not get into a single account with it.",
  "p3": "<strong>To send you the code we use Brevo</strong> (Sendinblue SAS, Paris, France), an email delivery service with servers in the European Union. Brevo receives your address and the message containing the code, processes it on our behalf solely to deliver it, and keeps a log of each delivery for 1 month. On our server, the code lives only in memory until you use it or it expires, never in the database. To curb abuse, the server also remembers in memory, for 24 hours, which addresses a code was sent to and when.",
  "p4": "<strong>We do not use your Google account, Google Play Games, or any social network</strong> to identify you. Your GOALÉ account exists only inside GOALÉ."
 },
 "s3": {
  "h": "3. Online matches and ranking",
  "p": "While you play an online match, your device sends the server your orders for each round (which player moves, where to, and what they do with the ball). The server needs them to referee the match and to make sure both players see exactly the same thing. <strong>Those orders live only as long as the match and are not kept afterwards</strong>: when the room closes, they are gone.",
  "p2": "When a <strong>matchmade</strong> game ends, your ELO and match counters are updated. Games played with a room code — the ones you play with someone you know — <strong>do not count towards the ranking</strong> and leave no record.",
  "p3": "<strong>The game server does not receive your IP address.</strong> You connect through an encrypted intermediary (nginx) running on the same machine. It is the only part that sees your address, and it uses it to limit how many connections a single address can open, which is what stops attacks. That intermediary <strong>does not keep a log of your connections to the game</strong>: only if it rejects a connection for exceeding those limits, or an error occurs, does it write the address to the server's error log, which deletes itself after about five weeks.",
  "p4": "If you play a <strong>tournament</strong> or the <strong>weekly cup</strong>, the server keeps the bracket for as long as that competition exists: your seat holds your alias, your flag, your ELO and your club's appearance, along with the result of each tie. Finished brackets are deleted from the server one week after they were created, except those of the weekly cup, which are kept because they are their champions' record."
 },
 "s4": {
  "h": "4. Playing on several devices and recovering your account",
  "p": "You can use the same account on your phone and on your computer. To do that, the device that is already signed in generates an <strong>eight-character code that expires after two minutes</strong>, and the new device types it in. The first device has to approve the request. Those codes <strong>live only in the server's memory</strong>, are never written to the database, and also expire after three failed attempts.",
  "p2": "<strong>If you lose your device</strong>, you can recover your account from another one by entering your email: you receive a code and, once you enter it, the new device gets into your account with your alias, your ELO and your record. From the device list you can unlink the one you lost."
 },
 "s5": {
  "h": "5. In-game purchases",
  "p": "GOALÉ has a single optional paid product, the premium pack, which unlocks customisation content (celebrations, hairstyles, kit colours and crest parts) and removes ads. It does not affect the rules of the game and gives no sporting advantage.",
  "p2": "<strong>It cannot be bought yet</strong>: the in-game store shows it as COMING SOON. When it becomes available, <strong>payment will be handled entirely by Google Play or Steam</strong>: the game will never see your card, your address or your billing details, and we will neither receive nor store them. Your GOALÉ account will only hold that the purchase exists, which store it came from, the date, and a <strong>cryptographic hash</strong> of the receipt, never the receipt itself. That hash is what lets you recover the content if you change devices, and what makes one purchase count for exactly one account.",
  "p3": "Google's handling of your payment data is governed by its own privacy policy: {gPrivacy}."
 },
 "s6": {
  "h": "6. Ads (Google AdMob)",
  "p": "The Android version of GOALÉ is free and shows <strong>one full-screen ad at the end of each match</strong>, which you can close. There are no ads in the guided tutorial match, in the desktop version, or for anyone who owns the premium pack. Ads are served by <strong>Google AdMob</strong>. To do so, Google's ads kit inside the game collects and sends to Google:",
  "li": [
   "Your <strong>IP address</strong>, which may be used to estimate your approximate location.",
   "The Android <strong>advertising identifier</strong> and the app set ID.",
   "Your interactions with the app and with ads, such as opening the app, tapping an ad or watching a video.",
   "Diagnostic information, such as launch time and the performance of the app and of the kit itself."
  ],
  "p2": "Google uses this data to show and measure ads and to prevent fraud, under its own privacy policy: {gPrivacy}. You can see how Google uses information from apps that use its services at {gPartners}. <strong>We do not receive that data</strong>: in AdMob we only see aggregate figures, such as how many ads were shown. Apart from this kit, the game contains no analytics or crash-reporting tools.",
  "p3": "<strong>If you are in the European Economic Area, the United Kingdom or Switzerland and are 16 or older</strong>, before the first ad you will see Google's consent form, where you choose whether to accept personalised ads. If you do not accept them, ads will not be personalised. You can change your choice at any time from SETTINGS.",
  "p4": "<strong>If you are under 16</strong>, ad requests are tagged as directed at minors: ads are suitable for all audiences, are not personalised, and Google does not receive the advertising identifier. In any case, you can reset or delete your advertising identifier from the Android settings."
 },
 "s7": {
  "h": "7. Where data is stored and for how long",
  "p": "The GOALÉ server is a private server hosted at <strong>OVHcloud (France, European Union)</strong> and managed solely by the developer. Data is stored in a SQLite database file on that server. All communication between the game and the server is <strong>encrypted (TLS / wss://)</strong>. How long each thing is kept:",
  "li": [
   "<strong>Your account</strong>: for as long as it exists. There is no deletion for inactivity, because that is what keeps your team and your record waiting for you when you come back. It is deleted as soon as you ask (section 8).",
   "<strong>An account that was never used</strong> (no email, no alias, no matches, no saved club and no purchase): deleted automatically after 6 hours.",
   "<strong>Finished tournament brackets</strong>: one week; weekly cup brackets are kept.",
   "<strong>Sign-up and device-linking codes</strong>: in memory only, until used or expired (15 minutes and 2 minutes).",
   "<strong>The error log</strong> of the connection intermediary: about five weeks.",
   "<strong>Brevo</strong>: the log of each email sent, 1 month.",
   "<strong>Google</strong>: ad data, under its own policy."
  ],
  "p3": "We do not sell or rent your data. Apart from Brevo, which sends the codes on our behalf, and Google, which serves the ads, nobody else receives data from the game, and nobody else has access to our database."
 },
 "s8": {
  "h": "8. Your rights and how to delete your account",
  "p": "Under the General Data Protection Regulation (GDPR) you have the right to access your data, correct it, delete it, restrict its processing, object to it, and obtain a portable copy. To exercise these rights, write to the address in the box below <strong>from your account's email</strong>, stating your alias.",
  "p2": "<strong>You can delete your account from inside the game</strong>, in SETTINGS → VIEW MY ACCOUNT → DELETE MY ACCOUNT: it is deleted immediately. If you can no longer get into the game, follow the instructions on the <a href=\"./eliminar-datos.html\">Delete my data</a> page. Uninstalling the game deletes everything held on your device.",
  "p3": "We will respond to any request within 30 days at most. You may also lodge a complaint with the Spanish Data Protection Agency (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">aepd.es</a>)."
 },
 "s9": {
  "h": "9. Children",
  "p": "GOALÉ is intended for players aged 13 and over. The first time you open the game on Android, we ask for your date of birth without suggesting any age, and we store it only on your device. <strong>If you are under 16, the ads you see are suitable for minors and not personalised</strong> (section 6).",
  "p2": "Online play has no chat and no way for two players to exchange free text: all an opponent sees of you is your alias, your club name, the flag you have chosen and your team's appearance. Nobody can see your email.",
  "p3": "If you are a parent or guardian and believe a child in your care has created an account, write to us and we will delete it."
 },
 "s10": {
  "h": "10. Changes to this policy",
  "p": "If this policy changes, the date in the header will be updated and the new version will be available at this same address. If a change affected what data is collected or why, notice will be given inside the game itself before it takes effect.",
  "p2": "The full change history of this page is public and can be consulted in the repository where it lives: anyone can see what it used to say and what it says now."
 },
 "contact": {
  "h": "Contact",
  "p": "For any privacy question, or to exercise your rights:"
 }
}
};

// ---------------------------------------------------------------------
// ELIMINAR MIS DATOS
//
// Google Play EXIGE una dirección pública donde se explique cómo borrar la
// cuenta, y que sea alcanzable sin instalar nada. Por eso es una página propia
// y no un párrafo dentro de la política.
// ---------------------------------------------------------------------
export const ERASE = {
"es": {
 "title": "Eliminar mis datos de GOALÉ",
 "updated": "Última actualización: 13 de septiembre de 2026",
 "intro": "Esta página explica cómo borrar los datos de <strong>GOALÉ</strong>. Hay dos sitios donde puede haber datos tuyos, tu aparato y nuestro servidor, y se borran por separado.",
 "s1": {
  "h": "1. Lo que hay en tu aparato",
  "p": "Tu equipo, tu escudo, tus estadísticas, tus ajustes y, en Android, tu fecha de nacimiento están en el almacenamiento privado del juego. Para borrarlo todo no necesitas pedirnos nada:",
  "li": [
   "<strong>Android</strong>: Ajustes → Aplicaciones → GOALÉ → Almacenamiento → Borrar datos. O sencillamente desinstala el juego.",
   "<strong>Ordenador</strong>: desinstala el juego y borra su carpeta de datos de usuario."
  ],
  "p2": "Esto es instantáneo y definitivo. <strong>Ojo</strong>: borra también la clave de tu cuenta en ese aparato. La cuenta sigue en el servidor, y puedes volver a entrar en ella escribiendo tu correo. Como se borra tu fecha de nacimiento, el juego volverá a preguntarla."
 },
 "s2": {
  "h": "2. Si nunca has jugado en línea",
  "p": "Si solo has jugado contra la máquina, <strong>nuestro servidor no tiene ningún dato tuyo</strong>: nada salió de tu aparato hacia nosotros. Si has visto anuncios en Android, Google tiene los datos que describe la sección 6 de la política de privacidad; puedes restablecer o eliminar tu identificador de publicidad desde los ajustes de Android."
 },
 "s3": {
  "h": "3. Borrar tu cuenta del servidor",
  "p": "<strong>La forma más rápida es desde el propio juego</strong>: AJUSTES → VER MI CUENTA → BORRAR MI CUENTA. Después de confirmar, la cuenta se borra en el momento.",
  "p2": "Si ya no puedes entrar en el juego, escríbenos a la dirección del recuadro <strong>desde el correo de tu cuenta</strong>, con el asunto <strong>\"Borrar mi cuenta\"</strong> e indicando tu alias. Si nos escribes desde otra dirección, podemos pedirte que confirmes que la cuenta es tuya, para que nadie pueda borrar la cuenta de otro."
 },
 "s4": {
  "h": "4. Qué se borra exactamente",
  "p": "Al borrar tu cuenta desaparecen del servidor, de forma inmediata y sin copia:",
  "li": [
   "El identificador de la cuenta y su fecha de creación.",
   "Tu correo electrónico.",
   "Tu alias, tu nombre de club, el aspecto guardado de tu equipo y la bandera que hubieras elegido.",
   "Tu ELO, tus contadores de partidos y tu palmarés de torneos.",
   "Tu nombre y tu club en los cuadros de torneo: si estabas en uno en juego, tu plaza pasa a la máquina para que los demás puedan terminarlo. Y tu inscripción en la copa semanal.",
   "Todos los aparatos vinculados y sus huellas.",
   "El registro de tu compra, si la hubiera."
  ],
  "p2": "<strong>Esto no se puede deshacer.</strong> Cuando el pack premium se pueda comprar, al borrarse el registro de la compra el contenido de pago dejará de estar asociado a esa cuenta; podrás recuperarlo en una cuenta nueva restaurando la compra desde Google Play o Steam, porque la compra es de tu cuenta de la tienda y no de la nuestra."
 },
 "s5": {
  "h": "5. Plazos",
  "p": "Desde el juego, el borrado es <strong>inmediato</strong>. Por correo, respondemos y lo ejecutamos en un plazo máximo de <strong>30 días</strong>, y en la práctica en mucho menos; te confirmaremos por correo cuando esté hecho."
 },
 "keep": {
  "h": "6. Lo que no se conserva, y lo que queda fuera de nuestro servidor",
  "p": "No hace falta que pidas nada para esto: nuestro servidor de juego no guarda tu dirección IP ni registros de tus conexiones, ni las órdenes de tus partidas una vez terminadas, ni ningún dato de tu tarjeta, y los códigos de registro viven solo en memoria. Fuera de la base de datos quedan, y se borran solos: el registro de errores del intermediario de conexiones (unas cinco semanas, y solo si rechazó una conexión tuya), el registro de envíos de Brevo (1 mes) y los datos de anuncios que tiene Google, según su propia política."
 },
 "help": {
  "h": "Escríbenos",
  "p": "Para borrar tu cuenta o preguntar cualquier cosa sobre tus datos:"
 }
},
"en": {
 "title": "Delete my GOALÉ data",
 "updated": "Last updated: 13 September 2026",
 "intro": "This page explains how to delete your <strong>GOALÉ</strong> data. There are two places where data about you may exist, your device and our server, and they are deleted separately.",
 "s1": {
  "h": "1. What is on your device",
  "p": "Your team, your crest, your stats, your settings and, on Android, your date of birth live in the game's private storage. To delete all of it you need nothing from us:",
  "li": [
   "<strong>Android</strong>: Settings → Apps → GOALÉ → Storage → Clear data. Or simply uninstall the game.",
   "<strong>Desktop</strong>: uninstall the game and delete its user data folder."
  ],
  "p2": "This is immediate and final. <strong>Note</strong>: it also removes your account's key on that device. The account remains on the server, and you can get back into it by entering your email. Since your date of birth is deleted, the game will ask for it again."
 },
 "s2": {
  "h": "2. If you have never played online",
  "p": "If you have only played against the computer, <strong>our server holds no data about you</strong>: nothing left your device towards us. If you have seen ads on Android, Google holds the data described in section 6 of the privacy policy; you can reset or delete your advertising identifier from the Android settings."
 },
 "s3": {
  "h": "3. Deleting your account from the server",
  "p": "<strong>The quickest way is from inside the game</strong>: SETTINGS → VIEW MY ACCOUNT → DELETE MY ACCOUNT. Once you confirm, the account is deleted immediately.",
  "p2": "If you can no longer get into the game, write to the address in the box <strong>from your account's email</strong>, with the subject <strong>\"Delete my account\"</strong> and stating your alias. If you write from a different address, we may ask you to confirm the account is yours, so that nobody can delete someone else's account."
 },
 "s4": {
  "h": "4. Exactly what gets deleted",
  "p": "Deleting your account removes from the server, immediately and with no copy kept:",
  "li": [
   "The account identifier and its creation date.",
   "Your email address.",
   "Your alias, your club name, your team's saved appearance and the flag you had chosen.",
   "Your ELO, your match counters and your tournament record.",
   "Your name and club in tournament brackets: if you were in one still in play, your seat passes to the computer so the others can finish it. And your weekly cup sign-up.",
   "Every linked device and its fingerprint.",
   "The record of your purchase, if there was one."
  ],
  "p2": "<strong>This cannot be undone.</strong> Once the premium pack can be bought, deleting the purchase record will untie the paid content from that account; you will be able to get it back on a new account by restoring the purchase from Google Play or Steam, because the purchase belongs to your store account and not to ours."
 },
 "s5": {
  "h": "5. Timescales",
  "p": "From inside the game, deletion is <strong>immediate</strong>. By email, we respond and carry it out within <strong>30 days</strong> at most, and in practice much sooner; we will confirm by email once it is done."
 },
 "keep": {
  "h": "6. What is not kept, and what remains outside our server",
  "p": "You do not need to ask for any of this: our game server does not store your IP address or logs of your connections, the orders from your matches once they are over, or any of your card details, and sign-up codes live only in memory. Outside the database, and deleted automatically, there remain: the connection intermediary's error log (about five weeks, and only if it rejected a connection of yours), Brevo's delivery log (1 month) and the ad data Google holds under its own policy."
 },
 "help": {
  "h": "Write to us",
  "p": "To delete your account or ask anything about your data:"
 }
}
};
