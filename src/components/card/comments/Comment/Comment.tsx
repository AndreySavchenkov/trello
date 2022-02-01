import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
  display: flex;
  width: 90%;
  background: #fff;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;
`
const Name = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #172b4d;
`
const Text = styled.span`
  display: block;
    margin-left: 20px;
`
type PropsType = {
    text: string,
    writer: string,
    nameUser: string,
}

export const Comment = (props: PropsType) => {
    return(
        <CommentWrapper>
            <Name>{props.writer}</Name>
            <Text>{props.text}</Text>
        </CommentWrapper>
    )
}