import { CompanyInfo, ServiceItem, QuotationRequest } from '../types';

export const DEFAULT_COMPANY_INFO: CompanyInfo = {
  companyNameTh: 'บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด',
  companyNameEn: '3T INTERCOOL & SERVICE CO., LTD.',
  taxId: '0105569099076',
  managingDirectorTh: 'นาย ธวัชชัย บาระพรม',
  managingDirectorEn: 'MR. TAWATCHAI BARAPHOM',
  phone: '081-5163898',
  lineId: 'chelsea898',
  email: '3t.intercool@gmail.com',
  address: 'เลขที่ 109/94 หมู่บ้านพฤกษา51 ซอย ฉลองกรุง53 แขวงลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร 10520',
  announcement: 'ยินดีให้บริการงานระบบปรับอากาศและทำความเย็นครบวงจร พร้อมทีมงานวิศวกรผู้เชี่ยวชาญ บริการทั่วกรุงเทพฯ และปริมณฑล',
  businessHours: 'จันทร์ - เสาร์: 08:00 - 18:00 น. (บริการฉุกเฉิน 24 ชม.)',
  serviceAreas: [
    'กรุงเทพมหานคร (ลาดกระบัง, บางนา, ร่มเกล้า, มีนบุรี, พระราม 9, สุขุมวิท ฯลฯ)',
    'สมุทรปราการ (บางพลี, บางเสาธง, เทพารักษ์, แพรกษา, นิคมบางปู)',
    'ปทุมธานี (นวนคร, ลาดหลุมแก้ว, ธัญบุรี, รังสิต)',
    'นนทบุรี (บางใหญ่, ปากเกร็ด, บางบัวทอง)',
    'ฉะเชิงเทรา & ชลบุรี (นิคมอุตสาหกรรมเวลโกรว์, อมตะซิตี้, แหลมฉบัง)'
  ]
};

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'งานระบบ AIR CONDITIONING (เครื่องปรับอากาศ)',
    category: 'AIR_CONDITIONING',
    summary: 'รับออกแบบ เขียนแบบ ติดตั้ง ซ่อมบำรุง และล้างระบบเครื่องปรับอากาศทุกประเภท ตั้งแต่บ้านพัก อาคารสำนักงาน ไปจนถึงโรงงานอุตสาหกรรม (VRV, VRF, Chilled Water, Split Type)',
    features: [
      'ระบบ VRV / VRF ประหยัดพลังงานสูง สำหรับอาคาร สำนักงาน โรงแรม',
      'งานติดตั้งท่อน้ำยาและสายไฟตามมาตรฐานความปลอดภัยทางวิศวกรรม',
      'ตรวจเช็คค่าแรงดันน้ำยาและประสิทธิภาพลมเย็น ละเอียดทุกจุด',
      'สัญญาบริการบำรุงรักษาเชิงป้องกัน (Preventive Maintenance - PM) รายปี/รายงวด'
    ],
    isActive: true,
    order: 1,
    badge: 'บริการยอดนิยม'
  },
  {
    id: 'srv-2',
    title: 'งานระบบ COLD ROOM (ห้องเย็นควบคุมอุณหภูมิ)',
    category: 'COLD_ROOM',
    summary: 'ออกแบบและติดตั้งห้องเย็นควบคุมอุณหภูมิสำหรับเก็บรักษาอาหาร วัตถุดิบ ผักผลไม้ ยา และสินค้าควบคุมอุณหภูมิพิเศษ ทั้งอุณหภูมิแช่เย็น (Chiller Room) และแช่เยือกแข็ง (Freezer Room)',
    features: [
      'แผ่นฉนวน Sandwich Panel คุณภาพสูงกันความร้อน 100% มาตรฐาน GMP/HACCP',
      'ชุด Condensing Unit & Evaporator ควบคุมอุณหภูมิตั้งแต่ +15°C ถึง -40°C',
      'ระบบละลายน้ำแข็งอัตโนมัติ (Defrost System) พร้อมตู้คอนโทรลเตือนอุณหภูมิผิดปกติ',
      'ประตูห้องเย็นบานเลื่อน/บานสวิง พร้อมม่านริ้วพลาสติกกันสูญเสียความเย็น'
    ],
    isActive: true,
    order: 2,
    badge: 'มาตรฐานอุตสาหกรรม'
  },
  {
    id: 'srv-3',
    title: 'งานระบบ DUCT PIPE (ท่อลมและระบบระบายอากาศ)',
    category: 'DUCT_PIPE',
    summary: 'งานติดตั้งท่อส่งลมปรับอากาศ ท่อลมเย็น ท่อดูดอากาศเสีย (Exhaust Air) ท่อเติมอากาศบริสุทธิ์ (Fresh Air) และระบบดูดควันห้องครัว/โรงงาน พร้อมฉนวนกันความร้อน',
    features: [
      'ท่อสังกะสี Galvanized และ Stainless ตามมาตรฐาน SMACNA แข็งแรง ทนทาน',
      'หุ้มฉนวนใยแก้วหรือฉนวนยางสังเคราะห์ป้องกันการเกิดหยดน้ำ (Condensation) 100%',
      'หัวจ่ายลม Grill & Diffuser ออกแบบกระจายลมเย็นสม่ำเสมอทั่วทุกจุด',
      'พัดลมระบายอากาศอุตสาหกรรม (Industrial Blower) ลดเสียงรบกวนและเพิ่มประสิทธิภาพการหมุนเวียนลม'
    ],
    isActive: true,
    order: 3,
    badge: 'งานระบบครบวงจร'
  },
  {
    id: 'srv-4',
    title: 'งานระบบ CHILLER (เครื่องทำน้ำเย็นอุตสาหกรรม)',
    category: 'CHILLER',
    summary: 'งานระบบชิลเลอร์ขนาดใหญ่สำหรับอาคารสูง โรงพยาบาล ห้างสรรพสินค้า และระบบหล่อเย็นในกระบวนการผลิตทางอุตสาหกรรม (Air-Cooled & Water-Cooled Chiller)',
    features: [
      'ติดตั้งท่อน้ำเย็น Chilled Water Pipe พร้อมวาล์วควบคุมและฉนวนกันความร้อน',
      'งานระบบ Cooling Tower และชุดปั๊มน้ำหมุนเวียน (Condenser & Chilled Water)',
      'ตรวจเช็ค Overhaul และวิเคราะห์สมรรถนะระบบ (COP & ประหยัดพลังงานไฟฟ้า)',
      'ระบบควบคุมอัตโนมัติ PLC และเซ็นเซอร์อุณหภูมิ-ความดันแม่นยำสูง'
    ],
    isActive: true,
    order: 4,
    badge: 'วิศวกรรมเฉพาะทาง'
  },
  {
    id: 'srv-5',
    title: 'งานระบบของตู้แช่ทุกประเภท (Commercial Refrigeration)',
    category: 'FREEZER_SHOWCASE',
    summary: 'รับตรวจเช็ค ซ่อมแซม ติดตั้ง และดัดแปลงตู้แช่เชิงพาณิชย์ทุกประเภท สำหรับซูเปอร์มาร์เก็ต มินิมาร์ท ร้านสะดวกซื้อ ร้านเบเกอรี่ และภัตตาคาร',
    features: [
      'ตู้แช่เครื่องดื่มประตูกระจก (Upright Glass Door Chillers 1-4 ประตู)',
      'ตู้แช่แข็งอาหารสด (Deep Freezers & Island Freezers ฝาทึบ/ฝากระจกโค้ง)',
      'ตู้แช่สแตนเลสสำหรับครัวโรงแรม ร้านอาหาร เคาน์เตอร์เตรียมอาหาร',
      'ตู้แช่เปิดหน้าร้าน Open Showcase กระจายความเย็นเร็ว ควบคุมอุณหภูมิเสถียร'
    ],
    isActive: true,
    order: 5,
    badge: 'ช่างมืออาชีพ'
  }
];

export const INITIAL_QUOTATIONS: QuotationRequest[] = [
  {
    id: '3T-202610-0101',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    customerName: 'คุณสมศักดิ์ วรภัทร',
    companyName: 'บจก. โลจิสติกส์เซ็นเตอร์ ลาดกระบัง',
    phone: '089-4567890',
    lineId: 'somsak.logi',
    email: 'somsak@example.com',
    category: 'COLD_ROOM',
    serviceType: 'ติดตั้งใหม่',
    location: 'นิคมอุตสาหกรรมลาดกระบัง กทม.',
    details: 'ต้องการติดตั้งห้องเย็นขนาด 4x6x3 เมตร อุณหภูมิ -18°C สำหรับเก็บเนื้อสัตว์และอาหารแช่แข็ง ขอใบเสนอราคาและนัดสำรวจหน้างานครับ',
    isUrgent: true,
    preferredDate: '2026-10-18',
    estimatedBudget: '350,000 - 450,000 บาท',
    status: 'SCHEDULED',
    internalNotes: 'นัดหมายคุณสมศักดิ์เข้าสำรวจหน้างานวันเสาร์ที่ 18 ต.ค. เวลา 10.00 น. ทีมวิศวกรลงพื้นที่'
  },
  {
    id: '3T-202610-0102',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    customerName: 'คุณพัชรินทร์ รัตนวงศ์',
    companyName: 'คลินิกทันตกรรมสไมล์ พระราม 9',
    phone: '086-1234567',
    lineId: 'pat_smile',
    category: 'AIR_CONDITIONING',
    serviceType: 'ล้างทำความสะอาด / บำรุงรักษาเชิงป้องกัน',
    location: 'ถนนพระราม 9 แขวงห้วยขวาง กทม.',
    details: 'ล้างแอร์ระบบ Cassette Type 4 ทิศทาง จำนวน 8 เครื่อง พร้อมตรวจเช็คเติมน้ำยาแอร์ตามรอบ PM ประจำปี',
    isUrgent: false,
    preferredDate: '2026-10-20',
    status: 'QUOTED',
    internalNotes: 'ส่งเอกสารใบเสนอราคา 9,600 บาท ทาง LINE ให้เรียบร้อย ลูกค้ารอเสนอผู้บริหารอนุมัติ'
  },
  {
    id: '3T-202610-0103',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    customerName: 'คุณอนันต์ ชัยวัฒน์',
    companyName: 'ร้านสะดวกซื้อ แกรนด์มินิมาร์ท',
    phone: '081-9988776',
    lineId: 'anan_cm',
    category: 'FREEZER_SHOWCASE',
    serviceType: 'ซ่อมบำรุง / แก้ไขปัญหา',
    location: 'ซอยฉลองกรุง 53 ลาดกระบัง',
    details: 'ตู้แช่เครื่องดื่ม 3 ประตูคอมเพรสเซอร์ไม่ตัด และอุณหภูมิไม่ลดลงต่ำกว่า 10 องศา ต้องการช่างเข้าตรวจด่วน',
    isUrgent: true,
    preferredDate: 'ด่วนที่สุด',
    status: 'CONTACTED',
    internalNotes: 'โทรติดต่อกลับแล้ว คุณธวัชชัยนัดเข้าตรวจเช็คแผงคอยล์ร้อนและเติมน้ำยาช่วงบ่ายวันนี้'
  }
];
