import React from 'react';
import styled from 'styled-components';

import ActiveItem from 'ActiveItem';

import Content from '../Content';
import imageUrl from '../../../assets/spring.jpg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 500px;
  height: 100%;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  `;

const forwardStyleImage = { transform: 'translateX(-100%)', opacity: 0};
const backwardStyleImage = { transform: 'translateX(100%)', opacity: 0};

const forwardStyleContent = { transform: 'scale(.5) translateX(100%)', opacity: 0};
const backwardStyleContent = { transform: 'scale(2) translateY(100%)', opacity: 0};

const WithImage = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >{
      style => (
        <Image style={style} />
      )
    }
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >{
      style => (
        <Content
          title={'This is spring'}
          style={style}
        />
      )
    }
    </ActiveItem>
  </Wrapper>
);

export default WithImage;
