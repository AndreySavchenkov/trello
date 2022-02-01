import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`

`
const Name = styled.span`
    
`
const Text = styled.span`
    margin-left: 20px;
`
type PropsType = {
    writer: string,
    text: string,
}

export const Comment = (props: PropsType) => {
    return(
        <CommentWrapper>
            <Name>{props.writer}</Name>
            <Text>{props.text}</Text>
        </CommentWrapper>
    )
}