import 'dotenv/config';

export const getAirPollutionBySidoUrl = (sidoName: string) => {
  // 서울
  return `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${sidoName}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${process.env.AIR_CERT_KEY}&ver=1.0`;
};
