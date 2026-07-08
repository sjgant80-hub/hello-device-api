#!/usr/bin/env node
// hello-device-api · thin HTTP proxy over the Hello Device catalogue.
// Zero framework · Node's built-in http module. MIT · AI-Native Solutions.

import http from 'node:http';
import { CAPABILITIES, GROUPS, resolve, check, test, report } from './catalog.js';

const PORT = parseInt(process.env.PORT || '8787', 10);

function json(res, status, obj){
  const body = JSON.stringify(obj, null, 2);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'cache-control': 'no-store'
  });
  res.end(body);
}

const routes = [
  { m:'GET', re:/^\/$/, h: (_req,res) => json(res, 200, {
    tool: 'Hello Device API',
    version: '1.0.0',
    publisher: 'AI-Native Solutions',
    endpoints: {
      'GET /health':          'liveness check',
      'GET /capabilities':    'full capability catalogue (metadata only)',
      'GET /groups':          'the seven categories',
      'GET /check/:name':     'availability check for one capability (server-side)',
      'GET /test/:name':      'live server-side test (only wasm/crypto/fetch — browser-only capabilities return 200 with browser-only note)',
      'GET /report':          'grouped catalogue + summary'
    },
    note: 'Browser-only capabilities (~40 of the 45) can only be truly tested in a real browser. Use @ai-native-solutions/hello-device-sdk client-side for those.'
  })},
  { m:'GET', re:/^\/health$/, h: (_req,res) => json(res, 200, { ok:true, ts: new Date().toISOString() }) },
  { m:'GET', re:/^\/capabilities$/, h: (_req,res) => json(res, 200, {
    total: CAPABILITIES.length,
    capabilities: CAPABILITIES.map(c=>({ id:c.id, name:c.name, group:c.group, api:c.api, description:c.desc, browserOnly:c.browserOnly }))
  })},
  { m:'GET', re:/^\/groups$/, h: (_req,res) => json(res, 200, { groups: GROUPS }) },
  { m:'GET', re:/^\/check\/(.+)$/, h: (req,res,m) => {
    const name = decodeURIComponent(m[1]);
    const result = check(name);
    json(res, result.error ? 404 : 200, result);
  }},
  { m:'GET', re:/^\/test\/(.+)$/, h: async (req,res,m) => {
    const name = decodeURIComponent(m[1]);
    if(!resolve(name)) return json(res, 404, { error:'unknown capability', input:name });
    const result = await test(name);
    json(res, 200, result);
  }},
  { m:'GET', re:/^\/report$/, h: (_req,res) => json(res, 200, report()) }
];

const server = http.createServer(async (req, res) => {
  if(req.method === 'OPTIONS'){
    res.writeHead(204, {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'content-type'
    });
    return res.end();
  }
  const url = new URL(req.url, 'http://x');
  for(const r of routes){
    if(r.m !== req.method) continue;
    const m = url.pathname.match(r.re);
    if(!m) continue;
    try { await r.h(req, res, m); }
    catch(e){ json(res, 500, { error:'internal', message:(e && e.message) || 'failed' }); }
    return;
  }
  json(res, 404, { error:'not found', path: url.pathname });
});

server.listen(PORT, () => {
  console.log('hello-device-api · listening on :' + PORT + ' · ' + CAPABILITIES.length + ' capabilities');
});
