<template>
  <div>Loaded</div>

  <StyledDiv>Hello</StyledDiv>
  <StyledDiv>Hello</StyledDiv>
  <StyledDiv>Hello</StyledDiv>
  <StyledDiv>Hello</StyledDiv>
  <StyledDiv>Hello</StyledDiv>
  <StyledDiv>Hello</StyledDiv>
  <StyledDiv>Hello</StyledDiv>

  <StyledP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </StyledP>
  <StyledP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </StyledP>
  <StyledP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </StyledP>
  <StyledP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </StyledP>
  <StyledP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </StyledP>
  <StyledP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </StyledP>
  <StyledP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </StyledP>

  <StyledH1>Hello</StyledH1>
  <StyledH1>Hello</StyledH1>
  <StyledH1>Hello</StyledH1>
  <StyledH1>Hello</StyledH1>
  <StyledH1>Hello</StyledH1>
  <StyledH1>Hello</StyledH1>
  <StyledH1>Hello</StyledH1>

  <StyledGrid>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
    <StyledSpan></StyledSpan>
  </StyledGrid>
</template>

<style>
body {
  background-color: blue;
}
</style>

<script setup lang="ts">
import styled, { css } from './emotion';

const StyledDiv = styled.div(
  () => css`
    background-color: red;
  `
);

const StyledP = styled.div(
  () => css`
    background-color: yellow;
  `
);

const StyledH1 = styled.div(
  () => css`
    background: linear-gradient(45deg, blue, red);
  `
);

const StyledSpan = styled.div(
  () => css`
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: orange;
    border-radius: 100%;
  `
);

const StyledGrid = styled.div(
  () => css`
    display: grid;
    grid-template-columns: auto auto auto auto;
    background-color: lightblue;
  `
);
</script>
