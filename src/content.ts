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
} as const;

export const about = {
  hero: {
    badge: 'Hakkımızda',
    titleLine: 'Güçlerimizi birleştiriyor,',
    titleAccent: 'birlikte büyüyoruz.',
    subtitle:
      'Güç Birliği Networking (GBN), KOBİ sahiplerini ve girişimcileri güvene dayalı bir iş ağında buluşturur. Üyelerimiz kontaklarını ve bağlantılarını birbirine açarak yeni iş fırsatlarına ulaşır.',
  },
  story: {
    kicker: 'Biz kimiz?',
    title: '34 yıllık networking deneyimiyle kurulan bir iş ağı',
    paragraphs: [
      'GBN, 34 yıllık networking deneyimi üzerine kurulmuş, Türkiye merkezli bir iş ağıdır. KOBİ sahiplerini ve girişimcileri düzenli olarak bir araya getirir, aralarında kurulan bağlantıların somut işe dönüşmesini sağlar.',
      'Sistemimizde her sektörden yalnızca bir üye yer alır. Bu sayede üyeler arasında rekabet oluşmaz. Üyeler kontaklarını birbirine açar, ihtiyaç duydukları kişiye diğer üyelerin ağı üzerinden ulaşır ve birbirlerine iş yönlendirir.',
    ],
  },
  stats: [
    { id: 'stat-years', value: '34 yıl', label: 'networking deneyimi' },
    { id: 'stat-sector', value: '1 üye', label: 'her sektörden' },
    { id: 'stat-monthly', value: 'Her ay', label: 'networking buluşması' },
    { id: 'stat-reference', value: 'Referansla', label: 'üyelik' },
  ],
  vision: {
    title: 'Vizyonumuz',
    text: "KOBİ sahiplerinin ve girişimcilerin güvenle iş birliği yaptığı, Türkiye'nin önde gelen iş ağı olmak.",
  },
  mission: {
    title: 'Misyonumuz',
    text: 'Üyelerimizin kontaklarını ve bağlantılarını birbirine açtığı, güvene ve referansa dayalı bir networking sistemi kurmak ve bu sistemde kurulan her bağlantının somut işe dönüşmesini sağlamak.',
  },
  values: {
    title: 'Değerlerimiz',
    subtitle: 'Çalışma biçimimizi dört temel ilke belirler.',
    items: [
      {
        id: 'value-trust',
        title: 'Güven',
        description:
          'Ağımıza her üye referansla katılır. Üyelik başvuruları tek tek değerlendirilir ve üye sayısı kontrollü olarak artar.',
      },
      {
        id: 'value-cooperation',
        title: 'İş birliği',
        description:
          'Her sektörden yalnızca bir üye kabul ederiz. Böylece üyeler birbirinin çözüm ortağı olur.',
      },
      {
        id: 'value-sharing',
        title: 'Paylaşım',
        description:
          'Üyelerimiz kontaklarını ve bağlantılarını birbirine açar. Bağlantılar paylaşıldıkça tüm üyelerin iş kapasitesi artar.',
      },
      {
        id: 'value-results',
        title: 'Somut sonuç',
        description:
          'Güvene dayalı ve referans odaklı yönlendirmelerin somut işe dönüşmesini hedefleriz. Her üye hem referans sağlar hem de aradığı kontağa ulaşır.',
      },
    ],
  },
  meetings: {
    kicker: 'Buluşmalar',
    title: 'Her ay yüz yüze',
    text: 'Üyelerimiz her ay düzenlenen networking buluşmalarında bir araya gelir. Buluşmalar tanışma toplantısıyla başlar, spesifik taleplerle devam eder ve konuk konuşmacı sunumuyla sona erer. Panel görüşmeleri de üyelerin yüz yüze bağlantı kurmasına imkân tanır.',
    sectorsLabel: 'Ağımızda yer alan sektörlerden bazıları',
    sectors: ['Üretim', 'Yazılım', 'Lojistik', 'Finans'],
    cta: 'Yaklaşan Etkinlik',
  },
  cta: {
    title: 'Bir sonraki buluşmada tanışalım',
    description: 'Yaklaşan etkinliğin ayrıntılarını Etkinlikler sayfasında bulabilirsiniz.',
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
