import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import Layout from '../components/layout'

const RaisedCard = styled(Paper)`
  margin: -60px 30px 0px;
  position: relative;
  && {
    box-shadow: 0 8px 10px -5px rgba(0,0,0,0.02), 0 16px 24px 2px rgba(0,0,0,0.14) ;
  }
`
const Container = styled.div`
  max-width: 960px;
  margin: auto;
  width: 100%;
  z-index: 2;
  margin-left: auto;
  padding-left: 15px;
  margin-right: auto;
  padding-right: 15px;
`

const HeroImg = styled.div`
  background: #272727;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  z-index: -1;
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  position: relative;
`

const HeroJumbotron = styled.div`
  width: 50%;
`

const JumbotronTitle = styled.h1`
  color: #fff;
  font-weight: 800;
`

const Section = styled.section`
  padding: 70px 0;
`

const SectionHeader = styled.header`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.66rem;
`
const SectionSubTitle = styled.h5`
  font-weight: 300;
  color: #999;
  text-align: center;
  font-size: 1rem;
`

const PlayVideoButton = styled(Button)`
  && {
    border: 2px solid #1F2833;
    font-family: Raleway-ExtraBold;
    color: #0B0C10;
  }
`

const PlaceholderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const IndexPage = () => (
  <Layout>
    <HeroContainer>
      <HeroImg />
      <Container>
        <HeroJumbotron>
          <JumbotronTitle>Let’s make your next event memorable.</JumbotronTitle>
          <Button variant="contained" color="secondary">
            <Icon>play_arrow</Icon>
            WATCH VIDEO
          </Button>
        </HeroJumbotron>
      </Container>
    </HeroContainer>
      <RaisedCard>
        <Container>
          <Section>
            <SectionHeader>
              <Grid item xs={12} md={8}>
                <SectionTitle>Our latest projects</SectionTitle>
                <SectionSubTitle>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</SectionSubTitle>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <h3>Project Instinct</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sem ligula. Aenean aliquet mauris libero, eu maximus sem rutrum quis. Maecenas elementum felis eget mi luctus bibendum. Aenean facilisis ullamcorper enim sit amet ornare. Suspendisse luctus placerat dui ut vestibulum</p>
                  <PlayVideoButton variant="outlined">
                    PLAY VIDEO
                  </PlayVideoButton>
                </Grid>
                <Grid item md={6}>
                  <PlaceholderImg src="https://via.placeholder.com/350x150"/>
                </Grid>
              </Grid>
            </SectionHeader>
          </Section>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Container>
      </RaisedCard>
  </Layout>
)

export default IndexPage
