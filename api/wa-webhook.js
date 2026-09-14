/**
 * WhatsApp Cloud API webhook alıcısı (Meta doğrulama + olay bildirimleri).
 *
 * GET  — Meta, webhook kaydı sırasında hub.verify_token'ı burada doğrular,
 *        eşleşirse hub.challenge'ı aynen geri döner.
 * POST — mesaj/durum (delivered/read/failed) olayları buraya düşer.
 *
 * NOT: panel.expertbilisim.com.tr KULLANILAMAZ — middleware.js o host'taki
 * her isteği Cloudflare Worker'a proxy'liyor, bu fonksiyona hiç düşmez.
 * Callback URL kök/www domain üzerinden olmalı:
 *   https://www.expertbilisim.com.tr/api/wa-webhook
 *
 * WA_VERIFY_TOKEN Vercel proje ayarlarından environment variable olarak
 * eklenmeli (Meta App panelindeki Verify Token ile birebir aynı olmalı).
 */
export default function handler(req, res) {
    if (req.method === 'GET') {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode === 'subscribe' && token === process.env.WA_VERIFY_TOKEN) {
            return res.status(200).send(challenge);
        }
        return res.status(403).end();
    }

    if (req.method === 'POST') {
        console.log('WA webhook event:', JSON.stringify(req.body));
        // TODO: mesaj/durum olaylarını işle (cari eşleme, WA gönderim durumu vb.)
        return res.status(200).end();
    }

    return res.status(405).end();
}
