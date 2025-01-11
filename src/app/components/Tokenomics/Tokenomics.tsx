import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Tokenomics = () => {
  const data = [
    { name: "Foundation", value: 20 },
    { name: "Crowdsale investors", value: 80 },
  ];

  const COLORS = ["#FAA002", "#0082FF"];

  return (
    <div className="xl:h-[539px]  md:w-[63%] p-[24px] bg-white rounded-lg">
      <div id="tokenomics">
        <span className="text-[#0F1629] font-semibold text-[24px]">
          Tokenomics
        </span>
      </div>
      <div className=" w-full mt-[24px]  xl:h-[402px] ">
        <span className=" text-[#1D1D1D] font-semibold text-[20px] ">
          Initial Distribution
        </span>
        <div className=" h-[210px] pl-0">
          <ResponsiveContainer
            width="=50%" // Use full width
            height="100%" // Adjust height dynamically
            className="md:w-[50%] "
          >
            <PieChart>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                onClick={() => {}}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any, name: any) => `${name}: ${value}%`}
                contentStyle={{
                  backgroundColor: "#EFF2F5",

                  borderRadius: "8px",
                }} // Remove the black box on hover
              />
              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                formatter={(value, entry: any) =>
                  `${value}: ${entry.payload.value}%`
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className=" text-[16px] font-light mt-[15px] text-[#3E424A] ">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
