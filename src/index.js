// hello-device-api · Express HTTP wrapper around hello-device-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'hello-device', version: '1.0.0' }));

app.post('/el', async (req, res) => {
  try {
    const { el } = await import('@ai-native-solutions/hello-device-sdk');
    const out = typeof el === 'function' ? await el(req.body) : { error: 'el not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderCard', async (req, res) => {
  try {
    const { renderCard } = await import('@ai-native-solutions/hello-device-sdk');
    const out = typeof renderCard === 'function' ? await renderCard(req.body) : { error: 'renderCard not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderGroups', async (req, res) => {
  try {
    const { renderGroups } = await import('@ai-native-solutions/hello-device-sdk');
    const out = typeof renderGroups === 'function' ? await renderGroups(req.body) : { error: 'renderGroups not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderSummary', async (req, res) => {
  try {
    const { renderSummary } = await import('@ai-native-solutions/hello-device-sdk');
    const out = typeof renderSummary === 'function' ? await renderSummary(req.body) : { error: 'renderSummary not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/probeAll', async (req, res) => {
  try {
    const { probeAll } = await import('@ai-native-solutions/hello-device-sdk');
    const out = typeof probeAll === 'function' ? await probeAll(req.body) : { error: 'probeAll not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/runTest', async (req, res) => {
  try {
    const { runTest } = await import('@ai-native-solutions/hello-device-sdk');
    const out = typeof runTest === 'function' ? await runTest(req.body) : { error: 'runTest not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('hello-device-api listening on :' + PORT));
