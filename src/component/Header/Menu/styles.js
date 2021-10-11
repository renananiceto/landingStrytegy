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
  max-width: 1440px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 235, 151);
    border-radius: 5px;
    width: 180px;
    height: 48px;
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