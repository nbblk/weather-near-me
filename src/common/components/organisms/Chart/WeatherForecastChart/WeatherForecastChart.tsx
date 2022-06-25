import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default ({ data }: any) => {
  return (
    <ResponsiveContainer height={400}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="maximumTemp" stroke="#8884d8" />
        <Line type="monotone" dataKey="minimumTemp" stroke="#82ca9d" />
        <XAxis dataKey="dt" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
