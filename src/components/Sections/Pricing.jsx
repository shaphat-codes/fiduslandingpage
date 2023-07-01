import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="0-75000 points"
                title="Bronze Tier"
                text=""
                offers={[
                  { name: "1% Cashback on Every Spend", cheked: true },
                  
                  { name: "Overdraft Facility", cheked: false },
                  { name: "Credit Line", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                
                price="75001 - 200,000"
                title="Silver Tier"
                text=""
                offers={[
                  { name: "2% Cashback on Every Spend", cheked: true },
                  
                  { name: "Overdraft Facility", cheked: true },
                  { name: "Credit Line", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="Gold"
                price="200,000+ points"
                title="Gold Tier"
                text=""
                offers={[
                  { name: "3% Cashback on Every Spend", cheked: true },
                  
                  { name: "Overdraft Facility", cheked: true },
                  { name: "Credit Line", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




