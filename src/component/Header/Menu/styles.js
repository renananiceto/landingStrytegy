import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
`
export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1366px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

export const BoxMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p:nth-child(3){
  width: 11.25rem;
  height: 3rem;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 5px;
  z-index: 0;
  background: rgb(255, 235, 151);
  overflow: hidden;
  color: black;
  
&:hover:after {
  width: 100%;
}
&:after {
  content: "";
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: rgb(255, 206, 6);
}


  }



  
  p:nth-child(4){
    border-radius: 50%;
    border: solid black 1px;
    width: 30px;
    height: 30px;
    font-size: 1.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const BoxLogo = styled.div`
  width: 8.875rem;

`

export const Logo = styled.img`
  width: 100%;
`

export const Paragraph = styled.p`
  font-family: Paralucent, sans-serif;
  margin: 0px 1.25rem;
  padding: 0px 0.5rem;
  border-bottom: 1.5px solid transparent;
  font: 400 1.3125rem Paralucent, sans-serif;
  color: rgb(37, 41, 76);
  cursor: pointer;
`