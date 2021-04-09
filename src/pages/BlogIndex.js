import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import alarm from 'images/alarm.png';
import bucket from 'images/bucket.jpg';
import car from 'images/car.jpg';
import branch_pipe from 'images/branchpipe.jpeg';
import co2 from 'images/CO2.jpg';
import fireball from 'images/fireball.jpg';
import foam from 'images/foam.jpg';
import hosepipe from 'images/hosepipe.jpg';
import lpg from 'images/lpgpipe.jpg';
import mask from 'images/mask.jpg';
import mcp from 'images/mcp.jpg';
import powder from 'images/powder.jpg';
import pressure from 'images/pressure.jpg';
import jacket from 'images/refjacket.jpg';
import rpipe from 'images/rubberpipe.jpg';
import shoes from 'images/shoes.jpg';
import sprink from 'images/sprinkler.jpg';
import chemical from 'images/wet-chemical.jpg';
import water from 'images/water.jpg';


const HeadingRow = tw.div `flex`;
const Heading = tw(SectionHeading)
`text-gray-900`;
const Posts = tw.div `mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div `
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg `}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-96 w-full bg-cover bg-center rounded-t-lg object-scale-down`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc: alarm,
      title:"Fire Alarm",
      description:"",
      featured: false
    },
    {
      imageSrc: bucket,
      title:"Fire Bucket",
      description:"",
      featured: false
    },
    {
      imageSrc: car,
      title:"Fire Extinguisher Small",
      description:"",
      featured: false
    },
    {
      imageSrc: branch_pipe,
      title:"Branched Hose Pipe",
      description:"",
      featured: false
    },
    {
      imageSrc: co2,
      title:"Fire Extinguisher CO2",
      description:"",
      featured: false
    },
    {
      imageSrc: foam,
      title:"Fire Extinguisher Foam",
      description:"",
      featured: false
    },
    {
      imageSrc: water,
      title:"Fire Extinguisher Water",
      description:"",
      featured: false
    },
    {
      imageSrc: powder,
      title:"Fire Extinguisher Powder",
      description:"",
      featured: false
    },
    {
      imageSrc: chemical,
      title:"Fire Extinguisher Chemical",
      description:"",
      featured: false
    },
    {
      imageSrc: rpipe,
      title:"Rubber Pipe",
      description:"",
      featured: false
    },
    {
      imageSrc: lpg,
      title:"LPG Pipe",
      description:"",
      featured: false
    },
    {
      imageSrc: sprink  ,
      title:"Sprinkler",
      description:"",
      featured: false
    },
    {
      imageSrc: fireball  ,
      title:"Fire Ball",
      description:"",
      featured: false
    },
    {
      imageSrc: hosepipe  ,
      title:"Hose Pipe",
      description:"",
      featured: false
    },
    {
      imageSrc: mask  ,
      title:"Mask",
      description:"",
      featured: false
    },
    {
      imageSrc: mcp  ,
      title:"Manual Control Panel",
      description:"",
      featured: false
    },
    {
      imageSrc: pressure  ,
      title:"Pressure Gauge",
      description:"",
      featured: false
    },
    {
      imageSrc: jacket,
      title:"Construction Jacket",
      description:"",
      featured: false
    },
    {
      imageSrc: shoes,
      title:"Saftey Shoes",
      description:"",
      featured: false
    },
  ]
}) => {
  const [visible, setVisible] = useState(6);
  const onLoadMoreClick = () => {
    setVisible(v => v +6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Our Products</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    
                    <Title>{post.title}</Title>
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com"
});