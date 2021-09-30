import React from "react";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
  Text
} from "./TopProductStyles";



export default function TopProduct() {

	 const __DATA__ = [
		{
		  ProductName: 'Mens Cotton Jacket',
		  total: 13,
		},
		{
			ProductName: 'White Gold Plated Princess',
			total: 20,
		  colors: ["#ff47ab", "#e0064e"]
		},
		{
			ProductName: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
			total: 16,
		},
		{
			ProductName: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
			total: 30,
		},
		{
			ProductName: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
			total: 22,
		  colors: ["#d9c1ad", "#714511"]
		}
	  ];

  return (
    <Container>
      <MainContainer>
        {__DATA__.map(({ ProductName, total, colors }, i) => {
          return (
            <BarChartContainer key={i}>
              <Number color={"#ffd847"}>{total}</Number>
              <MakeBar height={total * 2} colors={["#d9c1ad", "#e0a106"]} />
			  <Text color={"#000000"}>{ProductName}</Text>
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine />
    </Container>
  );
}
