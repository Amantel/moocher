import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import MoocherBlock from "../components/moocherBlock";
export default ({ data }) => {
  const RE_FILE = /(.*)\|(.*)/;

  function capitalizeString(string) {
    return string.toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const moocherImages = data.allFile.edges.map(({ node })=> {

    const name = node.name;
    const extension = node.extension;
    const publicURL = node.publicURL;
    let datetime = new Date();
    let places = [];
    let placesText = '';
    const matchObj = RE_FILE.exec(name);
    if(matchObj) {
      places = matchObj[1].split('_').map(p=>capitalizeString(p));
      placesText = places.join(', ');
      datetime = new Date(matchObj[2]);
    }
    const obj = {
      name,
      extension,
      datetime,
      places,
      placesText,
      publicURL
    };
    return obj;

  });
  //style={{backgroundImage: "url(" + obj.publicURL + ")"}}
  return (
    <Layout>

    <div>
          {moocherImages.map((obj , index) => (
            <MoocherBlock  obj={obj} index={index}/>
          ))}

    </div>
    </Layout>

  )
}

export const query = graphql`
  query {
  allFile(filter: { sourceInstanceName: { eq: "moocher-faces" } }) {
    edges {
      node {
        name
        extension
        publicURL
      }
    }
  }
}
`
