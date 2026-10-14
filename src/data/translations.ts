export type Language = 'th' | 'en';

export interface TranslationsType {
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    projects: string;
    testimonials: string;
    process: string;
    quote: string;
    contact: string;
    admin: string;
    menuBtn: string;
    menuHeading: string;
    menuSubheading: string;
    directLine: string;
    requestQuoteBtn: string;
    legalTaxId: string;
    callNow: string;
    closeMenu: string;
  };
  announcement: {
    badge: string;
    text: string;
    urgent: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    description: string;
    ctaQuote: string;
    ctaServices: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    cardBadge: string;
    cardTitle: string;
    cardDesc: string;
    cardStd1: string;
    cardStd2: string;
    cardStd3: string;
    cardStd4: string;
  };
  about: {
    tag: string;
    title: string;
    heading: string;
    desc1: string;
    desc2: string;
    guaranteeText: string;
    consultBtn: string;
    corpIdTitle: string;
    directorTitle: string;
    managerTitle: string;
    standardsTitle: string;
    standardItems: string[];
    statProjects: string;
    statProjectsLabel: string;
    statExp: string;
    statExpLabel: string;
  };
  services: {
    tag: string;
    title: string;
    heading: string;
    subtitle: string;
    filterAll: string;
    getQuote: string;
    consultTeam: string;
    items: {
      category: string;
      title: string;
      badge: string;
      summary: string;
      features: string[];
    }[];
  };
  whyUs: {
    tag: string;
    title: string;
    heading: string;
    subtitle: string;
    pillars: {
      num: string;
      title: string;
      subtitle: string;
      points?: string[];
      desc?: string;
    }[];
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
    ctaCall: string;
  };
  projects: {
    tag: string;
    title: string;
    heading: string;
    subtitle: string;
    filterAll: string;
    filterColdRoom: string;
    filterHVAC: string;
    filterDuct: string;
    filterChiller: string;
    filterCommercial: string;
    scopeLabel: string;
    locationLabel: string;
    flagshipBadge: string;
    verifiedBadge: string;
    items: {
      id: string;
      title: string;
      client: string;
      category: string;
      location: string;
      description: string;
      scope: string;
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    heading: string;
    subtitle: string;
    filterAll: string;
    filterColdRoom: string;
    filterHVAC: string;
    filterDuct: string;
    verifiedBadge: string;
    scoreLabel: string;
    resultsLabel: string;
    moreDetails: string;
    bannerBadge: string;
    bannerHeading: string;
    bannerSubheading: string;
    bannerQuoteBtn: string;
    bannerCallBtn: string;
    modalInspected: string;
    modalResultsTitle: string;
    modalSimilarTitle: string;
    modalQuoteBtn: string;
    stats: {
      metric: string;
      label: string;
      subtext: string;
    }[];
    items: {
      id: string;
      clientName: string;
      clientCompany: string;
      clientPosition: string;
      projectTitle: string;
      category: string;
      categoryLabel: string;
      location: string;
      highlight: string;
      quote: string;
      results: string[];
      date: string;
    }[];
  };
  process: {
    tag: string;
    title: string;
    heading: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      subtitle: string;
      desc: string;
      badge: string;
      points: string[];
    }[];
  };
  quote: {
    tag: string;
    title: string;
    subtitle: string;
    systemLabel: string;
    jobTypeLabel: string;
    jobTypes: { id: string; label: string }[];
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    lineLabel: string;
    linePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    locationLabel: string;
    locationPlaceholder: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    urgentCheckbox: string;
    preferredDateLabel: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    budgetOptions: string[];
    submitBtn: string;
    submittingBtn: string;
    directCallPrompt: string;
    successTitle: string;
    successMessage: string;
    trackingIdLabel: string;
    newQuoteBtn: string;
    emergencyCall: string;
    guaranteeTitle: string;
    guaranteeItem1: string;
    guaranteeItem2: string;
    guaranteeItem3: string;
  };
  contact: {
    tag: string;
    title: string;
    heading: string;
    subtitle: string;
    leadershipTitle: string;
    directorRole: string;
    managerRole: string;
    officeTitle: string;
    hoursLabel: string;
    hoursValue: string;
    areasLabel: string;
    areasValue: string;
    mapDirectionsBtn: string;
    callDirectorBtn: string;
    callManagerBtn: string;
    chatLineBtn: string;
  };
  footer: {
    desc: string;
    systemsHeading: string;
    contactHeading: string;
    officeHeading: string;
    adminPortalBtn: string;
    rightsReserved: string;
    backToTop: string;
    trackRecordLink: string;
    testimonialsLink: string;
  };
  floating: {
    callTitle: string;
    lineTitle: string;
    quoteTitle: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationsType> = {
  th: {
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับบริษัท (ABOUT US)',
      services: 'ขอบเขตบริการหลัก (OUR SERVICES)',
      whyUs: 'ทำไมต้องเลือกเรา (WHY CHOOSE US)',
      projects: 'ตัวอย่างโครงการและความไว้วางใจ (TRACK RECORD)',
      testimonials: 'เสียงตอบรับลูกค้าองค์กร (TESTIMONIALS)',
      process: 'มาตรฐานวิศวกรรม (5 ขั้นตอน)',
      quote: 'ประเมินราคา / นัดดูหน้างาน',
      contact: 'คณะผู้บริหารและสถานที่ติดต่อ',
      admin: 'ระบบจัดการ (Admin)',
      menuBtn: 'เมนู',
      menuHeading: '3T INTERCOOL & SERVICE',
      menuSubheading: 'เมนูหัวข้อระบบงานทั้งหมด',
      directLine: 'สายตรงวิศวกรรม',
      requestQuoteBtn: 'ขอใบเสนอราคา',
      legalTaxId: 'เลขทะเบียนนิติบุคคล',
      callNow: 'โทรสายตรง',
      closeMenu: 'ปิดหน้าต่าง'
    },
    announcement: {
      badge: 'ประกาศ',
      text: 'ยินดีต้อนรับสู่ บจก. 3ต อินเตอร์คูล แอนด์ เซอร์วิส - บริการงานระบบปรับอากาศ ห้องเย็น ท่อลม ชิลเลอร์ และตู้แช่ครบวงจร',
      urgent: 'บริการด่วน 24 ชม. รับสายทันที'
    },
    hero: {
      badge: 'HVAC & Industrial Cooling Engineering',
      headlinePart1: 'COOLING',
      headlinePart2: 'BEYOND LIMITS',
      subtitle: 'วิศวกรรมความเย็นและปรับอากาศครบวงจร • มาตรฐานสากล',
      description: 'บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด มุ่งมั่นสร้างสรรค์งานวิศวกรรมระบบทำความเย็น ระบบปรับอากาศ ห้องเย็นอุตสาหกรรม และงานท่อระบายอากาศ ด้วยมาตรฐานความปลอดภัยสูงสุดและความประหยัดพลังงานที่ยั่งยืน',
      ctaQuote: 'ขอใบเสนอราคาโครงการ',
      ctaServices: 'สำรวจระบบบริการ 5 ด้าน',
      stat1Value: '100%',
      stat1Label: 'ตรวจรับงานตรงเวลา',
      stat2Value: '±0.5°C',
      stat2Label: 'ความแม่นยำอุณหภูมิห้องเย็น',
      stat3Value: '24/7',
      stat3Label: 'ทีมช่างวิศวกรรมฉุกเฉิน',
      cardBadge: '3T Corporate Portfolio',
      cardTitle: 'วิศวกรรมความเย็นระดับอาคารและอุตสาหกรรม',
      cardDesc: 'พร้อมรองรับโครงการขนาดใหญ่ อาคารสำนักงาน ศูนย์กระจายสินค้า โรงงานอาหาร โรงแรม และห้างสรรพสินค้า',
      cardStd1: 'มาตรฐานวิศวกรรม ASHRAE & SMACNA',
      cardStd2: 'ช่างผ่านการรับรองความปลอดภัย กทม. & นิคมฯ',
      cardStd3: 'รับประกันงานติดตั้ง 1 ปีเต็ม พร้อมบริการ PM',
      cardStd4: 'ควบคุมงบประมาณชัดเจน ไม่บานปลาย 100%'
    },
    about: {
      tag: '3T INTERCOOL & SERVICE',
      title: 'เกี่ยวกับบริษัท (ABOUT US)',
      heading: 'ผู้เชี่ยวชาญด้านงานวิศวกรรมระบบความเย็นและระบายอากาศ',
      desc1: 'บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด ดำเนินธุรกิจเป็นผู้เชี่ยวชาญด้านงานวิศวกรรมระบบความเย็นและระบบหมุนเวียนอากาศ (HVAC & Refrigeration Services)',
      desc2: 'เราให้บริการครอบคลุมตั้งแต่การออกแบบ คำนวณภาระทำความเย็น เขียนแบบ ติดตั้ง ตลอดจนการบำรุงรักษาเชิงป้องกันสำหรับอาคาร โรงงานอุตสาหกรรม คลังสินค้า และธุรกิจเชิงพาณิชย์ทุกขนาด ด้วยทีมช่างและวิศวกรมืออาชีพที่มุ่งเน้นคุณภาพ ความปลอดภัย และการประหยัดพลังงานสูงสุด',
      guaranteeText: 'มาตรฐานวิศวกรรม • ปลอดภัย • ประหยัดพลังงาน',
      consultBtn: 'ปรึกษาวิศวกรโครงการ',
      corpIdTitle: 'ข้อมูลนิติบุคคล',
      directorTitle: 'กรรมการผู้จัดการ',
      managerTitle: 'ผู้จัดการฝ่ายปฏิบัติการ',
      standardsTitle: 'มาตรฐานวิศวกรรมและข้อกำหนด',
      standardItems: [
        'มาตรฐานสมาคมวิศวกรรมปรับอากาศ ASHRAE Standard',
        'มาตรฐานการติดตั้งท่อลมและระบายอากาศ SMACNA',
        'มาตรฐานการตรวจสอบความปลอดภัยทางไฟฟ้าและแรงดันน้ำยา',
        'มาตรฐานการจัดการสารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม'
      ],
      statProjects: '150+',
      statProjectsLabel: 'โครงการติดตั้งสำเร็จ',
      statExp: '10+',
      statExpLabel: 'ปีประสบการณ์งานวิศวกรรม'
    },
    services: {
      tag: 'OUR CAPABILITIES',
      title: 'ขอบเขตบริการหลัก (OUR SERVICES)',
      heading: 'งานวิศวกรรมระบบทำความเย็นครบวงจร 5 ด้าน',
      subtitle: 'บริการออกแบบ ติดตั้ง โอเวอร์ฮอล ซ่อมบำรุง และ PM รายปี ด้วยทีมวิศวกรและช่างผู้ชำนาญการ',
      filterAll: 'ทั้งหมด (5 ระบบ)',
      getQuote: 'ขอราคาบริการนี้',
      consultTeam: 'ปรึกษาทีมช่างด่วน',
      items: [
        {
          category: 'AIR_CONDITIONING',
          title: 'งานระบบ Air Conditioning System & Commercial Fridge',
          badge: 'ยอดนิยมสำหรับอาคาร',
          summary: 'บริการติดตั้ง ซ่อมแซม ย้ายจุด และบำรุงรักษาเครื่องปรับอากาศทุกขนาดสำหรับอาคาร สำนักงาน โรงงาน และที่พักอาศัย',
          features: [
            'เครื่องปรับอากาศประเภท Split Type (แบบแขวน, ติดผนัง, ฝังฝ้า 4 ทิศทาง)',
            'ระบบปรับอากาศแบบรวมศูนย์ VRV / VRF ประหยัดพลังงานสำหรับอาคารสูง',
            'ระบบปรับอากาศแบบ Package Unit และ Chilled Water Air Handling Unit (AHU)',
            'โปรแกรมล้างแอร์ บำรุงรักษาเชิงป้องกัน (Preventive Maintenance) ประจำปี'
          ]
        },
        {
          category: 'COLD_ROOM',
          title: 'งานระบบ Cold Room System (ห้องเย็นควบคุมอุณหภูมิ)',
          badge: 'มาตรฐานอุตสาหกรรม',
          summary: 'ออกแบบ ผลิต และติดตั้งห้องเย็นเก็บรักษาความสดสำหรับคลังสินค้า โรงงานแปรรูปอาหาร ภัตตาคาร และซูเปอร์มาร์เก็ต',
          features: [
            'ห้องเย็นชิล (Chiller Room) อุณหภูมิ 0°C ถึง +8°C สำหรับผัก ผลไม้ เครื่องดื่ม',
            'ห้องแช่แข็ง (Freezer Room) อุณหภูมิ -18°C ถึง -25°C สำหรับเนื้อสัตว์ อาหารแช่แข็ง',
            'ห้องฟรีซด่วน (Air Blast Freezer) อุณหภูมิ -35°C ถึง -40°C',
            'ติดตั้งแผ่นฉนวนสำเร็จรูป Sandwich Panel (PU, PIR, PS) ไร้รอยต่อ ป้องกันความร้อนรั่วไหล'
          ]
        },
        {
          category: 'DUCT_PIPE',
          title: 'งานระบบ Duct Pipe & Ventilation (งานระบบท่อลม & ระบายอากาศ)',
          badge: 'งานฝีมือประณีต',
          summary: 'ผลิตและติดตั้งระบบท่อส่งลม ท่อดักท์ ท่อระบายอากาศ และระบบดูดควัน พร้อมฉนวนกันความร้อนมาตรฐานสากล',
          features: [
            'ท่อส่งลมปรับอากาศ Spiral Round Duct และ Rectangular Galvanized Duct',
            'งานหุ้มฉนวนท่อลม ท่อน้ำเย็น และงานหุ้ม Jacket Stainless ป้องกันการเกิดหยดน้ำ',
            'ระบบระบายอากาศสำหรับห้องครัว โรงงานอุตสาหกรรม และลานจอดรถ',
            'ระบบกรองอากาศบริสุทธิ์ Fresh Air & Exhaust Air System สำหรับคลินิกและอาคาร'
          ]
        },
        {
          category: 'CHILLER',
          title: 'ระบบ Chiller Water (เครื่องทำน้ำเย็นอุตสาหกรรม)',
          badge: 'วิศวกรรมเฉพาะทาง',
          summary: 'งานติดตั้ง เดินท่อน้ำหล่อเย็น ซ่อมบำรุง และโอเวอร์ฮอลระบบ Water-Cooled และ Air-Cooled Chiller',
          features: [
            'ติดตั้งและเชื่อมต่อระบบท่อน้ำเย็น Chilled Water Piping พร้อมวาล์วควบคุมความดัน',
            'บำรุงรักษาหอผึ่งน้ำเย็น (Cooling Tower) ล้างตะกรัน และปรับปรุงระบบแลกเปลี่ยนความร้อน',
            'ตรวจเช็คแรงดันสารทำความเย็น น้ำมันคอมเพรสเซอร์ และระบบควบคุมอิเล็กทรอนิกส์',
            'งานเปลี่ยนชิ้นส่วนอะไหล่แท้ คอมเพรสเซอร์ Bitzer, Danfoss, Copeland, RefComp'
          ]
        },
        {
          category: 'FREEZER_SHOWCASE',
          title: 'งานระบบของตู้แช่ทุกประเภท (Commercial Refrigeration)',
          badge: 'ช่างมืออาชีพ',
          summary: 'รับตรวจเช็ค ซ่อมแซม ติดตั้ง และดัดแปลงตู้แช่เชิงพาณิชย์ทุกประเภท สำหรับซูเปอร์มาร์เก็ต มินิมาร์ท ร้านสะดวกซื้อ และภัตตาคาร',
          features: [
            'ตู้แช่เครื่องดื่มประตูกระจก (Upright Glass Door Chillers 1-4 ประตู)',
            'ตู้แช่แข็งอาหารสด (Deep Freezers & Island Freezers ฝาทึบ/ฝากระจกโค้ง)',
            'ตู้แช่สแตนเลสสำหรับครัวโรงแรม ร้านอาหาร เคาน์เตอร์เตรียมอาหาร',
            'ตู้แช่เปิดหน้าร้าน Open Showcase กระจายความเย็นเร็ว ควบคุมอุณหภูมิเสถียร'
          ]
        }
      ]
    },
    whyUs: {
      tag: 'ENGINEERING EXCELLENCE',
      title: 'ทำไมต้องเลือกเรา (WHY CHOOSE US)',
      heading: '4 จุดเด่นที่สร้างความไว้วางใจให้แก่องค์กรชั้นนำ',
      subtitle: 'เรามุ่งมั่นส่งมอบงานวิศวกรรมที่ถูกต้องตามหลักวิชาการ ส่งมอบตรงเวลา และคุ้มค่าการลงทุนสูงสุด',
      pillars: [
        {
          num: '01',
          title: 'One-Stop Service',
          subtitle: 'บริการครบวงจรในที่เดียว',
          points: [
            'บริการครบวงจรในที่เดียว ตั้งแต่เริ่มต้นจนส่งมอบ',
            'ขั้นตอนการออกแบบ คำนวณภาระความเย็น และเขียนแบบ',
            'การติดตั้ง การทดสอบระบบ และบริการหลังการขายต่อเนื่อง'
          ]
        },
        {
          num: '02',
          title: 'Professional Expertise',
          subtitle: 'ความเชี่ยวชาญระดับมืออาชีพ',
          desc: 'ทีมช่างและวิศวกรมืออาชีพ มีความเชี่ยวชาญและประสบการณ์ตรงในงานระบบความเย็นและระบายอากาศทุกขนาด'
        },
        {
          num: '03',
          title: 'Quality & Safety Standard',
          subtitle: 'มาตรฐานและความปลอดภัยสูง',
          desc: 'คัดสรรวัสดุอุปกรณ์มาตรฐานสูง มุ่งเน้นความปลอดภัย และการประหยัดพลังงานในระยะยาว'
        },
        {
          num: '04',
          title: 'Fast & Reliable Service',
          subtitle: 'บริการรวดเร็ว ตรงต่อเวลา',
          desc: 'ตอบสนองรวดเร็ว ดูแลเอาใจใส่คุณภาพ ส่งมอบงานตรงต่อเวลา พร้อมทีมดูแลบำรุงรักษาอย่างต่อเนื่อง'
        }
      ],
      ctaHeading: 'มั่นใจในคุณภาพงานวิศวกรรมจาก 3T INTERCOOL',
      ctaSubheading: 'พร้อมให้คำปรึกษาและสำรวจหน้างานฟรี สำหรับลูกค้าอาคาร สำนักงาน โรงงาน และธุรกิจเชิงพาณิชย์',
      ctaButton: 'นัดหมายสำรวจหน้างาน / ขอใบเสนอราคา',
      ctaCall: 'โทรสอบถามวิศวกรทันที'
    },
    projects: {
      tag: 'REAL-WORLD EXPERIENCES',
      title: 'ตัวอย่างโครงการและความไว้วางใจ (TRACK RECORD)',
      heading: 'ผลงานการติดตั้งจริงสำหรับองค์กรชั้นนำ',
      subtitle: 'ประมวลภาพงานติดตั้งระบบห้องเย็น ท่อลม แอร์อาคาร และงานหุ้ม Jacket Stainless ที่ตรวจรับงานสำเร็จเรียบร้อย',
      filterAll: 'ทั้งหมด',
      filterColdRoom: 'ห้องเย็น',
      filterHVAC: 'แอร์อาคาร',
      filterDuct: 'ท่อลม & สแตนเลส',
      filterChiller: 'ชิลเลอร์',
      filterCommercial: 'ตู้แช่',
      scopeLabel: 'ขอบเขตงานวิศวกรรม:',
      locationLabel: 'สถานที่:',
      flagshipBadge: 'โครงการสำคัญ (Flagship)',
      verifiedBadge: 'ตรวจรับงานเรียบร้อยแล้ว',
      items: [
        {
          id: 'track-1',
          title: 'งานติดตั้งระบบห้องเย็นร้านดองดองกิ สาขาห้างแฟชั่นไอส์แลนด์',
          client: 'DON DON DONKI (Thailand)',
          category: 'COLD_ROOM',
          location: 'ห้างสรรพสินค้าแฟชั่นไอส์แลนด์ รามอินทรา',
          description: 'งานประกอบและติดตั้งระบบห้องเย็นจัดเก็บวัตถุดิบอาหารสดระดับพรีเมียม ควบคุมอุณหภูมิคงที่ พร้อมชุด Condensing Unit RefComp ขนาดใหญ่บนดาดฟ้าห้าง และชั้นวางสแตนเลสมาตรฐานสุขอนามัย',
          scope: 'ชุดคอยล์เย็นเพดาน, Condensing Unit RefComp, ตู้ควบคุมอุณหภูมิดิจิทัล 24 ชม.'
        },
        {
          id: 'track-2',
          title: 'งานหุ้มฉนวนและ Jacket Stainless - บริษัท ซันเด้น',
          client: 'บริษัท ซันเด้น (Sanden)',
          category: 'DUCT_PIPE',
          location: 'โรงงานอุตสาหกรรม บริษัท ซันเด้น',
          description: 'งานเดินท่อส่งลม ท่อระบบความเย็น พร้อมงานหุ้มฉนวนความร้อนและความเย็นด้วย Jacket Stainless สแตนเลสเกรดพรีเมียม สวยงาม ประณีต และป้องกันการเกิดหยดน้ำ (Condensation) สมบูรณ์แบบ',
          scope: 'งานท่อสแตนเลส Jacket Stainless, ฉนวนกันความร้อนมาตรฐานโรงงานอุตสาหกรรม'
        },
        {
          id: 'track-3',
          title: 'งานเปลี่ยนคอยล์ร้อนและคอยล์เย็นห้องเก็บวัตถุดิบสำหรับปรุงอาหาร',
          client: 'ครัวกลางและศูนย์แปรรูปอาหาร',
          category: 'COLD_ROOM',
          location: 'เขตกรุงเทพมหานครและปริมณฑล',
          description: 'งานเปลี่ยนชุดคอยล์เย็น (Evaporator Unit) และชุดคอยล์ร้อน (Condensing Unit) แบรนด์ PATTON สำหรับห้องเก็บวัตถุดิบปรุงอาหาร ตรวจเช็คบาลานซ์แรงดันน้ำยาและระบบระบายความร้อนภายนอกอาคาร',
          scope: 'ชุดคอยล์ร้อนและคอยล์เย็น PATTON, งานเดินท่อน้ำยาและสายควบคุมไฟฟ้า'
        },
        {
          id: 'track-4',
          title: 'งานติดตั้งระบบ VRV/VRF อาคารสำนักงาน 4 ชั้น',
          client: 'อาคารสำนักงานและพาณิชย์ บางนาคอมเพล็กซ์',
          category: 'AIR_CONDITIONING',
          location: 'บางนา-ตราด กรุงเทพมหานคร',
          description: 'ติดตั้งระบบเครื่องปรับอากาศประหยัดพลังงาน VRF ควบคุมอิสระแยกโซน พร้อมระบบท่อน้ำยาและฉนวนป้องกันความร้อนมาตรฐานวิศวกรรม',
          scope: 'ชุดคอยล์ร้อน 14 ชุด, คอยล์เย็น Cassette 48 เครื่อง'
        },
        {
          id: 'track-5',
          title: 'งานโอเวอร์ฮอลและเปลี่ยนท่อน้ำเย็นระบบ Chiller 250 TR',
          client: 'โรงงานผลิตชิ้นส่วนยานยนต์ นิคมอุตสาหกรรมบางปู',
          category: 'CHILLER',
          location: 'สมุทรปราการ',
          description: 'บำรุงรักษาเชิงวิศวกรรมระบบ Water-Cooled Chiller เปลี่ยนชุดวาล์วควบคุมแรงดัน ล้างตะกรันคอนเดนเซอร์ และเปลี่ยนฉนวนท่อน้ำเย็นขนาดใหญ่',
          scope: 'Water-Cooled Chiller 250 TR, ท่อเหล็ก Sch 40 หุ้มฉนวน Aeroflex'
        },
        {
          id: 'track-6',
          title: 'งานติดตั้งตู้แช่เครื่องดื่มและตู้แช่อาหารแช่แข็งซูเปอร์มาร์เก็ต',
          client: 'ซูเปอร์มาร์เก็ตและศูนย์การค้าชั้นนำ',
          category: 'FREEZER_SHOWCASE',
          location: 'กรุงเทพมหานคร',
          description: 'จัดส่ง ติดตั้ง และเดินระบบท่อรวม Remote Condensing Unit สำหรับตู้แช่เครื่องดื่มแบบ Multi-deck และตู้แช่แข็งแบบ Island Freezer รวม 32 เมตร',
          scope: 'ตู้แช่ Multi-deck 16 เมตร, Island Freezer 16 เมตร, ระบบ Remote R404A'
        }
      ]
    },
    testimonials: {
      badge: 'Voice of Corporate Clients • ความพึงพอใจจากลูกค้าองค์กร',
      title: 'เสียงตอบรับและความไว้วางใจจากลูกค้าโครงการจริง',
      heading: 'เสียงตอบรับและความไว้วางใจจากโครงการจริง',
      subtitle: 'สัมผัสประสบการณ์ตรงจากผู้บริหารอาคาร โรงงานอุตสาหกรรม คลังสินค้า และผู้ประกอบการชั้นนำ ที่เลือก 3T INTERCOOL ดูแลระบบวิศวกรรมความเย็นอย่างต่อเนื่อง',
      filterAll: 'ทั้งหมด (ทุกโครงการ)',
      filterColdRoom: 'ระบบห้องเย็น (Cold Room)',
      filterHVAC: 'แอร์อาคาร & สำนักงาน (HVAC)',
      filterDuct: 'ท่อลม & สแตนเลส (Ductwork)',
      verifiedBadge: 'ตรวจรับงานจริง',
      scoreLabel: 'คะแนน 5.0 เต็ม',
      resultsLabel: 'ผลลัพธ์เชิงวิศวกรรม:',
      moreDetails: 'ดูรายละเอียดเพิ่มเติม',
      bannerBadge: 'การันตีมาตรฐานและการรับประกันผลงานเต็มรูปแบบ',
      bannerHeading: 'พร้อมยกระดับระบบทำความเย็นในองค์กรของคุณแล้วหรือยัง?',
      bannerSubheading: 'ไม่ว่าจะเป็นงานติดตั้งห้องเย็นอุตสาหกรรม งานปรับอากาศอาคารสำนักงาน หรือวางระบบท่อส่งลม ทีมวิศวกรผู้เชี่ยวชาญของ 3T Intercool พร้อมเข้าสำรวจและประเมินหน้างานฟรี',
      bannerQuoteBtn: 'ประเมินราคาโครงการของคุณ',
      bannerCallBtn: 'โทรสายตรง',
      modalInspected: 'โครงการตรวจรับเมื่อ',
      modalResultsTitle: 'ผลลัพธ์และสิ่งที่ประทับใจในงานส่งมอบ:',
      modalSimilarTitle: 'ต้องการปรึกษางานระบบคล้ายกันนี้?',
      modalQuoteBtn: 'ขอใบเสนอราคาสำหรับโครงการของคุณ',
      stats: [
        {
          metric: '99.6%',
          label: 'ความพึงพอใจจากลูกค้าองค์กร',
          subtext: 'จากการประเมินหลังตรวจรับงาน'
        },
        {
          metric: '150+',
          label: 'โครงการอาคาร & โรงงานสำเร็จ',
          subtext: 'ทั่วกรุงเทพฯ ปริมณฑล และนิคมฯ'
        },
        {
          metric: '100%',
          label: 'ส่งมอบงานตรงกำหนดเวลา',
          subtext: 'ไม่มีประวัติทิ้งงานตลอดการดำเนินงาน'
        },
        {
          metric: '24/7',
          label: 'บริการทีมช่างวิศวกรรมฉุกเฉิน',
          subtext: 'รองรับระบบห้องเย็นและสายการผลิต'
        }
      ],
      items: [
        {
          id: 'testi-1',
          clientName: 'คุณธนกร สิทธิชัย',
          clientCompany: 'DON DON DONKI (Thailand) - สาขาแฟชั่นไอส์แลนด์',
          clientPosition: 'ผู้จัดการฝ่ายวิศวกรรมและบริหารพื้นที่สาขา',
          projectTitle: 'งานติดตั้งระบบห้องเย็นจัดเก็บวัตถุดิบอาหารสดและ Condensing Unit RefComp',
          category: 'COLD_ROOM',
          categoryLabel: 'ระบบห้องเย็น',
          location: 'ห้างสรรพสินค้าแฟชั่นไอส์แลนด์ รามอินทรา กทม.',
          highlight: '“ควบคุมอุณหภูมินิ่งเสถียร ทีมงานมืออาชีพส่งมอบงานทันกำหนดเปิดห้างอย่างสมบูรณ์แบบ”',
          quote: 'ทางดองกิให้ความสำคัญสูงสุดกับความสดใหม่ของวัตถุดิบนำเข้าจากญี่ปุ่น ระบบห้องเย็นและชุด Condensing Unit RefComp ขนาดใหญ่บนดาดฟ้าที่ทางทีม 3T Intercool ออกแบบและติดตั้งให้ ทำงานได้เสถียรมาก อุณหภูมิคงที่ไม่มีสะดุด การประสานงานกับทีมงานอาคารของห้างเป็นไปอย่างราบรื่น ตรวจรับงานรอบเดียวผ่านและมีทีมซัพพอร์ตคอยดูแลต่อเนื่อง',
          results: [
            'อุณหภูมิคงที่ ±0.5°C ตลอด 24 ชม.',
            'ส่งมอบงานตรงกำหนด 100% ก่อนวันเปิดตัว',
            'ผ่านการตรวจรับมาตรฐานสุขอนามัย HACCP/GMP'
          ],
          date: 'สิงหาคม 2026'
        },
        {
          id: 'testi-2',
          clientName: 'คุณวิศรุต วรเวชกุล',
          clientCompany: 'บริษัท ซันเด้น (Sanden Intercool / Sanden Thailand)',
          clientPosition: 'หัวหน้าส่วนวิศวกรรมซ่อมบำรุงโรงงาน (Maintenance Dept.)',
          projectTitle: 'งานเดินท่อส่งลม ท่อระบบความเย็น และหุ้มฉนวน Jacket Stainless สแตนเลส',
          category: 'DUCT_PIPE',
          categoryLabel: 'ท่อลม & สแตนเลส',
          location: 'โรงงานอุตสาหกรรม บริษัท ซันเด้น',
          highlight: '“งานหุ้มฉนวน Jacket Stainless ประณีต สวยงาม และแก้ปัญหาหยดน้ำเกาะได้ 100%”',
          quote: 'ระบบท่อส่งความเย็นในโรงงานอุตสาหกรรมต้องการทั้งความทนทานและการป้องกันการสูญเสียพลังงาน ทีมช่าง 3T ทำงานหุ้ม Jacket Stainless ได้เนี้ยบมาก รอยต่อและการเข้ามุมแนบสนิท ปัญหาไอน้ำเกาะท่อเดิมที่เคยเจอลดลงเป็นศูนย์ งานเสร็จเรียบร้อยตามมาตรฐานความปลอดภัยโรงงานอย่างเคร่งครัด',
          results: [
            'ลดการสูญเสียพลังงานความเย็นได้กว่า 20%',
            'ป้องกันการเกิดหยดน้ำเกาะผิวท่อ (Zero Condensation) 100%',
            'งานเชื่อมและพับสแตนเลสเกรด 304 มาตรฐานสูง'
          ],
          date: 'กรกฎาคม 2026'
        },
        {
          id: 'testi-3',
          clientName: 'คุณประดิษฐ์ ชินรัตน์',
          clientCompany: 'ศูนย์แปรรูปและครัวกลาง เบเกอรี่ & อาหารพร้อมทาน (Food Production Hub)',
          clientPosition: 'ผู้อำนวยการฝ่ายผลิตและซัพพลายเชน',
          projectTitle: 'งานเปลี่ยนชุดคอยล์เย็น-คอยล์ร้อน PATTON และบำรุงรักษาเชิงป้องกัน',
          category: 'COLD_ROOM',
          categoryLabel: 'ระบบห้องเย็น',
          location: 'เขตพัฒนาอุตสาหกรรม กทม. และปริมณฑล',
          highlight: '“แก้ปัญหาฉุกเฉินรวดเร็ว ระบบทำความเย็นกลับมาทำงานได้ทันเวลา ไม่กระทบสายการผลิต”',
          quote: 'คอยล์เย็นห้องแช่แข็งวัตถุดิบเดิมมีปัญหาแรงดันตกและอุณหภูมิไม่คงที่ ทีมช่างของ 3T Intercool เดินทางมาสำรวจหน้างานรวดเร็วมาก เสนอแผนเปลี่ยนชุดคอยล์ PATTON พร้อมปรับเซ็ตวาล์วและน้ำยาอย่างเป็นระบบ การทำงานช่วงกลางคืนไม่รบกวนเวลาผลิตของโรงงาน ประทับใจในความรับผิดชอบและความเชี่ยวชาญครับ',
          results: [
            'ลดเวลา Downtime ในการผลิตเหลือต่ำกว่า 6 ชม.',
            'ดึงอุณหภูมิลงสู่ -20°C ได้เร็วกว่าระบบเดิม 35%',
            'มีรายงานสรุปพารามิเตอร์ทางวิศวกรรมพร้อมภาพถ่ายชัดเจน'
          ],
          date: 'พฤษภาคม 2026'
        },
        {
          id: 'testi-4',
          clientName: 'คุณวราภรณ์ มงคลพาณิชย์',
          clientCompany: 'อาคารสำนักงานและพาณิชย์ บางนาคอมเพล็กซ์ (Bangna Business Park)',
          clientPosition: 'ผู้จัดการฝ่ายบริหารอาคาร (Property & Facility Manager)',
          projectTitle: 'งานออกแบบและติดตั้งระบบแอร์ VRV/VRF Multi-Split ประหยัดพลังงาน 4 ชั้น',
          category: 'AIR_CONDITIONING',
          categoryLabel: 'แอร์อาคาร & สำนักงาน',
          location: 'ถนนบางนา-ตราด กรุงเทพมหานคร',
          highlight: '“ผู้เช่าสำนักงานชมเรื่องความเย็นสม่ำเสมอ เสียงเงียบ และประหยัดค่าไฟลงอย่างเห็นได้ชัด”',
          quote: 'เราเปลี่ยนระบบแอร์เดิมทั้งอาคาร 4 ชั้นมาใช้ระบบ VRV/VRF ที่ควบคุมแยกห้องอิสระ ทีมวิศวกร 3T Intercool ให้คำปรึกษาตั้งแต่การคำนวณ Cooling Load ตำแหน่งวาง Condensing บนดาดฟ้า และงานเดินท่อน้ำยาที่ซ่อนในฝ้าอย่างเรียบร้อย ช่างมีความสุภาพ เรียบร้อย และเก็บกวาดพื้นที่ทุกวันหลังจากทำงาน',
          results: [
            'ค่าไฟฟ้าส่วนกลางปรับอากาศลดลง 22%',
            'ระดับเสียงในห้องทำงานเงียบกว่ามาตรฐาน 38 dB',
            'ระบบควบคุมอุณหภูมิรายโซน แม่นยำทุกห้อง'
          ],
          date: 'มีนาคม 2026'
        },
        {
          id: 'testi-5',
          clientName: 'คุณชัยยุทธ พงษ์ศิริ',
          clientCompany: 'บจก. โลจิสติกส์ โคลด์เชน เซ็นเตอร์ (Cold Chain Logistics)',
          clientPosition: 'รองกรรมการผู้จัดการฝ่ายปฏิบัติการคลังสินค้า',
          projectTitle: 'งานติดตั้งห้องเย็นจัดเก็บสินค้าควบคุมอุณหภูมิ 2 ห้อง และระบบระบายอากาศ',
          category: 'COLD_ROOM',
          categoryLabel: 'ห้องเย็น & คลังสินค้า',
          location: 'นิคมอุตสาหกรรมลาดกระบัง กทม.',
          highlight: '“มาตรฐานงานวิศวกรรมสูง ส่งมอบเอกสารรับประกันและการเทรนนิ่งทีมงานคลังอย่างละเอียด”',
          quote: 'งานคลังสินค้าควบคุมอุณหภูมิต้องเปิด-ปิดประตูห้องเย็นตลอดทั้งวัน แผงฉนวน PU/PIR และประตูห้องเย็นแอร์ล็อกที่ 3T Intercool ติดตั้งให้แข็งแรงทนทาน ม่านอากาศตัดความร้อนทำงานได้ดีเยี่ยม มีระบบแจ้งเตือนอุณหภูมิผ่านมือถือ ทำให้ทีมบริหารคลังเบาใจเรื่องสินค้าเสียหายไปได้เลย',
          results: [
            'ความเย็นคืนตัวเร็วหลังเปิดประตูคลังภายใน 3 นาที',
            'ระบบแจ้งเตือนอุณหภูมิอัตโนมัติ 24 ชม.',
            'การรับประกันโครงสร้างและระบบทำความเย็นครบวงจร'
          ],
          date: 'มิถุนายน 2026'
        },
        {
          id: 'testi-6',
          clientName: 'ทพญ. กนกวรรณ รัตนพิบูลย์',
          clientCompany: 'สไมล์ สเปเชียลตี้ เดนทัล คลินิก (Rama 9 Medical Center)',
          clientPosition: 'ผู้อำนวยการฝ่ายบริหารการแพทย์และสิ่งแวดล้อม',
          projectTitle: 'งานระบบแอร์ 4-Way Cassette ระบบกรองอากาศ Clean Air และงาน PM รายปี',
          category: 'AIR_CONDITIONING',
          categoryLabel: 'คลินิก & สุขอนามัย',
          location: 'ถนนพระราม 9 แขวงห้วยขวาง กทม.',
          highlight: '“ช่างใส่ใจเรื่องความสะอาดเป็นพิเศษ ป้องกันละอองฝุ่นและใช้อุปกรณ์เซฟตี้มาตรฐานคลินิก”',
          quote: 'คลินิกทันตกรรมต้องการอากาศสะอาดและการบำรุงรักษาแอร์ที่ไม่ทิ้งคราบน้ำหรือฝุ่นในห้องตรวจ ทีมช่าง 3T ปูผ้ายางคลุมทุกอุปกรณ์ ใช้น้ำยาทำความสะอาดฆ่าเชื้อเฉพาะทาง และตรวจเช็คแรงดันน้ำยาอย่างละเอียด แอร์เย็นฉ่ำ ไม่มีกลิ่นอับ และมีนัดหมายบริการตามรอบสม่ำเสมอ ประทับใจมากค่ะ',
          results: [
            'ช่างผ่านการตรวจสุขอนามัยและสวมใส่อุปกรณ์ป้องกัน 100%',
            'อากาศหมุนเวียนสะอาด ไร้กลิ่นอับชื้น',
            'การดูแล PM รายไตรมาสตรงเวลาทุกรอบ'
          ],
          date: 'กันยายน 2026'
        }
      ]
    },
    process: {
      tag: '5-STEP WORKFLOW',
      title: 'มาตรฐานการดำเนินงานวิศวกรรม',
      heading: 'กระบวนการทำงาน 5 ขั้นตอนสู่ความสำเร็จ',
      subtitle: 'ควบคุมคุณภาพทุกขั้นตอนด้วยมาตรฐานวิศวกรรมสากล เพื่อความปลอดภัยและประสิทธิภาพการทำงานสูงสุด',
      steps: [
        {
          num: '01',
          title: 'สำรวจและวิเคราะห์หน้างาน',
          subtitle: 'Site Survey & Needs Analysis',
          desc: 'ทีมวิศวกรลงพื้นที่จริงเพื่อวัดขนาดพื้นที่ ตรวจสอบโครงสร้าง ตรวจเช็คระบบไฟฟ้า และประเมินภาระการทำความเย็น (Cooling Load Calculation)',
          badge: 'สำรวจฟรีไม่มีค่าใช้จ่าย',
          points: ['วัดขนาดพื้นที่และสำรวจโครงสร้างจริง', 'คำนวณ Cooling Load ด้วยโปรแกรมวิศวกรรม', 'ตรวจสอบระบบไฟฟ้าและท่อระบายน้ำทิ้ง']
        },
        {
          num: '02',
          title: 'ออกแบบระบบและวางผังการติดตั้ง',
          subtitle: 'Engineering Design & Layout',
          desc: 'เขียนแบบงานระบบปรับอากาศและท่อลม (Shop Drawing) โดยคำนึงถึงทิศทางการไหลเวียนของอากาศ ประสิทธิภาพการถ่ายเทความร้อน และความสวยงาม',
          badge: 'แบบ Shop Drawing ชัดเจน',
          points: ['เขียนแบบ Shop Drawing ด้วย AutoCAD', 'จัดวางตำแหน่งอุปกรณ์อย่างถูกต้องตามหลักวิศวกรรม', 'วางแผนงานเพื่อไม่ให้กระทบต่อกิจกรรมหลักของลูกค้า']
        },
        {
          num: '03',
          title: 'เสนอราคาและวางแผนการดำเนินงาน',
          subtitle: 'Cost Estimation & Schedule',
          desc: 'จัดทำใบเสนอราคาอย่างละเอียด (BOQ) ระบุสเปกอุปกรณ์ ชนิดของสารทำความเย็น และระยะเวลางานอย่างโปร่งใส พร้อมเสนอทางเลือกที่คุ้มค่าที่สุด',
          badge: 'ราคาชัดเจน ไม่มีแอบแฝง',
          points: ['แจกแจงรายการวัสดุและอุปกรณ์ชัดเจน (BOQ)', 'ระบุยี่ห้อและรุ่นของอุปกรณ์มาตรฐานสากล', 'กำหนด Timeline การส่งมอบงานที่แน่นอน']
        },
        {
          num: '04',
          title: 'ติดตั้งตามมาตรฐานและทดสอบระบบ',
          subtitle: 'Installation & Pressure Testing',
          desc: 'ดำเนินการติดตั้งโดยช่างผู้เชี่ยวชาญ ใช้อุปกรณ์เซฟตี้ครบถ้วน ทำการอัดไนโตรเจนทดสอบรอยรั่ว (Pressure Test) และแวคคั่มระบบอย่างสมบูรณ์แบบ',
          badge: 'มาตรฐานความปลอดภัย 100%',
          points: ['ช่างสวมใส่อุปกรณ์ PPE ตามมาตรฐานความปลอดภัย', 'ทดสอบแรงดันระบบท่อด้วย Nitrogen ป้องกันการรั่วซึม', 'ทำ Vacuum ระบบท่อน้ำยาเพื่อกำจัดความชื้นอย่างหมดจด']
        },
        {
          num: '05',
          title: 'ตรวจรับงานและบริการหลังการขาย',
          subtitle: 'Commissioning & Handover',
          desc: 'วัดค่าอุณหภูมิ แรงดันน้ำยา กระแสไฟฟ้า ส่งมอบรายงานการตรวจรับงาน พร้อมให้คำแนะนำการใช้งาน และการรับประกันผลงานเต็มรูปแบบ',
          badge: 'รับประกันงานติดตั้ง 1 ปีเต็ม',
          points: ['ตรวจเช็คอุณหภูมิและกระแสไฟฟ้าอย่างละเอียด', 'ส่งมอบคู่มือการใช้งานและเอกสารการรับประกัน', 'บริการดูแลบำรุงรักษาเชิงป้องกันตามรอบระยะเวลา']
        }
      ]
    },
    quote: {
      tag: 'ONLINE ESTIMATION',
      title: 'ขอใบเสนอราคา / นัดประเมินงานออนไลน์',
      subtitle: 'กรอกข้อมูลระบบที่ต้องการประเมิน ทีมวิศวกรจะจัดทำใบเสนอราคาเบื้องต้นและติดต่อกลับภายใน 24 ชม.',
      systemLabel: 'เลือกระบบงานที่ต้องการ',
      jobTypeLabel: 'ประเภทของงาน',
      jobTypes: [
        { id: 'NEW_INSTALL', label: 'ติดตั้งใหม่' },
        { id: 'REPAIR_OVERHAUL', label: 'ซ่อมแซม / โอเวอร์ฮอล' },
        { id: 'PM_MAINTENANCE', label: 'ล้างทำความสะอาด / บำรุงรักษา (PM)' },
        { id: 'DESIGN_CONSULT', label: 'ออกแบบและคำนวณระบบ' },
        { id: 'INSPECTION', label: 'ตรวจเช็คหน้างาน / ประเมินสภาพ' }
      ],
      nameLabel: 'ชื่อผู้ติดต่อ / ผู้รับผิดชอบโครงการ',
      namePlaceholder: 'เช่น คุณสมศักดิ์ หรือ บจก. ตัวอย่าง',
      companyLabel: 'ชื่อบริษัท / หน่วยงาน (ถ้ามี)',
      companyPlaceholder: 'เช่น บจก. สยาม โลจิสติกส์',
      phoneLabel: 'เบอร์โทรศัพท์ติดต่อ',
      phonePlaceholder: 'เช่น 081-234-5678',
      lineLabel: 'LINE ID (สำหรับรับใบเสนอราคาไว)',
      linePlaceholder: 'เช่น somsak_cool',
      emailLabel: 'อีเมล (สำหรับส่งเอกสารทางการ)',
      emailPlaceholder: 'name@company.com',
      locationLabel: 'สถานที่ติดตั้ง / หน้างาน (เขต/จังหวัด)',
      locationPlaceholder: 'เช่น นิคมอุตสาหกรรมลาดกระบัง กทม.',
      detailsLabel: 'รายละเอียดงานเพิ่มเติม / ขนาดพื้นที่ / BTU / อุณหภูมิที่ต้องการ',
      detailsPlaceholder: 'เช่น ต้องการติดตั้งห้องเย็นขนาด 4x6x3 เมตร อุณหภูมิ -18°C หรือติดตั้งแอร์ Cassette 4 ทิศทาง 10 เครื่อง',
      urgentCheckbox: 'งานด่วนพิเศษ / ต้องการคำตอบภายในวันนี้',
      preferredDateLabel: 'วันที่สะดวกให้เข้าสำรวจหน้างาน (โดยประมาณ)',
      budgetLabel: 'งบประมาณโดยประมาณที่ตั้งไว้',
      budgetPlaceholder: 'เลือกช่วงงบประมาณ',
      budgetOptions: [
        'ต่ำกว่า 50,000 บาท',
        '50,000 - 150,000 บาท',
        '150,000 - 300,000 บาท',
        '300,000 - 500,000 บาท',
        '500,000 - 1,000,000 บาท',
        'มากกว่า 1,000,000 บาท',
        'รอให้วิศวกรประเมินตามหน้างาน'
      ],
      submitBtn: 'ส่งคำขอใบเสนอราคา / นัดสำรวจหน้างาน',
      submittingBtn: 'กำลังส่งข้อมูล...',
      directCallPrompt: 'ต้องการสอบถามด่วนโทรเลย:',
      successTitle: 'ส่งคำขอใบเสนอราคาเรียบร้อยแล้ว!',
      successMessage: 'ทีมวิศวกรของ บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด ได้รับข้อมูลของท่านแล้ว และจะติดต่อกลับทางโทรศัพท์หรือ LINE ภายใน 24 ชม.',
      trackingIdLabel: 'รหัสคำขออ้างอิงของคุณ:',
      newQuoteBtn: 'ส่งคำขอรายการอื่นเพิ่มเติม',
      emergencyCall: 'โทรสายตรงด่วน',
      guaranteeTitle: 'สิทธิประโยชน์ที่คุณจะได้รับ:',
      guaranteeItem1: 'สำรวจหน้างานและคำนวณภาระความเย็นฟรี โดยทีมวิศวกร',
      guaranteeItem2: 'ใบเสนอราคาแจกแจงรายการชัดเจน (BOQ) ไม่บานปลาย',
      guaranteeItem3: 'รับประกันผลงานติดตั้ง 1 ปีเต็ม พร้อมบริการตรวจเช็คสม่ำเสมอ'
    },
    contact: {
      tag: 'MANAGEMENT & HEADQUARTERS',
      title: 'คณะผู้บริหารและสถานที่ติดต่อ',
      heading: 'พร้อมให้บริการและประสานงานตลอดเวลา',
      subtitle: 'ท่านสามารถติดต่อประสานงานโดยตรงกับคณะผู้บริหารและทีมงานวิศวกรรมของ บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด',
      leadershipTitle: 'คณะผู้บริหารระดับสูง (Executive Leadership)',
      directorRole: 'กรรมการผู้จัดการ (Managing Director)',
      managerRole: 'ผู้จัดการฝ่ายปฏิบัติการ (Operations Manager)',
      officeTitle: 'สำนักงานและศูนย์บริการใหญ่',
      hoursLabel: 'เวลาทำการ:',
      hoursValue: 'จันทร์ - เสาร์: 08:00 - 18:00 น. (บริการฉุกเฉิน 24 ชม.)',
      areasLabel: 'พื้นที่ให้บริการ:',
      areasValue: 'กรุงเทพฯ ปริมณฑล ภาคกลาง ภาคตะวันออก และนิคมอุตสาหกรรมทั่วประเทศ',
      mapDirectionsBtn: 'เปิดนำทางผ่าน Google Maps',
      callDirectorBtn: 'โทรสายตรงกรรมการ',
      callManagerBtn: 'โทรสายตรงผู้จัดการ',
      chatLineBtn: 'แชทผ่าน LINE'
    },
    footer: {
      desc: 'ผู้นำงานวิศวกรรมระบบปรับอากาศ ห้องเย็นควบคุมอุณหภูมิ งานท่อลม และชิลเลอร์อุตสาหกรรม มาตรฐานระดับสากล ASHRAE & SMACNA',
      systemsHeading: 'งานบริการหลัก 5 ด้าน',
      contactHeading: 'ช่องทางการติดต่อ',
      officeHeading: 'สำนักงานและระบบจัดการ',
      adminPortalBtn: 'ระบบจัดการข้อมูล (Admin)',
      rightsReserved: 'สงวนลิขสิทธิ์.',
      backToTop: 'กลับขึ้นด้านบน',
      trackRecordLink: 'ตัวอย่างโครงการและความไว้วางใจ (Track Record)',
      testimonialsLink: '★ เสียงตอบรับลูกค้าองค์กร (Testimonials)'
    },
    floating: {
      callTitle: 'โทรสายตรง',
      lineTitle: 'แชท LINE',
      quoteTitle: 'คำนวณราคา'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Core Services',
      whyUs: 'Why Choose 3T',
      projects: 'Track Record',
      testimonials: 'Testimonials',
      process: '5-Step Process',
      quote: 'Online Quotation',
      contact: 'Contact & Team',
      admin: 'Admin Portal',
      menuBtn: 'MENU',
      menuHeading: '3T INTERCOOL & SERVICE',
      menuSubheading: 'Full Engineering Systems Directory',
      directLine: 'Engineering Hotline',
      requestQuoteBtn: 'Request Quote',
      legalTaxId: 'Corporate Tax ID',
      callNow: 'Call Hotline',
      closeMenu: 'Close Window'
    },
    announcement: {
      badge: 'NOTICE',
      text: 'Welcome to 3T Intercool & Service Co., Ltd. - Full-Cycle HVAC, Cold Storage, Ductwork, Chiller & Commercial Refrigeration Solutions',
      urgent: '24/7 Rapid Emergency Response'
    },
    hero: {
      badge: 'HVAC & Industrial Cooling Engineering',
      headlinePart1: 'COOLING',
      headlinePart2: 'BEYOND LIMITS',
      subtitle: 'Full-Cycle HVAC & Refrigeration Engineering • Global Standards',
      description: '3T Intercool & Service Co., Ltd. is dedicated to engineering excellence in cooling, air conditioning, industrial cold storage, and ventilation systems with the highest safety standards and sustainable energy efficiency.',
      ctaQuote: 'Request Project Quote',
      ctaServices: 'Explore 5 Core Systems',
      stat1Value: '100%',
      stat1Label: 'On-Time Project Delivery',
      stat2Value: '±0.5°C',
      stat2Label: 'Cold Room Temperature Precision',
      stat3Value: '24/7',
      stat3Label: 'Emergency Engineering Standby',
      cardBadge: '3T Corporate Portfolio',
      cardTitle: 'Commercial & Industrial Grade Engineering',
      cardDesc: 'Engineered for high-demand facilities: office towers, logistics hubs, food processing plants, hotels, and retail complexes.',
      cardStd1: 'ASHRAE & SMACNA International Engineering Standards',
      cardStd2: 'Licensed & Safety-Certified Field Engineering Team',
      cardStd3: 'Full 1-Year Comprehensive Warranty & PM Support',
      cardStd4: '100% Transparent Budgeting with Zero Hidden Costs'
    },
    about: {
      tag: '3T INTERCOOL & SERVICE',
      title: 'ABOUT COMPANY',
      heading: 'Engineering Specialists in Cooling & Ventilation Systems',
      desc1: '3T Intercool & Service Co., Ltd. is a specialized engineering contractor dedicated to industrial cooling and HVAC systems (Heating, Ventilation, Air Conditioning & Refrigeration).',
      desc2: 'We provide end-to-end turnkey solutions covering cooling load calculations, engineering drafting, installation, commissioning, and preventive maintenance for buildings, industrial factories, distribution warehouses, and commercial facilities of all sizes, managed by licensed engineers committed to safety, reliability, and maximum energy conservation.',
      guaranteeText: 'Engineering Standards • Safety • Energy Efficiency',
      consultBtn: 'Consult Project Engineers',
      corpIdTitle: 'Corporate Registration',
      directorTitle: 'Managing Director',
      managerTitle: 'Operations Manager',
      standardsTitle: 'Engineering Standards & Compliance',
      standardItems: [
        'ASHRAE HVAC & Refrigeration Engineering Standards',
        'SMACNA Ductwork Construction & Air Leakage Standards',
        'Certified High-Voltage & Refrigerant Pressure Safety Testing',
        'Eco-Friendly Green Refrigerant & Environmental Protocols'
      ],
      statProjects: '150+',
      statProjectsLabel: 'Successful Turnkey Projects',
      statExp: '10+',
      statExpLabel: 'Years of Engineering Experience'
    },
    services: {
      tag: 'OUR CAPABILITIES',
      title: 'CORE SERVICES (OUR SERVICES)',
      heading: '5 Comprehensive Cooling & HVAC Systems',
      subtitle: 'Complete design, installation, overhaul, maintenance, and annual PM services by certified engineering technicians.',
      filterAll: 'All Systems (5 Systems)',
      getQuote: 'Get Quote For This',
      consultTeam: 'Urgent Engineering Hotline',
      items: [
        {
          category: 'AIR_CONDITIONING',
          title: 'Air Conditioning System & Commercial Fridge',
          badge: 'Most Popular for Commercial',
          summary: 'Installation, overhaul, relocation, and scheduled preventive maintenance for residential, commercial, and industrial air conditioning systems.',
          features: [
            'Split Type Systems (Wall-Mounted, Ceiling Suspended, 4-Way Cassette)',
            'Multi-Zone VRV / VRF Energy-Efficient Systems for High-Rise & Office Buildings',
            'Centralized Package Units and Chilled Water Air Handling Units (AHU)',
            'Comprehensive Annual Preventive Maintenance (PM) and Chemical Cleaning'
          ]
        },
        {
          category: 'COLD_ROOM',
          title: 'Cold Room System & Temperature Control',
          badge: 'Industrial Grade',
          summary: 'Custom engineering, manufacturing, and installation of cold storage facilities for logistics hubs, food processing plants, restaurants, and supermarkets.',
          features: [
            'Chiller Rooms (0°C to +8°C) for Fresh Produce, Beverages & Dairy',
            'Freezer Rooms (-18°C to -25°C) for Meat, Seafood & Frozen Goods',
            'Air Blast Freezers (-35°C to -40°C) for Rapid Industrial Deep Freezing',
            'Sandwich Insulation Panels (PU, PIR, PS) with Airtight Vapor Barrier'
          ]
        },
        {
          category: 'DUCT_PIPE',
          title: 'Duct Pipe & Ventilation Systems',
          badge: 'High Precision Fabrication',
          summary: 'Precision fabrication and installation of air supply ducts, exhaust ventilation, and thermal insulation compliant with SMACNA standards.',
          features: [
            'Spiral Round Ducts and Rectangular Galvanized Steel Ducts',
            'Insulation Cladding & Premium Stainless Steel Jacket Piping (Zero Condensation)',
            'Commercial Kitchen Exhaust, Industrial Factory & Basement Ventilation',
            'Fresh Air Supply & HEPA Air Filtration Systems for Medical Clinics & Cleanrooms'
          ]
        },
        {
          category: 'CHILLER',
          title: 'Chiller Water Systems (Industrial Liquid Chillers)',
          badge: 'Specialized Engineering',
          summary: 'Engineering installation, chilled water piping, overhaul, and descaling for Water-Cooled and Air-Cooled central chiller plants.',
          features: [
            'Chilled Water Piping Installation with Hydraulic Balancing & Pressure Valves',
            'Cooling Tower Maintenance, Chemical Descaling & Heat Exchanger Tuning',
            'Refrigerant Charge Verification, Compressor Oil Analysis & Digital Controls',
            'Genuine Spare Parts Replacement (Bitzer, Danfoss, Copeland, RefComp)'
          ]
        },
        {
          category: 'FREEZER_SHOWCASE',
          title: 'Commercial Refrigeration & Showcase Systems',
          badge: 'Professional Technicians',
          summary: 'Inspection, repair, installation, and modification of commercial supermarket showcases, deep freezers, and commercial kitchen refrigeration.',
          features: [
            'Upright Glass Door Beverage Chillers (1 to 4 Door Configurations)',
            'Island Freezers & Chest Deep Freezers with Curved/Flat Glass Tops',
            'Stainless Steel Undercounter & Prep Refrigerators for Hotels & Restaurants',
            'Open Front Multideck Showcases with Rapid Air Curtain Circulation'
          ]
        }
      ]
    },
    whyUs: {
      tag: 'ENGINEERING EXCELLENCE',
      title: 'WHY CHOOSE 3T',
      heading: '4 Pillars Earning Corporate Trust',
      subtitle: 'We are committed to delivering engineering precision, strict timeline compliance, and optimal return on investment.',
      pillars: [
        {
          num: '01',
          title: 'One-Stop Turnkey Service',
          subtitle: 'End-to-End Execution in One Place',
          points: [
            'Complete turnkey service from initial concept to final handover',
            'Cooling load calculation, technical drafting, and shop drawings',
            'Professional installation, testing, and dedicated warranty support'
          ]
        },
        {
          num: '02',
          title: 'Professional Expertise',
          subtitle: 'Certified Engineering Specialists',
          desc: 'Licensed engineers and seasoned technicians with direct, hands-on experience across commercial and industrial refrigeration projects.'
        },
        {
          num: '03',
          title: 'Quality & Safety Standard',
          subtitle: 'Uncompromising Safety Standards',
          desc: 'Carefully curated high-grade certified components, strict site safety protocols, and long-term energy optimization.'
        },
        {
          num: '04',
          title: 'Fast & Reliable Execution',
          subtitle: 'Punctual & Responsive Standby',
          desc: 'Rapid emergency response, meticulous craftsmanship, guaranteed on-time delivery, and continuous preventive maintenance.'
        }
      ],
      ctaHeading: 'Trust Your Engineering Infrastructure to 3T INTERCOOL',
      ctaSubheading: 'Complimentary site surveys and engineering consultations for commercial buildings, factories, warehouses, and enterprise clients.',
      ctaButton: 'Schedule Site Survey / Get Quotation',
      ctaCall: 'Call Engineering Hotline Now'
    },
    projects: {
      tag: 'REAL-WORLD EXPERIENCES',
      title: 'PROJECT TRACK RECORD',
      heading: 'Proven Installations for Leading Enterprises',
      subtitle: 'Portfolio of completed cold storage, ductwork, commercial HVAC, and stainless jacket insulation projects.',
      filterAll: 'All Projects',
      filterColdRoom: 'Cold Storage',
      filterHVAC: 'Commercial HVAC',
      filterDuct: 'Duct & Stainless',
      filterChiller: 'Chillers',
      filterCommercial: 'Refrigeration',
      scopeLabel: 'Engineering Scope:',
      locationLabel: 'Location:',
      flagshipBadge: 'Flagship Project',
      verifiedBadge: 'Verified & Handed Over',
      items: [
        {
          id: 'track-1',
          title: 'Cold Storage Installation for DON DON DONKI at Fashion Island',
          client: 'DON DON DONKI (Thailand)',
          category: 'COLD_ROOM',
          location: 'Fashion Island Mall, Ram Inthra, Bangkok',
          description: 'Assembly and installation of cold storage for premium Japanese fresh food imports, featuring large RefComp condensing units on the rooftop and sanitary food-grade stainless shelving.',
          scope: 'Ceiling Evaporator Units, Rooftop RefComp Condensing Unit, 24/7 Digital Control Panel'
        },
        {
          id: 'track-2',
          title: 'Thermal Insulation & Stainless Steel Jacket Cladding - Sanden',
          client: 'Sanden Intercool / Sanden (Thailand)',
          category: 'DUCT_PIPE',
          location: 'Sanden Industrial Plant, Thailand',
          description: 'Air supply and refrigeration pipework with premium grade-304 stainless steel jacket insulation, eliminating condensation droplets completely.',
          scope: 'Stainless Steel Jacket Piping, Industrial Grade Thermal Insulation Cladding'
        },
        {
          id: 'track-3',
          title: 'Emergency Evaporator & Condensing Unit Replacement for Central Kitchen',
          client: 'Food Processing Hub & Central Kitchen',
          category: 'COLD_ROOM',
          location: 'Bangkok Metropolitan Area',
          description: 'Overhaul and replacement of PATTON evaporator and condensing units for raw food preservation with zero production downtime.',
          scope: 'PATTON Refrigeration Units, Pressure Balancing & Electrical Control Systems'
        },
        {
          id: 'track-4',
          title: '4-Story Office Building VRV/VRF Multi-Split Installation',
          client: 'Bangna Business Park Complex',
          category: 'AIR_CONDITIONING',
          location: 'Bangna-Trad Road, Bangkok',
          description: 'Energy-saving multi-zone VRF air conditioning installation with concealed ducting, quiet operation, and independent zone climate control.',
          scope: '14 Outdoor Units, 48 4-Way Cassette Indoor Units, Centralized Controls'
        },
        {
          id: 'track-5',
          title: '250 TR Industrial Water-Cooled Chiller Overhaul & Piping',
          client: 'Automotive Parts Manufacturing Plant',
          category: 'CHILLER',
          location: 'Bangpoo Industrial Estate, Samut Prakan',
          description: 'Complete overhaul of 250 TR water-cooled chiller, condenser chemical descaling, and high-spec insulated chilled water piping replacement.',
          scope: '250 TR Water-Cooled Chiller, Schedule 40 Steel Piping with Aeroflex Insulation'
        },
        {
          id: 'track-6',
          title: 'Commercial Supermarket Multi-Deck & Island Freezer System',
          client: 'Leading Hypermarket & Retail Chain',
          category: 'FREEZER_SHOWCASE',
          location: 'Bangkok, Thailand',
          description: 'Turnkey installation of remote condensing systems serving 32 linear meters of open multi-deck beverage showcases and deep freezer islands.',
          scope: '16m Multi-Deck Showcases, 16m Island Freezers, Remote R404A Central Rack'
        }
      ]
    },
    testimonials: {
      badge: 'Voice of Corporate Clients • Trust & Feedback',
      title: 'Verified Corporate Client Testimonials',
      heading: 'Feedback & Trust from Real Projects',
      subtitle: 'First-hand reviews from facility directors, industrial plant managers, and enterprise executives who trust 3T INTERCOOL with their critical cooling infrastructure.',
      filterAll: 'All Projects',
      filterColdRoom: 'Cold Storage',
      filterHVAC: 'Commercial HVAC',
      filterDuct: 'Duct & Stainless',
      verifiedBadge: 'Verified Project Handover',
      scoreLabel: '5.0 / 5.0 Rating',
      resultsLabel: 'Engineering Results:',
      moreDetails: 'View Project Details',
      bannerBadge: 'Comprehensive Warranty & Quality Guarantee',
      bannerHeading: 'Ready to Upgrade Your Enterprise Cooling Infrastructure?',
      bannerSubheading: 'Whether designing industrial cold rooms, upgrading office air conditioning, or installing precision ductwork, our certified engineers are ready to assist with a complimentary site survey.',
      bannerQuoteBtn: 'Request Your Project Estimate',
      bannerCallBtn: 'Call Direct Hotline',
      modalInspected: 'Project Inspected & Handed Over',
      modalResultsTitle: 'Key Outcomes & Project Highlights:',
      modalSimilarTitle: 'Need a Similar Engineering Solution?',
      modalQuoteBtn: 'Request Quote for Your Facility',
      stats: [
        {
          metric: '99.6%',
          label: 'Client Satisfaction Rate',
          subtext: 'Based on post-handover QA audits'
        },
        {
          metric: '150+',
          label: 'Completed Turnkey Facilities',
          subtext: 'Across Bangkok, industrial parks & estates'
        },
        {
          metric: '100%',
          label: 'On-Time Project Delivery',
          subtext: 'Flawless track record of completion'
        },
        {
          metric: '24/7',
          label: 'Rapid Emergency Standby',
          subtext: 'Supporting cold storage & production lines'
        }
      ],
      items: [
        {
          id: 'testi-1',
          clientName: 'Mr. Thanakorn Sitthichai',
          clientCompany: 'DON DON DONKI (Thailand) - Fashion Island Branch',
          clientPosition: 'Facility & Engineering Operations Manager',
          projectTitle: 'Cold Storage System & Rooftop RefComp Condensing Unit Installation',
          category: 'COLD_ROOM',
          categoryLabel: 'Cold Storage',
          location: 'Fashion Island Shopping Mall, Bangkok',
          highlight: '“Rock-solid temperature stability; 3T delivered ahead of the grand mall opening deadline.”',
          quote: 'DONKI demands the absolute highest standards of freshness for Japanese imports. The cold storage rooms and rooftop RefComp condensing units designed and installed by 3T Intercool operate with utmost reliability. Coordination with mall management was seamless, and the inspection passed on the first attempt.',
          results: [
            'Temperature stability within ±0.5°C 24/7',
            '100% on-time delivery before mall grand opening',
            'Full compliance with HACCP/GMP food safety audits'
          ],
          date: 'August 2026'
        },
        {
          id: 'testi-2',
          clientName: 'Mr. Wisarut Woravechakul',
          clientCompany: 'Sanden Intercool / Sanden (Thailand)',
          clientPosition: 'Head of Plant Maintenance Engineering',
          projectTitle: 'Refrigeration Ductwork & Stainless Steel Jacket Cladding',
          category: 'DUCT_PIPE',
          categoryLabel: 'Ductwork & Stainless',
          location: 'Sanden Industrial Manufacturing Plant, Thailand',
          highlight: '“The stainless jacket cladding is exquisite, eliminating condensation issues completely.”',
          quote: 'Industrial plant piping demands both rugged durability and minimal energy loss. The 3T team fabricated and installed the stainless steel jacket cladding flawlessly. Every seam and corner was sealed tight, dropping pipe condensation down to zero while strictly following all plant safety standards.',
          results: [
            'Over 20% reduction in thermal refrigeration loss',
            '100% zero condensation droplets on pipe surfaces',
            'Precision grade-304 stainless steel craftsmanship'
          ],
          date: 'July 2026'
        },
        {
          id: 'testi-3',
          clientName: 'Mr. Pradit Chinnarat',
          clientCompany: 'Food Processing Hub & Central Kitchen',
          clientPosition: 'Supply Chain & Manufacturing Director',
          projectTitle: 'Emergency PATTON Evaporator & Condensing Overhaul & PM',
          category: 'COLD_ROOM',
          categoryLabel: 'Cold Storage',
          location: 'Industrial Development Zone, Bangkok Area',
          highlight: '“Rapid emergency response. Restored cooling in time to prevent production downtime.”',
          quote: 'Our deep-freeze raw ingredient room suffered from pressure drops. 3T Intercool deployed their engineers immediately, proposing a clear plan to replace the PATTON coils and recalibrate expansion valves overnight without halting our daily factory shift. We truly appreciate their high level of responsibility.',
          results: [
            'Production downtime minimized to under 6 hours',
            'Temperature pulled down to -20°C 35% faster than legacy unit',
            'Comprehensive engineering data log with photos supplied'
          ],
          date: 'May 2026'
        },
        {
          id: 'testi-4',
          clientName: 'Ms. Waraporn Mongkolpanich',
          clientCompany: 'Bangna Business Park Complex',
          clientPosition: 'Property & Facility Manager',
          projectTitle: '4-Story Multi-Zone VRV/VRF Air Conditioning Installation',
          category: 'AIR_CONDITIONING',
          categoryLabel: 'Commercial HVAC',
          location: 'Bangna-Trad Road, Bangkok',
          highlight: '“Office tenants praise the quiet cooling, and our common-area power bill dropped 22%.”',
          quote: 'We replaced our aging 4-story HVAC system with multi-split VRV/VRF units with zoned individual control. 3T engineers handled everything from cooling load sizing to tidy concealed refrigerant piping. The technicians were courteous and kept the work area clean daily.',
          results: [
            '22% measurable reduction in air conditioning electricity cost',
            'Ultra-quiet acoustic rating under 38 dB in workspaces',
            'Precise independent temperature control per zone'
          ],
          date: 'March 2026'
        },
        {
          id: 'testi-5',
          clientName: 'Mr. Chaiyut Pongsiri',
          clientCompany: 'Cold Chain Logistics Distribution Center',
          clientPosition: 'Deputy Managing Director of Warehouse Operations',
          projectTitle: 'Dual Temperature Cold Storage Rooms & Air Circulation',
          category: 'COLD_ROOM',
          categoryLabel: 'Cold Chain Logistics',
          location: 'Ladkrabang Industrial Estate, Bangkok',
          highlight: '“High engineering standards with thorough staff training and warranty documentation.”',
          quote: 'Our cold warehouse involves non-stop forklift traffic and open-door cycles. The PU/PIR panels and air-lock doors installed by 3T are heavy-duty and resilient. The automated real-time mobile temperature alerts give our warehouse management complete peace of mind.',
          results: [
            'Rapid 3-minute temperature recovery after door cycles',
            '24/7 automated mobile temperature threshold alerts',
            'Comprehensive structure and cooling warranty package'
          ],
          date: 'June 2026'
        },
        {
          id: 'testi-6',
          clientName: 'Dr. Kanokwan Ratanapiboon, D.D.S.',
          clientCompany: 'Smile Specialty Dental Clinic & Medical Center',
          clientPosition: 'Medical Administration & Environmental Director',
          projectTitle: '4-Way Cassette HVAC with Clean Air Filtration & Annual PM',
          category: 'AIR_CONDITIONING',
          categoryLabel: 'Healthcare & Clinic',
          location: 'Rama 9 Road, Huai Khwang, Bangkok',
          highlight: '“Exceptional hygiene protocols with zero dust or moisture left in examination rooms.”',
          quote: 'A dental clinic requires clean, sterile air and maintenance that never leaves dust or odors. 3T technicians covered all sensitive dental equipment with protective sheets, used medical-grade sanitizing detergents, and scheduled our PM visits promptly. Excellent service!',
          results: [
            '100% adherence to clinical hygiene & personal protective gear',
            'Odor-free, fresh, purified air circulation throughout',
            'Punctual quarterly preventive maintenance visits'
          ],
          date: 'September 2026'
        }
      ]
    },
    process: {
      tag: '5-STEP WORKFLOW',
      title: 'ENGINEERING STANDARDS & WORKFLOW',
      heading: '5-Step Structured Workflow to Guaranteed Success',
      subtitle: 'Strict quality control at every phase following global engineering standards for peak safety and thermal efficiency.',
      steps: [
        {
          num: '01',
          title: 'Site Survey & Needs Analysis',
          subtitle: 'Detailed Field Inspection',
          desc: 'Our engineering team visits your facility to inspect architectural structure, measure dimensions, evaluate power capacity, and calculate exact cooling loads.',
          badge: 'Complimentary Free Survey',
          points: ['Physical structural survey & space measurement', 'Cooling load calculations using engineering software', 'Electrical supply & condensate drainage verification']
        },
        {
          num: '02',
          title: 'Engineering Design & Layout',
          subtitle: 'CAD Drafting & Equipment Sizing',
          desc: 'Creation of detailed AutoCAD shop drawings optimizing airflow circulation, heat exchange thermodynamics, serviceability, and aesthetic integration.',
          badge: 'Clear Shop Drawings',
          points: ['AutoCAD shop drawings & schematic diagrams', 'Code-compliant equipment placement and vibration damping', 'Execution schedule tailored to avoid operational disruption']
        },
        {
          num: '03',
          title: 'Cost Estimation & Schedule',
          subtitle: 'Transparent BOQ Itemization',
          desc: 'Transparent Bill of Quantities (BOQ) detailing equipment specifications, refrigerant types, warranty coverage, and clear timeline commitments.',
          badge: 'Zero Hidden Costs',
          points: ['Detailed BOQ with transparent material breakdown', 'Globally certified equipment brands & models', 'Strict contractual delivery timeline']
        },
        {
          num: '04',
          title: 'Installation & Pressure Testing',
          subtitle: 'Certified Field Execution',
          desc: 'Installation by licensed technicians with full safety PPE, conducting high-pressure dry nitrogen leak tests and multi-stage deep vacuuming.',
          badge: '100% Safety Compliance',
          points: ['Full safety PPE gear compliant with industrial site regulations', 'High-pressure dry nitrogen leak testing', 'Deep vacuum dehydration ensuring zero moisture in lines']
        },
        {
          num: '05',
          title: 'Commissioning & Handover',
          subtitle: 'Operational Testing & Warranty',
          desc: 'Comprehensive measurement of temperatures, subcooling, superheat, electrical draw, formal handover documentation, user training, and warranty.',
          badge: 'Full 1-Year Warranty',
          points: ['Precision temperature & electrical parameter logging', 'User manual handover and client staff training', 'Periodic preventive maintenance schedule']
        }
      ]
    },
    quote: {
      tag: 'ONLINE ESTIMATION',
      title: 'Online Quotation & Site Survey Estimation',
      subtitle: 'Select your system requirements; our engineering team will calculate an initial estimate and get in touch within 24 hours.',
      systemLabel: 'Select Engineering System',
      jobTypeLabel: 'Service Scope / Job Type',
      jobTypes: [
        { id: 'NEW_INSTALL', label: 'New Turnkey Installation' },
        { id: 'REPAIR_OVERHAUL', label: 'Repair / Major Overhaul' },
        { id: 'PM_MAINTENANCE', label: 'Preventive Maintenance (PM)' },
        { id: 'DESIGN_CONSULT', label: 'System Design & Calculation' },
        { id: 'INSPECTION', label: 'Site Inspection / Condition Audit' }
      ],
      nameLabel: 'Contact Person / Project Manager',
      namePlaceholder: 'e.g., Mr. David Smith / Company Name',
      companyLabel: 'Company / Organization Name (Optional)',
      companyPlaceholder: 'e.g., Siam Logistics Co., Ltd.',
      phoneLabel: 'Direct Contact Telephone',
      phonePlaceholder: 'e.g., 081-234-5678',
      lineLabel: 'LINE ID (for instant quotation copy)',
      linePlaceholder: 'e.g., davidsmith_cool',
      emailLabel: 'Email Address (for formal documentation)',
      emailPlaceholder: 'name@company.com',
      locationLabel: 'Project Location / Job Site (District / Province)',
      locationPlaceholder: 'e.g., Ladkrabang Industrial Estate, Bangkok',
      detailsLabel: 'Project Scope / Dimensions / BTU / Target Temperature',
      detailsPlaceholder: 'e.g., Need a 4x6x3m cold room at -18°C or 10 units of 4-way cassette air conditioning for office floor.',
      urgentCheckbox: 'Urgent Priority Project / Need response today',
      preferredDateLabel: 'Preferred Site Survey Date (Approximate)',
      budgetLabel: 'Estimated Budget Range',
      budgetPlaceholder: 'Select estimated budget',
      budgetOptions: [
        'Under 50,000 THB',
        '50,000 - 150,000 THB',
        '150,000 - 300,000 THB',
        '300,000 - 500,000 THB',
        '500,000 - 1,000,000 THB',
        'Above 1,000,000 THB',
        'Require Engineer On-Site Estimation'
      ],
      submitBtn: 'Submit Quotation Request / Schedule Survey',
      submittingBtn: 'Submitting Information...',
      directCallPrompt: 'For immediate engineering consultation, call now:',
      successTitle: 'Quotation Request Successfully Submitted!',
      successMessage: 'The engineering team at 3T Intercool & Service Co., Ltd. has received your project details and will contact you via phone or LINE within 24 hours.',
      trackingIdLabel: 'Your Reference Request ID:',
      newQuoteBtn: 'Submit Another Project Request',
      emergencyCall: 'Direct Hotline Call',
      guaranteeTitle: 'Guaranteed Benefits for Your Project:',
      guaranteeItem1: 'Free on-site survey and cooling load calculation by certified engineers',
      guaranteeItem2: 'Transparent itemized Bill of Quantities (BOQ) with zero hidden fees',
      guaranteeItem3: 'Full 1-year comprehensive warranty with scheduled maintenance visits'
    },
    contact: {
      tag: 'MANAGEMENT & HEADQUARTERS',
      title: 'Executive Leadership & Corporate Contact',
      heading: 'Ready to Coordinate & Serve at All Times',
      subtitle: 'Connect directly with executive leadership and project engineering specialists at 3T Intercool & Service Co., Ltd.',
      leadershipTitle: 'Executive Leadership',
      directorRole: 'Managing Director',
      managerRole: 'Operations Manager',
      officeTitle: 'Headquarters & Engineering Service Center',
      hoursLabel: 'Business Hours:',
      hoursValue: 'Monday - Saturday: 08:00 - 18:00 (24/7 Emergency Support)',
      areasLabel: 'Service Coverage:',
      areasValue: 'Bangkok, Greater Bangkok, Central & Eastern Thailand, and Industrial Estates Nationwide',
      mapDirectionsBtn: 'Get Directions via Google Maps',
      callDirectorBtn: 'Call Managing Director',
      callManagerBtn: 'Call Operations Manager',
      chatLineBtn: 'Chat via LINE'
    },
    footer: {
      desc: 'Specialized contractor in commercial HVAC, industrial cold storage, ventilation ductwork, and chiller systems compliant with ASHRAE & SMACNA standards.',
      systemsHeading: '5 Core Engineering Systems',
      contactHeading: 'Contact Channels',
      officeHeading: 'Headquarters & Admin',
      adminPortalBtn: 'Data Management System (Admin)',
      rightsReserved: 'All rights reserved.',
      backToTop: 'Back to Top',
      trackRecordLink: 'Projects & Track Record',
      testimonialsLink: '★ Client Testimonials'
    },
    floating: {
      callTitle: 'Call Hotline',
      lineTitle: 'LINE Chat',
      quoteTitle: 'Cost Calculator'
    }
  }
};
