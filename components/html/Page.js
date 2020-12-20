import React from "react";
import Container from "./Container";
import Content from "./Content";

export default function Page({ children }) {
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <Container>
          <Content>
            <h2 className="content-title">githubtrends</h2>
          </Content>
        </Container>
        {children}
      </div>
    </div>
  );
}
