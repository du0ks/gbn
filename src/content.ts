/**
 * Sitedeki tüm metinler burada. Metin değişikliği için yalnızca bu dosyayı düzenlemek yeterli.
 */
export const home = {
  hero: {
    badge: 'Türkiye merkezli iş ağı',
    titleLine: 'Networkünü aç,',
    titleAccent: 'işin büyüsün.',
    subtitle:
      'GBN, KOBİ sahiplerinin ve girişimcilerin kontaklarını ve bağlantılarını birbirine açtığı bir iş ağıdır. Üyelerine güvenilir iş ortaklıkları ve somut sonuçlar sağlar.',
    primaryCta: { label: 'Üyelik Başvurusu', href: '/uyelik' },
    secondaryCta: { label: 'Nasıl Çalışır?', href: '#nasil-calisir' },
    tags: [
      { id: 'tag-kobi', text: 'KOBİ odaklı' },
      { id: 'tag-turkiye', text: "Türkiye'nin networkü" },
      { id: 'tag-guven', text: 'Güven temelli' },
    ],
  },
  howItWorks: {
    title: 'Sistem nasıl çalışır?',
    subtitle: "GBN'de iş geliştirme dört net adımda işler:",
    imageAlt: 'İki iş insanı güvene dayalı ortaklık için el sıkışıyor',
    steps: [
      {
        id: 'step-1',
        number: '01',
        title: 'Üye ol',
        description:
          "GBN'de her sektörden yalnızca bir katılımcı kabul edilir. Bu sayede üyeler arasında asla rekabet yaşanmaz.",
      },
      {
        id: 'step-2',
        number: '02',
        title: 'Kimi arıyorsun?',
        description:
          'Aradığın kontağa, grup üyelerinin kendi ağları üzerinden ulaş. Kimin kimi tanıdığını bilemezsin.',
      },
      {
        id: 'step-3',
        number: '03',
        title: 'Ağını aç',
        description:
          'Sen de kendi kontaklarını ve bağlantılarını diğer üyelere aç; böylece tüm ekibin iş kapasitesi artsın.',
      },
      {
        id: 'step-4',
        number: '04',
        title: 'İşini büyüt',
        description:
          'Güvene dayalı ve referans odaklı yönlendirmeler somut işe dönüşür. Her üye hem referans sağlar hem de aradığı kontağa ulaşır.',
        tagline: 'Paylaşarak işini büyüt!',
      },
    ],
  },
  benefits: {
    title: 'Üye olmanı sağlayan avantajlar',
    subtitle:
      'GBN yalnızca kartvizit alışverişi yapılan bir yer değildir. Sistem, kurulan her bağlantının somut işe dönüşeceği şekilde tasarlanmıştır.',
    items: [
      {
        id: 'benefit-referrals',
        title: 'Doğrudan iş yönlendirmesi',
        description:
          'Üyeler birbirine iş yönlendirir. Üyeden üyeye iş aktarımı, sistemin kalbidir.',
        size: 'large',
      },
      {
        id: 'benefit-trust',
        title: 'Güvene dayalı ortaklık',
        description:
          'Her üye, referansıyla gelir. Risk almadan, güvenilir iş ortaklarıyla çalışırsın.',
        size: 'small',
      },
      {
        id: 'benefit-events',
        title: 'Düzenli etkinlikler',
        description:
          'Düzenli networking toplantıları ve panel görüşmeleriyle yüz yüze bağlantı kurarsın.',
        size: 'small',
      },
      {
        id: 'benefit-sector',
        title: 'Sektör çeşitliliği',
        description:
          'Üretimden yazılıma, lojistikten finansa — farklı sektörlerden üyeler birbirinin çözüm ortağı olur.',
        size: 'medium',
      },
      {
        id: 'benefit-network',
        title: 'Üye networkü',
        description:
          'Sektör, uzmanlık ve iletişim bilgileriyle zengin bir üye networkü. İhtiyacın olan üyeyi saniyeler içinde bul.',
        size: 'medium',
      },
    ],
  },
  event: {
    label: 'Yaklaşan etkinlik',
    day: '21',
    month: 'Aralık',
    year: '2026',
    title: 'GBN Aylık Networking Buluşması',
    description:
      'Buluşma tanışma toplantısıyla başlayacak, spesifik taleplerle devam edecek ve konuk konuşmacı sunumuyla sona erecek.',
    location: 'Mekân duyuruda açıklanacak',
    cta: { label: 'Etkinlikler Sayfası', href: '/etkinlikler' },
  },
  cta: {
    kicker: 'Üyelik',
    title: 'Aramıza katıl, networkün gücüyle çalış',
    description:
      'GBN üyeliği başvuru üzerine kuruludur. Her başvuru değerlendirilir; ağın güven dengesini korumak için üye sayısı kontrollü büyür.',
    primaryCta: { label: 'Başvuru Formu', href: '/uyelik' },
    secondaryCta: { label: 'Sorularını Sor', href: '/iletisim' },
  },
} as const;

export const social = {
  linkedin: 'https://www.linkedin.com/company/inovakademiltd/',
  instagram: 'https://www.instagram.com/inovakademi/',
  inovakademi: 'https://inovakademi.com/',
} as const;

export const about = {
  hero: {
    badge: 'Hakkımızda',
    titleLine: 'Bağlantılar paylaşıldıkça',
    titleAccent: 'iş büyür.',
    subtitle:
      "GBN, KOBİ sahiplerini ve girişimcileri güvene dayalı bir iş ağında buluşturmak için kuruldu. Arkasında İnovakademi'nin 34 yılı aşkın eğitim, danışmanlık ve networking deneyimi var.",
  },
  story: {
    kicker: 'Hikâyemiz',
    title: 'Tek seferlik tanışmaları kalıcı bir iş ağına dönüştürdük',
    paragraphs: [
      "İnovakademi, Türkiye'nin dört bir yanında oda, borsa ve organize sanayi bölgeleriyle birlikte Dış Ticaret Networking etkinlikleri düzenliyor. Bu buluşmalar bir gerçeği defalarca gösterdi: Doğru kişiyle tanışan bir işletme, aylarca aradığı bağlantıya bir anda ulaşabiliyor.",
      'GBN, bu tanışmaları düzenli ve güvene dayalı bir iş ağına dönüştürmek için doğdu. Her sektörden yalnızca bir üyenin yer aldığı bu yapıda üyeler birbirinin rakibi değil, iş ortağıdır. Kontaklarını ve bağlantılarını birbirine açar, birlikte büyürler.',
    ],
  },
  stats: [
    { id: 'stat-years', value: '34+', label: 'yıllık eğitim ve danışmanlık deneyimi' },
    { id: 'stat-participants', value: '40.000+', label: 'eğitim katılımcısı' },
    { id: 'stat-companies', value: 'Yüzlerce', label: 'şirket ve STK\'ya danışmanlık' },
    { id: 'stat-cities', value: '6 il', label: 'Dış Ticaret Networking buluşmaları' },
  ],
  vision: {
    title: 'Vizyonumuz',
    text: 'KOBİ\'lerin ve girişimcilerin güvenle bağlandığı, paylaşarak büyüdüğü Türkiye\'nin en güçlü iş ağı olmak.',
  },
  mission: {
    title: 'Misyonumuz',
    text: 'Üyelerin kontaklarını ve bağlantılarını birbirine açtığı; güvene dayalı, referans odaklı ve somut işe dönüşen bir networking sistemi kurmak ve bu sistemi sürekli geliştirmek.',
  },
  values: {
    title: 'Değerlerimiz',
    subtitle: 'GBN\'yi sıradan bir networking grubundan ayıran dört ilke:',
    items: [
      {
        id: 'value-trust',
        title: 'Güven',
        description:
          'Her üye ağa referansla katılır. Şeffaflık ve sorumlulukla hareket ederiz.',
      },
      {
        id: 'value-cooperation',
        title: 'Rekabet değil, iş birliği',
        description:
          'Her sektörden yalnızca bir üye kabul ederiz. Üyeler birbirinin rakibi değil, çözüm ortağıdır.',
      },
      {
        id: 'value-sharing',
        title: 'Paylaşım',
        description:
          'Kontaklarımızı ve bağlantılarımızı birbirimize açarız. Paylaştıkça hepimizin iş kapasitesi artar.',
      },
      {
        id: 'value-results',
        title: 'Somut sonuç',
        description:
          'Tanışmaları kartvizit alışverişinde bırakmayız; her bağlantının somut işe dönüşmesi için çalışırız.',
      },
    ],
  },
  inovakademi: {
    kicker: 'Bir İnovakademi girişimi',
    title: 'Deneyimli bir ekibin güvencesiyle',
    text: 'İnovakademi; 34 yılı aşkın deneyime sahip yönetim ekibi, eğitmen ve danışman kadrosuyla bugüne kadar 40.000\'i aşkın katılımcıya eğitim vermiş, yüzlerce şirket ve STK\'ya danışmanlık yapmıştır. Eğitim, danışmanlık, UR-GE, analiz ve raporlama, Dış Ticaret Networking ve sürdürülebilirlik alanlarında KOBİ\'lerin kurumsal gelişimine destek olur.',
    citiesLabel: 'Dış Ticaret Networking buluşmalarının düzenlendiği iller',
    cities: ['Ankara', 'Adana', 'Antalya', 'Trabzon', 'Sakarya', 'Gaziantep'],
    cta: 'inovakademi.com',
  },
  cta: {
    title: 'Bir sonraki buluşmada tanışalım',
    description:
      'GBN\'yi en iyi anlatan şey, bir buluşmaya katılmaktır. Yaklaşan etkinliğe göz at, ağın nasıl çalıştığını yakından gör.',
    eventsLabel: 'Etkinlikleri Gör',
    membershipLabel: 'Üye Ol',
  },
} as const;

export const events = {
  hero: {
    badge: 'Etkinlikler',
    titleLine: 'Yüz yüze tanış,',
    titleAccent: 'birlikte büyü.',
    subtitle:
      'GBN üyeleri her ay düzenli networking buluşmalarında bir araya gelir. Tanışır, taleplerini paylaşır ve birbirine iş yönlendirir.',
  },
  upcoming: {
    label: 'Yaklaşan etkinlik',
    day: '21',
    month: 'Aralık',
    year: '2026',
    weekday: 'Pazartesi',
    title: 'GBN Aylık Networking Buluşması',
    description:
      'Buluşma tanışma toplantısıyla başlayacak, spesifik taleplerle devam edecek ve konuk konuşmacı sunumuyla sona erecek.',
    program: [
      {
        id: 'program-1',
        title: 'Tanışma toplantısı',
        description: 'Katılımcılar kendini ve işini kısaca tanıtır.',
      },
      {
        id: 'program-2',
        title: 'Spesifik talepler',
        description:
          'Herkes aradığı kontağı, ürünü veya iş ortağını net bir talep olarak paylaşır.',
      },
      {
        id: 'program-3',
        title: 'Konuk konuşmacı sunumu',
        description: 'Buluşma, alanında deneyimli bir konuşmacının sunumuyla sona erer.',
      },
    ],
    details: [
      { id: 'detail-date', label: 'Tarih', value: '21 Aralık 2026, Pazartesi' },
      { id: 'detail-place', label: 'Saat ve mekân', value: 'Duyuruda açıklanacak' },
    ],
  },
  follow: {
    title: 'Duyurulardan ilk sen haberdar ol',
    description:
      'Mekân, saat ve kayıt bilgileri sosyal medya hesaplarımızdan duyurulacak.',
  },
} as const;
