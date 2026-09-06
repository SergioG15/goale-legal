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
// ⚠️ Y LO QUE AQUÍ SE DICE TIENE QUE SER VERDAD EN EL CÓDIGO. Cada afirmación
// de la sección 1 a la 7 está comprobada contra el repositorio del juego:
// `AccountStore` (qué columnas existen), `GameServer` (qué se recibe y qué se
// guarda), `TeamStore` (qué queda en el aparato) y `export_presets.cfg` (qué
// permisos pide). Si algún día se añade analítica, anuncios o una columna
// nueva, este archivo se actualiza EN EL MISMO commit.

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
 "updated": "Última actualización: 6 de septiembre de 2026",
 "intro": "Esta política explica qué datos se recogen al usar <strong>GOALÉ</strong> (el \"juego\"), un juego de fútbol por turnos desarrollado de forma independiente por Sergio González (\"nosotros\", \"el desarrollador\"). Al usar el juego, aceptas las prácticas descritas aquí.",
 "sumH": "Resumen rápido",
 "sum": [
  "<strong>Si juegas solo contra la máquina, no se nos envía absolutamente nada.</strong> Tu equipo, tu escudo y tus estadísticas se quedan en tu aparato.",
  "<strong>No hay anuncios, ni analítica, ni ningún SDK de terceros</strong> dentro del juego. No sabemos cuánto juegas, ni desde dónde, ni qué otras apps tienes.",
  "Si juegas <strong>en línea</strong>, se crea una cuenta automáticamente. <strong>No se te pide correo, ni contraseña, ni nombre real</strong>: la cuenta es un número al azar.",
  "En esa cuenta guardamos lo que el modo en línea necesita para funcionar: tu nombre de club, el aspecto de tu equipo, tu ELO y tus partidos jugados y ganados.",
  "Las <strong>compras</strong> las cobra Google Play o Steam. Nosotros no vemos, ni recibimos, ni guardamos ningún dato de tu tarjeta."
 ],
 "s1": {
  "h": "1. Datos que el juego guarda en tu propio aparato",
  "p": "GOALÉ guarda en el almacenamiento privado de la aplicación tu equipo (nombre del club, equipación, escudo, y el nombre y aspecto de tus tres futbolistas), tus estadísticas (partidos jugados, rachas), el idioma elegido y si ya has visto el tutorial. Estos datos:",
  "li": [
   "No salen de tu aparato mientras juegues contra la máquina.",
   "No incluyen ningún dato personal identificable: ni nombre real, ni correo, ni ubicación, ni contactos, ni identificadores de publicidad.",
   "Se borran del todo si desinstalas el juego o borras sus datos desde los ajustes del sistema."
  ],
  "p2": "El juego pide únicamente tres permisos de Android: <code>INTERNET</code> y <code>ACCESS_NETWORK_STATE</code>, para el modo en línea, y <code>VIBRATE</code>, para la vibración del mando. No pide cámara, micrófono, ubicación, contactos ni acceso a tus archivos."
 },
 "s2": {
  "h": "2. Tu cuenta de GOALÉ (solo si juegas en línea)",
  "p": "La primera vez que entras en el modo en línea, el servidor te crea una cuenta <strong>sin pedirte nada</strong>: no hay registro, ni correo, ni contraseña. La cuenta es un identificador aleatorio, y tu aparato guarda una clave secreta que sirve para volver a entrar en ella. Concretamente, en nuestro servidor se guarda:",
  "li": [
   "El identificador aleatorio de la cuenta y la fecha en que se creó.",
   "El <strong>nombre de tu club</strong>, que es el que ven tus rivales. Lo eliges tú en MI EQUIPO y puedes cambiarlo cuando quieras.",
   "El aspecto de tu club: la equipación, el escudo y el nombre y aspecto de tus tres futbolistas. Esto es lo que hace que tu rival te vea como te has vestido, y que tu equipo te siga si juegas desde otro aparato.",
   "Tu <strong>ELO</strong> y el número de partidos jugados y ganados.",
   "El <strong>nombre comercial de cada aparato</strong> vinculado a la cuenta (por ejemplo, \"OnePlus Nord 3 5G\"), y la fecha en que se vinculó. Sirve para que puedas reconocerlos en la lista y desvincular el que hayas perdido."
  ],
  "p2": "<strong>La clave secreta de tu aparato no se guarda en el servidor.</strong> Solo se guarda su huella criptográfica (SHA-256), que sirve para comprobarla pero no permite reconstruirla: alguien que se llevara una copia entera de nuestra base de datos no podría entrar en ninguna cuenta con ella.",
  "p3": "<strong>No usamos tu cuenta de Google, ni Google Play Games, ni ninguna red social.</strong> La cuenta de GOALÉ solo existe dentro de GOALÉ."
 },
 "s3": {
  "h": "3. Partidas en línea y clasificación",
  "p": "Mientras juegas una partida en línea, tu aparato envía al servidor las órdenes de cada ronda (qué jugador mueve, adónde, y qué hace con el balón). El servidor las necesita para arbitrar la partida y para que los dos jugadores vean exactamente lo mismo. <strong>Esas órdenes viven lo que dura la partida y no se guardan después</strong>: cuando la sala se cierra, desaparecen.",
  "p2": "Al terminar una partida <strong>emparejada</strong> se actualizan tu ELO y tu contador de partidos. Las partidas con código de sala — las que juegas con alguien que conoces — <strong>no puntúan</strong> y no dejan ningún registro.",
  "p3": "Al buscar rival, el servidor compara <strong>en ese momento</strong> la dirección desde la que te conectas con la de los demás en cola, para no emparejar a alguien consigo mismo desde dos aparatos. Esa dirección <strong>no se guarda en la base de datos, no se escribe en ningún registro y no se envía a nadie</strong>: se usa en el instante de emparejar y se descarta."
 },
 "s4": {
  "h": "4. Jugar en varios aparatos",
  "p": "Puedes usar la misma cuenta en el móvil y en el ordenador. Para ello, el aparato que ya está dentro genera un <strong>código de ocho caracteres que caduca a los dos minutos</strong>, y el aparato nuevo lo teclea. El primero tiene que aceptar la petición.",
  "p2": "Esos códigos <strong>viven solo en la memoria del servidor</strong>: no se guardan en la base de datos y todos caducan si el servidor se reinicia. Un código caduca también tras tres intentos fallidos."
 },
 "s5": {
  "h": "5. Compras dentro del juego",
  "p": "GOALÉ tiene un único producto de pago opcional que desbloquea contenido de personalización (celebraciones, peinados, colores de equipación y piezas de escudo). No afecta a las reglas del juego ni da ninguna ventaja deportiva.",
  "p2": "<strong>El cobro lo hace íntegramente Google Play o Steam.</strong> El juego nunca ve tu tarjeta, tu dirección ni tus datos de facturación, y nosotros no los recibimos ni los guardamos. Lo único que se guarda en tu cuenta de GOALÉ es que la compra existe, de qué tienda vino, la fecha, y una <strong>huella criptográfica</strong> del comprobante — nunca el comprobante en claro. Esa huella es lo que permite que recuperes el contenido si cambias de aparato, y que una sola compra valga para una sola cuenta.",
  "p3": "El tratamiento de tus datos de pago por parte de Google se rige por su propia política de privacidad: {gPrivacy}."
 },
 "s6": {
  "h": "6. Sin anuncios, sin analítica, sin terceros",
  "p": "GOALÉ <strong>no muestra anuncios</strong> y <strong>no incorpora ninguna herramienta de analítica, medición, atribución ni informes de fallos</strong>. No hay AdMob, ni Firebase, ni Google Analytics, ni Unity Ads, ni ningún SDK equivalente.",
  "p2": "Esto significa que no recogemos tu identificador de publicidad, no sabemos cuánto tiempo juegas, ni a qué hora, ni desde qué país, ni qué otras aplicaciones tienes instaladas. Los únicos datos que salen de tu aparato son los que aparecen en las secciones 2, 3 y 4, y solo si decides jugar en línea."
 },
 "s7": {
  "h": "7. Dónde se guardan los datos y cuánto tiempo",
  "p": "El servidor de GOALÉ es un servidor privado alojado en <strong>OVHcloud (Francia, Unión Europea)</strong>, gestionado únicamente por el desarrollador. Los datos se guardan en un fichero de base de datos SQLite en ese servidor. Toda la comunicación entre el juego y el servidor va <strong>cifrada (TLS / wss://)</strong>.",
  "p2": "Los datos de tu cuenta se conservan mientras la cuenta exista. <strong>Una cuenta que no se use durante dos años se borra automáticamente</strong>, con todo lo que contiene. Puedes pedir que se borre antes en cualquier momento (sección 8).",
  "p3": "No vendemos, alquilamos ni cedemos tus datos a nadie. No hay terceros con acceso a la base de datos."
 },
 "s8": {
  "h": "8. Tus derechos y cómo borrar tu cuenta",
  "p": "Según el Reglamento General de Protección de Datos (RGPD), tienes derecho a acceder a tus datos, corregirlos, borrarlos, limitar su tratamiento, oponerte a él y obtener una copia portable. Para ejercerlos, escribe a la dirección del recuadro de abajo desde cualquier correo, indicando tu <strong>nombre de club</strong>.",
  "p2": "Para borrar tus datos tienes dos caminos, y el primero no requiere pedirnos nada: <strong>desinstalar el juego borra todo lo que hay en tu aparato</strong>. Para borrar además la cuenta del servidor, sigue las instrucciones de la página <a href=\"./eliminar-datos.html\">Eliminar mis datos</a>.",
  "p3": "Responderemos a cualquier solicitud en un plazo máximo de 30 días. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">aepd.es</a>)."
 },
 "s9": {
  "h": "9. Menores de edad",
  "p": "GOALÉ no está dirigido a menores de 13 años y no recoge conscientemente datos de menores de esa edad. El juego no pide ningún dato personal en ningún momento, y el modo en línea no tiene chat ni ninguna forma de que dos jugadores intercambien texto libre: lo único que un rival ve de ti es el nombre de tu club y el aspecto de tu equipo.",
  "p2": "Si eres madre, padre o tutor y crees que un menor a tu cargo ha creado una cuenta, escríbenos y la borraremos."
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
 "updated": "Last updated: 6 September 2026",
 "intro": "This policy explains what data is collected when you use <strong>GOALÉ</strong> (the \"game\"), a turn-based football game developed independently by Sergio González (\"we\", \"the developer\"). By using the game, you accept the practices described here.",
 "sumH": "Quick summary",
 "sum": [
  "<strong>If you only play against the computer, nothing whatsoever is sent to us.</strong> Your team, your crest and your stats stay on your device.",
  "<strong>There are no ads, no analytics and no third-party SDKs</strong> in the game. We don't know how much you play, where from, or what other apps you have.",
  "If you play <strong>online</strong>, an account is created automatically. <strong>You are never asked for an email, a password or a real name</strong>: the account is a random number.",
  "That account holds what online play needs to work: your club name, your team's appearance, your ELO and your matches played and won.",
  "<strong>Purchases</strong> are charged by Google Play or Steam. We never see, receive or store any of your card details."
 ],
 "s1": {
  "h": "1. Data the game stores on your own device",
  "p": "GOALÉ stores in the app's private storage your team (club name, kit, crest, and the name and look of your three footballers), your stats (matches played, streaks), your chosen language and whether you have seen the tutorial. This data:",
  "li": [
   "Never leaves your device while you play against the computer.",
   "Contains no personally identifiable information: no real name, no email, no location, no contacts, no advertising identifiers.",
   "Is deleted entirely if you uninstall the game or clear its data from the system settings."
  ],
  "p2": "The game requests only three Android permissions: <code>INTERNET</code> and <code>ACCESS_NETWORK_STATE</code>, for online play, and <code>VIBRATE</code>, for haptic feedback. It does not request camera, microphone, location, contacts or access to your files."
 },
 "s2": {
  "h": "2. Your GOALÉ account (only if you play online)",
  "p": "The first time you enter online play, the server creates an account for you <strong>without asking for anything</strong>: no sign-up, no email, no password. The account is a random identifier, and your device stores a secret key that lets it get back in. Specifically, our server stores:",
  "li": [
   "The account's random identifier and the date it was created.",
   "Your <strong>club name</strong>, which is what your opponents see. You choose it in MY TEAM and can change it whenever you like.",
   "Your club's appearance: the kit, the crest, and the name and look of your three footballers. This is what lets your opponent see you as you dressed, and lets your team follow you if you play from another device.",
   "Your <strong>ELO</strong> and the number of matches played and won.",
   "The <strong>commercial name of each device</strong> linked to the account (for example, \"OnePlus Nord 3 5G\"), and the date it was linked. This exists so you can recognise them in the list and unlink one you have lost."
  ],
  "p2": "<strong>Your device's secret key is not stored on the server.</strong> Only its cryptographic hash (SHA-256) is kept, which can verify the key but cannot reconstruct it: someone who walked off with a complete copy of our database could not get into a single account with it.",
  "p3": "<strong>We do not use your Google account, Google Play Games, or any social network.</strong> Your GOALÉ account exists only inside GOALÉ."
 },
 "s3": {
  "h": "3. Online matches and ranking",
  "p": "While you play an online match, your device sends the server your orders for each round (which player moves, where to, and what they do with the ball). The server needs them to referee the match and to make sure both players see exactly the same thing. <strong>Those orders live only as long as the match and are not kept afterwards</strong>: when the room closes, they are gone.",
  "p2": "When a <strong>matchmade</strong> game ends, your ELO and match counters are updated. Games played with a room code — the ones you play with someone you know — <strong>do not count towards the ranking</strong> and leave no record.",
  "p3": "When looking for an opponent, the server compares <strong>at that moment</strong> the address you are connecting from with those of everyone else in the queue, so that nobody is paired against themselves from two devices. That address is <strong>not stored in the database, not written to any log and not sent to anyone</strong>: it is used at the instant of pairing and discarded."
 },
 "s4": {
  "h": "4. Playing on several devices",
  "p": "You can use the same account on your phone and on your computer. To do that, the device that is already signed in generates an <strong>eight-character code that expires after two minutes</strong>, and the new device types it in. The first device has to approve the request.",
  "p2": "Those codes <strong>live only in the server's memory</strong>: they are never written to the database and all of them expire if the server restarts. A code also expires after three failed attempts."
 },
 "s5": {
  "h": "5. In-game purchases",
  "p": "GOALÉ has a single optional paid product that unlocks customisation content (celebrations, hairstyles, kit colours and crest parts). It does not affect the rules of the game and gives no sporting advantage.",
  "p2": "<strong>Payment is handled entirely by Google Play or Steam.</strong> The game never sees your card, your address or your billing details, and we neither receive nor store them. All that is kept in your GOALÉ account is that the purchase exists, which store it came from, the date, and a <strong>cryptographic hash</strong> of the receipt — never the receipt itself. That hash is what lets you recover the content if you change devices, and what makes one purchase count for exactly one account.",
  "p3": "Google's handling of your payment data is governed by its own privacy policy: {gPrivacy}."
 },
 "s6": {
  "h": "6. No ads, no analytics, no third parties",
  "p": "GOALÉ <strong>shows no advertising</strong> and <strong>contains no analytics, measurement, attribution or crash-reporting tooling</strong>. There is no AdMob, no Firebase, no Google Analytics, no Unity Ads and no equivalent SDK.",
  "p2": "This means we do not collect your advertising identifier, and we do not know how long you play, at what time, from which country, or what other applications you have installed. The only data that leaves your device is what appears in sections 2, 3 and 4, and only if you choose to play online."
 },
 "s7": {
  "h": "7. Where data is stored and for how long",
  "p": "The GOALÉ server is a private server hosted at <strong>OVHcloud (France, European Union)</strong> and managed solely by the developer. Data is stored in a SQLite database file on that server. All communication between the game and the server is <strong>encrypted (TLS / wss://)</strong>.",
  "p2": "Your account data is kept for as long as the account exists. <strong>An account unused for two years is deleted automatically</strong>, along with everything in it. You can ask for it to be deleted sooner at any time (section 8).",
  "p3": "We do not sell, rent or share your data with anyone. No third party has access to the database."
 },
 "s8": {
  "h": "8. Your rights and how to delete your account",
  "p": "Under the General Data Protection Regulation (GDPR) you have the right to access your data, correct it, delete it, restrict its processing, object to it, and obtain a portable copy. To exercise these rights, write to the address in the box below from any email account, stating your <strong>club name</strong>.",
  "p2": "There are two ways to delete your data, and the first requires nothing from us: <strong>uninstalling the game deletes everything held on your device</strong>. To also delete the account on the server, follow the instructions on the <a href=\"./eliminar-datos.html\">Delete my data</a> page.",
  "p3": "We will respond to any request within 30 days at most. You may also lodge a complaint with the Spanish Data Protection Agency (<a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">aepd.es</a>)."
 },
 "s9": {
  "h": "9. Children",
  "p": "GOALÉ is not directed at children under 13 and does not knowingly collect data from children of that age. The game never asks for any personal data, and online play has no chat and no way for two players to exchange free text: all an opponent sees of you is your club name and your team's appearance.",
  "p2": "If you are a parent or guardian and believe a child in your care has created an account, write to us and we will delete it."
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
 "updated": "Última actualización: 6 de septiembre de 2026",
 "intro": "Esta página explica cómo borrar los datos de <strong>GOALÉ</strong>. Hay dos sitios donde puede haber datos tuyos, y se borran por separado.",
 "s1": {
  "h": "1. Lo que hay en tu aparato",
  "p": "Tu equipo, tu escudo, tus estadísticas y tus ajustes están en el almacenamiento privado del juego. Para borrarlo todo no necesitas pedirnos nada:",
  "li": [
   "<strong>Android</strong>: Ajustes → Aplicaciones → GOALÉ → Almacenamiento → Borrar datos. O sencillamente desinstala el juego.",
   "<strong>PC (Steam)</strong>: desinstala el juego y borra su carpeta de datos de usuario."
  ],
  "p2": "Esto es instantáneo y definitivo. <strong>Ojo</strong>: si borras los datos del aparato pierdes también la clave secreta de tu cuenta, así que si no tienes otro aparato vinculado, no podrás volver a entrar en ella (ver el punto 4)."
 },
 "s2": {
  "h": "2. Si nunca has jugado en línea, ya has terminado",
  "p": "Si solo has jugado contra la máquina, <strong>no tenemos ningún dato tuyo</strong>: nunca se creó ninguna cuenta y nada salió de tu aparato. No hay nada más que borrar."
 },
 "s3": {
  "h": "3. Borrar tu cuenta del servidor",
  "p": "Si has jugado en línea, existe una cuenta con tu nombre de club, el aspecto de tu equipo, tu ELO y tus partidos. Para borrarla, escríbenos desde cualquier correo a la dirección del recuadro con el asunto <strong>\"Borrar mi cuenta\"</strong> e incluye:",
  "li": [
   "Tu <strong>nombre de club</strong>, tal y como aparece en MI EQUIPO.",
   "El <strong>identificador de tu cuenta</strong>, si puedes verlo: está en Ajustes → Cuenta, dentro del juego.",
   "El nombre del aparato o aparatos desde los que juegas."
  ],
  "p2": "Con el nombre de club basta en la mayoría de los casos; el identificador solo hace falta si hubiera dos clubes con el mismo nombre. Podemos pedirte que confirmes desde el propio juego antes de borrar, para que nadie pueda borrar la cuenta de otro."
 },
 "s4": {
  "h": "4. Qué se borra exactamente",
  "p": "Al borrar tu cuenta desaparecen del servidor, de forma inmediata y sin copia:",
  "li": [
   "El identificador de la cuenta y su fecha de creación.",
   "Tu nombre de club y el aspecto guardado de tu equipo.",
   "Tu ELO y tus contadores de partidos jugados y ganados.",
   "Todos los aparatos vinculados y sus huellas.",
   "El registro de tu compra, si la hubiera."
  ],
  "p2": "<strong>Esto no se puede deshacer.</strong> Al borrarse el registro de la compra, el contenido de pago deja de estar asociado a esa cuenta; podrás recuperarlo creando una cuenta nueva y restaurando la compra desde Google Play o Steam, porque la compra es de tu cuenta de la tienda y no de la nuestra."
 },
 "s5": {
  "h": "5. Plazos",
  "p": "Respondemos y ejecutamos el borrado en un plazo máximo de <strong>30 días</strong>, y en la práctica en mucho menos. Te confirmaremos por correo cuando esté hecho."
 },
 "keep": {
  "h": "6. Lo que no se conserva de todos modos",
  "p": "No hace falta que pidas nada para esto, porque no existe: no guardamos direcciones IP, ni registros de conexión, ni las órdenes de tus partidas una vez terminadas, ni ningún dato de tu tarjeta. Y una cuenta que no se usa durante <strong>dos años se borra sola</strong>."
 },
 "help": {
  "h": "Escríbenos",
  "p": "Para borrar tu cuenta o preguntar cualquier cosa sobre tus datos:"
 }
},
"en": {
 "title": "Delete my GOALÉ data",
 "updated": "Last updated: 6 September 2026",
 "intro": "This page explains how to delete your <strong>GOALÉ</strong> data. There are two places where data about you may exist, and they are deleted separately.",
 "s1": {
  "h": "1. What is on your device",
  "p": "Your team, your crest, your stats and your settings live in the game's private storage. To delete all of it you need nothing from us:",
  "li": [
   "<strong>Android</strong>: Settings → Apps → GOALÉ → Storage → Clear data. Or simply uninstall the game.",
   "<strong>PC (Steam)</strong>: uninstall the game and delete its user data folder."
  ],
  "p2": "This is immediate and final. <strong>Note</strong>: clearing the device data also removes your account's secret key, so if you have no other device linked you will not be able to get back into that account (see point 4)."
 },
 "s2": {
  "h": "2. If you have never played online, you are already done",
  "p": "If you have only played against the computer, <strong>we hold no data about you at all</strong>: no account was ever created and nothing left your device. There is nothing else to delete."
 },
 "s3": {
  "h": "3. Deleting your account from the server",
  "p": "If you have played online, an account exists holding your club name, your team's appearance, your ELO and your matches. To delete it, write to the address in the box from any email account with the subject <strong>\"Delete my account\"</strong> and include:",
  "li": [
   "Your <strong>club name</strong>, exactly as it appears in MY TEAM.",
   "Your <strong>account identifier</strong>, if you can see it: it is in Settings → Account, inside the game.",
   "The name of the device or devices you play from."
  ],
  "p2": "The club name is enough in most cases; the identifier is only needed if two clubs happened to share a name. We may ask you to confirm from inside the game before deleting, so that nobody can delete someone else's account."
 },
 "s4": {
  "h": "4. Exactly what gets deleted",
  "p": "Deleting your account removes from the server, immediately and with no copy kept:",
  "li": [
   "The account identifier and its creation date.",
   "Your club name and your team's saved appearance.",
   "Your ELO and your played/won counters.",
   "Every linked device and its fingerprint.",
   "The record of your purchase, if there was one."
  ],
  "p2": "<strong>This cannot be undone.</strong> Once the purchase record is deleted, the paid content is no longer tied to that account; you can get it back by creating a new account and restoring the purchase from Google Play or Steam, because the purchase belongs to your store account and not to ours."
 },
 "s5": {
  "h": "5. Timescales",
  "p": "We respond and carry out the deletion within <strong>30 days</strong> at most, and in practice much sooner. We will confirm by email once it is done."
 },
 "keep": {
  "h": "6. What is not kept in any case",
  "p": "You do not need to ask for any of this, because it does not exist: we do not store IP addresses, connection logs, the orders from your matches once they are over, or any of your card details. And an account unused for <strong>two years deletes itself</strong>."
 },
 "help": {
  "h": "Write to us",
  "p": "To delete your account or ask anything about your data:"
 }
}
};
