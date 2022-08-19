import { Box } from "@mui/material";
import styled from "@emotion/styled";

const CustomBox = styled(Box)`
  margin: 30px 20px 0px 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 15px;
  margin: 20px 20px 0px 20px;
`;

const Name = styled(Box)`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px 0px 20px;
`;

const Description = styled(Box)`
  color: #9d9b9f;
  font-size: 14px;
  margin: 3px 0px 10px 20px;
`;

function Bookmark(props) {
  const { item } = props;
  return (
    <CustomBox>
      <Img src={item.imageUrl} alt="title" />
      <Name>{item.name}</Name>
      <Description>
        {item.description !== ""
          ? item.description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      </Description>
    </CustomBox>
  );
}

export default Bookmark;
