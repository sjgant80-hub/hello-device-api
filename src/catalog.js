// hello-device-api · shared catalogue (same shape as the SDK/MCP).
// No live browser tests server-side — browserOnly capabilities respond with 200 + note.

export const GROUPS = [
  { id:'sense',   name:'Sense',   sub:'What the device can perceive' },
  { id:'motor',   name:'Motor',   sub:'What the device can act on the world with' },
  { id:'store',   name:'Store',   sub:'Where the device keeps things' },
  { id:'link',    name:'Link',    sub:'How the device reaches other devices' },
  { id:'compute', name:'Compute', sub:'The raw power the device brings to bear' },
  { id:'express', name:'Express', sub:'How the device speaks back to you' },
  { id:'dream',   name:'Dream',   sub:'The quieter, background things a device can do' }
];

export const CAPABILITIES = [
  { id:'geo',          group:'sense',   name:'Location',              api:'navigator.geolocation',   desc:"Your device's rough or precise position, with permission.", browserOnly:true },
  { id:'camera',       group:'sense',   name:'Camera',                api:'getUserMedia video',      desc:"Reads video frames from your webcam, with permission.", browserOnly:true },
  { id:'mic',          group:'sense',   name:'Microphone',            api:'getUserMedia audio',      desc:"Captures live audio from your microphone, with permission.", browserOnly:true },
  { id:'ambient',      group:'sense',   name:'Ambient light',         api:'AmbientLightSensor',      desc:"Measures how bright the room around you is.", browserOnly:true },
  { id:'orient',       group:'sense',   name:'Motion & orientation',  api:'DeviceOrientationEvent',  desc:"How the device is being tilted and moved.", browserOnly:true },
  { id:'idle',         group:'sense',   name:'Idle detection',        api:'IdleDetector',            desc:"Notices when you stop touching mouse and keyboard.", browserOnly:true },

  { id:'bt',           group:'motor',   name:'Bluetooth',             api:'navigator.bluetooth',     desc:"Talks directly to nearby Bluetooth devices.", browserOnly:true },
  { id:'usb',          group:'motor',   name:'USB',                   api:'navigator.usb',           desc:"Connects to USB peripherals plugged into your device.", browserOnly:true },
  { id:'serial',       group:'motor',   name:'Serial ports',          api:'navigator.serial',        desc:"Reads and writes serial-port data — Arduino, sensors, kit.", browserOnly:true },
  { id:'hid',          group:'motor',   name:'HID devices',           api:'navigator.hid',           desc:"Talks to game controllers, keypads, and custom HID gear.", browserOnly:true },
  { id:'nfc',          group:'motor',   name:'NFC tags',              api:'NDEFReader',              desc:"Reads NFC tags when you tap your phone against them.", browserOnly:true },
  { id:'vibrate',      group:'motor',   name:'Vibration',             api:'navigator.vibrate',       desc:"Buzzes the device to get your attention.", browserOnly:true },

  { id:'idb',          group:'store',   name:'IndexedDB',             api:'window.indexedDB',        desc:"A structured database that lives in the browser.", browserOnly:true },
  { id:'localstorage', group:'store',   name:'Local storage',         api:'window.localStorage',     desc:"Simple key-value storage that persists across visits.", browserOnly:true },
  { id:'cache',        group:'store',   name:'Cache storage',         api:'caches',                  desc:"Stores fetched files for offline use.", browserOnly:true },
  { id:'fsaccess',     group:'store',   name:'File system access',    api:'showOpenFilePicker',      desc:"Reads and writes real files and folders on your disk.", browserOnly:true },
  { id:'persist',      group:'store',   name:'Persistent storage',    api:'navigator.storage',       desc:"Asks the browser not to evict your data under pressure.", browserOnly:true },

  { id:'ws',           group:'link',    name:'WebSocket',             api:'WebSocket',               desc:"A persistent two-way connection to a server.", browserOnly:false },
  { id:'wt',           group:'link',    name:'WebTransport',          api:'WebTransport',            desc:"Fast, low-latency streaming over HTTP/3.", browserOnly:true },
  { id:'rtc',          group:'link',    name:'WebRTC peer-to-peer',   api:'RTCPeerConnection',       desc:"Direct connections between two browsers without a server.", browserOnly:true },
  { id:'bc',           group:'link',    name:'Broadcast channel',     api:'BroadcastChannel',        desc:"Sends messages between tabs of the same site.", browserOnly:true },
  { id:'fetch',        group:'link',    name:'Fetch',                 api:'window.fetch',            desc:"The modern way to request things from the network.", browserOnly:false },

  { id:'webgpu',       group:'compute', name:'WebGPU',                api:'navigator.gpu',           desc:"Direct access to the graphics card for rendering and ML.", browserOnly:true },
  { id:'wasm',         group:'compute', name:'WebAssembly',           api:'WebAssembly',             desc:"Runs near-native-speed code in the browser.", browserOnly:false },
  { id:'workers',      group:'compute', name:'Web workers',           api:'Worker',                  desc:"Runs scripts on background threads without freezing the page.", browserOnly:true },
  { id:'sw',           group:'compute', name:'Service worker',        api:'navigator.serviceWorker', desc:"A background script that stays alive and enables offline use.", browserOnly:true },
  { id:'xr',           group:'compute', name:'WebXR',                 api:'navigator.xr',            desc:"Virtual reality and augmented reality inside the browser.", browserOnly:true },
  { id:'crypto',       group:'compute', name:'Web Crypto',            api:'crypto.subtle',           desc:"Real cryptography — keys, signatures, hashes — in the browser.", browserOnly:false },

  { id:'audio',        group:'express', name:'Web Audio',             api:'AudioContext',            desc:"Generates and processes sound with fine control.", browserOnly:true },
  { id:'speech',       group:'express', name:'Speech synthesis',      api:'speechSynthesis',         desc:"Reads text out loud in a chosen voice.", browserOnly:true },
  { id:'speechrec',    group:'express', name:'Speech recognition',    api:'SpeechRecognition',       desc:"Turns spoken words into text.", browserOnly:true },
  { id:'midi',         group:'express', name:'Web MIDI',              api:'requestMIDIAccess',       desc:"Talks to MIDI keyboards, drum pads, and synths.", browserOnly:true },
  { id:'notify',       group:'express', name:'Notifications',         api:'Notification',            desc:"Shows system-level pop-ups even when the tab isn't focused.", browserOnly:true },
  { id:'clip',         group:'express', name:'Clipboard',             api:'navigator.clipboard',     desc:"Reads from and writes to the system clipboard.", browserOnly:true },
  { id:'share',        group:'express', name:'Share',                 api:'navigator.share',         desc:"Passes a link, file, or text to another app on your device.", browserOnly:true },
  { id:'wake',         group:'express', name:'Wake lock',             api:'navigator.wakeLock',      desc:"Keeps the screen from going to sleep while something matters.", browserOnly:true },

  { id:'battery',      group:'dream',   name:'Battery status',        api:'navigator.getBattery',    desc:"Reports charge level and whether the device is plugged in.", browserOnly:true },
  { id:'net',          group:'dream',   name:'Network info',          api:'navigator.connection',    desc:"Reports the rough type of connection (wifi, 4G, offline).", browserOnly:true },
  { id:'push',         group:'dream',   name:'Push messages',         api:'PushManager',             desc:"Receives messages from a server even when the tab is closed.", browserOnly:true },
  { id:'bgsync',       group:'dream',   name:'Background sync',       api:'SyncManager',             desc:"Retries work when a lost network connection comes back.", browserOnly:true },
  { id:'pay',          group:'dream',   name:'Payment request',       api:'PaymentRequest',          desc:"A standard checkout sheet for cards and wallets.", browserOnly:true },
  { id:'contact',      group:'dream',   name:'Contact picker',        api:'navigator.contacts',      desc:"Lets you pick contacts from your phone with permission.", browserOnly:true },
  { id:'present',      group:'dream',   name:'Presentation',          api:'navigator.presentation',  desc:"Mirrors or streams the page to a nearby display.", browserOnly:true },
  { id:'creds',        group:'dream',   name:'Credential store',      api:'navigator.credentials',   desc:"Stores passkeys and passwords with the browser.", browserOnly:true }
];

const byId   = Object.fromEntries(CAPABILITIES.map(c=>[c.id,c]));
const byName = Object.fromEntries(CAPABILITIES.map(c=>[c.name.toLowerCase(),c]));

export function resolve(nameOrId){
  if(!nameOrId) return null;
  const key = String(nameOrId).trim().toLowerCase();
  return byId[key] || byName[key] || null;
}

function nodeCheck(id){
  try {
    if(id==='wasm')   return typeof WebAssembly !== 'undefined';
    if(id==='crypto') return !!(globalThis.crypto && globalThis.crypto.subtle);
    if(id==='fetch')  return typeof fetch !== 'undefined';
  } catch { /* fall through */ }
  return null;
}

export function check(nameOrId){
  const cap = resolve(nameOrId);
  if(!cap) return { error: 'unknown capability', input: nameOrId };
  const base = { id:cap.id, name:cap.name, group:cap.group, api:cap.api, description:cap.desc, browserOnly:cap.browserOnly };
  if(cap.browserOnly) return { ...base, available:null, note:'browser-only · cannot detect server-side' };
  const ok = nodeCheck(cap.id);
  return { ...base, available: ok===null ? null : !!ok };
}

export async function test(nameOrId){
  const cap = resolve(nameOrId);
  if(!cap) return { error: 'unknown capability', input: nameOrId };
  if(cap.browserOnly){
    return { id:cap.id, name:cap.name, ok:false, error:'browser-only · run this test client-side via @ai-native-solutions/hello-device-sdk' };
  }
  try {
    if(cap.id==='wasm'){
      const mod = new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0]));
      new WebAssembly.Instance(mod);
      return { id:cap.id, name:cap.name, ok:true, result:'compiled + instantiated empty module' };
    }
    if(cap.id==='crypto'){
      const k = await globalThis.crypto.subtle.generateKey({name:'ECDSA',namedCurve:'P-256'},true,['sign','verify']);
      return { id:cap.id, name:cap.name, ok:true, result:'key generated · '+k.privateKey.algorithm.name };
    }
    if(cap.id==='fetch'){
      return { id:cap.id, name:cap.name, ok:true, result:'fetch is a global function' };
    }
    return { id:cap.id, name:cap.name, ok:false, error:'no server-side test available' };
  } catch(e){
    return { id:cap.id, name:cap.name, ok:false, error:(e && e.message) || 'failed' };
  }
}

export function report(){
  const grouped = {};
  for(const g of GROUPS) grouped[g.id] = { name:g.name, sub:g.sub, capabilities:[] };
  for(const c of CAPABILITIES){
    const r = check(c.id);
    grouped[c.group].capabilities.push({
      id:c.id, name:c.name, api:c.api, description:c.desc,
      browserOnly:c.browserOnly, available:r.available, note:r.note
    });
  }
  return {
    tool: 'Hello Device API',
    publisher: 'AI-Native Solutions',
    generated: new Date().toISOString(),
    totals: { total: CAPABILITIES.length, groups: GROUPS.length, browserOnly: CAPABILITIES.filter(c=>c.browserOnly).length },
    grouped_capabilities: grouped
  };
}
