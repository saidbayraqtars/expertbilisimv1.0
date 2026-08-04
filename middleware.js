/**
 * Vercel Edge Middleware — panel.expertbilisim.com.tr vekili.
 *
 * NEDEN: Lisans/kontör paneli Cloudflare Worker'da duruyor
 * (vega-panel.expertbilisim.workers.dev). Daha önce bu alt alan adı 302 ile
 * oraya yönlendiriliyordu; tarayıcı workers.dev'e bağlanmak zorunda kalıyordu
 * ve *.workers.dev Türkiye'de DPI ile engellendiği için panel yalnız engeli
 * aşan makinelerde (DoH+ECH, GoodbyeDPI vb.) açılıyordu.
 *
 * ÇÖZÜM: yönlendirme yok, vekil var. Adres panel.expertbilisim.com.tr olarak
 * kalıyor; isteği Vercel sunucu tarafında Worker'a taşıyor. İstemci workers.dev
 * adına hiç TLS bağlantısı açmıyor, dolayısıyla filtreye takılmıyor.
 *
 * Middleware yönlendirme katmanından ÖNCE çalışır — vercel.json'daki "rewrites"
 * dosya sisteminden SONRA çalıştığı için "/" ana sitenin index.html'ine düşüyor
 * ve hiç tetiklenmiyordu; bu yüzden middleware kullanılıyor.
 *
 * Ana site bundan etkilenmez: başka alan adları anında next() ile geçer ve
 * beklenmedik bir hatada da next() döner (middleware siteyi asla kırmasın).
 */
import { next, rewrite } from '@vercel/edge';

export const config = {
    matcher: '/:path*',
};

const PANEL_HOST = 'panel.expertbilisim.com.tr';
const PANEL_ORIGIN = 'https://vega-panel.expertbilisim.workers.dev';

export default function middleware(request) {
    try {
        const url = new URL(request.url);
        if (url.hostname.toLowerCase() !== PANEL_HOST) return next();
        return rewrite(new URL(url.pathname + url.search, PANEL_ORIGIN));
    } catch {
        return next();
    }
}
