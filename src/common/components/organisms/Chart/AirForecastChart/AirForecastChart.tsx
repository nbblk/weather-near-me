import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default ({ data }: any) => {
  return (
    <ResponsiveContainer height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <XAxis dataKey="dt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pm10" fill="#8884d8" />
        <Bar dataKey="pm25" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
