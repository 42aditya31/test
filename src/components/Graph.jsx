import { Line } from "react-chartjs-2";

const Graph = ({ totalPoints }) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Points",
        data: [200, 300, 250, 400, 350, 450, 1000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-md font-bold">Total Points Earned: {totalPoints}</h3>
      <Line data={data} />
    </div>
  );
};

export default Graph;
