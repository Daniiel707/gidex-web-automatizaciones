/* =================== DATA =================== */
const icons={
  chat:'<path d="M8 12h24a4 4 0 014 4v12a4 4 0 01-4 4H20l-8 6v-6H8a4 4 0 01-4-4V16a4 4 0 014-4z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="15" cy="22" r="1.6" fill="currentColor"/><circle cx="22" cy="22" r="1.6" fill="currentColor"/><circle cx="29" cy="22" r="1.6" fill="currentColor"/>',
  chart:'<path d="M6 34V8M6 34h28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="12" y="22" width="5" height="10" fill="currentColor"/><rect x="21" y="14" width="5" height="18" fill="none" stroke="currentColor" stroke-width="2"/><rect x="30" y="18" width="5" height="14" fill="currentColor"/>',
  refresh:'<path d="M32 12a14 14 0 10.4 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M32 6v8h-8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  star:'<path d="M20 6l4.3 8.7 9.7 1.4-7 6.8 1.6 9.6L20 27.9 11.4 32.5 13 22.9l-7-6.8 9.7-1.4L20 6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  box:'<path d="M20 4l14 8v16l-14 8L6 28V12l14-8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M6 12l14 8 14-8M20 20v16" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  calendar:'<rect x="6" y="9" width="28" height="27" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 17h28M13 4v8M27 4v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="12" y="23" width="5" height="5" rx="1" fill="currentColor"/>',
  funnel:'<path d="M5 8h30L24 22v12l-8-4V22L5 8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  send:'<path d="M34 6L4 18l13 5 5 13L34 6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M17 23L34 6" stroke="currentColor" stroke-width="2"/>',
  gauge:'<path d="M6 30a14 14 0 1128 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 30l8-9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="30" r="2.4" fill="currentColor"/>',
  coin:'<ellipse cx="20" cy="12" rx="13" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 12v8c0 2.8 5.8 5 13 5s13-2.2 13-5v-8M7 20v8c0 2.8 5.8 5 13 5s13-2.2 13-5v-8" fill="none" stroke="currentColor" stroke-width="2"/>',
  user:'<circle cx="20" cy="14" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 34c0-6.6 5.4-11 12-11s12 4.4 12 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  doc:'<path d="M11 4h13l8 8v24H11z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M24 4v8h8M16 22h12M16 28h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  web:'<rect x="5" y="8" width="30" height="24" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 15h30" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="11.5" r="1.2" fill="currentColor"/><circle cx="14" cy="11.5" r="1.2" fill="currentColor"/>',
  rocket:'<path d="M20 4c6 4 8 11 8 16l-4 4h-8l-4-4c0-5 2-12 8-16z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="20" cy="15" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 24l-4 8 4-2 4 2-4-8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
};
const CATS=['Todas','Asistentes','Automatización','Análisis','Web'];
const services=[
  {n:'01',cat:'Asistentes',name:'Asistente de WhatsApp 24/7',ico:'chat',feature:true,tag:'Estrella',
   desc:'Tu negocio responde, vende y agenda incluso cuando no estás. Un agente entrenado con toda la información de tu negocio que atiende solo y escala a una persona cuando hace falta.',
   bullets:['Responde productos, precios, horarios y ubicación','Envía catálogos y menús automáticamente','Toma pedidos, reservas y solicitudes','Escala al encargado cuando se necesita','Recuerda la conversación dentro del chat'],
   ideal:'Restaurantes · Tiendas · Clínicas'},
  {n:'02',cat:'Análisis',name:'Reporte inteligente de ventas',ico:'chart',
   desc:'Cada semana, los números de tu negocio en tu WhatsApp o correo. Sin Excel, sin cálculos manuales — listo para tomar decisiones.',
   bullets:['Total de ventas por día, semana y categoría','Top productos más vendidos','Comparativa contra semana anterior','Días de mayor y menor movimiento','Alertas cuando las ventas caen del promedio'],
   ideal:'Cualquier negocio con ventas'},
  {n:'03',cat:'Automatización',name:'Reenganche de clientes',ico:'refresh',
   desc:'Recupera clientes que dejaron de comprar antes de que se vayan con la competencia. El sistema detecta y escribe solo, en el momento correcto.',
   bullets:['Detecta clientes que no regresan en X días','Envía mensaje personalizado con su nombre','Puede incluir promoción o invitación','Registra respuestas y notifica interés','Opera automáticamente cada semana'],
   ideal:'Spas · Gimnasios · Restaurantes'},
  {n:'04',cat:'Automatización',name:'Encuesta post-visita + Google',ico:'star',
   desc:'Convierte cada visita en más reseñas positivas en Google Maps. Si la experiencia fue buena, lo guía a reseñar; si hubo problema, te avisa antes.',
   bullets:['Escribe al cliente 1–2 h después de su visita','Califica en segundos desde WhatsApp','Calificación alta → enlace a Google Maps','Calificación baja → notificación interna','Resultados organizados para revisión'],
   ideal:'Hoteles · Salones · Clínicas'},
  {n:'05',cat:'Automatización',name:'Control de inventario',ico:'box',
   desc:'Sabe qué tienes, qué te falta y qué se mueve antes de quedarte sin stock. Sin contar a mano, sin hojas de papel, sin sorpresas.',
   bullets:['Registra entradas y salidas en tiempo real','Alerta automática al llegar a stock mínimo','Reporte semanal del estado del inventario','Identifica productos que más y menos rotan','Acceso desde cualquier dispositivo'],
   ideal:'Tiendas · Ferreterías · Farmacias'},
  {n:'06',cat:'Automatización',name:'Citas y reservas automáticas',ico:'calendar',
   desc:'Tu agenda se llena sola, sin llamadas ni malentendidos. El sistema confirma, recuerda y reorganiza — eliminando ausencias y dobles reservas.',
   bullets:['El cliente elige fecha y hora disponible','Confirmación automática con los detalles','Recordatorio 24 h y 1 h antes','Si cancela, el espacio queda libre solo','Resumen del día al encargado'],
   ideal:'Gimnasios · Spas · Consultorios'},
  {n:'07',cat:'Análisis',name:'Seguimiento de leads',ico:'funnel',
   desc:'Ningún cliente potencial se pierde por falta de seguimiento. El sistema recuerda por ti cuándo escribir, qué decir y cuándo insistir.',
   bullets:['Captura leads de WhatsApp, web o redes','Clasifica el interés: frío, tibio, caliente','Mensajes de seguimiento programados','Alerta cuando un lead está listo','Reporte de captados vs convertidos'],
   ideal:'Inmobiliarias · Agencias · Escuelas'},
  {n:'08',cat:'Automatización',name:'Campañas de mensajería',ico:'send',
   desc:'Comunica promociones, lanzamientos o novedades a todos tus clientes al mismo tiempo — personalizado y en el momento correcto.',
   bullets:['Envío masivo personalizado por WhatsApp','Segmentación por tipo de cliente o historial','Programación en fecha y hora específica','Métricas: entregados, leídos, respondidos','Para promos, eventos y nuevos productos'],
   ideal:'Tiendas · Restaurantes · Gimnasios'},
  {n:'09',cat:'Análisis',name:'Dashboard en tiempo real',ico:'gauge',
   desc:'Ve el estado de tu negocio en un solo lugar, actualizado automáticamente. Sin abrir Excel, sin pedir reportes, sin esperar.',
   bullets:['Ventas del día, semana y mes en vivo','Comparativa de períodos anteriores','Clientes nuevos vs recurrentes','Estado de inventario crítico','Acceso desde celular o computador'],
   ideal:'Negocios con múltiples operaciones'},
  {n:'10',cat:'Automatización',name:'Automatización de cobranza',ico:'coin',
   desc:'Recuerda cobros sin que nadie tenga que hacerlo manualmente. Recordatorios educados y automáticos; si no responden, escala a tu equipo.',
   bullets:['Detecta pagos por vencer y vencidos','Recordatorio automático por WhatsApp o correo','Escala al equipo si no hay respuesta','Registro del estado de cada cobro','Reporte semanal de cartera pendiente'],
   ideal:'Distribuidoras · Servicios · Arrendadores'},
  {n:'11',cat:'Automatización',name:'Onboarding de clientes',ico:'user',
   desc:'El primer contacto siempre perfecto, sin depender de que alguien se acuerde. La activación del cliente nuevo corre sola.',
   bullets:['Mensaje de bienvenida personalizado','Envío de guías y documentos de inicio','Confirmación de datos del cliente','Recordatorio de primeros pasos','Alerta al equipo al completar el proceso'],
   ideal:'Gimnasios · Escuelas · Suscripciones'},
  {n:'12',cat:'Análisis',name:'Procesamiento de documentos',ico:'doc',
   desc:'Convierte documentos en información organizada sin que nadie los revise a mano. La información queda lista para usarse.',
   bullets:['Lee documentos en PDF, imagen o correo','Extrae datos clave: montos, fechas, nombres','Los organiza en tu sistema','Alerta si falta información o hay errores','Historial completo de lo procesado'],
   ideal:'Distribuidoras · Contadores · Importadoras'},
  {n:'13',cat:'Web',name:'Desarrollo web',ico:'web',
   desc:'Del sitio informativo a la aplicación web completa. Tres niveles según cuánto necesite crecer tu presencia digital.',
   bullets:['Nivel 1 — Sitio profesional con WhatsApp directo','Nivel 2 — Carta/catálogo digital + reseñas + SEO','Nivel 3 — Pedidos online, pagos y reservas','Optimizado para celular y Google','Dominio + hosting primer año incluido'],
   ideal:'Cualquier negocio'},
  {n:'14',cat:'Web',name:'Landing page de campaña',ico:'rocket',
   desc:'Una página diseñada para un solo objetivo: capturar leads, vender un producto o registrar asistentes a un evento.',
   bullets:['Diseño enfocado en un objetivo','Formulario conectado a tu sistema','Notificación automática al registrarse','Integración con WhatsApp o correo','Métricas de visitas y conversión'],
   ideal:'Lanzamientos · Promos · Eventos'}
];

const industries={
  'Restaurantes':{ico:'<path d="M3 2v5a2 2 0 002 2v5M5 2v5M7 2v5M11 2c-1 0-2 1-2 4s1 4 2 4v3" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round"/>',
    lead:'Un sistema que atiende, reserva y fideliza mientras tú te concentras en la cocina y el servicio.',
    prob:['Cientos de mensajes sin responder y reservas anotadas en papel'],
    sols:['Asistente de WhatsApp 24/7','Reservas automáticas con recordatorio','Reporte semanal de ventas','Reenganche de clientes inactivos','Encuesta post-visita + reseña en Google','Carta digital con tu web'],
    case:'Un restaurante automatizó <b>300 mensajes diarios</b> y eliminó las reservas perdidas. Resultado: <b>+15% de clientes nuevos</b> y horas recuperadas cada semana.'},
  'Tiendas de ropa':{ico:'<path d="M5 2l-3 3 2 2 1-1v7h8V6l1 1 2-2-3-3-2 1a2 2 0 01-4 0L5 2z" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round"/>',
    lead:'Catálogo siempre actualizado, inventario bajo control y clientes que vuelven solos.',
    prob:['Inventario desincronizado y clientes preguntando lo mismo cada día'],
    sols:['Catálogo por WhatsApp con tallas','Control de inventario inteligente','Aviso cuando regresa una talla','Campañas de nuevas colecciones','Reenganche de clientes','E-commerce con tu web'],
    case:'Una tienda sincronizó su inventario y automatizó avisos de stock. Resultado: <b>0 sobreventa</b> y <b>−30% de devoluciones</b>.'},
  'Gimnasios':{ico:'<path d="M2 6v4M4 5v6M11 5v6M13 6v4M4 8h7" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
    lead:'Membresías que se renuevan, clases que se llenan y miembros que no se pierden.',
    prob:['Membresías vencidas sin avisar y miembros que dejan de venir'],
    sols:['Renovación automática de membresías','Agenda de clases con cupos','Seguimiento de asistencia','Reenganche de inactivos','Programa de referidos','Encuesta de satisfacción mensual'],
    case:'Un gimnasio automatizó recordatorios de renovación y reenganche. Resultado: <b>menos cancelaciones</b> y miembros inactivos que regresaron solos.'},
  'Clínicas':{ico:'<path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
    lead:'Citas que se confirman solas, pacientes recordados y reputación cuidada.',
    prob:['Ausencias por falta de recordatorio y agenda gestionada a mano'],
    sols:['Recordatorio de citas con confirmación','Agenda automática','Indicaciones post-consulta','Seguimiento a pacientes sin retorno','Encuesta + reseña en Google','Web informativa profesional'],
    case:'Un consultorio automatizó confirmaciones de cita. Resultado: <b>fuerte caída de ausencias</b> y una agenda que se gestiona sola.'},
  'Inmobiliarias':{ico:'<path d="M2 7l6-5 6 5M3 7v6h10V7" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linejoin="round"/>',
    lead:'Leads calificados automáticamente y seguimiento que nunca se olvida.',
    prob:['Decenas de consultas y muchos leads que se enfrían sin seguimiento'],
    sols:['Calificación automática de prospectos','Fichas de propiedades automáticas','Recordatorio de visitas','Seguimiento a prospectos','Pipeline de ventas','Landing de captación'],
    case:'Una inmobiliaria automatizó la calificación de leads. Resultado: <b>−80% de tiempo</b> filtrando prospectos y <b>+25% de cierres</b>.'},
  'Distribuidoras':{ico:'<path d="M1 4h8v6H1zM9 6h3l2 2v2H9z" stroke="currentColor" stroke-width="1.2" fill="none"/><circle cx="4" cy="12" r="1.3" stroke="currentColor" stroke-width="1.2" fill="none"/><circle cx="11.5" cy="12" r="1.3" stroke="currentColor" stroke-width="1.2" fill="none"/>',
    lead:'Cotizaciones al instante, stock controlado y cobros que se recuerdan solos.',
    prob:['Cotizaciones lentas, stock incierto y cobros que se atrasan'],
    sols:['Cotización por WhatsApp','Control de inventario con alertas','Seguimiento de pedidos','Cobranza automática','Recordatorio de pedido recurrente','Procesamiento de documentos'],
    case:'Una distribuidora automatizó cotizaciones y cobranza. Resultado: <b>respuestas inmediatas</b> y una cartera de cobros bajo control.'},
  'Salones & Spas':{ico:'<path d="M8 2v12M4 6c0 2 2 3 4 3s4-1 4-3" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round"/>',
    lead:'Agenda llena, clientes fieles y sillas que no quedan vacías.',
    prob:['Espacios vacíos por ausencias y clientes que no regresan'],
    sols:['Agenda automática con recordatorio','Confirmación de citas','Fidelización por visitas','Reactivación de clientes','Catálogo de servicios por WhatsApp','Encuesta + reseña en Google'],
    case:'Un salón automatizó recordatorios y fidelización. Resultado: <b>menos ausencias</b> y clientes que vuelven con beneficios automáticos.'}
};

const cases=[
  {ind:'Restaurante',loc:'Cuenca',name:'Atención que nunca duerme',
   before:'300+ mensajes diarios sin responder a tiempo. Reservas anotadas en papel y clientes perdidos por demoras.',
   after:'Asistente de WhatsApp respondiendo 24/7 y reservas automáticas con recordatorio. El equipo se concentra en el servicio.',
   res:[['95%','Mensajes resueltos solos'],['+15%','Clientes nuevos'],['40h','Ahorradas / mes']]},
  {ind:'Tienda de ropa',loc:'Cuenca',name:'Inventario sin sorpresas',
   before:'Stock desincronizado entre tienda y redes. Sobreventa frecuente y devoluciones por productos agotados.',
   after:'Control de inventario en tiempo real con alertas y catálogo por WhatsApp siempre actualizado.',
   res:[['0','Sobreventas'],['−30%','Devoluciones'],['24h','Entrega promedio']]},
  {ind:'Agencia de servicios',loc:'Ecuador',name:'Ningún lead se enfría',
   before:'Contactos que llegaban y se perdían sin seguimiento. Propuestas armadas manualmente, una por una.',
   after:'Captura y seguimiento automático de leads con clasificación de interés y alertas al equipo de ventas.',
   res:[['+40%','Contactos captados'],['×3','Conversión'],['+60%','En ventas']]},
  {ind:'Inmobiliaria',loc:'Cuenca',name:'Prospectos que se filtran solos',
   before:'Cientos de consultas por propiedades, la mayoría sin intención real de compra. Horas perdidas calificando.',
   after:'Calificación automática de prospectos y envío de fichas según preferencias, con seguimiento programado.',
   res:[['−80%','Tiempo calificando'],['+25%','Cierres'],['100%','Leads con seguimiento']]}
];

const faqs=[
  ['¿Es difícil de implementar para mí?','No. Tú solo nos cuentas cómo funciona tu negocio. Nosotros nos encargamos de todo lo técnico, lo construimos, lo probamos y lo dejamos funcionando.'],
  ['¿Cuánto tiempo toma?','Depende de la solución. Una automatización simple puede estar lista en 1–2 semanas; un sistema completo, entre 3 y 4 semanas. Lo definimos en el diagnóstico.'],
  ['¿Qué pasa si algo falla?','Monitoreamos los sistemas y damos soporte continuo dentro de tu plan. Si algo necesita ajuste, lo resolvemos — normalmente el mismo día.'],
  ['¿Necesito conocimientos técnicos?','Para nada. Todo está diseñado para que tú solo veas resultados: mensajes respondidos, reportes que llegan, agenda que se llena. La parte compleja es nuestra.'],
  ['¿Cómo sé qué automatizar primero?','Eso es exactamente lo que define el diagnóstico gratuito. Identificamos qué tarea te quita más tiempo y cuál tendría mayor impacto al automatizarse.']
];

/* =================== RENDER =================== */

/* =================== HELPERS =================== */
const WA='593978961466';
function waLink(text){return 'https://wa.me/'+WA+(text?('?text='+encodeURIComponent(text)):'');}
function qp(n){return new URLSearchParams(location.search).get(n);}

/* shared selection state (referenced by inline handlers) */
let selectedSols=new Set();
let currentIvKey=Object.keys(industries)[0];

/* =================== SERVICE CARD =================== */
function svcCard(s,expandable){
  return `<div class="svc-card ${s.feature?'feature':''} reveal" data-cat="${s.cat}">
    <div class="svc-top"><span class="svc-num">${s.n}</span>${s.tag?`<span class="svc-tag">${s.tag}</span>`:`<svg class="svc-ico" viewBox="0 0 40 40">${icons[s.ico]}</svg>`}</div>
    ${s.tag?`<svg class="svc-ico" viewBox="0 0 40 40" style="margin-bottom:18px">${icons[s.ico]}</svg>`:''}
    <div class="svc-name">${s.name}</div>
    <div class="svc-desc">${s.desc}</div>
    ${expandable?`<a class="svc-expand" href="/cotiza?s=${encodeURIComponent(s.name)}"><span class="pm">+</span> <span>Más información</span></a>`:''}
    <div class="svc-ideal">Ideal para: ${s.ideal}</div>
  </div>`;
}
function bindSpotlight(){
  document.querySelectorAll('.svc-card').forEach(c=>{
    if(c._sl)return;c._sl=true;
    c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});
  });
}

/* =================== INDUSTRY (shared render + selection) =================== */
function renderIndustry(k){
  currentIvKey=k;selectedSols=new Set();
  const d=industries[k];
  const ivPanel=document.getElementById('ivPanel');
  ivPanel.innerHTML=`<div class="iv-detail">
    <div class="ehead">/ ${k.toUpperCase()}</div>
    <h3>${d.lead}</h3>
    <div class="iv-prob"><span class="live-dot" style="background:#F59E0B"></span> <span class="iv-prob-lbl">El problema:</span> <b>${d.prob[0]}</b></div>
    <div class="iv-sel-hint">Selecciona lo que te interesa y pregúntanos con un clic →</div>
    <div class="iv-sol-grid">
      ${d.sols.map(s=>`<div class="iv-sol" data-sol="${s.replace(/"/g,'&quot;')}" onclick="toggleSol(this)"><span class="dot"></span><span class="txt">${s}</span><span class="check"></span></div>`).join('')}
      <a class="iv-sol iv-more" href="/cotiza?s=${encodeURIComponent(k)}"><span class="dot" style="background:var(--titanium)"></span><span class="txt" style="color:var(--titanium)">y más, a tu medida…</span></a>
    </div>
    <div class="iv-actionbar" id="ivActionBar">
      <div class="iv-ab-count"><span id="ivCount">0</span> seleccionado(s)</div>
      <button class="btn btn-primary iv-ab-btn" onclick="askSelected()">Preguntar por WhatsApp <span class="arrow">→</span></button>
    </div>
    <div class="iv-case"><div class="ec">Caso representativo</div><div class="ct">${d.case}</div></div>
  </div>`;
}
function toggleSol(el){
  const s=el.getAttribute('data-sol');
  if(selectedSols.has(s)){selectedSols.delete(s);el.classList.remove('selected');}
  else{selectedSols.add(s);el.classList.add('selected');}
  document.getElementById('ivCount').textContent=selectedSols.size;
  document.getElementById('ivActionBar').classList.toggle('show',selectedSols.size>0);
}
function askSelected(){
  const list=[...selectedSols];
  const msg=`Hola GIDEX 👋 Tengo un negocio del sector *${currentIvKey}* y me interesan estas automatizaciones:\n${list.map(s=>'• '+s).join('\n')}\n\n¿Me pueden dar más información?`;
  window.open(waLink(msg),'_blank');
}

/* =================== CONTACT FORM (prototype, no data sent) =================== */
function submitForm(){
  document.getElementById('cformBody').style.display='none';
  document.getElementById('cformSuccess').classList.add('show');
}

/* =================== PAGE INITIALISERS =================== */
function initHome(){
  const svcPreview = document.getElementById('svcPreview');

  svcPreview.innerHTML = services.slice(0,6).map(s=>svcCard(s,false)).join('');

  requestAnimationFrame(() => {
    svcPreview.querySelectorAll('.svc-card.reveal').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('in');
      }, i * 90);
    });
  });
  const indBtns=document.getElementById('indBtns');
  const indResult=document.getElementById('indResult');
  let currentInd=Object.keys(industries)[0];
  const explore=document.getElementById('indExplore');
  function updateExplore(){if(explore)explore.href='/industrias?i='+encodeURIComponent(currentInd);}
  function renderBar(k){
    indResult.innerHTML=industries[k].sols.map((t,i)=>`<a class="ind-tag" style="animation-delay:${i*0.05}s" href="/industrias?i=${encodeURIComponent(k)}">${t}</a>`).join('')
      +`<a class="ind-tag" style="animation-delay:${industries[k].sols.length*0.05}s;opacity:0.7" href="/industrias?i=${encodeURIComponent(k)}">+ y más…</a>`;
  }
  Object.keys(industries).forEach((k,i)=>{
    const b=document.createElement('button');
    b.className='ind-btn'+(i===0?' active':'');
    b.innerHTML=`<svg class="ico" viewBox="0 0 16 16">${industries[k].ico}</svg>${k}`;
    b.onclick=()=>{document.querySelectorAll('.ind-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentInd=k;renderBar(k);updateExplore();};
    indBtns.appendChild(b);
  });
  renderBar(currentInd);updateExplore();
  bindSpotlight();
  initCanvas();
  initRotator();
}

function initServicios(){
  const grid=document.getElementById('svcFull');
  function renderFull(cat){
    const list=cat&&cat!=='Todas'?services.filter(s=>s.cat===cat):services;
    grid.innerHTML=list.map(s=>svcCard(s,true)).join('');
    bindSpotlight();
    grid.querySelectorAll('.reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('in'),40+Math.min(i,8)*55));
  }
  document.getElementById('catFilters').innerHTML=CATS.map((c,i)=>`<button class="cat-filter ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
  document.querySelectorAll('.cat-filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.cat-filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderFull(b.dataset.cat);});
  renderFull('Todas');
}

function initIndustrias(){
  const ivNav=document.getElementById('ivNav');
  const keys=Object.keys(industries);
  keys.forEach((k,i)=>{
    const b=document.createElement('button');
    b.dataset.k=k;
    b.innerHTML=`<svg class="ico" viewBox="0 0 16 16">${industries[k].ico}</svg>${k}`;
    b.onclick=()=>{document.querySelectorAll('#ivNav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderIndustry(k);};
    ivNav.appendChild(b);
  });
  const want=qp('i');
  const initial=keys.includes(want)?want:keys[0];
  document.querySelectorAll('#ivNav button').forEach(b=>b.classList.toggle('active',b.dataset.k===initial));
  renderIndustry(initial);
}

function initCasos(){
  const caseGrid = document.getElementById('caseGrid');

  caseGrid.innerHTML = cases.map(c=>`
    <div class="case-card reveal">
      <div class="case-top"><span class="case-ind">${c.ind}</span><span class="case-loc">${c.loc}</span></div>
      <h3>${c.name}</h3>
      <div class="case-ba">
        <div class="ba-col ba-before"><div class="h">Antes</div><div class="t">${c.before}</div></div>
        <div class="ba-col ba-after"><div class="h">Ahora</div><div class="t">${c.after}</div></div>
      </div>
      <div class="case-results">${c.res.map(r=>`<div class="case-res"><span class="n">${r[0]}</span><span class="l">${r[1]}</span></div>`).join('')}</div>
    </div>`).join('');

  requestAnimationFrame(() => {
    caseGrid.querySelectorAll('.case-card.reveal').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('in');
      }, i * 90);
    });
  });
}

function initProceso(){
  document.getElementById('faqList').innerHTML=faqs.map(f=>`
    <div class="faq-item"><button class="faq-q" onclick="this.closest('.faq-item').classList.toggle('open')">${f[0]}<span class="pm">+</span></button><div class="faq-a"><p>${f[1]}</p></div></div>`).join('');
}

function initCotiza(){
  const subject=qp('s')||'';
  const sub=document.getElementById('cotizaSubject');
  if(subject){sub.style.display='inline-flex';sub.querySelector('span').textContent=subject;}
  const msg=subject
    ?`Hola GIDEX 👋 Me interesa: *${subject}*. ¿Me pueden cotizar?`
    :`Hola GIDEX 👋 Quiero cotizar una automatización para mi negocio.`;
  document.getElementById('cotizaWA').href=waLink(msg);
}

function initContacto(){
  const fInd=document.getElementById('f-ind');
  Object.keys(industries).forEach(k=>{const o=document.createElement('option');o.value=k;o.textContent=k;fInd.appendChild(o);});
  const oOther=document.createElement('option');oOther.value='Otra';oOther.textContent='Otra';fInd.appendChild(oOther);
}

/* =================== NAV + REVEAL (all pages) =================== */
function setNavActive(){
  let p=location.pathname.replace(/\/index\.html$/,'').replace(/\/$/,'');
  if(p==='')p='/';
  document.querySelectorAll('.nav-links a[data-v]').forEach(a=>{
    const v=a.dataset.v;
    const match=(v===''&&p==='/')||(v!==''&&p.indexOf('/'+v)===0);
    a.classList.toggle('active',match);
  });
}
function navScroll(){
  const nav=document.getElementById('nav');
  addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
}
function revealObserver(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');}),{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
function toggleMenu(){document.getElementById('navLinks').classList.toggle('open');}

/* =================== AUTOMATION NETWORK CANVAS (home only) =================== */
function initCanvas(){
  const canvas=document.getElementById('net');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let W,H,DPR,nodes=[],pulses=[],lastW=0,frame=0;
  const mouse={x:-9999,y:-9999};
  const LINK=120,MOUSE_R=190;
  /* MOBILE FIX: no pointer interaction on touch; no rebuild on scroll-driven height changes */
  const isTouch=window.matchMedia('(max-width:768px)').matches||('ontouchstart'in window);
  function buildNodes(){
    nodes=[];const count=Math.max(34,Math.min(72,Math.floor(W*H/26000)));
    for(let i=0;i<count;i++)nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*0.18,vy:(Math.random()-0.5)*0.18,r:Math.random()*1.6+1.1,active:Math.random()<0.16,pulse:Math.random()*Math.PI*2});
  }
  function fit(rebuild){
    const hero=canvas.parentElement;DPR=Math.min(devicePixelRatio||1,2);
    const nw=hero.clientWidth,nh=hero.clientHeight;if(!nw||!nh)return;
    W=nw;H=nh;canvas.width=W*DPR;canvas.height=H*DPR;canvas.style.width=W+'px';canvas.style.height=H+'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
    if(rebuild||!nodes.length){buildNodes();lastW=nw;}
  }
  if(!isTouch){
    canvas.addEventListener('mousemove',e=>{const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;});
    canvas.addEventListener('mouseleave',()=>{mouse.x=-9999;mouse.y=-9999;});
  }
  /* width change => rebuild; height-only change (mobile URL bar / scroll) => keep particles, no jump */
  let rT;
  addEventListener('resize',()=>{clearTimeout(rT);rT=setTimeout(()=>{
    const w=canvas.parentElement.clientWidth;
    if(Math.abs(w-lastW)>2){fit(true);}else{fit(false);}
  },150);},{passive:true});
  function spawnPulse(){const a=nodes[Math.floor(Math.random()*nodes.length)];let best=null,bd=LINK;for(const b of nodes){if(b===a)continue;const d=Math.hypot(a.x-b.x,a.y-b.y);if(d<bd){bd=d;best=b;}}if(best)pulses.push({a,b:best,t:0,sp:0.012+Math.random()*0.014});}
  function draw(){
    requestAnimationFrame(draw);
    if(!W||!H)return;
    ctx.clearRect(0,0,W,H);frame++;
    if(frame%70===0&&pulses.length<14)spawnPulse();
    for(const n of nodes){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;n.pulse+=0.03;}
    for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
      const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<LINK){let alpha=(1-d/LINK)*0.32;const mx=(a.x+b.x)/2,my=(a.y+b.y)/2,md=Math.hypot(mx-mouse.x,my-mouse.y);let col='10,22,40';if(md<MOUSE_R){alpha+=(1-md/MOUSE_R)*0.5;col='46,91,255';}ctx.strokeStyle=`rgba(${col},${alpha})`;ctx.lineWidth=0.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
    }
    for(let i=pulses.length-1;i>=0;i--){const p=pulses[i];p.t+=p.sp;if(p.t>=1){pulses.splice(i,1);continue;}const x=p.a.x+(p.b.x-p.a.x)*p.t,y=p.a.y+(p.b.y-p.a.y)*p.t;ctx.beginPath();ctx.arc(x,y,2.4,0,Math.PI*2);ctx.fillStyle='rgba(46,91,255,0.9)';ctx.fill();ctx.beginPath();ctx.arc(x,y,5.5,0,Math.PI*2);ctx.fillStyle='rgba(46,91,255,0.15)';ctx.fill();}
    for(const n of nodes){const md=Math.hypot(n.x-mouse.x,n.y-mouse.y),near=md<MOUSE_R?(1-md/MOUSE_R):0;
      if(n.active){const tw=0.5+Math.sin(n.pulse)*0.3;ctx.beginPath();ctx.arc(n.x,n.y,n.r+1.5,0,Math.PI*2);ctx.fillStyle=`rgba(46,91,255,${0.22*tw+near*0.4})`;ctx.fill();ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle='rgba(46,91,255,0.85)';ctx.fill();}
      else{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=`rgba(10,22,40,${0.28+near*0.5})`;ctx.fill();}}
    if(mouse.x>-9000){const g=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,MOUSE_R);g.addColorStop(0,'rgba(46,91,255,0.06)');g.addColorStop(1,'rgba(46,91,255,0)');ctx.fillStyle=g;ctx.fillRect(mouse.x-MOUSE_R,mouse.y-MOUSE_R,MOUSE_R*2,MOUSE_R*2);}
  }
  fit(true);draw();
}

/* =================== HERO WORD ROTATOR (home only) =================== */
function initRotator(){
  const ROT=['restaurante','gimnasio','consultorio','spa','tienda','negocio'];
  const rotEl=document.getElementById('hRotator');
  const rwEl=document.getElementById('rwWord');
  if(!rotEl||!rwEl)return;
  const meas=document.createElement('span');
  meas.setAttribute('aria-hidden','true');
  meas.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;left:-9999px;top:0;pointer-events:none;';
  rotEl.parentElement.appendChild(meas);
  const wOf=w=>{meas.textContent=w;return meas.getBoundingClientRect().width;};
  let idx=0;const HOLD=620,OUT=320;
  function step(){
    idx++;const nw=ROT[idx];
    rotEl.style.width=wOf(nw)+'px';
    rwEl.style.opacity='0';rwEl.style.transform='translateY(-0.16em)';rwEl.style.filter='blur(7px)';
    setTimeout(()=>{
      rwEl.style.transition='none';rwEl.textContent=nw;rwEl.style.transform='translateY(0.20em)';rwEl.style.filter='blur(9px)';
      void rwEl.offsetWidth;
      rwEl.style.transition='';rwEl.style.opacity='1';rwEl.style.transform='translateY(0)';rwEl.style.filter='blur(0)';
      if(idx<ROT.length-1)setTimeout(step,HOLD);
    },OUT);
  }
  function start(){rotEl.style.width=wOf(rwEl.textContent)+'px';setTimeout(step,900);}
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(start);}else{addEventListener('load',start);}
}

/* =================== DISPATCH =================== */
function boot(){
  setNavActive();navScroll();revealObserver();
  if(document.getElementById('svcPreview'))initHome();
  if(document.getElementById('svcFull'))initServicios();
  if(document.getElementById('ivNav'))initIndustrias();
  if(document.getElementById('caseGrid'))initCasos();
  if(document.getElementById('faqList'))initProceso();
  if(document.getElementById('cotizaWA'))initCotiza();
  if(document.getElementById('cformBody'))initContacto();
}
if(document.readyState!=='loading')boot();else document.addEventListener('DOMContentLoaded',boot);
