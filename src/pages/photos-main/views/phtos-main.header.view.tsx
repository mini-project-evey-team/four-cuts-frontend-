import { FC } from "react";
import { Button } from "../../../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
type IPhtosMainHeaderViewProps = {};

export const PhotosMainHeaderView: FC<IPhtosMainHeaderViewProps> = ({}) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Button attribute="empty" size="small">
          Login
        </Button>
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 200px 0px 200px;
  background-color: #ffe1e7;
`;