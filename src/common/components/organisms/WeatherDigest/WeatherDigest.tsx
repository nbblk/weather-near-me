/** @jsxImportSource @emotion/react */
import Table from '@common/components/atoms/Table/Table';

type WeatherDigest = {
  pm10: number;
  pm25: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
};

export default ({ pm10, pm25, maxTemp, minTemp, humidity }: WeatherDigest) => {
  return (
    <Table>
      <tbody css={{ textAlign: 'left' }}>
        <tr>
          <th scope="row">미세먼지 농도(pm10/pm2.5)</th>
          <td>
            {pm10} / {pm25}
          </td>
        </tr>
        <tr>
          <th scope="row">최고기온</th>
          <td>{maxTemp}</td>
        </tr>
        <tr>
          <th scope="row">최저기온</th>
          <td>{minTemp}</td>
        </tr>
        <tr>
          <th scope="row">습도</th>
          <td>{humidity}%</td>
        </tr>
      </tbody>
    </Table>
  );
};
