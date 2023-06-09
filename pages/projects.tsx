import {
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import {Section} from '../components'
import { WorkGridItem } from '../components'
import { Layout } from '../components/articles';

import thumbWearhighstreet from '../public/images/wearhighstreet.png';
import thumbXenturyLens from '../public/images/dhub.png';

const Projects = () => {
  return (
    <Layout>
    <Container minWidth="100%">
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="wearhighstreet" 
            title="Wear HighStreet" 
            thumbnail={thumbWearhighstreet}
          >
            Fashion as a service for the modern consumer.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem 
            id="dhub" 
            title="Dhub Education" 
            thumbnail={thumbXenturyLens}
          >
            An Education Consultancy Platform.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Projects