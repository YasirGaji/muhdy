/* eslint-disable jsx-a11y/alt-text */
import NextLink from 'next/link'
import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  Center,
  useColorModeValue,
  Link,
  Button,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { 
  Section,  
} from '../components'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components'
import { Layout } from '../components/articles'



const Home: NextPage = () => {
  return (
    <Layout>
      <Container minWidth="60%">
        <Box 
          borderRadius="lg" 
          color="white" 
          bg="#2F0B0D" 
          mb={6} p={3} 
          textAlign="center"
        >
          Hi, I Design
        </Box>

        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as='h2' variant="page-title">
              Muh'd - Bello Afariogun
            </Heading>
            <p>UI/UX & Product Designer</p>
          </Box>

          <Box 
            flexShrink={0} 
            mt={{base: 9, md: 0}}
            ml={{md: 6}} mb={20}
          >
            <Center>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src={useColorModeValue("/images/me.jpg", "/images/me.jpg")}
              alt="Yasir Gaji"
            />
            </Center>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h6" variant="section-title">
            Bio
          </Heading>
          <Paragraph>
          Adaptable Web and Digital Interface Designer rapidly onboards shifting user priorities to confirm up-to-date interfaces and services. Keen detector of changing user needs and integrator of required business tools. Eager to design platforms integrating both user desires and internal financial goals..{' '}

            <NextLink href="https://www.behance.net/belloafariogun" >
              <Link 
                color={useColorModeValue('blue.500', 'blue.300')}
              >
                Check out my behance
              </Link>
            </NextLink>.
          </Paragraph>

          <Box my={4}>
            <Center>
              <NextLink href="/projects" >
                <Button 
                  rightIcon={<ChevronRightIcon />} 
                  bg="#2F0B0D" color={useColorModeValue('gray.100', 'white')}
                >
                  Live Projects
                </Button>
              </NextLink>
            </Center> 
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h6' variant="section-title">
            Experience
          </Heading>

          <BioSection>
            <BioYear>2019 - NoraTech</BioYear>
            Graphics Designer 
          </BioSection>

          <BioSection>
            <BioYear>2021 - Ace Finance</BioYear>
            UI/UX Designer
          </BioSection>

          <BioSection>
            <BioYear>2022 - Dhub Education</BioYear>
            UI/UX Designer
          </BioSection>

          <BioSection>
            <BioYear>2023 - Wear HighStreet</BioYear>
            Product Designer
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h6" variant="section-title">
            I {useColorModeValue("🖤", "🤍")}
          </Heading>

          <BioSection>
            <BioYear>Tech</BioYear>
            
          </BioSection>
          <BioSection>
            <BioYear>Entertainment</BioYear>
            
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home



// Nigeria. I&apos;m a software engineer, product manager and writer. I love to build products that solve problems and make people&apos;s lives easier. I&apos;m also a big fan of open source and I&apos;m always looking for ways to contribute to the community. I&apos;m currently working on a few projects and I&apos;m always open to new opportunities. If you&apos;d like to get in touch, you can find me on Twitter or LinkedIn.