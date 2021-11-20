import styled, { css } from "styled-components";
import { useImages } from "../contexts/ImagesProvider";



const Layout = ({children, ...props}) => {
  const {imagesState:{gridLayout:{id}}} = useImages();


  return <Grid LayoutNumber={LayoutNumber[id]} {...props}>
    {children}
  </Grid>
}

export default Layout;

const Grid = styled.div`
  display: grid;
  ${({LayoutNumber})=> (LayoutNumber)};
  gap: 9.5px;
  width: 100%;
  height: 100%;
`;

const LayoutNumber = {
  '0':css`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  `,
  '1':css`
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2, 1fr);
`,
  '2':css`
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2, 1fr);
`,
  '3':css`
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2, 1fr);
`,
  '4':css`
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
  `,
  '5':css`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  `
}