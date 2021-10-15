import styled from "styled-components";

export const Container = styled. div`
  width: 100%;

`
export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1366px;
  margin-top: 45px;
`
export const Logo = styled.img`
  width: 100%;
`

export const BoxLogo = styled.div`
  max-width: 848.28px;
`

export const BoxMap = styled.div`
  display:flex;
`

export const BigTitle = styled.h1`
  font-size: 3.9375rem;
  font-family: sans-serif ;
  color: rgb(34, 37, 75);
  width: 125%;
`
export const Title = styled.p`
  font: 300 1.375rem / 1.875rem Soleto, sans-serif;
  color: rgb(34, 37, 75);
  opacity: 0.6;
  width: 88%;
  `

export const BoxBtn = styled.div`
  position: relative;
  width: 13.375rem;
  height: 3.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  `
export const Btn = styled.button`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  border: none;
  background: rgb(255, 206, 6);
  animation: 3s ease 0s 1 normal none running lbWRkT;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border-radius: 0.3125rem;
  font: 500 1.125rem Soleto, sans-serif;
  position: absolute;
  left: 0;
  &:hover{
    width: 105%;
    height: 110%;
    left: -2.5%;
  }
  `

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  
  `

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 7rem;
  width: 100%;
`
export const Text = styled.h2`
  font-size: 3.4375rem;
  margin-bottom: 1.5rem;
  font-family:Paralucent, sans-serif;
  color: rgb(34, 37, 75);
`

export const SubText = styled.p`
  font-size: 1.375rem;
  font-family:Paralucent, sans-serif;
  opacity: 0.6;
  width: 65%;
`

